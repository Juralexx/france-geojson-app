import React from 'react'
import styled from 'styled-components';
import { MapContainer, TileLayer, GeoJSON, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import { GeoJSONContext, SelectionContext } from '../AppContext';
import { getArborescence, getGeoJSONBounds, getZoom } from './functions/functions'
import { departements_old_regions, departements_regions, departments, old_regions, regions } from './functions/api'
import { geojsons } from './functions/imports';
import { doesStringIncludes } from './Utils'

const Leaflet = () => {
    const defaultCenter = [47.29580115135585, -0.034327425932688935]
    const { selected, setSelected, arborescence, setArborescence, hovered, setHovered } = React.useContext(SelectionContext)
    const { geoJSON, setGeoJSON, leaflet, setLeaflet } = React.useContext(GeoJSONContext)

    const fetchGeoJSON = (propertyName) => {
        if (regions.includes(propertyName)) {
            setGeoJSON(geojsons[propertyName]['GeoJSON'])
            setArborescence(getArborescence('Régions', propertyName))
        }
        else if (old_regions.includes(propertyName)) {
            setGeoJSON(geojsons[propertyName]['GeoJSON'])
            setArborescence(getArborescence('Anciennes régions', propertyName))
        }
        else if (departments.includes(propertyName)) {
            setGeoJSON(geojsons[propertyName]['GeoJSON'])
            setArborescence(getArborescence('Départements', propertyName))
        }
    }

    /**
     * 
     */

    const ReturnGeoJSON = () => {
        const map = useMap()

        const zoomToFeature = (event, layer) => {
            const nom = layer.feature.properties.nom

            if (regions.includes(nom) || old_regions.includes(nom)) {
                setSelected(prev => ({ ...prev, level: 1, name: 'Région' }))
                map.flyToBounds(event.target.getBounds(), { paddingTopLeft: [200, 0] });
            } else if (departments.includes(nom)) {
                setSelected(prev => ({ ...prev, level: 2, name: 'Département' }))
                map.flyToBounds(event.target.getBounds(), { paddingTopLeft: [200, 0] });
            } else {
                map.flyTo(defaultCenter, 6)
            }
        }

        React.useEffect(() => {
            if (leaflet.zoomAction === 'zoomOut') {
                if (arborescence.length > 0) {
                    let previous = arborescence[0].previous

                    if (!doesStringIncludes(previous, ['France', 'Régions', 'Anciennes régions', 'Départements'])) {
                        const geojsonBounds = getGeoJSONBounds(geoJSON)
                        map.flyToBounds([
                            [geojsonBounds[3], geojsonBounds[2]],
                            [geojsonBounds[1], geojsonBounds[0]]
                        ])
                    } else {
                        map.flyTo(defaultCenter, 6)
                    }

                    if (regions.includes(previous)) {
                        setArborescence(getArborescence('Régions', previous))
                        setSelected({ level: 1, name: 'Région' })
                    }
                    else if (old_regions.includes(previous)) {
                        setGeoJSON(geojsons[previous]['GeoJSON'])
                        setArborescence(getArborescence('Anciennes régions', previous))
                        setSelected({ level: 1, name: 'Région' })
                    }
                    else {
                        setSelected({ level: 0, name: 'Régions' })
                        setArborescence([])
                    }
                }
                setLeaflet(prev => ({ ...prev, zoomAction: '' }))
            }
        }, [])

 
        return (
            <GeoJSON
                data={geoJSON}
                onEachFeature={(__, layer) => {
                    layer.on({
                        click: event => {
                            let nom = layer.feature.properties.nom
                            if (regions.includes(nom) || old_regions.includes(nom) || departments.includes(nom)) {
                                setLeaflet({ zoomAction: 'zoomIn', zoom: getZoom(selected.level) })
                                zoomToFeature(event, layer)
                                fetchGeoJSON(nom)
                            }
                        },
                        mouseout: () => {
                            setHovered({ active: false, element: { type: '', region: '', departement: '', arrondissement: '', canton: '', commune: '', name: '' } })
                        },
                        mouseover: () => {
                            if (hovered.element.name !== layer.feature.properties.nom) {
                                switch (selected.name) {
                                    case ('Régions' || 'Anciennes régions'):
                                        return setHovered({
                                            active: true,
                                            element: {
                                                ...hovered.element,
                                                type: 'Région',
                                                region: layer.feature.properties.nom,
                                                departement: '',
                                                name: layer.feature.properties.nom
                                            }
                                        })
                                    case 'Départements':
                                        return setHovered({
                                            active: true,
                                            element: {
                                                type: 'Département',
                                                region: departements_regions.find(reg => reg['Départements'].includes(layer.feature.properties.nom))['Nom'],
                                                departement: layer.feature.properties.nom,
                                                name: layer.feature.properties.nom
                                            }
                                        })
                                    case 'Arrondissements':
                                        return setHovered({
                                            active: true,
                                            element: {
                                                type: 'Arrondissement',
                                                region: arborescence[0].previous,
                                                departement: arborescence[1].name,
                                                arrondissement: layer.feature.properties.nom,
                                                name: layer.feature.properties.nom
                                            }
                                        })
                                    case 'Cantons':
                                        return setHovered({
                                            active: true,
                                            element: {
                                                type: 'Canton',
                                                region: arborescence[0].previous,
                                                departement: arborescence[1].name,
                                                canton: layer.feature.properties.nom,
                                                name: layer.feature.properties.nom
                                            }
                                        })
                                    case 'Communes':
                                        return setHovered({
                                            active: true,
                                            element: {
                                                type: 'Commune',
                                                region: arborescence[0].previous,
                                                departement: arborescence[1].name,
                                                commune: layer.feature.properties.nom,
                                                name: layer.feature.properties.nom
                                            }
                                        })
                                    default:
                                        break;
                                }
                            }
                        }
                    });
                }}
            />
        );
    };

    /**
     * 
     */

    return (
        <LeafletContainer>
            <MapContainer
                key={null}
                center={defaultCenter}
                zoom={leaflet.zoom}
                minZoom={6}
                boundsOptions={{
                    paddingTopLeft: [500, 0],
                    paddingBottomRight: [500, 0],
                }}
                style={{ width: '100vw', height: '100vh' }}
            >
                <TileLayer
                    attribution='<a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                    url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                />
                {Object.keys(geoJSON).length > 0 &&
                    <ReturnGeoJSON />
                }
            </MapContainer>
        </LeafletContainer>
    )
}

export default Leaflet

/**
 * 
 */

const LeafletContainer = styled.div`
    position : relative;
    width    : 100vw;
    height   : 100vh;

    .leaflet-tile-pane {
        -webkit-filter: grayscale(100%);
        filter: grayscale(100%);
    }
    .leaflet-control-container {
        .leaflet-top.leaflet-left {
            position : absolute;
            left     : auto;
            right    : 10px;
            top      : auto;
            bottom   : 25px;
        } 
    }
    .leaflet-container {
        a {
            color : var(--primary);
        }
    }
    .leaflet-touch {
        .leaflet-bar {
            border        : none;
            box-shadow    : var(--shadow-smooth), var(--shadow-relief);
            span {
                color : var(--primary);
            }
            a {
                &:first-child {
                    border-top-left-radius  : var(--rounded-sm);
                    border-top-right-radius : var(--rounded-sm);
                }
                &:last-child {
                    border-bottom-left-radius  : var(--rounded-sm);
                    border-bottom-right-radius : var(--rounded-sm);
                }
            }
        }
    }
    .leaflet-interactive {
        stroke       : var(--primary-light);
        fill         : var(--primary-light);
        fill-opacity : 0.3;

        &:hover {
            fill-opacity : 0.5;
        }
    }
`
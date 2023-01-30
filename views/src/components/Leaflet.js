import React from 'react'
import styled from 'styled-components';
import { MapContainer, TileLayer, GeoJSON, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import { GeoJSONContext, LoadingContext, SelectionContext } from '../AppContext';
import { departements_regions, departments, getZoom, old_regions, regions } from './functions/functions'
import { geojsons } from './functions/imports';

const Leaflet = () => {
    const defaultCenter = [46.873467013745916, 2.5836305570248217]

    const { selected, setSelected, arborescence, setArborescence } = React.useContext(SelectionContext)
    const { geoJSON, setGeoJSON, leaflet, setLeaflet } = React.useContext(GeoJSONContext)
    const { setLoading } = React.useContext(LoadingContext)

    const findGeoJSON = (property) => {
        if (regions.includes(property)) {
            const region = geojsons[property]
            setGeoJSON(region['GeoJSON'])
            setArborescence([{
                previous: 'Régions',
                value: geojsons['Régions']
            }, {
                name: property,
                value: region['GeoJSON']
            }, {
                name: 'Départements',
                value: region['Départements'],
            }, {
                name: 'Arrondissements',
                value: region['Arrondissements'],
            }, {
                name: 'Cantons',
                value: region['Cantons'],
            }, {
                name: 'Communes',
                value: region['Communes'],
            }])
        } else if (old_regions.includes(property)) {
            const region = geojsons[property]
            setGeoJSON(region['GeoJSON'])
            setArborescence([{
                previous: 'Anciennes régions',
                value: geojsons['Anciennes régions']
            }, {
                name: property,
                value: region['GeoJSON']
            }, {
                name: 'Départements',
                value: region['Départements'],
            }, {
                name: 'Arrondissements',
                value: region['Arrondissements'],
            }, {
                name: 'Cantons',
                value: region['Cantons'],
            }, {
                name: 'Communes',
                value: region['Communes'],
            }])
        } else if (departments.includes(property)) {
            const department = geojsons[property]
            const region = departements_regions.find(reg => reg['Départements'].some(dep => dep === property))
            setGeoJSON(department['GeoJSON'])
            setArborescence([{
                previous: region['Nom'],
                value: geojsons[region['Nom']]['GeoJSON']
            }, {
                name: property,
                value: department['GeoJSON']
            }, {
                name: 'Arrondissements',
                value: department['Arrondissements'],
            }, {
                name: 'Cantons',
                value: department['Cantons'],
            }, {
                name: 'Communes',
                value: department['Communes'],
            }])
        }
    }

    /**
     * 
     */

    const ReturnGeoJSON = () => {
        const map = useMap()

        const zoomToFeature = (event, layer) => {
            const { lat, lng } = event.target.getCenter()
            const nom = layer.feature.properties.nom

            if (regions.includes(nom) || old_regions.includes(nom)) {
                setSelected(prev => ({ ...prev, level: 2, name: 'Régions' }))
                map.flyTo([lat, (lng - 0.5)], 8)
            } else if (departments.includes(nom)) {
                setSelected(prev => ({ ...prev, level: 3, name: 'Départements' }))
                map.flyTo([lat, (lng - 0.5)], 10)
            } else {
                map.flyTo(defaultCenter, 6)
            }
        }

        React.useEffect(() => {
            if (leaflet.zoomAction === 'zoomOut') {
                map.flyTo(map.getCenter(), leaflet.zoom)
            }
        }, [leaflet])

        return (
            <GeoJSON
                data={geoJSON}
                onEachFeature={(__, layer) => {
                    layer.on({
                        click: (event) => {
                            setLeaflet({ zoomAction: 'zoomIn', zoom: getZoom(selected.level) })
                            zoomToFeature(event, layer)
                            findGeoJSON(layer.feature.properties.nom)
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
                center={[46.873467013745916, 2.5836305570248217]}
                zoom={leaflet.zoom}
                minZoom={6}
                whenCreated={map => setLoading(false)}
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
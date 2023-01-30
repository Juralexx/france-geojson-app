import React from 'react'
import { MapContainer, TileLayer, GeoJSON, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import styled from 'styled-components';
import { GeoJSONContext, SelectionContext } from '../AppContext';
import { departments, getZoom, old_regions, regions } from './functions/functions'
import { geojsons } from './functions/imports';

const Leaflet = () => {
    const defaultCenter = [46.873467013745916, 2.5836305570248217]

    const { selected, setSelected, arborescence, setArborescence } = React.useContext(SelectionContext)
    const { geoJSON, setGeoJSON, leaflet, setLeaflet } = React.useContext(GeoJSONContext)

    const findGeoJSON = (property) => {
        if (regions.includes(property)) {
            const region = geojsons[property]
            setGeoJSON(region['GeoJSON'])
            setArborescence([{
                previous: 'France',
                value: geojsons['France']
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
        }
    }

    const ReturnGeoJSON = () => {
        const map = useMap()

        const zoomToFeature = (event, layer) => {
            let zm = getZoom(selected.type)
            const { lat, lng } = event.target.getCenter()
            const nom = layer.feature.properties.nom

            if (regions.includes(nom) || old_regions.includes(nom)) {
                setSelected(prev => ({ ...prev, type: 'precise', name: 'Régions' }))
                map.flyTo([lat, (lng - 0.5)], 8)
            } else if (departments.includes(nom)) {
                setSelected(prev => ({ ...prev, type: 'precise', name: 'Départements' }))
                map.flyTo([lat, (lng - 0.5)], 10)
            } else {
                map.flyTo([lat, (lng - 0.5)], 6)
            }
        }

        React.useEffect(() => {
            if (leaflet.zoomAction === 'zoomOut') {
                map.flyTo(defaultCenter, leaflet.zoom)
            }
        }, [leaflet])

        return (
            <GeoJSON
                data={geoJSON}
                onEachFeature={(__, layer) => {
                    layer.on({
                        click: (event) => {
                            setLeaflet({ zoomAction: 'zoomIn', zoom: getZoom(selected.type) })
                            zoomToFeature(event, layer)
                            findGeoJSON(layer.feature.properties.nom)
                        }
                    });
                }}
            />
        );
    };

    return (
        <LeafletContainer>
            <MapContainer
                key={null}
                center={[46.873467013745916, 2.5836305570248217]}
                zoom={leaflet.zoom}
                minZoom={6}
                whenCreated={map => setInterval(() => map.invalidateSize(), 100)}
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

const LeafletContainer = styled.div`
    position : relative;
    width    : 100vw;
    height   : 100vh;

    .leaflet-tile-pane {
        -webkit-filter: grayscale(100%);
        filter: grayscale(100%);
    }
    .leaflet-control-container {
        display : none;
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

const LoaderContainer = styled.div`
    position         : absolute;
    top              : 0;
    left             : 0;
    width            : 100%;
    height           : 100%;
    background-color : rgba(255, 255, 255, 0.3);
    backdrop-filter  : blur(5px);
    z-index          : 1000;
`
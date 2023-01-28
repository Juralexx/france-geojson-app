import React from 'react'
import { MapContainer, TileLayer, GeoJSON, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import { randomNbLtID } from './Utils'
import SemiCicle from './loader/SemiCicle'
import styled from 'styled-components';
import { DatasContext, SearchContext, SelectionContext } from '../AppContext';

const Leaflet = () => {
    const { selected, setSelected } = React.useContext(SelectionContext)
    const { search, setSearch } = React.useContext(SearchContext)
    const { datas, setDatas } = React.useContext(DatasContext)

    const [isLoading, setLoading] = React.useState(false)
    const [geoJSON, setGeoJSON] = React.useState(datas.regions)

    React.useEffect(() => {
        if (datas.regions) {
            setGeoJSON(datas.new_regions)
        }
    }, [datas.regions])

    const ReturnGeoJSON = () => {
        const map = useMap()
        const zoomToFeature = e => map.fitBounds(e.target.getBounds());

        return (
            <GeoJSON
                data={datas.regions}
                key={randomNbLtID(10)}
                onEachFeature={(__, layer) => {
                    layer.on({
                        click: e => {
                            zoomToFeature(e)
                        }
                    });
                }}
            />
        );
    };

    return (
        <LeafletContainer>
            {!isLoading ? (
                <MapContainer
                    key={null}
                    center={[46.873467013745916, 2.5836305570248217]}
                    zoom={6}
                    minZoom={6}
                    whenCreated={map => setInterval(() => { map.invalidateSize() }, 100)}
                    style={{ width: '100vw', height: '100vh' }}
                >
                    <TileLayer
                        attribution='<a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                    />
                        <ReturnGeoJSON />
                </MapContainer>
            ) : (
                <MapContainer
                    center={[46.873467013745916, 2.5836305570248217]}
                    zoom={5}
                    minZoom={5}
                    maxZoom={5}
                    dragging="false"
                    style={{ width: '100vw', height: '100vh' }}
                >
                    <TileLayer
                        attribution='<a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                    />
                    <LoaderContainer>
                        <SemiCicle style={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            width: 60,
                            height: 60,
                            zIndex: 3000
                        }}
                            strokeWidth="4"
                            stroke="rgba(0, 0, 0, 1)"
                        />
                    </LoaderContainer>
                </MapContainer>
            )}
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
        stroke         : var(--primary-light);
        fill           : var(--primary);
        fill-opacity   : 0.3;

        &:hover {
            fill-opacity: 0.5;
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
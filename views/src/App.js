import React from "react";
import axios from 'axios';
import styled from "styled-components";
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, useMap } from 'react-leaflet'
import TopoJSON from './components/TopoJSON'
import EmptyMap from './components/EmptyMap'
import { ThemeContext } from './components/theme/ThemeContextWrapper';
import { LeafletContext, SearchContext, SelectionContext } from "./AppContext";
import SearchCard from "./components/SearchCard";
import Logo from "./components/tools/Logo";
import France from "./components/tools/France";
import Sidebar from "./components/Sidebar";
import BigLoader from "./components/loader/BigLoader";
import ThemeToggle from "./components/theme/ThemeToggle";
import { doesAllArraysInElementContainValues, isEmpty, doesStringIncludes } from "./components/Utils";
import { departements_regions, departments, old_regions, regions } from './components/functions/api'
import { getArborescence, getGeoJSONBounds } from './components/functions/functions'
import useMediaQuery from "./components/functions/hooks/useMediaQuery";

function App() {
    const sm = useMediaQuery('(max-width: 768px)')
    const { theme } = React.useContext(ThemeContext)
    // Leaflet map object reference
    const leafletMap = React.useRef(null)
    // All geojsons datas
    const [geojsons, setGeojsons] = React.useState({})
    // Leaflet geojson object
    const [geoJSON, setGeoJSON] = React.useState({})
    // Axios response progress
    const [requestProgress, setRequestProgress] = React.useState(0)

    React.useEffect(() => {
        if (Object.keys(geojsons).length === 0) {
            const fetchGeojsons = async () => {
                await axios({
                    method: 'GET',
                    url: `${process.env.REACT_APP_API_URL}api/`,
                    headers: {
                        'Authorization': process.env.REACT_APP_ACCESS_TOKEN
                    },
                    onDownloadProgress: (progressEvent) => {
                        const total = 79191931
                        const current = progressEvent.loaded
                        setRequestProgress(Math.floor(current / total * 100))
                    }
                })
                    .then(async res => {
                        setGeojsons(res.data)
                        setGeoJSON(res.data['Régions'])
                    })
                    .catch(err => console.log(err))
            }
            fetchGeojsons()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    // Level and element name selected
    // France - 0 , Régions - 1, Anciennes Régions - 1, Départements - 2, Arrodissements - 3, Canton - 4, Communes - 4, Commune - 4
    // And the selected commune on commune search
    const [selected, setSelected] = React.useState({ level: 0, name: 'Régions', selectedCommune: {} })
    // Arborescence card
    const [arborescence, setArborescence] = React.useState([])
    // Display location informations on geojson element hover
    const [hovered, setHovered] = React.useState({ active: false, element: { type: '', region: '', departement: '', arrondissement: '', canton: '', commune: '' } })

    // Open sidebar
    const [open, setOpen] = React.useState(false)

    // Fetch selected location informations
    const fetchLocation = async (location) => {
        try {
            const paths = [
                `${process.env.REACT_APP_API_LOCATIONS_URL}search/locations/${location}`,
                `${process.env.REACT_APP_API_GOUV_URL}?q=${location}&limit=1`,
                `${process.env.REACT_APP_API_LOCATIONS_URL}search/locations/geolocation/${location}`
            ]
            const response = paths.map(async path => {
                return await axios
                    .get(encodeURI(path))
                    .then(res => res.data)
                    .catch(err => console.error(err))
            })
            Promise.all(response).then(res => {
                if (doesAllArraysInElementContainValues(res)) {
                    if (!isEmpty(res[0]) && !isEmpty(res[1]) && !isEmpty(res[2])) {
                        const geojson = res[2][0]
                        const communeInfos = Object.assign(res[0][0].fields, { ...res[1].features[0].properties })
                        setGeoJSON(geojson)
                        setArborescence(getArborescence('Départements', communeInfos.dep_nom, geojsons))
                        setSelected({ level: 2, name: 'Commune', selectedCommune: communeInfos })
                        const geojsonBounds = getGeoJSONBounds(geojson)
                        leafletMap.current.flyToBounds([
                            [geojsonBounds[1], geojsonBounds[0]],
                            [geojsonBounds[3], geojsonBounds[2]]
                        ], { paddingTopLeft: sm ? [0, 200] : [0, 0] })
                    } else return
                } else return
            })
        } catch (err) {
            console.error(err)
        }
    }

    const defaultCenter = !sm ? [47.29580115135585, -0.034327425932688935] : [49.85334179033648, 2.233744701858062]

    const [bounds, setBounds] = React.useState(getGeoJSONBounds(geoJSON))

    const fitLayerBounds = (gj, isCommune = false) => {
        if (arborescence.length > 0) {
            let previous = arborescence[0].previous

            if (!doesStringIncludes(previous, ['France', 'Régions', 'Anciennes régions', 'Départements'])) {
                const geojsonBounds = getGeoJSONBounds(gj)
                leafletMap.current.flyToBounds([
                    [geojsonBounds[1], geojsonBounds[0]],
                    [geojsonBounds[3], geojsonBounds[2]]
                ], { paddingTopLeft: sm ? [0, 200] : [0, 0] })
            } else leafletMap.current.flyTo(defaultCenter, !sm ? 6 : 5)

            if (!isCommune) {
                if (regions.includes(previous)) {
                    setArborescence(getArborescence('Régions', previous, geojsons))
                    setSelected({ level: 1, name: 'Région' })
                }
                else if (old_regions.includes(previous)) {
                    setArborescence(getArborescence('Anciennes régions', previous, geojsons))
                    setSelected({ level: 1, name: 'Région' })
                }
                else {
                    setSelected({ level: 0, name: 'Régions' })
                    setArborescence([])
                }
            }
        }
    }

    /**
     * 
     */

    const fetchGeoJSON = (propertyName) => {
        if (regions.includes(propertyName)) {
            setGeoJSON(geojsons[propertyName]['GeoJSON'])
            setArborescence(getArborescence('Régions', propertyName, geojsons))
        }
        else if (old_regions.includes(propertyName)) {
            setGeoJSON(geojsons[propertyName]['GeoJSON'])
            setArborescence(getArborescence('Anciennes régions', propertyName, geojsons))
        }
        else if (departments.includes(propertyName)) {
            setGeoJSON(geojsons[propertyName]['GeoJSON'])
            setArborescence(getArborescence('Départements', propertyName, geojsons))
        }
    }

    /**
     * 
     */

    const ReturnGeoJSON = () => {
        const map = useMap()
        leafletMap.current = map

        const zoomToFeature = (event, layer) => {
            const nom = layer.feature.properties.nom

            if (regions.includes(nom) || old_regions.includes(nom))
                setSelected(prev => ({ ...prev, level: 1, name: 'Région' }))
            else if (departments.includes(nom))
                setSelected(prev => ({ ...prev, level: 2, name: 'Département' }))

            setBounds(event.target.getBounds())
            map.flyToBounds(event.target.getBounds(), { paddingTopLeft: sm ? [0, 200] : [0, 0] })
        }

        return (
            <TopoJSON
                data={geoJSON}
                onEachFeature={(__, layer) => {
                    layer.on({
                        click: event => {
                            let nom = layer.feature.properties.nom
                            if (regions.includes(nom) || old_regions.includes(nom) || departments.includes(nom)) {
                                zoomToFeature(event, layer)
                                fetchGeoJSON(nom)
                            } else if (selected.name === 'Communes') {
                                fetchLocation(layer.feature.properties.nom)
                            }
                        },
                        mouseout: () => {
                            if (!sm) {
                                setHovered({ active: false, element: { type: '', region: '', departement: '', arrondissement: '', canton: '', commune: '', name: '' } })
                            }
                        },
                        mouseover: () => {
                            if (!sm) {
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
                        }
                    });
                }}
            />
        );
    };

    return (
        <RootContainer>
            <LeafletContainer>
                {Object.keys(geojsons).length > 0 ? (
                    <React.Fragment>
                        <LeafletContext.Provider value={{ geojsons, geoJSON, setGeoJSON, map: leafletMap?.current, fitLayerBounds, sm }}>
                            <SelectionContext.Provider value={{ selected, setSelected, arborescence, setArborescence, hovered, setHovered }}>
                                <SearchContext.Provider value={{ fetchLocation, open, setOpen }}>
                                    <SearchContainer>
                                        <SearchCard />
                                    </SearchContainer>
                                </SearchContext.Provider>
                            </SelectionContext.Provider>
                        </LeafletContext.Provider>
                        <MapContainer
                            key={null}
                            center={defaultCenter}
                            zoom={!sm ? 6 : 5}
                            minZoom={5}
                            style={{ width: '100vw', height: '100%' }}
                            bounds={bounds}
                            boundsOptions={{ paddingTopLeft: sm ? [0, 200] : [0, 0] }}
                        >
                            <TileLayer
                                className="map-tiles"
                                attribution='<a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                                url={'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'}
                            />
                            {Object.keys(geoJSON).length > 0 && (
                                <ReturnGeoJSON />
                            )}
                        </MapContainer>
                        <France />
                        <Logo />
                        <ThemeToggle />
                        <Sidebar open={open} setOpen={setOpen} />
                    </React.Fragment>
                ) : (
                    <React.Fragment>
                        <BigLoader
                            requestProgress={requestProgress}
                        />
                        <EmptyMap
                            center={defaultCenter}
                            zoom={!sm ? 6 : 5}
                            bounds={bounds}
                            boundsOptions={{ paddingTopLeft: sm ? [0, 200] : [0, 0] }}
                        />
                    </React.Fragment>
                )}
            </LeafletContainer>
        </RootContainer>
    );
}

export default App;

const RootContainer = styled.div`
    position   : relative;
    height     : 100vh;
    width      : 100vw;
    background : var(--content);

    @media(max-width: 768px) {
        display        : flex;
        flex-direction : column;
    }

    .circle-loader {
        .path {
            stroke : var(--primary);
        }
    }
`

const SearchContainer = styled.div`
    position  : absolute;
    top       : 20px;
    left      : 20px;
    width     : 350px;
    max-width : 350px;
    z-index   : 1000;

    @media(max-width: 768px) {
        top       : 0;
        left      : 0;
        width     : 100vw;
        max-width : 100vw;
    }
`

const LeafletContainer = styled.div`
    position : relative;
    width    : 100vw;
    height   : 100vh;
    z-index  : 1;

    @media(max-width: 768px) {
        flex-grow : 1;
        height    : 100%;
    }

    .map-tiles {
        height : 100%;
        width  : 100%;
    }

    .leaflet-tile-pane {
        -webkit-filter : grayscale(100%);
        filter         : grayscale(100%);
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
        .leaflet-control-attribution {
            background-color : var(--content);
        }
        a {
            color : var(--primary);
        }
    }
    .leaflet-touch {
        .leaflet-bar {
            border     : none;
            box-shadow : var(--shadow-smooth), var(--shadow-relief);
            span {
                color : var(--primary);
            }
            a {
                background-color : var(--content);
                &:first-child {
                    border-bottom           : 1px solid var(--primary);
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
        stroke-width : 2px;
        fill         : var(--primary-light);
        fill-opacity : 0.3;

        &:hover {
            fill-opacity : 0.5;
        }
    }
`
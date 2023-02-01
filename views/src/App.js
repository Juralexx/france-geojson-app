import React from "react";
import axios from 'axios';
import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Leaflet from "./components/Leaflet";
import SearchCard from "./components/SearchCard";
import Arborescence from "./components/Arborescence";
import Logo from "./components/tools/Logo";
import France from "./components/tools/France";
import Sidebar from "./components/Sidebar";
import BigLoader from "./components/loader/BigLoader";
import ThemeToggle from "./components/theme/ThemeToggle";
import { LeafletContext, SearchContext, SelectionContext } from "./AppContext";
import { getArborescence } from "./components/functions/functions";
import { doesAllArraysInElementContainValues } from "./components/Utils";

function App() {
    // All geojsons datas
    const [geojsons, setGeojsons] = React.useState({})
    // Leaflet geojson object
    const [geoJSON, setGeoJSON] = React.useState({})
    // Axios response progress
    const [requestProgress, setRequestProgress] = React.useState(false)

    React.useEffect(() => {
        if (Object.keys(geojsons).length === 0) {
            const fetchGeojsons = async () => {
                await axios
                    .get(`${process.env.REACT_APP_API_URL}api/`, {
                        onDownloadProgress: (progressEvent) => !requestProgress ? setRequestProgress(true) : () => { }
                    })
                    .then(res => {
                        setGeojsons(res.data)
                        setGeoJSON(res.data['Régions'])
                    })
                    .catch(err => console.log(err))
            }
            fetchGeojsons()
        }
    }, [geojsons])

    // Level and element name selected
    // France - 0 , Régions - 1, Anciennes Régions - 1, Départements - 2, Arrodissements - 3, Canton - 4, Communes - 4, Commune - 4
    const [selected, setSelected] = React.useState({ level: 0, name: 'Régions' })
    // Leaflet properties
    const [leaflet, setLeaflet] = React.useState({ zoomAction: '', zoom: 6 })
    // Arborescence card
    const [arborescence, setArborescence] = React.useState([])
    // Search object
    const [search, setSearch] = React.useState({ state: false, query: '', results: [], isLoading: false, locationSelected: {} })
    // Display location informations on geojson element hover
    const [hovered, setHovered] = React.useState({
        active: false,
        element: {
            type: '',
            region: '',
            departement: '',
            arrondissement: '',
            canton: '',
            commune: ''
        }
    })

    // Open sidebar
    const [open, setOpen] = React.useState(false)

    // Fetch selected location informations
    const fetchLocation = async (location) => {
        try {
            const paths = [
                `${process.env.REACT_APP_API_LOCATIONS_URL}api/locations/${location}`,
                `${process.env.REACT_APP_API_GOUV_URL}?q=${location}&limit=1`,
                `${process.env.REACT_APP_API_LOCATIONS_URL}api/locations/geolocation/${location}`
            ]
            const response = paths.map(async path => {
                return await axios
                    .get(encodeURI(path))
                    .then(res => res.data)
                    .catch(err => console.error(err))
            })
            Promise.all(response).then(res => {
                if (doesAllArraysInElementContainValues(res)) {
                    setSearch(data => ({ ...data, locationSelected: Object.assign(res[0].fields, { ...res[1].features[0].properties }) }))
                    setGeoJSON(res[2])
                    setArborescence(getArborescence('Départements', res[0].fields.dep_nom, geojsons))
                    setLeaflet(prev => ({ ...prev, zoomAction: 'zoomIn' }))
                } else return
            })
        } catch (err) {
            console.error(err)
        }
    }

    /**
     * 
     */

    return (
        <RootContainer>
            <GlobalStyles />
            {Object.keys(geojsons).length > 0 ? (
                <LeafletContext.Provider
                    value={{ geojsons, geoJSON, setGeoJSON, leaflet, setLeaflet }}
                >
                    <SelectionContext.Provider
                        value={{ selected, setSelected, arborescence, setArborescence, hovered, setHovered }}
                    >
                        <SearchContext.Provider
                            value={{ search, setSearch, fetchLocation, open, setOpen }}
                        >
                            <Leaflet />
                            <SearchContainer>
                                <SearchCard />
                                <Arborescence />
                            </SearchContainer>
                        </SearchContext.Provider>
                        <France />
                        <Logo />
                        <ThemeToggle />
                        <Sidebar
                            open={open}
                            setOpen={setOpen}
                        />
                    </SelectionContext.Provider>
                </LeafletContext.Provider>
            ) : (
                <BigLoader
                    requestProgress={requestProgress}
                />
            )}
        </RootContainer>
    );
}

export default App;

const RootContainer = styled.div`
    position   : relative;
    min-height : 100vh;
    width      : 100vw;
    background : var(--content);

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
    width     : 30%;
    min-width : 300px;
    max-width : 350px;
`
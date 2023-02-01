import React from "react";
import axios from "axios";
import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Leaflet from "./components/Leaflet";
import SearchCard from "./components/SearchCard";
import Arborescence from "./components/Arborescence";
import { LeafletContext, SearchContext, SelectionContext } from "./AppContext";
import { getArborescence } from "./components/functions/functions";
import ThemeToggle from "./components/theme/ThemeToggle";
import ThemeContextWrapper from "./components/theme/ThemeContextWrapper";
import Logo from "./components/tools/Logo";
import France from "./components/tools/France";
import Head from "./Head";
import { HelmetProvider } from "react-helmet-async";
import Sidebar from "./components/Sidebar";
import { doesAllArraysInElementContainValues } from "./components/Utils";
import SemiCicle from "./components/loader/SemiCicle";

function App() {
    const [geojsons, setGeojsons] = React.useState({})

    React.useEffect(() => {
        const fetchGeojsons = async () => {
            await axios
                .get(`${process.env.REACT_APP_API_URL}api/`)
                .then(res => setGeojsons(res.data))
                .catch(err => console.log(err))
        }
        fetchGeojsons()
    }, [])

    // Level and element name selected
    // France - 0 , Régions - 1, Anciennes Régions - 1, Départements - 2, Arrodissements - 3, Canton - 4, Communes - 4, Commune - 4
    const [selected, setSelected] = React.useState({ level: 0, name: 'Régions' })

    // Arborescence card
    const [arborescence, setArborescence] = React.useState([])

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

    // Search object
    const [search, setSearch] = React.useState({
        state: false,
        query: '',
        results: [],
        isLoading: false,
        locationSelected: {}
    })

    // Open sidebar
    const [open, setOpen] = React.useState(false)

    // Leaflet geojson object
    const [geoJSON, setGeoJSON] = React.useState(geojsons['Régions'] || {})

    // Leaflet properties
    const [leaflet, setLeaflet] = React.useState({ zoomAction: '', zoom: 6 })

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
                    setArborescence(getArborescence('Départements', res[0].fields.dep_nom))
                } else return
            })
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <ThemeContextWrapper>
            <HelmetProvider>
                <Head />
            </HelmetProvider>
            {Object.keys(geojsons).length > 0 ? (
                <LeafletContext.Provider value={{ geojsons, geoJSON, setGeoJSON, leaflet, setLeaflet }}>
                    <SelectionContext.Provider value={{ selected, setSelected, arborescence, setArborescence, hovered, setHovered }}>
                        <RootContainer>
                            <GlobalStyles />
                            <SearchContext.Provider value={{ search, setSearch, fetchLocation, open, setOpen }}>
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
                        </RootContainer>
                    </SelectionContext.Provider>
                </LeafletContext.Provider>
            ) : (
                <SemiCicle />
            )}
        </ThemeContextWrapper>
    );
}

export default App;

/**
 * 
 */

const RootContainer = styled.div`
    position       : relative;
    min-height     : 100vh;
    width          : 100vw;
`

const SearchContainer = styled.div`
    position  : absolute;
    top       : 20px;
    left      : 20px;
    width     : 30%;
    min-width : 300px;
    max-width : 350px;
`
import React from "react";
import axios from "axios";
import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Leaflet from "./components/Leaflet";
import SearchCard from "./components/SearchCard";
import Arborescence from "./components/Arborescence";
import { LeafletContext, SearchContext, SelectionContext } from "./AppContext";
import { geojsons } from "./components/functions/imports";
import { getArborescence } from "./components/functions/functions";
import Logo from "./components/Logo";
import ThemeToggle from "./components/theme/ThemeToggle";
import ThemeContextWrapper from "./components/theme/ThemeContextWrapper";

function App() {
    // Level and element name selected
    // France - 0 , Régions - 1, Anciennes Régions - 1, Départements - 2, Arrodissements - 3, Canton - 4, Communes - 4, Commune - 4
    const [selected, setSelected] = React.useState({
        level: 0,
        name: 'Régions'
    })

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

    // Leaflet geojson object
    const [geoJSON, setGeoJSON] = React.useState(geojsons['Régions'])

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
                setSearch(data => ({ ...data, locationSelected: Object.assign(res[0].fields, { ...res[1].features[0].properties }) }))
                setGeoJSON(res[2])
                setArborescence(getArborescence('Départements', res[0].fields.dep_nom))
                setSelected({ level: 3, name: 'Commune' })
            })
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <ThemeContextWrapper>
            <LeafletContext.Provider value={{ geoJSON, setGeoJSON, leaflet, setLeaflet }}>
                <SelectionContext.Provider value={{ selected, setSelected, arborescence, setArborescence, hovered, setHovered }}>
                    <RootContainer>
                        <GlobalStyles />
                        <Leaflet />
                        <SearchContext.Provider value={{ search, setSearch, fetchLocation }}>
                            <SearchContainer>
                                <SearchCard />
                                <Arborescence />
                            </SearchContainer>
                        </SearchContext.Provider>
                        <Logo />
                        <ThemeToggle />
                    </RootContainer>
                </SelectionContext.Provider>
            </LeafletContext.Provider>
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
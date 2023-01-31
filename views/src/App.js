import React from "react";
import styled from "styled-components";
import { GeoJSONContext, SearchContext, SelectionContext } from "./AppContext";
import GlobalStyles from "./styles/GlobalStyles";
import Leaflet from "./components/Leaflet";
import SearchCard from "./components/SearchCard";
import Arborescence from "./components/Arborescence";
import { geojsons } from "./components/functions/imports";

function App() {
    const [selected, setSelected] = React.useState({
        level: 0,
        name: 'Régions' // France, Régions, Anciennes Régions, Arrodissements, Cantons, Communes
    })

    const [arborescence, setArborescence] = React.useState([])

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

    const [search, setSearch] = React.useState({
        state: false,
        query: '',
        results: [],
        isLoading: false
    })

    const [geoJSON, setGeoJSON] = React.useState(geojsons['Régions'])
    const [leaflet, setLeaflet] = React.useState({ zoomAction: '', zoom: 6 })

    return (
        <GeoJSONContext.Provider value={{ geoJSON, setGeoJSON, leaflet, setLeaflet }}>
            <SelectionContext.Provider value={{ selected, setSelected, arborescence, setArborescence, hovered, setHovered }}>
                <RootContainer >
                    <GlobalStyles />
                    <Leaflet />
                    <SearchContext.Provider value={{ search, setSearch }}>
                        <SearchContainer>
                            <SearchCard />
                            <Arborescence />
                        </SearchContainer>
                    </SearchContext.Provider>
                </RootContainer>
            </SelectionContext.Provider>
        </GeoJSONContext.Provider>
    );
}

export default App;

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
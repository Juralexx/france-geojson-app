import React from "react";
import { GeoJSONContext, LoadingContext, SearchContext, SelectionContext } from "./AppContext";
import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Leaflet from "./components/Leaflet";
import SearchCard from "./components/SearchCard";
import { geojsons } from "./components/functions/imports";

function App() {
    const [selected, setSelected] = React.useState({
        type: 'all',
        name: 'Régions' // France, Régions, Anciennes Régions, Arrodissements, Cantons, Communes
    })
    const [arborescence, setArborescence] = React.useState([])

    const [search, setSearch] = React.useState({ state: false, query: '', results: [], isLoading: false })

    const [geoJSON, setGeoJSON] = React.useState(geojsons['Régions'])
    const [leaflet, setLeaflet] = React.useState({ zoomAction: '', zoom: 6 })
    const [isLoading, setLoading] = React.useState(true)

    React.useEffect(() => {
        if (isLoading) {
            const timer = setTimeout(() => setLoading(false), 1000)
            return () => clearTimeout(timer)
        }
    }, [isLoading])

    return (
        <GeoJSONContext.Provider value={{ geoJSON, setGeoJSON, leaflet, setLeaflet }}>
            <SelectionContext.Provider value={{ selected, setSelected, arborescence, setArborescence }}>
                <SearchContext.Provider value={{ search, setSearch }}>
                    <LoadingContext.Provider value={{ isLoading, setLoading }}>
                        <RootContainer >
                            <GlobalStyles />
                            <Leaflet />
                            <SearchCard />
                        </RootContainer>
                    </LoadingContext.Provider>
                </SearchContext.Provider>
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
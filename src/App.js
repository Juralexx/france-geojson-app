import React from "react";
import { DatasContext, SearchContext, SelectionContext } from "./AppContext";
import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Leaflet from "./components/Leaflet";
import SearchCard from "./components/SearchCard";
import axios from "axios";
import regions from './data/doubs.json'
import new_regions from './data/nouvelles_regions.json'
import departments from './data/departements.json'
// import communes from './data/communes.json'

function App() {
    const [selected, setSelected] = React.useState({
        type: 'all', // 'all' or 'precise'
        name: 'regions', // 'regions', 'new_regions' or 'departments'
    })

    const [search, setSearch] = React.useState({
        state: false,
        query: '',
        results: [],
        isLoading: false
    })

    const [datas, setDatas] = React.useState({
        new_regions: new_regions,
        regions: regions,
        departments: departments,
        communes: []
    })

    React.useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}api/locations/`)
            .then(res => console.log(res.data.filter(e => e.fields.dep_nom === 'Jura')))
            .catch(err => console.log(err))
    }, [])

    return (
        <DatasContext.Provider value={{ datas, setDatas }}>
            <SelectionContext.Provider value={{ selected, setSelected }}>
                <SearchContext.Provider value={{ search, setSearch }}>
                    <RootContainer >
                        <GlobalStyles />
                        <Leaflet />
                        <SearchCard />
                    </RootContainer>
                </SearchContext.Provider>
            </SelectionContext.Provider>
        </DatasContext.Provider>
    );
}

export default App;

const RootContainer = styled.div`
    position       : relative;
    min-height     : 100vh;
    width          : 100vw;
`
import React from "react";
import { DatasContext, SearchContext, SelectionContext } from "./AppContext";
import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Leaflet from "./components/Leaflet";
import SearchCard from "./components/SearchCard";
import axios from "axios";

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
        new_regions: [],
        regions: [],
        departments: [],
        communes: []
    })

    React.useEffect(() => {
        const fetchDatas = async () => {
            try {
                const regions = await axios.get(`${process.env.REACT_APP_API_URL}api/regions/geolocation/all`)
                const departments = await axios.get(`${process.env.REACT_APP_API_URL}api/departments/geolocation/all`)
                const new_regions = await axios.get(`${process.env.REACT_APP_API_URL}api/regions/new/geolocation/all`)
                setDatas(state => ({
                    ...state,
                    new_regions: new_regions.data,
                    regions: regions.data,
                    departments: departments.data,
                }))
            } catch (err) {
                console.log(err)
            }
        }
        fetchDatas()
    }, [selected])

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
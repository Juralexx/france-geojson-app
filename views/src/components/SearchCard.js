import React from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { LeafletContext, SearchContext, SelectionContext } from '../AppContext'
import Arborescence from './Arborescence'
import Icon from './tools/icons/Icon'
import { ClassicInput } from './tools/Input'
import SemiCicle from './loader/SemiCicle'
import { doesAtLeastOneArrayInElementContainValues, highlightSearchResults } from './Utils'
import { getArborescence, getGeoJSONBounds } from './functions/functions'
import { departments, old_regions, regions } from './functions/api'

const SearchCard = () => {
    const { fetchLocation, open, setOpen } = React.useContext(SearchContext)
    const { setSelected, setArborescence } = React.useContext(SelectionContext)
    const { geojsons, setGeoJSON, map, sm } = React.useContext(LeafletContext)
    const inputRef = React.useRef()
    
    const [search, setSearch] = React.useState({ state: false, query: '', results: [], isLoading: false })

    const searchLocation = async (value) => {
        setSearch(data => ({ ...data, query: value }))
        if (!value || value.trim() === "") return
        if (value.length >= 2) {
            setSearch(data => ({ ...data, state: true, isLoading: true }))

            const paths = [
                `${process.env.REACT_APP_API_LOCATIONS_URL}search/locations/find/${value}`,
                `${process.env.REACT_APP_API_LOCATIONS_URL}search/departments/find/${value}`,
                `${process.env.REACT_APP_API_LOCATIONS_URL}search/regions/find/${value}`,
                `${process.env.REACT_APP_API_LOCATIONS_URL}search/new-regions/find/${value}`
            ]

            const response = paths.map(async (path, i) => {
                return await axios
                    .get(encodeURI(path))
                    .then(res => {
                        switch (i) {
                            case 0: return res.data.map(el => Object.assign(el, { type: 'commune' }))
                            case 1: return res.data.map(el => Object.assign(el, { type: 'département' }))
                            case 2: return res.data.map(el => Object.assign(el, { type: 'région' }))
                            case 3: return res.data.map(el => Object.assign(el, { type: 'région' }))
                            default: return
                        }
                    })
                    .catch(err => console.error(err))
            })
            Promise.all(response).then(res => {
                if (doesAtLeastOneArrayInElementContainValues(res)) {
                    setSearch(data => ({ ...data, results: Array.prototype.concat(...res) }))
                    const timer = setTimeout(() => highlightSearchResults(value, '.auto-complete-item span'), 200)
                    return () => clearTimeout(timer)
                }
                else setSearch(data => ({ ...data, results: [], isLoading: false }))
            })
        } else setSearch(data => ({ ...data, state: false, results: [], isLoading: false }))
    }

    const fetchRegion = (region) => {
        if (regions.includes(region)) {
            setGeoJSON(geojsons[region]['GeoJSON'])
            setSelected({ level: 1, name: 'Régions' })
            setArborescence(getArborescence('Régions', region, geojsons))
        }
        else if (old_regions.includes(region)) {
            setArborescence(getArborescence('Anciennes régions', region, geojsons))
            setGeoJSON(geojsons[region]['GeoJSON'])
            setSelected({ level: 1, name: 'Anciennes régions' })
        }
        else if (departments.includes(region)) {
            setGeoJSON(geojsons[region]['GeoJSON'])
            setSelected({ level: 2, name: 'Départements' })
            setArborescence(getArborescence('Départements', region, geojsons))
        }
        setSearch({ state: false, query: '', results: [], isLoading: false })
        const geojsonBounds = getGeoJSONBounds(geojsons[region]['GeoJSON'])
        map.flyToBounds([
            [geojsonBounds[1], geojsonBounds[0]],
            [geojsonBounds[3], geojsonBounds[2]]
        ], { paddingTopLeft: sm ? [0, 200] : [0, 0] })
    }

    return (
        <React.Fragment>
            <SearchInput>
                <Icon name="Menu" className="menu-svg" onClick={() => setOpen(!open)} />
                <ClassicInput
                    useRef={inputRef}
                    type="text"
                    placeholder="Effectuer une recherche..."
                    value={search.query}
                    onChange={e => searchLocation(e.target.value)}
                />
                {search.query.length > 0 ? (
                    <Icon name="Cross" className="search-svg" onClick={() => setSearch(data => ({ ...data, state: false, query: '' }))} />
                ) : (
                    <Icon name="Search" className="search-svg" onClick={() => inputRef.current.focus()} />
                )}
            </SearchInput>

            <Arborescence search={search} />

            {search.state &&
                <AutoCompleteContainer
                    tabIndex="0"
                    style={{ display: !search.state ? "none" : "block" }}
                >
                    {search.results.length > 0 &&
                        search.results.map((element, key) => {
                            return (
                                <div key={key}>
                                    {element.type === 'commune' &&
                                        <div className="auto-complete-item" onClick={() => {
                                            fetchLocation(element.fields.com_nom)
                                            setSearch(data => ({ ...data, state: false, results: [], isLoading: false, query: '' }))
                                        }}>
                                            <span>{`${element.fields.com_nom}`}</span> - <em>{`${element.fields.dep_nom} (${element.fields.dep_code})`}</em>
                                        </div>
                                    }
                                    {element.type === 'département' &&
                                        <div className="auto-complete-item" onClick={() => fetchRegion(element.nom_departement)}>
                                            <span>{`${element.nom_departement} - ${element.code_departement}`}</span>
                                        </div>
                                    }
                                    {element.type === 'région' &&
                                        <div className="auto-complete-item" onClick={() => fetchRegion(element.nom_region)}>
                                            <span>{`${element.nom_region}`}</span>
                                        </div>
                                    }
                                </div>
                            )
                        })
                    }
                    {search.isLoading &&
                        search.results.length === 0 &&
                        <SemiCicle />
                    }
                    {search.state &&
                        search.results.length === 0 &&
                        !search.isLoading &&
                        <div className="no-result">
                            <Icon name="BoxEmpty" />
                            <div>Aucun résultat ne correspond à votre recherche...</div>
                        </div>
                    }
                </AutoCompleteContainer>
            }
        </React.Fragment>
    )
}

export default React.memo(SearchCard)

const SearchInput = styled.div`
    display          : flex;
    align-items      : center;
    padding          : 5px;
    background-color : var(--content);
    border-radius    : var(--rounded-sm);
    box-shadow       : var(--shadow-smooth), var(--shadow-relief);

    svg {
        min-width  : 40px;
        min-height : 25px;
        padding    : 0 8px;
        color      : var(--primary);
        cursor     : pointer;

        &.search-svg {
            border-left  : 1px solid var(--light-border);
        }
    }

    @media(max-width: 768px) {
        padding       : 0 5px;
        border-radius : 0;
        width         : calc(100vw - 80px);
        box-shadow    : none;

        input {
            width     : calc(100vw - 165px);
            font-size : 14px;
        }
    }
`

const AutoCompleteContainer = styled.div`
    margin-top       : 5px;
    max-height       : 300px;
    width            : 100%;
    padding          : 5px 0;
    background-color : var(--content);
    border-radius    : var(--rounded-sm);
    box-shadow       : var(--shadow-two);
    overflow         : auto;
    z-index          : 750;

    .auto-complete-item {
        position  : relative;
        padding   : 10px 16px;
        cursor    : pointer;
        font-size : 13px;
    
        &:hover {
            background : var(--content-light);
            span {
                &:first-child {
                    color : var(--primary);
                }
            }
        }

        span:not(.highlight) {
            &:first-child {
                font-size    : 14px;
                font-weight  : 500;
                margin-right : 2px;
            }
        }
    }

    .no-result {
        display         : flex;
        align-items     : center;
        justify-content : center;
        padding         : 15px 35px;
        color           : var(--text);

        svg {
            width        : 26px;
            height       : 26px;
            margin-right : 20px;
        }
    }
    .circle-loader {
        padding : 20px 0;
    }
`
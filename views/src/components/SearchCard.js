import React from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { GeoJSONContext, LoadingContext, SearchContext, SelectionContext } from '../AppContext'
import Icon from './tools/icons/Icon'
import { ClassicInput } from './tools/Input'
import SemiCicle from './loader/SemiCicle'
import { addClass } from './Utils'
import { geojsons } from './functions/imports'
import { getLevel, getZoom } from './functions/functions'

const SearchCard = () => {
    const { selected, setSelected, arborescence } = React.useContext(SelectionContext)
    const { search, setSearch } = React.useContext(SearchContext)
    const { setGeoJSON, setLeaflet } = React.useContext(GeoJSONContext)
    const { isLoading, setLoading } = React.useContext(LoadingContext)
    const inputRef = React.useRef()

    const tabs = ['France', 'Régions', 'Anciennes régions', 'Départements']

    const searchLocation = async () => {
        if (!search.query || search.query.trim() === "") return
        if (search.query.length >= 2) {
            setSearch(data => ({ ...data, state: true, isLoading: true }))

            const paths = [
                `${process.env.REACT_APP_API_LOCATIONS_URL}api/locations/find/${search.query}`,
                `${process.env.REACT_APP_API_LOCATIONS_URL}api/departments/find/${search.query}`,
                `${process.env.REACT_APP_API_LOCATIONS_URL}api/regions/find/${search.query}`
            ]

            const response = paths.map(async (path, i) => {
                return await axios
                    .get(encodeURI(path))
                    .then(res => {
                        if (i === 0)
                            return res.data.map(el => Object.assign(el, { type: 'location' }))
                        else if (i === 1)
                            return res.data.map(el => Object.assign(el, { type: 'department' }))
                        else if (i === 2)
                            return res.data.map(el => Object.assign(el, { type: 'region' }))
                    })
                    .catch(err => console.error(err))
            })
            Promise.all(response).then(res => {
                if (res.length > 0)
                    setSearch(data => ({ ...data, results: Array.prototype.concat(...res) }))
                else setSearch(data => ({ ...data, results: [], isLoading: false }))
            })
        } else {
            setSearch(data => ({ ...data, state: false, isLoading: false }))
        }
    }

    return (
        <SearchContainer>
            <SearchInput>
                <Icon name="Menu" className="menu-svg" />
                <ClassicInput
                    useRef={inputRef}
                    type="text"
                    placeholder="Effectuer une recherche..."
                    value={search.query}
                    onInput={e => setSearch(data => ({ ...data, query: e.target.value }))}
                    onChange={searchLocation}
                />
                {search.query.length > 0 ? (
                    <Icon
                        name="Cross"
                        className="search-svg"
                        onClick={() => setSearch(data => ({ ...data, state: false, query: '' }))}
                    />
                ) : (
                    <Icon
                        name="Search"
                        className="search-svg"
                        onClick={() => inputRef.current.focus()}
                    />
                )}
            </SearchInput>
            {search.state ? (
                <AutoCompleteContainer
                    tabIndex="0"
                    style={{ display: !search.state ? "none" : "block" }}
                >
                    {search.results.length > 0 &&
                        search.results.map((element, key) => {
                            return (
                                <div key={key}>
                                    {element.type === 'location' &&
                                        <div className="auto-complete-item" onClick={() => { }}>
                                            {`${element.fields.com_nom} - ${element.fields.dep_nom} (${element.fields.dep_code})`}
                                        </div>
                                    }
                                    {element.type === 'department' &&
                                        <div className="auto-complete-item" onClick={() => { }}>
                                            {`${element.nom_departement} - ${element.code_departement}`}
                                        </div>
                                    }
                                    {element.type === 'region' &&
                                        <div className="auto-complete-item" onClick={() => { }}>
                                            {`${element.nom_region}`}
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
            ) : (
                selected.level === 0 ? (
                    <SelectionList>
                        <h1>France</h1>
                        {tabs.map((tab, i) => {
                            return (
                                <div className={`list-choice ${addClass(selected.name === tab, 'active')}`}
                                    key={i}
                                    onClick={() => {
                                        setGeoJSON(geojsons[tab])
                                        setSelected(prev => ({ ...prev, level: 0, name: tab }))
                                        setLoading(true)
                                        setLeaflet({ zoomAction: 'zoomOut', zoom: 6 })
                                    }}
                                >
                                    {selected.name === tab ? (
                                        isLoading ? <SemiCicle /> : <Icon name="Spinner" className="icon" />
                                    ) : (
                                        <Icon name="Point" className="icon" />
                                    )}
                                    {tab}
                                </div>
                            )
                        })}
                    </SelectionList>
                ) : (
                    [...new Array(6)].map((_, key) => {
                        return (
                            selected.level === key && (
                                <SelectionList key={key}>
                                    <div className='previous' onClick={() => {
                                        setGeoJSON(arborescence[0].value)
                                        setLeaflet({ zoomAction: 'zoomOut', zoom: getZoom(arborescence[0].previous) })
                                        setSelected(prev => ({ ...prev, level: getLevel(arborescence[0].previous), name: arborescence[0].previous }))
                                    }}>
                                        <Icon name="DoubleArrowLeft" />
                                        {arborescence[0].previous}
                                    </div>
                                    <h2>{arborescence[1].name}</h2>
                                    {arborescence.slice(2).map((tab, i) => {
                                        return (
                                            <div className={`list-choice ${addClass(selected.name === tab.name, 'active')}`}
                                                key={i}
                                                onClick={() => {
                                                    setGeoJSON(tab.value)
                                                    setSelected(prev => ({ ...prev, level: getLevel(tab.name), name: tab.name }))
                                                    setLoading(true)
                                                }}
                                            >
                                                {selected.name === tab.name ? (
                                                    isLoading ? <SemiCicle /> : <Icon name="Spinner" className="icon" />
                                                ) : (
                                                    <Icon name="Point" className="icon" />
                                                )}
                                                {tab.name}
                                            </div>
                                        )
                                    })}
                                </SelectionList>
                            )
                        )
                    })
                )
            )}
        </SearchContainer>
    )
}

export default SearchCard

const SearchContainer = styled.div`
    position  : absolute;
    top       : 20px;
    left      : 20px;
    width     : 30%;
    min-width : 300px;
    max-width : 350px;
`

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
`

const SelectionList = styled.div`
    margin-top       : 10px;
    background-color : var(--content);
    border-radius    : var(--rounded-sm);
    box-shadow       : var(--shadow-smooth), var(--shadow-relief);
    padding          : 10px 0;
    max-width        : 350px;

    h1 {
        font-size   : 28px;
        font-weight : 700;
        margin      : 0;
        padding     : 15px 30px;
        color       : var(--title);
    }

    h2 {
        font-size   : 22px;
        font-weight : 700;
        margin      : 0;
        padding     : 5px 30px;
        color       : var(--title);
    }

    .previous {
        display        : flex;
        align-items    : center;
        padding        : 10px 28px 0;
        text-transform : uppercase;
        line-height    : 16px;
        color          : var(--secondary);
        transition     : .2s;
        cursor         : pointer;
        svg {
            margin-right : 7px;
            transition   : .2s;
        }
        &:hover {
            padding    : 10px 28px 0 24px;
            transition : .2s;
            svg {
                margin-right : 16px;
            }
        }
    }

    .list-choice {
        position    : relative;
        padding     : 20px 40px 20px 75px;
        font-size   : 16px;
        color       : var(--text-tertiary);
        border-left : 4px solid transparent;
        cursor      : pointer;

        .icon {
            position  : absolute;
            left      : 40px;
            top       : 50%;
            transform : translateY(-50%);
            color     : rgb(207, 216, 220);
            width     : 14px;
            height    : 14px;
        }

        &.active {
            color            : var(--primary);
            background-color : var(--content-light);
            border-color     : var(--primary);
            svg {
                color : var(--primary);
            }
        }

        .circle-loader {
            position  : absolute;
            left      : 40px;
            top       : 50%;
            transform : translateY(-50%);
            width     : 20px;
            height    : 20px;
            svg {
                width  : 20px;
                height : 20px;
                circle {
                    stroke-width : 4px;
                }
            }
        }

        &:hover {
            color            : var(--primary);
            background-color : var(--content-light);
            border-color     : var(--primary);
        }
    }
`

const AutoCompleteContainer = styled.div`
    position         : absolute;
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
        position    : relative;
        display     : flex;
        align-items : center;
        padding     : 8px 16px;
        cursor      : pointer;
    
        &:hover {
            color      : var(--primary);
            background : var(--content-light);
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
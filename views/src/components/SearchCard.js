import React from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { SearchContext } from '../AppContext'
import Icon from './tools/icons/Icon'
import { ClassicInput } from './tools/Input'
import SemiCicle from './loader/SemiCicle'
import { doesAtLeastOneArrayInElementContainValues } from './Utils'
import Logo from './Logo'

const SearchCard = () => {
    const { search, setSearch, fetchLocation } = React.useContext(SearchContext)
    const inputRef = React.useRef()

    /**
     * 
     */

    const searchLocation = async () => {
        if (!search.query || search.query.trim() === "") return
        if (search.query.length >= 2) {
            setSearch(data => ({ ...data, state: true, isLoading: true }))

            const paths = [
                `${process.env.REACT_APP_API_LOCATIONS_URL}api/locations/find/${search.query}`,
                `${process.env.REACT_APP_API_LOCATIONS_URL}api/departments/find/${search.query}`,
                `${process.env.REACT_APP_API_LOCATIONS_URL}api/regions/find/${search.query}`,
                `${process.env.REACT_APP_API_LOCATIONS_URL}api/regions/new/find/${search.query}`
            ]

            const response = paths.map(async (path, i) => {
                return await axios
                    .get(encodeURI(path))
                    .then(res => {
                        if (i === 0)
                            return res.data.map(el => Object.assign(el, { type: 'commune' }))
                        else if (i === 1)
                            return res.data.map(el => Object.assign(el, { type: 'département' }))
                        else if (i === 2)
                            return res.data.map(el => Object.assign(el, { type: 'région' }))
                        else if (i === 3)
                            return res.data.map(el => Object.assign(el, { type: 'région' }))
                    })
                    .catch(err => console.error(err))
            })
            Promise.all(response).then(res => {
                if (doesAtLeastOneArrayInElementContainValues(res)) {
                    setSearch(data => ({ ...data, results: Array.prototype.concat(...res) }))
                } else {
                    setSearch(data => ({ ...data, results: [], isLoading: false }))
                }
            })
        } else {
            setSearch(data => ({ ...data, state: false, results: [], isLoading: false }))
        }
    }

    /**
     * 
     */

    return (
        <>
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
                                            <span>{`${element.fields.com_nom}`}</span> - <em>{`${element.fields.dep_nom} (${element.fields.dep_code})`}</em> <span>- {element.type}</span>
                                        </div>
                                    }
                                    {element.type === 'département' &&
                                        <div className="auto-complete-item" onClick={() => { }}>
                                            <span>{`${element.nom_departement} - ${element.code_departement}`}</span> <span>- {element.type}</span>
                                        </div>
                                    }
                                    {element.type === 'région' &&
                                        <div className="auto-complete-item" onClick={() => { }}>
                                            <span>{`${element.nom_region}`}</span> <span>- {element.type}</span>
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
        </>
    )
}

export default SearchCard

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
        padding   : 8px 16px;
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

        span {
            &:first-child {
                font-size    : 14px;
                font-weight  : 500;
                margin-right : 2px;
            }
            &:last-child {
                font-size   : 12px;
                color       : var(--text-secondary);
                margin-left : 2px;
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
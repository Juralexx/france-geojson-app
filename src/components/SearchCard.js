import React from 'react'
import styled from 'styled-components'
import { SearchContext, SelectionContext } from '../AppContext'
import Icon from './tools/icons/Icon'
import { ClassicInput } from './tools/Input'
import { addClass } from './Utils'

const SearchCard = () => {
    const { selected, setSelected } = React.useContext(SelectionContext)
    const { search, setSearch } = React.useContext(SearchContext)
    const inputRef = React.useRef()

    return (
        <SearchContainer>
            <SearchInput>
                <Icon
                    name="Menu"
                    className="menu-svg"
                />
                <ClassicInput
                    useRef={inputRef}
                    type="text"
                    placeholder="Effectuer une recherche..."
                    value={search.query}
                    onInput={e => setSearch(data => ({ ...data, query: e.target.value }))}
                    onChange={() => { }}
                />
                {!search.query.length > 0 ? (
                    <Icon
                        name="Search"
                        className="search-svg"
                        onClick={() => inputRef.current.focus()}
                    />
                ) : (
                    <Icon
                        name="Cross"
                        className="search-svg"
                        onClick={() => setSearch(data => ({ ...data, query: '' }))}
                    />
                )}
            </SearchInput>
            <SelectionList>
                <h1>France</h1>
                <div
                    className={`list-choice ${addClass(selected.type === 'all' && selected.name === 'departments', 'active')}`}
                    onClick={() => setSelected(prevState => ({ ...prevState, type: 'all', name: 'departments' }))}
                >
                    {selected.type === 'all' && selected.name === 'departments' ? <Icon name="Spinner" /> : <Icon name="Point" />}
                    Départements
                </div>
                <div
                    className={`list-choice ${addClass(selected.type === 'all' && selected.name === 'regions', 'active')}`}
                    onClick={() => setSelected(prevState => ({ ...prevState, type: 'all', name: 'regions' }))}
                >
                    {selected.type === 'all' && selected.name === 'regions' ? <Icon name="Spinner" /> : <Icon name="Point" />}
                    Régions
                </div>
                <div
                    className={`list-choice ${addClass(selected.type === 'all' && selected.name === 'new_regions', 'active')}`}
                    onClick={() => setSelected(prevState => ({ ...prevState, type: 'all', name: 'new_regions' }))}
                >
                    {selected.type === 'all' && selected.name === 'new_regions' ? <Icon name="Spinner" /> : <Icon name="Point" />}
                    Nouvelles régions
                </div>
            </SelectionList>
        </SearchContainer>
    )
}

export default SearchCard

const SearchContainer = styled.div`
    position         : absolute;
    top              : 20px;
    left             : 20px;
    min-width        : 350px;
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
        min-height : 30px;
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

    h1 {
        font-size   : 30px;
        font-weight : 700;
        margin      : 0;
        padding     : 15px 30px;
        color       : var(--title);
    }

    .list-choice {
        position    : relative;
        padding     : 20px 40px 20px 75px;
        font-size   : 16px;
        color       : var(--text-tertiary);
        border-left : 4px solid transparent;
        cursor      : pointer;

        svg {
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

        &:hover {
            color            : var(--primary);
            background-color : var(--content-light);
            border-color     : var(--primary);
        }
    }
`
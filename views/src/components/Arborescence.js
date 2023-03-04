import React from 'react'
import styled from 'styled-components'
import Icon from './tools/icons/Icon'
import SemiCicle from './loader/SemiCicle'
import { LeafletContext, SelectionContext } from '../AppContext'
import { addActive } from './Utils'
import { getLevel } from './functions/functions'

const Arborescence = ({ search }) => {
    const { selected, setSelected, arborescence, hovered } = React.useContext(SelectionContext)
    const { geojsons, setGeoJSON, fitLayerBounds, sm } = React.useContext(LeafletContext)
    const [isLoading, setLoading] = React.useState(false)

    const tabs = ['France', 'Régions', 'Anciennes régions', 'Départements']

    React.useEffect(() => {
        if (isLoading) {
            const timer = setTimeout(() => setLoading(false), 1000)
            return () => clearTimeout(timer)
        }
    }, [isLoading])

    return (
        <React.Fragment>
            {!search.state && (
                selected.level === 0 ? (
                    <SelectionList>
                        <h1>France</h1>
                        {tabs.map((tab, i) => {
                            return (
                                <SelectionListItem className={addActive(selected.name === tab)}
                                    key={i}
                                    onClick={() => {
                                        setGeoJSON(geojsons[tab])
                                        setSelected(prev => ({ ...prev, level: 0, name: tab }))
                                        setLoading(true)
                                    }}
                                >
                                    {selected.name === tab ? (
                                        isLoading ? <SemiCicle /> : <Icon name="Spinner" className="icon" />
                                    ) : (
                                        <Icon name="Point" className="icon" />
                                    )}
                                    {tab}
                                </SelectionListItem>
                            )
                        })}
                    </SelectionList>
                ) : (
                    arborescence?.length > 0 && (
                        [...new Array(6)].map((_, key) => {
                            return (
                                selected.level === key && (
                                    <SelectionList key={key}>
                                        <div className='previous' onClick={() => {
                                            setGeoJSON(arborescence[0]?.value)
                                            setSelected(prev => ({ ...prev, level: getLevel(arborescence[0]?.previous), name: arborescence[0]?.previous }))
                                            fitLayerBounds(arborescence[0]?.value)
                                        }}>
                                            <Icon name="DoubleArrowLeft" />
                                            {arborescence[0]?.previous}
                                        </div>
                                        <h2>{arborescence[1]?.name}</h2>
                                        {arborescence?.slice(2).map((tab, i) => {
                                            return (
                                                <SelectionListItem key={i}
                                                    className={addActive(selected.name === tab.name)}
                                                    onClick={() => {
                                                        setGeoJSON(tab.value)
                                                        setSelected(prev => ({ ...prev, level: getLevel(tab.name), name: tab.name }))
                                                        setLoading(true)
                                                        if (selected.name === 'Commune') {
                                                            fitLayerBounds(tab.value, true)
                                                        }
                                                    }}
                                                >
                                                    {selected.name === tab.name ? (
                                                        isLoading ? <SemiCicle /> : <Icon name="Spinner" className="icon" />
                                                    ) : (
                                                        <Icon name="Point" className="icon" />
                                                    )}
                                                    {tab.name}
                                                </SelectionListItem>
                                            )
                                        })}
                                    </SelectionList>
                                )
                            )
                        })
                    )
                )
            )}
            {hovered.active && !sm &&
                selected.name !== 'Commune' && (
                    <Tooltip>
                        <h5>Informations</h5>
                        {hovered.element.region &&
                            <p><b>Région :</b> {hovered.element.region}</p>
                        }
                        {hovered.element.departement &&
                            <p><b>Département :</b> {hovered.element.departement}</p>
                        }
                        {hovered.element.arrondissement &&
                            <p><b>Arrondissement :</b> {hovered.element.arrondissement}</p>
                        }
                        {hovered.element.canton &&
                            <p><b>Canton :</b> {hovered.element.canton}</p>
                        }
                        {hovered.element.commune &&
                            <p><b>Commune :</b> {hovered.element.commune}</p>
                        }
                    </Tooltip>
                )
            }
            {selected.name === 'Commune' && !sm &&
                Object.keys(selected?.selectedCommune).length > 0 && (
                    <SelectionList>
                        <div className='previous' onClick={() => {
                            setGeoJSON(arborescence[0].value)
                            setSelected(prev => ({ ...prev, level: getLevel(arborescence[0]?.previous), name: arborescence[0]?.previous }))
                        }} />
                        <h3>{selected.selectedCommune.com_nom}</h3>
                        <p><b>Commune :</b> {selected.selectedCommune.city}</p>
                        <p><b>Municipalité :</b> {selected.selectedCommune.municipality}</p>
                        <p><b>Population :</b> {selected.selectedCommune.population}</p>
                        <p><b>Région :</b> {selected.selectedCommune?.reg_nom}</p>
                        <p><b>Ancienne région :</b> {selected.selectedCommune?.reg_nom_old}</p>
                        <p><b>Département :</b> {selected.selectedCommune?.dep_nom}</p>
                        <p><b>Code département :</b> {selected.selectedCommune?.dep_code}</p>
                    </SelectionList>
                )
            }
        </React.Fragment>
    )
}

export default Arborescence

/**
 * 
 */

const SelectionList = styled.div`
    margin-top       : 10px;
    background-color : var(--content);
    border-radius    : var(--rounded-sm);
    box-shadow       : var(--shadow-smooth), var(--shadow-relief);
    padding          : 10px 0;
    width            : 100%;

    h1 {
        font-size   : 28px;
        font-weight : 700;
        margin      : 0;
        padding     : 15px 30px;
    }

    h2 {
        font-size   : 22px;
        font-weight : 700;
        margin      : 0;
        padding     : 5px 30px;
    }

    h3 {
        font-size   : 22px;
        font-weight : 700;
        margin      : 0;
        padding     : 5px 20px;
    }

    p {
        padding : 3px 20px;
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

    @media(max-width: 768px) {
        margin-top    : 0;
        padding       : 5px 0;
        box-shadow    : none;
        border-radius : 0 0 var(--rounded-sm) var(--rounded-sm);

        h1,
        h2,
        h3 {
            font-size : 20px;
            padding   : 5px 20px;
        }
        .previous {
            padding : 5px 18px 0;
            &:hover {
                padding : 5px 28px 0 14px;
            }
        }
    }
`

const SelectionListItem = styled.div`
    position    : relative;
    padding     : 20px 40px 20px 75px;
    font-size   : 16px;
    color       : var(--text-secondary);
    border-left : 4px solid transparent;
    cursor      : pointer;

    .icon {
        position  : absolute;
        left      : 40px;
        top       : 50%;
        transform : translateY(-50%);
        color     : var(--text-tertiary);
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

    @media(max-width: 768px) {
        padding   : 10px 20px 10px 55px;
        font-size : 14px;
        .icon,
        .circle-loader {
            left : 20px;
        }
    }
`

const Tooltip = styled.div`
    position      : relative;
    min-width     : 100px;
    margin-top    : 10px;
    padding       : 15px;
    font-size     : 14px;
    background    : var(--content);
    border-radius : var(--rounded-sm);
    box-shadow    : var(--shadow-one);
    z-index       : 1000;
`
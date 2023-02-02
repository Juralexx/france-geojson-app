import React from "react";
import styled from "styled-components";
import Icon from "./tools/icons/Icon";
import { addClass } from "./Utils";
import { useClickOutside } from './functions/hooks/useClickOutside'

const Sidebar = ({ open, setOpen }) => {
    const sideRef = React.useRef()
    useClickOutside(sideRef, () => setOpen(false))

    return (
        <SideMenu className={addClass(open, 'open')}>
            <div className="side" ref={sideRef}>
                <div className="side-header">
                    <h2>À propos</h2>
                    <Icon name="Cross" className="cross" onClick={() => setOpen(false)} />
                </div>
                <div className="side-body">
                    <p>
                        Le projet Github france-geojson propose au format GeoJSON les cartes des régions, départements,
                        arrondissements, cantons et communes de France (métropole et départements d'outre-mer) à partir
                        des données publiées par l'IGN et l'INSEE.
                    </p>
                    <p>
                        Ce site permet de rechercher, visualiser et télécharger individuellement chacun de ces fichiers
                        dans un format optimisé. Pour plus de détails ou pour accèder à la version non optimisée des tracés,
                        cliquez sur le bouton ci-dessous.
                    </p>
                </div>
                <p>Développé par <a href={`${process.env.REACT_APP_BASE_URL}`} target="_blank" rel="noreferrer">Alexandre Vurbier <Icon name="External" /></a></p>
            </div>
        </SideMenu>
    )
}

export default Sidebar;

const SideMenu = styled.div`
    position        : fixed;
    bottom          : 0;
    top             : 0;
    left            : 0;
    right           : 0;
    width           : 100vw;
    height          : 100vh;
    backdrop-filter : blur(5px);
    z-index         : 700;
    visibility      : hidden;
    opacity         : 0;
    transition      : .3s ease;

    .side {
        position   : fixed;
        right      : -102%;
        bottom     : 0;
        top        : 0;
        height     : 100vh;
        width      : 100%;
        max-width  : 500px;
        padding    : 25px;
        background : var(--content);
        box-shadow : var(--shadow-right);
        transition : .3s ease;
    }

    &.open {
        visibility : visible;
        opacity    : 1;
        transition : .3s ease;
        .side {
            right      : 0;
            transition : .3s ease;
        }
    }

    .side-header {
        display         : flex;
        justify-content : space-between;
        align-items     : center;
        width           : 100%;
        padding         : 5px 0;
        margin-bottom   : 20px;
    }

    h2 {
        margin : 0;
    }

    .cross {
        height        : 34px;
        width         : 34px;
        padding       : 5px;
        color         : var(--primary);
        border-radius : var(--rounded-full);
        cursor        : pointer;

        &:hover {
            background-color : rgba(var(--primary-rgb), 0.1);
        }
    }

    .side-body {
        position       : relative;
        padding-bottom : 20px;
        margin-bottom  : 20px;

        &:after {
            content          : '';
            position         : absolute;
            left             : 50%;
            transform        : translateX(-50%);
            bottom           : 0;
            width            : 100px;
            height           : 1px;
            background-color : var(--primary);
        }
    }

    p {
        font-size   : 16px;
        padding     : 10px 0;
        line-height : 26px;
        text-align  : center;
    }

    a {
        position : relative;
        color    : var(--primary);
        svg {
            height         : 17px;
            height         : 17px;
            vertical-align : middle;
        }
        &:hover {
            &:after {
                content          : '';
                position         : absolute;
                left             : 0;
                bottom           : 0;
                width            : 82%;
                height           : 1px;
                background-color : var(--primary);
            }
        }
    }

    @media(max-width: 576px) {
        width : 100%;
    }
`
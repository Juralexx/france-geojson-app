import React from 'react';
import styled from 'styled-components';
import Icon from '../tools/icons/Icon';
import { addActive } from '../Utils';
import { ThemeContext } from './ThemeContextWrapper';

const ThemeToggle = () => {
    const { theme, handleTheme } = React.useContext(ThemeContext)
    const [open, setOpen] = React.useState(false)

    const changeTheme = (choice) => {
        handleTheme(choice)
        setOpen(false)
    }

    return (
        <ThemeMenu>
            <ThemeContainer>
                <Toggle onClick={() => setOpen(!open)}>
                    {theme?.theme === 'dark' ? <Icon name="Moon" /> : <Icon name="Sun" />}
                </Toggle>
                {open &&
                    <div className='theme-menu'>
                        <div className={`theme-choice ${addActive(theme.preference === 'light')}`}
                            onClick={() => changeTheme('light')}>
                            <Icon name="Sun" /> Clair
                        </div>
                        <div className={`theme-choice ${addActive(theme.preference === 'dark')}`}
                            onClick={() => changeTheme('dark')}>
                            <Icon name="Moon" /> Sombre
                        </div>
                        <div className={`theme-choice ${addActive(theme.preference === 'prefers-color-scheme')}`}
                            onClick={() => changeTheme('prefers-color-scheme')}>
                            <Icon name="Computer" /> Système
                        </div>
                    </div>
                }
            </ThemeContainer>
        </ThemeMenu>
    )
}

export default ThemeToggle

const ThemeMenu = styled.div`
    position : absolute;
    right    : 60px;
    top      : 20px;

    @media(max-width: 768px) {
        top   : 0;
        right : 40px;
    }
`

const ThemeContainer = styled.div`
    position : relative;

    .theme-menu {
        position      : absolute;
        top           : 110%;
        right         : -50%;
        width         : 144px;
        padding       : 5px 0;
        background    : var(--content);
        border-radius : var(--rounded-sm);
        box-shadow    : var(--shadow-two), var(--shadow-relief);

        .theme-choice {
            display     : flex;
            align-items : center;
            padding     : 4px 8px;
            cursor      : pointer;
            font-weight : 500;

            svg {
                height       : 24px;
                width        : 24px;
                margin-right : 8px;
                color        : var(--svg-x-light);
            }

            &:hover, &.active {
                background : var(--content-light);
                svg {
                    color : var(--primary);
                }
            }
        }
    }
`

const Toggle = styled.button`
    background      : var(--content);
    border-radius   : var(--rounded-sm);
    height          : 34px;
    width           : 34px;
    padding         : 4px;
    display         : flex;
    align-items     : center;
    justify-content : center;
    color           : var(--primary);
    box-shadow      : var(--shadow-one);
    cursor          : pointer;
    z-index         : 500;

    &:hover {
        background : var(--content-light);
    }

    @media(max-width: 768px) {
        height        : 44px;
        width         : 40px;
        border-radius : 0;
        box-shadow    : none;
    }
`
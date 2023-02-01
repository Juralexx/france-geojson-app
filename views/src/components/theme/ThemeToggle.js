import React from 'react';
import styled from 'styled-components';
import Icon from '../tools/icons/Icon';
import { ThemeContext } from './ThemeContextWrapper';

const ThemeToggle = () => {
    const { darkMode, handleTheme } = React.useContext(ThemeContext)

    return (
        !darkMode ? (
            <Toggle onClick={() => handleTheme()}>
                <Icon name="Sun" />
            </Toggle>
        ) : (
            <Toggle onClick={() => handleTheme()}>
                <Icon name="Moon" />
            </Toggle>
        )
    )
}

export default ThemeToggle

const Toggle = styled.button`
    position      : absolute;
    right         : 60px;
    top           : 20px;
    background    : var(--content);
    border-radius : var(--rounded-sm);
    height        : 34px;
    width         : 34px;
    padding       : 5px;
    color         : var(--primary);
    box-shadow    : var(--shadow-one);
    cursor        : pointer;
    z-index       : 500;
`
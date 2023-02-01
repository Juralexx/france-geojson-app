import React from 'react'
import styled from 'styled-components'
import Icon from './icons/Icon'

const France = () => {
    return (
        <AppLogo>
            <Icon name="France" />
        </AppLogo>
    )
}

export default France

const AppLogo = styled.div`
    position : absolute;
    left     : 20px;
    bottom   : 20px;
    width    : 26px;
    height   : 26px;
    color    : var(--primary);

    svg {
        height : 100%;
        width  : 100%;
    }
`
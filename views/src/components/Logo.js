import React from 'react'
import styled from 'styled-components'

const Logo = () => {
    return (
        <AppLogo>
            <img src={process.env.PUBLIC_URL + '/img/france.png'} alt="" />
        </AppLogo>
    )
}

export default Logo

const AppLogo = styled.div`
    position      : absolute;
    padding       : 5px;
    background    : var(--content);
    border-radius : var(--rounded-sm);
    left          : 20px;
    bottom        : 20px;
    width         : 40px;
    height        : 40px;
`
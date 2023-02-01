import React from 'react'
import styled from 'styled-components'

const SemiCicle = (props) => {
    return (
        <Loader {...props} className='circle-loader'>
            <svg className="circular" viewBox="25 25 50 50">
                <circle className="path" cx="50" cy="50" r="20" fill="none" strokeWidth="2" strokeMiterlimit="10" />
            </svg>
        </Loader>
    )
}

export default SemiCicle

const Loader = styled.div`
    position        : relative;
    width           : 100%;
    height          : 100%;
    display         : flex;
    align-items     : center;
    justify-content : center;
    z-index         : 1000;

    .circular {
        animation : rotate 2s linear infinite;
        width     : 40px;
        height    : 40px;
    }

    .path {
        stroke-dasharray  : 1, 200;
        stroke-dashoffset : 0;
        animation         : dash 1.5s ease-in-out infinite;
        stroke            : var(--primary);
        stroke-linecap    : round;
    }

    @keyframes rotate {
        100% {
            transform : rotate(360deg);
        }
    }

    @keyframes dash {
        0% {
            stroke-dasharray  : 1, 200;
            stroke-dashoffset : 0;
        }
        50% {
            stroke-dasharray  : 89, 200;
            stroke-dashoffset : -35px;
        }
        100% {
            stroke-dasharray  : 89, 200;
            stroke-dashoffset : -124px;
        }
    }
`
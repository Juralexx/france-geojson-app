import React from 'react'
import styled from 'styled-components'
import Icon from '../tools/icons/Icon'

const BigLoader = ({ requestProgress }) => {
    const [percentage, setPercentage] = React.useState(0)

    React.useEffect(() => {
        if (percentage <= 100)
            setPercentage(requestProgress)
        // setPercentage(prev => prev + Math.fround(requestProgress * 100))
    }, [requestProgress, percentage])

    return (
        <MainLoader>
            <Loader className='circle-loader'>
                <svg className="circular" viewBox="25 25 50 50">
                    <circle className="path" cx="50" cy="50" r="20" fill="none" strokeWidth="2" strokeMiterlimit="10" />
                </svg>
                <Icon name="France" className="icon" />
            </Loader>
            <ProgressBar>
                <div className='progress-bar'>
                    <div className="progress-value" style={{ width: `${percentage}%` }}></div>
                </div>
                <div className="percentage">
                    <div>Chargement des cartes...</div>
                    <div>{percentage || 0}%</div>
                </div>
            </ProgressBar>
        </MainLoader>
    )
}

export default BigLoader

const MainLoader = styled.div`
    position        : absolute;
    top             : 0;
    bottom          : 0;
    left            : 0;
    right           : 0;
    min-height      : 100vh;
    width           : 100vw;
    display         : flex;
    flex-direction  : column;
    align-items     : center;
    justify-content : center;
    background      : rgba(var(--content-rgb), 0.5);
    backdrop-filter : blur(5px);
    overflow        : hidden;
    z-index         : 10000;
`

const Loader = styled.div`
    position        : relative;
    width           : 100%;
    display         : flex;
    align-items     : center;
    justify-content : center;
    z-index         : 1000;

    .circular {
        animation : rotate 2s linear infinite;
        width     : 90px;
        height    : 90px;
    }

    .path {
        stroke-dasharray  : 1, 200;
        stroke-dashoffset : 0;
        animation         : dash 1.5s ease-in-out infinite;
        stroke            : var(--primary);
        stroke-linecap    : round;
    }

    .icon {
        color     : var(--primary);
        position  : absolute;
        left      : 50%;
        top       : 50%;
        transform : translate(-50%, -50%);
        width     : 40px;
        height    : 40px;
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

const ProgressBar = styled.div`
    position : relative;

    .progress-bar { 
        position      : relative;
        height        : 6px;
        width         : 300px;
        margin-top    : 15px;
        background    : var(--content-light);
        border-radius : var(--rounded-full);

        .progress-value {
            height        : 100%;
            width         : 0;
            background    : var(--primary);
            border-radius : var(--rounded-full);
            transition    : .2s;
        }
    }

    .percentage {
        display         : flex;
        justify-content : space-between;
        text-align      : center;
        font-size       : 18px;
        color           : var(--primary);
        margin-top      : 15px;
        font-weight     : 500;
    }
`
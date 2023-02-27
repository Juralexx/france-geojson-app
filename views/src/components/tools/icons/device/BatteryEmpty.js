import React from 'react'

const BatteryEmpty = (props) => {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <rect x="0" y="0" width="24" height="24" />
                <path d="M4,9 L4,15 L17,15 L17,9 L4,9 Z M4,7 L17,7 C18.1045695,7 19,7.8954305 19,9 L19,15 C19,16.1045695 18.1045695,17 17,17 L4,17 C2.8954305,17 2,16.1045695 2,15 L2,9 C2,7.8954305 2.8954305,7 4,7 Z" fill="currentColor" fillRule="nonzero" />
                <path d="M20,10 L21,10 C21.5522847,10 22,10.4477153 22,11 L22,13 C22,13.5522847 21.5522847,14 21,14 L20,14 L20,10 Z" fill="currentColor" opacity="0.3" />
            </g>
        </svg>
    )
}

export default BatteryEmpty
import React from 'react'

const BatteryFull = (props) => {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <rect x="0" y="0" width="24" height="24" />
                <rect fill="currentColor" x="2" y="7" width="17" height="10" rx="2" />
                <path d="M20,10 L21,10 C21.5522847,10 22,10.4477153 22,11 L22,13 C22,13.5522847 21.5522847,14 21,14 L20,14 L20,10 Z" fill="currentColor" opacity="0.3" />
            </g>
        </svg>
    )
}

export default BatteryFull
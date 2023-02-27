import React from 'react'

const ThreeDotsVertical = (props) => {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <rect x="0" y="0" width="24" height="24" />
                <circle fill="currentColor" cx="12" cy="5" r="2" />
                <circle fill="currentColor" cx="12" cy="12" r="2" />
                <circle fill="currentColor" cx="12" cy="19" r="2" />
            </g>
        </svg>
    )
}

export default ThreeDotsVertical
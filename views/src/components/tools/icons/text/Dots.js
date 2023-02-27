import React from 'react'

const Dots = (props) => {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
            <g stroke="none" strokeWidth="1">
                <rect x="14" y="9" width="6" height="6" rx="3" fill="currentColor" />
                <rect x="3" y="9" width="6" height="6" rx="3" fill="currentColor" fill-opacity="0.7" />
            </g>
        </svg>
    )
}

export default Dots
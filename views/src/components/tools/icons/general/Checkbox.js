import React from 'react'

const Checkbox = (props) => {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <rect x="0" y="0" width="24" height="24" />
                <rect fill="currentColor" opacity="0.3" x="2" y="6" width="21" height="12" rx="6" />
                <circle fill="currentColor" cx="17" cy="12" r="4" />
            </g>
        </svg>
    )
}

export default Checkbox
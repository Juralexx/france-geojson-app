import React from 'react'

const Toggle = (props) => {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <path fillRule="evenodd" clip-rule="evenodd" d="M22 11.5C22 12.3284 21.3284 13 20.5 13H3.5C2.6716 13 2 12.3284 2 11.5C2 10.6716 2.6716 10 3.5 10H20.5C21.3284 10 22 10.6716 22 11.5Z" fill="currentColor" />
                <rect opacity="0.5" x="5" y="17" width="14" height="3" rx="1.5" fill="currentColor" />
                <rect opacity="0.5" x="8" y="3" width="8" height="3" rx="1.5" fill="currentColor" />
            </g>
        </svg>
    )
}

export default Toggle
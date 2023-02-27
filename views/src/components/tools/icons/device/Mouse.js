import React from 'react'

const Mouse = (props) => {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <rect x="0" y="0" width="24" height="24" />
                <rect fill="currentColor" opacity="0.3" x="6" y="5" width="12" height="18" rx="6" />
                <path d="M11.5,2 L12.5,2 C12.7761424,2 13,2.22385763 13,2.5 L13,5 L11,5 L11,2.5 C11,2.22385763 11.2238576,2 11.5,2 Z" fill="currentColor" />
                <rect fill="currentColor" x="11" y="16" width="2" height="5" rx="1" />
            </g>
        </svg>
    )
}

export default Mouse
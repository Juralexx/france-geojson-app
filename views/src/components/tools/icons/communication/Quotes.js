import React from 'react'

const Quotes = (props) => {
    return (
        <svg  {...props} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <rect x="0" y="0" width="24" height="24" />
                <polygon fill="currentColor" transform="translate(16.500000, 12.500000) rotate(-180.000000) translate(-16.500000, -12.500000) " points="19 7 17 13 19 13 19 18 14 18 14 13 16 7" />
                <polygon fill="currentColor" opacity="0.3" transform="translate(8.500000, 12.500000) rotate(-180.000000) translate(-8.500000, -12.500000) " points="11 7 9 13 11 13 11 18 6 18 6 13 8 7" />
            </g>
        </svg>
    )
}

export default Quotes
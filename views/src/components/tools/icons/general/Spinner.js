import React from 'react'

const Spinner = (props) => {
    return (
        <svg {...props} width="16px" height="16px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <circle cx="8" cy="8" r="7" fill="none" strokeWidth="2" stroke="currentColor"></circle>
            <circle cx="8" cy="8" r="3" fill="currentColor" strokeWidth="0"></circle>
        </svg>
    )
}

export default Spinner
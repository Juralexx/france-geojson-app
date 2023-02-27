import React from 'react'

const Text = (props) => {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <rect x="0" y="0" width="24" height="24" />
                <path d="M13.5,8 L13.5,18 C13.5,18.5522847 13.0522847,19 12.5,19 L11.5,19 C10.9477153,19 10.5,18.5522847 10.5,18 L10.5,8 L7,8 C6.44771525,8 6,7.55228475 6,7 L6,6 C6,5.44771525 6.44771525,5 7,5 L17,5 C17.5522847,5 18,5.44771525 18,6 L18,7 C18,7.55228475 17.5522847,8 17,8 L13.5,8 Z" fill="currentColor" />
            </g>
        </svg>
    )
}

export default Text
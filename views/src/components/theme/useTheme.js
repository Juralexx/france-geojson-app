import React from 'react'

const useTheme = () => {
    const [darkMode, setDarkMode] = React.useState()
    const themeStorage = localStorage.getItem("theme")

    React.useEffect(() => {
        if (themeStorage && themeStorage === 'dark') {
            setDarkMode(true)
        } else setDarkMode(false)
    }, [themeStorage])

    return { darkMode }
}

export default useTheme
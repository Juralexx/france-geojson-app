import React, { createContext } from 'react';
import { replaceBodyClass } from '../Utils';

export const ThemeContext = createContext()

export default function ThemeContextWrapper(props) {
    const themeStorage = localStorage.getItem("theme")
    const [darkMode, setDarkMode] = React.useState(null)

    function checkTheme() {
        if (darkMode === null) {
            if (themeStorage !== null && themeStorage === "light") {
                replaceBodyClass('light', 'dark')
                setDarkMode(false)
            } else {
                replaceBodyClass('dark', 'light')
                setDarkMode(true)
            }
        }
    }

    const handleTheme = () => {
        if (document.body.classList.contains('dark')) {
            localStorage.setItem("theme", 'light')
            replaceBodyClass('light', 'dark')
            setDarkMode(false)
        } else {
            localStorage.setItem("theme", 'dark')
            replaceBodyClass('dark', 'light')
            setDarkMode(true)
        }
    }

    window.load = checkTheme()

    return (
        <ThemeContext.Provider value={{ darkMode, setDarkMode, handleTheme }}>
            {props.children}
        </ThemeContext.Provider>
    )
}
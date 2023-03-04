import React, { createContext } from 'react';
import { replaceBodyClass } from '../Utils';

export const ThemeContext = createContext()

export default function ThemeContextWrapper(props) {
    const themeStorage = localStorage.getItem("theme")

    const [theme, setTheme] = React.useState({ preference: null, theme: null })

    /**
     * Check theme on window load
     */

    function checkTheme() {
        if (theme.preference === null) {
            if (themeStorage !== null) {
                const preference = JSON.parse(themeStorage).preference
                if (preference === "light") {
                    replaceBodyClass('light', 'dark')
                    setTheme({ preference: 'light', theme: 'light' })
                } else if (preference === "dark") {
                    replaceBodyClass('dark', 'light')
                    setTheme({ preference: 'dark', theme: 'dark' })
                } else if (preference === "prefers-color-scheme") {
                    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                        replaceBodyClass('dark', 'light')
                        setTheme({ preference: 'prefers-color-scheme', theme: 'dark' })
                    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
                        replaceBodyClass('light', 'dark')
                        setTheme({ preference: 'prefers-color-scheme', theme: 'light' })
                    }
                }
            } else {
                if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                    replaceBodyClass('dark', 'light')
                    localStorage.setItem("theme", JSON.stringify({ preference: 'prefers-color-scheme', theme: 'dark' }))
                    setTheme({ preference: 'prefers-color-scheme', theme: 'dark' })
                } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
                    replaceBodyClass('light', 'dark')
                    localStorage.setItem("theme", JSON.stringify({ preference: 'prefers-color-scheme', theme: 'light' }))
                    setTheme({ preference: 'prefers-color-scheme', theme: 'light' })
                }
            }
        }
    }

    /**
     * Detect user system prefers-color-scheme change
     */

    React.useEffect(() => {
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
            if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                replaceBodyClass('dark', 'light')
                localStorage.setItem("theme", JSON.stringify({ preference: 'prefers-color-scheme', theme: 'dark' }))
                setTheme({ preference: 'prefers-color-scheme', theme: 'dark' })
            } else if (window.matchMedia('(prefers-color-scheme: light)').matches) {
                replaceBodyClass('light', 'dark')
                localStorage.setItem("theme", JSON.stringify({ preference: 'prefers-color-scheme', theme: 'light' }))
                setTheme({ preference: 'prefers-color-scheme', theme: 'light' })
            }
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [window.matchMedia])

    /**
     * Select theme function
     * @param {*} choice Theme name
     */

    const handleTheme = (choice) => {
        if (choice === 'light') {
            replaceBodyClass('light', 'dark')
            localStorage.setItem("theme", JSON.stringify({ preference: 'light', theme: 'light' }))
            setTheme({ preference: 'light', theme: 'light' })
        } else if (choice === 'dark') {
            replaceBodyClass('dark', 'light')
            localStorage.setItem("theme", JSON.stringify({ preference: 'dark', theme: 'dark' }))
            setTheme({ preference: 'dark', theme: 'dark' })
        } else if (choice === 'prefers-color-scheme') {
            if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                replaceBodyClass('dark', 'light')
                localStorage.setItem("theme", JSON.stringify({ preference: 'prefers-color-scheme', theme: 'dark' }))
                setTheme({ preference: 'prefers-color-scheme', theme: 'dark' })
            } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
                replaceBodyClass('light', 'dark')
                localStorage.setItem("theme", JSON.stringify({ preference: 'prefers-color-scheme', theme: 'light' }))
                setTheme({ preference: 'prefers-color-scheme', theme: 'light' })
            }
        }
    }

    window.load = checkTheme()

    return (
        <ThemeContext.Provider value={{ theme, setTheme, handleTheme }}>
            {props.children}
        </ThemeContext.Provider>
    )
}
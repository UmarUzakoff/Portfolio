import { createContext, useState } from "react";

export const ThemeApi = createContext({})


const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('dark')

    function toggleTheme() {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }
    return (
        <ThemeApi.Provider value={{toggleTheme,theme}}>
            {children}
        </ThemeApi.Provider>
    )
}

export default ThemeProvider;
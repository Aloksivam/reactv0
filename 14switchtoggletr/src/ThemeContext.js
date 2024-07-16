/* eslint-disable no-unused-vars */
import {createContext, useContext, useState} from 'react'
const ThemeContext = createContext(undefined)
export const ThemeProvider = ({ children }) => {
    const [theme,SetTheme] = useState('light')
    return(
        <ThemeContext.Provider value={{theme,toggleTheme:()=>SetTheme(theme==='light'?"dark":'light'),}}>{children}</ThemeContext.Provider>
    )}
export const useTheme = () => useContext(ThemeContext);

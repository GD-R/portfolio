import React, { createContext, useContext } from 'react'
import Buttons from '../Components/Buttons';
import useDarkMode from "../DarkMode/useDarkMode";


const AppContext = createContext();

const useAppContext = () => {
    return useContext(AppContext)
}

const ContextProvider = ({children}) => {

    const [colorTheme,setTheme] = useDarkMode();
    

    const allStates = {
        colorTheme,
        setTheme,
    }
   
    return (
        <AppContext.Provider value={{allStates}}>
            {children}
          
        </AppContext.Provider>
    )
}

export default ContextProvider
export {useAppContext}

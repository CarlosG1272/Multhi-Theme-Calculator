import React, { useState } from "react";

const ThemeContext = React.createContext();


const ThemeProvider = ({children})=> {
    const [theme, setTheme] = useState("neon"); 

    return(<ThemeContext.Provider theme={theme} setTheme={setTheme}>
        {children}
    </ThemeContext.Provider>)
}


export {ThemeProvider, ThemeContext}
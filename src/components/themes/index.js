import React, { useState } from "react";
import styles from "./themes.module.scss";
import { ThemesContainer } from "./themesElements";

export default function Themes({setColorTheme, colorTheme}) {
    const [isShowing, setIsShowing] = useState(false)
    const handleClick = (theme) => {
        setColorTheme(theme)
        localStorage.setItem("theme_color", theme)
    }
    
    return(
    <section className={styles.theme_options}>
        <div className={styles.themeShow} onClick={()=> setIsShowing(!isShowing)}>
            {isShowing ? "Close":"Select Theme"}
        </div>

        <ThemesContainer isShowing={isShowing} id={styles.themesContainer}>
            <div id={styles.theme_neon} className={colorTheme === "theme_neon" && styles.active} onClick={()=> handleClick("theme_neon" )}>Neon</div>
            <div id={styles.theme_pastel}  className={colorTheme === "theme_pastel" && styles.active} onClick={()=> handleClick("theme_pastel" )}>Pastel</div>
            <div id={styles.theme_galax} className={colorTheme === "theme_galax" && styles.active} onClick={()=> handleClick("theme_galax")}>Galax</div>
            <div id={styles.theme_formal} className={colorTheme === "theme_formal" && styles.active} onClick={()=> handleClick("theme_formal")}>Formal</div> 
        </ThemesContainer>
    </section>)
}
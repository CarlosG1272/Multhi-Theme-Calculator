
import React, {useState, useEffect} from 'react';
import Calculator from './components/calculator/Calculator';
import styles from "./App.module.scss"
import Contact from './components/contact';
import Themes from './components/themes';
import {ThemeProvider} from 'styled-components';
import selectTheme from './components/style/themeSelecter';


function App() {
      // creo un estado para ver si un tema esta activo
      const [colorTheme, setColorTheme] = useState("theme-neon")

      // effect
      useEffect(()=> {
          // Revisar el tema actual
          const currentThemeColor = localStorage.getItem("theme_color")
          //  if found set selected theme value in state
          if(currentThemeColor) {
              setColorTheme(currentThemeColor)
          }
      }, [])
      


  return (
    <ThemeProvider theme={selectTheme(colorTheme)}>
      <div className={styles.App}>
        <section>
          <Calculator />
        </section>
        
        <section className={styles.contact}>
          <Contact />
        </section>

        <section className={styles.themeSelector}>
          <Themes setColorTheme={setColorTheme} colorTheme={colorTheme} />
        </section>

      </div>
    </ThemeProvider>
  );
}

export default App;

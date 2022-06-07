import { faFacebook, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styles from "./contact.module.scss"

export default function Contact () {
    return(
    <section className={styles.container}>
        <div id={styles.github} className={styles.iconContainer}>
            <a href="https://github.com/CarlosG1272" target={"_blank"} className={styles.element}>
                <FontAwesomeIcon icon={faGithub}/>
            </a>
        </div>

        <div id={styles.facebook}  className={styles.iconContainer}>
            <a href="https://github.com/CarlosG1272" target={"_blank"} className={styles.element}> 
                <FontAwesomeIcon icon={faFacebook} />
            </a>
        </div>

        <div  id={styles.linkedin}  className={styles.iconContainer} >
            <a href="https://github.com/CarlosG1272" target={"_blank"} className={styles.element}> 
                <FontAwesomeIcon icon={faLinkedin} />
            </a>
        </div>
        
    </section>)   
}
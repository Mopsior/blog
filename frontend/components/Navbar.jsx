import NavbarButton from "./NavbarButton"
import styles from '../styles/Navbar.module.css'
import { useEffect, useState } from "react"

export default function Navbar() {
    const [ opened, setOpened ] = useState(true)
    const [ mobile, setMobile ] = useState(false)

    function change() { 
        opened ? setOpened (false) : setOpened(true)
    }

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth <= 470) {
                setOpened(false)
                setMobile(true)
            } else {
                setMobile(false)
                setOpened(true)
            }
        }
        handleResize()
        window.addEventListener('resize', handleResize)
    }, [setOpened, setMobile])

    return (
        <nav className={`${styles.navbar} roboto`}>
            { mobile
            ? <div onClick={change} className={styles.open_button}><span className="material-symbols-outlined">menu</span></div>
            : null
            }
            { opened
            ?
            <>
                <NavbarButton href="/" text="Główna" />
                <NavbarButton href="/articles" text="Artykuły" />
                <NavbarButton href="https://discord.gg/bvyvz6aVsG" text="Discord" blue/>
            </>   
            : null }
        </nav>
    )
}
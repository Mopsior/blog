import Link from 'next/link'
import styles from './../styles/NavbarButton.module.css'

export default function NavbarButton({ href, text, blue }) {
    return (
        <Link href={href}>
            <a>
                <div className={styles.button}>
                    { blue
                    ? <p style={{color: "var(--discord-color)"}}>{text}</p>
                    : <p>{text}</p> }
                </div>
            </a>
        </Link>
    )
}
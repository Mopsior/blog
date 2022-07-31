import styles from './Footer.module.css'
import Link from 'next/link'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <Link href={'https://github.com/Mopsior/blog'}>
                <p>&copy; Mopsior. All rights reserved. <a>Github</a></p>
            </Link>
        </footer>
    )
}
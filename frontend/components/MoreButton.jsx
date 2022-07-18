import Link from 'next/link'
import styles from '../styles/MoreButton.module.css'

export default function MoreButton({ text }) {
    return (
        <div className={styles.more}>
            <Link href="/articles">
                <a>
                    <div className={styles.button}>
                        <p>{text}</p>
                    </div>
                </a>
            </Link>
        </div>
    )
}
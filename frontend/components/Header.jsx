import styles from './../styles/main/Header.module.css'
import Image from 'next/image'

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.title}>
                <h1>
                    M
                    <Image src={`/${process.env.NEXT_PUBLIC_LOGO_DIR}`} alt="o" width={90} height={80} />
                    PSIOR
                </h1>
            </div>
            <div className={styles.description}>
                <h2>Blog Fullstack developera.</h2>
            </div>
        </header>
    )
}
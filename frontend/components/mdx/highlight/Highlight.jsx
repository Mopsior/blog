import styles from './Highlight.module.css'
import Image from 'next/image'

export default function Highlight({ style = 'correct', children }) {
    if (style === 'correct') {
        return (
            <div className={`${styles.correct} ${styles.highlight}`}>
                <div className={styles.icon}>
                    <Image src="/correct.png" width={64} height={64} alt="icon" />
                </div>
                <div className={styles.content}>
                    {children}
                </div>
            </div>
        )
    } else if (style === 'wrong') {
        return (
            <div className={`${styles.wrong} ${styles.highlight}`}>
                <div className={styles.icon}>
                    <Image src="/wrong.png" width={64} height={64} alt="icon" />
                </div>
                <div className={styles.content}>
                    {children}
                </div>
            </div>
        )
    } else if (style === 'info') {
        return (
            <div className={`${styles.info} ${styles.highlight}`}>
                <div className={styles.icon}>
                    <Image src="/info.png" width={64} height={64} alt="icon" />
                </div>
                <div className={styles.content}>
                    {children}
                </div>
            </div>
        )
    }
}
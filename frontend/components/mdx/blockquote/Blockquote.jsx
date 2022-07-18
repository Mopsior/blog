import styles from './Blockquote.module.css'

export default function Blockquote({ children }) {
    return (
        <div className={styles.blockquote}>
            {children}
        </div>
    )
}
import styles from './../styles/Tag.element.module.css'

export default function Tag({ title, color }) {
    return (
        <div className={styles.tag}>
            <span style={{ color: color, borderColor: color }}>{title}</span>
        </div>
    )
}
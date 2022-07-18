import styles from './Code.module.css'
import Prism from 'prismjs'
import "prismjs/themes/prism-tomorrow.css"
import { useEffect } from 'react'

export default function Code(props) {
    useEffect(() => {
        const highlight = async () => {
            await Prism.highlightAll()
        }
        highlight()
    })
    
    return (
        <div className={styles.code}>
            <div className={styles.title}>
                { props.children.props.className
                ? <p>{props.children.props.className.substring(9)}</p>
                : null
                }
            </div>
            <pre {...props}>
                <code {...props.children.props} />
            </pre>
        </div>
    )
}
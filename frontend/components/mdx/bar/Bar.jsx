import { useEffect, useState } from 'react'
import styles from './Bar.module.css'
import Date from './Date'

export default function Bar({ post }) {
    const [ time, setTime ] = useState(0)
    const [ minutes, setMinutes ] = useState('minuty')

    useEffect(() => {
        const words = post.content.trim().split(/\s+/).length
        setTime(Math.ceil(words / process.env.NEXT_PUBLIC_WPM))
        if (words < (process.env.NEXT_PUBLIC_WPM / 2)) {
            setTime('<1')
            setMinutes('minutę')
        } else if (time === 1) {
            setMinutes('minuta')
        }
    }, [post, time])

    return (
        <div className={styles.bar}>
            <div className={styles.date}>
                <Date iso={post.publishedAt} />
            </div>
            <div className={styles.time}>
                <p>{time} {minutes} czytania</p>
            </div>
        </div>
    )
}
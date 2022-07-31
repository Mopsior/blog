import styles from './Discord.module.css'
import DiscordButton from './DiscordButton'

export default function Discord() {
    return (
        <div className={styles.container}>
            <div className={styles.discord}>
                <div className={styles.left}>
                    <div>
                        <h1>Dołacz do nas!</h1>
                        <p>Bo nie ma niczego lepszego od wsparcia innych</p>
                    </div>
                </div>
                <div className={styles.right}>
                    <DiscordButton />
                </div>
            </div>
        </div>
    )
}
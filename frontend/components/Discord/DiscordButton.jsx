import styles from './DiscordButton.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function DiscordButton() {
    return (
        <Link href="https://discord.gg/bvyvz6aVsG" >
            <a>
                <div className={styles.button}>
                        <Image src="/Discord.png" alt='discord logo' width={30} height={"34px"} />
                        <p>WBIJAM</p>
                </div>
            </a>
        </Link>
    )
}
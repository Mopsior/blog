import styles from './Post.module.css'
import Image from 'next/image'
import Link from 'next/link'
import Tag from '../Tag/Tag'

export default function Post({ link, title, description, image = null, tags = null }) {
    let img
    image
    ? img = image.attributes.url
    : img = null

    return (
        <Link href={link}>
            <a>
                <div className={styles.post}>
                    { img 
                    ? <Image src={`${process.env.NEXT_PUBLIC_CMS_URL}${img}`} alt="Post Image" width={480} height={270} loading="lazy" />
                    : null
                    }
                    <h1>{title}</h1>
                    <p>{description}</p>
                    { tags
                    ? <Tag title={tags.attributes.name} color={tags.attributes.color} />
                    : null
                    }
                </div>
            </a>
        </Link>
    )
}
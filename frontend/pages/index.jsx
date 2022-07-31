import styles from '@/styles/main/Home.module.css'
import Header from '@/components/Header/Header'
import Posts from '@/components/Post/Posts'
import Discord from '@/components/Discord/Discord'
import axios from 'axios'
import Head from 'next/head'

export default function Home({ posts }) {
    return (
        <>
        <Head>
            <title>Mopsior - Blog</title>
            <meta name="title" content="Mopsior - Blog" />
            <meta name="description" content="Blog FullStack developera - Mopsiora" />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://blog.mopsior.pl/" />
            <meta property="og:title" content="Mopsior - Blog" />
            <meta property="og:description" content="Blog FullStack developera - Mopsiora" />
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:type" content="website" />
            <meta property="twitter:url" content="https://blog.mopsior.pl/" />
            <meta property="twitter:title" content="Mopsior - Blog" />
            <meta property="twitter:description" content="Blog FullStack developera - Mopsiora" />
        </Head>
        <div className={styles.container}>
            <Header />
            <Posts posts={posts.data} />
            <Discord />
        </div>
        </>
    )
}

export async function getStaticProps() {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_CMS_URL}/api/posts?populate=*`)

    return {
        props: {
            posts: res.data
        }
    }
}

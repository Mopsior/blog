import axios from 'axios'
import styles from '../../styles/articles/Articles.module.css'
import Post from '../../components/Post/Post'
import Head from 'next/head'

export default function Articles({ posts }) {
    return (
        <>
        <Head>
            <title>Artykuły</title>
            <meta name="title" content="Artykuły" />
            <meta name="description" content="Wszystkie artykuły na blogu Mopsiora" />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://blog.mopsior.pl/" />
            <meta property="og:title" content="Artykuły" />
            <meta property="og:description" content="Wszystkie artykuły na blogu Mopsiora" />
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:type" content="website" />
            <meta property="twitter:url" content="https://blog.mopsior.pl/" />
            <meta property="twitter:title" content="Artykuły" />
            <meta property="twitter:description" content="Wszystkie artykuły na blogu Mopsiora" />
        </Head>
        <div className={styles.container}>
            <h1 className={styles.title}>Artykuły</h1>
            <div className={styles.all_posts}>
                { posts.length > 0
                ?
                <div className={styles.posts}>
                        { posts.map((post) => {
                            return <div key={post.id} className={styles.post}>
                                <Post link={`${process.env.NEXT_PUBLIC_HOME_URL}/articles/${post.attributes.uid}`} title={post.attributes.title} description={post.attributes.description} tags={post.attributes.tag.data} image={post.attributes.thumbnail.data} />
                            </div>
                        }) }
                    </div>
                : <p className='no_posts'>Nie ma jeszcze żadnych postów!</p>
                }
            </div>
        </div>
        </>
    )
}

export async function getStaticProps() {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_CMS_URL}/api/posts?populate=*&sort=id:desc`)

    return {
        props: {
            posts: res.data.data
        }
    }
}

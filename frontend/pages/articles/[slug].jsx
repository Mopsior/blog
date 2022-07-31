import axios from "axios"
import { useRouter } from 'next/router'
import { renderMD } from '../../util/markdown'
import { MDXRemote } from "next-mdx-remote"
import styles from '../../styles/articles/Post.module.css'
import Image from 'next/image'
import Head from 'next/head'

import Code from '../../components/mdx/code/Code'
import Bar from '../../components/mdx/bar/Bar'
import Discord from '../../components/Discord/Discord'
import MoreButton from "../../components/MoreButton/MoreButton"
import Blockquote from "../../components/mdx/blockquote/Blockquote"
import Highlight from "../../components/mdx/highlight/Highlight"

const components = {
    pre: (props) => {
        return <Code {...props} />
    },
    h1: (props) => {
        return <h1 className="gradient" {...props} />
    },
    blockquote: (props) => {
        return <Blockquote {...props} />
    },
    Highlight,
}

export default function Post({ post, error, html }) {
    const router = useRouter()

    if (router.isFallback) {
        return <div>Loading...</div>
    }

    if (error) {
        return (
            <h1>Error</h1>
        )
    }

    return (
        <>
        <Head>
            <title>{post.title}</title>
            <meta name="title" content={post.title} />
            <meta name="description" content={post.description} />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://blog.mopsior.pl/" />
            <meta name="og:title" content={post.title} />
            <meta name="og:description" content={post.description} />
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:type" content="website" />
            <meta property="twitter:url" content="https://blog.mopsior.pl/" />
            <meta name="twitter:title" content={post.title} />
            <meta name="twitter:description" content={post.description} />
            {
                post.thumbnail.data
                ? <>
                    <meta name="og:image" content={`${process.env.NEXT_PUBLIC_CMS_URL}${post.thumbnail.data.attributes.url}`} />
                    <meta name="twitter:image" content={`${process.env.NEXT_PUBLIC_CMS_URL}${post.thumbnail.data.attributes.url}`} />
                </>
                : null
            }
        </Head>
        <article>
            <div className={styles.info}>
                {
                    post.tag.data
                    ? <p style={{ color: post.tag.data.attributes.color }}>{post.tag.data.attributes.name}</p>
                    : null
                }
                <h1 className="gradient">{post.title}</h1>
                <p>{post.description}</p>
                <div className={styles.info_image}>
                    {
                        post.thumbnail.data
                        ? <Image src={`${process.env.NEXT_PUBLIC_CMS_URL}${post.thumbnail.data.attributes.url}`} width={960} height={540} alt="thumbnail" />
                        : null
                    }
                </div>
            </div>
            <div className={styles.bar_div}>
                <Bar post={post} />
            </div>
            <div className={styles.content}>
                <MDXRemote {...html} components={components} />
            </div>
            <MoreButton text="Czytaj więcej" />
            <Discord />
        </article>
        </>
    )
}


export async function getStaticProps({ params }) {
    let res, renderedHTML
    try {
        res = await axios.get(`${process.env.NEXT_PUBLIC_CMS_URL}/api/posts?filters[uid][$eq]=${params.slug.toString()}&populate=*`)
        renderedHTML = await renderMD(res.data.data[0].attributes.content)
    } catch {
        return {
            props: {
                post: null,
                error: 404,
                html: null
            }
        }
    }

    return {
        props: {
            post: res.data.data[0].attributes,
            error: null,
            html: renderedHTML
        }
    }
}

export async function getStaticPaths() {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_CMS_URL}/api/posts?populate=*`)
    const paths = res.data.data.map((post) => {
        return { params: { slug: post.attributes.uid } }
    })

    return {
        paths,
        fallback: true
    }
}
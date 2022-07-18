import styles from './../styles/Posts.module.css'
import Post from './Post.element'
import MoreButton from './MoreButton'

export default function Posts({ posts }) {
    const last = posts.at(-1)
    const previous = posts.at(-2)

    return (
        <article className={styles.article}>
            <div className={styles.posts}>
                { posts.length > 0
                ? <>
                    <Post link={`http://localhost:3000/articles/${last.attributes.uid}`} title={last.attributes.title} description={last.attributes.description} tags={last.attributes.tag.data} image={last.attributes.thumbnail.data} />
                    { previous
                    ? <Post link={`http://localhost:3000/articles/${previous.attributes.uid}`} title={previous.attributes.title} description={previous.attributes.description} tags={previous.attributes.tag.data} image={previous.attributes.thumbnail.data} />
                    : null
                    }
                </>
                : <p className='no_posts'>Nie ma jeszcze żadnych postów!</p>
                }
            </div>
            <MoreButton text="Więcej artykułów" />
        </article> 
    )
}
import { useEffect } from "react"
import Card from "../../components/card/Card"
import { useContext } from "react"
import PostsContext from "../../contexts/PostsContext"

export default function Index() {

    const { posts, fetchPosts } = useContext(PostsContext)

    useEffect(() => {
        fetchPosts()
    }, [])


    return (
        <main>
            <section>
                <div className='container'>
                    <h1 className='title'>I nostri post</h1>
                </div>
                <div className="container">
                    <ul className="post-list">
                        {posts.map(post => (
                            <li className="list-element" key={post.id}>
                                <Card post={post} />
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </main>
    )
}
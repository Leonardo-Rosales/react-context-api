import { useEffect } from "react"
import { useContext } from "react"
import PostsContext from "../../contexts/PostsContext"
import PostList from "../../components/PostList"

export default function Index() {

    const { fetchPosts } = useContext(PostsContext)

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
                    <PostList />
                </div>
            </section>
        </main>
    )
}
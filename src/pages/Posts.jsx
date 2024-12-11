import { Link } from "react-router-dom"

export default function Posts() {

    const posts = [
        {
            id: 1,
            name: 'post 1'
        },
        {
            id: 2,
            name: 'post 2'
        },
        {
            id: 3,
            name: 'post 3'
        },
        {
            id: 4,
            name: 'post 4'
        },
        {
            id: 5,
            name: 'post 5'
        },
        {
            id: 6,
            name: 'post 6'
        }
    ]

    return (
        <main>
            <section>
                <h1>Posts</h1>
                <ul className="post-list">
                    {posts.map(post => (
                        <li key={post.id}>
                            <Link to={`/posts/${post.id}`}>
                                {post.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </section>
        </main>
    )
}
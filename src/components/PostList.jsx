import Card from "./card/Card"
import { useContext } from "react"
import PostsContext from "../contexts/PostsContext"

export default function PostList() {

    const { posts } = useContext(PostsContext)

    return (
        <ul className="post-list">
            {posts.map(post => (
                <li className="list-element" key={post.id}>
                    <Card post={post} />
                </li>
            ))}
        </ul>
    )
}
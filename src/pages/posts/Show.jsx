import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate, useParams, } from 'react-router-dom'
import { BASE_URI } from "../../Config"

export default function Show() {

    const [post, setPost] = useState([])
    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {

        axios.get(`${BASE_URI}/posts/${id}`)
            .then(res => {
                setPost(res.data)
                console.log(res.data);

            })
            .catch(err => console.error(err))
    }, [id])


    return (
        <main className='detail-body'>
            <section className='detail-card'>
                <figure>
                    <img src={`${BASE_URI}/${post.image}`} alt="" className='detail-img' />
                </figure>
                <div className='detail-body'>
                    <h1 className='detail-title'>{post.title}</h1>
                    <p className='detail-content'>{post.content}</p>
                    <p>
                        <strong>Tags: </strong>{post.tags ? post.tags.join(', ') : ''}
                    </p>
                    <button className='btn' onClick={() => navigate(-1)}>
                        back
                    </button>
                </div>
            </section>
        </main>
    )
}
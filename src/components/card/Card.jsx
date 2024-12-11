import placeHolderImage from "../../assets/placeholder.svg"
import { BASE_URI } from "../../Config"
import style from "../card/Card.module.css"
import { Link } from 'react-router-dom'

export default function Card({ post = {} }) {

    const { tags = [], title, image, content, id } = post
    const identify = tags.join(', ')

    return (
        <div className={style.card}>
            <figure>
                <img src={`${BASE_URI}/${image}`} alt="" className={style.card_img} />
            </figure>
            <div className={style.card_body}>
                <h3 className={style.card_title}>{title}</h3>
                <p className={style.card_content}>{content}</p>
                <p>
                    <strong>Tags: </strong>{identify}
                </p>
                <Link className={style.btn} to={`/posts/${id}`}>Vai alla pagina di dettaglio</Link>
            </div>
        </div>
    )
}
import { useState } from 'react'
import styles from './StarRating.module.css'

export default function StarRating(){
    const [rating,setRating] = useState(0)
    return(
        <div className={styles.StarRating}>
            <p>
           ☆ ☆ ☆ ☆ ☆★
            </p>
        <span>Has calificado {rating} estrellas</span>
        </div>
    )
}
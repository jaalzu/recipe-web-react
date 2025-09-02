import { useState } from 'react'
import styles from './StarRating.module.css'

export default function StarRating(){
    const [rating,setRating] = useState(0)

    const stars = [1, 2, 3, 4, 5];

  
    return(
        <div className={styles.StarRating}>
            {stars.map((star) => (
                <span key ={star} onClick={() => setRating(star)}>
                    {star <= rating ? "★" : "☆"}
                </span>
            ))}
            
            <br />
        <span>Has calificado {rating} estrellas</span>
        </div>
    )
}
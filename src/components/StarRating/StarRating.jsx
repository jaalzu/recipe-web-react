import { useState } from 'react'
import styles from './StarRating.module.css'

export default function StarRating(){
    const [rating,setRating] = useState(0)
      const [hover, setHover] = useState(0); 


    const stars = [1, 2, 3, 4, 5];
  
    return(
        <div className={styles.StarRating}>
            {stars.map((star) => (
                <span className={styles.star} 
                key ={star} 
                onClick={() => setRating(star)}
                onMouseEnter={() => setHover(star)}
                onMouseLeave={() => setHover(0)}
                style={{
              color: star <= (hover || rating) ? '#ffd700' : '#ddd'
            }}
                >
                 {star <= (hover || rating) ? "★" : "☆"}
                </span>
            ))}

            <br />
        <span>Has calificado {rating}/{stars.length} estrellas </span>
        </div>
    )
}



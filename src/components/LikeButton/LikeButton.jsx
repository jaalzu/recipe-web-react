import { useState } from 'react'
import styles from './LikeButton.module.css'

export default function LikeButton(){
    const [like,setLike] = useState(false)
    
    return(
        <div className={styles.likeButton}>♥ 0 Likes</div>
    )
}
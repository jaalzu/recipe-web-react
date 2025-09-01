import { useState } from 'react'
import styles from './LikeButton.module.css'
import Button from '../Button/Button'


export default function LikeButton(){
    const [isLiked,setIsLiked] = useState(false)

    const handleClickLike = () => {
           setIsLiked(!isLiked)
    }
    
    return(
        <div className={styles.likeButton}>
            <Button
            onClick={handleClickLike}
            className={isLiked ? styles.liked : styles.notLiked}
            >
            {isLiked ? "♥ 1 Likes" : '♥ 0 Likes'}
            </Button>
            </div>
    )
}
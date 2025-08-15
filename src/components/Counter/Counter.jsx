import { useState } from 'react';
import styles from './Counter.module.css'
import Button from '../Button/Button'

export default function Counter(){
    const [count,setCount] = useState(0);


    return (
        <div  className={styles.container}>
            <h1>{count}</h1>
            <div className={styles.buttons}>
                <Button color="green" onClick={() => setCount(count + 1)}>+ Incrementar</Button>
                <Button color="red" onClick={() => setCount(count - 1)} disabled={count === 0}>- Decrementar</Button>
            </div>
        </div>
    )
}
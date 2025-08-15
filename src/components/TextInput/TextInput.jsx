import { useState } from 'react';
import styles from './TextInput.module.css'


export default function TextInput(){
    const [text,setText] = useState('')

    return(
        <div className = {styles.container}>
            <input
            className = {styles.input}
            value={text}
            onChange={e => setText(e.target.value)}>
            </input>
            <p className = {styles.result}><b>Lo que escribiste: </b>{text}</p>
        </div>
    )
}
import {useState} from 'react'
import styles from './ColorPicker.module.css'


export default function ColorPicker(){
    const [selectedColor,setSelectedColor] = useState('#eceef1')


    const colors = ['red','green','brown','violet','pink']

    return(
        <div style={{display:'flex',gap:'30px',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
            <div className={styles.colorBoxPicker}
             style={{backgroundColor:selectedColor}}
            ></div>
            <div className={styles.colorsBox}>
                {colors.map(color => (
                <p key={color}
                className={styles.colorOption}
                style={{ backgroundColor:color }}
                onClick={() => setSelectedColor(color)}
                ></p>
            ))}</div>
        </div>
    )
}
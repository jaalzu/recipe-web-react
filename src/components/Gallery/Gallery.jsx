import Button from "../Button/Button"
import { useState } from 'react'
import styles from './Gallery.module.css'
export default function Gallery(){
    const [indiceImg , setIndiceImg] = useState(0)

    function prevImg(){
        setIndiceImg(indiceImg - 1)
    }
    function nextImg(){
        setIndiceImg(indiceImg + 1)
    }

    const imgs = ['/team1.pmg.png','/team3.png','gatito.jpg','aaaa.jpg']

    return (
        <>
        <div style={{display:'flex',gap:'20px',flexDirection:'column'}}>
            <img style={{width:'100%',height:'350px',aspectRatio:'1/1'}} src={imgs[indiceImg]} alt="" />
            <div style={{display:'flex',justifyContent:'center',gap:'25px'}}>
                <Button
                 color='red' 
                onClick={prevImg} 
               disabled={indiceImg === 0}
                >Anterior</Button>
                <Button color='green' onClick={nextImg} 
                 disabled={indiceImg === imgs.length -1}
                >Siguiente</Button>
            </div>
        </div>
        </>
    )
}


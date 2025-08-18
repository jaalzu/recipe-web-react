import Button from "../Button/Button"
import { useState } from 'react'


export default function Gallery(){
    const [indiceImg , setIndiceImg] = useState(0)

    const imgs = ['/team1.pmg.png','/team3.png','gatito.jpg','aaaa.jpg']


    const isFirst = indiceImg === 0;
    const isLast = indiceImg === imgs.length - 1; 

    if (imgs.length === 0) return <p>No hay imágenes disponibles</p>

    return (
        <>
        <div style={{display:'flex',gap:'20px',flexDirection:'column'}}>
            <img style={{width:'100%',height:'350px',aspectRatio:'1/1'}} src={imgs[indiceImg]} alt="" />
            <div style={{display:'flex',justifyContent:'center',gap:'25px'}}>
                <Button
                 color='red' 
                onClick={() => setIndiceImg((i) => i - 1)} 
               disabled={isFirst }
                >Anterior</Button>
                <Button color='green' onClick={() => setIndiceImg((i) => i + 1)} 
                 disabled={isLast}
                >Siguiente</Button>
            </div>
        </div>
        </>
    )
}


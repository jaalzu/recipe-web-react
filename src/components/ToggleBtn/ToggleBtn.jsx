import { useState } from 'react';
import Button from '../Button/Button';

export default function ToggleBtn(){
    const [display,setDisplay] = useState(false)

    function toggleDisplay(){
        setDisplay(!display)
    }

    return(
        <div >
            <Button
            color="blue"
            onClick={toggleDisplay}
            >
            {display ? 'Ocultar Mensaje' : 'Show Mesagge'}
            </Button>
            {display  && <p style={{fontSize:'1.2rem',backgroundColor:'#dcfce7',border:'1px,solid,green',padding:'10px',borderRadius:'5px'}}>Hola , soy el fucking mensaje!</p>}
        </div>
    )
}
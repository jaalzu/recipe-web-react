import Button from "../Button/Button";
import styles from './PasswordGenerator.module.css'
import OptionCard from "./OptionCard";
import { useState } from "react";

export default function PasswordGenerator(){
    const [numeros, setNumeros] = useState(false);
  const [mayusculas, setMayusculas] = useState(false);


    return (
        <>
        <div className={styles.characterLong}>
            <p>Longitud: 8 caracteres</p>
            <span>esta seria la barrita je</span>
        </div>

    <div>
            <p>⚙️ Opciones:</p>
      <OptionCard
        titulo="Incluir mayúsculas (A-Z)"
        color="#eff6ff"
        checked={mayusculas}
        onChange={setMayusculas}
      />
       <OptionCard
       titulo="Incluir números (0-9)"
       color="#f0fdf4"
       checked={numeros}
       onChange={setNumeros}
     />
      <OptionCard
        titulo="Incluir símbolos ($%&#!)"
        color="#fbf5ff"
        checked={mayusculas}
        onChange={setMayusculas}
      />
    </div>
        <Button
        style={{
            width: '100%',
            paddingBlock: '.9rem',
            background: 'linear-gradient(90deg, rgba(180,58,58,1) 0%, rgba(253,29,29,1) 100%, rgba(252,176,69,1) 100%)',
        }}
        >
            Generar Contraseña</Button>
        <div className={styles.passwordResult}><p>Aca va la clave</p> 
        <Button color='blue'>Copiar</Button>
        </div>
        <div className={styles.passwordTip}>
        <p>🔐 <b>Consejo de seguridad:</b>  Usa contraseñas de al menos 12 caracteres con mayúsculas, números y símbolos.</p>
        </div>
        </>
    )
}
import Button from "../Button/Button";
import styles from './PasswordGenerator.module.css'
import { useState } from "react";
import PasswordLengthSlider from "./PasswordLengthSlider";

export default function PasswordGenerator(){
  const [length,setLength] = useState(12)
  const [password,setPassword] = useState('')

  const generatePassword = () => {
    let charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?";
    let pass = "";

    for(let i = 0;i < length;i++){
      pass += charset[Math.floor(Math.random() * charset.length)];
    }
    
    pass = pass.split('').sort(() => Math.random() - 0.5).join('');

    setPassword(pass);
  }

  const copyPassword = () => {
    navigator.clipboard.writeText(password);
    
    const button = document.querySelector('[data-copy-btn]');
    const originalText = button.textContent;
    button.textContent = ' ¡Copiado!';
    button.style.background = '#22c55e';
    
    setTimeout(() => {
      button.textContent = originalText;
      button.style.background = '';
    }, 1500);
  }

  return (
    <>
      <div className={styles.characterLong}>
        <p>Longitud: {length} caracteres</p>
        <PasswordLengthSlider value={length} onChange={setLength}/>
      </div>
      
      <Button
        style={{
          width: '100%',
          paddingBlock: '.9rem',
          marginTop:'20px',
          background: 'linear-gradient(90deg, rgba(180,58,58,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)',
        }}
        onClick={generatePassword}
      >
        Generar Contraseña
      </Button>
      
      <div className={styles.passwordResult}>
        <p>{password}</p> 
        <Button 
          color='blue'
          onClick={copyPassword}
          disabled={!password}
          data-copy-btn
        >
          Copiar
        </Button>
      </div>
      
      <div className={styles.passwordTip}>
        <p>🔐 <b>Consejo de seguridad:</b> Usa contraseñas de al menos 12 caracteres con mayúsculas, números y símbolos.</p>
      </div>
    </>
  )
}
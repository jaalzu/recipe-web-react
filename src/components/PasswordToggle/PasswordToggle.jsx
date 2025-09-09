import {useState,useEffect} from 'react'
import styles from './PasswordToggle.module.css';

export default function PasswordToggle() {
  const [password,setPassword] = useState("")
  const [showPassword,setShowPassword] = useState(false)
  
  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  const togglePassword = () => {
    setShowPassword(!showPassword)
  }
  return (
    <div className={styles.passwordContainer}>
      <div className={styles.passwordInput}>
        <input 
        type={showPassword ? 'text' : 'password'} 
        placeholder="Contraseña" 
        value={password}
        onChange={handlePassword}
        />
        <p onClick={togglePassword}>
          {showPassword ? "🙈" : "👁️"}
          </p>
      </div>
    </div>
  );
}
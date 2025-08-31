import {useState} from 'react'
import styles from './PasswordToggle.module.css';

export default function PasswordToggle() {
  return (
    <div className={styles.passwordContainer}>
      <div className={styles.passwordInput}>
        <input type="password" placeholder="Contraseña" />
        <p>👁️</p>
      </div>
    </div>
  );
}
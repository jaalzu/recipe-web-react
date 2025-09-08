import {useState,useEffect} from 'react'
import styles from './PasswordToggle.module.css';

export default function PasswordToggle() {
  // return (
  //   <div className={styles.passwordContainer}>
  //     <div className={styles.passwordInput}>
  //       <input type="password" placeholder="Contraseña" />
  //       <p>👁️</p>
  //     </div>
  //   </div>
  // );

  const [count, setCount] = useState(0);

  // Este effect se ejecuta después de cada render
  useEffect(() => {
    document.title = `Clicks: ${count}`;
    console.log(count)
  });

  return <button onClick={() => setCount(count + 1)}>Clickeame</button>;
}
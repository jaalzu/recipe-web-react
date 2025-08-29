import  styles  from './Timer.module.css'
import { useState, useEffect } from "react";


export default function Timer(){
    const [fecha,setFecha] = useState(new Date());

  useEffect(() => {
    const intervalo = setInterval(() => {
      setFecha(new Date());
    }, 1000);

    return () => clearInterval(intervalo); 
  }, []);



        return (
            <>
                    <div className={styles.timerContainer}>
                    <div className={styles.timeShow}>Time: {fecha.toLocaleTimeString()}</div>
                    <div className={styles.timeShow}>Date: {fecha.toLocaleDateString()}</div>
                </div>
            </>
        )
    }
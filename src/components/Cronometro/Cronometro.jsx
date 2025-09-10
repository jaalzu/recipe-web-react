import { useState, useEffect } from 'react';
import styles from './Cronometro.module.css';

export default function Cronometro() {
   const [time,setTime] = useState(0)
   const [isRunning,setIsRunning] = useState(false)
    
    useEffect(() => {
        let interval = null;

        if(isRunning){
            interval = setInterval(() => {
                setTime(prev => prev + 1);
            },1000);
        }else{
            clearInterval(interval)
        }

        return () => clearInterval(interval)
    },[isRunning])


    const formatTime = (seconds) => {
        const h = String(Math.floor(seconds / 3600)).padStart(2,'0');
        const m = String(Math.floor((seconds % 3600) / 60 )).padStart(2,'0');
        const s = String(seconds % 60).padStart(2,'0');
        return `${h}:${m}:${s}`
    }


    const handleRunning = () => {
        setIsRunning(!isRunning)
    }

    const handleReset = () => {
        setTime(0)
        setIsRunning(false)
    }

    return (
        <div className={styles.cronometroContainer}>
            <h3 className={styles.title}>⏱️ Cronómetro</h3>
            <div className={styles.timeDisplay}>
                {formatTime(time)}
            </div>
            <div className={styles.buttonsContainer}>
                <button 
                    className={styles.startButton}
                    onClick={handleRunning}
                >
                    <span>{isRunning ? '⏸️' : '▶️'}</span>
                    <span>{isRunning ? 'Pausar' : 'Iniciar'}</span>
                </button>
                <button 
                    className={styles.resetButton}
                    onClick={handleReset}
                >
                    ⟳
                </button>
            </div>
        </div>
    );
}
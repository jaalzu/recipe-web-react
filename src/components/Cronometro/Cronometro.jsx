import { useState, useEffect } from 'react';
import styles from './Cronometro.module.css';

export default function Cronometro() {
   

    return (
        <div className={styles.cronometroContainer}>
            <h3 className={styles.title}>⏱️ Cronómetro</h3>
            <div className={styles.timeDisplay}>
                00:00:00
            </div>
            <div className={styles.buttonsContainer}>
                <button 
                    className={styles.startButton}
                >
                    Start
                    {/* <span>{isRunning ? '⏸️' : '▶️'}</span> */}
                    {/* <span>{isRunning ? 'Pausar' : 'Iniciar'}</span> */}
                </button>
                <button 
                    className={styles.resetButton}
                >
                    ⟳
                </button>
            </div>
        </div>
    );
}
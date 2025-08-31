import { useRef, useState } from 'react';
import styles from './Spotlight.module.css';

export default function Spotlight() {
  const cardRef = useRef();
  const [isActive, setIsActive] = useState(false);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    
    // Calcular posicion del mouse relativa a la card
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    card.style.background = `radial-gradient(circle 150px at ${x}px ${y}px, 
      rgba(255,255,255,0.1), 
      rgba(0,0,0,0.8) 50%)`;
  };

  const handleMouseEnter = () => {
    setIsActive(true);
  };

  const handleMouseLeave = () => {
    setIsActive(false);
    cardRef.current.style.background = 'linear-gradient(135deg, #1e3c72, #2a5298)';
  };

  return (
    <div
      ref={cardRef}
      className={`${styles.spotlightCard} ${isActive ? styles.active : styles.inactive}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={styles.content}>
        <h3 className={styles.title}>
          🔦 Spotlight
        </h3>
        <p className={styles.description}>
          {isActive ? '¡Mueve el mouse!' : 'Pasa el mouse por aquí'}
        </p>
      </div>
    </div>
  );
}


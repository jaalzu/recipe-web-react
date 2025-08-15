import styles from './Card.module.css'

export default function Card({titulo,tarea,pista,color,children}){
    return(
        <div className={styles.card}>
            <h2 style={{ color }}>{titulo}</h2>
            <p><b>Tu tarea</b>:{tarea}</p>
            {children && <div className={styles.extra}>{children}</div>}
            <span className={styles.pista}><b>Pista:</b> {pista}</span>
        </div>
    )
}
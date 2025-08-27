import  styles  from './Timer.module.css'

export default function Timer(){
    return (
        <>
            <div className={styles.timerContainer}>
                <div className={styles.timeShow}>00:00:00</div>
                <p className={styles.dateShow}>01/01/2024</p>
            </div>
        </>
    )
}
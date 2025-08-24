import styles from './CalculatorTips.module.css'
import Button from '../Button/Button'

export default function CalculatorTips(){
    return(
        <div className={styles.CalculatorTipsContainer}>
          <div className={styles.calculatorInputGroup}>
            <div className={styles.inputItem}>
                <label for='amount'>Monto de la cuenta</label>
                <input type="number" placeholder='100.00'/>
            </div>
            <div className={styles.inputItem}>
                <label for='persons'>Numero de personas</label>
                <input type="number" placeholder='2'/>
            </div>
          </div>
          <div className={styles.percentButtons}>
             <Button color='red'>10%</Button>
             <Button color='red'>15%</Button>
            <Button color='red'>20%</Button>
          </div>
        <div className={styles.results}>
            <p>Propina: <span>$0</span></p>
            <p>Total: <span>$0</span></p>
            <hr />
            <p>Por persona: <span>$0</span></p>
        </div>
        </div>
    )
}
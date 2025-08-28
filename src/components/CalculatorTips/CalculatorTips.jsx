import styles from './CalculatorTips.module.css'
import Button from '../Button/Button'
import { useState } from 'react'

export default function CalculatorTips(){
const [total,setTotal] = useState(0)
const [persons,setPersons] = useState(1)
const [tipPercent,setTipPercent] = useState(0);

const tipAmount = total * (tipPercent / 100)
const totalWithTip = total + tipAmount
const totalPerPerson = persons > 0 ? totalWithTip / persons : 0 

const formatMoney = (value) => `$${value.toFixed(2)}`

const tipOptions = [10,15,20]

    return(
        <div className={styles.CalculatorTipsContainer}>
          <div className={styles.calculatorInputGroup}>
            <div className={styles.inputItem}>
                <label htmlFor='amount'>Monto de la cuenta</label>
                <input type="number" 
                id='amount'
                value={total}
                onChange={(e) => setTotal(Number(e.target.value))}
                placeholder='100.00'/>
            </div>
            <div className={styles.inputItem}>
                <label htmlFor='persons'>Numero de personas</label>
                <input 
                type="number" 
                min="1"
                id='persons'
                value={persons}
                onChange={(e) => setPersons(Number(e.target.value))}
                placeholder='2'/>
            </div>
          </div>
          <div className={styles.percentButtons}>
          {tipOptions.map((percent) => (
            <Button
            key={percent}
            onClick={() => setTipPercent(percent)}
            color={tipPercent === percent ? 'green' : 'red'}
            >
              {percent}%
            </Button>
          ))}
          </div>
        <div className={styles.results}>
            <p>Propina: <span>{formatMoney(tipAmount)}</span></p>
            <p>Total: <span>{formatMoney(totalWithTip)}</span></p>
            <hr />
            <p>Por persona: <span>{formatMoney(totalPerPerson)}</span></p>
        </div>
        </div>
    )
}
import styles from './CalculatorTips.module.css'
import Button from '../Button/Button'
import { useState } from 'react'

export default function CalculatorTips(){
  const [total, setTotal] = useState('')
  const [persons, setPersons] = useState('')
  const [tipPercent, setTipPercent] = useState(0);

  const numTotal = parseFloat(total) || 0
  const numPersons = parseInt(persons) || 1
  
  const tipAmount = numTotal * (tipPercent / 100)
  const totalWithTip = numTotal + tipAmount
  const totalPerPerson = numPersons > 0 ? totalWithTip / numPersons : 0 

  const formatMoney = (value) => `$${value.toFixed(2)}`

  const tipOptions = [10, 15, 20];


  const resetCalculator = () => {
  setTotal(0);
  setPersons(1);
  setTipPercent(0);
}

  return(
    <div className={styles.CalculatorTipsContainer}>
      <div className={styles.calculatorInputGroup}>
        <div className={styles.inputItem}>
          <label htmlFor='amount'>Monto de la cuenta</label>
          <input 
            type="number" 
            id='amount'
            value={total}
            onChange={(e) => setTotal(e.target.value)}  
            placeholder='100.00'
          />
        </div>
        <div className={styles.inputItem}>
          <label htmlFor='persons'>Numero de personas</label>
          <input 
            type="number" 
            min="1"
            id='persons'
            value={persons}
            onChange={(e) => setPersons(e.target.value)}  
            placeholder='2'
          />
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
      <Button color='green' style={{marginTop:'20px'}} onClick={resetCalculator}>Reiniciar</Button>
    </div>
  )
}
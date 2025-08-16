import {useState} from 'react'
import styles from './Calculator.module.css'
import Button from '../Button/Button'

export default function Calculator(){
    const [number1,setNumber1] = useState(0)
    const [number2,setNumber2] = useState(0)
    const [result,setResult] = useState(0)
    const [error,setError] = useState('')

   const operations = {
  '+': { fn: (a, b) => a + b, color: 'red' },
  '-': { fn: (a, b) => a - b, color: 'blue' },
  '*': { fn: (a, b) => a * b, color: 'green' },
  '%': { fn: (a, b) => b !== 0 ? a % b : NaN, color: 'pink' }
}


    const calculate = (op) => {
  const a = Number(number1)
  const b = Number(number2)

  if (isNaN(a) || isNaN(b)) {
    setError("Por favor ingresa números válidos")
    setResult(null)
    return
  }

  const operation = operations[op].fn
  const res = operation(a, b)

  if (isNaN(res)) {
    setError("Operación inválida")
    setResult(null)
  } else {
    setError("")
    setResult(res)
  }
}
    
    return (
       <div>
        <div style={{display:'flex',flexDirection:'column',gap:'15px'}}>
            <input type="number"
                value={number1}
                onChange={(e) => setNumber1(e.target.value)}
            />
            <input type="number"
                value={number2}
                onChange={(e) => setNumber2(e.target.value)}
            />
        </div>

        <div style={{display:'flex',justifyContent:'space-evenly',gap:'10px',marginTop:'20px'}}>
           {Object.keys(operations).map(op => (
          <Button key={op} 
                  color={operations[op].color}
                  onClick={() => calculate(op)}>
            {op}
          </Button>
        ))}
        </div>

        {error && <p className={styles.error}>{error}</p>}
        
        {result !== null && (
        <div className={styles.result}>
          <span>Resultado</span>
          <p>{result}</p>
        </div>
      )}
       </div>
    )
}
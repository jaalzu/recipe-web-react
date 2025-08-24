import styles from './TemperatureConversor.module.css'
import { useState } from 'react'

export default function TemperatureConversor() {
  const [temps, setTemps] = useState({
  C: "",
  F: "",
  K: "",
})


  const converters = {
    C: (val) => ({
      C: val,
      F: (val * 9) / 5 + 32,
      K: val + 273.15,
    }),
    F: (val) => ({
      C: ((val - 32) * 5) / 9,
      F: val,
      K: ((val - 32) * 5) / 9 + 273.15,
    }),
    K: (val) => ({
      C: val - 273.15,
      F: ((val - 273.15) * 9) / 5 + 32,
      K: val,
    }),
  }

  function handleChange(value, scale) {
   if (value === "") {
    setTemps({ C: "", F: "", K: "" })
    return
  }

    const val = parseFloat(value)
  if (!isNaN(val)) {
    setTemps(converters[scale](val))
  }
  }

  return (
    <div className={styles.tempContainer}>
      <div className={styles.temperatureInput}>
        <label style={{ color: 'red' }}>Celsius (°C)</label>
        <input
          type="number"
          value={temps.C}
          onChange={(e) => handleChange(e.target.value, 'C')}
        />
      </div>

      <div className={styles.temperatureInput}>
        <label style={{ color: 'blue' }}>Fahrenheit (°F)</label>
        <input
          type="number"
          value={temps.F}
          onChange={(e) => handleChange(e.target.value, 'F')}
        />
      </div>

      <div className={styles.temperatureInput}>
        <label style={{ color: 'green' }}>Kelvin (K)</label>
        <input
          type="number"
          value={temps.K}
          onChange={(e) => handleChange(e.target.value, 'K')}
        />
      </div>
    </div>
  )
}

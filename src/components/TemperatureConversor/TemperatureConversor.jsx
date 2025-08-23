import styles from './TemperatureConversor.module.css'

export default function TemperatureConversor(){
    return (
        <div className={styles.tempContainer}>
            <div className={styles.temperatureInput}>
            <label id="Celsius" style={{color:'red'}}>Celsius(°C)</label>
            <input type="text" id="Celsius" placeholder="0"/>
            </div>
            <div className={styles.temperatureInput}>
            <label id="Fahr" style={{color:'blue'}}>Fahr(°F)</label>
            <input type="text" id="Fahr" placeholder="32"/>
            </div>
            <div className={styles.temperatureInput}>
            <label id="Kelvin" style={{color:'green'}}>Kelvin(K)</label>
            <input type="text" id="Kelvin" placeholder="273.15"/>
            </div>
        </div>
    )
}
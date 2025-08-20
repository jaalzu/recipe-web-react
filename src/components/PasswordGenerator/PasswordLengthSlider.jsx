import styles from './PasswordLengthSlider.module.css'

export default function PasswordLengthSlider({ value, onChange }) {
  const min = 8;
  const max = 32;

  return (
    <div className={styles.sliderContainer}>
        <div
        />
        <input
          type="range"
          min={min}
          max={max}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
        />
    </div>
  );
}

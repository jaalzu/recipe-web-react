import styles from "./OptionCard.module.css";

export default function OptionCard({ titulo, color, checked, onChange }) {
  return (
    <div
      className={`${styles.card} ${checked ? styles.checked : ""}`}
      style={{ backgroundColor: color }}
      onClick={() => onChange(!checked)}
    >
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        onClick={(e) => e.stopPropagation()} // 
      />
      <span>{titulo}</span>
    </div>
  );
}
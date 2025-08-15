import styles from './Button.module.css';

export default function Button({children,color = 'default',...props}){
    return (
        <div>
        <button
            className={`${styles.button} ${styles[color]}`}
            {...props}
            >
            {children}
        </button>
            </div>
    )
}
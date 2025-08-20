import Button from "../Button/Button";
import styles from './CardShopping.module.css'

export default function CardShopping({icon,name,price,onAdd}){
    return (
        <div className={styles.cardContainer}>
            <i >{icon}</i>
            <p>{name}</p>
            <span>${price}</span>
            <Button color={'orange'} onClick={onAdd}>+ Agregar</Button>
        </div>
    )
}
import CardShopping from "./CardShopping"
import { useState } from 'react';
import styles from './ShoppingCart.module.css'

export default function ShoppingCart(){
    return(
        <>
        <h3>Productos</h3>
        <div className={styles.productsGrid}>
            <CardShopping
            icon={'💻'}
            name={'Laptop'}
            price={1000}
            ></CardShopping>

            <CardShopping
            icon={'🖱️'}
            name={'Mouse'}
            price={25}
            ></CardShopping>

            <CardShopping
            icon={'🖥️'}
            name={'Monitor'}
            price={299}
            ></CardShopping>

            <CardShopping
            icon={'⌨️'}
            name={'Monitor'}
            price={75}
            ></CardShopping>
        </div>
        <div className={styles.cartContainer}>
        <h4> 🛒 Carrito</h4>
        <div className={styles.cartItemsShow}>
            <p>El carrito esta vacio</p>
        </div>
        <hr />
        <div className={styles.cartTotal}><span>Total:</span> <p>$0</p> </div>
        </div>
        </>
    )
}
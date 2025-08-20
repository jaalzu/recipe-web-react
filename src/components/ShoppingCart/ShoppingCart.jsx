import CardShopping from "./CardShopping"
import { useState } from 'react';
import styles from './ShoppingCart.module.css'
import {products} from "../../data/products"

export default function ShoppingCart(){

    return(
        <>
        <h3>Productos</h3>
        <div className={styles.productsGrid}>
            {products.map(({id,icon,name,price}) => (
                <CardShopping 
                key={id}
                icon={icon}
                name={name}
                price={price}
                />
            ))}
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
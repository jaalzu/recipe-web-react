import CardShopping from "./CardShopping"
import { useState } from 'react';
import styles from './ShoppingCart.module.css'
import {products} from "../../data/products"

export default function ShoppingCart(){
    const [cart,setCart] = useState([]);

    const addToCart = (id) => {
        const product = products.find(p => p.id === id);
        setCart([...cart,product])
    }
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
                onAdd={() => addToCart(id)}
                />
            ))}
        </div>
        <div className={styles.cartContainer}>
        <h4> 🛒 Carrito</h4>
        <div className={styles.cartItemsShow}>
            {cart.length === 0 ? (
                <p>El carrito esta vacio</p>
            ): (
                cart.map((item) => <p key={item.id}>{item.name} - {item.price}</p>)
            )}
        </div>
        <hr />
        <div className={styles.cartTotal}><span>Total:</span> ${cart.reduce((sum,item) => sum + item.price,0)} </div>
        </div>
        </>
    )
}
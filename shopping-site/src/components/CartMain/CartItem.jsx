import styles from "./CartMain.module.css"

export default function CartItem({cartProduct, handleCartRemove}){
    return (
        <div className={styles.cartItem}>
            <img src={cartProduct.image} alt=""></img>
            <div>
                <p>{cartProduct.title}</p>
                <button onClick={() => handleCartRemove(cartProduct)}>Remove Item</button>
            </div>
        </div>
    )
    
}
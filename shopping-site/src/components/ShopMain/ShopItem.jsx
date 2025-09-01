import styles from "./ShopMain.module.css"


export default function ShopItem({handleCartAdd, product}){

    return (
        <div className={styles.shopItem}>
            <h1 className={styles.itemTitle}>{product.title}</h1>
            <h2 className={styles.itemDescription}>{product.description}</h2>

            <h3>{product.category}</h3>
            <img className={styles.itemImage} src={product.image} alt="" />
            <p>{`$${product.price}`}</p>

            <div className={styles.purchase}>
                <label htmlFor="quantity">Qty:</label>
                <input type="number" id="quantity" name="quantity" />
                <button onClick={() => handleCartAdd(product)}>Add To Cart</button>
            </div>
            
        </div>
    )
}



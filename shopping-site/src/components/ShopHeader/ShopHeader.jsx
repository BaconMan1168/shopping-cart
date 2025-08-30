import { useState } from "react";
import { Link } from "react-router-dom";
import cartIcon from "./icons8-shopping-cart-30.png"
import styles from "./ShopHeader.module.css"

const ShopHeader = () => {
    const [currPage, setCurrPage] = useState("Home");

    function handleClick(e){
        setCurrPage(e.target.textContent);
    }

    return (
        <header className={styles.header}>
            <h1>Shopple</h1>
            <nav className={styles.navHeader}>
                <Link to="/" className={currPage === "Home" ? `on-focus ${styles.navLinks}` : `${styles.navLinks}`} onClick={handleClick}>Home</Link>
                <Link to="/about" className={currPage === "About" ? `on-focus ${styles.navLinks}` : `${styles.navLinks}`} onClick={handleClick}>About</Link>
                <Link to="/shop" className={currPage === "Shop" ? `on-focus ${styles.navLinks}` : `${styles.navLinks}`} onClick={handleClick}>Shop</Link>
                
            </nav>
            <Link to="/cart" className={currPage === "Cart" ? `on-focus ${styles.cartImg}` : `${styles.cartImg}`} onClick={handleClick}>
                <img className={styles.cartImg} src={cartIcon}></img>
            </Link>
            
        </header>
    )
}



export default ShopHeader;
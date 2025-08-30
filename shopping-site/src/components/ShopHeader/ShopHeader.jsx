import { useState } from "react";
import { Link } from "react-router-dom";
import cartIcon from "./icons8-shopping-cart-30.png"

const ShopHeader = () => {
    const [currPage, setCurrPage] = useState("Home");

    function handleClick(e){
        setCurrPage(e.target.textContent);
    }

    return (
        <header>
            <h1>Shopple</h1>
            <nav>
                <Link to="/" className={currPage === "Home" ? "on-focus" : ""} onClick={handleClick}>Home</Link>
                <Link to="/about" className={currPage === "About" ? "on-focus" : ""} onClick={handleClick}>About</Link>
                <Link to="/shop" className={currPage === "Shop" ? "on-focus" : ""} onClick={handleClick}>Shop</Link>
                <Link to="/cart" className={currPage === "Cart" ? "on-focus" : ""} onClick={handleClick}>Cart</Link>
            </nav>
            <img src={cartIcon}></img>
        </header>
    )
}



export default ShopHeader;
import { useState } from "react";
import { Link } from "react-router-dom";
import cartIcon from "./icons8-shopping-cart-30.png"

const HeaderNav = () => {
    const [currPage, setCurrPage] = useState("Home");


    return (
        <header>
            <h1>Shopple</h1>
            <nav>
                <Link to="/" className={currPage === "Home" ? "on-focus" : ""}>Home</Link>
                <Link to="About" className={currPage === "About" ? "on-focus" : ""}>About</Link>
                <Link to="Shop" className={currPage === "Shop" ? "on-focus" : ""}>Shop</Link>
            </nav>
            <img src={cartIcon}></img>
        </header>
    )
}



export default HeaderNav;
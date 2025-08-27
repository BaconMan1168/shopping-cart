import { useState } from "react"
import cartIcon from "./icons8-shopping-cart-30.png"

export default function HeaderNav(){
    const [currPage, setCurrPage] = useState("Home");


    return (
        <header>
            <h1>Shopple</h1>
            <nav>
                <a className={currPage === "Home" ? "on-focus" : ""}>Home</a>
                <a className={currPage === "About" ? "on-focus" : ""}>About</a>
                <a className={currPage === "Shop" ? "on-focus" : ""}>Shop</a>
            </nav>
            <img src={cartIcon}></img>
        </header>
    )
}
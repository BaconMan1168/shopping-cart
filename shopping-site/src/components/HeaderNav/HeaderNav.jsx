import { useState } from "react"
import { Link } from "react-router-dom"
import cartIcon from "./icons8-shopping-cart-30.png"

export default function HeaderNav(){


    return (
        <header>
            <h1>Shopple</h1>
            <nav>
                <a>Home</a>
                <a>About</a>
                <a>Shop</a>
            </nav>
            <img src={cartIcon}></img>
        </header>
    )
}
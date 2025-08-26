import { useState } from "react"
import { Link } from "react-router-dom"

export default function HeaderNav(){


    return (
        <header>
            <h1>Shopple</h1>
            <nav>
                <a>Home</a>
                <a>About</a>
                <a>Shop</a>
            </nav>
        </header>
    )
}
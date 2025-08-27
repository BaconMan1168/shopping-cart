import { Link } from "react-router-dom"

export default function HomeMain(){
    return (
        <main>
            <h3>Welcome to Shopple</h3>
            <h1>Elevate your shopping experience with Shopple</h1>
            <h2>Clothes as cheap as $5.00</h2>

            <Link to="Shop">Shop Now!</Link>
        </main>
    )
}
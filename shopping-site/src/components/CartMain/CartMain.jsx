import CartItem from "./CartItem.jsx"
import { useOutletContext } from "react-router-dom"

export default function CartMain(){
    const { cartItems, removeFromCart } = useOutletContext();

    if (cartItems.length === 0){
        return (
            <main>
                <h1>Cart is Empty (Go Shop!)</h1>
            </main>
        )
    }

    return (
        <main>
            {cartItems.map(product => <CartItem key={`cart-item: ${product.id}`} cartProduct={product} handleCartRemove={(product) => removeFromCart(product)} />)}
        </main>
    )
}
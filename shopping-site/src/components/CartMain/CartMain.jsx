import CartItem from "./CartItem.jsx"

export default function CartMain({cartProducts, handleCartRemove}){
    return (
        <main>
            {cartProducts.map(product => <CartItem cartProduct={product} handleCartRemove={handleCartRemove} />)}
        </main>
    )
}
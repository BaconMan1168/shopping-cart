export default function CartItem(cartProduct, handleCartRemove){
    <div>
        <img src={cartProduct.image} alt="" />
        <div>
            <p>{cartProduct.title}</p>
            <button onClick={handleCartRemove}>Remove Item</button>
        </div>
    </div>
}
export default function CartItem({cartProduct, handleCartRemove}){
    console.log(cartProduct);
    return (
        <>
            <img src={cartProduct.image} alt=""></img>
            <div>
                <p>{cartProduct.title}</p>
                <button onClick={() => handleCartRemove(cartProduct)}>Remove Item</button>
            </div>
        </>
    )
    
}
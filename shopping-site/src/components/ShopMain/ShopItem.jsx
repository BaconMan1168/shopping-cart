export default function ShopItem({handleCartAdd, product}){
    return (
        <div>
            <h1>{product.title}</h1>
            <h2>{product.description}</h2>

            <h3>{product.category}</h3>
            <img src={product.image} alt="" />
            <p>{product.price}</p>

            <div>
                <label htmlFor="quantity">Qty:</label>
                <input type="number" id="quantity" name="quantity" />
                <button onClick={() => handleCartAdd(product)}>Add To Cart</button>
            </div>
            
        </div>
    )
}



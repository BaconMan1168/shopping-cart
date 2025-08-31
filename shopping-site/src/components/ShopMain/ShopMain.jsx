import { useEffect, useState } from "react"
import ShopItem from "./ShopItem"
import { useOutletContext } from "react-router-dom"
import styles from "./ShopMain.module.css"

export default function ShopMain(){
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const { addToCart } = useOutletContext();

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then(response => {
            if (response.status >= 400){
                throw new Error("server error");
            }

            return response.json()
        })
        .then(data =>  setProducts(data))
        .catch(error => setError(error))
        .finally(() => setLoading(false));
    }, [])

    if (loading) return <h1>Loading Store...</h1>;
    if (error) return <h1>A network error has occured.</h1>;

    return (
        <main className={styles.shopMain}>
            {products.map(product => <ShopItem key={product.id} handleCartAdd={product => addToCart(product)} product={product} />)}
        </main>
        
    )
    
}
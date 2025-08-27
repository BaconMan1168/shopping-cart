import { useEffect, useState } from "react"

export default function ShopMain({handleCartAdd}){
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

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
    
}
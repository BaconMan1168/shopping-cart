import { useEffect, useState } from "react"

export default function ShopMain({handleCartAdd}){
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then(response => {
            if (response.status >= 400){
                throw new Error("server error");
            }

            return response.json()
        })
        .then(data =>  setProducts(data))
        .catch(error => setError(error));
    }, [])

    if (error) return <h1>A network error has occured.</h1>
}
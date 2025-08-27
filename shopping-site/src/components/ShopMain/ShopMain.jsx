import { useEffect, useState } from "react"

export default function ShopMain({handleCartAdd}){
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data =>  setProducts(data));
    }, [])
}
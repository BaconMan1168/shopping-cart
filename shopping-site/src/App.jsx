import ShopHeader from "./components/ShopHeader/ShopHeader"
import ShopFooter from "./components/ShopFooter/ShopFooter"
import { Outlet } from "react-router-dom"
import { useState } from "react"
import styles from './App.module.css'

function App() {
  const [cartItems, setCartItems] = useState([]);

  function addToCart(newItem){
    const newCart = [...cartItems, newItem];
    setCartItems(newCart);
  }

  function removeFromCart(itemToRemove){
    const newCart = cartItems.filter(item => item !== itemToRemove);
    setCartItems(newCart);
  }

  return (
    <div className={styles.container}>
      <ShopHeader />
      <Outlet context={{ addToCart, cartItems, removeFromCart }} />
      <ShopFooter />
    </div>
  )
}

export default App

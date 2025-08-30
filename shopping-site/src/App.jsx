import { useState } from 'react'
import ShopHeader from "./components/ShopHeader/ShopHeader"
import ShopFooter from "./components/ShopFooter/ShopFooter"
import HomeMain from "./components/HomeMain/HomeMain"

import './App.css'

function App() {

  return (
    <div>
      <ShopHeader />
      <HomeMain />
      <ShopFooter />
    </div>
  )
}

export default App

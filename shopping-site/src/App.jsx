import ShopHeader from "./components/ShopHeader/ShopHeader"
import ShopFooter from "./components/ShopFooter/ShopFooter"
import { Outlet } from "react-router-dom"

import './App.css'

function App() {

  return (
    <div>
      <ShopHeader />
      <Outlet />
      <ShopFooter />
    </div>
  )
}

export default App

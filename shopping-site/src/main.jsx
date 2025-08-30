import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeMain from "./components/HomeMain/HomeMain.jsx"
import ShopMain from "./components/ShopMain/ShopMain.jsx"
import AboutMain from "./components/AboutMain/AboutMain.jsx"
import CartMain from "./components/CartMain/CartMain.jsx"
import App from './App.jsx'

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      { path: "/", element: <HomeMain /> },
      { path: "/shop", element: <ShopMain /> },
      { path: "/about", element: <AboutMain /> },
      { path: "/cart", element: <CartMain /> }
    ]
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

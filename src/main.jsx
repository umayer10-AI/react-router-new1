import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './component/Home.jsx'
import About from './component/About.jsx'
import Conatct from './component/Conatct.jsx'
import Product from './component/Product.jsx'
import axios from "axios"
import ProductDetails from './component/ProductDetails.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    Component: App,
    children: [
      {index: true, Component: Home},
      {path: 'about', Component: About},
      {path: 'contact', Component: Conatct},
      {
        path: "product",
        // loader: async () => {
        //   const a = await fetch("https://jsonplaceholder.typicode.com/users")
        //   return a.json()
        // },
        // loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
        loader: async () => {
          const a = await axios.get("https://jsonplaceholder.typicode.com/users")
          return a.data
        },
        Component: Product
      },
      {
        path: "product/:id",
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`),
        Component: ProductDetails
      },
    ]
  },
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>
  </RouterProvider>,
)

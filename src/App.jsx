import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './layout/layout'
import Home from './pages/home'
import About from './pages/about'
import Contact from './pages/contact'
import SignUp from './pages/signUp'
import ProductById from './pages/productById'
import { Toaster } from 'react-hot-toast'
import Cart from './pages/cart'
import Category from './pages/category'


const App = () => {
  const router = createBrowserRouter([{
    path:'/',
    element:<Layout/>,
    children:[
      {
       
        index:true,
        element:<Home/>

      },
      {
        path:'/about',
        element:<About/>
      },
      {
        path:'/contact',
        element:<Contact/>
      },
      {
        path:'/signUp',
        element:<SignUp/>
      },
      {
          path:'/:id',
          element : <ProductById/>
      },
      {
        path:'/cart',
        element:<Cart/>
      },
      {
        path: "/category",
        element:<Category/>
      },
      {
        path: "/category/:id",
         element:<Category/>
      },
      {
        path:'*',
        element:<h1>Page not found</h1>  // Default route if no other matches are found  // Replace with your 404 page component here  // e.g., <NotFoundPage />  // or <Redirect to="/not-found" />  // or <h1>Page not found</h1>  // or <Redirect to="/not-found" />  // or <h1>Page not found</h1>  // or <Redirect to="/not-found" />  // or <h1>Page not found</h1>  // or <Redirect to="/not-found" />  // or <h1>Page not found</h1>  // or <Redirect to="/not-found" />  // or <h1>Page not found</h1>  // or <Redirect to="/not-found" />  // or <h1>Page not found
      }
    ]

  }])
  return (
    <>
        <Toaster/>
        <RouterProvider router={router}/> 
    
    </>
  )
}

export default App
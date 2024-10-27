import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, Routes, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Layout from './Layout.jsx'
import Contact from './components/Contact/Contact'
import User from './components/User/User.jsx'
import { Route } from 'react-router-dom'
import Github, { githubInfoLoader } from './components/Github/Github.jsx'

//  way-1

// const router = createBrowserRouter([
//   {
//     path:'/',
//     element:<Layout/>,
//     children:[
//       {
//         path:"",
//         element:<Home/>
//       },
//       {
//         path:"about",
//         element:<About/>
//       },
//       {
//         path:"contact",
//         element:<Contact/>
//       }
//     ]
//   }
// ])

// or 


// way2-

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
        <Route path='' element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='user/:userid' element={<User/>}/>
        {/* <Route path='github' element={<Github/>}/> */}
        {/* another way ----- to represent github route */}
        <Route
        loader={githubInfoLoader} 
        // loader ke andar hi apna pura ka pura api call likh skate hai
        //Here you can also callback your function and perform required action -
        path='github'
        element={<Github/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}/>
    {/* RouterProvider ko props chahiye hota hai  */}
  </React.StrictMode>,
)

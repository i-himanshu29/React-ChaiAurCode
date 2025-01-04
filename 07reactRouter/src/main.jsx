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

//  way-1 to create router

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


// way2- to create a router

const router = createBrowserRouter(
  createRoutesFromElements(// their is createrRoutesFromChild as well but we use createRoutesFromElements
    <Route path='/' element={<Layout/>}>  // some people says root as well
        <Route path='' element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        {/* you can also do nexting for about  like that...*/}
        {/* <Route path='about/hitesh' element={<About/>}>
            <Route path='Hitesh'/>
        </Route> */} 
        <Route path='contact' element={<Contact/>}/>
        <Route path='user/:userid' element={<User/>}/>// always use id with the user so that the details are of that person
        {/* <Route path='github' element={<Github/>}/> */}

        {/* another way ----- to represent github route */}
        <Route
        loader={githubInfoLoader}  // loader use karne se apka data use effect se bhi pahle aana suru ho jata hai cursor github par le jane se hi
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

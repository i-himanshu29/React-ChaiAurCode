import React from 'react'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import { Outlet, createBrowserRouter } from 'react-router-dom'



const Layout = () => {
  return (
    // Header and Footer are fix 
    // outlet -> iske andar react router ki taraf se nesting ki ja sakti hai (main.js me top level par Layout de do)
    <>
    <Header/>  
    <Outlet/>  
    <Footer/> 
    </>
  )
}

export default Layout
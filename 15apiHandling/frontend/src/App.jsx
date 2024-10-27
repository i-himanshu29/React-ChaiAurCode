import { useState,useEffect } from 'react'

import './App.css'
import axios from "axios"

function App() {

  // const [products,error,loading]=customReactQuery('/api/products')

  const [products, setProducts] = useState([])
  const [error,setError]= useState(false)
  const [loading,setLoading] = useState(false)
  const [search,setSearch] = useState('')

  // some cases i want ki axios me .then use na karu jaha par promise ke bharose
  //  nhi baith sakta ki jab pura hoga tab kaam karunga

  // axios ke saath async - await use karna hai to iife ka use karoge 

  useEffect(()=>{
    const controller = new AbortController()
    //iife ;()()
    ;(async () =>{
      try {
        setLoading(true)
        setError(false)

        const response = await axios.get('/api/products?search='+search,{
          signal:controller.signal
        })
        console.log(response.data);
        setProducts(response.data)
      } catch (error) {
        if(axios.isCancel(error)){
          console.log('Req cancelled',error.message)
          return 
        }
        setError(true)
        setLoading(false)
      }
    })()

    //cleanup method-jo component mount hua hai use yaha khatm bhi karna hota hai
    return()=>{
      controller.abort()
    }
  },[search])

  // if(error){
  //   return <h1>Something went wrong</h1>
  // }

  // if(loading){
  //   return <h1> Loading...</h1>
  // }
  return (
    <>
      <h1>Welcome to chai</h1>
      <input type="text" placeholder="search" value={search} 
      onChange={(e)=> setSearch(e.target.value)} 

      />
      {{loading} && (<h1>Loading...</h1>)}
      {error && (<h1>Something went wrong1</h1>)}
      
      <h2>Num of products are:{products.length}</h2>
    </>
  )
}

export default App

//*************************************** */
// hook


// const customReactQuery=(urlPath)=>{
//   const [products, setProducts] = useState([])
//   const [error,setError]= useState(false)
//   const [loading,setLoading] = useState(false)

//   useEffect(()=>{
//     ;(async () =>{
//       try {
//         setLoading(true)
//         setError(false)

//         const response = await axios.get(urlPath)
//         console.log(response.data);
//         setProducts(response.data)
//       } catch (error) {
//         setError(true)
//         setLoading(false)
//       }
//     })()
//   },[])
// return [products,error,loading]
// }
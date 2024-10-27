import { useState,useEffect } from 'react'
import axios from "axios"
import './App.css'

function App() {
  const [jokes, setJokes] = useState([])

  // axios or fetch api 

  useEffect(()=>{
    axios.get('/api/jokes')
    .then((response)=>{
      setJokes(response.data)
    })
    .catch((error)=>{
      console.log(error)
    })
  })

  return (
    <>
      <h1>Hey Welcome to chai</h1>
      <p>Jokes:{jokes.length}</p>
      {
        jokes.map((joke,index)=>(
          //map me key lagana jaruri hai, nhi too react ko pata nhi chalega ki ek element par loop laga arha hu ki alag alag elements hai 
          <div key= {joke.id}>
            <h3>{joke.title}</h3>
            <p>{joke.content}</p>
          </div>
        ))
      }
    </>
  )
}

export default App


// React ka kaam ye hai agar state me ya props me koi change aye to ek pura ka pura component render ya rerender ho
import { useState,useEffect } from 'react'

import './App.css'

function App() {
  const [value, setValue] = useState(1)
  // const [multipliedValue,setMultipliedValue]=useState(1)
  // meanwhile their is no need to  create an state it can be done with the variable ... this can be asked in senior interviews 
  let multipliedValue= value*5

  const multiplybyfive=()=>{
    //  setMultipliedValue(value*5)
     setValue(value+1)
  }

  // useEffect(()=>{
  //   multipliedValue()
  // },[value])

  return (
    <>
      <h1>Hey Welcome to chai</h1>
      <h1>Main Value:{value}</h1>
      <button
      onClick={multiplybyfive}
      >click to multiply by 5</button>
      <h2>Multiplied Value:{multipliedValue} </h2>
    </>
  )
}

export default App


/*

function App() {
  console.log("App rendered", Math.random());
  const [value, setValue] = useState({
    value: 0,
  })
  
  
  //const [multipliedValue, setMultipliedValue] = useState(1)
  //let multipliedValue = value * 5

  // const multiplybyfive = () => {
  //   //setMultipliedValue(value * 5)
  //   setValue(value + 1)
  // }

  const clickMe = () => {
    setValue({
      value: 0,
    })
  }


  return (
    <>
      <h1>Main value: {value.value} </h1>
      <button
      onClick={clickMe}
      >Click to multiply by 5</button>
       <h2>Multiplied value: {multipliedValue} </h2> 
      </>
      )
    }
    
    export default App
    */
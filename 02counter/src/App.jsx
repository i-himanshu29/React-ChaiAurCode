// React hooks -> like useState,useEffect,useRef etc. ye sab UI ko update karne ke kaam aata hai
//useState--> let [counter,setCounter(ye ek method hai)] = useState(15)
// As we see before addValue karne par counter badh raha tha but wo UI 
//me nhi dikh raha tha ....use UI me show karne ke liye hooks ka use kiya gya hai

// Aur hamne ye bhi dekha ki agr variable bahot sari jaah hai to use ek hi jagah se update kar skate 
//hai ..jabki JS me aisa nhi tha waha document.getElementByID karke sare tags ke naam baar baar 
//de kar update karna padta tha

import { useState } from 'react'

import './App.css'

function App() {

  let [counter,setCounter] = useState(0)

  // let counter = 15;

  const addValue = () =>{
    
    // console.log("clicked",Math.random());

    counter = counter+1;
    setCounter(counter)

    console.log("Value added",counter)
    // or 

    // setCounter(counter+1);
  }

  

  const removeValue = () =>{
    // counter = counter-1;
    // setCounter(counter)

    // or 

    setCounter(counter-1)
  }
  const removeValue1 = () =>{ 
    if(counter>0){
      setCounter(counter-1)
    }
  }

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter value:{counter}</h2>

      <button
      onClick={addValue} >Add value</button>
      <br/>
      <button  onClick={removeValue}>Remove value</button>
      <p>footer:{counter}</p>
    </>
  )
}

export default App


//Assignment->Set the condition On clicking the remove value we do not go to -ve value
//set the condition on clicking the addValue we do not go beyond 20

// import { useState } from 'react'


// import './App.css'

// function App() {

//   let [counter,setCounter] = useState(0)

//   const addValue1 = () =>{
//     if(counter<20){
//       setCounter(counter+1);
//     } 
//   }

//   const removeValue1 = () =>{ 
//     if(counter>0){
//       setCounter(counter-1)
//     }
//   }

 
//   return (
//     <>
//       <h1>Chai aur React</h1>
//       <h2>Counter value:{counter}</h2>

//       <button
//       onClick={addValue1} >Add value</button>
//       <br/>
//       <button  onClick={removeValue1}>Remove value</button>
//       <p>footer:{counter}</p>
//     </>
//   )
// }

// export default App
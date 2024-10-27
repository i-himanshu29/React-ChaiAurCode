import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'



ReactDOM.createRoot(document.getElementById('root')).
render(
    <App />
)


function MyApp() {
  return (
    <div>
      <h1>Custom App !</h1>
    </div>
  )
}

/*

//React convert hoti hai js me ->customReact folder me customreact file me jo reactElement hai uss tarah react convert hota hai parse hoke
ReactDOM.createRoot(document.getElementById('root')).
render(
    <MyApp />

    //you can also write becoz MyApp is function

    // MyApp()//but don't do this
)

//********************************************************** *
const ReactElement = {
  type:'a',
  props:{
      href:'https://google.com',
      target:'_blank'
  },
  children:'click me to visit google'
}

//Ye jo ReactElement likha gya hai ye custom element hai aur iska custom render ka code nhi 
//likha gaya hai iseliye ye code nhi chal raha hai ->customReact folder me customreact.js file ki tarah

// ye neeche wala render react ne likha hai -> ye jo parameter expect kar raha tha wo nhi mila

ReactDOM.createRoot(document.getElementById('root')).
render(
    <ReactElement />
)


//******************************************** *
const anotherElement = (
  <a href="https://google.com" target='_blank'>Visit google</a>
)

ReactDOM.createRoot(document.getElementById('root')).
render(
    anotherElement
)
// ye chal gya

/*************************************************** *
// const anotherElements = (
//   <a href="https://google.com" target='_blank'>Visit google</a>
// )

const reactElement = React.createElement(
  'a',//tag
  {href:'https://google.com',target:'_blank'},//object
  'click me to visit google'
  )

ReactDOM.createRoot(document.getElementById('root')).
render(
  reactElement
)

*/
const anotherUser = 'Chai aur code adda'

const reactElement = React.createElement(
  'a',//tag
  {href:'https://google.com',target:'_blank'},//object
  'click me to visit google',
  anotherUser
)

ReactDOM.createRoot(document.getElementById('root')).
render(
  reactElement
)

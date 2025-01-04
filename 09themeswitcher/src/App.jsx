
import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './context/theme'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'

function App() {

  const [themeMode,setThemeMode] = useState("light")

  //Method Name should be same as it passed in the ThemeProvider as the value
  const lightTheme = () =>{
    setThemeMode("light")
  }

  const darkTheme = ()=>{
    setThemeMode("dark")
  }

  //how actual change in theme
// useEffect is a React hook that lets you perform side effects in functional components.
//  It’s commonly used for tasks like fetching data, subscribing to events, or updating the DOM in response to changes.
  useEffect(()=>{
    document.querySelector('html').classList.remove("light","dark")
    document.querySelector('html').classList.add(themeMode)
  },[themeMode])

  return (
   <ThemeProvider  value={{themeMode,lightTheme,darkTheme}}>
       <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
              <ThemeBtn/>
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card/>
          </div>
        </div>
    </div>
   </ThemeProvider>

  )
}

export default App

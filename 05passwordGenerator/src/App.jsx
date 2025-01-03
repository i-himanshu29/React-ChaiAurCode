import { useState ,useEffect,useCallback,useRef} from 'react'

import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed,setNumberAllowed] = useState(false)
  const [charAllowed,setCharAllowed] = useState(false)
  const [password,setPassword] = useState("")

  //useRef hook is the reference hook used for taking the reference for anything
  const passwordRef = useRef(null)

  // Dependencies of useCallback() is used for optimization
  // This project can be done without callback as well , with the useEffect
  const passwordGenerator = useCallback(()=>{
    let pass = ""
    let str = 
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    // if number are allowed then use number otherwise char use
    if(numberAllowed) str+="0123456789"
    if(charAllowed) str+="!~@#$%^&*?+_-|\/>,<."

    // Generate a random number from satrting to the length of the str
    for(let i=1;i<=length;i++){
      let char = Math.floor(Math.random()*str.length+1)
      pass += str.charAt(char)
    }
    setPassword(pass)

  },[length,numberAllowed,charAllowed,setPassword])/// Dependencies of useCallback() is used for optimization

  const copyPasswordToClipboard = useCallback(()=>{

    // to show the user that it has been copied the text
    passwordRef.current?.select();
    // It give the range what length of text is selected
    passwordRef.current?.setSelectionRange(0,101);

    window.navigator.clipboard.writeText(password) // way to copy the text on clipboard
  },[password])
  

  //useEffect i.e Hook => it includes callback and dependancies
  // useEffect is call a single time but any changes happening then it run again
  // dependencies of useEffect is used for , run again if any changes happening
  useEffect(()=>{
    passwordGenerator()
  },[length,numberAllowed,charAllowed,passwordGenerator])

  return (
        <div className="w-full max-w-md mx-auto shadow-md rounded-lg py-2 px-4 my-8 text-center text-orange-500 bg-gray-800" >
          <h1 className='text-white text-3xl text-center font-bold my-3'>Password Generator</h1>
          <div className='flex shadow rounded-lg overflow-hidden mb-4'>
            <input
              type="text"
              value={password}
              className='outline-none w-full py-1 px-3'
              placeholder='password'
              readOnly
              ref={passwordRef} // passing the ref for reference
            />
            <button 
            onClick = {copyPasswordToClipboard} // action after clicking the button through copyPasswordToClipboard
          
            className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0
            // adding hover effect
             font-bold rounded transition duration-300 hover:bg-blue-400 hover:scale-105
            '>copy</button>
          </div>
          <div className='flex text-sm gap-x-2'>
            <div className='flex items-center gap-x-1'>
              <input
                type="range"
                min={6}
                max={100}
                value={length}
                className='cursor-pointer'
                onChange={(e)=>{setLength(e.target.value)}}
              />
              <label >Length:{length}</label>
            </div>
            <div className="flex items-center gap-x-1">
                <input
                  type="checkbox"
                  defaultChecked={numberAllowed}
                  id="numberInput"
                  onChange={()=>{
                    setNumberAllowed((prev)=>!prev);
                  }}
                />
                <label htmlFor="numberInput">Numbers</label>
            </div>

            <div className="flex items-center gap-x-1">
                <input
                  type="checkbox"
                  defaultChecked={charAllowed}
                  id="characterInput"
                  onChange={()=>{
                    setCharAllowed((prev)=>!prev);
                  }}
                />
                <label htmlFor="characterInput">Characters</label>
            </div>
          </div>
        </div>
  
  )
}

export default App

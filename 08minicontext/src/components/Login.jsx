import React,{useContext,useState} from 'react'
//useContext is a hook
import UserContext from '../context/UserContext'
// Here we learn how to send the data
const Login = () => {
    const [username,setUsername] = useState('')
    const [password, setPassword] = useState('')

    // UserContext ki value ko fetch karne ke liye useContext ka use karte hai
    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) =>{
      e.preventDefault() // because we don't want that value will go anywhere
      setUser({username,password})
    }

  return (
    <div>
        <h2>Login</h2>
        <input type='text' 
        // for controlling the state use value
        value={username} 
        //update
        onChange={(e)=>setUsername(e.target.value)}
        placeholder='username'/>
        {" "}
        <input type='text'
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
         placeholder='username'/>
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login
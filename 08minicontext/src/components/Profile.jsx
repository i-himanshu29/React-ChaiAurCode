import React,{useContext} from 'react'
import UserContext from '../context/UserContext'

//Here we learn how to take the value
function Profile() {
  const {user} = useContext(UserContext)

  if(!user) return <div>Please login</div>

  return <div>Welcome {user.username} aoo aoo</div>
}

export default Profile
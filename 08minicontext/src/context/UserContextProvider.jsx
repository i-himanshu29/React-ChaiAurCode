import React from 'react'
import UserContext from './UserContext'
import { useState } from 'react';

// children is nothing but he generic name 
const UserContextProvider = ({children})=>{

    const [user,setUser] = useState(null);

    return (
        //UserContext ke saath provider bhi likhte hai to access value , kaun si value access karega wo bhi likhenge
        // value doble curly bracket me hai because object ke tarah paas kiya hai
        <UserContext.Provider value = {{user,setUser}}>
        {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider
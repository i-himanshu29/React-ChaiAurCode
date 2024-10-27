import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
const Github = () => {

    const data = useLoaderData() 
     // useLoaderData ki wajah se neeche wale code ko comment kar pa raha hu
     // ye hook data ko la kar dega

    // const [data,setData]= useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //     .then(response=>response.json())
    //     .then(data=>{
    //         console.log(data);
    //         setData(data);
    //     })
    // },[])
    //loader wali technique

  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'
    >Github followers:{data.followers}
    <img className="flex justify-center items-center"  src={data.avatar_url} alt="Git Picture" width={300}/>
    </div>
  )
}

export default Github

export const githubInfoLoader = async () =>{
   const response = await fetch('https://api.github.com/users/hiteshchoudhary')
   return response.json()
}
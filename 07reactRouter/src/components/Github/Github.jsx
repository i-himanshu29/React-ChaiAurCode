import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
const Github = () => {

    const data = useLoaderData() 
     // useLoaderData ki wajah se neeche wale code ko comment kar pa raha hu
     // ye hook data ko la kar dega

     //************ */
    // const [data,setData]= useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //     .then(response=>response.json()) // response in json format
    //     .then(data=>{
    //         console.log(data);
    //         setData(data);
    //     })
    // },[])
    ///*********** */

  return (
    //data.followers-> to access follower of github 
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'
    >Github followers:{data.followers} 
    <img className="flex justify-center items-center"  src={data.avatar_url} alt="Git Picture" width={300}/>
    </div>
  )
}

export default Github

//loader wali technique
export const githubInfoLoader = async () =>{
   const response = await fetch('https://api.github.com/users/hiteshchoudhary')
   return response.json()
}
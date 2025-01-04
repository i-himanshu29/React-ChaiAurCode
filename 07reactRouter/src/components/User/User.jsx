import React from 'react'
import { useParams } from 'react-router-dom'
// useParams is a hook provided by React Router that lets you access the dynamic parts of the URL in your React application.
// What it does: Extracts URL parameters.
// Why it's useful: Helps you work with dynamic URLs.


const User = () => {
    const {userid}= useParams() // useParams is the hook
  return (
    <div className="bg-gray-600 text-white text-3xl p-4"
    >User:{userid}</div> // this {userid} is same id which you had pass in the user route in main.jsx
  )
}

export default User
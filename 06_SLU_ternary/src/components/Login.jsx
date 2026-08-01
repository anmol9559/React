import React from 'react'

const Login = ({setToggle}) => {
  return (
    <div className="bg-white w-96 p-8 rounded-lg shadow-md">  
      <form className="flex flex-col gap-4" action="">
        Login
        <input className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" placeholder="Email" />
        <input className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500" type="password" placeholder="Password" />
        <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500" type="submit">Login</button>
        <p>Didn't have an account? <span onClick={() => setToggle(prev => !prev)} className="text-blue-500 hover:cursor-pointer">Register here</span></p>
      </form>
    </div>
  )
}

export default Login
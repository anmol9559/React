import React from 'react'

const Usercard = ({ user }) => {
  return (
    <div className="p-4 w-60 flex flex-col gap-4 border border-gray-300 rounded-md shadow-md bg-white">
        <div className="w-50 h-50 overflow-hidden">
            <img className="h-full w-full" src={user.image} alt="User Avatar"/>
        </div>
        <div>
            <h2 className="text-2xl font-bold mb-4">User Card</h2>
            <p className="mb-2"><strong>Name:</strong> {user.name}</p>
            <p className="mb-2"><strong>Email:</strong> {user.email}</p>
        </div>
        <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500" type="submit">Delete</button>
    </div>
  )
}

export default Usercard
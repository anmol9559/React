import React,{useState} from 'react'

const Register = ({setToggle, setUserData}) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    });

    
    const handlechange = (e) => {
        let {name, value} = e.target;
        setFormData({...formData,[name]: value});
    }

    const handlesubmit = (e) => {
        e.preventDefault();
        setUserData(prev => [...prev, formData]);
        setFormData({
            name: "",
            email: "",
            password: "",
            image: ""
        });
    }

  return (
    <div className="bg-white w-96 p-8 rounded-lg shadow-md">
      <form className="flex flex-col gap-4" action="" onSubmit={handlesubmit}>
        Register

        <input className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500" 
        value={formData.name}
        required
        name="name"
        onChange={handlechange}
        type="text" 
        placeholder="Name" />

        <input className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500" 
        value={formData.email}
        required
        name="email"
        onChange={handlechange}        
        type="text" 
        placeholder="Email" />

        <input className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={formData.password}
        required
        name="password"
        onChange={handlechange}
         type="password" 
         placeholder="Password" />

        <input className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={formData.image}
        required
        name="image"
        onChange={handlechange}
         type="url" 
         placeholder="Image URL" />

        <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500" 
        type="submit">
            Register
        </button>

        <p>Already have an account? 
            <span onClick={() => setToggle(prev => !prev)} 
            className="text-blue-500 hover:cursor-pointer">
                Login here
            </span>
        </p>      

      </form>
    </div>
  )
}

export default Register
import React,{useState} from 'react'

const Web = () => {
    const [formData, setFormData] = useState({});
    console.log("Form Data:", formData);
    const handleChange = (e) => {
        let [name, value] = [e.target.name, e.target.value];
        setFormData({...formData,[name]: value});
    }
  return (
    <div className='flex flex-col gap-5 w-60'>
        <input 
        className='border-2 border-black'
        type="text" 
        name="name" 
        placeholder='Enter your name' 
        onChange={handleChange} />

        <input 
        className='border-2 border-black'
        type="email" 
        name="email" 
        placeholder='Enter your email' 
        onChange={handleChange} />

        <input 
        className='border-2 border-black'
        type="password" 
        name="password" 
        placeholder='Enter your password' 
        onChange={handleChange} />

        <button 
        className='border-2 border-black' 
        onClick={() => console.log(formData)}>
            Submit
        </button>

        <h1 className='text-2xl font-bold'>Name: {formData.name}</h1>
        <h1 className='text-2xl font-bold'>Email: {formData.email}</h1>
        <h1 className='text-2xl font-bold'>Password: {formData.password}</h1>   
    </div>
  )
}

export default Web
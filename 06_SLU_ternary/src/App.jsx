import React,{useState} from 'react'
import Login from './components/Login'
import Register from './components/Register'
import Usercard from './components/Usercard'

const App = () => {
  const [toggle, setToggle] = useState(false);
  const [userData, setUserData] = useState([]);
  return (
    <div className="bg-gray-300 h-screen">
       <Register setUserData={setUserData} setToggle={setToggle} />
      <div className="flex flex-wrap gap-4 p-4">
      {
       userData.map((elem) => <Usercard user={elem} />)
      } 
      </div>
    </div>
  )
}

export default App
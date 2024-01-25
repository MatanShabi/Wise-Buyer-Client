import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "../components/NavBar";
import { useEffect } from "react";
import useUser from "../hooks/useUser";




const App = () => {  
  const navigate = useNavigate()
  const { user } = useUser()

  useEffect(() => {
    console.log(user)
    // if (!user) {
    //   navigate('/')
    // }
  }, [])

  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  )
}


export default App

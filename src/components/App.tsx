import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "./common/NavBar";
import { useEffect } from "react";
import useUser from "../hooks/useUser";

const App = () => {  
  const navigate = useNavigate()
  const { user } = useUser()

  useEffect(() => {
    if (!user) {
      navigate('/')
    }
  }, [user])

  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  )
}


export default App

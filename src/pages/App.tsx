import { Outlet } from "react-router-dom";
import Navbar from "../components/NavBar";
import { useEffect } from "react";




const App = () => {

  useEffect(()=>{
  
  })

  
  return (
    <div>
      <Navbar/>
      <Outlet/>
    </div>
  )
}


export default App

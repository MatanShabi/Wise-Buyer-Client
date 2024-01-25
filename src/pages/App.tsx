import { Outlet } from "react-router-dom";
import Navbar from "../components/NavBar";


// TODO : check if user is logged and navigate to posts page

const App = () => {
  return (
    <div>
      <Navbar/>
      <Outlet/>
    </div>
  )
}


export default App

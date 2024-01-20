import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div className="p-2">
      <nav>navigation layout</nav>
      <Outlet/>
    </div>
  )
}


export default App

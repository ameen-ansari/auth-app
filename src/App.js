import { Route, Routes } from "react-router-dom"
import Signup from "./app/pages/Signup"
import Dasboard from "./app/pages/Dasboard"

function App() {
  return (
    <Routes>
      <Route path='/' Component={Dasboard} />
      <Route path='/signup' Component={Signup} />
    </Routes>
  )
}

export default App
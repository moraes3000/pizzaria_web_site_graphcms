import { BrowserRouter } from "react-router-dom"
import { NavBar } from "./components/Header"
import { Router } from "./Router"
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Router />
    </BrowserRouter>
  )
}

export default App

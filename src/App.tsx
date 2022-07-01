import { BrowserRouter } from "react-router-dom"
import BtnWhatssap from "./components/btnWhatssap"
import { Footer } from "./components/Footer"
import { NavBar } from "./components/Header"
import { Router } from "./Router"
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Router />
      <BtnWhatssap msg='Aqui vai um titulo' phone={1} />
      <Footer />
    </BrowserRouter>
  )
}

export default App

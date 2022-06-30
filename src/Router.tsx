import { Route, Routes } from "react-router-dom";
import { Home } from './components/Home'
import { Sobre } from './components/Sobre'
import { Menu } from './components/Menu'
import { Contato } from './components/Contato'
import { HomePage } from "./pages/HomePage";
export function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/sobre" element={<Sobre />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/contato" element={<Contato />} />
    </Routes>
  )
}
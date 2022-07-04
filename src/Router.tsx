import { Route, Routes } from "react-router-dom";
import { Home } from './components/Home'
import { Sobre } from './components/Sobre'
import { Menu } from './components/Menu'
import { Contato } from './components/Contato'
import { HomePage } from "./pages/HomePage";
import { GetCategoriSlug } from "./components/Menu/GetCategorySlug";
import { ComponentPaginaDinamica } from "./components/ComponentPaginaDinamica";
export function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/sobre" element={<Sobre />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/menu/todas" element={<Menu />} />
      <Route path="/menu/:slug" element={<GetCategoriSlug />} />
      <Route path="/contato" element={<Contato />} />
      <Route path="/p/:slug" element={<ComponentPaginaDinamica />} />
    </Routes>
  )
}
import { Contato } from "../components/Contato";
import { Home } from "../components/Home";
import { Sobre } from "../components/Sobre";

export function HomePage() {
  return (
    <div>
      <Home />
      <Sobre />
      <Contato />
    </div>
  )
}
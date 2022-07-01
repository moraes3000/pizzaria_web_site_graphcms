import { NavLink } from "react-router-dom"
import { useGetSaborAllQuery } from "../../graphql/generated"
import { ComponentMenu } from "./ComponentMenu"

export function Menu() {
  const { data } = useGetSaborAllQuery()


  return (
    <div className="w-full bg-black-900 ">
      <div className="max-w-5xl  mx-auto py-4 px-5">
        <h1 className="text-3xl"></h1>
        <p className="font-bold text-4xl font-quato  text-gray-100 my-10">
          <strong className=" border-b-4 border-yellow-500">
            Menu
          </strong>
        </p>
        <nav className="mb-10">
          <ul className="flex gap-4">
            <li className="text-gray-100">
              <NavLink to={`/menu/todas`}>Todas</NavLink >
            </li>
            <ComponentMenu />
          </ul>
        </nav>
        <div className="grid grid-cols-1 sm:grid-cols-2  gap-7">
          {data?.sabors.map(sabor => {
            return (
              <ItemMenu nome={sabor.nome} valor={sabor.valor} foto={sabor.foto?.url} key={sabor.slug} />
            )
          })}
        </div>
      </div>
    </div>
  )
}

function ItemMenu(props) {
  return (
    <div className="my-3 flex gap-4 " key={props.slug}>
      <div className="h-32 w-32 bg-blue-400">
        <img
          src={props.foto ? props.foto : `../src/assets/pizzariabg.jpg`}
          className="object-fill  h-32 w-32"
        />
      </div>
      <div className="flex-1">
        <header className="flex justify-between items-center">
          <strong className="text-yellow-500 font-ruda text-2xl">{props.nome}</strong>
          <span className="text-yellow-300 font-ruda text-md">{props.valor}</span>
        </header>
        <div>
          <p className="text-gray-100">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac placerat dui.</p>
        </div>
      </div>
    </div>
  )
}
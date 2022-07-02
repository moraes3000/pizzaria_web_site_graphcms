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
          <ul className="flex gap-4 flex-wrap">
            <li className="text-gray-100">
              <NavLink to={`/menu/todas`}>Todas</NavLink >
            </li>
            <ComponentMenu />
          </ul>
        </nav>
        <div className="grid grid-cols-1 sm:grid-cols-2  gap-7">
          {data?.sabors.map(sabor => {
            return (
              <ItemMenu
                nome={sabor.nome}
                valor={sabor.valor}
                foto={sabor.foto?.url}
                descricao={sabor.descricaoIngredientes?.text}
                slug={sabor.slug}
                key={sabor.slug}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

interface itemProps {
  nome: String;
  valor: number;
  foto?: String;
  descricao?: String;
  slug: String;
}

function ItemMenu({ nome, valor, descricao, slug, foto }: itemProps) {
  return (
    <div className="my-3 flex gap-4 ">
      <div className="h-32 w-32 bg-blue-400">
        <img src={foto ? `${foto}`
          : 'https://camo.githubusercontent.com/b7b7dca15c743879821e7cfc14e8034ecee3588e221de0a6f436423e304d95f5/68747470733a2f2f7a7562652e696f2f66696c65732f706f722d756d612d626f612d63617573612f33363664616462316461323032353338616531333332396261333464393030362d696d6167652e706e67'}
          className='object-fill  h-32 w-32'
        />
      </div>
      <div className="flex-1">
        <header className="flex justify-between items-center">
          <strong className="text-yellow-500 font-ruda text-2xl">{nome}</strong>
          <span className="text-yellow-300 font-ruda text-md">{valor}</span>
        </header>
        <div>
          <p className="text-gray-100">
            {descricao}
          </p>
        </div>
      </div>
    </div>
  )
}
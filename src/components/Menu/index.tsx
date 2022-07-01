import { NavLink } from "react-router-dom"
import { useGetAllCategoryQuery } from "../../graphql/generated"

export function Menu() {
  const { data } = useGetAllCategoryQuery()
  console.log(data)


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
              <NavLink to={`/menu/`}>Todas</NavLink >
            </li>
            {data?.categorias.map(item => {
              return (
                <li className="text-gray-100" key={item.slug}>
                  <NavLink to={`/menu/${item.slug}`}>{item.nomeDaCategoria}</NavLink >
                </li>
              )
            })}
          </ul>
        </nav>
        <div className="grid grid-cols-1 sm:grid-cols-2  gap-7">
          <ItemMenu />
          <ItemMenu />
          <ItemMenu />
          <ItemMenu />
          <ItemMenu />
          <ItemMenu />
        </div>
      </div>
    </div>
  )
}

function ItemMenu() {
  return (
    <div className="my-3 flex gap-4 ">
      <div className="h-32 w-32 bg-blue-400">
        <img src='../src/assets/pizzariabg.jpg' className="object-fill  h-32 w-32" />
      </div>
      <div className="flex-1">
        <header className="flex justify-between items-center">
          <strong className="text-yellow-500 font-ruda text-2xl">Nome do produto</strong>
          <span className="text-yellow-300 font-ruda text-md">40,00</span>
        </header>
        <div>
          <p className="text-gray-100">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac placerat dui.</p>
        </div>
      </div>
    </div>
  )
}
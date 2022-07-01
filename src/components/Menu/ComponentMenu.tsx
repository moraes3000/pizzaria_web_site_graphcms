import { NavLink } from "react-router-dom"
import { useGetAllCategoryQuery } from "../../graphql/generated"

export function ComponentMenu() {
  const { data } = useGetAllCategoryQuery()
  return (
    <>
      {data?.categorias.map(item => {
        return (
          <li className="text-gray-100" key={item.slug}>
            <NavLink to={`/menu/${item.slug}`}>{item.nomeDaCategoria}</NavLink >
          </li>
        )
      })}

    </>

  )

}
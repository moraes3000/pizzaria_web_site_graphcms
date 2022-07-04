import { useParams } from "react-router-dom"
import { useGetPageBySlugQuery } from "../../graphql/generated"

export function ComponentPaginaDinamica() {

  const { slug } = useParams<{ slug: string }>()

  const { data } = useGetPageBySlugQuery({
    variables: { slug: slug },
  })
  console.log(data)

  if (!data) {
    return (
      <h1>Página não encontrada</h1>
    )
  }
  return (
    <div>


      {/* {data.pagina?.colorBg?.hex}
      {data.pagina?.conteudo?.text} */}


      <div className="w-full ">
        <div className="max-w-5xl  mx-auto py-12 ">
          <div className="px-5">

            <p className="font-bold text-4xl font-quato  ">
              <span className=" border-b-4 ">
                {data.pagina?.nome}
              </span>

            </p>

            <div dangerouslySetInnerHTML={{ __html: String(data.pagina?.conteudo?.html) }} className='blocoContent my-3' />

          </div>

          <div className="flex align-center justify-center">

          </div>
        </div>
      </div >

    </div>
  )
}
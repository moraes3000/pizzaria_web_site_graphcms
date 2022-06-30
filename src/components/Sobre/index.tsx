export function Sobre() {
  return (
    <div className="w-full bg-black-900">
      <div className="max-w-5xl  mx-auto py-12 grid  md:grid-cols-2 grid-cols-1">
        <div className="px-5">

          <p className="font-bold text-4xl font-quato  text-gray-100">
            <span className=" border-b-4 border-yellow-500">
              Sobre
            </span>

          </p>
          <p className="text-xl font-ruda  mt-5 mb-10  text-gray-100">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac placerat dui. Vestibulum ut felis et lorem porta congue v
            itae nec turpis. Aliquam quis leo at nunc tempor faucibus et ac massa.
          </p>
          <a href="" className="
          text-yellow-500 border
          border-yellow-500      
          justify-center
          px-5 py-2 rounded
          hover:text-black-900
          hover:bg-yellow-500
          transition-colors"
          >
            Saiba mais
          </a>
        </div>

        <div className="flex align-center justify-center">
          <img src='../src/assets/pizzariabg.jpg' className="object-cover h-80" />
        </div>
      </div>
    </div >

  )
}
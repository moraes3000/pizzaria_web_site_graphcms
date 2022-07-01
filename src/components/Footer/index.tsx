import { FacebookLogo, InstagramLogo, Phone, WhatsappLogo } from "phosphor-react";

export function Footer() {
  return (
    <footer className="bg-black-900 text-gray-200">
      <div className="flex max-w-5xl p-5 mx-auto">
        <div className="flex-1 ">
          <span className="font-bold text-4xl font-quato max-w-[50rem] mx-auto  border-b-4 border-yellow-500 my-5">
            Nome da sua Pizzaria
          </span>



          <p className="pt-5">Copyright © 2022.</p>
        </div>

        <ul className="flex-1">
          <li ><a href="#" className="flex items-center my-2 gap-3" target='_blank'> <FacebookLogo size={30} /> Facebook</a></li>
          <li ><a href="#" className="flex items-center my-2 gap-3" target='_blank'><InstagramLogo size={30} /> Instagram</a></li>
          <li ><a href="#" className="flex items-center my-2 gap-3" target='_blank'><WhatsappLogo size={30} /> Telefone</a></li>
          <li ><a href="#" className="flex items-center my-2 gap-3" target='_blank'><Phone size={30} /> Telefone</a></li>
        </ul>
      </div>

    </footer >
  )
}
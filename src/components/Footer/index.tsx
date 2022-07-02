import { FacebookLogo, InstagramLogo, Phone, WhatsappLogo } from "phosphor-react";
import { useGetAllSocialQuery } from "../../graphql/generated";

export function Footer() {
  const { data } = useGetAllSocialQuery()
  return (
    <footer className="bg-black-900 text-gray-200">
      <div className="flex max-w-5xl p-5 mx-auto justify-between md:justify-start">
        <div className="flex-1 ">
          <span className="font-bold text-4xl font-quato max-w-[50rem] mx-auto  border-b-4 border-yellow-500 my-5">
            Nome da sua Pizzaria
          </span>



          <p className="pt-5">Copyright © 2022.</p>
        </div>

        <ul className="flex-1 px-3 ">
          {data?.socialMedias.map(social => {
            return (
              <li key={social.id}>
                <a href={social.link} className="flex items-center my-2 gap-3" target='_blank'>
                  <img src={social.icone?.url} />
                  {social.redeSocial}
                </a>
              </li>
            )
          })}
        </ul>
      </div>

    </footer >
  )
}
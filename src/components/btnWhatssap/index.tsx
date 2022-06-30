import { IoLogoWhatsapp } from "react-icons/io";

interface whatMensagemProps {
  phone: number;
  msg: string
}

export default function BtnWhatssap(whats: whatMensagemProps) {
  return (
    <>
      <div className="fixed  right-3 bottom-3">
        <a target='_blank' href={`https://api.whatsapp.com/send?phone=${whats.phone}&text=${whats.msg}`}
          rel="noreferrer"
          className="hover:bg-red-500"
        >
          <IoLogoWhatsapp fill={'#45c153'} size={30} />
        </a>
      </div>

    </>
  )
}
export function Contato() {
  return (
    <div className="w-full py-10 ">
      <div className="max-w-5xl  mx-auto py-12 flex flex-col-reverse md:flex-row ">
        <div className="flex-1 px-5">
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14615.145541769607!2d-46.44891935!3d-23.683595999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1656610192037!5m2!1spt-BR!2sbr" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div className="flex-1 px-5 p-10 md:p-0 ">
          <ul>
            <li>Rua: XPTP</li>
            <li>Bairro: XPTP</li>
            <li>Cidade: XPTP</li>
          </ul>
          <p>Horário de funcionamento</p>
        </div>

      </div>
    </div >

  )
}
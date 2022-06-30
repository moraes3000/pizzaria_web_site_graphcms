import { Link, NavLink, useParams } from "react-router-dom";
import { useState } from "react";
import { List, X } from "phosphor-react";

export function NavBar() {
  const [menuClouse, setMenuClouse] = useState(true)
  const showMenu = () => {
    setMenuClouse(!menuClouse)
  }
  // const isActiveLesson = slug === props.slug;
  return (
    <>
      <header className="w-full text-white flex justify-between p-4  items-center bg-gray-800  ">

        <div className=" w-full max-w-5xl mx-auto flex justify-between">
          <div className="flex items-center">
            <Link to='/'>Logo</Link>
          </div>

          <nav>
            <div className="md:hidden absolute right-5 top-5" onClick={showMenu}>
              {menuClouse ? <List size={32} /> : <X size={32} />}
            </div>
            <ul className={`flex ${menuClouse && 'hidden'} md:flex  flex-col md:flex-row  gap-5  justify-start  p-3`}>
              <li>
                <NavLink to='/'
                  className='hover:text-gray-300 transition-colors '
                >
                  Home
                </NavLink >
              </li>
              <li>
                <NavLink to='/sobre'
                  className='hover:text-gray-300 transition-colors '
                >
                  Sobre
                </NavLink >
              </li>
              <li>
                <NavLink to='/menu'
                  className='hover:text-gray-300 transition-colors '
                >
                  Menu
                </NavLink >
              </li>
              <li>
                <NavLink to='/contato'
                  className='hover:text-gray-300 transition-colors '
                >
                  Contato
                </NavLink >
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  )
}

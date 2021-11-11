import React from 'react'
import {BsChevronLeft} from 'react-icons/bs'
import './../../styles/components.scss'

const Header = ({
    menu,
    goBack,
    title
}) => {

  return(
      <header className="header">
          {
              goBack &&
                <BsChevronLeft />
          }
          
          <h3>
              {title}
          </h3>
          <div>

          </div>
      </header>
  )
}

export default Header;
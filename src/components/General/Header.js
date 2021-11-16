import React from 'react'
import useWindowScroll from "@react-hook/window-scroll";
import {useHistory} from 'react-router-dom'
import PostNav from './PostNav'

import {BsChevronLeft} from 'react-icons/bs'

const Header = ({
    goBack,
    isHome
}) => {
    const scrollY = useWindowScroll(5);
    const history = useHistory()
    const handleGoBack = () => {
		history.goBack()
    }
    
  return(
      <header className={`header__section ${scrollY > 300 && 'is__sticky'}`}>
          
          <h3 onClick={() => history.push('/')}>
              Imgur
          </h3>
             {
              goBack &&
                <span onClick={handleGoBack}  className="header__goBack"><BsChevronLeft /> <p>Go back</p></span>
            }
            {
                isHome && scrollY > 300 &&
                <PostNav />
            }
      </header>
  )
}

export default Header;
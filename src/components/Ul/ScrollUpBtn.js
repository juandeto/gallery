import React from 'react';
import {AiOutlineArrowUp} from 'react-icons/ai'
import '../../styles/ul.scss';

const ScrollUpBtn = () => {


    const scrollToTop = () => {
       window.scrollTo(0, 0)
    }

    return (
        <div 
        className="scrollUp__container">
            <button className="icon__btn" onClick={scrollToTop}>
                <p><AiOutlineArrowUp /></p>
                <span className="tooltip">
                    Back to the top
                </span>
            </button>
        </div>
    )
}

export default ScrollUpBtn;
import React from 'react';
import {AiOutlineClose} from 'react-icons/ai'
import Backdrop from './Backdrop'
import '../../styles/ul.scss';

const Modal = ({children, show, close}) => {

    return (
        <Backdrop show={show}>
           
          <div className="modal__container">
            <div className="modal__closeBtn" onClick={close}>
                <AiOutlineClose />
            </div>
              {children}
        </div>  
        </Backdrop>
        
    )
}

export default Modal;
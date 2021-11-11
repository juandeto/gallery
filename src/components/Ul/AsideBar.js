import React from 'react';
import Backdrop from './Backdrop'
import '../../styles/ul.scss';

const AsideBar = ({children, show, close}) => {

    const stopPropagation = (e) => {
        e && e.stopPropagation();
    }

    return (
        <Backdrop close={close} show={show}>
            <div
            className={`asideModal_container ${show ? "open":""}`}
            onClick={stopPropagation} >
                {children}
            </div>
        </Backdrop>
        
    )
}

export default AsideBar;
import React from 'react';
import '../../styles/general.scss';

const Backdrop = ({children, close, show}) => {
    return (
        <div className={`backdrop__container ${show ? "open": ""}`} onClick={close}>
            {children}
        </div>
    )
}

export default Backdrop;
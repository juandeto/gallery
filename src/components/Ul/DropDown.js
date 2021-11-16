import React from 'react';
import '../../styles/general.scss';

const Dropdown = ({children, show, position}) => {
    const styles = {
        position: 'absolute',
        top: "100%",   
        ...position
      };
      
    return (
        <div 
        className={`dropdown__container ${show ? "show": ""}`} 
        style={styles}>
            {children}
        </div>
    )
}

export default Dropdown;
import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Dropdown from '../Ul/DropDown'
import {BsFillCalendarFill} from 'react-icons/bs'
import '../../styles/general.scss';
import '../../styles/ul.scss';


const WINDOW_VALUES = ['day', 'week', 'month', 'year', 'all']

const Window = () => {
    const dispatch = useDispatch()
    const  {window } = useSelector(state => state)
    const [windowOptions, setWindowOptions] = React.useState(false)

    const handleWindowFilter = (option) => {
        setWindowOptions(false)
        dispatch({type: "SET_WINDOW", payload: option})
    }
    
    return (
        <div className="sort__container" >
            <div
            className="icon__btn"
            onClick={() => setWindowOptions(!windowOptions)}>
                <BsFillCalendarFill/>
                <span className="tooltip">
                    Select time window
                </span>
            </div>
            
            <Dropdown
            position={{right: "-20%"}} 
            show={windowOptions}>
                {
                WINDOW_VALUES.map(option => <button 
                                            key={option}
                                            onClick={() => handleWindowFilter(option)}
                                            className={`label_button ${window === option? "active":""}`}>
                                                {option}
                                                </button>)
                }
            </Dropdown>
        </div>
    )
}

export default Window;
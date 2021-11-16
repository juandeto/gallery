import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {FaVirus, FaVirusSlash} from 'react-icons/fa'
import '../../styles/general.scss';
import '../../styles/ul.scss';

const ShowViral = () => {
    const show_viral = useSelector(state => state.show_viral)
    const dispatch = useDispatch()

    const handleViralOption = () => {
        dispatch({type: "SET_VIRAL_STATUS", payload: !show_viral})
    }

    return (
        <div className="showviral__container">
            <button className="icon__btn" onClick={handleViralOption}>
                <p>{show_viral ? <FaVirus />:<FaVirusSlash />}</p>
                <span className="tooltip">
                {show_viral ? "hide viral":"show viral"}
                </span>
            </button>
        </div>
    )
}

export default ShowViral;
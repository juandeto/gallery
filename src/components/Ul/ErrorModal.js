import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Modal from '../Ul/Modal'
import {AiOutlineClose} from 'react-icons/ai'
import Backdrop from './Backdrop'
import '../../styles/ul.scss';

const ErrorModal = () => {
    const error = useSelector(state => state.error)
    const dispatch = useDispatch()

    const handloCloseModal = () => {
        dispatch({type: "SET_ERROR", payload: {status: 200, description: ""}})
    }

    return (
        <Modal show={error.status !== 200} close={handloCloseModal} >
          <div className="error__modal">
            <h3 style={{color: "tomato"}}>Sorry! There was an error</h3>
            <p>{error.description}</p>
        </div>
        </Modal>
    )
}

export default ErrorModal;
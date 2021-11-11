import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import '../../styles/general.scss';

const Component = () => {
    const state = useSelector()
    const dispatch = useDispatch()

    return (
        <div className="component__container">
        </div>
    )
}

export default Component;
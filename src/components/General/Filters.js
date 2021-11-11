import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import '../../styles/general.scss';

const Filter = () => {
    
    return (
        <div className="filter__container">
            <h3>Sort by:</h3>
            <div className="filter__type">
                <label>Date</label>
                <select>
                    <option value="asc">newest post first</option>
                    <option value="asc">oldest post first</option>
                </select>
            </div>
            <div className="filter__apply">
                <button>Apply</button>
            </div>
        </div>
    )
}

export default Filter;
import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Dropdown from '../Ul/DropDown'
import {FaChevronDown} from 'react-icons/fa'
import '../../styles/general.scss';
import '../../styles/ul.scss';

const SORT_OPTIONS = ['viral', 'top', 'time']

const Sort = () => {
    const dispatch = useDispatch()
    const  {sort } = useSelector(state => state)
    const [showOptions, setShowOptions] = React.useState(false)
    
    
    const handleSortPosts = (option) => {
        handleShowOptions(false)
        dispatch({type: "SET_SORT", payload: option})
    }

    const label = {
        viral: "popular",
        top: "best",
        time: "newest"
    }

    const handleShowOptions = (value) => {
        setShowOptions(value)
    }
    
    return (
        <div className="sort__container" >
            <div
            className="label_button"
            onClick={() => handleShowOptions(!showOptions)}>
                 <label>SORT</label><FaChevronDown />
            </div>
            <Dropdown
            position={{right: "-20%"}} 
            show={showOptions}>
                {
                SORT_OPTIONS.map(option => <button 
                                            key={option}
                                            onClick={() => handleSortPosts(option)}
                                            className={`label_button ${sort === option ? "active":""}`}>
                                                {label[option]}</button>)
                }
            </Dropdown>
        </div>
    )
}

export default Sort;
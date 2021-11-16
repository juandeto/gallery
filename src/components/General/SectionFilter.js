import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Dropdown from '../Ul/DropDown'
import {SiHotjar} from 'react-icons/si'
import {FaRegUser, FaChevronDown} from 'react-icons/fa'
import {BiLike} from 'react-icons/bi'
import '../../styles/general.scss';
import '../../styles/ul.scss';

const SectionFilter = () => {
    const section_view = useSelector(state => state.section_view)
    const dispatch = useDispatch()
    const [showDropDown, setShowDropDown] = useState(false)

    const handleSectionView = (section) => {
        setShowDropDown(!showDropDown)
        dispatch({type:"SET_SECTION_IN_VIEW", payload: section})
    }

    return (
        <div className="sectionfilter__container">
            <div className="label_button" onClick={() => setShowDropDown(!showDropDown)}>
                <label>SECTION</label><FaChevronDown />
            </div>
            <Dropdown 
            show={showDropDown}>
                <button 
                className={`label_button ${section_view === "hot" ? "active":""}`}
                onClick={() => handleSectionView("hot")}
                >
                    <SiHotjar />
                    <p>Hot</p>
                </button>
                <button 
                className={`label_button ${section_view === "top" ? "active":""}`}
                onClick={() => handleSectionView("top")}
                >
                    <BiLike />
                    <p>Top</p>
                </button>
                <button 
                className={`label_button ${section_view === "user" ? "active":""}`}
                onClick={() => handleSectionView("user")}
                >
                    <FaRegUser />
                    <p>User</p>
                </button>
            </Dropdown>
            
        </div>
    )
}

export default SectionFilter;
import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {SiHotjar} from 'react-icons/si'
import {FaRegUser} from 'react-icons/fa'
import {BsGrid3X3} from 'react-icons/bs'
import {BiLike} from 'react-icons/bi'
import '../../styles/general.scss';

const SectionNav = () => {
    const section_view = useSelector(state => state.section_view)
    const dispatch = useDispatch()

    const handleSectionView = (section) => {
        dispatch({type:"SET_SECTION_IN_VIEW", payload: section})
    }
    console.log('seciton view: ', section_view)
    return (
        <div className="sectionNav__container">
             <button 
            className={`sectionNav__btn ${section_view === "posts" ? "active":""}`}
            onClick={() => handleSectionView("posts")}
            >
                <BsGrid3X3 />
                <p>Posts</p>
            </button>
            <button 
            className={`sectionNav__btn ${section_view === "hot" ? "active":""}`}
            onClick={() => handleSectionView("hot")}
            >
                <SiHotjar />
                <p>Hot</p>
            </button>
            <button 
            className={`sectionNav__btn ${section_view === "top" ? "active":""}`}
            onClick={() => handleSectionView("top")}
            >
                <BiLike />
                <p>Top</p>
            </button>
            <button 
            className={`sectionNav__btn ${section_view === "user" ? "active":""}`}
            onClick={() => handleSectionView("user")}
            >
                <FaRegUser />
                <p>User</p>
            </button>
        </div>
    )
}

export default SectionNav;
import React from 'react';
import {useSelector} from 'react-redux';
import SectionFilter from './SectionFilter'
import ViralOption from './ViralOption'
import SortPosts from './SortPosts'
import WindowFilter from '../General/WindowFilter'
import '../../styles/general.scss';

const SectionNav = () => {
    const { sort } = useSelector(state => state)
    

    
    return (
        <div className={`postNav__container`}>
            <div className="postNav__container--side">
                <SectionFilter />
            </div>
            <div className="postNav__container--side">
                <ViralOption />
                <SortPosts />
               {sort === 'time' && <WindowFilter />}
            </div>
        </div>
    )
}

export default SectionNav;
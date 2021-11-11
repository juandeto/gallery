import React from 'react';
import AsideBar from '../Ul/AsideBar'
import Filters from './Filters'
import {useSelector, useDispatch} from 'react-redux';
import '../../styles/general.scss';

const HomeHeader = () => {
    const [sortPosts, setSortPosts] = React.useState(false)
    
    const handleCloseSidebar = () => {
        setSortPosts(false)
    }

    return (
        <>
        <header className="homeHeader__container">
            <h1>Your Imgur Gallery</h1>
            <section className="homeHeader__info">
               <span ><b>16</b> posts</span> 
               <button 
               className="homeHeader__info--btn"
               onClick={() => setSortPosts(true)}>
                   Sort posts
               </button>
            </section>
        </header>
        {sortPosts && <AsideBar show={sortPosts} close={handleCloseSidebar}>
            <Filters/>
        </AsideBar>}
        </>
    )
}

export default HomeHeader;
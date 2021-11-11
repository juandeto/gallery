import React, {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import Header from '../General/Header'
import HomeHeader from '../General/HomeHeader'
import SectionNav from "../General/SectionNav";
import Gallery from '../Gallery/Gallery'
import {useHistory} from 'react-router-dom'
import './../../styles/components.scss'


const Home = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    return (
        <>
        <Header title="Imgur"/>
        <main className="home__container">
            <HomeHeader />
            <SectionNav />
            <Gallery />
        </main>
        </>
    )
}

export default Home;
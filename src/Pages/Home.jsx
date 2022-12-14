import React from 'react'
import '../Styles/Home.css';
import HomeAbout from '../components/HomeAbout'
import Slider from '../components/Slider'
import HomeServices from '../components/HomeServices';
import Hometechstack from '../components/Hometechstack';
import Homefaqs from '../components/Homefaqs';
import Homehappdycustomer from '../components/Homehappdycustomer';
import HomeHappyclient from '../components/HomeHappyclient';


function Home() {
    return (
        <>
            <header>
                <Slider />
            </header>
            <HomeAbout />
            <HomeServices />
            <Hometechstack />
            <Homehappdycustomer />
            <HomeHappyclient />
            <Homefaqs />
        </>
    )
}

export default Home
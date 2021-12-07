import React from 'react';
import AboutMe from '../Components/AboutMe/AboutMe';
import Banner from '../Components/Banner/Banner';
import ContactMe from '../Components/ContactMe/ContactMe';
import TopProjects from '../Components/TopPojects/TopProjects';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutMe></AboutMe>
            
            <TopProjects></TopProjects>
            <ContactMe></ContactMe>
        </div>
    );
};

export default Home;
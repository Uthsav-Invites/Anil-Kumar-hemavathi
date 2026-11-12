
import React from 'react';
import Hero from '../components/Hero';
import Events from '../components/Events';
import Story from '../components/Story';
import Couple from '../components/Couple';
import Gallery from '../components/Gallery';
import Venue from '../components/Venue';

const Home: React.FC = () => {
    return (
        <>
            <Hero />
            <Story />
            <Couple />
            <Events />
            <Venue />
            <Gallery />
        </>
    );
};

export default Home;

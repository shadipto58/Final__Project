import React from 'react';
import Hero from './Hero/Hero';
import Categorie from './Categorie/Categorie';
import Popular from './Popular/Popular';
import Banner from './Banner/Banner';


const Home = () => {
    return (
        <div>

            <Hero></Hero>

            <Categorie></Categorie>

            {/* <Popular></Popular> */}
            <Banner></Banner>

        </div>
    );
};

export default Home;
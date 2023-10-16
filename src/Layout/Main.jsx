import React from 'react';
import Header from '../components/Common/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Common/Footer/Footer';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;
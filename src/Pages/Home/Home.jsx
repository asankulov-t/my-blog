import React from 'react';
import Header from "../../Header/Header";
import Posts from "../../posts/Posts";
import SideBar from "../../sideBar/sideBar";
import './Home.css'
const Home = () => {
    return (
        <>
            <Header/>
            <div className={'home'}>
                <Posts/>
                <SideBar/>
            </div>

        </>

    );
};

export default Home;
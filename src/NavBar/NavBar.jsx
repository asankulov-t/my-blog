import React from 'react';
import './NavBar.css'
const NavBar = () => {
    return (
        <div className={'top'}>
            <div className={'container top'}>
                <div className="left-block">
                    <ul className={'topList'}>
                        <li className={'topListItem'}>HOME</li>
                        <li className={'topListItem'}>ABOUT</li>
                        <li className={'topListItem'}>CONTACT</li>
                        <li className={'topListItem'}>WRITE</li>
                        <li className={'topListItem lastList'}>LOGOUT</li>
                    </ul>
                </div>
                <div className="center-block">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLmC6HzWDXsBtkXrRePdBLcFoANJ46V9FAVg&usqp=CAU" alt=""/>
                    <i className="fas fa-search"></i>
                </div>
                <div className="right-block">
                    <i className="icons fab fa-facebook"></i>
                    <i className="icons fab fa-instagram"></i>
                    <i className="icons fab fa-discord"></i>
                    <i className="icons fab fa-vk"></i>
                </div>
            </div>

        </div>
    );
};

export default NavBar;
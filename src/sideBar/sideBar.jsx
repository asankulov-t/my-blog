import React from 'react';
import './sideBar.css'
const SideBar = () => {
    return (
        <div className={'sideBar'}>
            <div className="sideBarItem">
                <span className={'sideBarTitle'}>
                    ABOUT ME
                </span>
                <img className={'person'} src="https://miro.medium.com/max/3150/1*xxVEfOOAmIKHWOUloRKLhw.jpeg" alt=""/>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consectetur, cupiditate dignissimos eveniet fuga ipsam maxime neque, numquam perferendis quaerat qui, sequi veritatis voluptate? Explicabo numquam qui quibusdam tempore vero.</p>
            </div>
            <div className="sideBarItem">
                <span className={'sideBarTitle'}>
                    CATEGORIES
                </span>
                <ul className={'sideBarList'}>
                    <li className="sideBarListItem">
                        Life
                    </li>
                    <li className="sideBarListItem">
                        Sport
                    </li>
                    <li className="sideBarListItem">
                        Cinema
                    </li>
                    <li className="sideBarListItem">
                        Programming
                    </li>
                </ul>
            </div>

            <div className="sideBarItem social">
                <span className="sideBarTitle">
                    FALLOW US:
                </span>
                <div className="sideBarSocial">
                    <i className="sideBarIcon fab fa-facebook"></i>
                    <i className="sideBarIcon fab fa-instagram"></i>
                    <i className="sideBarIcon fab fa-discord"></i>
                    <i className="sideBarIcon fab fa-vk"></i>
                </div>
            </div>

        </div>
    );
};

export default SideBar;
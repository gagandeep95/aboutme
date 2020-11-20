import React, {useState} from 'react'
import "./Navbar.css";
import {Link} from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as  AiIcons from 'react-icons/ai';
import {SidebarData} from './SidebarData';

function Navbar() {
    const [sideBar, setSideBar] = useState(false);

    const showSideBar = () => setSideBar(!sideBar);

    return (
        <>
            <div className="header">
                <Link to="#" className="menu-bar">
                <FaIcons.FaBars onClick={showSideBar} />
                </Link>

            </div>

            <nav className={sideBar ? 'nav-menu active' : 'nav-menu'}>
                <ul className="nav-menu-items" onClick={showSideBar}>
                    <li className="navbar-toggle">
                        <Link to="#" className="menu-bars">
                            <AiIcons.AiOutlineClose />
                        </Link>
                    </li>
                    {SidebarData.map((item,index) => {
                        return (
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                {item.icon}
                                <span>{item.title}</span>
                                </Link>
                            </li>                       
                        )
                    })}
                </ul>
            </nav>
        </>
    )
}

export default Navbar
    
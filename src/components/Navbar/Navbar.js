import React from 'react';
import './Navbar.css';
import logoKiwiBird from '../../assets/logo-kiwi-bird.png';
import { Link } from 'react-router-dom';


function Navbar() {
    return (
        <header className="topnav">
            <div className="topnavbar-home">
                <div className="container">
                    <div className="title">
                        <div className="logo">
                            <img src={logoKiwiBird} alt="kiwi"/>
                        </div>
                        <div className="name">
                            <span>苌楚KiWi</span>
                        </div>
                    </div>
                    <div className="spacer"></div>
                    <div className="content">
                        <div className="content-body">
                            <nav className="navmenu">
                                <ul>
                                    <li><Link to="/changchu" className="active">主页</Link></li>
                                    <li><Link to="/team">团队</Link></li>
                                    <li><Link to="/product">产品</Link></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="divider">
                    <div className="divider-line"></div>
                </div>
            </div>
        </header>
    );
}

export default Navbar;

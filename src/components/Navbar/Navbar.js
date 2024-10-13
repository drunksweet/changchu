import React from 'react';
import logoKiwiBird from '../../assets/logo-kiwi-bird.png';
import { Link, useLocation } from 'react-router-dom';


function Navbar() {
    const location = useLocation();

    return (
        <header className="flex bg-[var(--head-bkg)] text-center leading-tight m-0 p-0">
            <div className="flex items-center justify-center md:pl-2 ml:pl-4">
                <div className="flex justify-center items-center h-full">
                    <img src={logoKiwiBird} alt="kiwi" className="h-8 w-8"/>
                </div>
                <div className="flex justify-center items-center h-full ml-1.5">
                    <span className="text-2xl font-bold text-gray-800">苌楚KiWi</span>
                </div>
            </div>
            <div className="flex-grow"></div>
            <nav className="text-white">
                <ul className="flex">
                    <li>
                        <Link
                            to="/home"
                            className={`block px-6 py-4 transition-colors duration-200 ${
                                (location.pathname === '/home' || location.pathname === '/')
                                    ? 'bg-[var(--topnavbar-item-active-bkg)]'
                                    : 'hover:bg-[var(--topnavbar-item-hover-bkg)]'
                            }`}
                        >
                            主页
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/team"
                            className={`block px-6 py-4 transition-colors duration-200 ${
                                location.pathname === '/team'
                                    ? 'bg-[var(--topnavbar-item-active-bkg)]'
                                    : 'hover:bg-[var(--topnavbar-item-hover-bkg)]'
                            }`}
                        >
                            团队
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/product"
                            className={`block px-6 py-4 transition-colors duration-200 ${
                                location.pathname === '/product'
                                    ? 'bg-[var(--topnavbar-item-active-bkg)]'
                                    : 'hover:bg-[var(--topnavbar-item-hover-bkg)]'
                            }`}
                        >
                            产品
                        </Link>
                    </li>
                </ul>
            </nav>

        </header>
    );
}

export default Navbar;

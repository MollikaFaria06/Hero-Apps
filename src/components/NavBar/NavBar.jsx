import React from 'react';
import { FaGithub } from "react-icons/fa";

const NavBar = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm mx-auto max-w-7xl">
            <div className="navbar-start">
                
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 gap-2 shadow">
                        <li><a className="hover:text-purple-600">Home</a></li>
                        <li><a className="hover:text-purple-600">Apps</a></li>
                        <li><a className="hover:text-purple-600">Installation</a></li>
                    </ul>
                </div>

                
                <div className='flex gap-2 items-center'>
                    <img className='w-8 h-8' src="/src/assets/logo.png" alt="Logo" />
                    <a className="text-xl font-semibold text-purple-500">HERO.IO</a>
                </div>
            </div>

            
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal gap-8 px-1">
                    <li><a className="text-white hover:text-purple-600 transition-colors">Home</a></li>
                    <li><a className="text-white hover:text-purple-600 transition-colors">Apps</a></li>
                    <li><a className="text-white hover:text-purple-600 transition-colors">Installation</a></li>
                </ul>
            </div>

            
            <div className="navbar-end">
                <a className="btn bg-gradient-to-b from-purple-900 to-purple-500 flex items-center gap-2 text-white">
                    <FaGithub className="text-lg" />
                    Contribute
                </a>
            </div>
        </div>
    );
};

export default NavBar;

import React from 'react';
import logo from '../assets/logo.png'
import { NavLink } from 'react-router';
import { Github } from 'lucide-react';

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm md:px-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li className='font-semibold text-base'><NavLink to='/home'>Home</NavLink></li>
                        <li className='font-semibold text-base'><NavLink to='/trendingApps'>Apps</NavLink></li>
                        <li className='font-semibold text-base'><NavLink to='/installedApps'>Installation</NavLink></li>
                    </ul>
                </div>
                <div className='flex gap-3 items-center'>
                    <img className='w-10' src={logo} alt="" />
                    <NavLink to='/home' className="text-xl font-bold">TriLoop</NavLink>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li className='font-semibold text-base'><NavLink to='/home'>Home</NavLink></li>
                    <li className='font-semibold text-base'><NavLink to='/trendingApps'>Apps</NavLink></li>
                    <li className='font-semibold text-base'><NavLink to='/installedApps'>Installation</NavLink></li>
                </ul>
            </div>
            <div className="navbar-end">
                <NavLink to='https://github.com/Sohaibislam45/' className="btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white"><Github size={16} strokeWidth={2.5} />Contribute</NavLink>
            </div>
        </div>
    );
};

export default Navbar;
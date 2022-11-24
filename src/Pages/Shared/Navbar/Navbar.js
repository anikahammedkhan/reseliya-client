import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../../Assets/logo.png";

const Navbar = () => {

    const menu = <>
        <li className='font-semibold text-lg hover:bg-amber-300 rounded-xl mx-1'><Link to="/">Home</Link></li>
        <li className='font-semibold text-lg hover:bg-amber-300 rounded-xl mx-1' tabIndex={0}>
            <Link>
                Categories
                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
            </Link>
            <ul className="p-2 bg-base-100">
                <li className='font-semibold text-lg hover:bg-amber-300 rounded-xl mx-1'><Link to="/products">All Products</Link></li>
                <li className='font-semibold text-lg hover:bg-amber-300 rounded-xl mx-1'><Link to="/category/Apple">Apple</Link></li>
                <li className='font-semibold text-lg hover:bg-amber-300 rounded-xl mx-1'><Link to="/category/Samsung">Samsung</Link></li>
                <li className='font-semibold text-lg hover:bg-amber-300 rounded-xl mx-1'><Link to="/category/Xiaomi">Xiaomi</Link></li>
                <li className='font-semibold text-lg hover:bg-amber-300 rounded-xl mx-1'><Link to="/category/OnePlus">OnePlus</Link></li>
                <li className='font-semibold text-lg hover:bg-amber-300 rounded-xl mx-1'><Link to="/category/Nokia">Nokia</Link></li>
                <li className='font-semibold text-lg hover:bg-amber-300 rounded-xl mx-1'><Link to="/category/Realme">Realme</Link></li>
            </ul>
        </li>
        <li className='font-semibold text-lg hover:bg-amber-300 rounded-xl'><Link to="/about">Blog</Link></li>
        <li className='font-semibold text-lg hover:bg-amber-300 rounded-xl'><Link to="/contact">Login</Link></li>
    </>
    return (
        <div className="navbar shadow-xl sticky top-0 rounded-lg z-20 bg-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menu}
                    </ul>
                </div>
                <Link to="/"><img src={logo} alt="" className='w-full md:w-1/2 lg:w-1/3' /></Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menu}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
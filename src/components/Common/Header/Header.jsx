import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiSearch } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { HiOutlineShoppingCart } from "react-icons/hi";
import logo from '../../../assets/icons/logo.png'
import { AuthContext } from '../../../context/AuthProvider';
import { CgProfile } from "react-icons/cg";
import googlelogo from '../../../assets/icons/google-logo.png';
import toast from 'react-hot-toast';

const Header = () => {

    const { user, userLogOut } = useContext(AuthContext);
    // console.log(user);

    const handleSignOut = () => {
        userLogOut()
            .then(() => {
                toast.success('User Logout Successfull!');
            })
            .catch(error => console.log(error))

    }
    const menuItem = <React.Fragment>
        <li className='text-[#000] text-xl font-semibold'><Link to="/">Home</Link></li>
        <li className='text-[#000] text-xl font-semibold'><Link to="/shop">Shop</Link></li>
        <li className='text-[#000] text-xl font-semibold'><Link to="/pages">Pages</Link></li>
        <li className='text-[#000] text-xl font-semibold'><Link to="/reviews">Reviews</Link></li>
        <li className='text-[#000] text-xl font-semibold'><Link to="/about">About</Link></li>
        <li className='text-[#000] text-xl font-semibold'><Link to="/contact">Contact Us</Link></li>

        {
            user?.uid ?
                <>
                    <li className='text-[#000] text-xl font-semibold'><Link to="/dashboard">Dashboard</Link></li>
                </> :
                <>

                </>

        }

    </React.Fragment>

    return (
        <header className=''>

            {/*//////////////// NAVBAR //////////////// */}
            <div className='container mx-auto'>
                <div className="navbar bg-base-100 my-5 sm:px-0">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden p-0 pe-4 text-4xl">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-50 p-2 shadow bg-base-100 rounded-box w-52">
                                {menuItem}
                            </ul>
                        </div>
                        <a className=""><img src={logo} alt="" /></a>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {menuItem}
                        </ul>
                    </div>
                    <div className="navbar-end">
                        {
                            user?.uid ?
                                <div className='flex justify-between items-center'>
                                    <div className='me-3'>
                                        <button className='btn bg-[#FF7A00] sm:block hidden'><Link to='/login' onClick={handleSignOut} className='text-xl text-[#fff] capitalize'>Logout</Link></button>
                                    </div>
                                    <div className="dropdown dropdown-end">
                                        <label tabIndex={0} className=" rounded-full m-1 flex justify-center items-center text-5xl text-[#FF7A00] cursor-pointer"><CgProfile></CgProfile></label>
                                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-[#fff]/[1] rounded-box w-72 z-40">
                                            <div className='px-[8px] mt-3 flex items-center'>
                                                <div className='w-10 h-10 bg-red-500 rounded-full me-2.5'>
                                                    <img className='w-10 h-10 rounded-full ' src={user?.photoURL} alt="" />
                                                </div>
                                                <div className=''>
                                                    <h2 className='mb-2 font-semibold'>{user?.displayName}</h2>
                                                    <p className='text-[#808080]'>+880171455</p>
                                                </div>
                                            </div>
                                            <li><Link to='' className='font-semibold'>My Orders</Link></li>
                                            <li><Link to='' className='font-semibold'>Profiles</Link></li>
                                            <li><Link to='' onClick={handleSignOut} className='font-semibold'>Logout</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                :
                                <div className='flex justify-between items-center'>
                                    <div className='me-3'>
                                        <button className='btn bg-[#FF7A00] sm:block hidden'><Link to='/login' className='text-xl text-[#fff] capitalize'>Login</Link></button>
                                    </div>
                                    <div className=' '>
                                        <Link to='/login' className='text-5xl text-[#FF7A00]'><CgProfile></CgProfile></Link>
                                    </div>
                                </div>

                        }
                    </div>

                </div>
            </div>

        </header >
    );
};

export default Header;
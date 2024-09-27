import React from 'react';
// import { useState } from "react";
import { NavLink, Link } from "react-router-dom";

export default function Header() {
    const [open, setOpen] = React.useState(false);
    
    // const [flyer, setFlyer] = React.useState(false);
    // const [flyerTwo, setFlyerTwo] = React.useState(false);
    // const [flyerThere, setFlyerthere] = React.useState(false);

    return (
        <>

            <header id="header" className="main_header fixed top-10  z-[12] w-full">
                <nav id="myTopnav" className="max-h-[100px] md:max-h-[100px] h-full w-full shadow topnav  flex items-center justify-between bg-white">
                    <div className="container mx-auto">
                        <div className="max-w-screen-2xl mx-auto relative z-10">
                            <div className="flex justify-between items-center">
                                <div className="flex justify-start  lg:w-1/5 w-full py-3">
                                    <Link to="/">
                                        <img src={require('../asstes/image/logo/sipl.png')} className="h-14 mr-3" alt="Flowbite Logo"></img>
                                    </Link>
                                </div>
                                <div className='hidden lg:flex w-full items-start justify-center '>
                                    <ul className="flex justify-center items-start w-full">
                                        <NavLink className="px-4">
                                            <Link to="/" className="text-black font-semibold text-lg" >
                                                Home
                                            </Link>
                                        </NavLink>
                                        <NavLink className="px-4">
                                            <Link to="/About" className="text-black font-semibold text-lg" >
                                                About
                                            </Link>
                                        </NavLink>
                                        <NavLink className="px-4">
                                            <Link to="/Service" className="text-black font-semibold text-lg" >
                                                Service
                                            </Link>
                                        </NavLink>
                                        <NavLink className="px-4">
                                            <Link to="/Career" className="text-black font-semibold text-lg" >
                                                Career
                                            </Link>
                                        </NavLink>
                                        <NavLink className="px-4">
                                            <Link to="/Portfolio" className="text-black font-semibold text-lg" >
                                                Our Portfolio
                                            </Link>
                                        </NavLink>
                                    </ul>
                                </div>
                                <div className='flex items-center justify-end lg:w-1/5 w-full py-3'>
                                    <Link to="/Contact_us" className="px-4">
                                        <button type="button" className="custom_btn w-40 h-12 rounded-3xl bg_brown text-white text-lg font-normal shadow">Get Free Quote</button>
                                    </Link>
                                    <div className="ms-3 lg:hidden">
                                        <button type="button" className="bg-white rounded-md p-2 inline-flex items-center justify-center"
                                            onClick={() => setOpen(!open)} >
                                            <i class="fa-solid fa-bars text-2xl"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
            {/* Offcanvanc Start  */}
            <div className={open ? "opacity-100 fixed left-0 top-0 z-[12] w-full max-w-[300px]   h-screen  lg:hidden"
                : "opacity-0 absolute top-0 h-screen  lg:hidden"
            } >
                <div className=" shadow-lg ring-1 ring-black ring-opacity-5 bg-white h-screen">
                    <div className=" h-full">
                        <div className="flex items-center justify-between shadow py-4 px-5">
                            <div>
                                <img src={require('../asstes/image/logo/sipl.png')} className="h-14 mr-3" alt="Flowbite Logo"></img>
                            </div>
                            <div className="-mr-2">
                                <button type="button" className="bg-white rounded-md p-2 inline-flex items-center justify-center text-2xl text-dark"
                                    onClick={() => setOpen(!open)} >
                                    <i class="fa-solid fa-xmark text-2xl text-dark"></i>
                                </button>
                            </div>
                        </div>

                        <div className="items-center justify-between w-full lg:flex px-5 py-4" id="menu">
                            <nav className="flex flex-col w-full">
                                <NavLink className="py-2">
                                    <Link to="/" className="text-black font-semibold text-lg" >
                                        Home
                                    </Link>
                                </NavLink>
                                <NavLink className="py-2">
                                    <Link to="/About" className="text-black font-semibold text-lg" >
                                        About
                                    </Link>
                                </NavLink>
                                <NavLink className="py-2">
                                    <Link to="/Service" className="text-black font-semibold text-lg" >
                                        Service
                                    </Link>
                                </NavLink>
                                <NavLink className="py-2">
                                    <Link to="/Career" className="text-black font-semibold text-lg" >
                                        Career
                                    </Link>
                                </NavLink>
                                <NavLink className="py-2">
                                    <Link to="/Portfolio" className="text-black font-semibold text-lg" >
                                        Our Portfolio
                                    </Link>
                                </NavLink>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}
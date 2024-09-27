import React from 'react';
import { Link } from "react-router-dom";

function Footer() {

    return (
        <>
            {/* Footer Start  */}
            <footer className="footer_section relative h-full w-full" id="footer">
                <div className="absolute h-[100] pb-5  w-[100%] bg-[url('./../../asstes/image/home/footer.png')] bg-cover bg-center bg-no-repeat mx-auto">
                    <div className="container mx-auto pt-28 pb-10">
                        <div className="max-w-screen-2xl flex flex-wrap mx-auto z-30">
                            <div className="sm:w-1/2 lg:w-1/3 w-full p-3">
                                <div className="mb-5">
                                    <Link to="" className="" >
                                        <img src={require('../asstes/image/logo/sipl-logo.png')} className="w-full max-w-[100px] mr-3" alt="Flowbite Logo"></img>
                                    </Link>
                                </div>
                                <p className="text-base font-medium text-[#f9f9f9] mb-4 w-full">SIPL Technologies offers web & mobile development solution for all industry verticals.</p>
                                <div className="mb-5">
                                    <div className="w-full h-auto flex items-start">
                                        <span className=" bg-white text-[#2780d4]  hover:shadow-inner shadow-xl max-w-[35px] max-h-[35px] min-h-[35px] w-full h-full rounded-lg transition duration-700 ease-in-out flex items-center justify-center">
                                            <i className="fa-solid fa-location-dot text-sm font-bold"></i>
                                        </span>
                                        <span className="text-lg font-medium text-[#f9f9f9] ms-4">411,12,13 / Pavitra Point , Yogichock Puna Gam , 395010</span>
                                    </div>
                                    <div className="w-full h-auto flex items-start py-2">
                                        <span className=" bg-white text-[#2780d4]  hover:shadow-inner shadow-xl max-w-[35px] max-h-[35px] min-h-[35px] w-full h-full rounded-lg transition duration-700 ease-in-out flex items-center justify-center">
                                            <i className="fa-solid fa-phone text-sm font-bold"></i>
                                        </span>
                                        <span className="text-lg font-medium text-[#f9f9f9] ms-4">+91 9023359567</span>
                                    </div>
                                    <div className="w-full h-auto flex items-start py-2">
                                        <span className=" bg-white text-[#2780d4]  hover:shadow-inner shadow-xl max-w-[35px] min-w-[35px] max-h-[35px] min-h-[35px] w-full h-full rounded-lg transition duration-700 ease-in-out flex items-center justify-center">
                                            <i className="fa-solid fa-envelope text-sm font-bold"></i>
                                        </span>
                                        <span className="text-lg font-medium text-[#f9f9f9] ms-4">sataniinfotechpvtltd@gmail.com</span>
                                    </div>
                                </div>
                                <p className="font-bold text-[#f9f9f9] text-lg">Follow Us:</p>
                                <div className="w-full max-w-[200px] h-auto flex items-center justify-between py-5">
                                    <span className=" bg-white text-[#2780d4]  hover:shadow-inner shadow-xl max-w-[38px] max-h-[38px] min-h-[38px] w-full h-full rounded-full transition duration-700 ease-in-out flex items-center justify-center">
                                        <i className="fa-brands fa-facebook-f text-sm font-bold"></i>
                                    </span>
                                    <span className=" bg-white text-[#2780d4]  hover:shadow-inner shadow-xl max-w-[38px] max-h-[38px] min-h-[38px] w-full h-full rounded-full transition duration-700 ease-in-out flex items-center justify-center">
                                        <i className="fa-brands fa-instagram text-sm font-bold"></i>
                                    </span>
                                    <span className=" bg-white text-[#2780d4]  hover:shadow-inner shadow-xl max-w-[38px] max-h-[38px] min-h-[38px] w-full h-full rounded-full transition duration-700 ease-in-out flex items-center justify-center">
                                        <i className="fa-brands fa-twitter text-sm font-bold"></i>
                                    </span>
                                    <span className=" bg-white text-[#2780d4]  hover:shadow-inner shadow-xl max-w-[38px] max-h-[38px] min-h-[38px] w-full h-full rounded-full transition duration-700 ease-in-out flex items-center justify-center">
                                        <i className="fa-brands fa-youtube text-sm font-bold"></i>
                                    </span>
                                </div>
                            </div>
                            <div className="sm:w-1/2 lg:w-1/4 w-full p-3">
                                <h4 className="font-medium text-2xl font-Rajdhani mb-10">
                                    <span className="relative text-white before:absolute before:border-b-[#ffffff] before:bg-[#ffffff] before:w-8 before:rounded-2xl before:top-9 before:h-full before:max-h-[2px] after:absolute after:border-b-[#2780d4] after:bg-[#ffffff] after:w-3 after:rounded-2xl after:top-9 after:left-9 after:h-full after:max-h-[2px]">Services</span>
                                </h4>
                                <div className="flex justify-between">
                                    <ul className="link_detail">
                                        <li className="py-1 hover:transition-transform hover:translate-x-3">
                                            <Link className="font-medium text-[#f9f9f9]">
                                                <i className="fa-solid fa-angle-right text-[#f9f9f9] text-lg me-2"></i>
                                                Web Development
                                            </Link>
                                        </li>
                                        <li className="py-1 hover:transition-transform hover:translate-x-3">
                                            <Link className="font-medium text-[#f9f9f9]">
                                                <i className="fa-solid fa-angle-right text-[#f9f9f9] text-lg me-2"></i>
                                                Mobile Apps
                                            </Link>
                                        </li>
                                        <li className="py-1 hover:transition-transform hover:translate-x-3">
                                            <Link className="font-medium text-[#f9f9f9]">
                                                <i className="fa-solid fa-angle-right text-[#f9f9f9] text-lg me-2"></i>
                                                FrontEnd Development
                                            </Link>
                                        </li>
                                        <li className="py-1 hover:transition-transform hover:translate-x-3">
                                            <Link className="font-medium text-[#f9f9f9]">
                                                <i className="fa-solid fa-angle-right text-[#f9f9f9] text-lg me-2"></i>
                                                BeckEnd Development
                                            </Link>
                                        </li>
                                        <li className="py-1 hover:transition-transform hover:translate-x-3">
                                            <Link className="font-medium text-[#f9f9f9]">
                                                <i className="fa-solid fa-angle-right text-[#f9f9f9] text-lg me-2"></i>
                                                Server Menegment
                                            </Link>
                                        </li>
                                        <li className="py-1 hover:transition-transform hover:translate-x-3">
                                            <Link className="font-medium text-[#f9f9f9]">
                                                <i className="fa-solid fa-angle-right text-[#f9f9f9] text-lg me-2"></i>
                                                IT Outsourcing
                                            </Link>
                                        </li>
                                        <li className="py-1 hover:transition-transform hover:translate-x-3">
                                            <Link className="font-medium text-[#f9f9f9]">
                                                <i className="fa-solid fa-angle-right text-[#f9f9f9] text-lg me-2"></i>
                                                Ecommerce
                                            </Link>
                                        </li>
                                        <li className="py-1 hover:transition-transform hover:translate-x-3">
                                            <Link className="font-medium text-[#f9f9f9]">
                                                <i className="fa-solid fa-angle-right text-[#f9f9f9] text-lg me-2"></i>
                                                UI/UX Development
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="sm:w-1/2 lg:w-1/5 w-full p-3">
                                <h4 className="font-medium text-2xl font-Rajdhani mb-10">
                                    <span className="relative text-white before:absolute before:border-b-[#ffffff] before:bg-[#ffffff] before:w-8 before:rounded-2xl before:top-9 before:h-full before:max-h-[2px] after:absolute after:border-b-[#ffffff] after:bg-[#ffffff] after:w-3 after:rounded-2xl after:top-9 after:left-9 after:h-full after:max-h-[2px]">Industries</span>
                                </h4>
                                <ul className="link_detail">
                                    <li className="py-1 hover:transition-transform hover:translate-x-3">
                                        <Link className="font-medium text-[#f9f9f9]">
                                            <i className="fa-solid fa-angle-right text-[#f9f9f9] text-lg me-2"></i>
                                            Fintech
                                        </Link>
                                    </li>
                                    <li className="py-1 hover:transition-transform hover:translate-x-3">
                                        <Link className="font-medium text-[#f9f9f9]">
                                            <i className="fa-solid fa-angle-right text-[#f9f9f9] text-lg me-2"></i>
                                            Education
                                        </Link>
                                    </li>
                                    <li className="py-1 hover:transition-transform hover:translate-x-3">
                                        <Link className="font-medium text-[#f9f9f9]">
                                            <i className="fa-solid fa-angle-right text-[#f9f9f9] text-lg me-2"></i>
                                            Healthcare
                                        </Link>
                                    </li>
                                    <li className="py-1 hover:transition-transform hover:translate-x-3">
                                        <Link className="font-medium text-[#f9f9f9]">
                                            <i className="fa-solid fa-angle-right text-[#f9f9f9] text-lg me-2"></i>
                                            Social Networking
                                        </Link>
                                    </li>
                                    <li className="py-1 hover:transition-transform hover:translate-x-3">
                                        <Link className="font-medium text-[#f9f9f9]">
                                            <i className="fa-solid fa-angle-right text-[#f9f9f9] text-lg me-2"></i>
                                            Retail
                                        </Link>
                                    </li>
                                    <li className="py-1 hover:transition-transform hover:translate-x-3">
                                        <Link className="font-medium text-[#f9f9f9]">
                                            <i className="fa-solid fa-angle-right text-[#f9f9f9] text-lg me-2"></i>
                                            Real Estate
                                        </Link>
                                    </li>

                                </ul>
                            </div>
                            <div className="sm:w-1/2 lg:w-1/5 w-full p-3">
                                <h4 className="font-medium text-2xl font-Rajdhani mb-10">
                                    <span className="relative text-white before:absolute before:border-b-[#2780d4] before:bg-[#2780d4] before:w-8 before:rounded-2xl before:top-9 before:h-full before:max-h-[2px] after:absolute after:border-b-[#2780d4] after:bg-[#2780d4] after:w-3 after:rounded-2xl after:top-9 after:left-9 after:h-full after:max-h-[2px]">Company</span>
                                </h4>
                                <ul className="link_detail">
                                    <li className="py-1 hover:transition-transform hover:translate-x-3">
                                        <Link className="font-medium text-[#f9f9f9]">
                                            <i className="fa-solid fa-angle-right text-[#f9f9f9] text-lg me-2"></i>
                                            About Us
                                        </Link>
                                    </li>
                                    <li className="py-1 hover:transition-transform hover:translate-x-3">
                                        <Link className="font-medium text-[#f9f9f9]">
                                            <i className="fa-solid fa-angle-right text-[#f9f9f9] text-lg me-2"></i>
                                            Hire Developer
                                        </Link>
                                    </li>
                                    <li className="py-1 hover:transition-transform hover:translate-x-3">
                                        <Link className="font-medium text-[#f9f9f9]">
                                            <i className="fa-solid fa-angle-right text-[#f9f9f9] text-lg me-2"></i>
                                            Development Process
                                        </Link>
                                    </li>
                                    <li className="py-1 hover:transition-transform hover:translate-x-3">
                                        <Link className="font-medium text-[#f9f9f9]">
                                            <i className="fa-solid fa-angle-right text-[#f9f9f9] text-lg me-2"></i>
                                            Engagement Model
                                        </Link>
                                    </li>
                                    <li className="py-1 hover:transition-transform hover:translate-x-3">
                                        <Link className="font-medium text-[#f9f9f9]">
                                            <i className="fa-solid fa-angle-right text-[#f9f9f9] text-lg me-2"></i>
                                            Partnerships
                                        </Link>
                                    </li>
                                    <li className="py-1 hover:transition-transform hover:translate-x-3">
                                        <Link className="font-medium text-[#f9f9f9]">
                                            <i className="fa-solid fa-angle-right text-[#f9f9f9] text-lg me-2"></i>
                                            Contact Us
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* Sub Footer Start  */}
                    <div className="sub_footer container mx-auto border-t ">
                        <div className="max-w-screen-2xl md:flex items-center flex-wrap mx-auto xsm:py-2 py-4">
                            <div className="lg:w-1/2 w-full flex justify-center lg:justify-start">

                                <p className="text-[#f9f9f9] font-light text-base"> © 2022 <a href="" className="text-white font-medium">Ds infotech.</a> All Right Reserved.</p>
                            </div>
                            <div className="lg:w-1/2 w-full flex justify-center lg:justify-end items-center flex-wrap xsm:mt-0 mt-4">
                                <a href="" className="text-[#f9f9f9] font-light hover:textred text-base text-center xsm:py-2 px-4 xsm:w-auto w-full"> Support  </a>
                                <a href="terms-service.html" className="text-[#f9f9f9] font-light hover:textred text-base text-center xsm:py-2 px-4 xsm:w-auto w-full">Terms Of Services </a>
                                <a href="privacy-policy.html" className="text-[#f9f9f9] font-light hover:textred text-base text-center xsm:py-2 px-4 xsm:w-auto w-full">Privacy Policy</a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            {/* Footer End  */}
        </>
    );

}
export default Footer;
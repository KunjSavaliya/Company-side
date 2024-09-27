import React, { useEffect } from 'react';
import { Link } from "react-router-dom";

import mixitup from "mixitup";

function Tabs() {

    useEffect(() => {
        mixitup(document.querySelector(".photo-gallery"));
    }, []);


    return (
        <>
            <div>
                <div>
                    <div>
                        <ul className="flex flex-wrap justify-center w-full px-4 mb-5">
                            <li className="active flex-0 lg:w-auto md:w-1/5 sm:w-1/2 w-full my-2 sm:my-2 lg:m-1.5 md:m-2 justify-center items-center" data-filter="*">
                                <Link className="inline-block lg:px-7 w-full h-full py-2 text-lg capitalize !color_light_brown hover:!text-white font-bold text-center rounded-lg hover:bg_brown border-brown">All</Link>
                            </li>
                            <li className="flex-0 lg:w-auto md:w-1/5 sm:w-1/2 w-full my-2 sm:my-2 lg:m-1.5 md:m-2 justify-center items-center" data-filter=".web">
                                <Link className="inline-block lg:px-7 w-full h-full py-2 text-lg capitalize !color_light_brown hover:!text-white font-bold text-center rounded-lg hover:bg_brown border-brown">Web</Link>
                            </li>
                            <li className="flex-0 lg:w-auto md:w-1/5 sm:w-1/2 w-full my-2 sm:my-2 lg:m-1.5 md:m-2 justify-center items-center" data-filter=".mobile">
                                <Link className="inline-block lg:px-7 w-full h-full py-2 text-lg capitalize !color_light_brown hover:!text-white font-bold text-center rounded-lg hover:bg_brown border-brown">Mobile</Link>
                            </li>
                            <li className="flex-0 lg:w-auto md:w-1/5 sm:w-1/2 w-full my-2 sm:my-2 lg:m-1.5 md:m-2 justify-center items-center" data-filter=".ui-ux">
                                <Link className="inline-block lg:px-7 w-full h-full py-2 text-lg capitalize !color_light_brown hover:!text-white font-bold text-center rounded-lg hover:bg_brown border-brown">UI/UX</Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="max-w-screen-xl flex flex-wrap mx-auto photo-gallery">
                    <div className="sm:w-1/2 lg:w-1/3 w-full p-3 mb-5 mix web">
                        <div className="relative w-full h-full flex items-center justify-center max-h-[300px] min-h-[300px]">
                            <img src={require('../asstes/image/Portfolio/web.png')} className="w-full h-full object-cover rounded-t-md rounded-b-md"></img>
                            <div className="absolute -top-1\.5 -left-1\.5 w-full h-full hover:block opacity-0 hover:opacity-90 m-3 tansition ease-in-out duration-1000">
                                <div className="bg-black  z-10 w-full h-full rounded-2xl flex items-center justify-center p-3"></div>
                                <div className="absolute w-full flex bottom-0 left-0 justify-center p-4 animate-bounce">
                                    <div className="case-content bg-white w-full p-3 rounded-md flex justify-between items-center">
                                        <div className="case-content-info">
                                            <span className="font-Rajdhani font-semibold">Web</span>
                                            <h4 className="text-xl font-extrabold color_light_brown">Tracking</h4>
                                        </div>
                                        <a className="bg_brown max-w-[45px] max-h-[45px] w-full h-full outline-double !outline-[#2780d4] rounded-full z-50 opacity-100 flex items-center justify-center">
                                            <i className="fa-solid fa-plus text-xl text-white"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sm:w-1/2 lg:w-1/3 w-full p-3 mb-5 mix web">
                        <div className="relative w-full h-full flex items-center justify-center max-h-[300px] min-h-[300px]">
                            <img src={require('../asstes/image/Portfolio/web1.png')} className="w-full h-full object-cover rounded-t-md rounded-b-md"></img>
                            <div className="absolute -top-1\.5 -left-1\.5 w-full h-full hover:block opacity-0 hover:opacity-90 m-3 tansition ease-in-out duration-1000">
                                <div className="bg-black  z-10 w-full h-full rounded-2xl flex items-center justify-center p-3"></div>
                                <div className="absolute w-full flex bottom-0 left-0 justify-center p-4 animate-bounce">
                                    <div className="case-content bg-white w-full p-3 rounded-md flex justify-between items-center">
                                        <div className="case-content-info">
                                            <span className="font-Rajdhani font-semibold">Web</span>
                                            <h4 className="text-xl font-extrabold color_light_brown">Best Pizza</h4>
                                        </div>
                                        <a className="bg_brown max-w-[45px] max-h-[45px] w-full h-full outline-double !outline-[#2780d4] rounded-full z-50 opacity-100 flex items-center justify-center">
                                            <i className="fa-solid fa-plus text-xl text-white"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sm:w-1/2 lg:w-1/3 w-full p-3 mb-5 mix web">
                        <div className="relative w-full h-full flex items-center justify-center max-h-[300px] min-h-[300px]">
                            <img src={require('../asstes/image/Portfolio/web2.png')} className="w-full h-full object-cover rounded-t-md rounded-b-md"></img>
                            <div className="absolute -top-1\.5 -left-1\.5 w-full h-full hover:block opacity-0 hover:opacity-90 m-3 tansition ease-in-out duration-1000">
                                <div className="bg-black  z-10 w-full h-full rounded-2xl flex items-center justify-center p-3"></div>
                                <div className="absolute w-full flex bottom-0 left-0 justify-center p-4 animate-bounce">
                                    <div className="case-content bg-white w-full p-3 rounded-md flex justify-between items-center">
                                        <div className="case-content-info">
                                            <span className="font-Rajdhani font-semibold">Web</span>
                                            <h4 className="text-xl font-extrabold color_light_brown">American Food</h4>
                                        </div>
                                        <a className="bg_brown max-w-[45px] max-h-[45px] w-full h-full outline-double !outline-[#2780d4] rounded-full z-50 opacity-100 flex items-center justify-center">
                                            <i className="fa-solid fa-plus text-xl text-white"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sm:w-1/2 lg:w-1/3 w-full p-3 mb-5 mix web">
                        <div className="relative w-full h-full flex items-center justify-center max-h-[300px] min-h-[300px]">
                            <img src={require('../asstes/image/Portfolio/web3.png')} className="w-full h-full object-cover rounded-t-md rounded-b-md"></img>
                            <div className="absolute -top-1\.5 -left-1\.5 w-full h-full hover:block opacity-0 hover:opacity-90 m-3 tansition ease-in-out duration-1000">
                                <div className="bg-black  z-10 w-full h-full rounded-2xl flex items-center justify-center p-3"></div>
                                <div className="absolute w-full flex bottom-0 left-0 justify-center p-4 animate-bounce">
                                    <div className="case-content bg-white w-full p-3 rounded-md flex justify-between items-center">
                                        <div className="case-content-info">
                                            <span className="font-Rajdhani font-semibold">Web</span>
                                            <h4 className="text-xl font-extrabold color_light_brown">Title Here</h4>
                                        </div>
                                        <a className="bg_brown max-w-[45px] max-h-[45px] w-full h-full outline-double !outline-[#2780d4] rounded-full z-50 opacity-100 flex items-center justify-center">
                                            <i className="fa-solid fa-plus text-xl text-white"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sm:w-1/2 lg:w-1/3 w-full p-3 mb-5 mix web">
                        <div className="relative w-full h-full flex items-center justify-center max-h-[300px] min-h-[300px]">
                            <img src={require('../asstes/image/Portfolio/web4.png')} className="w-full h-full object-cover rounded-t-md rounded-b-md"></img>
                            <div className="absolute -top-1\.5 -left-1\.5 w-full h-full hover:block opacity-0 hover:opacity-90 m-3 tansition ease-in-out duration-1000">
                                <div className="bg-black  z-10 w-full h-full rounded-2xl flex items-center justify-center p-3"></div>
                                <div className="absolute w-full flex bottom-0 left-0 justify-center p-4 animate-bounce">
                                    <div className="case-content bg-white w-full p-3 rounded-md flex justify-between items-center">
                                        <div className="case-content-info">
                                            <span className="font-Rajdhani font-semibold">Web</span>
                                            <h4 className="text-xl font-extrabold color_light_brown">Hiking Life</h4>
                                        </div>
                                        <a className="bg_brown max-w-[45px] max-h-[45px] w-full h-full outline-double !outline-[#2780d4] rounded-full z-50 opacity-100 flex items-center justify-center">
                                            <i className="fa-solid fa-plus text-xl text-white"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sm:w-1/2 lg:w-1/3 w-full p-3 mb-5 mix mobile">
                        <div className="relative w-full h-full flex items-center justify-center max-h-[300px] min-h-[300px]">
                            <img src={require('../asstes/image/Portfolio/mobile_app.png')} className="w-full h-full object-cover rounded-t-md rounded-b-md"></img>
                            <div className="absolute -top-1\.5 -left-1\.5 w-full h-full hover:block opacity-0 hover:opacity-90 m-3 tansition ease-in-out duration-1000">
                                <div className="bg-black  z-10 w-full h-full rounded-2xl flex items-center justify-center p-3"></div>
                                <div className="absolute w-full flex bottom-0 left-0 justify-center p-4 animate-bounce">
                                    <div className="case-content bg-white w-full p-3 rounded-md flex justify-between items-center">
                                        <div className="case-content-info">
                                            <span className="font-Rajdhani font-semibold">App</span>
                                            <h4 className="text-xl font-extrabold color_light_brown">Wallet</h4>
                                        </div>
                                        <a className="bg_brown max-w-[45px] max-h-[45px] w-full h-full outline-double !outline-[#2780d4] rounded-full z-50 opacity-100 flex items-center justify-center">
                                            <i className="fa-solid fa-plus text-xl text-white"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sm:w-1/2 lg:w-1/3 w-full p-3 mb-5 mix mobile">
                        <div className="relative w-full h-full flex items-center justify-center max-h-[300px] min-h-[300px]">
                            <img src={require('../asstes/image/Portfolio/mobile_app1.png')} className="w-full h-full object-cover rounded-t-md rounded-b-md"></img>
                            <div className="absolute -top-1\.5 -left-1\.5 w-full h-full hover:block opacity-0 hover:opacity-90 m-3 tansition ease-in-out duration-1000">
                                <div className="bg-black  z-10 w-full h-full rounded-2xl flex items-center justify-center p-3"></div>
                                <div className="absolute w-full flex bottom-0 left-0 justify-center p-4 animate-bounce">
                                    <div className="case-content bg-white w-full p-3 rounded-md flex justify-between items-center">
                                        <div className="case-content-info">
                                            <span className="font-Rajdhani font-semibold">App</span>
                                            <h4 className="text-xl font-extrabold color_light_brown">Booking</h4>
                                        </div>
                                        <a className="bg_brown max-w-[45px] max-h-[45px] w-full h-full outline-double !outline-[#2780d4] rounded-full z-50 opacity-100 flex items-center justify-center">
                                            <i className="fa-solid fa-plus text-xl text-white"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sm:w-1/2 lg:w-1/3 w-full p-3 mb-5 mix mobile">
                        <div className="relative w-full h-full flex items-center justify-center max-h-[300px] min-h-[300px]">
                            <img src={require('../asstes/image/Portfolio/mobile_app2.png')} className="w-full h-full object-cover rounded-t-md rounded-b-md"></img>
                            <div className="absolute -top-1\.5 -left-1\.5 w-full h-full hover:block opacity-0 hover:opacity-90 m-3 tansition ease-in-out duration-1000">
                                <div className="bg-black  z-10 w-full h-full rounded-2xl flex items-center justify-center p-3"></div>
                                <div className="absolute w-full flex bottom-0 left-0 justify-center p-4 animate-bounce">
                                    <div className="case-content bg-white w-full p-3 rounded-md flex justify-between items-center">
                                        <div className="case-content-info">
                                            <span className="font-Rajdhani font-semibold">App</span>
                                            <h4 className="text-xl font-extrabold color_light_brown">Workout Tracker</h4>
                                        </div>
                                        <a className="bg_brown max-w-[45px] max-h-[45px] w-full h-full outline-double !outline-[#2780d4] rounded-full z-50 opacity-100 flex items-center justify-center">
                                            <i className="fa-solid fa-plus text-xl text-white"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sm:w-1/2 lg:w-1/3 w-full p-3 mb-5 mix mobile">
                        <div className="relative w-full h-full flex items-center justify-center max-h-[300px] min-h-[300px]">
                            <img src={require('../asstes/image/Portfolio/mobile_app3.png')} className="w-full h-full object-cover rounded-t-md rounded-b-md"></img>
                            <div className="absolute -top-1\.5 -left-1\.5 w-full h-full hover:block opacity-0 hover:opacity-90 m-3 tansition ease-in-out duration-1000">
                                <div className="bg-black  z-10 w-full h-full rounded-2xl flex items-center justify-center p-3"></div>
                                <div className="absolute w-full flex bottom-0 left-0 justify-center p-4 animate-bounce">
                                    <div className="case-content bg-white w-full p-3 rounded-md flex justify-between items-center">
                                        <div className="case-content-info">
                                            <span className="font-Rajdhani font-semibold">App</span>
                                            <h4 className="text-xl font-extrabold color_light_brown">Cardiology</h4>
                                        </div>
                                        <a className="bg_brown max-w-[45px] max-h-[45px] w-full h-full outline-double !outline-[#2780d4] rounded-full z-50 opacity-100 flex items-center justify-center">
                                            <i className="fa-solid fa-plus text-xl text-white"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sm:w-1/2 lg:w-1/3 w-full p-3 mb-5 mix ui-ux">
                        <div className="relative w-full h-full flex items-center justify-center max-h-[300px] min-h-[300px]">
                            <img src={require('../asstes/image/Portfolio/ui_design.png')} className="w-full h-full object-cover rounded-t-md rounded-b-md"></img>
                            <div className="absolute -top-1\.5 -left-1\.5 w-full h-full hover:block opacity-0 hover:opacity-90 m-3 tansition ease-in-out duration-1000">
                                <div className="bg-black  z-10 w-full h-full rounded-2xl flex items-center justify-center p-3"></div>
                                <div className="absolute w-full flex bottom-0 left-0 justify-center p-4 animate-bounce">
                                    <div className="case-content bg-white w-full p-3 rounded-md flex justify-between items-center">
                                        <div className="case-content-info">
                                            <span className="font-Rajdhani font-semibold">UI/UX</span>
                                            <h4 className="text-xl font-extrabold color_light_brown">Apphome</h4>
                                        </div>
                                        <a className="bg_brown max-w-[45px] max-h-[45px] w-full h-full outline-double !outline-[#2780d4] rounded-full z-50 opacity-100 flex items-center justify-center">
                                            <i className="fa-solid fa-plus text-xl text-white"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sm:w-1/2 lg:w-1/3 w-full p-3 mb-5 mix ui-ux">
                        <div className="relative w-full h-full flex items-center justify-center max-h-[300px] min-h-[300px]">
                            <img src={require('../asstes/image/Portfolio/ui_design1.png')} className="w-full h-full object-cover rounded-t-md rounded-b-md"></img>
                            <div className="absolute -top-1\.5 -left-1\.5 w-full h-full hover:block opacity-0 hover:opacity-90 m-3 tansition ease-in-out duration-1000">
                                <div className="bg-black  z-10 w-full h-full rounded-2xl flex items-center justify-center p-3"></div>
                                <div className="absolute w-full flex bottom-0 left-0 justify-center p-4 animate-bounce">
                                    <div className="case-content bg-white w-full p-3 rounded-md flex justify-between items-center">
                                        <div className="case-content-info">
                                            <span className="font-Rajdhani font-semibold">UI/UX</span>
                                            <h4 className="text-xl font-extrabold color_light_brown">Apphome</h4>
                                        </div>
                                        <a className="bg_brown max-w-[45px] max-h-[45px] w-full h-full outline-double !outline-[#2780d4] rounded-full z-50 opacity-100 flex items-center justify-center">
                                            <i className="fa-solid fa-plus text-xl text-white"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sm:w-1/2 lg:w-1/3 w-full p-3 mb-5 mix ui-ux">
                        <div className="relative w-full h-full flex items-center justify-center max-h-[300px] min-h-[300px]">
                            <img src={require('../asstes/image/Portfolio/ui_design2.png')} className="w-full h-full object-cover rounded-t-md rounded-b-md"></img>
                            <div className="absolute -top-1\.5 -left-1\.5 w-full h-full hover:block opacity-0 hover:opacity-90 m-3 tansition ease-in-out duration-1000">
                                <div className="bg-black  z-10 w-full h-full rounded-2xl flex items-center justify-center p-3"></div>
                                <div className="absolute w-full flex bottom-0 left-0 justify-center p-4 animate-bounce">
                                    <div className="case-content bg-white w-full p-3 rounded-md flex justify-between items-center">
                                        <div className="case-content-info">
                                            <span className="font-Rajdhani font-semibold">UI/UX</span>
                                            <h4 className="text-xl font-extrabold color_light_brown">Apphome</h4>
                                        </div>
                                        <a className="bg_brown max-w-[45px] max-h-[45px] w-full h-full outline-double !outline-[#2780d4] rounded-full z-50 opacity-100 flex items-center justify-center">
                                            <i className="fa-solid fa-plus text-xl text-white"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Tabs;
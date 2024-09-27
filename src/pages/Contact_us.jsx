import React from 'react';
import { Link } from "react-router-dom";
import Header from '../componets/header';
import Footer from '../componets/footer';
// import Testimonnial from '../componets/testimonnial';


function Contact_us() {
    return (
        <>
            <Header />

            {/* Breadcrumb Section Start */}
            <section className="breadcrumb bg-gradient-to-r from-[#0c4393] to-[#2780d4] xsm:py-40 py-20">
                <div className="container mx-auto relative ">
                    <div className="max-w-screen-xl mx-auto">
                        <h1 className="text-white font-bold xsm:text-5xl text-4xl text-center">Contact Us</h1>
                        <ul className="flex text-white font-semibold text-xl items-center justify-center xsm:my-5 my-2 mx-auto">
                            <li><Link href="/">Home<i className="fa fa-angle-right text-lg mx-2"></i></Link></li>
                            <li><Link href="/Contact_us">Contact Us</Link></li>
                        </ul>
                    </div>
                </div>
            </section>
            {/* contact detail page start */}
            <section className="contact-top-details -mt-20">
                <div className="container mx-auto relative">
                    <div className="max-w-screen-xl flex flex-wrap mx-auto ">
                        <div className="sm:w-1/2 lg:w-1/3 w-full p-3 mx-auto">
                            <div className="bg-white rounded-2xl w-full h-[100%] shadow-md hover:shadow-xl transition duration-700 ease-in-out mx-auto">
                                <div className="card_content px-6 py-8 relative">
                                    <div class="card-image service-icon mx-auto flex items-center justify-center mb-3">
                                        <i class="fa-solid fa-map text-6xl text-[#2780d4]"></i>
                                    </div>
                                    <h2 className="text-black font-bold text-xl py-4 text-center">Location</h2>
                                    <p className="text-lg color_grey font-medium text-center leading-7 mb-4">
                                    411,12,13 / Pavitra Point , Yogichock Puna Gam , 395010
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="sm:w-1/2 lg:w-1/3 w-full p-3 mx-auto">
                            <div className="bg-white rounded-2xl w-full h-[100%] shadow-md hover:shadow-xl transition duration-700 ease-in-out mx-auto">
                                <div className="card_content px-6 py-8 relative">
                                    <div class="card-image service-icon mx-auto flex items-center justify-center mb-3">
                                        <i class="fa-solid fa-headset text-6xl text-[#2780d4]"></i>
                                    </div>
                                    <h2 className="text-black font-bold text-xl py-4 text-center">Contact Number</h2>
                                    <p className="text-lg color_grey font-medium text-center leading-7 mb-4">
                                    +91 9023359567
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="sm:w-1/2 lg:w-1/3 w-full p-3 mx-auto">
                            <div className="bg-white rounded-2xl w-full h-[100%] shadow-md hover:shadow-xl transition duration-700 ease-in-out mx-auto">
                                <div className="card_content px-6 py-8 relative">
                                    <div class="card-image service-icon mx-auto flex items-center justify-center mb-3">
                                        <i class="fa-regular fa-envelope text-6xl text-[#2780d4]"></i>
                                    </div>
                                    <h2 className="text-black font-bold text-xl py-4 text-center">Email</h2>
                                    <p className="text-lg color_grey font-medium text-center leading-7 mb-4">
                                        hrsipl24@gmail.com
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            {/* Contact Section Start */}
            <section className="contact py-10 relative">
                <div className="container mx-auto relative p-10 w-full">
                    <div className="contact-inner relative flex flex-wrap md:flex-nowrap w-full h-full">
                        <div className="lg:w-1/2 w-full p-3 mb-5 h-[100]">
                            <h3 className="text-dark font-semibold text-4xl mb-5">
                                Get in <span className='text-[#2780d4]'>Touch</span>
                            </h3>
                            <span class="title-effect ">Contact</span>
                            <p className="font-normal text-lg xsm:text-left text-justify color_grey">We love to hear your feedback or any queries, you can contact or email us. webiots will try to take your business to a higher level.</p>
                            <div className="address w-full mt-10">
                                <img src={require('../asstes/image/contact/contact.png')} className=" w-full h-full"></img>
                            </div>
                        </div>
                        <div className="lg:w-1/2 w-full p-3 mb-5 h-[100]">
                            <h1 className="text-dark font-semibold text-2xl">Send us a Messages</h1>
                            <div className="mt-4">
                                <div className="form-group flex sm:flex-nowrap flex-wrap">
                                    <input className="form-control w-full border-gray-100 font-medium text-base rounded-md p-3 m-3 focus:cursor-pointer focus:border-[#2780d4] focus:ring-transparent" type="text" name="text" placeholder="Full Name" required=""></input>
                                    <input className="form-control w-full border-gray-100 font-medium text-base rounded-md p-3 m-3 focus:cursor-pointer focus:border-[#2780d4] focus:ring-transparent" type="number" name="number" placeholder="Your Number" required=""></input>
                                </div>
                                <div className="form-group">
                                    <input className="form-control w-full border-gray-100 font-medium text-base rounded-md p-3 m-3 focus:cursor-pointer focus:border-[#2780d4] focus:ring-transparent" type="email" name="email" placeholder="Your Email" required=""></input>
                                </div>
                                <div className="form-group">
                                    <input className="form-control w-full border-gray-100 font-medium text-base rounded-md p-3 m-3 focus:cursor-pointer focus:border-[#2780d4] focus:ring-transparent" type="text" name="text" placeholder="Your Subject" required=""></input>
                                </div>
                                <div className="form-group">
                                    <textarea id="message" rows="4" className="block w-full border-gray-100 font-light text-base rounded-md p-3 m-3 focus:cursor-pointer focus:border-[#2780d4] focus:ring-transparent" placeholder="Write Your Message"></textarea>
                                </div>
                                {/* <div className="form-group">
                                    <Upload />
                                </div> */}
                                <button type="button" className="custom_btn ms-3 w-44 h-12 rounded-lg bg_brown text-white text-lg font-medium mt-5">
                                    SUBMIT
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />

        </>
    );
}

export default Contact_us;
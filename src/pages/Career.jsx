import React from 'react';
import { Link } from "react-router-dom";
import Header from '../componets/header';
import Footer from '../componets/footer';


function Career() {
    return (
        <>
            <Header />

            {/* Breadcrumb Section Start */}
            <section className="breadcrumb bg-gradient-to-r from-[#0c4393] to-[#2780d4] xsm:py-40 py-20">
                <div className="container mx-auto relative ">
                    <div className="max-w-screen-xl mx-auto">
                        <h1 className="text-white font-bold xsm:text-5xl text-4xl text-center">Career</h1>
                        <ul className="flex text-white font-semibold text-xl items-center justify-center xsm:my-5 my-2 mx-auto">
                            <li><Link href="/">Home<i className="fa fa-angle-right text-lg mx-2"></i></Link></li>
                            <li><Link href="/Career">Career</Link></li>
                        </ul>
                    </div>
                </div>
            </section>
            {/* contact detail page start */}
            <section className="Career_section -mt-20">
                <div className="container mx-auto relative">
                    <div className="max-w-screen-xl flex flex-wrap mx-auto">
                        <div className="sm:w-1/2 lg:w-1/3 w-full p-3 mx-auto">
                            <div className="bg-white rounded-2xl w-full h-[100%] shadow-md hover:shadow-xl transition duration-700 ease-in-out mx-auto">
                                <div className="card_content px-6 py-5 relative">
                                    <h2 className="text-black font-bold text-xl py-4 text-center">Continue to grow</h2>
                                    <p className="text-lg color_grey font-medium text-center leading-7 mb-4">
                                        We keep learning, teaching, and growing individually & as a company.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="sm:w-1/2 lg:w-1/3 w-full p-3 mx-auto">
                            <div className="bg-white rounded-2xl w-full h-[100%] shadow-md hover:shadow-xl transition duration-700 ease-in-out mx-auto">
                                <div className="card_content px-6 py-5 relative">
                                    <h2 className="text-black font-bold text-xl py-4 text-center">Quality over quantity</h2>
                                    <p className="text-lg color_grey font-medium text-center leading-7 mb-4">
                                        We have a craftsman’s attention to detail. We don’t ship work we aren’t proud of.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="sm:w-1/2 lg:w-1/3 w-full p-3 mx-auto">
                            <div className="bg-white rounded-2xl w-full h-[100%] shadow-md hover:shadow-xl transition duration-700 ease-in-out mx-auto">
                                <div className="card_content px-6 py-5 relative">
                                    <h2 className="text-black font-bold text-xl py-4 text-center">Lead with passion</h2>
                                    <p className="text-lg color_grey font-medium text-center leading-7 mb-4">
                                        We love what we do and we do what we love. We are driven.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* current opening start */}
            <div className="current pt-20">
                <div className="container mx-auto relative py-10">
                    <h3 class="text-dark font-normal text-5xl pb-1 mb-8 text-center">Current
                        <span class="text-[#2780d4]">Openings</span>
                    </h3>
                    <span class="title-effect">Process</span>
                    <div className="max-w-screen-xl mx-auto">
                        <div className="bg-white rounded-2xl w-full h-[100%] shadow-md hover:shadow-xl transition duration-700 ease-in-out mx-auto mb-4">
                            <div className="card_content px-6 py-5 flex w-full lg:flex-nowrap flex-wrap items-center lg:justify-between justify-center">
                                <div className="card_contact lg:w-3/4 w-full justify-center text-center lg:text-left">
                                    <h2 className="text-black font-semibold text-xl mb-3"> Business Devlopment Executive / BDE-Online Bidder (Upwork,Freelancer)</h2>
                                    <ul className='flex flex-wrap mb-3 lg:justify-start justify-center'>
                                        <Link to="/" className="color_grey text-base font-normal pe-2" >
                                            vacancies: 3
                                        </Link>
                                        <Link to="" className="color_grey text-base font-medium px-2 border-l-2 border-red-100" >
                                            Full Time
                                        </Link>
                                        <Link to="" className="color_grey text-base font-medium px-2 border-l-2 border-red-100" >
                                            Exp. 1-2 Year
                                        </Link>
                                        <Link to="" className="color_grey text-base font-medium px-2 border-l-2 border-red-100" >
                                            Location: Surat
                                        </Link>
                                    </ul>
                                </div>
                                <div className="card_btn lg:w-1/4 flex w-full lg:justify-end justify-center py-3">
                                    <Link to="/BDE" className='custom_btn px-5 py-2 rounded-md bg_brown text-white text-lg font-normal shadow'>Apply Now</Link>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white rounded-2xl w-full h-[100%] shadow-md hover:shadow-xl transition duration-700 ease-in-out mx-auto mb-4">
                            <div className="card_content px-6 py-5 flex w-full lg:flex-nowrap flex-wrap items-center lg:justify-between justify-center">
                                <div className="card_contact lg:w-3/4 w-full justify-center text-center lg:text-left">
                                    <h2 className="text-black font-semibold text-xl mb-3">Python & Jungo</h2>
                                    <ul className='flex flex-wrap mb-3 lg:justify-start justify-center'>
                                        <Link to="/" className="color_grey text-base font-normal pe-2" >
                                            vacancies: 2
                                        </Link>
                                        <Link to="" className="color_grey text-base font-medium px-2 border-l-2 border-red-100" >
                                            Full Time
                                        </Link>
                                        <Link to="" className="color_grey text-base font-medium px-2 border-l-2 border-red-100" >
                                            Exp. 1-2 Year
                                        </Link>
                                        <Link to="" className="color_grey text-base font-medium px-2 border-l-2 border-red-100" >
                                            Location: Surat
                                        </Link>
                                    </ul>
                                </div>
                                <div className="card_btn lg:w-1/4 flex w-full lg:justify-end justify-center py-3">
                                    <Link to="/Python" className='custom_btn px-5 py-2 rounded-md bg_brown text-white text-lg font-normal shadow'>Apply Now</Link>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white rounded-2xl w-full h-[100%] shadow-md hover:shadow-xl transition duration-700 ease-in-out mx-auto mb-4">
                            <div className="card_content px-6 py-5 flex w-full lg:flex-nowrap flex-wrap items-center lg:justify-between justify-center">
                                <div className="card_contact lg:w-3/4 w-full justify-center text-center lg:text-left">
                                    <h2 className="text-black font-semibold text-xl mb-3"> React Netive</h2>
                                    <ul className='flex flex-wrap mb-3 lg:justify-start justify-center'>
                                        <Link to="/" className="color_grey text-base font-normal pe-2" >
                                            vacancies: 2
                                        </Link>
                                        <Link to="" className="color_grey text-base font-medium px-2 border-l-2 border-red-100" >
                                            Fll Time
                                        </Link>
                                        <Link to="" className="color_grey text-base font-medium px-2 border-l-2 border-red-100" >
                                            Exp. 1-2 Year
                                        </Link>
                                        <Link to="" className="color_grey text-base font-medium px-2 border-l-2 border-red-100" >
                                            Location: Surat
                                        </Link>
                                    </ul>
                                </div>
                                <div className="card_btn lg:w-1/4 flex w-full lg:justify-end justify-center py-3">
                                    <Link to="/ReactNetive" className='custom_btn px-5 py-2 rounded-md bg_brown text-white text-lg font-normal shadow'>Apply Now</Link>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white rounded-2xl w-full h-[100%] shadow-md hover:shadow-xl transition duration-700 ease-in-out mx-auto mb-4">
                            <div className="card_content px-6 py-5 flex w-full lg:flex-nowrap flex-wrap items-center lg:justify-between justify-center">
                                <div className="card_contact lg:w-3/4 w-full justify-center text-center lg:text-left">
                                    <h2 className="text-black font-semibold text-xl mb-3"> ReactJs Developer</h2>
                                    <ul className='flex flex-wrap mb-3 lg:justify-start justify-center'>
                                        <Link to="/" className="color_grey text-base font-normal pe-2" >
                                            vacancies: 2
                                        </Link>
                                        <Link to="" className="color_grey text-base font-medium px-2 border-l-2 border-red-100" >
                                            Full Time
                                        </Link>
                                        <Link to="" className="color_grey text-base font-medium px-2 border-l-2 border-red-100" >
                                            Exp. 0-2 Year
                                        </Link>
                                        <Link to="" className="color_grey text-base font-medium px-2 border-l-2 border-red-100" >
                                            Location: Surat
                                        </Link>
                                    </ul>
                                </div>
                                <div className="card_btn lg:w-1/4 flex w-full lg:justify-end justify-center py-3">
                                    <Link to="/ReactJs" className='custom_btn px-5 py-2 rounded-md bg_brown text-white text-lg font-normal shadow'>Apply Now</Link>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white rounded-2xl w-full h-[100%] shadow-md hover:shadow-xl transition duration-700 ease-in-out mx-auto mb-4">
                            <div className="card_content px-6 py-5 flex w-full lg:flex-nowrap flex-wrap items-center lg:justify-between justify-center">
                                <div className="card_contact lg:w-3/4 w-full justify-center text-center lg:text-left">
                                    <h2 className="text-black font-semibold text-xl mb-3">IOS Developer</h2>
                                    <ul className='flex flex-wrap mb-3 lg:justify-start justify-center'>
                                        <Link to="/" className="color_grey text-base font-normal pe-2" >
                                            vacancies: 2
                                        </Link>
                                        <Link to="" className="color_grey text-base font-medium px-2 border-l-2 border-red-100" >
                                            Full Time
                                        </Link>
                                        <Link to="" className="color_grey text-base font-medium px-2 border-l-2 border-red-100" >
                                            Exp. 1-2 Year
                                        </Link>
                                        <Link to="" className="color_grey text-base font-medium px-2 border-l-2 border-red-100" >
                                            Location: Surat
                                        </Link>
                                    </ul>
                                </div>
                                <div className="card_btn lg:w-1/4 flex w-full lg:justify-end justify-center py-3">
                                    <Link to="/IOS" className='custom_btn px-5 py-2 rounded-md bg_brown text-white text-lg font-normal shadow'>Apply Now</Link>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white rounded-2xl w-full h-[100%] shadow-md hover:shadow-xl transition duration-700 ease-in-out mx-auto mb-4">
                            <div className="card_content px-6 py-5 flex w-full lg:flex-nowrap flex-wrap items-center lg:justify-between justify-center">
                                <div className="card_contact lg:w-3/4 w-full justify-center text-center lg:text-left">
                                    <h2 className="text-black font-semibold text-xl mb-3">Angular Developer</h2>
                                    <ul className='flex flex-wrap mb-3 lg:justify-start justify-center'>
                                        <Link to="/" className="color_grey text-base font-normal pe-2" >
                                            vacancies: 2
                                        </Link>
                                        <Link to="" className="color_grey text-base font-medium px-2 border-l-2 border-red-100" >
                                            Full Time
                                        </Link>
                                        <Link to="" className="color_grey text-base font-medium px-2 border-l-2 border-red-100" >
                                            Exp. 1-2 Year
                                        </Link>
                                        <Link to="" className="color_grey text-base font-medium px-2 border-l-2 border-red-100" >
                                            Location: Surat
                                        </Link>
                                    </ul>
                                </div>
                                <div className="card_btn lg:w-1/4 flex w-full lg:justify-end justify-center py-3">
                                    <Link to="/Angular" className='custom_btn px-5 py-2 rounded-md bg_brown text-white text-lg font-normal shadow'>Apply Now</Link>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white rounded-2xl w-full h-[100%] shadow-md hover:shadow-xl transition duration-700 ease-in-out mx-auto mb-4">
                            <div className="card_content px-6 py-5 flex w-full lg:flex-nowrap flex-wrap items-center lg:justify-between justify-center">
                                <div className="card_contact lg:w-3/4 w-full justify-center text-center lg:text-left">
                                    <h2 className="text-black font-semibold text-xl mb-3">UI/UX Designer</h2>
                                    <ul className='flex flex-wrap mb-3 lg:justify-start justify-center'>
                                        <Link to="/" className="color_grey text-base font-normal pe-2" >
                                            vacancies: 2
                                        </Link>
                                        <Link to="" className="color_grey text-base font-medium px-2 border-l-2 border-red-100" >
                                            Full Time
                                        </Link>
                                        <Link to="" className="color_grey text-base font-medium px-2 border-l-2 border-red-100" >
                                            Exp. 1-2 Year
                                        </Link>
                                        <Link to="" className="color_grey text-base font-medium px-2 border-l-2 border-red-100" >
                                            Location: Surat
                                        </Link>
                                    </ul>
                                </div>
                                <div className="card_btn lg:w-1/4 flex w-full lg:justify-end justify-center py-3">
                                    <Link to="/UI_UX" className='custom_btn px-5 py-2 rounded-md bg_brown text-white text-lg font-normal shadow'>Apply Now</Link>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white rounded-2xl w-full h-[100%] shadow-md hover:shadow-xl transition duration-700 ease-in-out mx-auto mb-4">
                            <div className="card_content px-6 py-5 flex w-full lg:flex-nowrap flex-wrap items-center lg:justify-between justify-center">
                                <div className="card_contact lg:w-3/4 w-full justify-center text-center lg:text-left">
                                    <h2 className="text-black font-semibold text-xl mb-3">NodeJs Developer</h2>
                                    <ul className='flex flex-wrap mb-3 lg:justify-start justify-center'>
                                        <Link to="/" className="color_grey text-base font-normal pe-2" >
                                            vacancies: 2
                                        </Link>
                                        <Link to="" className="color_grey text-base font-medium px-2 border-l-2 border-red-100" >
                                            Full Time
                                        </Link>
                                        <Link to="" className="color_grey text-base font-medium px-2 border-l-2 border-red-100" >
                                            Exp. 1-2 Year
                                        </Link>
                                        <Link to="" className="color_grey text-base font-medium px-2 border-l-2 border-red-100" >
                                            Location: Surat
                                        </Link>
                                    </ul>
                                </div>
                                <div className="card_btn lg:w-1/4 flex w-full lg:justify-end justify-center py-3">
                                    <Link to="/Nodes" className='custom_btn px-5 py-2 rounded-md bg_brown text-white text-lg font-normal shadow'>Apply Now</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Experts hire Section Start  */}
            <section className="experts_hire bg-white relative">
                <div className="container mx-auto relative z-10 py-10">
                    <h3 className="text-dark font-normal text-5xl pb-1 mb-10 text-center">
                        Perks & <span className='text-[#2780d4]'>Benefits</span>
                    </h3>
                    <span className="title-effect">Perks</span>
                    <div className="max-w-screen-2xl flex flex-wrap mx-auto h-full">
                        <div className="sm:w-1/2 lg:w-1/3 w-full p-2 mb-5 h-[100]">
                            <div className="card bg-white h-full rounded-2xl p-5 w-full shadow hover:shadow-lg mx-auto">
                                <div className="test_media w-full h-full items-start justify-start">
                                    <div className="test_media_img mb-2 max-w-[50px] min-w-[50px] max-h-[50px]">
                                        <img src={require('../asstes/image/home/transparency-svg.png')} className="max-w-[50px] min-w-[50px] max-h-[50px] w-full h-full"></img>
                                    </div>
                                    <div className="test_media_content pt-5">
                                        <h4 className="text-black text-xl font-medium mb-2">100% Transparency</h4>
                                        <p className="text-base xsm:text-left text-justify color_grey font-normal">We don’t believe in beating around the bushes! What is will be presented to you in all honesty.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="sm:w-1/2 lg:w-1/3 w-full p-2 mb-5 h-[100]">
                            <div className="card bg-white h-full rounded-2xl p-5 w-full shadow hover:shadow-lg mx-auto">
                                <div className="test_media w-full h-full items-start justify-start">
                                    <div className="test_media_img mb-2 max-w-[50px] min-w-[50px] max-h-[50px]">
                                        <img src={require('../asstes/image/home/free-svg.png')} className="max-w-[50px] min-w-[50px] max-h-[50px] w-full h-full"></img>
                                    </div>
                                    <div className="test_media_content pt-5">
                                        <h4 className="text-black text-xl font-medium mb-2">Free 30 Days Support</h4>
                                        <p className="text-base xsm:text-left text-justify color_grey font-normal">Our service does not just end at delivery, we offer free support as well. If you are facing any kind of issues with the product our professional will help you.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="sm:w-1/2 lg:w-1/3 w-full p-2 mb-5 h-[100]">
                            <div className="card bg-white h-full rounded-2xl p-5 w-full shadow hover:shadow-lg mx-auto">
                                <div className="test_media w-full h-full items-start justify-start">
                                    <div className="test_media_img mb-2 max-w-[50px] min-w-[50px] max-h-[50px]">
                                        <img src={require('../asstes/image/home/support-svg.png')} className="max-w-[50px] min-w-[50px] max-h-[50px] w-full h-full"></img>
                                    </div>
                                    <div className="test_media_content pt-5">
                                        <h4 className="text-black text-xl font-medium mb-2">24X7 Support</h4>
                                        <p className="text-base xsm:text-left text-justify color_grey font-normal">We believe in relationship building, and that can only be done when we support each other.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="sm:w-1/2 lg:w-1/3 w-full p-2 mb-5 h-[100]">
                            <div className="card bg-white h-full rounded-2xl p-5 w-full shadow hover:shadow-lg mx-auto">
                                <div className="test_media w-full h-full items-start justify-start">
                                    <div className="test_media_img mb-2 max-w-[50px] min-w-[50px] max-h-[50px]">
                                        <img src={require('../asstes/image/home/delivery-svg.png')} className="max-w-[50px] min-w-[50px] max-h-[50px] w-full h-full"></img>
                                    </div>
                                    <div className="test_media_content pt-5">
                                        <h4 className="text-black text-xl font-medium mb-2">95% Ontime Delivery</h4>
                                        <p className="text-base xsm:text-left text-justify color_grey font-normal">Our professionals are not just skilled but dedicated to timelines as well. We are very proud to hold a record.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="sm:w-1/2 lg:w-1/3 w-full p-2 mb-5 h-[100]">
                            <div className="card bg-white h-full rounded-2xl p-5 w-full shadow hover:shadow-lg mx-auto">
                                <div className="test_media w-full h-full items-start justify-start">
                                    <div className="test_media_img mb-2 max-w-[50px] min-w-[50px] max-h-[50px]">
                                        <img src={require('../asstes/image/home/flexible-svg.png')} className="max-w-[50px] min-w-[50px] max-h-[50px] w-full h-full"></img>
                                    </div>
                                    <div className="test_media_content pt-5">
                                        <h4 className="text-black text-xl font-medium mb-2">Flexible Engagements</h4>
                                        <p className="text-base xsm:text-left text-justify color_grey font-normal">Our focus is not just on delivering the best results but to offer a remarkable experience.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="sm:w-1/2 lg:w-1/3 w-full p-2 mb-5 h-[100]">
                            <div className="card bg-white h-full rounded-2xl p-5 w-full shadow hover:shadow-lg mx-auto">
                                <div className="test_media w-full h-full items-start justify-start">
                                    <div className="test_media_img mb-2 max-w-[50px] min-w-[50px] max-h-[50px]">
                                        <img src={require('../asstes/image/home/transparency-svg.png')} className="max-w-[50px] min-w-[50px] max-h-[50px] w-full h-full"></img>
                                    </div>
                                    <div className="test_media_content pt-5">
                                        <h4 className="text-black text-xl font-medium mb-2">100% Transparency</h4>
                                        <p className="text-base xsm:text-left text-justify color_grey font-normal">We have an outstanding record of projects completed with different sector’s clients.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />

        </>
    );
}

export default Career;
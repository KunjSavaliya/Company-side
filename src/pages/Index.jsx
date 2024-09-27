import React from 'react';
import { Link } from "react-router-dom";
import Header from '../componets/header';
import Footer from '../componets/footer';
import Testimonnial from '../componets/testimonnial';
// import Upload from '../componets/upload';


function Index() {
    return (
        <>
            <Header />
            {/* Hero Section Start  */}
            <section className="hero_section relative flex items-center w-full md:h-screen sm:h-[900px] h-[900px] overflow-hidden">
                {/* <canvas id="myCanvas" width="1436" height="882"></canvas> */}
                <div className="container mx-auto">
                    <div className="max-w-screen-2xl flex flex-wrap items-center md:justify-start justify-center mx-auto relative z-10">
                        <div className="lg:w-1/2 w-full p-3  my-3">
                            <div className="hero_inner lg:text-start text-center relative z-10 w-full md:max-w-[650px]">
                                <h1 className="hero-title font-normal text-5xl leading-tight text-white font-Rajdhani lg:my-8 my-5">Get Your Websites & Apps the way you want </h1>
                                <p className="text-white text-xl font-normal">Create world-class products with Seamless Design and Development without stress.</p>
                                <div className="flex mt-10 lg:justify-start justify-center">
                                    <Link to="/">
                                        <button type="button" className="custom_btn px-5 py-3 rounded-lg  hover:bg-white bg_brown  text-white hover:text-black text-lg font-normal shadow">Get a free quote</button>
                                    </Link>
                                    <Link to="/" className="ms-3">
                                        <button type="button" className="custom_btn px-5 py-3 rounded-lg  bg-white hover:bg_brown text-black hover:text-white text-lg font-normal shadow">Build Your Team</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="relative lg:w-1/2 w-full p-3 lg:flex  justify-center  hidden">
                            <img src={require('../asstes/image/home/scene-svg.png')} className="relative max-w-[600px]  w-full h-full rounded-md"></img>
                        </div>
                    </div>
                </div>
            </section>
            {/* Service Section Start  */}
            <section className="service_section py-10 relative">
                <div className="container mx-auto">
                    <h3 className="text-dark font-normal text-5xl pb-1 mb-5 text-center">
                        Choose your <span className='text-[#2780d4]'>Service</span>
                    </h3>
                    <span className="title-effect">Services</span>
                    <div className="max-w-screen-2xl flex flex-wrap mx-auto">
                        <div className="sm:w-1/2 lg:w-1/3 w-full p-3 mx-auto my-5">
                            <div className="bg-white rounded-2xl px-5 pt-16 pb-8 w-full shadow hover:shadow-lg translate-y-4 mx-auto h-full flex items-center">
                                <div className="absolute -top-7  card-image service-icon flex items-center justify-center w-full rounded-lg bg-[#2780d4] max-w-[60px] max-h-[60px] min-h-[60px]">
                                    <i className="fa-solid fa-binoculars text-2xl text-white"></i>
                                </div>
                                <div className="card_content relative">
                                    <h2 className="text-black font-semibold text-xl mb-3">Hire Dedicated Developers</h2>
                                    <ul className='flex flex-wrap mb-3'>
                                        <Link to="/" className="color_grey text-base font-normal pe-2" >
                                            Full time
                                        </Link>
                                        <Link to="/" className="color_grey text-base font-medium px-2 border-l border-red-100" >
                                            Part time
                                        </Link>
                                        <Link to="/" className="color_grey text-base font-medium px-2 border-l border-red-100" >
                                            Hourly base
                                        </Link>
                                    </ul>
                                    <p className="font-normal text-lg xsm:text-left text-justify color_grey">
                                        Hire a team that you can manage just like your own in-house team.
                                    </p>
                                </div>
                                <span className="card_font_text absolute right-6 top-0 color_light_brown text-8xl font-normal opacity-10">01</span>
                            </div>
                        </div>
                        <div className="sm:w-1/2 lg:w-1/3 w-full p-3 mx-auto my-5">
                            <div className="bg-white rounded-2xl px-5 pt-16 pb-8 w-full shadow hover:shadow-lg translate-y-4 mx-auto h-full flex items-center">
                                <div className="absolute -top-7  card-image service-icon flex items-center justify-center w-full rounded-lg bg-[#2780d4] max-w-[60px] max-h-[60px] min-h-[60px]">
                                    <i className="fa-solid fa-laptop-code text-2xl text-white"></i>
                                </div>
                                <div className="card_content relative">
                                    <h2 className="text-black font-semibold text-xl mb-3">Web Development</h2>
                                    <ul className='flex flex-wrap mb-3'>
                                        <Link to="/" className="color_grey text-base font-normal pe-2" >
                                            NodeJs
                                        </Link>
                                        <Link to="/" className="color_grey text-base font-medium px-2 border-l border-red-100" >
                                            Python
                                        </Link>
                                        <Link to="/" className="color_grey text-base font-medium px-2 border-l border-red-100" >
                                            Laravel
                                        </Link>
                                        <Link to="/" className="color_grey text-base font-medium px-2 border-l border-red-100" >
                                            PHP
                                        </Link>
                                    </ul>
                                    <p className="font-normal text-lg xsm:text-left text-justify color_grey">
                                        Our highly skilled developers work on the top technologies to work best on your business projects.
                                    </p>
                                </div>
                                <span className="card_font_text absolute right-6 top-0 color_light_brown text-8xl font-normal opacity-10">02</span>
                            </div>
                        </div>
                        <div className="sm:w-1/2 lg:w-1/3 w-full p-3 mx-auto my-5">
                            <div className="bg-white rounded-2xl px-5 pt-16 pb-8 w-full shadow hover:shadow-lg translate-y-4 mx-auto h-full flex items-center">
                                <div className="absolute -top-7  card-image service-icon flex items-center justify-center w-full rounded-lg bg-[#2780d4] max-w-[60px] max-h-[60px] min-h-[60px]">
                                    <i className="fa-brands fa-connectdevelop text-2xl text-white"></i>
                                </div>
                                <div className="card_content relative">
                                    <h2 className="text-black font-semibold text-xl mb-3">Application Development</h2>
                                    <ul className='flex flex-wrap mb-3'>
                                        <Link to="/" className="color_grey text-base font-normal pe-2" >
                                            Android
                                        </Link>
                                        <Link to="/" className="color_grey text-base font-medium px-2 border-l border-red-100" >
                                            IOS
                                        </Link>
                                        <Link to="/" className="color_grey text-base font-medium px-2 border-l border-red-100" >
                                            React Native
                                        </Link>
                                        <Link to="/" className="color_grey text-base font-medium px-2 border-l border-red-100" >
                                            Flutter
                                        </Link>
                                    </ul>
                                    <p className="font-normal text-lg xsm:text-left text-justify color_grey">
                                        Android and iOS app development following compliance with Google and Apple guidelines.
                                    </p>
                                </div>
                                <span className="card_font_text absolute right-6 top-0 color_light_brown text-8xl font-normal opacity-10">03</span>
                            </div>
                        </div>
                        <div className="sm:w-1/2 lg:w-1/3 w-full p-3 mx-auto my-5">
                            <div className="bg-white rounded-2xl px-5 pt-16 pb-8 w-full shadow hover:shadow-lg translate-y-4 mx-auto h-full flex items-center">
                                <div className="absolute -top-7  card-image service-icon flex items-center justify-center w-full rounded-lg bg-[#2780d4] max-w-[60px] max-h-[60px] min-h-[60px]">
                                    <i className="fa-solid fa-briefcase text-2xl text-white"></i>
                                </div>
                                <div className="card_content relative">
                                    <h2 className="text-black font-semibold text-xl mb-3">Front End Development</h2>
                                    <ul className='flex flex-wrap mb-3'>
                                        <Link to="/" className="color_grey text-base font-normal pe-2" >
                                            Angular
                                        </Link>
                                        <Link to="/" className="color_grey text-base font-medium px-2 border-l border-red-100" >
                                            React
                                        </Link>
                                        <Link to="/" className="color_grey text-base font-medium px-2 border-l border-red-100" >
                                            VueJs
                                        </Link>
                                    </ul>
                                    <p className="font-normal text-lg xsm:text-left text-justify color_grey">
                                        We have the experience to work on angular, react, and vue . to give our best solution on the front end.
                                    </p>
                                </div>
                                <span className="card_font_text absolute right-6 top-0 color_light_brown text-8xl font-normal opacity-10">04</span>
                            </div>
                        </div>
                        <div className="sm:w-1/2 lg:w-1/3 w-full p-3 mx-auto my-5">
                            <div className="bg-white rounded-2xl px-5 pt-16 pb-8 w-full shadow hover:shadow-lg translate-y-4 mx-auto h-full flex items-center">
                                <div className="absolute -top-7  card-image service-icon flex items-center justify-center w-full rounded-lg bg-[#2780d4] max-w-[60px] max-h-[60px] min-h-[60px]">
                                    <i className="fa-regular fa-object-ungroup text-2xl text-white"></i>
                                </div>
                                <div className="card_content relative">
                                    <h2 className="text-black font-semibold text-xl mb-3">UX/UI Design</h2>
                                    <ul className='flex flex-wrap mb-3'>
                                        <Link to="/" className="color_grey text-base font-normal pe-2" >
                                            Figma
                                        </Link>
                                        <Link to="/" className="color_grey text-base font-medium px-2 border-l border-red-100" >
                                            Photoshop
                                        </Link>
                                        <Link to="/" className="color_grey text-base font-medium px-2 border-l border-red-100" >
                                            Adobe XD
                                        </Link>
                                    </ul>
                                    <p className="font-normal text-lg xsm:text-left text-justify color_grey">
                                        Our experience designer will assist in giving the best design to create a unique and authentic web.
                                    </p>
                                </div>
                                <span className="card_font_text absolute right-6 top-0 color_light_brown text-8xl font-normal opacity-10">05</span>
                            </div>
                        </div>
                        <div className="sm:w-1/2 lg:w-1/3 w-full p-3 mx-auto my-5">
                            <div className="bg-white rounded-2xl px-5 pt-16 pb-8 w-full shadow hover:shadow-lg translate-y-4 mx-auto h-full flex items-center">
                                <div className="absolute -top-7  card-image service-icon flex items-center justify-center w-full rounded-lg bg-[#2780d4] max-w-[60px] max-h-[60px] min-h-[60px]">
                                    <i className="fa-solid fa-globe text-2xl text-white"></i>
                                </div>
                                <div className="card_content relative">
                                    <h2 className="text-black font-semibold text-xl mb-3">QA Service</h2>
                                    <ul className='flex flex-wrap mb-3'>
                                        <Link to="/" className="color_grey text-base font-normal pe-2" >
                                            Swift
                                        </Link>
                                        <Link to="/" className="color_grey text-base font-medium px-2 border-l border-red-100" >
                                            Realm
                                        </Link>
                                        <Link to="/" className="color_grey text-base font-medium px-2 border-l border-red-100" >
                                            CoreData
                                        </Link>
                                        <Link to="/" className="color_grey text-base font-medium px-2 border-l border-red-100" >
                                            Objective C
                                        </Link>
                                    </ul>
                                    <p className="font-normal text-lg xsm:text-left text-justify color_grey">
                                        We provide Manual and Automation testing Services to meet the standards of Quality.
                                    </p>
                                </div>
                                <span className="card_font_text absolute right-6 top-0 color_light_brown text-8xl font-normal opacity-10">06</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Experts hire Section Start  */}
            <section className="experts_hire bg-white relative">
                <div className=" after:bg-[url('./../../asstes/image/home/zig-zag-shape.png')] after:bg-contain after:h-full after:w-full after:bg-right -after:z-[1] after:bg-no-repeat after:top-0 after:absolute -z-10">
                    <div className="container mx-auto relative z-10 py-10">
                        <h3 className="text-dark font-normal text-4xl pb-1 mb-10 text-center">
                            <span className='text-[#2780d4]'>TECHNOLOGIES WE</span> WORK WITH
                        </h3>
                        <span className="title-effect">Process</span>
                        <div className="max-w-screen-2xl flex flex-wrap justify-center mx-auto">
                            <div className="sm:w-1/2 md:w-1/3 lg:w-1/4 w-full p-2 mb-5">
                                <div className="bg-white rounded-2xl p-5 w-full shadow hover:shadow-lg mx-auto h-full flex">
                                    <div className="card_content relative w-full">
                                        <h2 className="text-black font-semibold text-xl mb-3 border-b border-dashed border-gray pb-3">Frontend</h2>
                                        <div className="flex">
                                            <ul className='mb-3 flex-col'>
                                                <li>
                                                    <Link to="/" className="color_grey text-base font-medium flex pb-2 items-center" >
                                                        <img src={require('../asstes/image/home/hire/front/angular.png')} className="w-full h-full max-w-[21px] max-h-[21px]"></img>
                                                        <span className='ms-2'>Angular</span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/" className="color_grey text-base font-medium flex pb-2 items-center" >
                                                        <img src={require('../asstes/image/home/hire/front/react-native.png')} className="w-full h-full max-w-[21px] max-h-[21px]"></img>
                                                        <span className='ms-2'>React</span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/" className="color_grey text-base font-medium flex pb-2 items-center" >
                                                        <img src={require('../asstes/image/home/hire/front/vue-js.png')} className="w-full h-full max-w-[21px] max-h-[21px]"></img>
                                                        <span className='ms-2'>Vue Js</span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/" className="color_grey text-base font-medium flex pb-2 items-center" >
                                                        <img src={require('../asstes/image/home/hire/front/html.png')} className="w-full h-full max-w-[21px] max-h-[21px]"></img>
                                                        <span className='ms-2'>HTML</span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/" className="color_grey text-base font-medium flex pb-2 items-center" >
                                                        <img src={require('../asstes/image/home/hire/front/css.png')} className="w-full h-full max-w-[21px] max-h-[21px]"></img>
                                                        <span className='ms-2'>Css</span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/" className="color_grey text-base font-medium flex pb-2 items-center" >
                                                        <img src={require('../asstes/image/home/hire/front/js.png')} className="w-full h-full max-w-[21px] max-h-[21px]"></img>
                                                        <span className='ms-2'>JS</span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/" className="color_grey text-base font-medium flex pb-2 items-center" >
                                                        <img src={require('../asstes/image/home/hire/front/bootstrap.png')} className="w-full h-full max-w-[21px] max-h-[21px]"></img>
                                                        <span className='ms-2'>Bootstrap</span>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="sm:w-1/2 md:w-1/3 lg:w-1/4 w-full p-2 mb-5">
                                <div className="bg-white rounded-2xl p-5 w-full shadow hover:shadow-lg mx-auto h-full flex">
                                    <div className="card_content relative w-full">
                                        <h2 className="text-black font-semibold text-xl mb-3 border-b border-dashed border-gray pb-3">Backend</h2>
                                        <div className="flex">
                                            <ul className='mb-3 flex-col'>
                                                <li>
                                                    <Link to="/" className="color_grey text-base font-medium flex pb-2 items-center" >
                                                        <img src={require('../asstes/image/home/hire/backend/node.png')} className="w-full h-full max-w-[21px] max-h-[21px]"></img>
                                                        <span className='ms-2'>Nodejs</span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/" className="color_grey text-base font-medium flex pb-2 items-center" >
                                                        <img src={require('../asstes/image/home/hire/backend/php.png')} className="w-full h-full max-w-[21px] max-h-[21px]"></img>
                                                        <span className='ms-2'>PHP</span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/" className="color_grey text-base font-medium flex pb-2 items-center" >
                                                        <img src={require('../asstes/image/home/hire/backend/python.png')} className="w-full h-full max-w-[21px] max-h-[21px]"></img>
                                                        <span className='ms-2'>Python</span>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="sm:w-1/2 md:w-1/3 lg:w-1/4 w-full p-2 mb-5">
                                <div className="bg-white rounded-2xl p-5 w-full shadow hover:shadow-lg mx-auto h-full flex">
                                    <div className="card_content relative w-full">
                                        <h2 className="text-black font-semibold text-xl mb-3 border-b border-dashed border-gray pb-3">Mobile</h2>
                                        <div className="flex">
                                            <ul className='mb-3 flex-col'>
                                                <li>
                                                    <Link to="/" className="color_grey text-base font-medium flex pb-2 items-center" >
                                                        <img src={require('../asstes/image/home/hire/mobile/android.png')} className="w-full h-full max-w-[21px] max-h-[21px]"></img>
                                                        <span className='ms-2'>Android</span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/" className="color_grey text-base font-medium flex pb-2 items-center" >
                                                        <img src={require('../asstes/image/home/hire/mobile/ios-2.png')} className="w-full h-full max-w-[21px] max-h-[21px]"></img>
                                                        <span className='ms-2'>Ios</span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/" className="color_grey text-base font-medium flex pb-2 items-center" >
                                                        <img src={require('../asstes/image/home/hire/mobile/lonic.png')} className="w-full h-full max-w-[21px] max-h-[21px]"></img>
                                                        <span className='ms-2'>Ionic</span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/" className="color_grey text-base font-medium flex pb-2 items-center" >
                                                        <img src={require('../asstes/image/home/hire/mobile/flutter-2.png')} className="w-full h-full max-w-[21px] max-h-[21px]"></img>
                                                        <span className='ms-2'>Flutter</span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/" className="color_grey text-base font-medium flex pb-2 items-center" >
                                                        <img src={require('../asstes/image/home/hire/mobile/reactnative.png')} className="w-full h-full max-w-[21px] max-h-[21px]"></img>
                                                        <span className='ms-2'>React Native</span>
                                                    </Link>
                                                </li>
                                            </ul>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="sm:w-1/2 md:w-1/3 lg:w-1/4 w-full p-2 mb-5">
                                <div className="bg-white rounded-2xl p-5 w-full shadow hover:shadow-lg mx-auto h-full flex">
                                    <div className="card_content relative w-full">
                                        <h2 className="text-black font-semibold text-xl mb-3 border-b border-dashed border-gray pb-3">Database</h2>
                                        <div className="flex">
                                            <ul className='mb-3 flex-col'>
                                                <li>
                                                    <Link to="/" className="color_grey text-base font-medium flex pb-2 items-center" >
                                                        <img src={require('../asstes/image/home/hire/database/mysql.png')} className="w-full h-full max-w-[21px] max-h-[21px]"></img>
                                                        <span className='ms-2'>Sql</span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/" className="color_grey text-base font-medium flex pb-2 items-center" >
                                                        <img src={require('../asstes/image/home/hire/database/azure1.png')} className="w-full h-full max-w-[21px] max-h-[21px]"></img>
                                                        <span className='ms-2'>Azure</span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/" className="color_grey text-base font-medium flex pb-2 items-center" >
                                                        <img src={require('../asstes/image/home/hire/database/aws.png')} className="w-full h-full max-w-[21px] max-h-[21px]"></img>
                                                        <span className='ms-2'>AWS</span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/" className="color_grey text-base font-medium flex pb-2 items-center" >
                                                        <img src={require('../asstes/image/home/hire/database/mangoDb.png')} className="w-full h-full max-w-[21px] max-h-[21px]"></img>
                                                        <span className='ms-2'>MongoDB</span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/" className="color_grey text-base font-medium flex pb-2 items-center" >
                                                        <img src={require('../asstes/image/home/hire/database/firebase.png')} className="w-full h-full max-w-[21px] max-h-[21px]"></img>
                                                        <span className='ms-2'>Firebase</span>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="sm:w-1/2 md:w-1/3 lg:w-1/4 w-full p-2 mb-5">
                                <div className="bg-white rounded-2xl p-5 w-full shadow hover:shadow-lg mx-auto h-full flex">
                                    <div className="card_content relative w-full">
                                        <h2 className="text-black font-semibold text-xl mb-3 border-b border-dashed border-gray pb-3">Frameworks</h2>
                                        <div className="flex">
                                            <ul className='mb-3 flex-col'>
                                                <li>
                                                    <Link to="/" className="color_grey text-base font-medium flex pb-2 items-center" >
                                                        <img src={require('../asstes/image/home/hire/framework/laravel.png')} className="w-full h-full max-w-[21px] max-h-[21px]"></img>
                                                        <span className='ms-2'>Laravel</span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/" className="color_grey text-base font-medium flex pb-2 items-center" >
                                                        <img src={require('../asstes/image/home/hire/framework/codelgnitor.png')} className="w-full h-full max-w-[21px] max-h-[21px]"></img>
                                                        <span className='ms-2'>Codelgnitor</span>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="sm:w-1/2 md:w-1/3 lg:w-1/4 w-full p-2 mb-5">
                                <div className="bg-white rounded-2xl p-5 w-full shadow hover:shadow-lg mx-auto h-full flex">
                                    <div className="card_content relative w-full">
                                        <h2 className="text-black font-semibold text-xl mb-3 border-b border-dashed border-gray pb-3">Ecommerce</h2>
                                        <div className="flex">
                                            <ul className='mb-3 flex-col'>
                                                <li>
                                                    <Link to="/" className="color_grey text-base font-medium flex pb-2 items-center" >
                                                        <img src={require('../asstes/image/home/hire/ecommerce/woocommerce.png')} className="w-full h-full max-w-[21px] max-h-[21px]"></img>
                                                        <span className='ms-2'>woocommerce</span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/" className="color_grey text-base font-medium flex pb-2 items-center" >
                                                        <img src={require('../asstes/image/home/hire/ecommerce/shopify.png')} className="w-full h-full max-w-[21px] max-h-[21px]"></img>
                                                        <span className='ms-2'>Shopify</span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/" className="color_grey text-base font-medium flex pb-2 items-center" >
                                                        <img src={require('../asstes/image/home/hire/ecommerce/magento.png')} className="w-full h-full max-w-[21px] max-h-[21px]"></img>
                                                        <span className='ms-2'>Magento</span>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="sm:w-1/2 md:w-1/3 lg:w-1/4 w-full p-2 mb-5">
                                <div className="bg-white rounded-2xl p-5 w-full shadow hover:shadow-lg mx-auto h-full flex">
                                    <div className="card_content relative w-full">
                                        <h2 className="text-black font-semibold text-xl mb-3 border-b border-dashed border-gray pb-3">CMS</h2>
                                        <div className="flex">
                                            <ul className='mb-3 flex-col'>
                                                <li>
                                                    <Link to="/" className="color_grey text-base font-medium flex pb-2 items-center" >
                                                        <img src={require('../asstes/image/home/hire/cms/wordpress.png')} className="w-full h-full max-w-[21px] max-h-[21px]"></img>
                                                        <span className='ms-2'>wordpress</span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/" className="color_grey text-base font-medium flex pb-2 items-center" >
                                                        <img src={require('../asstes/image/home/hire/cms/prestashop.png')} className="w-full h-full max-w-[21px] max-h-[21px]"></img>
                                                        <span className='ms-2'>Prestashop</span>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container mx-auto relative z-10 py-10">
                        <h3 className="text-dark font-normal text-5xl pb-1 mb-10 text-center">
                            What will you <span className='text-[#2780d4]'>Get ?</span>
                        </h3>
                        <span className="title-effect">Features</span>
                        <div className="max-w-screen-2xl flex flex-wrap mx-auto h-full">
                            <div className="sm:w-1/2 lg:w-1/3 w-full p-2 mb-5 h-[100]">
                                <div className="card bg-white h-full rounded-2xl p-5 w-full shadow hover:shadow-lg mx-auto">
                                    <div className="flex flex-wrap lg:flex-nowrap test_media w-full h-full items-start justify-start">
                                        <div className="test_media_img mb-2 max-w-[50px] min-w-[50px] max-h-[50px]">
                                            <img src={require('../asstes/image/home/transparency-svg.png')} className="max-w-[50px] min-w-[50px] max-h-[50px] w-full h-full"></img>
                                        </div>
                                        <div className="test_media_content lg:ms-5 lg:mt-0 mt-3">
                                            <h4 className="text-black text-xl font-medium mb-2">Client Centric Development</h4>
                                            <p className="text-base xsm:text-left text-justify color_grey font-normal">Client Centric Development We understand clients needs and craft solution for there business growth.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="sm:w-1/2 lg:w-1/3 w-full p-2 mb-5 h-[100]">
                                <div className="card bg-white h-full rounded-2xl p-5 w-full shadow hover:shadow-lg mx-auto">
                                    <div className="flex flex-wrap lg:flex-nowrap test_media w-full h-full items-start justify-start">
                                        <div className="test_media_img mb-2 max-w-[50px] min-w-[50px] max-h-[50px]">
                                            <img src={require('../asstes/image/home/delivery-svg.png')} className="max-w-[50px] min-w-[50px] max-h-[50px] w-full h-full"></img>
                                        </div>
                                        <div className="test_media_content lg:ms-5 lg:mt-0 mt-3">
                                            <h4 className="text-black text-xl font-medium mb-2">Quality Assurance</h4>
                                            <p className="text-base xsm:text-left text-justify color_grey font-normal">We dont compromise on quality of clients product.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="sm:w-1/2 lg:w-1/3 w-full p-2 mb-5 h-[100]">
                                <div className="card bg-white h-full rounded-2xl p-5 w-full shadow hover:shadow-lg mx-auto">
                                    <div className="flex flex-wrap lg:flex-nowrap test_media w-full h-full items-start justify-start">
                                        <div className="test_media_img mb-2 max-w-[50px] min-w-[50px] max-h-[50px]">
                                            <img src={require('../asstes/image/home/free-svg.png')} className="max-w-[50px] min-w-[50px] max-h-[50px] w-full h-full"></img>
                                        </div>
                                        <div className="test_media_content lg:ms-5 lg:mt-0 mt-3">
                                            <h4 className="text-black text-xl font-medium mb-2">Data Protection</h4>
                                            <p className="text-base xsm:text-left text-justify color_grey font-normal">100% Data protection, secured with NDA.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="sm:w-1/2 lg:w-1/3 w-full p-2 mb-5 h-[100]">
                                <div className="card bg-white h-full rounded-2xl p-5 w-full shadow hover:shadow-lg mx-auto">
                                    <div className="flex flex-wrap lg:flex-nowrap test_media w-full h-full items-start justify-start">
                                        <div className="test_media_img mb-2 max-w-[50px] min-w-[50px] max-h-[50px]">
                                            <img src={require('../asstes/image/home/flexible-svg.png')} className="max-w-[50px] min-w-[50px] max-h-[50px] w-full h-full"></img>
                                        </div>
                                        <div className="test_media_content lg:ms-5 lg:mt-0 mt-3">
                                            <h4 className="text-black text-xl font-medium mb-2">Expert Developers</h4>
                                            <p className="text-base xsm:text-left text-justify color_grey font-normal">Top Developers work on project to make it faster , smoother and scalable.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="sm:w-1/2 lg:w-1/3 w-full p-2 mb-5 h-[100]">
                                <div className="card bg-white h-full rounded-2xl p-5 w-full shadow hover:shadow-lg mx-auto">
                                    <div className="flex flex-wrap lg:flex-nowrap test_media w-full h-full items-start justify-start">
                                        <div className="test_media_img mb-2 max-w-[50px] min-w-[50px] max-h-[50px]">
                                            <img src={require('../asstes/image/home/support-svg.png')} className="max-w-[50px] min-w-[50px] max-h-[50px] w-full h-full"></img>
                                        </div>
                                        <div className="test_media_content lg:ms-5 lg:mt-0 mt-3">
                                            <h4 className="text-black text-xl font-medium mb-2">On Time Delivery</h4>
                                            <p className="text-base xsm:text-left text-justify color_grey font-normal">We understand your time so try to keep project always on time delivered.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="sm:w-1/2 lg:w-1/3 w-full p-2 mb-5 h-[100]">
                                <div className="card bg-white h-full rounded-2xl p-5 w-full shadow hover:shadow-lg mx-auto">
                                    <div className="flex flex-wrap lg:flex-nowrap test_media w-full h-full items-start justify-start">
                                        <div className="test_media_img mb-2 max-w-[50px] min-w-[50px] max-h-[50px]">
                                            <img src={require('../asstes/image/home/transparency-svg.png')} className="max-w-[50px] min-w-[50px] max-h-[50px] w-full h-full"></img>
                                        </div>
                                        <div className="test_media_content lg:ms-5 lg:mt-0 mt-3">
                                            <h4 className="text-black text-xl font-medium mb-2">Dedicated Support</h4>
                                            <p className="text-base xsm:text-left text-justify color_grey font-normal">Always available for our client to meet there expectations and needs.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Testimonnial Section Start */}
            <section className="testimonnial xsm:pt-20 pt-10">
                <div className="container mx-auto relative z-10 py-10">
                    <h3 className="text-dark font-normal text-5xl pb-1 mb-10 text-center">
                        What <span className='text-[#2780d4]'>Clients</span> are Saying
                    </h3>
                    <span className="title-effect">Testimonial</span>
                    <div className="max-w-screen-xl mx-auto">
                        <Testimonnial />
                    </div>
                </div>
            </section>
            {/* Contact Section Start */}
            <section className="contactus py-10 relative z-10">
                <div className="container mx-auto relative bg-white h-full rounded-2xl p-10 w-full shadow">
                    <div className="flex flex-wrap md:flex-nowrap w-full h-full">
                        <div className="lg:w-1/2 w-full p-3 mb-5 h-[100]">
                            <h3 className="text-dark font-semibold text-5xl mb-5">
                                Get in <span className='text-[#2780d4]'>Touch</span>
                            </h3>
                            <p className="font-normal text-lg xsm:text-left text-justify color_grey">We love to hear your feedback or any queries, you can contact or email us. webiots will try to take your business to a higher level.</p>
                            <div className="address w-full max-w-[400px] mt-10">
                                <div class="card flex mb-8 items-center">
                                    <div class="contact_icon w-full xsm:mx-0 mx-auto bg_brown max-w-[60px] h-full max-h-[60px] min-h-[60px] rounded-tl-[28%] rounded-ss-[30%] rounded-se-[70%] rounded-ee-[30%] rounded-es-[30%] -rotate-12  flex items-center justify-center text-white xsm:mb-0 mb-3">
                                        <i class="fa-solid fa-location-dot text-2xl rotate-12"></i>
                                    </div>
                                    <div class="contact_icon xsm:w-auto w-full ms-4">
                                        <h1 class="text-lg font-normal text-black">Visit Us:</h1>
                                        <p class="color_grey text-base font-medium">411,12,13 / Pavitra Point , Yogichock Puna Gam , 395010</p>
                                    </div>
                                </div>
                                <div class="card flex mb-8 items-center">
                                    <div class="contact_icon w-full xsm:mx-0 mx-auto bg_brown max-w-[60px] h-full max-h-[60px] min-h-[60px] rounded-tl-[28%] rounded-ss-[30%] rounded-se-[70%] rounded-ee-[30%] rounded-es-[30%] -rotate-12  flex items-center justify-center text-white xsm:mb-0 mb-3">
                                        <i class="fa-regular fa-envelope text-2xl rotate-12"></i>
                                    </div>
                                    <div class="contact_icon xsm:w-auto w-full ms-4">
                                        <h1 class="text-lg font-normal text-black">Mail Us:</h1>
                                        <p class="color_grey text-base font-medium">sataniinfotechpvtltd@gmail.com</p>
                                    </div>
                                </div>
                                <div class="card flex mb-8 items-center">
                                    <div class="contact_icon w-full xsm:mx-0 mx-auto bg_brown max-w-[60px] h-full max-h-[60px] min-h-[60px] rounded-tl-[28%] rounded-ss-[30%] rounded-se-[70%] rounded-ee-[30%] rounded-es-[30%] -rotate-12  flex items-center justify-center text-white xsm:mb-0 mb-3">
                                        <i class="fa-solid fa-phone-volume text-2xl rotate-12"></i>
                                    </div>
                                    <div class="contact_icon xsm:w-auto w-full ms-4">
                                        <h1 class="text-lg font-normal text-black">Phone Us:</h1>
                                        <p class="color_grey text-base font-medium">+91 9023359567</p>
                                    </div>
                                </div>

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
            {/* Footer Section Start */}
            <footer className="-mt-32">
                <Footer />
            </footer>


        </>
    );
}

export default Index;
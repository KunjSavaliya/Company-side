import React from 'react';
import { Link } from "react-router-dom";
import Header from '../componets/header';
import Footer from '../componets/footer';


function Service() {
    return (
        <>
            <Header />

            {/* Breadcrumb Section Start */}
            <section className="breadcrumb bg-gradient-to-r from-[#0c4393] to-[#2780d4] xsm:pt-40 xsm:pb-20 py-20">
                <div className="container mx-auto relative ">
                    <div className="max-w-screen-xl mx-auto">
                        <h1 className="text-white font-bold w-full max-w-[900px] mx-auto text-5xl leading-snug text-center">
                            Web and Mobile Software Development Services
                        </h1>
                        <p className='text-white text-lg w-full max-w-[1000px] mx-auto text-center pt-5'>A successful offshore software application development company since 2020, providing a full range of
                            website and mobile app development, games development, IoT, AR-VR and other IT services and solutions globally.</p>
                    </div>
                </div>
            </section>
            {/* Work Service Section Start */}
            <section className='work_service  py-20'>
                <div className="container mx-auto relative">
                    <div className="max-w-screen-xl items-center flex flex-wrap mx-auto">
                        <div className="lg:w-1/2 w-full p-3 mx-auto mb-4">
                            <div className="card_content px-6 relative">
                                <img src={require('../asstes/image/service/mobile/services1.png')} className="relative w-full rounded-md"></img>
                            </div>
                        </div>
                        <div className="lg:w-1/2 w-full p-3 mx-auto mb-4">
                            <div className="card_content px-6 relative">
                                <h2 className="text-black font-bold text-4xl pb-8">Mobile Apps Development</h2>
                                <p className="text-base color_grey font-normal mb-4">
                                    From B2B or B2E apps for enterprises, small businesses, and startups, we have a proven track record of
                                    offering high-impact, result driven and engaging mobile application development services. Webito is a top mobile
                                    app development company that is renowned for delivering native Android app development, native iOS app
                                    development, hybrid and cross-platform app development services to build next-gen mobile applications using the
                                    latest technology stack.
                                </p>
                                <ul className='flex flex-wrap my-4'>
                                    <Link to="/" className="pe-2" >
                                        <img src={require('../asstes/image/service/mobile/mac-os.png')} className="relative w-full rounded-md"></img>
                                    </Link>
                                    <Link to="/" className="pe-2" >
                                        <img src={require('../asstes/image/service/mobile/android-os.png')} className="relative w-full rounded-md"></img>
                                    </Link>
                                    <Link to="/" className="pe-2" >
                                        <img src={require('../asstes/image/service/mobile/react-native.png')} className="relative w-full rounded-md"></img>
                                    </Link>
                                    <Link to="/" className="pe-2" >
                                        <img src={require('../asstes/image/service/mobile/xamarin.png')} className="relative w-full rounded-md"></img>
                                    </Link>
                                </ul>
                                <div className="flex flex-wrap my-4">
                                    <div className="w-1/2">
                                        <ul className='my-4'>
                                            <Link to="/" className="text-sm color_grey" >
                                                <p className='pb-2'>Native iOS App Development</p>
                                            </Link>
                                            <Link to="/" className="text-sm color_grey" >
                                                <p className='pb-2'>Native Android App Development</p>
                                            </Link>
                                            <Link to="/" className="text-sm color_grey" >
                                                <p className='pb-2'>Cross-platform App Development</p>
                                            </Link>
                                        </ul>
                                    </div>
                                    <div className="w-1/2">
                                        <ul className='my-4'>
                                            <Link to="/" className="text-sm color_grey" >
                                                <p className='pb-2'>Hybrid App Development</p>
                                            </Link>
                                            <Link to="/" className="text-sm color_grey" >
                                                <p className='pb-2'>Flutter App Development</p>
                                            </Link>
                                            <Link to="/" className="text-sm color_grey" >
                                                <p className='pb-2'>React Native App Development</p>
                                            </Link>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="max-w-screen-xl items-center flex flex-wrap mx-auto">
                        <div className="lg:w-1/2 w-full p-3 mx-auto mb-4 lg:order-last">
                            <div className="card_content px-6 relative">
                                <img src={require('../asstes/image/service/web/services2.png')} className="relative w-full rounded-md"></img>
                            </div>
                        </div>
                        <div className="lg:w-1/2 w-full p-3 mx-auto mb-4 lg:order-first">
                            <div className="card_content px-6 relative">
                                <h2 className="text-black font-bold text-4xl pb-8">Web Development</h2>
                                <p className="text-base color_grey font-normal mb-4">
                                    Being a leading website application development company, our certified developers have unparalleled
                                    expertise in working with the latest web technologies to deliver custom web solutions. Whether creating a web
                                    presence for your company, an information hub for your business or empowering your apps/IoT devices through
                                    backend- Webito does it all by covering a wide spectrum of web solutions and framework.
                                </p>
                                <ul className='flex flex-wrap my-4'>
                                    <Link to="/" className="pe-2" >
                                        <img src={require('../asstes/image/service/web/nodejs.png')} className="relative w-full rounded-md"></img>
                                    </Link>
                                    <Link to="/" className="pe-2" >
                                        <img src={require('../asstes/image/service/web/magento.png')} className="relative w-full rounded-md"></img>
                                    </Link>
                                    <Link to="/" className="pe-2" >
                                        <img src={require('../asstes/image/service/web/flutter.png')} className="relative w-full rounded-md"></img>
                                    </Link>
                                    <Link to="/" className="pe-2" >
                                        <img src={require('../asstes/image/service/web/laravel.png')} className="relative w-full rounded-md"></img>
                                    </Link>
                                </ul>
                                <div className="flex flex-wrap my-4">
                                    <div className="w-1/2">
                                        <ul className='my-4'>
                                            <Link to="/" className="text-sm color_grey" >
                                                <p className='pb-2'>Custom Website Development</p>
                                            </Link>
                                            <Link to="/" className="text-sm color_grey" >
                                                <p className='pb-2'>Web Application Development</p>
                                            </Link>
                                            <Link to="/" className="text-sm color_grey" >
                                                <p className='pb-2'>eCommerce Store Development</p>
                                            </Link>
                                        </ul>
                                    </div>
                                    <div className="w-1/2">
                                        <ul className='my-4'>
                                            <Link to="/" className="text-sm color_grey" >
                                                <p className='pb-2'>Custom CRM/ERP Software Apps</p>
                                            </Link>
                                            <Link to="/" className="text-sm color_grey" >
                                                <p className='pb-2'>Full-Stack Development</p>
                                            </Link>
                                            <Link to="/" className="text-sm color_grey" >
                                                <p className='pb-2'>Responsive Web Apps</p>
                                            </Link>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="max-w-screen-xl items-center flex flex-wrap mx-auto">
                        <div className="lg:w-1/2 w-full p-3 mx-auto mb-4">
                            <div className="card_content px-6 relative">
                                <img src={require('../asstes/image/service/ui-design/services3.png')} className="relative w-full rounded-md"></img>
                            </div>
                        </div>
                        <div className="lg:w-1/2 w-full p-3 mx-auto mb-4">
                            <div className="card_content px-6 relative">
                                <h2 className="text-black font-bold text-4xl pb-8">UI/UX Design</h2>
                                <p className="text-base color_grey font-normal mb-4">
                                    UI/UX design is the catalyst behind the success of any web or mobile app. Webito is a leading web
                                    design and mobile app design agency with a knack of turning great ideas into meaningful interactions. Starting
                                    from conceptualization, information architecture, visual identity, and UX design; hire UI/UX designers from
                                    Webito for timely delivery of appealing websites and mobile apps resulting maximum user engagement.
                                </p>
                                <ul className='flex flex-wrap my-4'>
                                    <Link to="/" className="pe-2" >
                                        <img src={require('../asstes/image/service/ui-design/adobe-illustrator.png')} className="relative w-full rounded-md"></img>
                                    </Link>
                                    <Link to="/" className="pe-2" >
                                        <img src={require('../asstes/image/service/ui-design/adobe-photoshop.png')} className="relative w-full rounded-md"></img>
                                    </Link>
                                    <Link to="/" className="pe-2" >
                                        <img src={require('../asstes/image/service/ui-design/figma.png')} className="relative w-full rounded-md"></img>
                                    </Link>
                                    <Link to="/" className="pe-2" >
                                        <img src={require('../asstes/image/service/ui-design/invision.png')} className="relative w-full rounded-md"></img>
                                    </Link>
                                </ul>
                                <div className="flex flex-wrap my-4">
                                    <div className="w-1/2">
                                        <ul className='my-4'>
                                            <Link to="/" className="text-sm color_grey" >
                                                <p className='pb-2'>Wireframes Designing</p>
                                            </Link>
                                            <Link to="/" className="text-sm color_grey" >
                                                <p className='pb-2'>Strategic Design Consulting</p>
                                            </Link>
                                            <Link to="/" className="text-sm color_grey" >
                                                <p className='pb-2'>High/Low fidelity Prototype</p>
                                            </Link>
                                        </ul>
                                    </div>
                                    <div className="w-1/2">
                                        <ul className='my-4'>
                                            <Link to="/" className="text-sm color_grey" >
                                                <p className='pb-2'>Mobile App Design</p>
                                            </Link>
                                            <Link to="/" className="text-sm color_grey" >
                                                <p className='pb-2'>UX Analysis</p>
                                            </Link>
                                            <Link to="/" className="text-sm color_grey" >
                                                <p className='pb-2'>UI Design</p>
                                            </Link>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="max-w-screen-xl items-center flex flex-wrap mx-auto">
                        <div className="lg:w-1/2 w-full p-3 mx-auto mb-4 lg:order-last">
                            <div className="card_content px-6 relative">
                                <img src={require('../asstes/image/service/iot/services4.png')} className="relative w-full rounded-md"></img>
                            </div>
                        </div>
                        <div className="lg:w-1/2 w-full p-3 mx-auto mb-4 lg:order-first">
                            <div className="card_content px-6 relative">
                                <h2 className="text-black font-bold text-4xl pb-8">IoT Solutions</h2>
                                <p className="text-base color_grey font-normal mb-4">
                                    Leveraging the power of Internet of Things (IoT), the network of “Connected Devices”, Webito is the
                                    best IoT service provider in developing innovative IoT solutions. Our IoT experts develop bespoke and innovative
                                    IoT solutions to simplify and automate complex business processes. Together we can create amazing wireless
                                    experiences with the modern IoT hardware to collect information. Hire the best IoT programmers from Webito who
                                    help startups and enterprises to build an IoT platform and connect it with other cloud, onsite applications or
                                    multiple IoT platforms.
                                </p>
                                <ul className='flex flex-wrap my-4'>
                                    <Link to="/" className="pe-2" >
                                        <img src={require('../asstes/image/service/iot/arduino-uno-board.png')} className="relative w-full rounded-md"></img>
                                    </Link>
                                    <Link to="/" className="pe-2" >
                                        <img src={require('../asstes/image/service/iot/arduino.png')} className="relative w-full rounded-md"></img>
                                    </Link>
                                    <Link to="/" className="pe-2" >
                                        <img src={require('../asstes/image/service/iot/iot-sensor.png')} className="relative w-full rounded-md"></img>
                                    </Link>
                                </ul>
                                <div className="flex flex-wrap my-4">
                                    <div className="w-1/2">
                                        <ul className='my-4'>
                                            <Link to="/" className="text-sm color_grey" >
                                                <p className='pb-2'>Smart Home Automation</p>
                                            </Link>
                                            <Link to="/" className="text-sm color_grey" >
                                                <p className='pb-2'>Industrial IoT Automation</p>
                                            </Link>
                                            <Link to="/" className="text-sm color_grey" >
                                                <p className='pb-2'>IoT Application Development</p>
                                            </Link>
                                        </ul>
                                    </div>
                                    <div className="w-1/2">
                                        <ul className='my-4'>
                                            <Link to="/" className="text-sm color_grey" >
                                                <p className='pb-2'>iBeacon Solutions</p>
                                            </Link>
                                            <Link to="/" className="text-sm color_grey" >
                                                <p className='pb-2'>APIs & Backend</p>
                                            </Link>
                                            <Link to="/" className="text-sm color_grey" >
                                                <p className='pb-2'>Industry-grade IoT Consultation</p>
                                            </Link>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="max-w-screen-xl items-center flex flex-wrap mx-auto">
                        <div className="lg:w-1/2 w-full p-3 mx-auto mb-4">
                            <div className="card_content px-6 relative">
                                <img src={require('../asstes/image/service/app/services5.png')} className="relative w-full rounded-md"></img>
                            </div>
                        </div>
                        <div className="lg:w-1/2 w-full p-3 mx-auto mb-4">
                            <div className="card_content px-6 relative">
                                <h2 className="text-black font-bold text-4xl pb-8">Wearables App Development</h2>
                                <p className="text-base color_grey font-normal mb-4">
                                    Smart wearable devices have become a new fashion statement today. You will certainly want to tap on
                                    the extremely exclusive market of the apps that run on these smart accessories. Being a leading wearable app
                                    development company, we have hands-on experience in delivering robust, innovative, interactive and high
                                    performing wearable apps for various wearable devices like Google Glass, Android Wear, Samsung Gear, Fitbit,
                                    AR-VR based wearables, etc. Wearables app development experts from Webito are here to transcend your business
                                    idea into small screens for best-in-class digital experiences.
                                </p>
                                <ul className='flex flex-wrap my-4'>
                                    <Link to="/" className="pe-2" >
                                        <img src={require('../asstes/image/service/app/3d-glasses.png')} className="relative w-full rounded-md"></img>
                                    </Link>
                                    <Link to="/" className="pe-2" >
                                        <img src={require('../asstes/image/service/app/apple-watch.png')} className="relative w-full rounded-md"></img>
                                    </Link>
                                    <Link to="/" className="pe-2" >
                                        <img src={require('../asstes/image/service/app/oculus-rift.png')} className="relative w-full rounded-md"></img>
                                    </Link>
                                </ul>
                                <div className="flex flex-wrap my-4">
                                    <div className="w-1/2">
                                        <ul className='my-4'>
                                            <Link to="/" className="text-sm color_grey" >
                                                <p className='pb-2'>Apple Watch Apps</p>
                                            </Link>
                                            <Link to="/" className="text-sm color_grey" >
                                                <p className='pb-2'>Android Wear Apps</p>
                                            </Link>
                                            <Link to="/" className="text-sm color_grey" >
                                                <p className='pb-2'>Google Glass Apps</p>
                                            </Link>
                                        </ul>
                                    </div>
                                    <div className="w-1/2">
                                        <ul className='my-4'>
                                            <Link to="/" className="text-sm color_grey" >
                                                <p className='pb-2'>Wearable Healthcare Apps</p>
                                            </Link>
                                            <Link to="/" className="text-sm color_grey" >
                                                <p className='pb-2'>Fitness Tracking Apps like Fitbit</p>
                                            </Link>
                                            <Link to="/" className="text-sm color_grey" >
                                                <p className='pb-2'>Apps for VR headsets</p>
                                            </Link>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="max-w-screen-xl items-center flex flex-wrap mx-auto">
                        <div className="lg:w-1/2 w-full p-3 mx-auto mb-4 lg:order-last">
                            <div className="card_content px-6 relative">
                                <img src={require('../asstes/image/service/ai_app/services6.png')} className="relative w-full rounded-md"></img>
                            </div>
                        </div>
                        <div className="lg:w-1/2 w-full p-3 mx-auto mb-4 lg:order-first">
                            <div className="card_content px-6 relative">
                                <h2 className="text-black font-bold text-4xl pb-8">AI - ML App Development</h2>
                                <p className="text-base color_grey font-normal mb-4">
                                    Looking to add intelligence to your existing business application or want to develop a new one? You
                                    are in the right place. Our AI-ML engineers will help you do that. We build AI-ML solutions that will save upto
                                    30% cost on your overall business operations. We have expertise in working with tools, frameworks and
                                    technologies like TensorFlow, Apache SystemML, Caffe, Apache Mahout, OpenNN, Torch, Neuroph, Mycroft AI, etc. to
                                    foster business intelligence to diverse industry verticals.
                                </p>
                                <ul className='flex flex-wrap my-4'>
                                    <Link to="/" className="pe-2" >
                                        <img src={require('../asstes/image/service/ai_app/learn-more.png')} className="relative w-full rounded-md"></img>
                                    </Link>
                                    <Link to="/" className="pe-2" >
                                        <img src={require('../asstes/image/service/ai_app/olympic-torch.png')} className="relative w-full rounded-md"></img>
                                    </Link>
                                    <Link to="/" className="pe-2" >
                                        <img src={require('../asstes/image/service/ai_app/sap.png')} className="relative w-full rounded-md"></img>
                                    </Link>
                                </ul>
                                <div className="flex flex-wrap my-4">
                                    <div className="w-1/2">
                                        <ul className='my-4'>
                                            <Link to="/" className="text-sm color_grey" >
                                                <p className='pb-2'>Product Recommendation Engine</p>
                                            </Link>
                                            <Link to="/" className="text-sm color_grey" >
                                                <p className='pb-2'>Chatbots / Conversational AI</p>
                                            </Link>
                                            <Link to="/" className="text-sm color_grey" >
                                                <p className='pb-2'>Image Processing & Recognition</p>
                                            </Link>
                                        </ul>
                                    </div>
                                    <div className="w-1/2">
                                        <ul className='my-4'>
                                            <Link to="/" className="text-sm color_grey" >
                                                <p className='pb-2'>Robotic Process Automation (RPA)</p>
                                            </Link>
                                            <Link to="/" className="text-sm color_grey" >
                                                <p className='pb-2'>Predictive Analysis</p>
                                            </Link>
                                            <Link to="/" className="text-sm color_grey" >
                                                <p className='pb-2'>AI-ML Consultation</p>
                                            </Link>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="max-w-screen-xl items-center flex flex-wrap mx-auto">
                        <div className="lg:w-1/2 w-full p-3 mx-auto mb-4">
                            <div className="card_content px-6 relative">
                                <img src={require('../asstes/image/service/Qa/services7.png')} className="relative w-full rounded-md"></img>
                            </div>
                        </div>
                        <div className="lg:w-1/2 w-full p-3 mx-auto mb-4">
                            <div className="card_content px-6 relative">
                                <h2 className="text-black font-bold text-4xl pb-8">Quality Assurance (QA)</h2>
                                <p className="text-base color_grey font-normal mb-4">
                                    We keep Quality Assurance (QA) and software testing services at the core of our ecosystem. Webito has
                                    proven testing experts whose confidence helps in faster releases with uncompromised quality. We perform various
                                    tests such as Functional, GUI, Usability, Security, Database testing, Cross-platform, Cross-browser,
                                    Accessibility, etc. Our QA experts work with DevOps tools and automated build testing techniques for faster
                                    delivery. With us, you will have full access to QA reports to stay updated about test results having all the
                                    details.
                                </p>
                                <ul className='flex flex-wrap my-4'>
                                    <Link to="/" className="pe-2" >
                                        <img src={require('../asstes/image/service/Qa/database-restore.png')} className="relative w-full rounded-md"></img>
                                    </Link>
                                    <Link to="/" className="pe-2" >
                                        <img src={require('../asstes/image/service/Qa/devops.png')} className="relative w-full rounded-md"></img>
                                    </Link>
                                    <Link to="/" className="pe-2" >
                                        <img src={require('../asstes/image/service/Qa/grand-master-key.png')} className="relative w-full rounded-md"></img>
                                    </Link>
                                </ul>
                                <div className="flex flex-wrap my-4">
                                    <div className="w-1/2">
                                        <ul className='my-4'>
                                            <Link to="/" className="text-sm color_grey" >
                                                <p className='pb-2'>QA Documentation</p>
                                            </Link>
                                            <Link to="/" className="text-sm color_grey" >
                                                <p className='pb-2'>Manual QA Testing</p>
                                            </Link>
                                            <Link to="/" className="text-sm color_grey" >
                                                <p className='pb-2'>Web Testing Automation</p>
                                            </Link>
                                        </ul>
                                    </div>
                                    <div className="w-1/2">
                                        <ul className='my-4'>
                                            <Link to="/" className="text-sm color_grey" >
                                                <p className='pb-2'>Mobile App Testing</p>
                                            </Link>
                                            <Link to="/" className="text-sm color_grey" >
                                                <p className='pb-2'>API Testing Automation</p>
                                            </Link>
                                            <Link to="/" className="text-sm color_grey" >
                                                <p className='pb-2'>Expert QA Consultation</p>
                                            </Link>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="max-w-screen-xl items-center flex flex-wrap mx-auto">
                        <div className="lg:w-1/2 w-full p-3 mx-auto mb-4 lg:order-last">
                            <div className="card_content px-6 relative">
                                <img src={require('../asstes/image/service/hire_dev/services7.png')} className="relative w-full rounded-md"></img>
                            </div>
                        </div>
                        <div className="lg:w-1/2 w-full p-3 mx-auto mb-4 lg:order-first">
                            <div className="card_content px-6 relative">
                                <h2 className="text-black font-bold text-4xl pb-8">Hire Dedicated Developers</h2>
                                <p className="text-base color_grey font-normal mb-4">
                                    From B2B or B2E apps for enterprises, small businesses, and startups, we have a proven track record of
                                    offering high-impact, result driven and engaging mobile application development services. Webito is a top mobile
                                    app development company that is renowned for delivering native Android app development, native iOS app
                                    development, hybrid and cross-platform app development services to build next-gen mobile applications using the
                                    latest technology stack.
                                </p>
                                <ul className='flex flex-wrap my-4'>
                                    <Link to="/" className="pe-2" >
                                        <img src={require('../asstes/image/service/hire_dev/send-job-list.png')} className="relative w-full rounded-md"></img>
                                    </Link>
                                    <Link to="/" className="pe-2" >
                                        <img src={require('../asstes/image/service/hire_dev/teacher-hirring.png')} className="relative w-full rounded-md"></img>
                                    </Link>
                                </ul>
                                <div className="flex flex-wrap my-4">
                                    <div className="w-1/2">
                                        <ul className='my-4'>
                                            <Link to="/" className="text-sm color_grey">
                                                <p className='pb-2'>Onsite Hiring</p>
                                            </Link>
                                            <Link to="/" className="text-sm color_grey">
                                                <p className='pb-2'>Offsite Hiring</p>
                                            </Link>
                                            <Link to="/" className="text-sm color_grey">
                                                <p className='pb-2'>Fixed Rate Hiring</p>
                                            </Link>
                                        </ul>
                                    </div>
                                    <div className="w-1/2">
                                        <ul className='my-4'>
                                            <Link to="/" className="text-sm color_grey">
                                                <p className='pb-2'>Hourly Hiring</p>
                                            </Link>
                                            <Link to="/" className="text-sm color_grey">
                                                <p className='pb-2'>Dedicated Hiring</p>
                                            </Link>
                                            <Link to="/" className="text-sm color_grey">
                                                <p className='pb-2'>Fresher Hiring</p>
                                            </Link>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="max-w-screen-xl items-center flex flex-wrap mx-auto">
                        <div className="lg:w-1/2 w-full p-3 mx-auto mb-4">
                            <div className="card_content px-6 relative">
                                <img src={require('../asstes/image/service/Virtual_app/services8.png')} className="relative w-full rounded-md"></img>
                            </div>
                        </div>
                        <div className="lg:w-1/2 w-full p-3 mx-auto mb-4">
                            <div className="card_content px-6 relative">
                                <h2 className="text-black font-bold text-4xl pb-8">Virtual Reality Apps Development</h2>
                                <p className="text-base color_grey font-normal mb-4">
                                    VR world is growing fast and Webito, being a top VR app development company in India & USA, offers
                                    realistic experiences for Virtual Reality headsets. Our VR app solutions are a perfect fit for industrial use
                                    cases, enterprises, and entertainment. We have proven expertise in delivering VR app development services to
                                    build captivating 3D environments and interactive VR apps for diverse industry verticals.
                                </p>
                                <ul className='flex flex-wrap my-4'>
                                    <Link to="/" className="pe-2" >
                                        <img src={require('../asstes/image/service/Virtual_app/htc-vive-headset.png')} className="relative w-full rounded-md"></img>
                                    </Link>
                                    <Link to="/" className="pe-2" >
                                        <img src={require('../asstes/image/service/Virtual_app/microsoft-hololens.png')} className="relative w-full rounded-md"></img>
                                    </Link>
                                    <Link to="/" className="pe-2" >
                                        <img src={require('../asstes/image/service/Virtual_app/oculus-rift.png')} className="relative w-full rounded-md"></img>
                                    </Link>
                                    <Link to="/" className="pe-2" >
                                        <img src={require('../asstes/image/service/Virtual_app/virtual-reality.png')} className="relative w-full rounded-md"></img>
                                    </Link>
                                </ul>
                                <div className="flex flex-wrap my-4">
                                    <div className="w-1/2">
                                        <ul className='my-4'>
                                            <Link to="/" className="text-sm color_grey" >
                                                <p className='pb-2'>HTV Vive Apps</p>
                                            </Link>
                                            <Link to="/" className="text-sm color_grey" >
                                                <p className='pb-2'>Samsung Gear Apps</p>
                                            </Link>
                                            <Link to="/" className="text-sm color_grey" >
                                                <p className='pb-2'>Oculus Rift + Touch</p>
                                            </Link>
                                        </ul>
                                    </div>
                                    <div className="w-1/2">
                                        <ul className='my-4'>
                                            <Link to="/" className="text-sm color_grey" >
                                                <p className='pb-2'>Microsoft HoloLens Apps</p>
                                            </Link>
                                            <Link to="/" className="text-sm color_grey" >
                                                <p className='pb-2'>VR Cardboard & Oculus Apps</p>
                                            </Link>
                                            <Link to="/" className="text-sm color_grey" >
                                                <p className='pb-2'>Strategic VR Consultation</p>
                                            </Link>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="max-w-screen-xl items-center flex flex-wrap mx-auto">
                        <div className="lg:w-1/2 w-full p-3 mx-auto mb-4 lg:order-last">
                            <div className="card_content px-6 relative">
                                <img src={require('../asstes/image/service/mobile_game/services9.png')} className="relative w-full rounded-md"></img>
                            </div>
                        </div>
                        <div className="lg:w-1/2 w-full p-3 mx-auto mb-4 lg:order-first">
                            <div className="card_content px-6 relative">
                                <h2 className="text-black font-bold text-4xl pb-8">Mobile Game Development</h2>
                                <p className="text-base color_grey font-normal mb-4">
                                    Creating games is the most energetic part of our business. Our skilled mobile game development team
                                    can handle projects from scratch or from any development stage. We’ve been successfully involved in the delivery
                                    of highly interactive and exciting gaming experience on Mobile, Console, and Virtual Reality platforms. We turn
                                    your idea into an addictive Android or iOS game application while making sure we create out of the box gaming
                                    solutions.
                                </p>
                                <ul className='flex flex-wrap my-4'>
                                    <Link to="/" className="pe-2" >
                                        <img src={require('../asstes/image/service/mobile_game/blender-3d.png')} className="relative w-full rounded-md"></img>
                                    </Link>
                                    <Link to="/" className="pe-2" >
                                        <img src={require('../asstes/image/service/mobile_game/buildbox.png')} className="relative w-full rounded-md"></img>
                                    </Link>
                                    <Link to="/" className="pe-2" >
                                        <img src={require('../asstes/image/service/mobile_game/unity.png')} className="relative w-full rounded-md"></img>
                                    </Link>
                                    <Link to="/" className="pe-2" >
                                        <img src={require('../asstes/image/service/mobile_game/unreal-engine.png')} className="relative w-full rounded-md"></img>
                                    </Link>
                                </ul>
                                <div className="flex flex-wrap my-4">
                                    <div className="w-1/2">
                                        <ul className='my-4'>
                                            <Link to="/" className="text-sm color_grey">
                                                <p className='pb-2'>3D / 2D Games</p>
                                            </Link>
                                            <Link to="/" className="text-sm color_grey">
                                                <p className='pb-2'>3D / 2D Games</p>
                                            </Link>
                                            <Link to="/" className="text-sm color_grey">
                                                <p className='pb-2'>Monetization Strategy</p>
                                            </Link>
                                        </ul>
                                    </div>
                                    <div className="w-1/2">
                                        <ul className='my-4'>
                                            <Link to="/" className="text-sm color_grey">
                                                <p className='pb-2'>Unity 3D plugins</p>
                                            </Link>
                                            <Link to="/" className="text-sm color_grey">
                                                <p className='pb-2'>3D Modeling</p>
                                            </Link>
                                            <Link to="/" className="text-sm color_grey">
                                                <p className='pb-2'>Mobile Games Publishing</p>
                                            </Link>
                                        </ul>
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

export default Service;
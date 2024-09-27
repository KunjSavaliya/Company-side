import React from 'react';
// import { Link } from "react-router-dom";
import Header from '../componets/header';
import Footer from '../componets/footer';
// import Testimonnial from '../componets/testimonnial';


function About() {
    return (
        <>
            <Header />

            {/* About Tabs Section Start  */}
            <section className="about_section  bg-gradient-to-r from-[#0c4393] to-[#2780d4] xsm:py-28 py-10">
                <div className="container mx-auto">
                    <div className="max-w-screen-2xl flex flex-wrap items-center md:justify-start justify-center mx-auto relative z-10">
                        <div class="md:w-1/2 w-full p-3 md:order-1 order-2 md:my-0 my-3">
                            <div class="hero_inner md:text-start text-center relative z-10 w-full md:max-w-[650px]">
                                <h1 class="hero-title font-bold  text-2xl text-white font-Rajdhani mb-6"><span className='text-4xl'>S</span>IPL Software Development </h1>
                                <p class="text-white text-md font-medium">
                                    "SIPL, a global IT powerhouse, is dedicated to crafting innovative products and delivering top-notch services. Our exceptional team of software engineers, usability experts, and business analysts is driven by curiosity and unwavering passion. Together, we create cutting-edge solutions that resonate with people, making software that leaves a lasting impact. Join us as we embark on an exciting journey of technological excellence and a commitment to building software that users truly adore."
                                </p>
                            </div>
                        </div>
                        <div class="md:w-1/2 w-full p-3 flex md:justify-end justify-center md:order-2 order-1 md:my-0 my-3">
                            <img src={require('../asstes/image/about/about-img.png')} className="relative max-w-[600px]  w-full h-full rounded-md"></img>
                        </div>
                    </div>
                </div>
            </section>
            {/* About Infotech Section Start  */}
            <section className="about_infotech pt-20">
                <div className="container mx-auto relative z-10 py-10">
                    <h3 className="text-dark font-normal text-5xl pb-1 mb-5 text-center">
                        About SIPL <span className='text-[#2780d4]'>Infotech</span>
                    </h3>
                    <span className="title-effect">SIPL</span>
                    <p className="text-lg text-center w-full max-w-[1100px] mx-auto color_grey font-normal">SIPL is a worldwide product development and services company with a curious and passionate team of software engineers, usability experts, and business analysts. We are a fun, talented team who loves working together, and we have a passion for building remarkable software that people love.</p>
                    <div className="max-w-screen-xl flex flex-wrap mx-auto h-full mt-10">
                        <div className="sm:w-1/2 lg:w-1/3 w-full p-2 mb-5 h-[100]">
                            <div className="card bg-white h-full rounded-2xl p-5 w-full shadow-md shadow-[#0f89929c] mx-auto">
                                <div className="flex flex-wrap lg:flex-nowrap test_media w-full h-full items-center justify-start">
                                    <div className="test_media_img mb-2 h-full w-full flex max-w-[80px] max-h-[80px] items-center justify-center rounded-full ">
                                        <img src={require('../asstes/image/about/Group-36.png')} className="relative w-full h-full rounded-md"></img>
                                    </div>
                                    <div className="test_media_content lg:ms-5 lg:mt-0 mt-3">
                                        <h4 className="text-xl font-bold mb-2 text-[#2780d4]">PEOPLE</h4>
                                        <p className="text-base xsm:text-left text-justify color_grey font-medium">We maintain a fun, positive, energetic work environment that fosters professional growth and strengthens working relationships.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="sm:w-1/2 lg:w-1/3 w-full p-2 mb-5 h-[100]">
                            <div className="card bg-white h-full rounded-2xl p-5 w-full shadow-md shadow-[#0f89929c] mx-auto">
                                <div className="flex flex-wrap lg:flex-nowrap test_media w-full h-full items-center justify-start">
                                    <div className="test_media_img mb-2 h-full w-full flex max-w-[80px] max-h-[80px] items-center justify-center rounded-full ">
                                        <img src={require('../asstes/image/about/Group-37.png')} className="relative w-full h-full rounded-md"></img>
                                    </div>
                                    <div className="test_media_content lg:ms-5 lg:mt-0 mt-3">
                                        <h4 className="text-xl font-bold mb-2 text-[#2780d4]">INTEGRITY</h4>
                                        <p className="text-base xsm:text-left text-justify color_grey font-medium">We respect and value individuals by embracing diverse cultures, backgrounds, experiences, lifestyles, and ideas.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="sm:w-1/2 lg:w-1/3 w-full p-2 mb-5 h-[100]">
                            <div className="card bg-white h-full rounded-2xl p-5 w-full shadow-md shadow-[#0f89929c] mx-auto">
                                <div className="flex flex-wrap lg:flex-nowrap test_media w-full h-full items-center justify-start">
                                    <div className="test_media_img mb-2 h-full w-full flex max-w-[80px] max-h-[80px] items-center justify-center rounded-full ">
                                        <img src={require('../asstes/image/about/Group-38.png')} className="relative w-full h-full rounded-md"></img>
                                    </div>
                                    <div className="test_media_content lg:ms-5 lg:mt-0 mt-3">
                                        <h4 className="text-xl font-bold mb-2 text-[#2780d4]">SUCCESS</h4>
                                        <p className="text-base xsm:text-left text-justify color_grey font-medium">We deliver positive results for our clients by learning from the past and collaborating on change for the future.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* About Choose Section Start  */}
            <section className="about_choose pt-10">
                <div className="container mx-auto relative z-10 py-10">
                    <h3 className="text-dark font-normal text-4xl pb-1 mb-5 text-center">
                        Why should you choose  <span className='text-[#2780d4]'>SIPL Infotech?</span>
                    </h3>
                    <span className="title-effect">SIPL Choose</span>
                    <p className="text-lg text-center w-full max-w-[1100px] mx-auto color_grey font-normal">
                        With more than a decade of experience, Appgenix Infotech has the capabilities and skilled resources to offer competitive and performance-driven mobile and web development services.
                    </p>
                    <div className="max-w-screen-xl flex flex-wrap mx-auto h-full mt-10">
                        <div className="sm:w-1/2 lg:w-1/2 w-full p-2 mb-5 h-[100]">
                            <div className="card  h-full rounded-2xl p-5 w-full shadow hover:shadow-lg mx-auto">
                                <div className="flex flex-wrap lg:flex-nowrap test_media w-full h-full items-center justify-start">
                                    <div className="test_media_img mb-2 h-full w-full flex max-w-[80px] max-h-[80px] items-center justify-center bg-[#fc9290] rounded-md">
                                        <img src={require('../asstes/image/about/Group-39.png')} className="relative w-full h-full rounded-md"></img>
                                    </div>
                                    <div className="test_media_content lg:ms-5 lg:mt-0 mt-3">
                                        <h4 className="text-xl font-bold mb-2">Expertise in multiple domains</h4>
                                        <p className="text-base xsm:text-left text-justify color_grey font-medium">
                                            We are a proven domain expertise powerhouse with a skilled and collaborative workforce with years of experience successfully delivering customized software development projects across industries.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="sm:w-1/2 lg:w-1/2 w-full p-2 mb-5 h-[100]">
                            <div className="card  h-full rounded-2xl p-5 w-full shadow hover:shadow-lg mx-auto">
                                <div className="flex flex-wrap lg:flex-nowrap test_media w-full h-full items-center justify-start">
                                    <div className="test_media_img mb-2 h-full w-full flex max-w-[80px] max-h-[80px] items-center justify-center bg-[#ffb379] rounded-md">
                                        <img src={require('../asstes/image/about/Group-40.png')} className="relative w-full h-full rounded-md"></img>
                                    </div>
                                    <div className="test_media_content lg:ms-5 lg:mt-0 mt-3">
                                        <h4 className="text-xl font-bold mb-2">Intellectual Property Rights Protection</h4>
                                        <p className="text-base xsm:text-left text-justify color_grey font-medium">
                                            At Appgenix Infotech, we strongly respect intellectual property rights, thereby taking all the steps to obliterate various IP protection methods.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="sm:w-1/2 lg:w-1/2 w-full p-2 mb-5 h-[100]">
                            <div className="card  h-full rounded-2xl p-5 w-full shadow hover:shadow-lg mx-auto">
                                <div className="flex flex-wrap lg:flex-nowrap test_media w-full h-full items-center justify-start">
                                    <div className="test_media_img mb-2 h-full w-full flex max-w-[80px] max-h-[80px] items-center justify-center bg-[#5fdbba] rounded-md">
                                        <img src={require('../asstes/image/about/Group-41.png')} className="relative w-full h-full rounded-md"></img>
                                    </div>
                                    <div className="test_media_content lg:ms-5 lg:mt-0 mt-3">
                                        <h4 className="text-xl font-bold mb-2">Highly Experienced and Productive Professionals</h4>
                                        <p className="text-base xsm:text-left text-justify color_grey font-medium">
                                            Our employees are experienced in the IT industry and have hands-on experience in various languages. In addition, we have professional and dedicated resources to provide competitive solutions.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="sm:w-1/2 lg:w-1/2 w-full p-2 mb-5 h-[100]">
                            <div className="card  h-full rounded-2xl p-5 w-full shadow hover:shadow-lg mx-auto">
                                <div className="flex flex-wrap lg:flex-nowrap test_media w-full h-full items-center justify-start">
                                    <div className="test_media_img mb-2 h-full w-full flex max-w-[80px] max-h-[80px] items-center justify-center bg-[#b2e388] rounded-md">
                                        <img src={require('../asstes/image/about/Group-42.png')} className="relative w-full h-full rounded-md"></img>
                                    </div>
                                    <div className="test_media_content lg:ms-5 lg:mt-0 mt-3">
                                        <h4 className="text-xl font-bold mb-2">Reporting Structure</h4>
                                        <p className="text-base xsm:text-left text-justify color_grey font-medium">
                                            We use various project management tools to choose the right kind of approach to plan, manage, execute, and deploy the project. One of the main goals of using these tools is to provide daily or weekly reports based on the client’s requirements.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="sm:w-1/2 lg:w-1/2 w-full p-2 mb-5 h-[100]">
                            <div className="card  h-full rounded-2xl p-5 w-full shadow hover:shadow-lg mx-auto">
                                <div className="flex flex-wrap lg:flex-nowrap test_media w-full h-full items-center justify-start">
                                    <div className="test_media_img mb-2 h-full w-full flex max-w-[80px] max-h-[80px] items-center justify-center bg-[#93d6f2] rounded-md">
                                        <img src={require('../asstes/image/about/Group-43.png')} className="relative w-full h-full rounded-md"></img>
                                    </div>
                                    <div className="test_media_content lg:ms-5 lg:mt-0 mt-3">
                                        <h4 className="text-xl font-bold mb-2">The Proper Hierarchy and Escalation Path</h4>
                                        <p className="text-base xsm:text-left text-justify color_grey font-medium">
                                            We have maintained a strict management policy regarding the working environment; therefore, by implementing a proper hierarchy and escalation path, employees receive all the decisions and orders systematically.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="sm:w-1/2 lg:w-1/2 w-full p-2 mb-5 h-[100]">
                            <div className="card  h-full rounded-2xl p-5 w-full shadow hover:shadow-lg mx-auto">
                                <div className="flex flex-wrap lg:flex-nowrap test_media w-full h-full items-center justify-start">
                                    <div className="test_media_img mb-2 h-full w-full flex max-w-[80px] max-h-[80px] items-center justify-center bg-[#c090fc] rounded-md">
                                        <img src={require('../asstes/image/about/Group-44.png')} className="relative w-full h-full rounded-md"></img>
                                    </div>
                                    <div className="test_media_content lg:ms-5 lg:mt-0 mt-3">
                                        <h4 className="text-xl font-bold mb-2">24x7 Support</h4>
                                        <p className="text-base xsm:text-left text-justify color_grey font-medium">
                                            We don’t look at the clock when our clients have any issues. Instead, once you are connected with us, we consider your problems ours, thus providing round-the-clock Support.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* About mission Section Start  */}
            <section className="about_section">

            </section>
            <Footer />

        </>
    );
}

export default About;
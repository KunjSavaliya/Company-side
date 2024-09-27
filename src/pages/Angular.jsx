import React from 'react';
import { Link } from "react-router-dom";
import Header from '../componets/header';
import Footer from '../componets/footer';


function Angular() {
    return (
        <>
            <Header />

            {/* Breadcrumb Section Start */}
            <section className="breadcrumb bg-gradient-to-r from-[#0c4393] to-[#2780d4]  pt-48 pb-16 ">
                <div className="container mx-auto relative ">
                    <div className="max-w-screen-2xl mx-auto">
                        <h2 className="text-white font-semibold text-2xl mb-3">Angular Developer</h2>
                        <ul className='flex flex-wrap mb-3 lg:justify-start justify-center'>
                            <Link to="/" className="text-[#edededcc] text-lg font-normal pe-2" >
                                vacancies: 2
                            </Link>
                            <Link to="" className="text-[#edededcc] text-lg font-medium px-2 border-l-2 border-gray-400" >
                                Full Time
                            </Link>
                            <Link to="" className="text-[#edededcc] text-lg font-medium px-2 border-l-2 border-gray-400" >
                                Exp. 1-2 Year
                            </Link>
                            <Link to="" className="text-[#edededcc] text-lg font-medium px-2 border-l-2 border-gray-400" >
                                Location: Surat
                            </Link>
                        </ul>
                    </div>
                </div>
            </section>
            {/* Business Details Start */}
            <section className='business_details py-20'>
                <div className="container mx-auto relative">
                    <div className="max-w-screen-2xl mx-auto flex">
                        <div className="w-full p-4 mx-auto md:w-3/4">
                            <div className="about_details mb-4">
                                <h2 className='text-dark text-2xl font-semibold pb-3'>About the Role:</h2>
                                <p className='color_grey text-base font-normal pb-2'>SIPL Technologies is seeking a creative Angular Developer Executive in the IT Sector to create and implement
                                    development possibilities in both current and potential new markets. We're looking for individuals with a proven
                                    track record of adding lasting value to organisations. Angular Developer executives are in charge of attracting
                                    and keeping customers, persuading current customers to invest in more items or features, and staying current with
                                    consumer trends.
                                </p>
                                <p className='color_grey text-base font-normal pb-2'>Finally, a top-notch Angular Developer executive will pay close
                                    attention to customer feedback to guarantee that our products and solutions consistently outperform performance
                                    standards.
                                </p>
                            </div>
                            <div className="about_apply mb-4">
                                <h2 className='text-dark text-2xl font-semibold pb-3'>Who can apply?</h2>
                                <ul className='flex flex-wrap mb-3 lg:justify-start justify-center relative'>
                                    <li className='w-full relative before:absolute before:w-2 before:h-2 before:rounded-full before:bg-[#77777782] before:top-2 pb-1'>
                                        <Link to="/" className="color_grey text-base font-normal ml-4" >
                                            Bachelor's degree in Computer Science, Software Engineering, or a related field (or equivalent experience).
                                        </Link>
                                    </li>
                                    <li className='w-full relative before:absolute before:w-2 before:h-2 before:rounded-full before:bg-[#77777782] before:top-2 pb-1'>
                                        <Link to="/" className="color_grey text-base font-normal ml-4" >
                                            Proven experience as an Angular Developer or similar role, with a strong portfolio demonstrating successful project implementation.
                                        </Link>
                                    </li>
                                    <li className='w-full relative before:absolute before:w-2 before:h-2 before:rounded-full before:bg-[#77777782] before:top-2 pb-1'>
                                        <Link to="/" className="color_grey text-base font-normal ml-4" >
                                            Proficient in AngularJS and/or Angular framework, with a deep understanding of component-based architecture, data binding, and dependency injection.
                                        </Link>
                                    </li>
                                    <li className='w-full relative before:absolute before:w-2 before:h-2 before:rounded-full before:bg-[#77777782] before:top-2 pb-1'>
                                        <Link to="/" className="color_grey text-base font-normal ml-4" >
                                            Solid understanding of web markup, including HTML5 and CSS3, and strong knowledge of responsive design principles.
                                        </Link>
                                    </li>
                                    <li className='w-full relative before:absolute before:w-2 before:h-2 before:rounded-full before:bg-[#77777782] before:top-2 pb-1'>
                                        <Link to="/" className="color_grey text-base font-normal ml-4" >
                                            Experience with RESTful APIs and asynchronous request handling.
                                        </Link>
                                    </li>
                                    <li className='w-full relative before:absolute before:w-2 before:h-2 before:rounded-full before:bg-[#77777782] before:top-2 pb-1'>
                                        <Link to="/" className="color_grey text-base font-normal ml-4" >
                                            Familiarity with version control systems such as Git.
                                        </Link>
                                    </li>
                                    <li className='w-full relative before:absolute before:w-2 before:h-2 before:rounded-full before:bg-[#77777782] before:top-2 pb-1'>
                                        <Link to="/" className="color_grey text-base font-normal ml-4" >
                                            Strong problem-solving skills and attention to detail.
                                        </Link>
                                    </li>
                                    <li className='w-full relative before:absolute before:w-2 before:h-2 before:rounded-full before:bg-[#77777782] before:top-2 pb-1'>
                                        <Link to="/" className="color_grey text-base font-normal ml-4" >
                                            Excellent communication and collaboration abilities, with a passion for teamwork.
                                        </Link>
                                    </li>
                                    <li className='w-full relative before:absolute before:w-2 before:h-2 before:rounded-full before:bg-[#77777782] before:top-2 pb-1'>
                                        <Link to="/" className="color_grey text-base font-normal ml-4" >
                                            Ability to adapt to changing priorities and work independently in a fast-paced environment.
                                        </Link>
                                    </li>
                                    <li className='w-full relative before:absolute before:w-2 before:h-2 before:rounded-full before:bg-[#77777782] before:top-2 pb-1'>
                                        <Link to="/" className="color_grey text-base font-normal ml-4" >
                                            Knowledge of backend technologies such as Node.js or .NET (preferred but not required).
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="about_perks mb-4">
                                <h2 className='text-dark text-2xl font-semibold pb-3'>Perks:</h2>
                                <p className='color_grey text-base font-normal pb-2'>At SIPL Technologies, we enjoy what we do. And it should
                                    not be any surprise given that we get to work on innovative, new projects with some of the brightest minds in the
                                    Surat IT sector and that too in a lively environment that is meant to be welcoming and supportive of our
                                    individual and professional growth.
                                </p>
                                <p className='color_grey text-base font-normal pb-2'>Additionally, SIPL technologies goes above and beyond in
                                    order to ensure you feel at home. We provide perks like complimentary snacks. With bean bag chairs, our
                                    workspace is indeed friendly and exciting. As a team, you are free to wear whatever is most comfortable
                                    for you and decide on your schedule. Oh, and we also offer wonderful health insurance plans and other
                                    benefits for your family. In a nutshell, everything you require to succeed at work!
                                </p>
                                <p className='color_grey text-base font-normal pb-2'>Get in touch if you're interested in working on innovative
                                    technologies and solutions that make a real difference in the world.
                                </p>
                            </div>
                            <div className="about_company mb-4">
                                <h2 className='text-dark text-2xl font-semibold pb-3'>About the Company:</h2>
                                <p className='color_grey text-base font-normal pb-2'>We are a business that is expanding quickly and is focused on
                                    supporting respect among all of its employees. SIPL Technologies believes that the diversity of our
                                    workforce and their access to fair employment opportunities are important to the company's success as a large
                                    organisation. We seek for, develop, and retain the best people from a large pool of applicants around the world
                                    in a collaborative work environment. We offer several opportunities for advancement and are one of the
                                    companies in Surat that is growing fast.
                                </p>
                                <p className='color_grey text-base font-normal pb-2'>We don't think that brilliant ideas are only found in boring
                                    boardrooms or with fancy titles. Teams that value innovation and cooperation produce great ideas. We're searching
                                    for passionate, creative thinkers that can help us in driving SIPL’ future.
                                </p>
                            </div>
                        </div>
                        <div className="w-full p-4 mx-auto md:w-1/4">
                            <div className="sticky top-28">
                                <div className="career_detail p-5 bg-[#eef5fb] mb-10">
                                    <div className="custom_btn mx-auto w-full text-center flex items-center h-full justify-center mb-8">
                                        <Link to="/Contact_us" class="w-full text-center py-2 rounded-md bg_brown text-white text-lg font-normal shadow mx-auto">Apply For This Job</Link>
                                    </div>
                                    <div className='position_details mb-4'>
                                        <p className='text-base pb-2'>
                                            <span className='color_grey'>Position :</span>
                                            <span className='font-semibold textdark'> 3</span>
                                        </p>
                                        <p className='text-base pb-2'>
                                            <span className='color_grey'>Experience:</span>
                                            <span className='font-semibold textdark'> 03 Position (1 to 2 years of experience)</span>
                                        </p>
                                        <p className='text-base pb-2'>
                                            <span className='color_grey'>Location: Surat</span>
                                        </p>
                                    </div>
                                    <p className='text-lg font-semibold pb-3'>share with someone awesome</p>
                                    <ul className='flex flex-wrap mb-3 lg:justify-start justify-center'>
                                        <Link to="/" className="text-2xl text-[#0c4393] font-normal pe-3" >
                                            <i class="fa-brands fa-facebook"></i>
                                        </Link>
                                        <Link to="/" className="text-2xl text-[#0c4393] font-normal pe-3" >
                                            <i class="fa-brands fa-twitter"></i>
                                        </Link>
                                        <Link to="/" className="text-2xl text-[#0c4393] font-normal pe-3" >
                                            <i class="fa-brands fa-linkedin"></i>
                                        </Link>
                                    </ul>
                                </div>
                                <div className="career_detail p-5 bg-[#eef5fb]">
                                    <h2 class="text-black font-semibold text-lg mb-3">Other Openings</h2>
                                    <div className='mb-3'>
                                        <p className='text-lg font-medium'>Web Designer</p>
                                        <ul className='flex flex-wrap mb-3 lg:justify-start justify-center'>
                                            <Link to="/" className="text-sm color_grey font-normal pe-2" >
                                                Exp. 0-2 Year | Surat
                                            </Link>
                                        </ul>
                                    </div>
                                    <div className='mb-3'>
                                        <p className='text-lg font-medium'>ReactJs Developer</p>
                                        <ul className='flex flex-wrap mb-3 lg:justify-start justify-center'>
                                            <Link to="/" className="text-sm color_grey font-normal pe-2" >
                                                Exp. 0-2 Year | Surat
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

export default Angular;
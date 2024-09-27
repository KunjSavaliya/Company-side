import React from 'react';
import { Link } from "react-router-dom";
import Header from '../componets/header';
import Footer from '../componets/footer';


function IOS() {
    return (
        <>
            <Header />

            {/* Breadcrumb Section Start */}
            <section className="breadcrumb bg-gradient-to-r from-[#0c4393] to-[#2780d4]  pt-48 pb-16 ">
                <div className="container mx-auto relative ">
                    <div className="max-w-screen-2xl mx-auto">
                        <h2 className="text-white font-semibold text-2xl mb-3"> IOS Developer</h2>
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
                                <p className='color_grey text-base font-normal pb-2'>SIPL Technologies is seeking a creative IOS Developer Executive in the IT Sector to create and implement
                                    development possibilities in both current and potential new markets. We're looking for individuals with a proven
                                    track record of adding lasting value to organisations. IOS Developer executives are in charge of attracting
                                    and keeping customers, persuading current customers to invest in more items or features, and staying current with
                                    consumer trends.
                                </p>
                                <p className='color_grey text-base font-normal pb-2'>Finally, a top-notch IOS Developer executive will pay close
                                    attention to customer feedback to guarantee that our products and solutions consistently outperform performance
                                    standards.
                                </p>
                            </div>
                            <div className="about_apply mb-4">
                                <h2 className='text-dark text-2xl font-semibold pb-3'>Who can apply?</h2>
                                <ul className='flex flex-wrap mb-3 lg:justify-start justify-center relative'>
                                    <li className='w-full relative before:absolute before:w-2 before:h-2 before:rounded-full before:bg-[#777] before:top-2 pb-2'>
                                        <Link to="/" className="color_grey text-base font-normal ml-4">
                                        App Development: Design, build, and maintain efficient, reliable, and robust iOS applications using programming languages such as Swift or Objective-C. The iOS developer should have a deep understanding of the iOS platform and be able to implement various features and functionalities.
                                        </Link>
                                    </li>
                                    <li className='w-full relative before:absolute before:w-2 before:h-2 before:rounded-full before:bg-[#777] before:top-2 pb-2'>
                                        <Link to="/" className="color_grey text-base font-normal ml-4">
                                        Collaborate with Cross-functional Teams: Work closely with UI/UX designers, product managers, and backend developers to ensure smooth integration and seamless user experience. Effective communication and collaboration with different teams are essential for successful app development.
                                        </Link>
                                    </li>
                                    <li className='w-full relative before:absolute before:w-2 before:h-2 before:rounded-full before:bg-[#777] before:top-2 pb-2'>
                                        <Link to="/" className="color_grey text-base font-normal ml-4">
                                        Code Optimization: Optimize the performance of iOS applications to ensure smooth operation, quick response times, and minimal battery consumption. The iOS developer should be proficient in identifying and resolving bottlenecks and improving overall app efficiency.
                                        </Link>
                                    </li>
                                    <li className='w-full relative before:absolute before:w-2 before:h-2 before:rounded-full before:bg-[#777] before:top-2 pb-2'>
                                        <Link to="/" className="color_grey text-base font-normal ml-4">
                                        Bug Fixing and Troubleshooting: Identify and fix software defects, bugs, and performance issues promptly. Conduct rigorous testing to ensure the application's stability, reliability, and compatibility across different iOS devices and OS versions.
                                        </Link>
                                    </li>
                                    <li className='w-full relative before:absolute before:w-2 before:h-2 before:rounded-full before:bg-[#777] before:top-2 pb-2'>
                                        <Link to="/" className="color_grey text-base font-normal ml-4">
                                        Continuous Learning: Stay up-to-date with the latest iOS development trends, tools, and best practices. The iOS developer should be proactive in learning new technologies and techniques to enhance the quality of app development.
                                        </Link>
                                    </li>
                                    <li className='w-full relative before:absolute before:w-2 before:h-2 before:rounded-full before:bg-[#777] before:top-2 pb-2'>
                                        <Link to="/" className="color_grey text-base font-normal ml-4">
                                        App Store Compliance: Familiarity with Apple's App Store guidelines and submission process is necessary to ensure that the developed applications meet the required standards and are approved for distribution.
                                        </Link>
                                    </li>
                                    <li className='w-full relative before:absolute before:w-2 before:h-2 before:rounded-full before:bg-[#777] before:top-2 pb-2'>
                                        <Link to="/" className="color_grey text-base font-normal ml-4">
                                        Security and Privacy: Pay attention to app security and user privacy, implementing encryption, secure data storage, and other security measures to protect sensitive information.
                                        </Link>
                                    </li>
                                    <li className='w-full relative before:absolute before:w-2 before:h-2 before:rounded-full before:bg-[#777] before:top-2 pb-2'>
                                        <Link to="/" className="color_grey text-base font-normal ml-4">
                                        Performance Monitoring: Monitor and analyze app performance using various analytical tools to identify areas for improvement and optimize user engagement.
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="about_requirement mb-4">
                                <h2 className='text-dark text-2xl font-semibold pb-3'>Requirements:</h2>
                                <ul className='flex flex-wrap mb-3 lg:justify-start justify-center relative'>
                                    <li className='w-full relative before:absolute before:w-2 before:h-2 before:rounded-full before:bg-[#777] before:top-2 pb-2'>
                                        <Link to="/" className="color_grey text-base font-normal ml-4">
                                        Proficiency in iOS app development using Swift and/or Objective-C.
                                        </Link>
                                    </li>
                                    <li className='w-full relative before:absolute before:w-2 before:h-2 before:rounded-full before:bg-[#777] before:top-2 pb-2'>
                                        <Link to="/" className="color_grey text-base font-normal ml-4">
                                        Strong understanding of the iOS ecosystem, including design principles, human-interface guidelines, and Apple's development frameworks.
                                        </Link>
                                    </li>
                                    <li className='w-full relative before:absolute before:w-2 before:h-2 before:rounded-full before:bg-[#777] before:top-2 pb-2'>
                                        <Link to="/" className="color_grey text-base font-normal ml-4">
                                        Knowledge of version control systems, such as Git, to manage code repositories.
                                        </Link>
                                    </li>
                                    <li className='w-full relative before:absolute before:w-2 before:h-2 before:rounded-full before:bg-[#777] before:top-2 pb-2'>
                                        <Link to="/" className="color_grey text-base font-normal ml-4">
                                        Familiarity with RESTful APIs and networking protocols for app-server communication.
                                        </Link>
                                    </li>
                                    <li className='w-full relative before:absolute before:w-2 before:h-2 before:rounded-full before:bg-[#777] before:top-2 pb-2'>
                                        <Link to="/" className="color_grey text-base font-normal ml-4">
                                        Experience with debugging tools and performance optimization techniques.
                                        </Link>
                                    </li>
                                    <li className='w-full relative before:absolute before:w-2 before:h-2 before:rounded-full before:bg-[#777] before:top-2 pb-2'>
                                        <Link to="/" className="color_grey text-base font-normal ml-4">
                                        Solid problem-solving skills and the ability to troubleshoot issues efficiently.
                                        </Link>
                                    </li>
                                    <li className='w-full relative before:absolute before:w-2 before:h-2 before:rounded-full before:bg-[#777] before:top-2 pb-2'>
                                        <Link to="/" className="color_grey text-base font-normal ml-4">
                                        Creativity and innovation in designing user interfaces and interactions.
                                        </Link>
                                    </li>
                                    <li className='w-full relative before:absolute before:w-2 before:h-2 before:rounded-full before:bg-[#777] before:top-2 pb-2'>
                                        <Link to="/" className="color_grey text-base font-normal ml-4">
                                        Strong communication and teamwork skills to collaborate effectively with other team members.
                                        Bachelor's degree in Computer Science, Software Engineering, or a related field (preferred but not always mandatory).
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
                                            <span className='font-semibold textdark'>2</span>
                                        </p>
                                        <p className='text-base pb-2'>
                                            <span className='color_grey'>Experience:</span>
                                            <span className='font-semibold textdark'> 02 Position (1 to 2 years of experience)</span>
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
                                        <p className='text-lg font-medium'>BDE-Online Bidder</p>
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

export default IOS;
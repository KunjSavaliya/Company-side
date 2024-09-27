import React from 'react';
import { Link } from "react-router-dom";
import Header from '../componets/header';
import Footer from '../componets/footer';


function ReactNetive() {
    return (
        <>
            <Header />

            {/* Breadcrumb Section Start */}
            <section className="breadcrumb bg-gradient-to-r from-[#0c4393] to-[#2780d4]  pt-48 pb-16 ">
                <div className="container mx-auto relative ">
                    <div className="max-w-screen-2xl mx-auto">
                        <h2 className="text-white font-semibold text-2xl mb-3"> React Netive Developer</h2>
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
                                <p className='color_grey text-base font-normal pb-2'>SIPL Technologies is seeking a creative React Netive Developer Executive in the IT Sector to create and implement
                                    development possibilities in both current and potential new markets. We're looking for individuals with a proven
                                    track record of adding lasting value to organisations. React Netive Developer executives are in charge of attracting
                                    and keeping customers, persuading current customers to invest in more items or features, and staying current with
                                    consumer trends.
                                </p>
                                <p className='color_grey text-base font-normal pb-2'>Finally, a top-notch React Netive Developer executive will pay close
                                    attention to customer feedback to guarantee that our products and solutions consistently outperform performance
                                    standards.
                                </p>
                            </div>
                            <div className="about_apply mb-4">
                                <h2 className='text-dark text-2xl font-semibold pb-3'>Who can apply?</h2>
                                <ul className='flex flex-wrap mb-3 lg:justify-start justify-center relative'>
                                    <li className='w-full relative before:absolute before:w-2 before:h-2 before:rounded-full before:bg-[#777] before:top-2 pb-2'>
                                        <Link to="/" className="color_grey text-base font-normal ml-4" >
                                            Mobile App Development: Design and implement mobile applications using React Native, ensuring seamless performance, responsiveness, and user experience across multiple platforms.
                                        </Link>
                                    </li>
                                    <li className='w-full relative before:absolute before:w-2 before:h-2 before:rounded-full before:bg-[#777] before:top-2 pb-2'>
                                        <Link to="/" className="color_grey text-base font-normal ml-4" >
                                            Code Development: Write clean, modular, and well-documented code adhering to best practices and coding standards. Collaborate with other team members to review code and conduct code optimizations.
                                        </Link>
                                    </li>
                                    <li className='w-full relative before:absolute before:w-2 before:h-2 before:rounded-full before:bg-[#777] before:top-2 pb-2'>
                                        <Link to="/" className="color_grey text-base font-normal ml-4" >
                                            Cross-Platform Compatibility: Ensure that applications are compatible with various devices, screen sizes, and operating system versions.
                                        </Link>
                                    </li>
                                    <li className='w-full relative before:absolute before:w-2 before:h-2 before:rounded-full before:bg-[#777] before:top-2 pb-2'>
                                        <Link to="/" className="color_grey text-base font-normal ml-4" >
                                            UI/UX Implementation: Translate design specifications and wireframes into functional user interfaces, focusing on delivering an intuitive and visually appealing experience.
                                        </Link>
                                    </li>
                                    <li className='w-full relative before:absolute before:w-2 before:h-2 before:rounded-full before:bg-[#777] before:top-2 pb-2'>
                                        <Link to="/" className="color_grey text-base font-normal ml-4" >
                                            Third-Party Libraries and APIs: Integrate third-party libraries and APIs to enhance app functionality and streamline development processes.
                                        </Link>
                                    </li>
                                    <li className='w-full relative before:absolute before:w-2 before:h-2 before:rounded-full before:bg-[#777] before:top-2 pb-2'>
                                        <Link to="/" className="color_grey text-base font-normal ml-4" >
                                            Testing and Debugging: Perform thorough testing and debugging to identify and fix bugs, ensuring the application's stability and reliability.
                                        </Link>
                                    </li>
                                    <li className='w-full relative before:absolute before:w-2 before:h-2 before:rounded-full before:bg-[#777] before:top-2 pb-2'>
                                        <Link to="/" className="color_grey text-base font-normal ml-4" >
                                            Performance Optimization: Optimize app performance by employing various techniques, such as code splitting, lazy loading, and memory management.
                                        </Link>
                                    </li>
                                    <li className='w-full relative before:absolute before:w-2 before:h-2 before:rounded-full before:bg-[#777] before:top-2 pb-2'>
                                        <Link to="/" className="color_grey text-base font-normal ml-4" >
                                            Version Control: Utilize version control systems like Git to manage and track code changes effectively.
                                        </Link>
                                    </li>
                                    <li className='w-full relative before:absolute before:w-2 before:h-2 before:rounded-full before:bg-[#777] before:top-2 pb-2'>
                                        <Link to="/" className="color_grey text-base font-normal ml-4" >
                                            Collaboration: Work closely with backend developers, designers, and product managers to align on project requirements and ensure timely delivery.
                                        </Link>
                                    </li>
                                    <li className='w-full relative before:absolute before:w-2 before:h-2 before:rounded-full before:bg-[#777] before:top-2 pb-2'>
                                        <Link to="/" className="color_grey text-base font-normal ml-4" >
                                            Continuous Learning: Stay up-to-date with the latest industry trends, tools, and technologies related to mobile app development, especially in the React Native ecosystem.
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className='about_requirement mb-4'>
                                <h2 className='text-dark text-2xl font-semibold pb-3'>Requirement</h2>
                                <ul className='flex flex-wrap mb-3 lg:justify-start justify-center relative'>
                                    <li className='w-full relative before:absolute before:w-2 before:h-2 before:rounded-full before:bg-[#777] before:top-2 pb-2'>
                                        <Link to="/" className="color_grey text-base font-normal ml-4" >
                                            Proficient in React Native: Solid experience with React Native framework and its core principles. Strong knowledge of JavaScript, ES6+, and React.js is essential.
                                        </Link>
                                    </li>
                                    <li className='w-full relative before:absolute before:w-2 before:h-2 before:rounded-full before:bg-[#777] before:top-2 pb-2'>
                                        <Link to="/" className="color_grey text-base font-normal ml-4" >
                                            Mobile Development Experience: Previous experience in mobile application development for iOS and Android platforms.
                                        </Link>
                                    </li>
                                    <li className='w-full relative before:absolute before:w-2 before:h-2 before:rounded-full before:bg-[#777] before:top-2 pb-2'>
                                        <Link to="/" className="color_grey text-base font-normal ml-4" >
                                            Cross-Platform Development: Familiarity with cross-platform development techniques, allowing code reuse across different platforms.
                                        </Link>
                                    </li>
                                    <li className='w-full relative before:absolute before:w-2 before:h-2 before:rounded-full before:bg-[#777] before:top-2 pb-2'>
                                        <Link to="/" className="color_grey text-base font-normal ml-4" >
                                            UI/UX Design: Basic understanding of UI/UX principles and the ability to work with designers to implement visually appealing interfaces.
                                        </Link>
                                    </li>
                                    <li className='w-full relative before:absolute before:w-2 before:h-2 before:rounded-full before:bg-[#777] before:top-2 pb-2'>
                                        <Link to="/" className="color_grey text-base font-normal ml-4" >
                                            API Integration: Experience in integrating RESTful APIs and external services into mobile applications.
                                        </Link>
                                    </li>
                                    <li className='w-full relative before:absolute before:w-2 before:h-2 before:rounded-full before:bg-[#777] before:top-2 pb-2'>
                                        <Link to="/" className="color_grey text-base font-normal ml-4" >
                                            Testing and Debugging Skills: Proficiency in using debugging tools and conducting thorough testing to ensure app stability.
                                        </Link>
                                    </li>
                                    <li className='w-full relative before:absolute before:w-2 before:h-2 before:rounded-full before:bg-[#777] before:top-2 pb-2'>
                                        <Link to="/" className="color_grey text-base font-normal ml-4" >
                                            Communication: Excellent communication skills to collaborate effectively with team members and stakeholders.
                                        </Link>
                                    </li>
                                    <li className='w-full relative before:absolute before:w-2 before:h-2 before:rounded-full before:bg-[#777] before:top-2 pb-2'>
                                        <Link to="/" className="color_grey text-base font-normal ml-4" >
                                            Problem-Solving: Strong analytical and problem-solving skills to identify and resolve development challenges.
                                        </Link>
                                    </li>
                                    <li className='w-full relative before:absolute before:w-2 before:h-2 before:rounded-full before:bg-[#777] before:top-2 pb-2'>
                                        <Link to="/" className="color_grey text-base font-normal ml-4" >
                                            Portfolio: A portfolio of previous mobile app projects and code samples showcasing your React Native expertise is a plus.
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

export default ReactNetive;
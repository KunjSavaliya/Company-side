import React from 'react';
import { Link } from "react-router-dom";
import Header from '../componets/header';
import Footer from '../componets/footer';


function Python() {
    return (
        <>
            <Header />

            {/* Breadcrumb Section Start */}
            <section className="breadcrumb bg-gradient-to-r from-[#0c4393] to-[#2780d4]  pt-48 pb-16 ">
                <div className="container mx-auto relative ">
                    <div className="max-w-screen-2xl mx-auto">
                        <h2 className="text-white font-semibold text-2xl mb-3">  Python & Jungo  </h2>
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
                                <p className='color_grey text-base font-normal pb-2'>SIPL Technologies is seeking a creative Python & Jungo  Executive in the IT Sector to create and implement
                                    development possibilities in both current and potential new markets. We're looking for individuals with a proven
                                    track record of adding lasting value to organisations. Python & Jungo  executives are in charge of attracting
                                    and keeping customers, persuading current customers to invest in more items or features, and staying current with
                                    consumer trends.
                                </p>
                                <p className='color_grey text-base font-normal pb-2'>Finally, a top-notch Python & Jungo  executive will pay close
                                    attention to customer feedback to guarantee that our products and solutions consistently outperform performance
                                    standards.
                                </p>
                            </div>
                            <div className="about_apply mb-4">
                                <h2 className='text-dark text-2xl font-semibold pb-3'>Who can apply?</h2>
                                <ul className='flex flex-wrap mb-3 lg:justify-start justify-center relative'>
                                    <li className='w-full relative before:absolute before:w-2 before:h-2 before:rounded-full before:bg-[#777] before:top-2 pb-2'>
                                        <Link to="/" className="color_grey text-base font-normal ml-4" >
                                        Develop and maintain Python-based web applications using the Django framework.
                                        </Link>
                                    </li>
                                    <li className='w-full relative before:absolute before:w-2 before:h-2 before:rounded-full before:bg-[#777] before:top-2 pb-2'>
                                        <Link to="/" className="color_grey text-base font-normal ml-4" >
                                        Design and implement server-side features and functionalities for web applications.
                                        </Link>
                                    </li>
                                    <li className='w-full relative before:absolute before:w-2 before:h-2 before:rounded-full before:bg-[#777] before:top-2 pb-2'>
                                        <Link to="/" className="color_grey text-base font-normal ml-4" >
                                        Collaborate with front-end developers to integrate user interfaces with server-side logic.
                                        </Link>
                                    </li>
                                    <li className='w-full relative before:absolute before:w-2 before:h-2 before:rounded-full before:bg-[#777] before:top-2 pb-2'>
                                        <Link to="/" className="color_grey text-base font-normal ml-4" >
                                        Create and maintain database models and ensure data integrity and performance.
                                        </Link>
                                    </li>
                                    <li className='w-full relative before:absolute before:w-2 before:h-2 before:rounded-full before:bg-[#777] before:top-2 pb-2'>
                                        <Link to="/" className="color_grey text-base font-normal ml-4" >
                                        Implement security and data protection measures in the applications.
                                        </Link>
                                    </li>
                                    <li className='w-full relative before:absolute before:w-2 before:h-2 before:rounded-full before:bg-[#777] before:top-2 pb-2'>
                                        <Link to="/" className="color_grey text-base font-normal ml-4" >
                                        Optimize applications for maximum speed and scalability.
                                        </Link>
                                    </li>
                                    <li className='w-full relative before:absolute before:w-2 before:h-2 before:rounded-full before:bg-[#777] before:top-2 pb-2'>
                                        <Link to="/" className="color_grey text-base font-normal ml-4" >
                                        Perform unit and integration testing to ensure code quality and reliability.
                                        </Link>
                                    </li>
                                    <li className='w-full relative before:absolute before:w-2 before:h-2 before:rounded-full before:bg-[#777] before:top-2 pb-2'>
                                        <Link to="/" className="color_grey text-base font-normal ml-4" >
                                        Troubleshoot and debug application issues and provide timely resolutions.
                                        </Link>
                                    </li>
                                    <li className='w-full relative before:absolute before:w-2 before:h-2 before:rounded-full before:bg-[#777] before:top-2 pb-2'>
                                        <Link to="/" className="color_grey text-base font-normal ml-4" >
                                        Stay up-to-date with industry best practices, technologies, and trends related to Python and Django development.
                                        </Link>
                                    </li>
                                    <li className='w-full relative before:absolute before:w-2 before:h-2 before:rounded-full before:bg-[#777] before:top-2 pb-2'>
                                        <Link to="/" className="color_grey text-base font-normal ml-4" >
                                        Contribute to the continuous improvement of development processes and workflows.
                                        </Link>
                                    </li>
                                    <li className='w-full relative before:absolute before:w-2 before:h-2 before:rounded-full before:bg-[#777] before:top-2 pb-2'>
                                        <Link to="/" className="color_grey text-base font-normal ml-4" >
                                        Participate in code reviews to ensure code quality and adherence to coding standards.
                                        </Link>
                                    </li>
                                    <li className='w-full relative before:absolute before:w-2 before:h-2 before:rounded-full before:bg-[#777] before:top-2 pb-2'>
                                        <Link to="/" className="color_grey text-base font-normal ml-4" >
                                        Contribute to the continuous improvement of development processes and workflows.
                                        </Link>
                                    </li>
                                    <li className='w-full relative before:absolute before:w-2 before:h-2 before:rounded-full before:bg-[#777] before:top-2 pb-2'>
                                        <Link to="/" className="color_grey text-base font-normal ml-4" >
                                        Collaborate with cross-functional teams to understand requirements and deliver solutions.
                                        </Link>
                                    </li>
                                    <li className='w-full relative before:absolute before:w-2 before:h-2 before:rounded-full before:bg-[#777] before:top-2 pb-2'>
                                        <Link to="/" className="color_grey text-base font-normal ml-4" >
                                        Proven experience as a Python Django Developer or similar role.
                                        </Link>
                                    </li>
                                    <li className='w-full relative before:absolute before:w-2 before:h-2 before:rounded-full before:bg-[#777] before:top-2 pb-2'>
                                        <Link to="/" className="color_grey text-base font-normal ml-4" >
                                        Strong understanding of Python, Django, and web development concepts.
                                        </Link>
                                    </li>
                                    <li className='w-full relative before:absolute before:w-2 before:h-2 before:rounded-full before:bg-[#777] before:top-2 pb-2'>
                                        <Link to="/" className="color_grey text-base font-normal ml-4" >
                                        Proficiency in front-end technologies such as HTML, CSS, and JavaScript.
                                        </Link>
                                    </li>
                                    <li className='w-full relative before:absolute before:w-2 before:h-2 before:rounded-full before:bg-[#777] before:top-2 pb-2'>
                                        <Link to="/" className="color_grey text-base font-normal ml-4" >
                                        Experience working with relational databases (e.g., PostgreSQL, MySQL) and ORM (Object-Relational Mapping).
                                        </Link>
                                    </li>
                                    <li className='w-full relative before:absolute before:w-2 before:h-2 before:rounded-full before:bg-[#777] before:top-2 pb-2'>
                                        <Link to="/" className="color_grey text-base font-normal ml-4" >
                                        Knowledge of RESTful APIs and web services.
                                        </Link>
                                    </li>
                                    <li className='w-full relative before:absolute before:w-2 before:h-2 before:rounded-full before:bg-[#777] before:top-2 pb-2'>
                                        <Link to="/" className="color_grey text-base font-normal ml-4" >
                                        Familiarity with version control systems (e.g., Git).
                                        </Link>
                                    </li>
                                    <li className='w-full relative before:absolute before:w-2 before:h-2 before:rounded-full before:bg-[#777] before:top-2 pb-2'>
                                        <Link to="/" className="color_grey text-base font-normal ml-4" >
                                        Understanding of software development best practices, including testing and code documentation.
                                        </Link>
                                    </li>
                                    <li className='w-full relative before:absolute before:w-2 before:h-2 before:rounded-full before:bg-[#777] before:top-2 pb-2'>
                                        <Link to="/" className="color_grey text-base font-normal ml-4" >
                                        Strong problem-solving skills and attention to detail.
                                        </Link>
                                    </li>
                                    <li className='w-full relative before:absolute before:w-2 before:h-2 before:rounded-full before:bg-[#777] before:top-2 pb-2'>
                                        <Link to="/" className="color_grey text-base font-normal ml-4" >
                                        Excellent communication and collaboration skills to work effectively in a team environment.
                                        </Link>
                                    </li>
                                    <li className='w-full relative before:absolute before:w-2 before:h-2 before:rounded-full before:bg-[#777] before:top-2 pb-2'>
                                        <Link to="/" className="color_grey text-base font-normal ml-4" >
                                        Bachelor's degree in Computer Science, Software Engineering, or a related field (or equivalent experience).
                                        </Link>
                                    </li>
                                    <li className='w-full relative before:absolute before:w-2 before:h-2 before:rounded-full before:bg-[#777] before:top-2 pb-2'>
                                        <Link to="/" className="color_grey text-base font-normal ml-4" >
                                        Preferred (not mandatory) Skills:
                                        </Link>
                                    </li>
                                    <li className='w-full relative before:absolute before:w-2 before:h-2 before:rounded-full before:bg-[#777] before:top-2 pb-2'>
                                        <Link to="/" className="color_grey text-base font-normal ml-4" >
                                        Experience with front-end frameworks like React, Angular, or Vue.js.
                                        </Link>
                                    </li>
                                    <li className='w-full relative before:absolute before:w-2 before:h-2 before:rounded-full before:bg-[#777] before:top-2 pb-2'>
                                        <Link to="/" className="color_grey text-base font-normal ml-4" >
                                        Knowledge of cloud platforms like AWS, Azure, or Google Cloud Platform.
                                        </Link>
                                    </li>
                                    <li className='w-full relative before:absolute before:w-2 before:h-2 before:rounded-full before:bg-[#777] before:top-2 pb-2'>
                                        <Link to="/" className="color_grey text-base font-normal ml-4" >
                                        Familiarity with containerization and orchestration tools such as Docker and Kubernetes.
                                        </Link>
                                    </li>
                                    <li className='w-full relative before:absolute before:w-2 before:h-2 before:rounded-full before:bg-[#777] before:top-2 pb-2'>
                                        <Link to="/" className="color_grey text-base font-normal ml-4" >
                                        Understanding of Agile/Scrum methodologies.
                                        </Link>
                                    </li>
                                    <li className='w-full relative before:absolute before:w-2 before:h-2 before:rounded-full before:bg-[#777] before:top-2 pb-2'>
                                        <Link to="/" className="color_grey text-base font-normal ml-4" >
                                        Contributions to open-source projects or personal coding projects.
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="about_skill mb-4">
                                <h2 className='text-dark text-2xl font-semibold pb-3'>Preferred Skills:</h2>
                                <ul className='flex flex-wrap mb-3 lg:justify-start justify-center relative'>
                                    <li className='w-full relative before:absolute before:w-2 before:h-2 before:rounded-full before:bg-[#777] before:top-2 pb-2'>
                                        <Link to="/" className="color_grey text-base font-normal ml-4" >
                                        Experience with front-end frameworks like React, Angular, or Vue.js.
                                        </Link>
                                    </li>
                                    <li className='w-full relative before:absolute before:w-2 before:h-2 before:rounded-full before:bg-[#777] before:top-2 pb-2'>
                                        <Link to="/" className="color_grey text-base font-normal ml-4" >
                                        Knowledge of cloud platforms like AWS, Azure, or Google Cloud Platform.
                                        </Link>
                                    </li>
                                    <li className='w-full relative before:absolute before:w-2 before:h-2 before:rounded-full before:bg-[#777] before:top-2 pb-2'>
                                        <Link to="/" className="color_grey text-base font-normal ml-4" >
                                        Familiarity with containerization and orchestration tools such as Docker and Kubernetes.
                                        </Link>
                                    </li>
                                    <li className='w-full relative before:absolute before:w-2 before:h-2 before:rounded-full before:bg-[#777] before:top-2 pb-2'>
                                        <Link to="/" className="color_grey text-base font-normal ml-4" >
                                        Understanding of Agile/Scrum methodologies.
                                        </Link>
                                    </li>
                                    <li className='w-full relative before:absolute before:w-2 before:h-2 before:rounded-full before:bg-[#777] before:top-2 pb-2'>
                                        <Link to="/" className="color_grey text-base font-normal ml-4" >
                                        Contributions to open-source projects or personal coding projects.
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

export default Python;
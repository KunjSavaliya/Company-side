import React from 'react';
import { Link } from "react-router-dom";


function Errorpage() {
    return (
        <>
            {/* Error Page Start  */}
            <section className="404_error h-screen  flex items-center justify-center relative bg-[url('./../../asstes/image/404/404_error-img.png')] hover:transition-transform hover:translate-x-30 bg-cover bg-no-repeat bg-center before:absolute before:bg-black before:opacity-50  before:h-full before:w-full  before:top-0 before:left-0 before:right-0 before:bottom-0">
                <div className="container mx-auto max-w-screen-xl">
                    <div className="404_error_content relative z-10 flex h-screen items-center justify-center">
                        <div className="coming_detail content text-center w-full max-w-[800px] mx-auto">
                            <div className="mb-4">
                                <img src={require('../asstes/image/404/404error.png')} className="w-full h-full mx-auto"></img>
                                {/* <img src="asstes/Image/404/404error.png" alt=""> */}
                            </div>
                            <h1 className="font-bold text-4xl xsm:text-5xl pb-5 text-center text-white">This Page Not Found!</h1>
                            <p className="font-medium text-xl text-white">
                                Sorry, The Page You're Looking For Dose Not Exit. If You Think Something Is Broken, Report A Problem. Go Back To The Homepage.
                            </p>
                            <div className='custom_btn w-60 mx-auto mt-10'>
                                <Link to="/" className=" py-3 w-full px-4 mt-5 rounded-full bg_brown text-white text-lg font-semibold">
                                    <i className="fa-solid fa-house text-lg me-3"></i>
                                    Go Back Home
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Errorpage;
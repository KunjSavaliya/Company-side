import React from 'react';
import { Link } from "react-router-dom";
import Header from '../componets/header';
import Footer from '../componets/footer';
// import { Tab } from '@material-tailwind/react';
import Tabs from '../componets/tabs';
import Counter from '../componets/Counter';


function Portfolio() {
    return (
        <>
            <Header />

            {/* Breadcrumb Section Start */}
            <section className="breadcrumb bg-gradient-to-r from-[#0c4393] to-[#2780d4] xsm:py-40 py-20">
                <div className="container mx-auto relative ">
                    <div className="max-w-screen-xl mx-auto">
                        <h1 className="text-white font-bold xsm:text-5xl text-4xl text-center">Portfolio</h1>
                        <ul className="flex text-white font-semibold text-xl items-center justify-center xsm:my-5 my-2 mx-auto">
                            <li><Link href="/">Home<i className="fa fa-angle-right text-lg mx-2"></i></Link></li>
                            <li><Link href="/Portfolio">Portfolio</Link></li>
                        </ul>
                    </div>
                </div>
            </section>
            {/* contact detail page start */}
            <section className="contact-top-details -mt-20">
                <Counter />
            </section>
            {/* Contact Section Start */}
            <section className="contact py-10 relative">
                <div className="container mx-auto relative p-10 w-full">
                    <Tabs />
                </div>
            </section>

            <Footer />

        </>
    );
}

export default Portfolio;
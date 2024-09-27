import React from 'react';
import Slider from "react-slick";
function Testimonnial() {


    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },

            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <>
            <div>
                <Slider {...settings}>
                    <div>
                        <div className="card_content relative px-6 py-8 bg-white shadow-md hover:shadow-lg rounded-xl m-3">
                            <div className="test_media flex items-center mb-6">
                                <div className="test_media_img max-w-[60px] max-h-[60px] w-full">
                                    <img src={require('../asstes/image/home/avtar_img1.png')} className="max-w-[60px] max-h-[60px] rounded-full w-full h-full"></img>
                                </div>
                                <div className="test_media_content ms-7">
                                    <h4 className="text-black text-lg font-bold leading-5">Alena Jopsep</h4>
                                    <h6 className="text-lg color_grey font-medium">Web Developer</h6>
                                </div>
                            </div>
                            <p className="text-lg color_grey font-medium mb-5">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. aliquet nibh nec urna. In nisi
                                neque, aliquet vel, dapibus id, mattis.
                            </p>
                            <div className='flex justify-between'>
                                <div className="flex items-center">
                                    <i className="fa-solid fa-star text-xl text-yellow-300"></i>
                                    <i className="fa-solid fa-star text-xl text-yellow-300"></i>
                                    <i className="fa-solid fa-star text-xl text-yellow-300"></i>
                                    <i className="fa-solid fa-star text-xl text-yellow-300"></i>
                                    <i className="fa-solid fa-star text-xl text-yellow-300"></i>
                                </div>
                                <span>4 Review</span>
                            </div>

                            <div className="testiquote absolute -top-6 right-5">
                                <i className="fa fa-quote-right color_light_brown text-7xl opacity-25"></i>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="card_content relative px-6 py-8 bg-white shadow-md hover:shadow-lg rounded-xl m-3">
                            <div className="test_media flex items-center mb-6">
                                <div className="test_media_img max-w-[60px] max-h-[60px] w-full">
                                    <img src={require('../asstes/image/home/avtar_img2.png')} className="max-w-[60px] max-h-[60px] rounded-full w-full h-full"></img>
                                </div>
                                <div className="test_media_content ms-7">
                                    <h4 className="text-black text-lg font-bold leading-5">Alena Jopsep</h4>
                                    <h6 className="text-lg color_grey font-medium">Web Developer</h6>
                                </div>
                            </div>
                            <p className="text-lg color_grey font-medium mb-5">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. aliquet nibh nec urna. In nisi
                                neque, aliquet vel, dapibus id, mattis.
                            </p>
                            <div className='flex justify-between'>
                                <div className="flex items-center">
                                    <i className="fa-solid fa-star text-xl text-yellow-300"></i>
                                    <i className="fa-solid fa-star text-xl text-yellow-300"></i>
                                    <i className="fa-solid fa-star text-xl text-yellow-300"></i>
                                    <i className="fa-solid fa-star text-xl text-yellow-300"></i>
                                    <i className="fa-solid fa-star text-xl text-yellow-300"></i>
                                </div>
                                <span>4 Review</span>
                            </div>
                            <div className="testiquote absolute -top-6 right-5">
                                <i className="fa fa-quote-right color_light_brown text-7xl opacity-25"></i>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="card_content relative px-6 py-8 bg-white shadow-md hover:shadow-lg rounded-xl m-3">
                            <div className="test_media flex items-center mb-6">
                                <div className="test_media_img max-w-[60px] max-h-[60px] w-full">
                                    <img src={require('../asstes/image/home/avtar_img3.png')} className="max-w-[60px] max-h-[60px] rounded-full w-full h-full"></img>
                                </div>
                                <div className="test_media_content ms-7">
                                    <h4 className="text-black text-lg font-bold leading-5">Alena Jopsep</h4>
                                    <h6 className="text-lg color_grey font-medium">Web Developer</h6>
                                </div>
                            </div>
                            <p className="text-lg color_grey font-medium mb-5">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. aliquet nibh nec urna. In nisi
                                neque, aliquet vel, dapibus id, mattis.
                            </p>
                            <div className='flex justify-between'>
                                <div className="flex items-center">
                                    <i className="fa-solid fa-star text-xl text-yellow-300"></i>
                                    <i className="fa-solid fa-star text-xl text-yellow-300"></i>
                                    <i className="fa-solid fa-star text-xl text-yellow-300"></i>
                                    <i className="fa-solid fa-star text-xl text-yellow-300"></i>
                                    <i className="fa-solid fa-star text-xl text-yellow-300"></i>
                                </div>
                                <span>4 Review</span>
                            </div>
                            <div className="testiquote absolute -top-6 right-5">
                                <i className="fa fa-quote-right color_light_brown text-7xl opacity-25"></i>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="card_content relative px-6 py-8 bg-white shadow-md hover:shadow-lg rounded-xl m-3">
                            <div className="test_media flex items-center mb-6">
                                <div className="test_media_img max-w-[60px] max-h-[60px] w-full">
                                    <img src={require('../asstes/image/home/avtar_img1.png')} className="max-w-[60px] max-h-[60px] rounded-full w-full h-full"></img>
                                </div>
                                <div className="test_media_content ms-7">
                                    <h4 className="text-black text-lg font-bold leading-5">Alena Jopsep</h4>
                                    <h6 className="text-lg color_grey font-medium">Web Developer</h6>
                                </div>
                            </div>
                            <p className="text-lg color_grey font-medium mb-5">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. aliquet nibh nec urna. In nisi
                                neque, aliquet vel, dapibus id, mattis.
                            </p>
                            <div className='flex justify-between'>
                                <div className="flex items-center">
                                    <i className="fa-solid fa-star text-xl text-yellow-300"></i>
                                    <i className="fa-solid fa-star text-xl text-yellow-300"></i>
                                    <i className="fa-solid fa-star text-xl text-yellow-300"></i>
                                    <i className="fa-solid fa-star text-xl text-yellow-300"></i>
                                    <i className="fa-solid fa-star text-xl text-yellow-300"></i>
                                </div>
                                <span>4 Review</span>
                            </div>
                            <div className="testiquote absolute -top-6 right-5">
                                <i className="fa fa-quote-right color_light_brown text-7xl opacity-25"></i>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        </>
    );

}
export default Testimonnial;
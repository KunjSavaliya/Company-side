import React from 'react';
// import { Container, Row, Col } from 'react-bootstrap';
import CountUp from 'react-countup';
// import Counterdata from './json/Counterdata.json'

function Counter() {

    return (
        <div className="container mx-auto relative">
            <div className="max-w-screen-2xl flex flex-wrap mx-auto ">
                <div className="sm:w-1/2 lg:w-1/4 w-full p-3 mx-auto hover:transition hover:duration-700 hover:ease-in hover:scale-105">
                    <div className="bg-white rounded-2xl w-full h-[100%] shadow-md hover:shadow-xl transition duration-700 ease-in mx-auto">
                        <div className="counter_content_detai px-6 py-8 relative">
                            <div class="counter_inner mb-4 flex items-baseline justify-center">
                                <div class="counting color_light_brown text-6xl font-extrabold">
                                    <CountUp className="counter" end="275" />
                                    <span className='color_light_brown text-4xl font-bold'> +</span>
                                </div>
                            </div>
                            <p class="text-lg font-medium text-center color_grey ">HAPPY CLIENTS</p>
                        </div>
                    </div>
                </div>
                <div className="sm:w-1/2 lg:w-1/4 w-full p-3 mx-auto hover:transition hover:duration-700 hover:ease-in hover:scale-105">
                    <div className="bg-white rounded-2xl w-full h-[100%] shadow-md hover:shadow-xl transition duration-700 ease-in mx-auto">
                        <div className="counter_content_detai px-6 py-8 relative">
                            <div class="counter_inner mb-4 flex items-baseline justify-center">
                                <div class="counting color_light_brown text-6xl font-extrabold">
                                    <CountUp className="counter" end="350" />
                                    <span className='color_light_brown text-4xl font-bold'> +</span>
                                </div>
                            </div>
                            <p class="text-lg font-medium text-center color_grey ">PROJECT COMPLETE</p>
                        </div>
                    </div>
                </div>
                <div className="sm:w-1/2 lg:w-1/4 w-full p-3 mx-auto hover:transition hover:duration-700 hover:ease-in hover:scale-105">
                    <div className="bg-white rounded-2xl w-full h-[100%] shadow-md hover:shadow-xl transition duration-700 ease-in mx-auto">
                        <div className="counter_content_detai px-6 py-8 relative">
                            <div class="counter_inner mb-4 flex items-baseline justify-center">
                                <div class="counting color_light_brown text-6xl font-extrabold">
                                    <CountUp className="counter" end="7" />
                                    <span className='color_light_brown text-4xl font-bold'> +</span>
                                </div>
                            </div>
                            <p class="text-lg font-medium text-center color_grey ">YEARS OF EXPERIENCE</p>
                        </div>
                    </div>
                </div>
                <div className="sm:w-1/2 lg:w-1/4 w-full p-3 mx-auto hover:transition hover:duration-700 hover:ease-in hover:scale-105">
                    <div className="bg-white rounded-2xl w-full h-[100%] shadow-md hover:shadow-xl transition duration-700 ease-in mx-auto">
                        <div className="counter_content_detai px-6 py-8 relative">
                            <div class="counter_inner mb-4 flex items-baseline justify-center">
                                <div class="counting color_light_brown text-6xl font-extrabold">
                                    <CountUp className="counter" end="20" />
                                    <span className='color_light_brown text-4xl font-bold'> +</span>
                                </div>
                            </div>
                            <p class="text-lg font-medium text-center color_grey ">DEVELOPERS</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );


}

export default Counter;
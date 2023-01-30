import React from "react";
import Head from 'next/head'
import { Button, Space } from 'antd';

const HomePage = () => {
  return (
<section className="ml-64 pt-24 bg-[#1f1f1f]">
    <div className="px-12 mx-auto max-w-7xl">
        <div className="mx-auto text-center ">
            <h1 className="mb-8 text-4xl font-extrabold leading-none tracking-normal text-[#ededed] md:text-6xl md:tracking-tight">
                <span>Start</span> <span className="block w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 ">building a buzz</span> <span>around your product ?</span>
            </h1>
            <p className="px-0 mb-8 text-lg text-[#ededed] md:text-xl lg:px-24">
                Start gaining the traction you've always wanted with our next-level templates and designs. Crafted to help you tell your story.
            </p>
            <div className="mb-4 space-x-0 md:space-x-2 md:mb-8">
                <a href="#_" className="inline-flex items-center justify-center px-6 py-3 mb-2 text-lg text-white bg-green-400 rounded-2xl sm:w-auto sm:mb-0">
                    Get Started
                    <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </a>
               
            </div> </div>
        <div className="w-full mx-auto mt-20 text-center md:w-10/12">
            <div className="relative z-1 w-full mt-8">
                <div className="relative overflow-hidden shadow-2xl">
                    <div className="flex items-center flex-none px-4 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 rounded-b-none h-11 rounded-xl">
                        <div className="flex space-x-1.5">
                            <div className="w-3 h-3 border-2 border-[#dc2626] bg-[#dc2626] rounded-full"></div>
                            <div className="w-3 h-3 border-2 border-[#eab308] bg-[#eab308] rounded-full"></div>
                            <div className="w-3 h-3 border-2 border-[#22c55e] bg-[#22c55e] rounded-full"></div>
                        </div>
                    </div>
                    <img src="https://cdn.devdojo.com/images/march2021/green-dashboard.jpg"/>
                </div>
            </div>
        </div>
    </div>
</section>
    );
};
export default HomePage;

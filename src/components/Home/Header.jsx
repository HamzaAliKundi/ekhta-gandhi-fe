import React from 'react';

const HomePageHeader = () => {
    return (
        <div className="w-full bg-blue-50 flex justify-center">
            <div className="w-full max-w-[1440px] bg-blue-50 relative overflow-hidden lg:min-h-[600px]">

                {/* Main container */}
                <div className="w-full flex flex-col lg:flex-row items-center justify-center lg:justify-between px-4 sm:px-6 lg:px-8 py-2 sm:py-4 lg:py-8 relative z-10 gap-4 lg:gap-0">
                    
                    {/* Right Section - Image (Mobile First) */}
                    <div className="w-full lg:flex-1 flex justify-center lg:justify-end items-center order-1 lg:order-2 lg:pr-0">
                        <img 
                            src="/Home/header.svg" 
                            alt="Woman working at desk" 
                            className="w-full max-w-[280px] sm:max-w-[350px] md:max-w-[450px] lg:max-w-none lg:w-[750px] lg:h-[550px] h-auto object-contain lg:translate-x-16"
                        />
                    </div>

                    {/* Left Section - Text and Search */}
                    <div className="w-full lg:w-[614px] flex flex-col gap-4 sm:gap-6 lg:gap-8 order-2 lg:order-1">
                        {/* Main Text */}
                        <div className="flex flex-col gap-3 lg:gap-8 text-center lg:text-left px-4 sm:px-0">
                            <h1 className="font-outfit text-h1 lg:text-h1-lg leading-tight text-black tracking-none max-w-full lg:max-w-none">
                                Smart College<span className="hidden lg:inline"><br /></span>
                                Counselling<span className="hidden lg:inline"><br /></span>
                                Powered by Real<span className="hidden lg:inline"><br /></span>
                                Experience
                            </h1>
                        </div>

                        {/* Search Bar */}
                        <div className="flex items-center gap-3 relative mx-auto lg:mx-0 w-full max-w-[350px] lg:w-[350px] h-[48px] rounded-[29px] pl-6 pr-2 py-1 border border-[#5B7C99] bg-white">
                            {/* Left Icon - Menu/Hamburger */}
                            <div className="flex flex-col justify-center gap-1 w-5 h-5">
                                <div className="w-5 h-0.5 bg-[#5B7C99] rounded"></div>
                                <div className="w-4 h-0.5 bg-[#5B7C99] rounded"></div>
                                <div className="w-3 h-0.5 bg-[#5B7C99] rounded"></div>
                            </div>
                            
                            <span className="text-[#5B7C99] font-outfit text-body lg:text-body-lg flex-1">
                                Search
                            </span>
                            
                            {/* Right Search Button */}
                            <div className="flex items-center justify-center w-[72px] h-[40px] rounded-[23px] bg-[#5B7C99] border border-white">
                                <div className="w-4 h-4 flex items-center justify-center">
                                    <img src="/Home/search.svg" alt="search" className="w-full h-full" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePageHeader;
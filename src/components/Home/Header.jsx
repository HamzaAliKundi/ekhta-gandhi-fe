import React from 'react';

const HomePageHeader = () => {
    return (
        // Outer wrapper for the header section (blue background + padding on top)
        <div className="w-full bg-blue-50 flex justify-center pt-20">
            {/* Main container with max width and min height on large screens */}
            <div className="w-full max-w-[1440px] bg-blue-50 relative overflow-hidden lg:min-h-[500px]">

                {/* Main flex container that holds both left (text) and right (image) sections */}
                <div className="w-full flex flex-col lg:flex-row items-center justify-center lg:justify-between px-4 sm:px-6 lg:px-8 py-2 sm:py-4 lg:py-8 relative z-10 gap-4 lg:gap-2">
                    
                    {/* Right Section - Illustration Image */}
                    <div className="w-full lg:flex-1 flex justify-center lg:justify-end items-center order-1 lg:order-2">
                        <img 
                            src="/Home/header.svg" 
                            alt="Woman working at desk" 
                            className="w-full max-w-[287px] sm:max-w-[345px] md:max-w-[402px] lg:max-w-none lg:w-[598px] lg:h-[414px] h-auto object-contain lg:ml-auto"
                        />
                    </div>

                    {/* Left Section - Heading, Subheading, and Search */}
                    <div className="w-full lg:w-[800px] flex flex-col md:pl-20 lg:pl-20 gap-4 sm:gap-6 lg:gap-8 order-2 lg:order-1">

                        {/* Main Text Content */}
                        <div className="flex flex-col gap-3 lg:gap-6 text-center lg:text-left px-4 sm:px-0">
                            {/* Heading with two stacked lines */}
                            <h1 className="text-3xl sm:text-4xl lg:text-[42px] leading-snug text-black tracking-tight w-full">
                                <span className="block">Smart College Counselling</span>
                                <span className="block mt-3">Multiple Voices. Smarter Choices.</span>
                            </h1>

                            {/* Subtext paragraph under heading */}
                            <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-gray-700 text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
                                Access guidance from multiple counselors.
                                <br />
                                Compare perspectives and move forward with confidence.
                            </p>
                        </div>

                        {/* Search Bar */}
                        <div className="flex items-center gap-3 relative mx-auto lg:mx-0 w-full max-w-[350px] lg:w-[350px] h-[48px] rounded-[29px] pl-6 pr-2 py-1 border border-[#5B7C99] bg-white">
                            
                            {/* Left Icon (Hamburger-style menu lines) */}
                            <div className="flex flex-col justify-center gap-1 w-5 h-5">
                                <div className="w-5 h-0.5 bg-[#5B7C99] rounded"></div>
                                <div className="w-4 h-0.5 bg-[#5B7C99] rounded"></div>
                                <div className="w-3 h-0.5 bg-[#5B7C99] rounded"></div>
                            </div>
                            
                            {/* Placeholder text inside search bar */}
                            <span className="text-[#5B7C99] text-body lg:text-body-lg flex-1">
                                Search
                            </span>
                            
                            {/* Right Search Button with magnifying glass icon */}
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

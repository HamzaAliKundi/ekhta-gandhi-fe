import React from 'react';

const HomePageHeader = () => {
    return (
        <div className="w-full bg-blue-50 flex justify-center">
            <div className="w-full max-w-[1440px] bg-blue-50 relative overflow-hidden lg:min-h-[800px]">
                {/* Complete Matrix of Dotted Boxes Background */}
                <div className="absolute inset-0 opacity-15 hidden lg:block">
                    {/* Generate boxes in a complete grid pattern */}
                    {(() => {
                        const boxes = [];
                        for (let row = 0; row < 15; row++) {
                            for (let col = 0; col < 25; col++) {
                                boxes.push(
                                    <div
                                        key={`${row}-${col}`}
                                        className="absolute border-2 border-dashed border-[#5B7C99] rounded-lg"
                                        style={{
                                            width: '80px',
                                            height: '80px',
                                            top: `${row * 88}px`,
                                            left: `${col * 88}px`
                                        }}
                                    ></div>
                                );
                            }
                        }
                        return boxes;   
                    })()}
                </div>

                {/* Mobile simplified background pattern */}
                <div className="absolute inset-0 opacity-10 lg:hidden">
                    {(() => {
                        const boxes = [];
                        for (let row = 0; row < 8; row++) {
                            for (let col = 0; col < 6; col++) {
                                boxes.push(
                                    <div
                                        key={`mobile-${row}-${col}`}
                                        className="absolute border border-dashed border-[#5B7C99] rounded-lg"
                                        style={{
                                            width: '50px',
                                            height: '50px',
                                            top: `${row * 60}px`,
                                            left: `${col * 60}px`
                                        }}
                                    ></div>
                                );
                            }
                        }
                        return boxes;   
                    })()}
                </div>

                {/* Main container */}
                <div className="w-full flex flex-col lg:flex-row items-center justify-center lg:justify-between px-4 sm:px-6 lg:px-8 py-2 sm:py-4 lg:py-8 relative z-10 gap-4 lg:gap-0">
                    
                    {/* Right Section - Image (Mobile First) */}
                    <div className="w-full lg:flex-1 flex justify-center lg:justify-end items-center order-1 lg:order-2">
                        <img 
                            src="/Home/header.svg" 
                            alt="Woman working at desk" 
                            className="w-full max-w-[280px] sm:max-w-[350px] md:max-w-[450px] lg:max-w-none lg:w-[750px] lg:h-[550px] h-auto object-contain"
                        />
                    </div>

                    {/* Left Section - Text and Search */}
                    <div className="w-full lg:w-[614px] flex flex-col gap-4 sm:gap-6 lg:gap-6 order-2 lg:order-1">
                        {/* Main Text */}
                        <div className="flex flex-col gap-2 lg:gap-6 text-center lg:text-left">
                            <h1 className="font-inter-tight font-normal text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[68px] leading-[100%] text-black uppercase tracking-none">
                                Smart College<br />
                                Counselling<br />
                                Powered by Real<br />
                                Experience
                            </h1>
                        </div>

                        {/* Search Bar */}
                        <div className="flex items-center gap-3 relative mx-auto lg:mx-0 w-[285px] h-[48px] rounded-[29px] px-6 py-1 border border-[#5B7C99] bg-white">
                            {/* Left Icon - Menu/Hamburger */}
                            <div className="flex flex-col justify-center gap-1 w-5 h-5">
                                <div className="w-5 h-0.5 bg-[#5B7C99] rounded"></div>
                                <div className="w-4 h-0.5 bg-[#5B7C99] rounded"></div>
                                <div className="w-3 h-0.5 bg-[#5B7C99] rounded"></div>
                            </div>
                            
                            {/* Search Text */}
                            <span className="text-[#5B7C99] font-poppins font-normal text-base flex-1">
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
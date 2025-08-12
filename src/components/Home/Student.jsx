import React from 'react';

const StudentFirstSection = () => {
    const features = [
        {
            title: "Progress on Your Terms",
            description: "Jump between focus areas—essays, interviews, SAT prep—at your pace, in your order. You're not locked into someone else's roadmap."
        },
        {
            title: "Not a Fit ? No Stress",
            description: "If it's not a fit, switch easily. No time lost, no pressure. Keep moving forward with the right support."
        },
        {
            title: "Multiple Voices, Sharper Insight",
            description: "One essay, many angles—get different perspectives before choosing what feels right for you."
        },
        {
            title: "No Packages, Just What You Need",
            description: "No bloated packages. Just smart, session-by-session pricing that respects your time and budget"
        }
    ];

    return (
        <div className="w-full bg-gray-50 flex justify-center">
            <div className="w-full max-w-[1440px] bg-gray-50 relative overflow-hidden">
                
                {/* Complete Matrix of Dotted Boxes Background - Desktop */}
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
                        for (let row = 0; row < 12; row++) {
                            for (let col = 0; col < 8; col++) {
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

                {/* Main Content */}
                <div className="w-full flex flex-col lg:flex-row items-center justify-between px-4 sm:px-6 lg:px-12 py-8 sm:py-12 lg:py-20 relative z-10 gap-6 sm:gap-8 lg:gap-12">
                    
                    {/* Left Section - Image and Title */}
                    <div className="w-full lg:w-1/2 flex flex-col gap-4 sm:gap-6 order-2 lg:order-1">
                        {/* Title */}
                        <h2 className="font-poppins font-medium text-black text-2xl sm:text-3xl md:text-4xl lg:text-[51px] leading-tight lg:leading-[100%] tracking-[0%] text-center lg:text-left">
                            Student first, Always
                        </h2>
                        
                        {/* Image */}
                        <div className="relative flex justify-center lg:justify-start">
                            <img 
                                src="/Home/student.svg" 
                                alt="Student studying with laptop" 
                                className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[577px] h-auto object-contain rounded-2xl shadow-lg"
                            />
                        </div>
                    </div>

                    {/* Right Section - Features List */}
                    <div className="w-full lg:w-1/2 flex flex-col gap-4 sm:gap-6 lg:gap-8 order-1 lg:order-2">
                        {features.map((feature, index) => (
                            <div 
                                key={index}
                                className="bg-white rounded-[20px] p-4 sm:p-6 lg:p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 w-full max-w-[680px] min-h-[120px] sm:min-h-[140px] lg:min-h-[160px] mx-auto lg:mx-0"
                            >
                                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-black mb-2 sm:mb-3 font-poppins">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed font-poppins">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudentFirstSection;
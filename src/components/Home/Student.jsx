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
                {/* Main Content */}
                <div className="w-full flex flex-col lg:flex-row items-center justify-between px-4 sm:px-6 lg:px-12 py-8 sm:py-12 lg:py-20 relative z-10 gap-6 sm:gap-8 lg:gap-12">
                    
                    {/* Left Section - Image and Title */}
                    <div className="w-full lg:w-1/2 flex flex-col gap-4 sm:gap-6 order-2 lg:order-1">
                        {/* Title */}
                        <h2 className="font-merriweather font-medium text-black text-h2 lg:text-h2-lg leading-tight lg:leading-[100%] tracking-[0%] text-center lg:text-left">
                            Student first, Always
                        </h2>
                        
                        {/* Image */}
                        <div className="relative flex justify-center lg:justify-start">
                            <img 
                                src="/Home/header.svg" 
                                alt="Student studying with laptop" 
                                className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[577px] lg:h-[600px] h-auto object-cover rounded-2xl shadow-lg"
                            />
                        </div>
                    </div>

                    {/* Right Section - Features List */}
                    <div className="w-full lg:w-1/2 flex flex-col gap-3 sm:gap-4 lg:gap-6 order-1 lg:order-2 lg:h-[600px] justify-between lg:pt-8">
                        {features.map((feature, index) => (
                            <div 
                                key={index}
                                className="bg-white rounded-[20px] p-3 sm:p-4 lg:p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 w-full max-w-[680px] flex-1 mx-auto lg:mx-0"
                            >
                                <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-black mb-2 font-merriweather">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-700 text-xs sm:text-sm lg:text-base leading-relaxed font-source-sans">
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
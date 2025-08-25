import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = ({ id, image, title, readTime, className = "" }) => {
    return (
        <div className={`w-full max-w-[300px] sm:max-w-[432px] mx-auto shadow-lg cursor-pointer ${className}`}>
            {/* Top Image Section - Mobile: 300x240px, Desktop: 432x320px */}
            <div className="relative h-[240px] sm:h-[320px] rounded-t-[16px] sm:rounded-t-[24px] overflow-hidden border border-[#5B7C99]">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover"
                />

                {/* Read Time Badge */}
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
                    <span className="bg-white text-gray-800 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-small lg:text-small-lg font-medium shadow-sm">
                        {readTime}
                    </span>
                </div>
            </div>

            {/* Bottom Text Section - Mobile: 300x120px, Desktop: 432x160px */}
            <div
                className="h-[120px] sm:h-[160px] rounded-b-[16px] sm:rounded-b-[24px] pt-3 sm:pt-5 pr-2 sm:pr-3 pb-3 sm:pb-4 pl-2 sm:pl-3 flex flex-col justify-between"
                style={{ backgroundColor: '#5B7C99' }}
            >
                {/* Title */}
                <h3 className="text-white font-medium text-h3 lg:text-h3-lg leading-snug mb-2 sm:mb-4">
                    {title}
                </h3>

                {/* Read More Button */}
                <div className="flex justify-end">
                    <Link 
                        to={`/blog/${id}`}
                        className="flex items-center space-x-1 sm:space-x-2 text-white hover:text-gray-200 transition-colors"
                    >
                        <span className="text-body lg:text-body-lg underline">Read more</span>
                        <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;
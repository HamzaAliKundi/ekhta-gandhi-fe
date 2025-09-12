import React from 'react';
import { Link } from 'react-router-dom';
//made changes
const BlogCard = ({ id, image, title, readTime, className = "" }) => {
    return (
        <div className={`w-full max-w-[260px] sm:max-w-[360px] mx-auto shadow-md cursor-pointer ${className}`}>
            {/* Top Image Section - smaller */}
            <div className="relative h-[180px] sm:h-[220px] rounded-t-[12px] sm:rounded-t-[16px] overflow-hidden border border-[#5B7C99]">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover"
                />

                {/* Read Time Badge (smaller) */}
                {readTime && (
                    <div className="absolute top-2 left-2 sm:top-3 sm:left-3">
                        <span className="bg-white text-gray-800 px-2 py-0.5 sm:px-2.5 sm:py-0.5 rounded-full text-[10px] sm:text-xs shadow-sm">
                            {readTime}
                        </span>
                    </div>
                )}
            </div>

            {/* Bottom Text Section - flexible height */}
            <div
                className="rounded-b-[12px] sm:rounded-b-[16px] pt-2 sm:pt-3 pr-2 sm:pr-3 pb-2 sm:pb-3 pl-2 sm:pl-3 flex flex-col"
                style={{ backgroundColor: '#5B7C99' }}
            >
                {/* Title (smaller font) */}
                <h2 className="text-white text-xs sm:text-sm font-semibold leading-snug mb-2 line-clamp-2">
                    {title}
                </h2>   

                {/* Read More Button (smaller font) */}
                <div className="flex justify-end">
                    <Link 
                        to={`/blog/${id}`}
                        className="flex items-center space-x-1 text-white hover:text-gray-200 transition-colors"
                    >
                        <span className="text-[10px] sm:text-xs underline">Read more</span>
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;
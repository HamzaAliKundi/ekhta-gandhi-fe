import React from 'react';
import BlogCard from './BlogCard';

const Blog = () => {
    // Blog data - using available SVG images
    const blogPosts = [
        {
            id: 1,
            image: '/blog/Home.svg',
            title: 'Top 10 Mistakes Students Make in College Applications (and How to Avoid Them)',
            readTime: '12 min read'
        },
        {
            id: 2,
            image: '/blog/Home2.svg',
            title: 'How do you get Support Through the Process?',
            readTime: '12 min read'
        },
        {
            id: 3,
            image: '/blog/Home3.svg',
            title: 'How do you get Support Through the Process?',
            readTime: '12 min read'
        },
        {
            id: 4,
            image: '/blog/Home.svg',
            title: 'Top 10 Mistakes Students Make in College Applications (and How to Avoid Them)',
            readTime: '12 min read'
        },
        {
            id: 5,
            image: '/blog/Home2.svg',
            title: 'How do you get Support Through the Process?',
            readTime: '12 min read'
        },
        {
            id: 6,
            image: '/blog/Home3.svg',
            title: 'How do you get Support Through the Process?',
            readTime: '12 min read'
        }
    ];

    return (
        <div className="min-h-screen bg-white-50 py-8 px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-7xl mx-auto">

                {/* Header Section */}
                <div className="flex justify-between items-center mb-8 lg:mb-12">
                    <h1 className="text-h1 lg:text-h1-lg text-gray-900 ">
                        Blogs
                    </h1>

                    {/* View More Button */}
                    <button className="px-3 py-1.5 sm:px-4 sm:py-2 text-white rounded-full hover:opacity-90 transition-colors  text-small lg:text-small-lg flex items-center space-x-1.5 sm:space-x-2"
                        style={{ backgroundColor: '#5B7C99' }}>
                        <span>View more</span>
                        <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white rounded-full flex items-center justify-center">
                            <svg className="w-3 h-3 sm:w-4 sm:h-4 text-[#5B7C99]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 17L17 7M17 7H7M17 7V17" />
                            </svg>
                        </div>
                    </button>
                </div>

                {/* Blog Grid - Full Width */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
                    {blogPosts.map((post) => (
                        <BlogCard
                            key={post.id}
                            id={post.id}
                            image={post.image}
                            title={post.title}
                            readTime={post.readTime}
                        />
                    ))}
                </div>

            </div>
        </div>
    );
};

export default Blog;

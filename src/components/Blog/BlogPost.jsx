import React from 'react';
import { useParams, Link } from 'react-router-dom';
import BlogCard from './BlogCard';

const BlogPost = () => {
    const { id } = useParams();

    const blogPosts = {
        1: {
            id: 1,
            image: '/blog/Home.svg',
            title: 'When Should You Start Preparing?',
            readTime: '12 min read',
        },
        2: {
            id: 2,
            image: '/blog/Home2.svg',
            title: 'How do you get Support Through the Process?',
            readTime: '12 min read',
        }
    };

    const relatedPosts = Object.values(blogPosts)
        .filter(post => post.id !== parseInt(id))
        .slice(0, 3);

    return (
        <div className="min-h-screen bg-white">
            {/* Content Section */}
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
                {/* Title */}
                <h1 className="font-bold text-black mb-4 sm:mb-6 leading-tight">
                    When Should You Start Preparing?
                </h1>

                {/* Intro Paragraph */}
                <p className="text-black mb-4 sm:mb-6 leading-relaxed">
                    Applying to college is one of the most important — and stressful — parts of high school, but applying too late doesn't have to be. Here's what to know about timing your college applications and when to start preparing for the college application process.
                </p>

                {/* Sub-heading */}
                <h2 className="font-bold text-black mb-6 sm:mb-8">
                    Here are the top 10 college application mistakes — and how you can avoid them.
                </h2>

                {/* Multi-Image Section */}
                <div className="mb-12">
                    <div className="grid grid-cols-4 gap-3 h-[300px] sm:h-[400px]">
                        <div className="col-span-2 relative rounded-lg overflow-hidden shadow-md">
                            <img src="/blog/Home.svg" alt="College preparation" className="w-full h-full object-cover" />
                        </div>

                        <div className="grid grid-rows-2 gap-3">
                            <div className="relative rounded-lg overflow-hidden shadow-md">
                                <img src="/blog/Home2.svg" alt="Student working" className="w-full h-full object-cover" />
                            </div>
                            <div className="relative rounded-lg overflow-hidden shadow-md">
                                <img src="/blog/Home3.svg" alt="College application" className="w-full h-full object-cover" />
                            </div>
                        </div>

                        <div className="relative rounded-lg overflow-hidden shadow-md">
                            <img src="/blog/Home.svg" alt="College preparation" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>

                {/* Numbered List Content */}
                <div className="space-y-8">
                    {/* Point 1 */}
                    <div>
                        <h3 className="font-bold text-black mb-2 sm:mb-3">1. Starting Too Late</h3>
                        <p className="text-black mb-2"><strong>Mistake:</strong> Many students underestimate how long college applications take.</p>
                        <p className="text-black"><strong>Fix:</strong> Counselors suggest and admissions experts recommend starting applications the summer before senior year. This gives you time to craft thoughtful essays, gather recommendation letters, and complete all requirements without rushing.</p>
                    </div>

                    {/* Point 2 */}
                    <div>
                        <h3 className="font-bold text-black mb-2 sm:mb-3">2. Not Customizing Essays for Each School</h3>
                        <p className="text-black mb-2"><strong>Mistake:</strong> Submitting generic essays that could apply to any school or using the same essay for multiple schools without customization.</p>
                        <p className="text-black"><strong>Fix:</strong> Each essay should be tailored to the specific school and program you're applying to. Research the school's values, programs, and culture, then customize your essays accordingly.</p>
                    </div>

                    {/* Point 3 */}
                    <div>
                        <h3 className="font-bold text-black mb-2 sm:mb-3">3. Weak or Cliché Essays</h3>
                        <p className="text-black mb-2"><strong>Mistake:</strong> Writing about overused topics like winning the big game or without depth or personal insight.</p>
                        <p className="text-black"><strong>Fix:</strong> Choose topics that reveal something unique about you. Focus on specific moments, experiences, or realizations that shaped who you are. Show, don't just tell, through concrete examples and vivid storytelling.</p>
                    </div>

                    {/* Point 4 */}
                    <div>
                        <h3 className="font-bold text-black mb-2 sm:mb-3">4. Ignoring Application Instructions</h3>
                        <p className="text-black mb-2"><strong>Mistake:</strong> Not following specific formatting requirements, word limits, or submission guidelines.</p>
                        <p className="text-black"><strong>Fix:</strong> Read application instructions carefully and follow them exactly. Create a checklist for each school's requirements and double-check everything before submitting.</p>
                    </div>

                    {/* Point 5 */}
                    <div>
                        <h3 className="font-bold text-black mb-2 sm:mb-3">5. Listing Activities Without Context</h3>
                        <p className="text-black mb-2"><strong>Mistake:</strong> Simply listing extracurricular activities without explaining their significance or your role.</p>
                        <p className="text-black"><strong>Fix:</strong> For each activity, explain your role, responsibilities, achievements, and what you learned. Quantify your impact when possible — mention specific accomplishments, leadership roles, or hours contributed.</p>
                    </div>

                    {/* Point 6 */}
                    <div>
                        <h3 className="font-bold text-black mb-2 sm:mb-3">6. Overlooking Smaller Details</h3>
                        <p className="text-black mb-2"><strong>Mistake:</strong> Applying only to highly selective schools without a realistic mix of targets and safeties.</p>
                        <p className="text-black"><strong>Fix:</strong> Research and apply to a balanced mix of reach, target, and safety schools. This ensures you'll have options and reduces stress during the admissions process.</p>
                    </div>

                    {/* Point 7 */}
                    <div>
                        <h3 className="font-bold text-black mb-2 sm:mb-3">7. Submitting Applications With Errors</h3>
                        <p className="text-black mb-2"><strong>Mistake:</strong> Typos, grammatical errors, factual mistakes, or forgetting to proofread.</p>
                        <p className="text-black"><strong>Fix:</strong> Proofread everything multiple times. Read applications aloud, use spell-check, and have others review your materials. Take breaks between writing and editing to see your work with fresh eyes.</p>
                    </div>

                    {/* Point 8 */}
                    <div>
                        <h3 className="font-bold text-black mb-2 sm:mb-3">8. Not Preparing for Interviews</h3>
                        <p className="text-black mb-2"><strong>Mistake:</strong> Not confirming that all materials were received or missing deadlines due to incomplete applications.</p>
                        <p className="text-black"><strong>Fix:</strong> Create a tracking system for each school's requirements and deadlines, and follow up to ensure all materials were received. Submit applications well before deadlines to account for technical issues.</p>
                    </div>

                    {/* Point 9 */}
                    <div>
                        <h3 className="font-bold text-black mb-2 sm:mb-3">9. Forgetting to Follow Up</h3>
                        <p className="text-black mb-2"><strong>Mistake:</strong> Having parents fill out forms or write essays, showing a lack of independence.</p>
                        <p className="text-black"><strong>Fix:</strong> While parents can provide guidance and support, students should take ownership of their applications. Admissions officers want to hear your voice, not your parents'. Both high school counselors and college admissions officers can usually tell when a parent has been overly involved in the process.</p>
                    </div>

                    {/* Point 10 */}
                    <div>
                        <h3 className="font-bold text-black mb-2 sm:mb-3">10. Letting Parents Do All the Work</h3>
                        <p className="text-black mb-2"><strong>Mistake:</strong> Waiting until the last minute to start applications, leading to rushed, lower-quality submissions.</p>
                        <p className="text-black"><strong>Fix:</strong> Start early and create a timeline. Break down the application process into manageable tasks and set personal deadlines well before official ones. This allows time for multiple drafts, revisions, and careful review.</p>
                    </div>

                    {/* Final Thoughts */}
                    <div className="mt-8 sm:mt-12">
                        <h3 className="font-bold text-black mb-3 sm:mb-4">Final Thoughts</h3>
                        <p className="text-black mb-3 sm:mb-4">The college application process is more than grades and test scores — it's about telling your story with clarity and purpose. Avoiding these common mistakes can give you a serious edge and help you present the best version of yourself.</p>
                        <p className="text-black mb-2">Need help with your essays, college list, or strategy?</p>
                        <p className="font-semibold text-black">Book a free 15-minute consultation with one of our expert counselors</p>
                    </div>

                    {/* Footer */}
                    <div className="mt-6 sm:mt-8 text-gray-500 text-sm">
                        <p>Published on</p>
                        <p>Dated</p>
                        <p>Publish by designer</p>
                    </div>
                </div>
            </div>

            {/* Related Posts Section */}
            <div className="bg-white py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="font-bold text-black mb-8 text-left">
                        Related Articles
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {relatedPosts.map((post) => (
                            <Link key={post.id} to={`/blog/${post.id}`}>
                                <BlogCard
                                    id={post.id}
                                    image={post.image}
                                    title={post.title}
                                    readTime={post.readTime}
                                />
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogPost;

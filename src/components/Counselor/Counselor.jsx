import React from 'react';
import { Search, MessageCircle, Calendar, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const Counselor = () => {
  // Sample counselor data
  const counselors = [
    {
      id: 1,
      name: "Sarah Thompson",
      image: "/Home/user-2.svg",
      rating: 5,
      description:
        "Hi there! I'm Sarah Thompson, a certified German language teacher with over 10 years of experience. I've successfully helped hundreds of students master German through engaging and personalized lessons.",
      hourlyRate: "$25/hour",
      isOnline: true,
    },
    {
      id: 2,
      name: "Michael Chen",
      image: "/Home/user-2.svg",
      rating: 5,
      description:
        "Hello! I'm Michael Chen, a mathematics tutor specializing in calculus and algebra. With 8 years of teaching experience, I help students build confidence in math through clear explanations.",
      hourlyRate: "$30/hour",
      isOnline: true,
    },
    {
      id: 3,
      name: "Dr. Emily Rodriguez",
      image: "/Home/user-2.svg",
      rating: 4,
      description:
        "Greetings! I'm Dr. Emily Rodriguez, a science educator with expertise in biology and chemistry. I've been teaching for 12 years and love making complex concepts accessible to all students.",
      hourlyRate: "$35/hour",
      isOnline: false,
    },
    {
      id: 4,
      name: "James Wilson",
      image: "/Home/user-2.svg",
      rating: 5,
      description:
        "Hi! I'm James Wilson, an English literature and writing instructor. With 15 years of experience, I help students develop strong writing skills and critical thinking abilities.",
      hourlyRate: "$28/hour",
      isOnline: true,
    },
    {
      id: 5,
      name: "Dr. Maria Gonzalez",
      image: "/Home/user-2.svg",
      rating: 5,
      description:
        "Hello! I'm Dr. Maria Gonzalez, a Spanish language and culture expert. I've taught Spanish to learners of all ages for over 20 years, focusing on conversational fluency.",
      hourlyRate: "$32/hour",
      isOnline: true,
    },
  ];

  // Function to render star ratings
  const renderStars = (rating) =>
    Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        size={12} // smaller stars
        className={`${
          index < rating ? 'text-orange-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));

  return (
    <div className="w-full bg-gray-50 py-16 min-h-screen">
      <div className="w-full max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
        
        {/* Top Section */}
        <div className="mb-6 lg:mb-8 w-full max-w-4xl mx-auto">
          <h1 className="font-normal text-lg sm:text-xl lg:text-2xl leading-tight text-black mb-4 lg:mb-6">
            Search Counselors
          </h1>

          {/* Search Bar */}
          <div className="flex items-center gap-3 relative w-full max-w-4xl h-10 lg:h-[44px] rounded-2xl pl-4 lg:pl-6 pr-2 py-1 border border-[#5B7C99] bg-white mb-4">
            {/* Hamburger-style icon */}
            <div className="flex flex-col justify-center gap-1 w-3.5 lg:w-4 h-3.5 lg:h-4">
              <div className="w-3.5 lg:w-4 h-0.5 bg-[#5B7C99] rounded" />
              <div className="w-3 lg:w-3.5 h-0.5 bg-[#5B7C99] rounded" />
              <div className="w-2.5 lg:w-3 h-0.5 bg-[#5B7C99] rounded" />
            </div>
            <input
              type="text"
              placeholder="Search"
              className="text-[#5B7C99] font-normal text-xs lg:text-sm flex-1 outline-none bg-transparent"
            />
            <div className="flex items-center justify-center w-12 lg:w-[60px] h-7 lg:h-[36px] rounded-xl bg-[#5B7C99] border border-white cursor-pointer">
              <Search className="w-3 h-3 lg:w-3.5 lg:h-3.5 text-white" />
            </div>
          </div>

          {/* Filter Options */}
          <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 mb-4 w-full">
            {/* Price Dropdown */}
            <div className="flex flex-col gap-1 w-full sm:w-28 lg:w-[100px]">
              <label className="text-black text-xs lg:text-sm">Price:</label>
              <select className="flex-1 px-2 py-1 border border-[#5B7C99] rounded-xl bg-white text-black text-xs lg:text-sm outline-none">
                <option>Any</option>
                <option>$0–$25</option>
                <option>$25–$50</option>
                <option>$50+</option>
              </select>
            </div>

            {/* Topic Dropdown */}
            <div className="flex flex-col gap-1 w-full sm:w-36 lg:w-[160px]">
              <label className="text-black text-xs lg:text-sm">Topic:</label>
              <select className="flex-1 px-2 py-1 border border-[#5B7C99] rounded-xl bg-white text-black text-xs lg:text-sm outline-none">
                <option>- Select -</option>
                <option>Math</option>
                <option>Science</option>
                <option>Language</option>
                <option>History</option>
              </select>
            </div>

            {/* Expertise Dropdown */}
            <div className="flex flex-col gap-1 w-full sm:w-36 lg:w-[160px]">
              <label className="text-black text-xs lg:text-sm">Expertise:</label>
              <select className="flex-1 px-2 py-1 border border-[#5B7C99] rounded-xl bg-white text-black text-xs lg:text-sm outline-none">
                <option>- Select -</option>
                <option>Beginner</option>
                <option>Intermediate</option>
                <option>Advanced</option>
                <option>Expert</option>
              </select>
            </div>
          </div>
        </div>

        {/* Counselor Cards */}
        <div className="space-y-3 lg:space-y-2.5">
          {counselors.map((counselor) => (
            <div
              key={counselor.id}
              className="bg-white rounded-2xl shadow border border-gray-100 p-4 lg:p-5 w-full max-w-4xl mx-auto"
            >
              <div className="flex flex-col sm:flex-row gap-4 lg:gap-5">
                
                {/* Profile Image */}
                <div className="flex-shrink-0 self-start">
                  <img
                    src={counselor.image}
                    alt={counselor.name}
                    className="w-20 h-20 sm:w-24 sm:h-24 lg:w-[150px] lg:h-[150px] object-cover shadow-sm"
                  />
                </div>

                {/* Card Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-base sm:text-lg lg:text-xl font-medium text-black leading-tight mb-1">
                    {counselor.name}
                  </h3>
                  <div className="flex items-center gap-0.5 mb-2">
                    {renderStars(counselor.rating)}
                  </div>
                  <p className="text-xs sm:text-sm lg:text-[15px] font-normal text-black leading-relaxed mb-3">
                    {counselor.description}
                  </p>
                  <div className="mb-3 sm:mb-0">
                    <Link
                      onClick={() => window.scrollTo(0, 0)}
                      to={`/counselor-detail/${counselor.id}`}
                      className="text-xs sm:text-sm font-normal text-black underline inline-flex items-center gap-1"
                    >
                      Learn more
                      <svg
                        className="w-3 h-3 transform rotate-45"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M7 17l9.2-9.2M17 17V7H7"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>

                {/* Right Side */}
                <div className="flex flex-row sm:flex-col justify-between sm:justify-start items-start sm:items-end gap-2 flex-shrink-0">
                  {/* Hourly Rate */}
                  <div className="sm:mb-6 lg:mb-10">
                    <p className="text-xs sm:text-sm font-normal text-black">
                      {counselor.hourlyRate}
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-row sm:flex-col gap-2 w-full sm:w-auto">
                    <button
                      className="w-full sm:w-32 lg:w-[150px] h-7 lg:h-[34px] text-white px-2 py-1 rounded-2xl hover:opacity-90 transition-all flex items-center justify-center gap-1 text-xs font-normal"
                      style={{ backgroundColor: '#5B7C99' }}
                    >
                      <MessageCircle size={12} />
                      <span className="hidden sm:inline">Drop a Message</span>
                      <span className="sm:hidden">Message</span>
                    </button>
                    <button
                      className="w-full sm:w-32 lg:w-[150px] h-7 lg:h-[34px] text-white px-2 py-1 rounded-2xl hover:opacity-90 transition-all flex items-center justify-center gap-1 text-xs font-normal"
                      style={{ backgroundColor: '#5B7C99' }}
                    >
                      <Calendar size={12} />
                      <span className="hidden sm:inline">Book a Session</span>
                      <span className="sm:hidden">Book</span>
                    </button>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Counselor;

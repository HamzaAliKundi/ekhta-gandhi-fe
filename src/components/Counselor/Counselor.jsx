import React from 'react';
import { Search, MessageCircle, Calendar, Star, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Counselor = () => {
  const counselors = [
    {
      id: 1,
      name: "Sarah Thompson",
      image: "/Home/user-2.svg",
      rating: 5,
      description: "Hi there! I'm Sarah Thompson, a certified German language teacher with over 10 years of experience. I've successfully helped hundreds of students master German through engaging and personalized lessons.",
      hourlyRate: "$25/hour",
      isOnline: true
    },
    {
      id: 2,
      name: "Michael Chen",
      image: "/Home/user-2.svg",
      rating: 5,
      description: "Hello! I'm Michael Chen, a mathematics tutor specializing in calculus and algebra. With 8 years of teaching experience, I help students build confidence in math through clear explanations.",
      hourlyRate: "$30/hour",
      isOnline: true
    },
    {
      id: 3,
      name: "Dr. Emily Rodriguez",
      image: "/Home/user-2.svg",
      rating: 4,
      description: "Greetings! I'm Dr. Emily Rodriguez, a science educator with expertise in biology and chemistry. I've been teaching for 12 years and love making complex concepts accessible to all students.",
      hourlyRate: "$35/hour",
      isOnline: false
    },
    {
      id: 4,
      name: "James Wilson",
      image: "/Home/user-2.svg",
      rating: 5,
      description: "Hi! I'm James Wilson, an English literature and writing instructor. With 15 years of experience, I help students develop strong writing skills and critical thinking abilities.",
      hourlyRate: "$28/hour",
      isOnline: true
    },
    {
      id: 5,
      name: "Dr. Maria Gonzalez",
      image: "/Home/user-2.svg",
      rating: 5,
      description: "Hello! I'm Dr. Maria Gonzalez, a Spanish language and culture expert. I've taught Spanish to learners of all ages for over 20 years, focusing on conversational fluency.",
      hourlyRate: "$32/hour",
      isOnline: true
    }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        size={20}
        className={`${index < rating ? 'text-orange-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <div className="w-full bg-gray-50 py-16 min-h-screen">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
        
        {/* Top Section - Search and Filters */}
        <div className="mb-6 lg:mb-8 w-full max-w-4xl mx-auto">
          {/* Title */}
          <h1 className="font-poppins font-normal text-2xl sm:text-3xl lg:text-[42px] leading-tight text-black mb-4 lg:mb-6">
            Search Counselors
          </h1>

          {/* Search Bar */}
          <div className="flex items-center gap-3 relative w-full max-w-4xl h-12 lg:h-[48px] rounded-3xl pl-4 lg:pl-6 pr-2 py-1 border border-[#5B7C99] bg-white mb-4 lg:mb-6">
            {/* Left Icon - Menu/Hamburger */}
            <div className="flex flex-col justify-center gap-1 w-4 lg:w-5 h-4 lg:h-5">
              <div className="w-4 lg:w-5 h-0.5 bg-[#5B7C99] rounded"></div>
              <div className="w-3 lg:w-4 h-0.5 bg-[#5B7C99] rounded"></div>
              <div className="w-2 lg:w-3 h-0.5 bg-[#5B7C99] rounded"></div>
            </div>
            
            {/* Search Input */}
            <input
              type="text"
              placeholder="Search"
              className="text-[#5B7C99] font-poppins font-normal text-sm lg:text-base flex-1 outline-none bg-transparent"
            />
            
            {/* Right Search Button */}
            <div className="flex items-center justify-center w-16 lg:w-[72px] h-8 lg:h-[40px] rounded-2xl lg:rounded-[23px] bg-[#5B7C99] border border-white cursor-pointer">
              <Search className="w-3 lg:w-4 h-3 lg:h-4 text-white" />
            </div>
          </div>

          {/* Filter Options */}
          <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 mb-4 lg:mb-6 w-full">
            <div className="flex flex-col gap-2 w-full sm:w-32 lg:w-[120px] h-16 lg:h-[64px]">
              <label className="text-black font-poppins font-normal text-sm lg:text-base">Price:</label>
              <select className="flex-1 px-3 py-2 border border-[#5B7C99] rounded-3xl bg-white text-black font-poppins font-normal text-sm lg:text-base outline-none">
                <option>Any</option>
                <option>$0-$25</option>
                <option>$25-$50</option>
                <option>$50+</option>
              </select>
            </div>
            
            <div className="flex flex-col gap-2 w-full sm:flex-1 lg:w-[280px] h-16 lg:h-[64px]">
              <label className="text-black font-poppins font-normal text-sm lg:text-base">Topic:</label>
              <select className="flex-1 px-3 py-2 border border-[#5B7C99] rounded-3xl bg-white text-black font-poppins font-normal text-sm lg:text-base outline-none">
                <option>- Select Subject -</option>
                <option>Mathematics</option>
                <option>Science</option>
                <option>Language</option>
                <option>History</option>
              </select>
            </div>
            
            <div className="flex flex-col gap-2 w-full sm:flex-1 lg:w-[280px] h-16 lg:h-[64px]">
              <label className="text-black font-poppins font-normal text-sm lg:text-base">Expertise:</label>
              <select className="flex-1 px-3 py-2 border border-[#5B7C99] rounded-3xl bg-white text-black font-poppins font-normal text-sm lg:text-base outline-none">
                <option>- Select Any Three -</option>
                <option>Beginner</option>
                <option>Intermediate</option>
                <option>Advanced</option>
                <option>Expert</option>
              </select>
            </div>
          </div>

          {/* Counselor Count */}
          <div className="w-full">
            <p className="font-poppins font-normal text-lg sm:text-xl lg:text-[26px] leading-tight text-black">
              35 Counselors for this subject are available here
            </p>
          </div>
        </div>

        {/* Counselor Cards */}
        <div className="space-y-4 lg:space-y-3">
          {counselors.map((counselor) => (
            <div key={counselor.id} className="bg-white rounded-2xl lg:rounded-[24px] shadow-[0px_4px_4px_0px_#00000040] border border-gray-100 p-4 lg:p-6 w-full max-w-4xl mx-auto">
              
              <div className="flex flex-col sm:flex-row gap-4 lg:gap-6">
                {/* Profile Image */}
                <div className="flex-shrink-0 self-start">
                  <div className="relative">
                    <img
                      src={counselor.image}
                      alt={counselor.name}
                      className="w-24 h-24 sm:w-28 sm:h-28 lg:w-[186px] lg:h-[186px] object-cover shadow-sm"
                    />
                  </div>
                </div>

                {/* Card Content - Center section */}
                <div className="flex-1 min-w-0">
                  {/* Name */}
                  <h3 className="text-xl sm:text-2xl lg:text-[26px] font-normal text-black font-poppins mb-2 lg:mb-3 leading-tight">
                    {counselor.name}
                  </h3>
                  
                  {/* Rating Stars */}
                  <div className="flex items-center gap-1 mb-3 lg:mb-4">
                    {renderStars(counselor.rating)}
                  </div>

                  {/* Description */}
                  <p className="text-sm sm:text-base lg:text-[16px] font-normal text-black font-poppins leading-relaxed lg:leading-tight mb-3 lg:mb-4">
                    {counselor.description}
                  </p>

                  {/* Learn More Link */}
                  <div className="mb-4 sm:mb-0">
                    <Link onClick={() => window.scrollTo(0, 0)} to={`/counselor-detail/${counselor.id}`} className="text-sm sm:text-base lg:text-[16px] font-normal text-black font-poppins underline inline-flex items-center gap-2">
                      Learn more
                      <svg className="w-4 h-4 transform rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17l9.2-9.2M17 17V7H7" />
                      </svg>
                    </Link>
                  </div>
                </div>

                {/* Right Side - Rate and Buttons */}
                <div className="flex flex-row sm:flex-col justify-between sm:justify-start items-start sm:items-end gap-4 flex-shrink-0">
                  {/* Hourly Rate */}
                  <div className="sm:mb-8 lg:mb-16">
                    <p className="text-xl sm:text-2xl lg:text-[26px] font-normal text-black font-poppins leading-tight">
                      {counselor.hourlyRate}
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-row sm:flex-col gap-2 lg:gap-3 w-full sm:w-auto">
                    <button 
                      className="w-full sm:w-48 lg:w-[193px] h-10 lg:h-[48px] text-white px-3 py-2 lg:py-3 rounded-3xl hover:opacity-90 transition-all flex items-center justify-center gap-2 lg:gap-3 font-poppins text-sm lg:text-[16px] font-normal"
                      style={{ backgroundColor: '#5B7C99' }}
                    >
                      <MessageCircle size={14} className="lg:w-4 lg:h-4" />
                      <span className="hidden sm:inline">Drop a Message</span>
                      <span className="sm:hidden">Message</span>
                    </button>
                    <button 
                      className="w-full sm:w-48 lg:w-[193px] h-10 lg:h-[48px] text-white px-3 py-2 lg:py-3 rounded-3xl hover:opacity-90 transition-all flex items-center justify-center gap-2 lg:gap-3 font-poppins text-sm lg:text-[16px] font-normal"
                      style={{ backgroundColor: '#5B7C99' }}
                    >
                      <Calendar size={14} className="lg:w-4 lg:h-4" />
                      <span className="hidden sm:inline">Book a Session</span>
                      <span className="sm:hidden">Book</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-2 lg:gap-2 mt-8 lg:mt-12">
          <button className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors order-2 sm:order-1">
            ← Previous
          </button>
          
          <div className="flex items-center gap-1 order-1 sm:order-2">
            <button className="w-8 h-8 lg:w-10 lg:h-10 bg-blue-600 text-white rounded-lg font-medium text-sm lg:text-base">1</button>
            <button className="w-8 h-8 lg:w-10 lg:h-10 text-gray-600 hover:text-gray-800 rounded-lg font-medium text-sm lg:text-base">2</button>
            <button className="w-8 h-8 lg:w-10 lg:h-10 text-gray-600 hover:text-gray-800 rounded-lg font-medium text-sm lg:text-base">3</button>
            <span className="px-2 text-gray-600">...</span>
            <button className="w-8 h-8 lg:w-10 lg:h-10 text-gray-600 hover:text-gray-800 rounded-lg font-medium text-sm lg:text-base">6</button>
            <button className="w-8 h-8 lg:w-10 lg:h-10 text-gray-600 hover:text-gray-800 rounded-lg font-medium text-sm lg:text-base">7</button>
          </div>
          
          <button className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors order-3">
            Next →
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counselor;
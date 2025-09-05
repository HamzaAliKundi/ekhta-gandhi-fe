import React from 'react'

const HomePageCounselors = () => {
  const counselors = [
    {
      name: "Dr. Sarah Johnson",
      image: "/Home/user.svg",
      rating: 5,
      description: "Experienced counselor specializing in anxiety and depression. Over 10 years helping students navigate academic and personal challenges."
    },
    {
      name: "Prof. Michael Chen",
      image: "/Home/user.svg",
      rating: 4,
      description: "Career guidance expert with focus on STEM fields. Helps students discover their passion and plan their future career paths."
    },
    {
      name: "Dr. Emily Rodriguez",
      image: "/Home/user.svg",
      rating: 5,
      description: "Mental health specialist providing support for stress management and emotional well-being during academic transitions."
    },
    {
      name: "Dr. James Wilson",
      image: "/Home/user.svg",
      rating: 4,
      description: "Academic advisor with expertise in study strategies and time management. Helps students improve their learning efficiency."
    },
    {
      name: "Dr. Lisa Thompson",
      image: "/Home/user.svg",
      rating: 5,
      description: "Relationship counselor specializing in peer interactions and social skills development for college students."
    },
    {
      name: "Dr. Robert Kim",
      image: "/Home/user.svg",
      rating: 4,
      description: "Financial planning counselor helping students manage budgets, loans, and plan for their financial future."
    },
    {
      name: "Dr. Maria Garcia",
      image: "/Home/user.svg",
      rating: 5,
      description: "Cultural adjustment specialist supporting international students with adaptation and cross-cultural communication."
    },
    {
      name: "Dr. David Brown",
      image: "/Home/user.svg",
      rating: 4,
      description: "Leadership development coach focusing on building confidence and communication skills for future leaders."
    }
  ]

  return (
    <div className="w-full bg-[#EEF5FF] py-8 sm:py-12 md:py-16">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 md:px-[60px] py-2 sm:py-4 md:py-[8px]">
        {/* Title */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="font-roboto text-xl sm:text-2xl lg:text-3xl font-normal text-black leading-tight px-4">
            Explore counselors
          </h2>
        </div>

        {/* Auto-scrolling Cards Container - Added padding-top to accommodate image overflow */}
        <div className="overflow-hidden pb-4 pt-8">
          <div className="flex gap-6 lg:gap-10 animate-marquee">
            {/* First set of cards */}
            {counselors.map((counselor, index) => (
            <div 
              key={index}
              className="bg-white rounded-3xl flex flex-col relative 
              w-[190px] sm:w-[220px] lg:w-[260px] 
              h-[160px] sm:h-[180px] lg:h-[200px] 
              p-3 sm:p-4 shadow-lg flex-shrink-0"
            >
              {/* Counselor Image - Positioned absolutely at top-left with proper rounded styling */}
              <div className="absolute w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] -top-[15px] left-[-15px] sm:-top-[20px] sm:left-[-20px] bg-white rounded-full p-1 sm:p-2 shadow-md z-20">
                <img 
                  src={counselor.image} 
                  alt={counselor.name}
                  className="w-full h-full object-cover rounded-full border-2 border-gray-100"
                />
              </div>

              {/* Name and Rating - Positioned in front of image horizontally */}
              <div className="absolute top-4 sm:top-6 left-8 sm:left-12 right-3 sm:right-4 z-10">
                <h3 className="font-bold text-black mb-0 text-xs sm:text-sm lg:text-base leading-tight">
                  {counselor.name}
                </h3>
                
                {/* Star Rating - smaller stars */}
                <div className="flex gap-0.5 mb-2 sm:mb-3">
                  {[...Array(counselor.rating)].map((_, i) => (
                    <div 
                      key={i}
                      className="text-orange-400 text-xs"
                    >
                      ★
                    </div>
                  ))}
                </div>
              </div>

              {/* Description - Adjusted for smaller card */}
              <div className="absolute top-16 sm:top-20 left-3 sm:left-4 right-3 sm:right-4 bottom-8 sm:bottom-10 z-10 overflow-hidden">
                <p className="font-normal text-black 
                text-xs sm:text-sm 
                leading-tight tracking-[0%] line-clamp-3">
                  {counselor.description}
                </p>
              </div>
              
              {/* Learn More Link */}
              <div className="absolute bottom-2 sm:bottom-3 right-3 sm:right-4 z-10">
                <a 
                  href="#"
                  className="font-normal text-black underline inline-flex items-center gap-1 text-xs sm:text-sm leading-[100%] tracking-[0%] hover:text-blue-600 transition-colors"
                >
                  Learn more
                  <svg width="12" height="12" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 12L12 4M12 4H4M12 4V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </div>
            ))}
            
            {/* Duplicate set of cards for seamless marquee */}
            {counselors.map((counselor, index) => (
            <div 
              key={`duplicate-${index}`}
              className="bg-white rounded-3xl flex flex-col relative 
              w-[190px] sm:w-[220px] lg:w-[260px] 
              h-[160px] sm:h-[180px] lg:h-[200px] 
              p-3 sm:p-4 shadow-lg flex-shrink-0"
            >
              {/* Counselor Image - Positioned absolutely at top-left with proper rounded styling */}
              <div className="absolute w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] -top-[15px] left-[-15px] sm:-top-[20px] sm:left-[-20px] bg-white rounded-full p-1 sm:p-2 shadow-md z-20">
                <img 
                  src={counselor.image} 
                  alt={counselor.name}
                  className="w-full h-full object-cover rounded-full border-2 border-gray-100"
                />
              </div>

              {/* Name and Rating - Positioned in front of image horizontally */}
              <div className="absolute top-4 sm:top-6 left-8 sm:left-12 right-3 sm:right-4 z-10">
                <h3 className="font-bold text-black mb-0 text-xs sm:text-sm lg:text-base leading-tight">
                  {counselor.name}
                </h3>
                
                {/* Star Rating - smaller stars */}
                <div className="flex gap-0.5 mb-2 sm:mb-3">
                  {[...Array(counselor.rating)].map((_, i) => (
                    <div 
                      key={i}
                      className="text-orange-400 text-xs"
                    >
                      ★
                    </div>
                  ))}
                </div>
              </div>

              {/* Description - Adjusted for smaller card */}
              <div className="absolute top-16 sm:top-20 left-3 sm:left-4 right-3 sm:right-4 bottom-8 sm:bottom-10 z-10 overflow-hidden">
                <p className="font-normal text-black 
                text-xs sm:text-sm 
                leading-tight tracking-[0%] line-clamp-3">
                  {counselor.description}
                </p>
              </div>
              
              {/* Learn More Link */}
              <div className="absolute bottom-2 sm:bottom-3 right-3 sm:right-4 z-10">
                <a 
                  href="#"
                  className="font-normal text-black underline inline-flex items-center gap-1 text-xs sm:text-sm leading-[100%] tracking-[0%] hover:text-blue-600 transition-colors"
                >
                  Learn more
                  <svg width="12" height="12" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 12L12 4M12 4H4M12 4V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </div>
            ))}
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  )
}

export default HomePageCounselors
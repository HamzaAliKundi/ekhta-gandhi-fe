import React from 'react'

const HomePageCounselors = () => {
  // Static list of counselors with name, image, rating, and description
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
      {/* Page container with max-width */}
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 md:px-[60px] py-2 sm:py-4 md:py-[8px]">
        
        {/* Section Title */}
        <div className="mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black leading-tight px-4">
            Explore Counselors
          </h2>
        </div>

        {/* Horizontal Auto-scrolling Cards */}
        <div className="overflow-hidden pb-4 pt-8">
          <div className="flex gap-6 lg:gap-10 animate-marquee">
            {/* Duplicate the counselors list twice for seamless scrolling */}
            {[...Array(2)].flatMap((_, duplicate) =>
              counselors.map((counselor, index) => (
                <div 
                  key={`${duplicate}-${index}`}
                  className="bg-white rounded-3xl flex flex-col relative 
                  w-[180px] sm:w-[210px] lg:w-[250px] 
                  h-[140px] sm:h-[160px] lg:h-[180px] 
                  p-3 sm:p-4 shadow-lg flex-shrink-0"
                >
                  {/* Counselor Profile Image */}
                  <div className="absolute w-[45px] h-[45px] sm:w-[55px] sm:h-[55px] -top-[12px] left-[-12px] sm:-top-[16px] sm:left-[-16px] bg-white rounded-full p-1 sm:p-2 shadow-md z-20">
                    <img 
                      src={counselor.image} 
                      alt={counselor.name}
                      className="w-full h-full object-cover rounded-full border-2 border-gray-100"
                    />
                  </div>

                  {/* Counselor Name and Rating Stars */}
                  <div className="absolute top-3 sm:top-5 left-8 sm:left-12 right-3 sm:right-4 z-10">
                    <h3 className="font-roboto font-bold text-black mb-0 text-[11px] sm:text-xs lg:text-sm leading-tight">
                      {counselor.name}
                    </h3>
                    
                    {/* Display rating as ★ symbols */}
                    <div className="flex gap-0.5 mb-1 sm:mb-1.5 font-poppins">
                      {[...Array(counselor.rating)].map((_, i) => (
                        <div 
                          key={i}
                          className="text-orange-400 text-[9px]"
                        >
                          ★
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Short Description (clamped to 3 lines) */}
                  <div className="absolute top-14 sm:top-16 left-3 sm:left-4 right-3 sm:right-4 bottom-6 sm:bottom-8 z-10 overflow-hidden">
                      <p className="font-poppins font-normal text-black 
                      text-[10px] sm:text-[11px] 
                      leading-snug tracking-[0%] line-clamp-3">
                      {counselor.description}
                     </p>
                  </div>

                  {/* "Learn More" Link */}
                  <div className="absolute bottom-1.5 sm:bottom-2.5 right-3 sm:right-4 z-10">
                    <a 
                      href="#"
                      className="font-poppins font-normal text-black underline inline-flex items-center gap-1 text-[9px] sm:text-[10px] leading-[100%] tracking-[0%] hover:text-blue-600 transition-colors"
                    >
                      Learn more
                      {/* Small arrow icon */}
                      <svg width="9" height="9" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 12L12 4M12 4H4M12 4V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </a>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
      
      {/* Local CSS styles for marquee animation */}
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
          animation-play-state: paused; /* Pause animation when hovered */
        }
      `}</style>
    </div>
  )
}

export default HomePageCounselors

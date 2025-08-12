import React from 'react'

const HomePageCounselors = () => {
  const counselors = [
    {
      name: "Zeke Yeager",
      image: "/Home/user.svg",
      rating: 5,
      description: "Hi there I'm Zeke Yeager a German teacher, I've taught 100s of students in my 75 years of carrier as an instructor in World War 1 and 2 now taking part in 3 also Hilze Hitler"
    },
    {
      name: "Zeke Yeager",
      image: "/Home/user.svg",
      rating: 5,
      description: "Hi there I'm Zeke Yeager a German teacher, I've taught 100s of students in my 75 years of carrier as an instructor in World War 1 and 2 now taking part in 3 also Hilze Hitler"
    },
    {
      name: "Zeke Yeager",
      image: "/Home/user.svg",
      rating: 5,
      description: "Hi there I'm Zeke Yeager a German teacher, I've taught 100s of students in my 75 years of carrier as an instructor in World War 1 and 2 now taking part in 3 also Hilze Hitler"
    }
  ]

  return (
    <div className="w-full flex justify-center min-h-[450px] bg-[#EEF5FF] py-8">
      <div className="w-full max-w-7xl px-4 py-8 md:py-16">
        {/* Title */}
        <h2 className="font-poppins font-normal text-black mb-8 md:mb-12 text-2xl md:text-3xl lg:text-[42px] leading-[100%] tracking-[-0.02em] text-center md:text-left">
          Explore counselors
        </h2>

        {/* Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10 justify-items-center">
          {counselors.map((counselor, index) => (
            <div 
              key={index}
              className="bg-white rounded-3xl flex flex-col relative w-full max-w-sm lg:max-w-[389px] h-[350px] md:h-[280px] p-6 shadow-lg overflow-visible"
            >
              {/* Counselor Image - Positioned absolutely at top-left with proper rounded styling */}
              <div className="absolute w-[80px] h-[80px] -top-[20px] left-[-20px] md:-top-[30px] md:left-[-35px] bg-white rounded-full p-2 shadow-md">
                <img 
                  src={counselor.image} 
                  alt={counselor.name}
                  className="w-full h-full object-cover rounded-full border-2 border-gray-100"
                />
              </div>

              {/* Name and Rating - Positioned in front of image horizontally */}
              <div className="absolute top-8 left-16 md:left-14 right-6 z-10">
                <h3 className="font-poppins font-normal text-black mb-2 text-xl md:text-2xl lg:text-[26px] leading-[100%] tracking-[0%]">
                  {counselor.name}
                </h3>
                
                {/* Star Rating - Reduced gap between stars */}
                <div className="flex gap-0.5 mb-3">
                  {[...Array(counselor.rating)].map((_, i) => (
                    <div 
                      key={i}
                      className="text-orange-400 text-lg"
                    >
                      ★
                    </div>
                  ))}
                </div>
              </div>

              {/* Description - Positioned closer to stars with reduced gap */}
              <div className="absolute top-28 md:top-24 left-6 right-6 bottom-14 z-10 overflow-hidden">
                <p className="font-poppins font-normal text-black text-sm md:text-base leading-relaxed tracking-[0%] line-clamp-4">
                  {counselor.description}
                </p>
              </div>

              {/* Learn More Link */}
              <div className="absolute bottom-4 right-6 z-10">
                <a 
                  href="#"
                  className="font-poppins font-normal text-black underline inline-flex items-center gap-1 text-sm md:text-base leading-[100%] tracking-[0%] hover:text-blue-600 transition-colors"
                >
                  Learn more
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 12L12 4M12 4H4M12 4V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default HomePageCounselors
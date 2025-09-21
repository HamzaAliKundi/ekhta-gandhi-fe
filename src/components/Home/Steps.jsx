import React from 'react'

const HomePageSteps = () => {
  // Array of steps for the "3 simple steps" section
  const steps = [
    {
      step: "01",
      title: "Find Your Counselor",
      icon: "/Home/card-1.svg"
    },
    {
      step: "02", 
      title: "Select Focus Area",
      icon: "/Home/card-2.svg"
    },
    {
      step: "03",
      title: "Book Your Session", 
      icon: "/Home/card-3.svg"
    }
  ]

  return (
    // Section wrapper with background and padding
    <section className="w-full bg-blue-50 py-8 sm:py-12 md:py-16">
      {/* Content container, centered with max-width */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black leading-tight px-4">
            Get started in 3 simple steps
          </h2>
        </div>

        {/* Steps Grid Container */}
        <div className="flex flex-col lg:flex-row gap-10 sm:gap-12 lg:gap-16 justify-center items-center">
          
          {/* Loop through steps array and render each step card */}
          {steps.map((step, index) => (
            <div 
              key={index}
              className="bg-white rounded-3xl flex flex-col 
                         w-full max-w-[190px] sm:max-w-[220px] lg:max-w-[260px] 
                         h-[160px] sm:h-[180px] lg:h-[200px] 
                         p-3 sm:p-4 shadow-lg"
            >
              {/* Step Badge (top left) */}
              <div className="inline-flex items-center justify-center 
                              text-white text-xs font-medium 
                              rounded-full mb-2 sm:mb-3 self-start 
                              bg-[#5B7C99] px-3 py-1.5 w-[70px] h-[26px]">
                Step {step.step}
              </div>

              {/* Step Title */}
              <h3 className="text-black font-normal leading-tight 
                             mb-1 sm:mb-2 text-base sm:text-lg lg:text-xl">
                {step.title}
              </h3>

              {/* Step Icon */}
              <div className="flex-1 flex items-center justify-center min-h-0">
                <img 
                  src={step.icon} 
                  alt={step.title}
                  className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HomePageSteps

import React from 'react'

const HomePageSteps = () => {
  const steps = [
    {
      step: "01",
      title: "Find your counselor",
      icon: "/Home/card-1.svg"
    },
    {
      step: "02", 
      title: "Select focus area",
      icon: "/Home/card-2.svg"
    },
    {
      step: "03",
      title: "Book your session", 
      icon: "/Home/card-3.svg"
    }
  ]

  return (
    <section className="w-full bg-blue-50 py-8 sm:py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Title */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-normal text-black font-outfit leading-tight px-4">
            Get started in 3 simple steps
          </h2>
        </div>

        {/* Steps Container */}
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-10 justify-center items-center">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="bg-white rounded-3xl flex flex-col w-full max-w-xs sm:max-w-sm lg:max-w-[400px] h-[280px] sm:h-[320px] lg:h-[382px] p-4 sm:p-6 shadow-lg"
            >
              {/* Badge */}
              <div className="inline-flex items-center justify-center text-white text-sm font-medium rounded-full mb-4 sm:mb-6 self-start bg-[#5B7C99] px-4 py-2 w-[88px] h-[31px]">
                Step {step.step}
              </div>

              {/* Title */}
              <h3 className="text-black font-outfit font-normal leading-tight mb-4 sm:mb-6 text-[20px] sm:text-2xl lg:text-[30px]">
                {step.title}
              </h3>

              {/* Icon Container */}
              <div className="flex-1 flex items-center justify-center min-h-0">
                <img 
                  src={step.icon} 
                  alt={step.title}
                  className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 object-contain"
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
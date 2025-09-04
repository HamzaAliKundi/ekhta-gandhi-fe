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
          <h2 className="text-h2 lg:text-h2-lg font-normal text-black font-merriweather leading-tight px-4">
            Get started in 3 simple steps
          </h2>
        </div>

        {/* Steps Container */}
        {/*<div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-10 justify-center items-center">*/}
          {/*Kvora change*/}
          <div className="flex flex-col lg:flex-row gap-10 sm:gap-12 lg:gap-16 justify-center items-center">
          
          {steps.map((step, index) => (
            /*<div 
              key={index}
              className="bg-white rounded-3xl flex flex-col w-full max-w-[240px] sm:max-w-[280px] lg:max-w-[320px] h-[200px] sm:h-[240px] lg:h-[280px] p-4 sm:p-6 shadow-lg"
            >*/
            /* Komal*/
            <div 
              key={index}
              className="bg-white rounded-3xl flex flex-col 
             w-full max-w-[220px] sm:max-w-[260px] lg:max-w-[300px] 
             h-[160px] sm:h-[200px] lg:h-[220px] 
             p-3 sm:p-4 shadow-lg"
            >
              {/* Badge */}
              <div className="inline-flex items-center justify-center text-white text-xs font-medium rounded-full mb-4 sm:mb-6 self-start bg-[#5B7C99] px-3 py-1.5 w-[70px] h-[26px]">
                Step {step.step}
              </div>

              {/* Title */}
              <h3 className="text-black font-merriweather font-normal leading-tight mb-4 sm:mb-6 text-h3 lg:text-h3-lg">
                {step.title}
              </h3>

              {/* Icon Container */}
              <div className="flex-1 flex items-center justify-center min-h-0">
                <img 
                  src={step.icon} 
                  alt={step.title}
                  /*className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 object-contain"*/
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
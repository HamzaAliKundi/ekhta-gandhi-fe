import React from 'react'

const StudentFirstSection = () => {
  // Feature list data (title + description for each box on the right side)
  const features = [
    {
      title: "Progress on Your Terms",
      description: "Jump between focus areas—essays, interviews, SAT prep—at your pace, in your order. You're not locked into someone else's roadmap."
    },
    {
      title: "Not a Fit? No Stress",
      description: "If it's not a fit, switch easily. No time lost, no pressure. Keep moving forward with the right support."
    },
    {
      title: "Multiple Voices, Sharper Insight",
      description: "One essay, many angles—get different perspectives before choosing what feels right for you."
    },
    {
      title: "No Packages, Just What You Need",
      description: "No bloated packages. Just smart, session-by-session pricing that respects your time and budget."
    }
  ];

  return (
    // Outer wrapper with full width and light gray background
    <div className="w-full bg-gray-50 flex justify-center">
      {/* Constrains content inside a max width container */}
      <div className="w-full max-w-[1440px] bg-gray-50 relative overflow-hidden">

        {/* Main content row: title+images (left) and features list (right) */}
        <div className="w-full flex flex-col lg:flex-row items-center justify-between 
                        px-4 sm:px-6 lg:px-12 py-8 sm:py-12 lg:py-20 
                        relative z-10 gap-6 sm:gap-8 lg:gap-12">
          
          {/* ---------- LEFT SECTION (Title + Images) ---------- */}
          <div className="w-full lg:w-1/2 flex flex-col gap-4 sm:gap-6 order-2 lg:order-1">
            
            {/* Title */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black 
                           leading-tight lg:leading-[100%] tracking-[0%] 
                           text-center lg:text-left">
              Student First, Always
            </h2>
            
            {/* Overlapping images container */}
            <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px] 
                            max-w-[500px] lg:max-w-[577px] mx-auto lg:mx-0">
              
              {/* Top-left image */}
              <div className="absolute top-0 left-0 
                              w-[180px] sm:w-[220px] lg:w-[260px] 
                              h-[180px] sm:h-[220px] lg:h-[260px] 
                              bg-blue-200 rounded-2xl shadow-lg 
                              overflow-hidden z-10">
                <img 
                  src="/Home/header.svg" 
                  alt="Student studying" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Bottom-left image */}
              <div className="absolute bottom-0 left-0 
                              w-[180px] sm:w-[220px] lg:w-[260px] 
                              h-[180px] sm:h-[220px] lg:h-[260px] 
                              bg-green-200 rounded-2xl shadow-lg 
                              overflow-hidden z-10">
                <img 
                  src="/Home/header.svg" 
                  alt="Study materials" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Large right-side image */}
              <div className="absolute top-[60px] sm:top-[80px] lg:top-[100px] right-0 
                              w-[280px] sm:w-[340px] lg:w-[400px] 
                              h-[280px] sm:h-[340px] lg:h-[400px] 
                              bg-blue-300 rounded-2xl shadow-lg 
                              overflow-hidden z-20">
                <img 
                  src="/Home/header.svg" 
                  alt="Learning environment" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* ---------- RIGHT SECTION (Features List) ---------- */}
          <div className="w-full lg:w-1/2 flex flex-col gap-3 sm:gap-4 lg:gap-6 
                          order-1 lg:order-2 lg:h-[600px] justify-between lg:pt-8">
            
            {/* Loop through features array and render a card for each */}
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-white rounded-[20px] p-3 sm:p-4 lg:p-6 
                           shadow-lg border border-gray-100 
                           hover:shadow-xl transition-shadow duration-300 
                           w-full max-w-[680px] flex-1 mx-auto lg:mx-0"
              >
                {/* Feature title */}
                <h3 className="text-sm sm:text-base lg:text-lg text-black mb-2">
                  {feature.title}
                </h3>

                {/* Feature description */}
                <p className="text-gray-700 text-[10px] sm:text-xs lg:text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentFirstSection

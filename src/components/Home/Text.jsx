import React from 'react'

// Simple text section component for the homepage
const HomePageText = () => {
  return (
    // Full-width container with white background and vertical padding
    <div className="w-full bg-white py-8 sm:py-12 md:py-16">
      
      {/* Inner container with max width and horizontal padding (responsive) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        
        {/* Heading text, centered and responsive font sizes */}
        <h2 className="text-center font-medium text-black text-2xl sm:text-3xl lg:text-4xl leading-tight tracking-[0.0%]">
          Personalized, stress-free college prep,<br/> 
          one step at a time
        </h2>

      </div>
    </div>
  )
}

export default HomePageText

import React, { useState } from 'react';
import { MessageCircle, Calendar, Star } from 'lucide-react';
//made changes
const CounsellorDetails = () => {
  const counselorData = {
    name: "Zeke Yeager",
    image: "/Home/user-2.svg",
    rating: 4.9,
    hourlyRate: "$25/hour",
    isOnline: true,
    description: "Hey, I am Jak, and I am here with an ambition to teach everyone looking at my profile description aspiring to be better at English with regular improvements check and feedback. You are absolutely in the right place!",
    additionalDescription: "* Do not be afraid and message me to discuss the problems you are facing in speaking English confidently, and I will present to you my plan to help you improve.",
    college: ["Howards", "LUMS", "Google"],
    degrees: ["Masters OPDSF", "PHD AAGRA", "NASA Astronaut"],
    awards: ["Teacher of the year", "Prof Chad"],
    certifications: ["Comptia A+", "TEFL", "IELTS", "Good student by Google", "CCNA", "CCNP"],
    subjects: ["Essay Review", "College List", "College Interview", "SAT/ACT", "Passion Projects", "Startup Internships", "Research Scholar Programs"],
    reviews: [
      {
        id: 1,
        name: "Nicolo",
        date: "May 8, 2024",
        rating: 5,
        review: "I've just finished 21 lessons with Jahan, and I can't even begin to describe how much I've improved! Not only is he an excellent teacher, but he also makes every lesson fun and....."
      },
      {
        id: 2,
        name: "Leyla",
        date: "February 16, 2023",
        rating: 5,
        review: "Jak is a great teacher. I was looking for a teacher to improve my speaking for a month, and I found Jak's profile. I didn't make a mistake choosing him. Jak is one of the most talented......."
      }
    ]
  };

  const renderStars = (rating, size = 20) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    return (
      <div className="flex items-center gap-1">
        {Array.from({ length: 5 }, (_, index) => (
          <Star
            key={index}
            size={size}
            className={`${
              index < fullStars 
                ? 'text-orange-400 fill-current' 
                : index === fullStars && hasHalfStar
                ? 'text-orange-400 fill-current opacity-50'
                : 'text-gray-300'
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="w-full bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          
          {/* Left Sidebar */}
          <div className="lg:w-80 flex-shrink-0">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 sticky top-6">
              {/* Profile Image */}
              <div className="relative mb-6">
                <img
                  src={counselorData.image}
                  alt={counselorData.name}
                  className="w-full h-64 shadow-sm"
                />
              </div>

              {/* Hourly Rate */}
              <div className="text-left mb-10">
                <p className="text-base sm:text-lg font-medium text-black">
                  {counselorData.hourlyRate}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <button 
                  className="w-full text-white px-4 py-3 rounded-full hover:opacity-90 transition-all flex items-center justify-center gap-3 text-sm sm:text-base font-normal"
                  style={{ backgroundColor: '#5B7C99' }}
                >
                  <MessageCircle size={18} />
                  Drop a Message
                </button>
                <button 
                  className="w-full text-white px-4 py-3 rounded-full hover:opacity-90 transition-all flex items-center justify-center gap-3 text-sm sm:text-base font-normal"
                  style={{ backgroundColor: '#5B7C99' }}
                >
                  <Calendar size={18} />
                  Book a Session
                </button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Header Section */}
            <div className="mb-8">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black">
                  {counselorData.name}
                </h1>
                <div className="flex items-center gap-2">
                  <Star size={24} className="text-orange-400 fill-current" />
                  <span className="text-lg sm:text-xl lg:text-2xl font-medium text-black">
                    {counselorData.rating}
                  </span>
                </div>
              </div>

              {/* Description */}
              <div className="mb-6">
                <p className="text-sm sm:text-base lg:text-lg text-black leading-relaxed mb-3">
                  {counselorData.description}
                </p>
                <p className="text-sm sm:text-base lg:text-lg text-black leading-relaxed">
                  {counselorData.additionalDescription}
                </p>
              </div>
            </div>

            {/* Credentials Sections */}
            <div className="space-y-8 mb-12">
              <div>
                <h2 className="text-xl sm:text-2xl font-medium text-black mb-2">College</h2>
                <ul className="list-disc list-inside text-sm sm:text-base text-gray-700">
                  {counselorData.college.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-xl sm:text-2xl font-medium text-black mb-2">Degrees</h2>
                <ul className="list-disc list-inside text-sm sm:text-base text-gray-700">
                  {counselorData.degrees.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-xl sm:text-2xl font-medium text-black mb-2">Awards</h2>
                <ul className="list-disc list-inside text-sm sm:text-base text-gray-700">
                  {counselorData.awards.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-xl sm:text-2xl font-medium text-black mb-2">Certifications</h2>
                <ul className="list-disc list-inside text-sm sm:text-base text-gray-700">
                  {counselorData.certifications.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-xl sm:text-2xl font-medium text-black mb-2">Subjects</h2>
                <ul className="list-disc list-inside text-sm sm:text-base text-gray-700">
                  {counselorData.subjects.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Student Reviews */}
            <div>
              <h2 className="text-xl sm:text-2xl font-medium text-black mb-6">Students Reviews</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {counselorData.reviews.map((review) => (
                  <div key={review.id} className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm">
                    <div className="mb-3">
                      <h3 className="text-base sm:text-lg font-medium text-black mb-1">
                        {review.name}
                      </h3>
                      <p className="text-gray-600 text-xs sm:text-sm mb-2">
                        {review.date}
                      </p>
                      {renderStars(review.rating, 14)}
                    </div>

                    <p className="text-gray-700 text-sm leading-relaxed mb-2">
                      {review.review}
                    </p>

                    <button className="text-blue-600 text-xs underline hover:text-blue-700 transition-colors">
                      Show more
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CounsellorDetails;


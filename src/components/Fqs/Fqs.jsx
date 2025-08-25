import React, { useState } from 'react';
import { ChevronDown, ChevronRight, ArrowRight } from 'lucide-react';

const Fqs = () => {
  const [openFaq, setOpenFaq] = useState(0);

  const faqData = [
    {
      question: "How does your platform work ?",
      answer: "You choose a focus area (like essays, SAT prep, or college lists), browse available counselors, and book individual sessions—no long-term packages required."
    },
    {
      question: "Can I switch counselors ?",
      answer: "Yes! You're never locked in. If a counselor doesn't feel like the right fit, you can switch at any time without losing progress or money."
    },
    {
      question: "Do I need to commit to a full counseling package ?",
      answer: "Nope. We're a pay-as-you-go platform. You only book and pay for sessions you need, when you need them."
    },
    {
      question: "Can I talk to more than one counselor about the same topic ?",
      answer: "Absolutely. In fact, we encourage multiple perspectives. You can get feedback from different counselors for the same essay or prep plan."
    },
    {
      question: "What topics do your counselors cover ?",
      answer: "Our counselors specialize in a range of topics including:\n• College Essay Review\n• SAT/ACT Planning\n• College List Building\n• Interview Prep\n• Application Strategy\n...and more"
    },
    {
      question: "Who are the counselors ?",
      answer: "We carefully vet all our counselors. They're experienced college advisors, essay editors, test prep specialists, and mentors who've helped students succeed."
    },
    {
      question: "How does does it cost ?",
      answer: "Pricing is session-based and varies slightly by counselor and service. You'll see transparent pricing before you book—no hidden fees, no bundles."
    },
    {
      question: "What if I need urgent help ?",
      answer: "We've got you. Many counselors offer quick turnaround sessions—just filter by availability and choose what fits your timeline."
    }
  ];

  const blogData = [
    {
      id: 1,
      image: "/Faq/card-1.svg",
      readTime: "12 min read",
      title: "The psychology behind sharing ideas, research says it is .....",
      description: "Discover the fascinating psychological mechanisms that drive our need to share ideas and how it impacts creative collaboration.",
      gradient: "from-blue-600 to-blue-800"
    },
    {
      id: 2,
      image: "/Faq/card-2.svg",
      readTime: "12 min read",
      title: "Slow and steady wins the race but what about smart work ?",
      description: "Exploring the balance between consistent effort and strategic efficiency in achieving long-term success.",
      gradient: "from-slate-600 to-slate-800"
    },
    {
      id: 3,
      image: "/Faq/card-3.svg",
      readTime: "12 min read",
      title: "Gaming is now considered as a sports but do you know that",
      description: "The evolution of gaming from hobby to professional sport and its impact on modern entertainment industry.",
      gradient: "from-green-600 to-blue-600"
    }
  ];

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? -1 : index);
  };

  return (
    <div className="w-full bg-white min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        
        {/* FAQ Section */}
        <div className="mb-16 lg:mb-24">
          {/* FAQ Header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 lg:mb-12">
            <h1 className="text-h1 lg:text-h1-lg font-normal text-black mb-4 sm:mb-0">
              Frequently asked questions
            </h1>
            <button className="flex items-center gap-2 text-white px-6 py-2 rounded-full text-small lg:text-small-lg font-medium hover:opacity-90 transition-opacity self-start sm:self-auto"
              style={{ backgroundColor: '#5B7C99' }}>
              View more
              <ArrowRight size={16} />
            </button>
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-4">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between py-4 text-left hover:text-gray-700 transition-colors"
                >
                  <h3 className="text-h3 lg:text-h3-lg font-medium text-black pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openFaq === index ? (
                      <ChevronDown size={20} className="text-gray-600" />
                    ) : (
                      <ChevronRight size={20} className="text-gray-600" />
                    )}
                  </div>
                </button>
                
                {openFaq === index && (
                  <div className="pb-4 pr-8">
                    <p className="text-gray-600 text-body lg:text-body-lg leading-relaxed whitespace-pre-line">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Blogs Section */}
        <div>
          {/* Blogs Header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 lg:mb-12">
            <h2 className="text-h2 lg:text-h2-lg font-normal text-black mb-4 sm:mb-0">
              Blogs section
            </h2>
            <button className="flex items-center gap-2 text-white px-6 py-2 rounded-full text-small lg:text-small-lg font-medium hover:opacity-90 transition-opacity self-start sm:self-auto"
              style={{ backgroundColor: '#5B7C99' }}>
              View more
              <ArrowRight size={16} />
            </button>
          </div>

          {/* Blog Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {blogData.map((blog) => (
              <div key={blog.id} className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer">
                {/* Blog Image with Overlay */}
                <div className="relative h-64 lg:h-80 overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    onError={(e) => {
                      e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxyZWN0IHg9IjE1MCIgeT0iMTI1IiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjUwIiBmaWxsPSIjOUI5QjlCIi8+Cjwvc3ZnPgo=';
                    }}
                  />
                  
                  {/* Dark Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  
                  {/* Title and Read More in Bottom Container */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-end justify-between">
                      <h3 className="text-white text-h3 lg:text-h3-lg font-semibold leading-tight flex-1 mr-4">
                        {blog.title}
                      </h3>
                      <button className="text-white text-small lg:text-small-lg flex items-center gap-1 opacity-90 hover:opacity-100 transition-all duration-200 hover:transform hover:translate-x-1 whitespace-nowrap">
                        Read more
                        <ArrowRight size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fqs;
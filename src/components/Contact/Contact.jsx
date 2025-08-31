import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Contact form submitted:', formData);
    };

    return (
        <div className="min-h-screen bg-white-50 flex items-center justify-center px-4 py-4 sm:py-8">
            <div className="w-full max-w-6xl">
                {/* Main Card Container - Mobile responsive */}
                <div className="bg-white rounded-3xl shadow-lg overflow-hidden lg:max-h-[650px]">
                    <div className="flex flex-col lg:flex-row lg:h-full">

                        {/* Left Side - Image */}
                        <div className="lg:w-1/3 xl:w-2/5">
                            <div className="h-80 sm:h-96 lg:h-[650px] relative">
                                <img
                                    src="/register/Frame_584.svg"
                                    alt="Contact illustration"
                                    className="w-full h-full object-cover object-top rounded-t-3xl lg:rounded-l-3xl lg:rounded-tr-none lg:object-center"
                                />
                            </div>
                        </div>

                        {/* Right Side - Form Container - Mobile responsive */}
                        <div className="lg:w-2/3 xl:w-3/5 flex items-center justify-center p-4 sm:p-6 lg:p-12">
                            
                            {/* Form Content Container - Mobile responsive */}
                            <div className="w-full lg:max-w-[923px] space-y-4 sm:space-y-6">
                                
                                {/* Title */}
                                <div className="mb-6 sm:mb-8">
                                    <h1 className="text-h1 lg:text-h1-lg font-normal text-gray-900 font-merriweather">
                                        Have a question?
                                    </h1>
                                </div>

                                {/* Form */}
                                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                                    
                                    {/* First Name and Last Name Row */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-2">
                                        {/* First Name */}
                                        <div className="space-y-2">
                                                                                         <label htmlFor="firstName" className="block text-body lg:text-body-lg font-normal text-gray-700 font-merriweather">
                                                First name
                                            </label>
                                                                                                                                                                                   <input
                                                  type="text"
                                                  id="firstName"
                                                  name="firstName"
                                                  value={formData.firstName}
                                                  onChange={handleInputChange}
                                                  placeholder="Eg: jhon"
                                                  className="w-full md:max-w-[455.5px] h-12 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all font-source-sans text-sm sm:text-base placeholder-gray-400"
                                                style={{ 
                                                    paddingTop: '12px', 
                                                    paddingRight: '16px', 
                                                    paddingBottom: '12px', 
                                                    paddingLeft: '16px' 
                                                }}
                                                required
                                            />
                                        </div>

                                        {/* Last Name */}
                                        <div className="space-y-2">
                                                                                         <label htmlFor="lastName" className="block text-body lg:text-body-lg font-normal text-gray-700 font-merriweather">
                                                Last name
                                            </label>
                                                                                                                                                                                   <input
                                                  type="text"
                                                  id="lastName"
                                                  name="lastName"
                                                  value={formData.lastName}
                                                  onChange={handleInputChange}
                                                  placeholder="Eg: doe"
                                                  className="w-full md:max-w-[455.5px] h-12 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all font-source-sans text-sm sm:text-base placeholder-gray-400"
                                                style={{ 
                                                    paddingTop: '12px', 
                                                    paddingRight: '16px', 
                                                    paddingBottom: '12px', 
                                                    paddingLeft: '16px' 
                                                }}
                                                required
                                            />
                                        </div>
                                    </div>

                                    {/* Email Field - Full Width */}
                                    <div className="space-y-2">
                                                                                 <label htmlFor="email" className="block text-sm sm:text-base font-normal text-gray-700 font-merriweather">
                                            Email
                                        </label>
                                                                                                                                                                   <input
                                              type="email"
                                              id="email"
                                              name="email"
                                              value={formData.email}
                                              onChange={handleInputChange}
                                              placeholder="you@company.com"
                                              className="w-full h-12 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all font-source-sans text-sm sm:text-base placeholder-gray-400"
                                            style={{ 
                                                paddingTop: '12px', 
                                                paddingRight: '16px', 
                                                paddingBottom: '12px', 
                                                paddingLeft: '16px' 
                                            }}
                                            required
                                        />
                                    </div>

                                    {/* Message Field - Full Width */}
                                    <div className="space-y-2">
                                                                                 <label htmlFor="message" className="block text-sm sm:text-base font-normal text-gray-700 font-merriweather">
                                            Message
                                        </label>
                                                                                                                                                                   <textarea
                                              id="message"
                                              name="message"
                                              value={formData.message}
                                              onChange={handleInputChange}
                                              placeholder=""
                                              rows={4}
                                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all font-source-sans text-sm sm:text-base placeholder-gray-400 resize-none sm:rows-6"
                                            style={{ 
                                                paddingTop: '12px', 
                                                paddingRight: '16px', 
                                                paddingBottom: '12px', 
                                                paddingLeft: '16px' 
                                            }}
                                            required
                                        />
                                    </div>

                                    {/* Send Button - Mobile responsive */}
                                    <div className="flex justify-start pt-4">
                                        <button
                                            type="submit"
                                                                                         className="w-[121px] h-12 text-white hover:opacity-90 transition-colors font-source-sans text-sm sm:text-base font-normal flex items-center justify-between"
                                            style={{ 
                                                backgroundColor: '#5B7C99',
                                                borderRadius: '29px',
                                                paddingTop: '4px',
                                                paddingRight: '4px',
                                                paddingBottom: '4px',
                                                paddingLeft: '24px',
                                                gap: '12px'
                                            }}
                                        >
                                            <span>Send</span>
                                            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                                                <svg className="w-5 h-5" fill="none" stroke="#5B7C99" viewBox="0 0 24 24" strokeWidth={2}>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 17l9.2-9.2M17 17V7H7" />
                                                </svg>
                                            </div>
                                        </button>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
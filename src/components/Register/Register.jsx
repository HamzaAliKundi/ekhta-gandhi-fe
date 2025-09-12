import React, { useState } from 'react';

const Register = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: '',
        role: 'student' // default to student
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
        console.log('Form submitted:', formData);
        console.log('Registering as:', formData.role);
        
        // Redirect based on role after successful registration
        // if (formData.role === 'student') {
        //     // Redirect to student dashboard
        // } else {
        //     // Redirect to counsellor dashboard
        // }
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
                                    alt="Register illustration"
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
                                        Create an Account
                                    </h1>
                                </div>

                                {/* Role Selection */}
                                <div className="mb-6">
                                    <p className="text-body lg:text-body-lg font-normal text-gray-700 font-merriweather mb-4">
                                        I want to sign up as a:
                                    </p>
                                    <div className="flex flex-col sm:flex-row gap-4">
                                        <label className="flex items-center cursor-pointer">
                                            <input
                                                type="radio"
                                                name="role"
                                                value="student"
                                                checked={formData.role === 'student'}
                                                onChange={handleInputChange}
                                                className="w-4 h-4 text-[#5B7C99] border-gray-300 focus:ring-[#5B7C99]"
                                            />
                                            <span className="ml-3 text-body lg:text-body-lg font-normal text-gray-700 font-source-sans">
                                                Student
                                            </span>
                                        </label>
                                        <label className="flex items-center cursor-pointer">
                                            <input
                                                type="radio"
                                                name="role"
                                                value="counsellor"
                                                checked={formData.role === 'counsellor'}
                                                onChange={handleInputChange}
                                                className="w-4 h-4 text-[#5B7C99] border-gray-300 focus:ring-[#5B7C99]"
                                            />
                                            <span className="ml-3 text-body lg:text-body-lg font-normal text-gray-700 font-source-sans">
                                                Counsellor
                                            </span>
                                        </label>
                                    </div>
                                </div>

                                {/* Form */}
                                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">

                                    {/* Full Name and Email Row */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-2">
                                        {/* Full Name - Mobile responsive */}
                                        <div className="space-y-2">
                                            <label htmlFor="fullName" className="block text-body lg:text-body-lg font-normal text-gray-700 font-merriweather">
                                                Full Name*
                                            </label>
                                            <input
                                                type="text"
                                                id="fullName"
                                                name="fullName"
                                                value={formData.fullName}
                                                onChange={handleInputChange}
                                                placeholder="Jhon Doe"
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

                                        {/* Email Address - Mobile responsive */}
                                        <div className="space-y-2">
                                            <label htmlFor="email" className="block text-body lg:text-body-lg font-normal text-gray-700 font-merriweather">
                                                Email Address*
                                            </label>
                                                                                         <input
                                                 type="email"
                                                 id="email"
                                                 name="email"
                                                 value={formData.email}
                                                 onChange={handleInputChange}
                                                 placeholder="Apple@gmail.com"
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

                                    {/* Password and Confirm Password Row */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-2">
                                        {/* Enter New Password - Mobile responsive */}
                                        <div className="space-y-2">
                                            <label htmlFor="password" className="block text-body lg:text-body-lg font-normal text-gray-700 font-merriweather">
                                                Enter New Password
                                            </label>
                                                                                         <input
                                                 type="password"
                                                 id="password"
                                                 name="password"
                                                 value={formData.password}
                                                 onChange={handleInputChange}
                                                 placeholder="Password must be 8 letters"
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

                                        {/* Confirm Password - Mobile responsive */}
                                        <div className="space-y-2">
                                            <label htmlFor="confirmPassword" className="block text-body lg:text-body-lg font-normal text-gray-700 font-merriweather">
                                                Confirm Password
                                            </label>
                                                                                         <input
                                                 type="password"
                                                 id="confirmPassword"
                                                 name="confirmPassword"
                                                 value={formData.confirmPassword}
                                                 onChange={handleInputChange}
                                                 placeholder="Type again"
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

                                    {/* Sign-up with social options and Next button - Mobile responsive */}
                                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-6 pt-4">

                                        {/* Sign-up with social options */}
                                        <div className="flex flex-col sm:flex-row sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
                                            <span className="text-body lg:text-body-lg font-normal text-gray-700 font-merriweather">Sign-up with</span>

                                            {/* Social Login Buttons */}
                                            <div className="flex space-x-3">
                                                {/* Google */}
                                                <button
                                                    type="button"
                                                    className="w-8 h-8 sm:w-10 sm:h-10 bg-white border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors"
                                                >
                                                    <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24">
                                                        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                                        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                                        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                                                        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>

                                        {/* Next Button - Mobile responsive */}
                                        <button
                                            type="submit"
                                            className="w-full sm:w-auto px-6 sm:px-8 py-3 text-white rounded-lg hover:opacity-90 transition-colors font-source-sans text-sm sm:text-base font-normal flex items-center justify-center space-x-2"
                                            style={{ backgroundColor: '#5B7C99' }}
                                        >
                                            <span>Next</span>
                                            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
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

export default Register;
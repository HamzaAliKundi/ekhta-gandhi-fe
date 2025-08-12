import React, { useState } from 'react';

const Register = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: ''
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
    };

    return (
        <div className="min-h-screen bg-white-50 flex items-center justify-center px-4 py-8">
            <div className="w-full max-w-6xl">
                {/* Main Card Container - Optimal height */}
                <div className="bg-white rounded-3xl shadow-lg overflow-hidden max-h-[650px]">
                    <div className="flex flex-col lg:flex-row h-full">

                        {/* Left Side - Image */}
                        <div className="lg:w-1/3 xl:w-2/5">
                            <div className="h-64 lg:h-[650px] relative">
                                <img
                                    src="/register/Frame_584.svg"
                                    alt="Register illustration"
                                    className="w-full h-full object-cover rounded-t-3xl lg:rounded-l-3xl lg:rounded-tr-none"
                                />
                            </div>
                        </div>

                        {/* Right Side - Form Container with exact Figma dimensions */}
                        <div className="lg:w-2/3 xl:w-3/5 flex items-center justify-center p-8 lg:p-12">

                            {/* Form Content Container - 923px width, 401px height */}
                            <div className="w-full max-w-[923px] space-y-6">

                                {/* Title */}
                                <div className="mb-8">
                                    <h1 className="text-3xl lg:text-4xl xl:text-5xl font-normal text-gray-900 font-poppins">
                                        Create an Account
                                    </h1>
                                </div>

                                {/* Form */}
                                <form onSubmit={handleSubmit} className="space-y-6">

                                    {/* Full Name and Email Row */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                        {/* Full Name - Figma specs: width: 455.5px, height: 48px */}
                                        <div className="space-y-2">
                                            <label htmlFor="fullName" className="block text-base font-normal text-gray-700 font-poppins">
                                                Full Name*
                                            </label>
                                            <input
                                                type="text"
                                                id="fullName"
                                                name="fullName"
                                                value={formData.fullName}
                                                onChange={handleInputChange}
                                                placeholder="Jhon Doe"
                                                className="w-full max-w-[455.5px] h-12 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all font-poppins text-base placeholder-gray-400"
                                                style={{
                                                    paddingTop: '12px',
                                                    paddingRight: '16px',
                                                    paddingBottom: '12px',
                                                    paddingLeft: '16px'
                                                }}
                                                required
                                            />
                                        </div>

                                        {/* Email Address - Figma specs: width: 455.5px, height: 48px */}
                                        <div className="space-y-2">
                                            <label htmlFor="email" className="block text-base font-normal text-gray-700 font-poppins">
                                                Email Address*
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                placeholder="Apple@gmail.com"
                                                className="w-full max-w-[455.5px] h-12 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all font-poppins text-base placeholder-gray-400"
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
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                        {/* Enter New Password - Figma specs: width: 455.5px, height: 48px */}
                                        <div className="space-y-2">
                                            <label htmlFor="password" className="block text-base font-normal text-gray-700 font-poppins">
                                                Enter New Password
                                            </label>
                                            <input
                                                type="password"
                                                id="password"
                                                name="password"
                                                value={formData.password}
                                                onChange={handleInputChange}
                                                placeholder="Password must be 8 letters"
                                                className="w-full max-w-[455.5px] h-12 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all font-poppins text-base placeholder-gray-400"
                                                style={{
                                                    paddingTop: '12px',
                                                    paddingRight: '16px',
                                                    paddingBottom: '12px',
                                                    paddingLeft: '16px'
                                                }}
                                                required
                                            />
                                        </div>

                                        {/* Confirm Password - Figma specs: width: 455.5px, height: 48px */}
                                        <div className="space-y-2">
                                            <label htmlFor="confirmPassword" className="block text-base font-normal text-gray-700 font-poppins">
                                                Confirm Password
                                            </label>
                                            <input
                                                type="password"
                                                id="confirmPassword"
                                                name="confirmPassword"
                                                value={formData.confirmPassword}
                                                onChange={handleInputChange}
                                                placeholder="Type again"
                                                className="w-full max-w-[455.5px] h-12 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all font-poppins text-base placeholder-gray-400"
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

                                    {/* Sign-up with social options and Next button */}
                                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 pt-4">

                                        {/* Sign-up with social options */}
                                        <div className="flex items-center space-x-4">
                                            <span className="text-base font-normal text-gray-700 font-poppins">Sign-up with</span>

                                            {/* Social Login Buttons */}
                                            <div className="flex space-x-3">
                                                {/* Apple */}
                                                <button
                                                    type="button"
                                                    className="w-10 h-10 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors"
                                                >
                                                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                                                    </svg>
                                                </button>

                                                {/* Google */}
                                                <button
                                                    type="button"
                                                    className="w-10 h-10 bg-white border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors"
                                                >
                                                    <svg className="w-5 h-5" viewBox="0 0 24 24">
                                                        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                                        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                                        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                                                        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                                                    </svg>
                                                </button>

                                                {/* Facebook */}
                                                <button
                                                    type="button"
                                                    className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                                                >
                                                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>

                                        {/* Next Button */}
                                        <button
                                            type="submit"
                                            className="px-8 py-3 text-white rounded-lg hover:opacity-90 transition-colors font-poppins text-base font-normal flex items-center space-x-2"
                                            style={{ backgroundColor: '#5B7C99' }}
                                        >
                                            <span>Next</span>
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
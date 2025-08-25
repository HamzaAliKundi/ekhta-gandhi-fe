import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const handleLinkClick = () => {
    if (isMenuOpen) setIsMenuOpen(false);
  };

  return (
    <nav className="w-full max-w-[1680px] mx-auto h-[90px] bg-[#5B7C99] flex items-center left-0 z-50">
      <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-8 md:px-[60px] py-2 sm:py-4 md:py-[8px] flex items-center justify-between gap-2 sm:gap-4 md:gap-[8px]">
        {/* Left: Logo */}
        <div className="w-[140px] sm:w-[160px] md:w-[180px] h-[40px] px-3 sm:px-5 md:px-[20px] py-2 sm:py-3 md:py-[10px] flex items-center gap-2 sm:gap-3 md:gap-[12px] rounded-[25px] bg-white border border-gray-200 shadow-sm">
          <Link to="/" className="flex items-center gap-2 sm:gap-3 md:gap-[12px]">
            {/* Logo SVG */}
            <img src="/logo.svg" alt="Logo" className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="text-black font-semibold text-xs sm:text-sm">LogoLogoLogo</span>
          </Link>
        </div>

        {/* Center: Navigation links */}
        <div className="hidden md:flex items-center justify-center gap-[32px] w-[400px] h-[40px]">
          <Link 
            to="/counselor" 
            className={`text-white hover:text-gray-100 transition-all duration-300 font-outfit text-button lg:text-button-lg leading-none tracking-wide ${isActive('/counselor') ? 'text-gray-100' : 'text-white'}`}
            onClick={handleLinkClick}
          >
            Find Counselor
          </Link>
          <Link 
            to="/signup" 
            className={`text-white hover:text-gray-100 transition-all duration-300 font-outfit text-button lg:text-button-lg leading-none tracking-wide ${isActive('/become-counselor') ? 'text-gray-100' : 'text-white'}`}
            onClick={handleLinkClick}
          >
            Become Counselor
          </Link>
        </div>

        {/* Right: Login and Sign up buttons */}
        <div className="hidden md:flex items-center gap-[16px]">
          {/* Login dropdown */}
          <div className="relative group">
            <button className="w-[140px] h-[44px] px-[24px] py-2 flex items-center justify-center gap-[8px] rounded-[22px] border-2 border-white bg-transparent text-white hover:bg-white hover:text-[#5B7C99] transition-all duration-300 shadow-sm hover:shadow-md">
              <span className="text-button lg:text-button-lg font-semibold font-outfit tracking-wide">Login</span>
              <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {/* Dropdown menu */}
            <div className="absolute top-full left-0 mt-2 w-[220px] bg-white rounded-xl shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
              <div className="py-3">
                                 <a 
                   href="https://ekhta-gandhi-user.vercel.app/login" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="block px-5 py-3 text-small lg:text-small-lg text-gray-700 hover:bg-gray-50 transition-all duration-200 font-outfit font-medium"
                 >
                   Login as Student
                 </a>
                 <a 
                   href="https://ekhta-gandhi-counselor.vercel.app/login" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="block px-5 py-3 text-small lg:text-small-lg text-gray-700 hover:bg-gray-50 transition-all duration-200 font-outfit font-medium"
                 >
                   Login as Counsellor
                 </a>
              </div>
            </div>
          </div>

          {/* Sign up button */}
          <Link 
            to="/signup" 
            className="w-[140px] h-[44px] px-[24px] py-2 flex items-center justify-center gap-[8px] rounded-[22px] border-2 border-white bg-transparent text-white hover:bg-white hover:text-[#5B7C99] transition-all duration-300 shadow-sm hover:shadow-md group"
          >
            <span className="text-[15px] font-semibold font-outfit tracking-wide">Sign up</span>
            <img src="/common/logout.svg" alt="Logout icon" className="w-4 h-4 group-hover:brightness-0" />
          </Link>
        </div>

        {/* Hamburger menu button (mobile only) */}
        <button
          className="md:hidden ml-2 p-2 rounded focus:outline-none focus:ring-2 focus:ring-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="white" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu dropdown */}
      <div className={`md:hidden absolute top-[90px] left-0 w-full bg-[#5B7C99] shadow-lg z-50 transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-100 max-h-[500px]' : 'opacity-0 max-h-0 overflow-hidden'}`}>
        <div className="flex flex-col items-center py-6 space-y-6 px-4">
          <Link to="/counselor" className="text-white hover:text-gray-100 transition-all duration-300 font-outfit font-semibold text-[15px] leading-none tracking-wide" onClick={handleLinkClick}>Find Counselor</Link>
          <Link to="/signup" className="text-white hover:text-gray-100 transition-all duration-300 font-outfit font-semibold text-[15px] leading-none tracking-wide" onClick={handleLinkClick}>Become Counselor</Link>
          
          {/* Mobile Login options */}
          <div className="w-full max-w-[280px] space-y-4">
            <a 
              href="https://ekhta-gandhi-user.vercel.app/login" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full h-[44px] px-[24px] py-2 flex items-center justify-center gap-[8px] rounded-[22px] border-2 border-white bg-transparent text-white hover:bg-white hover:text-[#5B7C99] transition-all duration-300 shadow-sm hover:shadow-md"
              onClick={handleLinkClick}
            >
              <span className="text-[15px] font-semibold font-outfit tracking-wide">Login as Student</span>
            </a>
            <a 
              href="https://ekhta-gandhi-counselor.vercel.app/login" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full h-[44px] px-[24px] py-2 flex items-center justify-center gap-[8px] rounded-[22px] border-2 border-white bg-transparent text-white hover:bg-white hover:text-[#5B7C99] transition-all duration-300 shadow-sm hover:shadow-md"
              onClick={handleLinkClick}
            >
              <span className="text-[15px] font-semibold font-outfit tracking-wide">Login as Counsellor</span>
            </a>
          </div>
          
                     <Link to="/signup" className="w-full max-w-[280px] h-[44px] px-[24px] py-2 flex items-center justify-center gap-[8px] rounded-[22px] border-2 border-white bg-transparent text-white hover:bg-white hover:text-[#5B7C99] transition-all duration-300 shadow-sm hover:shadow-md group" onClick={handleLinkClick}>
             <span className="text-button lg:text-button-lg font-semibold font-outfit tracking-wide">Sign up</span>
            <img src="/common/logout.svg" alt="Logout icon" className="w-4 h-4 group-hover:brightness-0 group-hover:invert group-hover:hue-rotate-[200deg] group-hover:saturate-[2]" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
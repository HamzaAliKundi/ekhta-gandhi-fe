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
    <nav className="w-full max-w-[1440px] mx-auto h-[90px] bg-[#5B7C99] flex items-center left-0 z-50">
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
        <div className="hidden md:flex items-center justify-center gap-[20px] w-[350px] h-[40px]">
          <Link 
            to="/counselor" 
            className={`text-white hover:text-gray-200 transition-colors font-poppins font-bold text-base leading-none ${isActive('/counselor') ? 'font-bold' : 'font-bold'}`}
            onClick={handleLinkClick}
          >
            Find Counselor
          </Link>
          <Link 
            to="/become-counselor" 
            className={`text-white hover:text-gray-200 transition-colors font-poppins font-bold text-base leading-none ${isActive('/become-counselor') ? 'font-bold' : 'font-bold'}`}
            onClick={handleLinkClick}
          >
            Become Counselor
          </Link>
        </div>

        {/* Right: Login and Sign up buttons */}
        <div className="hidden md:flex items-center gap-[12px]">
          {/* Login button */}
          <Link 
            to="/login" 
            className="w-[120px] h-[40px] px-[20px] py-2 flex items-center justify-center gap-[12px] rounded-[25px] border border-white bg-transparent text-white hover:bg-white hover:text-[#5B7C99] transition-all"
          >
            <span className="text-base font-medium">Login</span>
            <img src="/public/common/logout.svg" alt="Logout icon" className="w-4 h-4" />
          </Link>
          
          {/* Sign up button */}
          <Link 
            to="/signup" 
            className="w-[120px] h-[42px] px-[20px] py-2 flex items-center justify-center gap-[12px] rounded-[25px] bg-white text-black hover:bg-gray-100 transition-all"
          >
            <span className="text-base font-medium">Sign up</span>
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
        <div className="flex flex-col items-center py-5 space-y-5 px-4">
          <Link to="/counselor" className="text-white hover:text-gray-200 transition-colors font-poppins font-bold text-base leading-none" onClick={handleLinkClick}>Find Counselor</Link>
          <Link to="/become-counselor" className="text-white hover:text-gray-200 transition-colors font-poppins font-bold text-base leading-none" onClick={handleLinkClick}>Become Counselor</Link>
          <Link to="/login" className="w-full max-w-[260px] h-[40px] px-[20px] py-2 flex items-center justify-center gap-[12px] rounded-[25px] border border-white bg-transparent text-white hover:bg-white hover:text-[#5B7C99] transition-all" onClick={handleLinkClick}>
            <span className="text-base font-medium">Login</span>
            <img src="/public/common/logout.svg" alt="Logout icon" className="w-4 h-4" />
          </Link>
          <Link to="/signup" className="w-full max-w-[260px] h-[42px] px-[20px] py-2 flex items-center justify-center gap-[12px] rounded-[25px] bg-white text-black hover:bg-gray-100 transition-all" onClick={handleLinkClick}>
            <span className="text-base font-medium">Sign up</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
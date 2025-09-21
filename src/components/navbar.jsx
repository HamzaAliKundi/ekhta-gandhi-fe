import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const handleLinkClick = () => {
    if (isMenuOpen) setIsMenuOpen(false);
  };

  return (
    <nav className="w-full max-w-[1680px] mx-auto h-[90px] bg-[#5B7C99] flex items-center left-0 z-50 px-4 sm:px-8 md:px-12">
      <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-8 md:px-[60px] py-2 sm:py-4 md:py-[8px] flex items-center justify-between gap-2 sm:gap-4 md:gap-[8px]">
        {/* Left: Logo */}
        <div className="w-[140px] sm:w-[160px] md:w-[180px] h-[40px] px-3 sm:px-5 md:px-[20px] py-2 sm:py-3 md:py-[10px] flex items-center gap-2 sm:gap-3 md:gap-[12px] rounded-[25px] bg-white border border-gray-200 shadow-sm">
          <Link to="/" className="flex items-center gap-2 sm:gap-3 md:gap-[12px]">
            <img src="/logo.svg" alt="Logo" className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="text-black font-semibold text-[10px] sm:text-xs">LogoLogoLogo</span>
          </Link>
        </div>

        {/* Center: Navigation links */}
        <div className="hidden md:flex items-center justify-center gap-[32px] w-[400px] h-[40px]">
          <Link
            to="/counselor"
            className={`text-white hover:text-gray-100 transition-all duration-300 text-xs font-medium leading-none tracking-wide ${
              isActive('/counselor') ? 'text-gray-100' : 'text-white'
            }`}
            onClick={handleLinkClick}
          >
            Find Counselor
          </Link>
          <Link
            to="/signup"
            className={`text-white hover:text-gray-100 transition-all duration-300 text-xs font-medium leading-none tracking-wide ${
              isActive('/become-counselor') ? 'text-gray-100' : 'text-white'
            }`}
            onClick={handleLinkClick}
          >
            Be a Counselor
          </Link>
        </div>

        {/* Right: Login and Sign up buttons */}
        <div className="hidden md:flex items-center gap-[16px]">
          {/* Login link */}
          <a
            href="https://ekhta-gandhi-dashboard.vercel.app/login"
            target="_blank"
            rel="noopener noreferrer"
            className="px-2 py-1 text-white hover:text-gray-200 transition-all duration-300 text-xs font-medium leading-none tracking-wide"
          >
            <span>Login</span>
          </a>

          {/* Sign up button */}
          <Link
            to="/signup"
            className="px-2 py-1 text-white hover:text-gray-200 transition-all duration-300 text-xs font-medium leading-none tracking-wide"
          >
            <span>Sign up</span>
          </Link>
        </div>

        {/* Hamburger menu (mobile) */}
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
    </nav>
  );
};

export default Navbar;
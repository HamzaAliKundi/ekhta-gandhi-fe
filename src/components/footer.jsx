import React from 'react';
import { Facebook, Linkedin, Github } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const navigationLinks = {
        pages: [
            { name: 'Home', href: '/' },
            { name: 'About', href: '#' },
            { name: 'Our Services', href: '#' }
        ],
        resources: [
            { name: 'Faqs', href: '/fqs' },
            { name: 'Counselor', href: '/counselor' }
        ],
        legal: [
            { name: 'Privacy Policy', href: '#' },
            { name: 'Terms of Conditions', href: '#' },
            { name: 'Help Center', href: '#' },
            { name: 'Security and Compliance', href: '#' }
        ]
    };

    const contactInfo = {
        address: '21 3 12312 asd 123123132 asdf asdf 12a sfd',
        phone: '0000-00-00',
        email: 'admin@.com'
    };

    const XIcon = () => (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
    );

    return (
        <footer className="max-w-[1440px] mx-auto bg-[#6B8CAE] text-white">
            <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
                {/* Main Footer Content */}
                <div className="flex flex-col gap-8 lg:gap-12">
                    
                    {/* Main Row - Logo, Pages, Resources, Legal, Contact */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap- lg:gap-12">
                        
                        {/* Logo and Description */}
                        <div className="lg:col-span-1 max-w-[200px]">
                            <div className="mb-6">
                                <h2 className="text-3xl lg:text-4xl font-bold font-poppins">
                                    Logo
                                </h2>
                            </div>
                            <p className="text-white/80 text-base lg:text-lg leading-relaxed max-w-sm">
                                This is the section where the slogan of the company will be or any other imp message
                            </p>
                        </div>

                        {/* Pages */}
                        <div className="max-w-[100px]">
                            <h3 className="text-xl font-semibold mb-4 lg:mb-6 font-poppins">
                                Pages
                            </h3>
                            <ul className="space-y-3">
                                {navigationLinks.pages.map((link, index) => (
                                    <li key={index}>
                                        {link.href.startsWith('/') ? (
                                            <Link
                                                to={link.href}
                                                className="text-white/80 hover:text-white transition-colors duration-200 text-base"
                                            >
                                                {link.name}
                                            </Link>
                                        ) : (
                                            <a
                                                href={link.href}
                                                className="text-white/80 hover:text-white transition-colors duration-200 text-base"
                                            >
                                                {link.name}
                                            </a>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Resources */}
                        <div className="max-w-[100px]">
                            <h3 className="text-xl font-semibold mb-4 lg:mb-6 font-poppins">
                                Resources
                            </h3>
                            <ul className="space-y-3">
                                {navigationLinks.resources.map((link, index) => (
                                    <li key={index}>
                                        {link.href.startsWith('/') ? (
                                            <Link
                                                to={link.href}
                                                className="text-white/80 hover:text-white transition-colors duration-200 text-base"
                                            >
                                                {link.name}
                                            </Link>
                                        ) : (
                                            <a
                                                href={link.href}
                                                className="text-white/80 hover:text-white transition-colors duration-200 text-base"
                                            >
                                                {link.name}
                                            </a>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Legal */}
                        <div className="max-w-[100px]">
                            <h3 className="text-xl font-semibold mb-4 lg:mb-6 font-poppins">
                                Legal
                            </h3>
                            <ul className="space-y-3">
                                {navigationLinks.legal.map((link, index) => (
                                    <li key={index}>
                                        {link.href.startsWith('/') ? (
                                            <Link
                                                to={link.href}
                                                className="text-white/80 hover:text-white transition-colors duration-200 text-base"
                                            >
                                                {link.name}
                                            </Link>
                                        ) : (
                                            <a
                                                href={link.href}
                                                className="text-white/80 hover:text-white transition-colors duration-200 text-base"
                                            >
                                                {link.name}
                                            </a>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact Us */}
                        <div className="w-full max-w-[180px]">
                            <h4 className="text-xl font-semibold mb-4 lg:mb-6 font-poppins">
                                Contact Us
                            </h4>
                            <div className="space-y-3 text-white/80 text-base">
                                <p>{contactInfo.address}</p>
                                <p>{contactInfo.phone}</p>
                                <p>{contactInfo.email}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-white/20 my-8 lg:my-12"></div>

                {/* Social Media Icons */}
                <div className="flex justify-center lg:justify-end space-x-6">
                    <a 
                        href="#" 
                        className="text-white/80 hover:text-white transition-colors duration-200"
                        aria-label="X (Twitter)"
                    >
                        <XIcon />
                    </a>
                    <a 
                        href="#" 
                        className="text-white/80 hover:text-white transition-colors duration-200"
                        aria-label="LinkedIn"
                    >
                        <Linkedin size={24} />
                    </a>
                    <a 
                        href="#" 
                        className="text-white/80 hover:text-white transition-colors duration-200"
                        aria-label="Facebook"
                    >
                        <Facebook size={24} />
                    </a>
                    <a 
                        href="#" 
                        className="text-white/80 hover:text-white transition-colors duration-200"
                        aria-label="GitHub"
                    >
                        <Github size={24} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
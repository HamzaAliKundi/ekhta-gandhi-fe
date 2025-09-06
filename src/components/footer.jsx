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
            { name: 'Counselor', href: '/counselor' },
            { name: 'Blog', href: '/blog' }
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
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
    );

    return (
        <footer className="max-w-[1680px] mx-auto bg-[#6B8CAE] text-white text-sm">
            <div className="w-full max-w-[1680px] mx-auto px-3 sm:px-4 lg:px-6 py-4 lg:py-5">
                {/* Main Footer Content */}
                <div className="flex flex-col gap-4 lg:gap-6">

                    {/* Main Row - Logo, Pages, Resources, Legal, Contact */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6">

                        {/* Logo and Description */}
                        <div className="lg:col-span-1 max-w-[180px]">
                            <div className="mb-2">
                                <h2 className="text-lg lg:text-xl font-bold font-roboto">
                                    Logo
                                </h2>   
                            </div>
                            <p className="text-white/70 text-[13px] leading-snug font-poppins">
                                This is the section where the slogan of the company will be or any other imp message
                            </p>
                        </div>

                        {/* Pages */}
                        <div className="max-w-[90px]">
                            <h3 className="text-[14px] font-semibold mb-2 font-roboto uppercase">
                                Pages
                            </h3>
                            <ul className="space-y-2">
                                {navigationLinks.pages.map((link, index) => (
                                    <li key={index}>
                                        <Link
                                            to={link.href}
                                            onClick={() => window.scrollTo(0, 0)}
                                            className="text-white/70 hover:text-white transition-colors duration-200 text-[13px] font-poppins"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Resources */}
                        <div className="max-w-[90px]">
                            <h3 className="text-[14px] font-semibold mb-2 font-roboto uppercase">
                                Resources
                            </h3>
                            <ul className="space-y-2">
                                {navigationLinks.resources.map((link, index) => (
                                    <li key={index}>
                                        <Link
                                            to={link.href}
                                            onClick={() => window.scrollTo(0, 0)}
                                            className="text-white/70 hover:text-white transition-colors duration-200 text-[13px] font-poppins"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Legal */}
                        <div className="max-w-[90px]">
                            <h3 className="text-[14px] font-semibold mb-2 font-roboto uppercase">
                                Legal
                            </h3>
                            <ul className="space-y-2">
                                {navigationLinks.legal.map((link, index) => (
                                    <li key={index}>
                                        <Link
                                            to={link.href}
                                            onClick={() => window.scrollTo(0, 0)}
                                            className="text-white/70 hover:text-white transition-colors duration-200 text-[13px] font-poppins"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact Us */}
                        <div className="w-full max-w-[160px]">
                            <h4 className="text-[14px] font-semibold mb-3 font-roboto uppercase">
                                Contact Us
                            </h4>
                            <div className="space-y-2 text-white/70 text-[13px] font-poppins">
                                <p>{contactInfo.address}</p>
                                <p>{contactInfo.phone}</p>
                                <p>{contactInfo.email}</p>
                                <Link
                                    to="/contact"
                                    onClick={() => window.scrollTo(0, 0)}
                                    className="text-white/70 hover:text-white transition-colors duration-200 text-[13px] font-poppins block mt-2"
                                >
                                    Contact Us
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-white/20 my-3"></div>

                {/* Social Media Icons */}
                <div className="flex justify-center lg:justify-end space-x-4 pb-1">
                    <a href="#" className="text-white/70 hover:text-white transition-colors duration-200" aria-label="X (Twitter)">
                        <XIcon />
                    </a>
                    <a href="#" className="text-white/70 hover:text-white transition-colors duration-200" aria-label="LinkedIn">
                        <Linkedin size={18} />
                    </a>
                    <a href="#" className="text-white/70 hover:text-white transition-colors duration-200" aria-label="Facebook">
                        <Facebook size={18} />
                    </a>
                    <a href="#" className="text-white/70 hover:text-white transition-colors duration-200" aria-label="GitHub">
                        <Github size={18} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

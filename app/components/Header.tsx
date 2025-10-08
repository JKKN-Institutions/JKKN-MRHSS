"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X, GraduationCap } from "lucide-react";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);      
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isOpen && !(event.target as Element).closest('.mobile-nav')) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const navItems = [
    {
      name: "About",
      children: [
        { name: "Vision & Mission", href: "/mission" },
        { name: "Founder Message", href: "/our-trust" },
        { name: "Our Management", href: "/management" },
        { name: "Why JKKN?", href: "/why-jkkn" },
        { name: "dashboard", href: "/dashboard" },
      ],
    },
    {
      name: "Programs",
      children: [
        { name: "LKG & UKG", href: "/lkg-to-ukg" },
        { name: "1st Standard to 12th Standard", href: "/school-1-to-12" },
      ],
    },
    {
      name: "Academics",
      children: [
        { name: "Subjects Offered", href: "/subjects-offered" },
        { name: "Exam Details", href: "/exam-details" },
        { name: "Staffs Details", href: "/staffs" },
      ],
    },
    {
      name: "Gallery",
      href: "/gallery",
    },
    {
      name: "Facilities",
      children: [
        { name: "Transport", href: "/port" },
        { name: "Lab", href: "/lab" },
        { name: "Sports Ground", href: "/sports" },
        { name: "Library", href: "/library" },
        { name: "Classrooms", href: "/classrooms" },
      ],
    },
    {
        name: "Others",
      children: [
        // { name: "Academic Calendar", href: "/academic-calendar" },
        { name: "Committees & Clubs", href: "/committees-clubs" },
        { name: "Co-Curricular Activities", href: "/co-curricular" },
        { name: "JEE/NEET Coaching", href: "/jee-neet" },
        { name: "Privacy Policy", href: "/privacy-policy" },
      ],
    },
    {
      name: "Contact",
      href: "/contact",
    },
  ];

  // Social media links with actual images
  const socialLinks = [
    {
      href: "https://www.facebook.com/jkknschool",
      label: "Facebook",
      image: "/images/socialmedia/facebook.webp",
      hoverColor: "hover:ring-blue-600",
    },
    {
      href: "https://www.twitter.com/jkknschool",
      label: "Twitter",
      image: "/images/socialmedia/twitterx.png",
      hoverColor: "hover:ring-gray-800",
    },
    {
      href: "https://www.instagram.com/jkkn_school",
      label: "Instagram",
      image: "/images/socialmedia/instagram.webp",
      hoverColor: "hover:ring-pink-500",
    },
    {
      href: "https://www.linkedin.com/school/jkknschool",
      label: "LinkedIn",
      image: "/images/socialmedia/linkdin.webp",
      hoverColor: "hover:ring-blue-700",
    },
    {
      href: "https://www.youtube.com/@JKKNINSTITUTIONS",
      label: "YouTube",
      image: "/images/socialmedia/youtube.webp",
      hoverColor: "hover:ring-red-600",
    },
  ];

  // Add chevron SVG for dropdowns
  const ChevronDown = () => (
    <svg className="ml-1 w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors duration-200" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );

  const toggleDropdown = (itemName: string) => {
    setActiveDropdown(activeDropdown === itemName ? null : itemName);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-lg' : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center w-full">
            {/* Left: Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center space-x-2">
                <Image
                  src="/images/logo/logo.png"
                  alt="JKKN Matriculation Hr. Sec. School Logo"
                  width={160}
                  height={60}
                  priority
                  className="h-12 w-auto object-contain"
                />
              </Link>
            </div>
            {/* Center: Nav Links */}
            <div className="flex-1 flex justify-center items-center space-x-6 xl:space-x-8">
              {navItems.map((item: any) => (
                <div key={item.name} className="relative group">
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium text-sm xl:text-base whitespace-nowrap px-2 py-1 focus:outline-none focus:shadow-none focus:ring-0"
                    >
                      {item.name}
                      {item.children && <ChevronDown />}
                    </Link>
                  ) : (
                    <button
                      type="button"
                      className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium text-sm xl:text-base whitespace-nowrap px-2 py-1 focus:outline-none focus:shadow-none focus:ring-0 bg-transparent border-none cursor-pointer"
                    >
                      {item.name}
                      {item.children && <ChevronDown />}
                    </button>
                  )}
                  {item.children && (
                    <div className="absolute left-0 top-full mt-0 invisible opacity-0 group-hover:visible group-hover:opacity-100 hover:visible hover:opacity-100 pointer-events-none group-hover:pointer-events-auto hover:pointer-events-auto min-w-[200px] bg-white shadow-lg rounded-lg z-50 border border-gray-100 transition-all duration-200">
                      <div className="flex flex-col py-2">
                        {item.children.map((child: any) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className="px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200 font-medium text-sm xl:text-base whitespace-nowrap"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
            {/* Right: Social Media Images */}
            <div className="flex-shrink-0 flex items-center space-x-2">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`group rounded-full overflow-hidden w-8 h-8 flex items-center justify-center bg-white shadow-md transition-all duration-200 hover:ring-2 ${social.hoverColor}`}
                  aria-label={social.label}
                >
                  <Image
                    src={social.image}
                    alt={social.label}
                    width={20}
                    height={20}
                    className="w-5 h-5 object-contain"
                  />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Mobile and Tablet Navigation */}
          <div className="lg:hidden flex justify-between items-center w-full">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/images/logo/logo.png"
                alt="JKKN Matriculation Hr. Sec. School Logo"
                width={130}
                height={44}
                priority
                className="h-11 sm:h-12 w-auto object-contain"
              />
            </Link>
            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200 p-2 rounded-md hover:bg-gray-100"
              aria-label="Toggle mobile menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden fixed left-0 right-0 top-16 bottom-0 bg-white shadow-lg mobile-nav z-40"
          >
            <div className="flex flex-col h-full px-4 py-4 overflow-y-auto">
              {navItems.map((item: any) => (
                <div key={item.name} className="relative last:border-b-0">
                  {item.href ? (
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center justify-between text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium text-base py-3 px-2"
                    >
                      {item.name}
                      {item.children && <ChevronDown />}
                    </Link>
                  ) : (
                    <button
                      type="button"
                      onClick={() => toggleDropdown(item.name)}
                      className="flex items-center justify-between text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium text-base py-3 px-2 w-full text-left bg-transparent border-none cursor-pointer"
                    >
                      {item.name}
                      {item.children && (
                        <svg 
                          className={`ml-1 w-4 h-4 text-gray-400 transition-transform duration-200 ${
                            activeDropdown === item.name ? 'rotate-180' : ''
                          }`} 
                          fill="none" 
                          stroke="currentColor" 
                          strokeWidth="2" 
                          viewBox="0 0 24 24" 
                          aria-hidden="true"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      )}
                    </button>
                  )}
                  {item.children && activeDropdown === item.name && (
                    <div className="ml-4 pb-2 space-y-1">
                      {item.children.map((child: any) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          onClick={() => {
                            setIsOpen(false);
                            setActiveDropdown(null);
                          }}
                          className="block px-2 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200 font-medium text-sm rounded-md"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              {/* Social Media Images for Mobile */}
              <div className="flex justify-center space-x-4 pt-6 mt-auto">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={`group rounded-full overflow-hidden w-10 h-10 flex items-center justify-center bg-white shadow-md transition-all duration-200 hover:ring-2 ${social.hoverColor}`}
                    aria-label={social.label}
                  >
                    <Image
                      src={social.image}
                      alt={social.label}
                      width={24}
                      height={24}
                      className="w-6 h-6 object-contain"
                    />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar; 
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { 
  GraduationCap, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Mail,
  Phone,
  MapPin,
  Youtube
} from "lucide-react";
import Image from "next/image";

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/jkknschool", label: "Facebook" },
    { icon: Twitter, href: "https://www.twitter.com/jkknschool", label: "Twitter" },
    { icon: Instagram, href: "https://www.instagram.com/jkkn_school", label: "Instagram" },
    { icon: Linkedin, href: "https://www.linkedin.com/school/jkknschool", label: "LinkedIn" },
    { icon: Youtube, href: "https://www.youtube.com/@JKKNINSTITUTIONS", label: "YouTube" },
  ];

  const institutions = [
    { name: "JKKN Dental College and Hospital", href: "https://dental.jkkn.ac.in/" },
    { name: "JKKN College of Allied Health Science", href: "https://ahs.jkkn.ac.in/" },
    { name: "JKKN College of Pharmacy", href: "https://pharmacy.jkkn.ac.in/" },
    { name: "Sresakthimayeil Institute of Nursing and Research", href: "https://nursing.jkkn.ac.in/" },
    { name: "JKKN College of Education", href: "https://edu.jkkn.ac.in/" },
    { name: "JKKN College of Arts and Science (Autonomous)", href: "https://cas.jkkn.ac.in/" },
    { name: "JKKN College of Engineering and Technology", href: "https://engg.jkkn.ac.in/" },
    { name: "JKKN Matriculation Higher Secondary School", href: "https://school.jkkn.ac.in/" },
    { name: "Nattraja Vidhyalya", href: "https://nv.jkkn.ac.in/" }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* School Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Image
                src="/images/logo/logo.png"
                alt="JKKN Matriculation Hr. Sec. School Logo"
                width={120}
                height={40}
                priority
                className="h-10 w-auto object-contain"
              />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Modern Interactive matric higher secondary school with professional education, 
              state-of-the-art facilities, and comprehensive academic programs.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
            
            {/* Contact Info */}
            <div className="space-y-3 pt-4 border-t border-gray-800">
              <div className="flex items-center space-x-3">
                <MapPin className="h-10 w-10 text-blue-400" />
                <span className="text-gray-300 text-sm">
                JKKN Matriculation Higher Secondary, School,Thiruvalluvar Nagar,Kumarapalayam, Namakkal District,Tamil Nadu – 638 183
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300 text-sm">
                  +9199658 91999
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300 text-sm">
                  school@jkkn.org
                </span>
              </div>
            </div>
          </div>

          {/* Our Institutions */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Our Institutions</h3>
            <ul className="space-y-2">
              {institutions.map((institution, index) => (
                <li key={index}>
                  <Link href={institution.href} className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm">
                    {institution.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Google Maps */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Location</h3>
            <div className="w-full h-64 rounded-lg overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3910.497510775474!2d77.706566!3d11.443972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba96829ddf8ff77%3A0xb8a823563e20d9fe!2sJKKN%20Matric%20Higher%20Secondary%20School!5e0!3m2!1sen!2sin!4v1752464763079!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{border:0}} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="JKKN Matric Higher Secondary School Location"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2025 All rights reserved.  <a className="text-green-400" href="https://jicate.solutions/" target="_blank" rel="noopener noreferrer">jicate solutions</a>
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href="http://localhost:3000/privacy-policy" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 
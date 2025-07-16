'use client';

import React from 'react';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { GraduationCap, BookOpen, Lightbulb } from 'lucide-react';

// Define floating animation
const floatingAnimation = {
  initial: { y: 0 },
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: [0.4, 0, 0.6, 1] as const
    }
  }
};

// Custom CSS Animations
const customStyles = `
  @keyframes bounce-subtle {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-5px);
    }
  }

  .animate-bounce-subtle {
    animation: bounce-subtle 2s ease-in-out infinite;
  }

  @keyframes glow {
    0%, 100% {
      box-shadow: 0 0 20px rgba(59, 130, 246, 0.4);
    }
    50% {
      box-shadow: 0 0 40px rgba(59, 130, 246, 0.6);
    }
  }

  .animate-glow {
    animation: glow 3s ease-in-out infinite;
  }
`;

// Loading components
const HeaderSkeleton = () => (
  <div className="fixed top-0 left-0 right-0 z-50 h-20 bg-white shadow-lg animate-pulse">
    <div className="flex items-center justify-between h-full px-8">
      <div className="flex items-center space-x-3">
        <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
        <div className="h-6 w-32 bg-gray-300 rounded"></div>
      </div>
      <div className="h-6 w-6 bg-gray-300 rounded"></div>
    </div>
  </div>
);

const FooterSkeleton = () => (
  <div className="bg-gray-900 text-white py-16">
    <div className="max-w-7xl mx-auto px-4 animate-pulse">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="space-y-4">
            <div className="h-6 w-32 bg-gray-700 rounded"></div>
            <div className="space-y-2">
              <div className="h-4 w-full bg-gray-700 rounded"></div>
              <div className="h-4 w-3/4 bg-gray-700 rounded"></div>
              <div className="h-4 w-1/2 bg-gray-700 rounded"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// Dynamically import components with SSR disabled
const Header = dynamic(() => import('../components/Header'), {
  ssr: false,
  loading: () => <HeaderSkeleton />
});
const Footer = dynamic(() => import('../components/Footer'), {
  ssr: false,
  loading: () => <FooterSkeleton />
});

export default function Sports() {
  const facilities = [
    
    
    {
      title: "Indoor Games Room",
      description: "Modern facility equipped with table tennis tables, chess boards, carrom boards, and other indoor games",
      image: "/images/sports/indoor.png"
    },
    {
      title: "Outdoor Games Area",
      description: "Dedicated spaces for football, handball, and other outdoor recreational activities",
      image: "/images/sports/outdoor.jpg"
    },
    {
      title: "Yoga Center",
      description: "Serene space for yoga, meditation, and mindfulness practices with professional instructors",
      image: "/images/sports/yoha.webp"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <style jsx>{customStyles}</style>

      <Header />

      <br/><br/><br/><br/>
      {/* Hero Section with Left Content and Right Animation */}
      <section className="pt-16 pb-8 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-indigo-50 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6 sm:space-y-8 order-2 lg:order-1"
            >
              <div className="space-y-4 sm:space-y-6">
                <div className="inline-block">
                  <motion.span 
                    className="inline-flex items-center px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-sm font-semibold bg-blue-100 text-blue-800"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <GraduationCap className="w-4 h-4 mr-2" />
                    <span className="hidden sm:inline">Sports Ground</span>
                    <span className="sm:hidden">Modern Spaces</span>
                  </motion.span>
                </div>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                  <span className="block sm:inline">Experience Our</span>
                  <span className="text-blue-600 block sm:inline"> Sports Ground</span>
                </h1>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl">
                Welcome to the JKKN Matriculation Higher Secondary School Sports Ground, a place where champions are born and dreams soar high! Our facility boasts state-of-the-art amenities, exceptional coaching, and a thriving sports culture that fosters a sense of camaraderie and an unwavering passion for sports. We are committed to nurturing the holistic development of our students, recognizing that sports are instrumental in enhancing their physical, mental, and emotional well-being.
                </p>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl">
                At our matriculation school, we firmly believe in providing students with a well-rounded education, and sports play a pivotal role in achieving this goal. Our sports ground offers an extensive array of opportunities for students to discover and cultivate their athletic talents. Whether it’s through competitive events or recreational activities, our students can reach their highest potential while creating enduring memories.

                </p>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl">
                Our commitment to sports excellence is unwavering, and we aim to provide a platform for students to compete at the highest levels of their chosen sports. Join us at the JKKN Matriculation Higher Secondary School Sports Ground, where we empower young athletes to achieve greatness, develop lifelong skills, and build a strong foundation for their future success.

                </p>
            
              </div>

              
            </motion.div>

            {/* Right Animation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative h-[350px] sm:h-[400px] lg:h-[450px] order-1 lg:order-2 max-w-[400px] mx-auto w-full"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl sm:rounded-3xl overflow-hidden">
                <motion.div
                  variants={floatingAnimation}
                  initial="initial"
                  animate="animate"
                  className="relative w-full h-full"
                >
                  <Image
                    src="/images/sports/sports.png"
                    alt="Student learning illustration"
                    fill
                    style={{ 
                      objectFit: 'contain', 
                      objectPosition: 'center center',
                      padding: '1.5rem'
                    }}
                    priority
                    sizes="(max-width: 640px) 350px, (max-width: 1024px) 400px, 450px"
                  />
                </motion.div>
                {/* Decorative Elements - Adjusted size */}
                <motion.div
                  animate={{
                    rotate: [0, 360],
                    transition: { duration: 20, repeat: Infinity, ease: "linear" }
                  }}
                  className="hidden sm:block absolute top-8 right-8 w-12 sm:w-16 h-12 sm:h-16 bg-blue-200 rounded-full opacity-20"
                />
                <motion.div
                  animate={{
                    rotate: [360, 0],
                    transition: { duration: 15, repeat: Infinity, ease: "linear" }
                  }}
                  className="hidden sm:block absolute bottom-8 left-8 w-16 sm:w-20 h-16 sm:h-20 bg-indigo-200 rounded-full opacity-20"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-16 text-gray-800">
            Sports Facilities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {facilities.map((facility, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg"
              >
                <div className="relative h-64">
                  <Image
                    src={facility.image}
                    alt={facility.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2">{facility.title}</h3>
                  <p className="text-gray-600">{facility.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
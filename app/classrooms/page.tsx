'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import { 
  Layout,
  Sun,
  Monitor,
  Users,
  GraduationCap,
  BookOpen,
  Lightbulb
} from 'lucide-react';

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

const Header = dynamic(() => import('../components/Header'), { 
  ssr: false,
  loading: () => <HeaderSkeleton />
});
const Footer = dynamic(() => import('../components/Footer'), { 
  ssr: false,
  loading: () => <FooterSkeleton />
});

export default function Classrooms() {
  const classroomFeatures = [
    {
      icon: <Layout className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />,
      title: "Modern Layout",
      description: "Ergonomically designed spaces that promote collaborative learning and individual focus",
      color: "from-blue-400 to-purple-500"
    },
    {
      icon: <Sun className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />,
      title: "Natural Lighting",
      description: "Large windows providing abundant natural light, creating an optimal learning environment",
      color: "from-yellow-400 to-orange-500"
    },
    {
      icon: <Monitor className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />,
      title: "Smart Technology",
      description: "Interactive whiteboards and digital learning tools integrated into every classroom",
      color: "from-green-400 to-teal-500"
    },
    {
      icon: <Users className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />,
      title: "Flexible Seating",
      description: "Adaptable furniture arrangements to support various teaching and learning styles",
      color: "from-indigo-400 to-blue-500"
    }
  ];

  const floatingAnimation = {
    initial: { y: 0 },
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: [0.4, 0, 0.6, 1] as const
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
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
                    <span className="hidden sm:inline">Modern Learning Spaces</span>
                    <span className="sm:hidden">Modern Spaces</span>
                  </motion.span>
                </div>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                  <span className="block sm:inline">Experience Our</span>
                  <span className="text-blue-600 block sm:inline"> Modern Classrooms</span>
                </h1>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl">
                  Welcome to our dynamic classrooms, where learning comes to life! Our classrooms are vibrant spaces where students are empowered to explore, discover, and grow.
                </p>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl">
                  With modern technology, interactive teaching methods, and a supportive learning environment, our classrooms foster creativity, critical thinking, and active participation.
                </p>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl">
                  Our experienced educators are committed to providing a stimulating and inclusive learning experience, equipping students with the skills and knowledge they need to excel in the 21st century.
                </p>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl">
                  Join us in our classrooms and embark on an exciting educational journey that prepares you for success!
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="flex items-center space-x-3 text-gray-700"
                >
                  <div className="p-2 bg-white rounded-lg shadow-md">
                    <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                  </div>
                  <span className="font-medium text-xs sm:text-sm">Interactive Learning</span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="flex items-center space-x-3 text-gray-700"
                >
                  <div className="p-2 bg-white rounded-lg shadow-md">
                    <Lightbulb className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-500" />
                  </div>
                  <span className="font-medium text-xs sm:text-sm">Smart Environment</span>
                </motion.div>
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
                    src="/images/classroom.png"
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

      {/* Features Grid with Enhanced Design */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-8 sm:mb-12 text-gray-900">
            Classroom Features
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {classroomFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group p-6 sm:p-8 rounded-xl sm:rounded-2xl bg-white shadow-md hover:shadow-lg sm:shadow-lg sm:hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200`}
              >
                <div className={`mb-4 sm:mb-6 p-3 sm:p-4 rounded-lg sm:rounded-xl bg-gradient-to-br ${feature.color} text-white transform group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3 text-gray-900">{feature.title}</h3>
                <p className="text-xs sm:text-sm text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 
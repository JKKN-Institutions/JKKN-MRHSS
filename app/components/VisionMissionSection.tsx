"use client";

import { motion } from "framer-motion";
import { Eye, Target } from "lucide-react";
import { useEffect, useState } from "react";

interface VisionMissionSectionProps {
  className?: string;
  showHeader?: boolean;
  showCTA?: boolean;
}

export default function VisionMissionSection({ 
  className = "", 
  showHeader = true, 
  showCTA = true 
}: VisionMissionSectionProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section className={`py-16 lg:py-24 ${className}`}>
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          {/* Header Section */}
          {showHeader && (
            <motion.div
              variants={cardVariants}
              className="text-center mb-16"
            >
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-6"
              >
                Our Core Beliefs
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              >
                Discover the driving force behind JKKN Matric Higher Secondary School - 
                our vision for the future and our mission to shape tomorrow's leaders.
              </motion.p>
            </motion.div>
          )}

          {/* Vision & Mission Cards */}
          <motion.div
            variants={cardVariants}
            className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-16"
          >
            {/* Vision Card */}
            <motion.div
              variants={cardVariants}
              className="group relative"
            >
              <div className="relative bg-white/80 backdrop-blur-xl rounded-2xl p-8 lg:p-10 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                {/* Glassmorphism effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 rounded-2xl"></div>
                
                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    variants={iconVariants}
                    className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl mb-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                  >
                    <Eye className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Content */}
                  <motion.h3
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="text-3xl font-bold text-gray-900 mb-4"
                  >
                    Our Vision
                  </motion.h3>

                  <motion.p
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 1.0 }}
                    className="text-gray-600 leading-relaxed max-w-md"
                  >
                    To be the leading educational institution that empowers students with 
                    innovative learning experiences, fostering creativity, critical thinking, 
                    and character development for a sustainable future.
                  </motion.p>
                </div>
              </div>
            </motion.div>

            {/* Mission Card */}
            <motion.div
              variants={cardVariants}
              className="group relative"
            >
              <div className="relative bg-white/80 backdrop-blur-xl rounded-2xl p-8 lg:p-10 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                {/* Glassmorphism effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-pink-50/50 rounded-2xl"></div>
                
                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    variants={iconVariants}
                    className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl mb-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                  >
                    <Target className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Content */}
                  <motion.h3
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="text-3xl font-bold text-gray-900 mb-4"
                  >
                    Our Mission
                  </motion.h3>

                  <motion.p
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 1.0 }}
                    className="text-gray-600 leading-relaxed max-w-md"
                  >
                    To provide excellence in education through innovative teaching methods, 
                    state-of-the-art facilities, and a nurturing environment that inspires 
                    students to achieve their full potential and become responsible global citizens.
                  </motion.p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Divider */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="flex items-center justify-center mb-16"
          >
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gray-300 to-transparent rounded-full"></div>
            <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-4"></div>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gray-300 to-transparent rounded-full"></div>
          </motion.div>

          {/* CTA Section */}
          {showCTA && (
            <motion.div
              variants={cardVariants}
              className="text-center"
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.4 }}
                className="space-y-6"
              >
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Ready to Join Our Journey?
                </h3>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                  >
                    Learn More About Us
                    <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center px-8 py-4 bg-white/80 backdrop-blur-sm text-gray-900 font-semibold rounded-xl shadow-lg hover:shadow-xl border border-gray-200/50 transition-all duration-300 group"
                  >
                    Meet Our Team
                    <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
} 
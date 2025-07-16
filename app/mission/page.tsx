'use client';

import React from 'react';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import { 
  Heart, 
  Target, 
  Star, 
  Users, 
  BookOpen, 
  Award,
  Shield,
  Globe,
  Lightbulb,
  TreePine,
  Handshake,
  Zap
} from 'lucide-react';

// Custom CSS Animations
const customStyles = `
  @keyframes gradient-xy {
    0%, 100% {
      background-size: 400% 400%;
      background-position: left center;
    }
    50% {
      background-size: 200% 200%;
      background-position: right center;
    }
  }
  
  @keyframes gradient-xy-reverse {
    0%, 100% {
      background-size: 300% 300%;
      background-position: right center;
    }
    50% {
      background-size: 250% 250%;
      background-position: left center;
    }
  }
  
  @keyframes float {
    0%, 100% {
      transform: translateY(0px) rotate(0deg);
    }
    50% {
      transform: translateY(-20px) rotate(180deg);
    }
  }
  
  @keyframes pulse-glow {
    0%, 100% {
      box-shadow: 0 0 20px rgba(59, 130, 246, 0.4);
    }
    50% {
      box-shadow: 0 0 40px rgba(59, 130, 246, 0.8);
    }
  }
  
  .animate-gradient-xy {
    animation: gradient-xy 15s ease infinite;
  }
  
  .animate-gradient-xy-reverse {
    animation: gradient-xy-reverse 20s ease infinite;
  }
  
  .animate-float {
    animation: float 6s ease-in-out infinite;
  }
  
  .animate-pulse-glow {
    animation: pulse-glow 3s ease-in-out infinite;
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

// Dynamically import components with SSR disabled to avoid hydration mismatches
const Navbar = dynamic(() => import('../components/Header'), { 
  ssr: false,
  loading: () => <HeaderSkeleton />
});
const Footer = dynamic(() => import('../components/Footer'), { 
  ssr: false,
  loading: () => <FooterSkeleton />
});

export default function MissionAndCoreValues() {
  const missionPoints = [
    {
      icon: <Star className="w-8 h-8" />,
      title: "Academic Excellence",
      description: "World-class education nurturing critical thinking and creativity.",
      color: "from-yellow-400 to-orange-500"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Character Development",
      description: "Building strong moral values and ethical leadership.",
      color: "from-pink-400 to-red-500"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Inclusive Community",
      description: "Creating a supportive and diverse environment.",
      color: "from-blue-400 to-purple-500"
    }
  ];

  const coreValues = [
    {
      icon: <Shield className="w-10 h-10" />,
      title: "Integrity",
      description: "Upholding honesty and ethical behavior."
    },
    {
      icon: <BookOpen className="w-10 h-10" />,
      title: "Excellence",
      description: "Striving for continuous improvement."
    },
    {
      icon: <Heart className="w-10 h-10" />,
      title: "Compassion",
      description: "Fostering empathy and understanding."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <style jsx>{customStyles}</style>
      
      <Navbar />
      
      {/* Main Content Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-slate-900 to-blue-900 p-8">
                <svg
                  viewBox="0 0 400 300"
                  className="w-full h-full"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Background Stars */}
                  {[
                    { cx: 32.5, cy: 88.8, r: 1.0 },
                    { cx: 62.8, cy: 45.3, r: 1.5 },
                    { cx: 262.1, cy: 82.7, r: 0.6 },
                    { cx: 253.2, cy: 146.6, r: 1.4 },
                    { cx: 241.9, cy: 30.5, r: 1.2 },
                    { cx: 194.5, cy: 130.0, r: 2.0 },
                    { cx: 28.3, cy: 139.3, r: 1.0 },
                    { cx: 62.5, cy: 60.5, r: 1.1 },
                    { cx: 72.7, cy: 131.9, r: 1.6 },
                    { cx: 274.6, cy: 36.1, r: 2.0 },
                    { cx: 327.6, cy: 94.9, r: 1.1 },
                    { cx: 243.7, cy: 77.9, r: 1.7 },
                    { cx: 196.1, cy: 62.5, r: 0.9 },
                    { cx: 118.4, cy: 38.0, r: 1.0 },
                    { cx: 371.7, cy: 10.3, r: 1.6 },
                    { cx: 159.9, cy: 127.7, r: 1.1 },
                    { cx: 349.7, cy: 55.4, r: 1.5 },
                    { cx: 257.1, cy: 72.0, r: 0.7 },
                    { cx: 162.4, cy: 45.7, r: 1.5 },
                    { cx: 300.7, cy: 23.3, r: 1.6 },
                    { cx: 172.0, cy: 19.5, r: 0.6 },
                    { cx: 287.8, cy: 50.8, r: 0.5 },
                    { cx: 144.9, cy: 99.8, r: 1.7 },
                    { cx: 258.1, cy: 125.5, r: 1.4 },
                    { cx: 98.0, cy: 59.3, r: 0.7 },
                    { cx: 319.3, cy: 111.3, r: 1.1 },
                    { cx: 356.1, cy: 120.2, r: 1.3 },
                    { cx: 109.3, cy: 23.1, r: 0.7 },
                    { cx: 104.5, cy: 115.1, r: 1.2 },
                    { cx: 354.0, cy: 110.4, r: 1.7 }
                  ].map((star, i) => (
                    <motion.circle
                      key={`star-${i}`}
                      cx={star.cx}
                      cy={star.cy}
                      r={star.r}
                      fill="white"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ 
                        opacity: [0.2, 1, 0.2],
                        scale: [0.8, 1.2, 0.8]
                      }}
                      transition={{
                        duration: Math.random() * 2 + 1,
                        repeat: Infinity,
                        delay: Math.random() * 2
                      }}
                    />
                  ))}

                  {/* Moon */}
                  <motion.g
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                  >
                    <circle
                      cx="320"
                      cy="60"
                      r="25"
                      fill="url(#moonGradient)"
                    />
                    <motion.circle
                      cx="310"
                      cy="50"
                      r="8"
                      fill="#1E293B"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 1, delay: 0.5 }}
                    />
                  </motion.g>

                  {/* Clouds */}
                  {[...Array(5)].map((_, i) => (
                    <motion.g
                      key={`cloud-${i}`}
                      initial={{ x: -100, opacity: 0 }}
                      animate={{ 
                        x: [400, -100],
                        opacity: [0, 1, 1, 0]
                      }}
                      transition={{
                        duration: 20 + i * 5,
                        repeat: Infinity,
                        delay: i * 2
                      }}
                    >
                      <path
                        d={`M${i * 80} 80 
                            Q${i * 80 + 20} 70 ${i * 80 + 40} 80 
                            Q${i * 80 + 60} 90 ${i * 80 + 80} 80 
                            Q${i * 80 + 60} 90 ${i * 80 + 40} 100 
                            Q${i * 80 + 20} 90 ${i * 80} 100 Z`}
                        fill="rgba(255, 255, 255, 0.2)"
                      />
                    </motion.g>
                  ))}

                  {/* Rocket */}
                  <motion.g
                    initial={{ y: 300, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                  >
                    {/* Rocket Body */}
                    <path
                      d="M180 200 L220 200 L220 150 L200 120 L180 150 Z"
                      fill="url(#rocketGradient)"
                    />
                    {/* Rocket Window */}
                    <circle
                      cx="200"
                      cy="160"
                      r="8"
                      fill="#E2E8F0"
                    />
                    {/* Rocket Fins */}
                    <path
                      d="M180 200 L160 220 L180 220 Z"
                      fill="#3B82F6"
                    />
                    <path
                      d="M220 200 L240 220 L220 220 Z"
                      fill="#3B82F6"
                    />
                    {/* Rocket Flame */}
                    <motion.path
                      d="M190 220 L200 260 L210 220 Z"
                      fill="url(#flameGradient)"
                      animate={{ 
                        scale: [1, 1.2, 1],
                        opacity: [0.8, 1, 0.8]
                      }}
                      transition={{ duration: 0.5, repeat: Infinity }}
                    />
                  </motion.g>

                  {/* Mission Label */}
                  <motion.text
                    x="200"
                    y="280"
                    textAnchor="middle"
                    fill="white"
                    fontSize="24"
                    fontWeight="bold"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1 }}
                  >
                    Mission
                  </motion.text>

                  {/* Gradients */}
                  <defs>
                    <linearGradient id="moonGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#F8FAFC" />
                      <stop offset="100%" stopColor="#E2E8F0" />
                    </linearGradient>
                    <linearGradient id="rocketGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3B82F6" />
                      <stop offset="100%" stopColor="#2563EB" />
                    </linearGradient>
                    <linearGradient id="flameGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#FCD34D" />
                      <stop offset="50%" stopColor="#F59E0B" />
                      <stop offset="100%" stopColor="#DC2626" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              {/* <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl -z-10"></div> */}
            </motion.div>

            {/* Right Column - Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h1 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">
                  Our Mission
                </h1>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                  To empower students with knowledge, skills, and values for a successful future. 
                  We believe in creating an environment where every student can thrive and reach their full potential.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-lg md:text-xl font-bold text-gray-800">What We Stand For</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {missionPoints.slice(0, 2).map((point, index) => (
                    <div key={point.title} className="bg-white rounded-xl p-4 shadow-md">
                      <div className={`w-8 h-8 md:w-10 md:h-10 rounded-lg bg-gradient-to-br ${point.color} flex items-center justify-center mb-3`}>
                        {React.cloneElement(point.icon, { className: "w-5 h-5 md:w-6 md:h-6 text-white" })}
                      </div>
                      <h3 className="font-semibold text-gray-800 mb-1 text-sm md:text-base">{point.title}</h3>
                      <p className="text-xs md:text-sm text-gray-600">{point.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8 order-2 lg:order-1"
            >
              <div>
                <h1 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">
                  Our Vision
                </h1>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                  To be a beacon of educational excellence, shaping future leaders who will make a positive impact on society. 
                  We envision a world where every student has the opportunity to reach for the stars and achieve their dreams.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-lg md:text-xl font-bold text-gray-800">Looking Forward</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white rounded-xl p-4 shadow-md">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center mb-3">
                      <Globe className="w-5 h-5 md:w-6 md:h-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-gray-800 mb-1 text-sm md:text-base">Global Impact</h3>
                    <p className="text-xs md:text-sm text-gray-600">Creating leaders who will shape the future of our world.</p>
                  </div>
                  <div className="bg-white rounded-xl p-4 shadow-md">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-gradient-to-br from-blue-400 to-cyan-500 flex items-center justify-center mb-3">
                      <Lightbulb className="w-5 h-5 md:w-6 md:h-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-gray-800 mb-1 text-sm md:text-base">Innovation</h3>
                    <p className="text-xs md:text-sm text-gray-600">Fostering creativity and forward-thinking solutions.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative order-1 lg:order-2"
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-slate-900 to-purple-900 p-6 md:p-8">
                <svg
                  viewBox="0 0 400 300"
                  className="w-full h-full"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Background Stars */}
                  {[
                    { cx: 177.1, cy: 43.8, r: 1.7 },
                    { cx: 340.2, cy: 240.3, r: 1.2 },
                    { cx: 157.6, cy: 249.4, r: 1.7 },
                    { cx: 43.9, cy: 128.4, r: 1.6 },
                    { cx: 357.6, cy: 267.8, r: 1.6 },
                    { cx: 233.5, cy: 146.7, r: 1.3 },
                    { cx: 68.8, cy: 0.3, r: 1.8 },
                    { cx: 71.9, cy: 50.6, r: 0.9 },
                    { cx: 331.2, cy: 255.5, r: 1.6 },
                    { cx: 352.9, cy: 248.8, r: 1.7 },
                    { cx: 287.3, cy: 120.4, r: 0.9 },
                    { cx: 297.2, cy: 279.0, r: 1.6 },
                    { cx: 180.3, cy: 294.3, r: 1.9 },
                    { cx: 307.5, cy: 198.4, r: 0.7 },
                    { cx: 252.0, cy: 263.7, r: 1.9 },
                    { cx: 26.4, cy: 192.1, r: 0.8 },
                    { cx: 199.6, cy: 108.5, r: 0.9 },
                    { cx: 263.5, cy: 295.2, r: 0.7 },
                    { cx: 191.2, cy: 42.8, r: 1.4 },
                    { cx: 293.7, cy: 39.5, r: 0.6 },
                    { cx: 36.1, cy: 183.0, r: 1.2 },
                    { cx: 55.3, cy: 163.4, r: 1.4 },
                    { cx: 206.9, cy: 262.4, r: 1.2 },
                    { cx: 245.1, cy: 97.5, r: 0.9 },
                    { cx: 31.0, cy: 96.5, r: 0.7 },
                    { cx: 94.0, cy: 146.9, r: 1.7 },
                    { cx: 129.2, cy: 210.1, r: 1.3 },
                    { cx: 283.8, cy: 132.3, r: 1.1 },
                    { cx: 117.3, cy: 269.4, r: 1.1 },
                    { cx: 328.2, cy: 105.4, r: 1.9 }
                  ].map((star, i) => (
                    <motion.circle
                      key={`star-${i}`}
                      cx={star.cx}
                      cy={star.cy}
                      r={star.r}
                      fill="white"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ 
                        opacity: [0.2, 1, 0.2],
                        scale: [0.8, 1.2, 0.8]
                      }}
                      transition={{
                        duration: Math.random() * 2 + 1,
                        repeat: Infinity,
                        delay: Math.random() * 2
                      }}
                    />
                  ))}

                  {/* Binoculars with Eyes */}
                  <motion.g
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1 }}
                  >
                    {/* Binoculars Body */}
                    <path
                      d="M150 150 L250 150 L260 160 L240 160 Z"
                      fill="url(#binocularsGradient)"
                    />
                    {/* Left Lens */}
                    <motion.circle
                      cx="180"
                      cy="150"
                      r="20"
                      fill="none"
                      stroke="url(#lensGradient)"
                      strokeWidth="3"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1.5 }}
                    />
                    {/* Right Lens */}
                    <motion.circle
                      cx="220"
                      cy="150"
                      r="20"
                      fill="none"
                      stroke="url(#lensGradient)"
                      strokeWidth="3"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1.5, delay: 0.2 }}
                    />
                    {/* Left Eye */}
                    <motion.g
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 1 }}
                    >
                      <circle cx="180" cy="150" r="8" fill="#1E293B" />
                      <circle cx="180" cy="150" r="4" fill="white" />
                      <circle cx="180" cy="150" r="2" fill="#1E293B" />
                    </motion.g>
                    {/* Right Eye */}
                    <motion.g
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 1.2 }}
                    >
                      <circle cx="220" cy="150" r="8" fill="#1E293B" />
                      <circle cx="220" cy="150" r="4" fill="white" />
                      <circle cx="220" cy="150" r="2" fill="#1E293B" />
                    </motion.g>
                    {/* Bridge */}
                    <path
                      d="M190 150 L210 150"
                      stroke="#4B5563"
                      strokeWidth="4"
                    />
                  </motion.g>

                  {/* Sparkles */}
                  {[...Array(12)].map((_, i) => (
                    <motion.path
                      key={`sparkle-${i}`}
                      d={`M${200 + Math.cos(i * 30) * 60} ${150 + Math.sin(i * 30) * 60} 
                          L${200 + Math.cos(i * 30) * 65} ${150 + Math.sin(i * 30) * 65}
                          L${200 + Math.cos(i * 30) * 55} ${150 + Math.sin(i * 30) * 55}
                          Z`}
                      fill="url(#sparkleGradient)"
                      initial={{ scale: 0, opacity: 0, rotate: 0 }}
                      animate={{ 
                        scale: [0, 1, 0],
                        opacity: [0, 1, 0],
                        rotate: [0, 180, 360]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.2,
                        ease: "easeInOut"
                      }}
                    />
                  ))}

                  {/* Vision Label */}
                  <motion.text
                    x="200"
                    y="280"
                    textAnchor="middle"
                    fill="white"
                    fontSize="20"
                    fontWeight="bold"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1 }}
                  >
                    Vision
                  </motion.text>

                  {/* Gradients */}
                  <defs>
                    <linearGradient id="binocularsGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#8B5CF6" />
                      <stop offset="100%" stopColor="#6D28D9" />
                    </linearGradient>
                    <linearGradient id="lensGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#F8FAFC" />
                      <stop offset="100%" stopColor="#E2E8F0" />
                    </linearGradient>
                    <linearGradient id="sparkleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#FCD34D" />
                      <stop offset="50%" stopColor="#F59E0B" />
                      <stop offset="100%" stopColor="#DC2626" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              {/* <div className="absolute -bottom-6 -right-6 w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl -z-10"></div> */}
            </motion.div>
          </div>
        </div>
      </section>

     
      
      <Footer />
    </div>
  );
} 
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import { 
  Building, 
  Monitor, 
  Shield, 
  Leaf, 
  Wifi, 
  Camera,
  FlaskConical,
  BookOpen,
  Dumbbell,
  Bus,
  Lightbulb,
  Wind,
  Car,
  Zap,
  Server,
  Settings
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
const Header = dynamic(() => import('../components/Header'), { 
  ssr: false,
  loading: () => <HeaderSkeleton />
});
const Footer = dynamic(() => import('../components/Footer'), { 
  ssr: false,
  loading: () => <FooterSkeleton />
});

export default function InfrastructureOverview() {
  const infrastructureHighlights = [
    {
      icon: <Building className="w-8 h-8" />,
      title: "Modern Campus",
      description: "State-of-the-art buildings with contemporary architecture designed for optimal learning environments and student comfort.",
      color: "from-blue-400 to-purple-500"
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "Smart Technology",
      description: "Cutting-edge digital infrastructure with smart boards, high-speed internet, and integrated learning management systems.",
      color: "from-green-400 to-teal-500"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Safety & Security",
      description: "Comprehensive security systems with 24/7 monitoring, access control, and emergency response protocols for student safety.",
      color: "from-red-400 to-pink-500"
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Eco-Friendly Design",
      description: "Sustainable infrastructure with energy-efficient systems, renewable energy sources, and environmentally conscious design.",
      color: "from-emerald-400 to-green-500"
    }
  ];

  const facilitiesData = [
    {
      category: "Academic Facilities",
      icon: <BookOpen className="w-12 h-12" />,
      color: "from-blue-500 to-purple-600",
      facilities: [
        {
          name: "Smart Classrooms",
          description: "Interactive whiteboards, projection systems, and flexible seating arrangements",
          count: "45 Rooms"
        },
        {
          name: "Science Laboratories",
          description: "Fully equipped physics, chemistry, and biology labs with modern equipment",
          count: "12 Labs"
        },
        {
          name: "Computer Labs",
          description: "High-performance computers with latest software and programming tools",
          count: "8 Labs"
        },
        {
          name: "Library & Media Center",
          description: "Digital and physical resources with quiet study areas and collaboration spaces",
          count: "3 Floors"
        }
      ]
    },
    {
      category: "Technology Infrastructure",
      icon: <Monitor className="w-12 h-12" />,
      color: "from-cyan-500 to-blue-600",
      facilities: [
        {
          name: "High-Speed Network",
          description: "Fiber optic connectivity with 1Gbps internet throughout campus",
          count: "Campus-wide"
        },
        {
          name: "Wi-Fi Coverage",
          description: "Seamless wireless connectivity in all areas with enterprise-grade security",
          count: "100% Coverage"
        },
        {
          name: "Learning Management System",
          description: "Cloud-based platform for assignments, assessments, and communication",
          count: "24/7 Access"
        },
        {
          name: "Digital Displays",
          description: "Information kiosks and announcement boards throughout the campus",
          count: "25+ Displays"
        }
      ]
    },
    {
      category: "Sports & Recreation",
      icon: <Dumbbell className="w-12 h-12" />,
      color: "from-orange-500 to-red-600",
      facilities: [
        {
          name: "Multi-Purpose Gymnasium",
          description: "Full-size basketball court with retractable seating for 500 spectators",
          count: "2 Courts"
        },
        {
          name: "Outdoor Sports Complex",
          description: "Football field, track, tennis courts, and outdoor basketball courts",
          count: "5 Acres"
        },
        {
          name: "Swimming Pool",
          description: "Olympic-size pool with diving boards and spectator seating",
          count: "50m Pool"
        },
        {
          name: "Fitness Center",
          description: "Modern exercise equipment and weight training facilities",
          count: "2,000 sq ft"
        }
      ]
    },
    {
      category: "Safety & Security",
      icon: <Shield className="w-12 h-12" />,
      color: "from-red-500 to-pink-600",
      facilities: [
        {
          name: "CCTV Surveillance",
          description: "HD cameras with night vision covering all campus areas",
          count: "150+ Cameras"
        },
        {
          name: "Access Control",
          description: "Card-based entry systems for buildings and restricted areas",
          count: "50+ Entry Points"
        },
        {
          name: "Emergency Systems",
          description: "Fire alarms, emergency lighting, and evacuation protocols",
          count: "Campus-wide"
        },
        {
          name: "Security Personnel",
          description: "Trained security staff providing 24/7 campus monitoring",
          count: "12 Officers"
        }
      ]
    }
  ];

  const sustainabilityFeatures = [
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Solar Energy",
      description: "Rooftop solar panels generating 60% of campus energy needs",
      impact: "300 kW System"
    },
    {
      icon: <Wind className="w-8 h-8" />,
      title: "Natural Ventilation",
      description: "Passive cooling systems reducing energy consumption",
      impact: "40% Energy Savings"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "LED Lighting",
      description: "Energy-efficient LED lighting throughout campus",
      impact: "70% Power Reduction"
    },
    {
      icon: <Car className="w-8 h-8" />,
      title: "EV Charging",
      description: "Electric vehicle charging stations for staff and visitors",
      impact: "10 Charging Points"
    }
  ];

  const stats = [
    { number: "150+", label: "Classrooms & Labs", icon: <Building className="w-6 h-6" /> },
    { number: "1Gbps", label: "Internet Speed", icon: <Wifi className="w-6 h-6" /> },
    { number: "100%", label: "Wi-Fi Coverage", icon: <Monitor className="w-6 h-6" /> },
    { number: "24/7", label: "Security Monitoring", icon: <Camera className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen custom-gradient">
      {/* Custom CSS Styles */}
      <style jsx>{customStyles}</style>
      
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-cyan-600 to-purple-600 animate-gradient-xy opacity-90"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-teal-500 via-blue-600 to-indigo-700 animate-gradient-xy-reverse opacity-80"></div>
        
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
        
        <div className="relative max-w-7xl mx-auto z-10 h-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center h-full">
            {/* Left Side Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent drop-shadow-lg leading-tight">
                  Infrastructure Overview
                </h1>
                <p className="text-xl md:text-2xl text-white/90 leading-relaxed drop-shadow-md mb-8">
                  Discover our world-class facilities designed to provide an exceptional learning environment with cutting-edge technology and sustainable design.
                </p>
              </motion.div>

              {/* Infrastructure Highlight */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="bg-white/20 backdrop-blur-md rounded-2xl p-6 border border-white/30"
              >
                <div className="flex items-center mb-4">
                  <Building className="w-8 h-8 text-white mr-3" />
                  <h3 className="text-xl font-bold text-white">Modern Campus</h3>
                </div>
                <p className="text-white/90 text-lg leading-relaxed">
                  Our state-of-the-art campus spans 25 acres with modern buildings, advanced technology infrastructure, 
                  comprehensive safety systems, and sustainable design features.
                </p>
              </motion.div>

              {/* Stats Grid */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="grid grid-cols-2 gap-4"
              >
                {stats.map((stat, index) => (
                  <div key={stat.label} className="bg-white/20 backdrop-blur-md rounded-xl p-4 border border-white/30">
                    <div className="flex items-center mb-2">
                      <div className="text-white mr-2">{stat.icon}</div>
                      <div className="text-2xl font-bold text-white">{stat.number}</div>
                    </div>
                    <div className="text-white/80 text-sm">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Side Animated Illustration */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative hidden lg:block"
            >
              {/* Infrastructure Images Visualization */}
              <div className="relative w-full h-[600px]">
                {/* Central Campus Image */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full overflow-hidden shadow-2xl animate-pulse-glow border-4 border-white/50"
                >
                  <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center relative">
                    <div className="absolute inset-0 bg-black/20"></div>
                    <Building className="w-16 h-16 text-white z-10" />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent"></div>
                  </div>
                </motion.div>

                {/* Orbiting Infrastructure Images */}
                {[
                  { 
                    name: 'Smart Classroom',
                    bgColor: 'from-blue-500 to-cyan-600', 
                    icon: Monitor, 
                    delay: 0.7, 
                    radius: 150, 
                    angle: 0,
                    image: '/api/placeholder/80/80'
                  },
                  { 
                    name: 'Security System',
                    bgColor: 'from-red-500 to-pink-600', 
                    icon: Shield, 
                    delay: 0.8, 
                    radius: 150, 
                    angle: 60,
                    image: '/api/placeholder/80/80'
                  },
                  { 
                    name: 'WiFi Network',
                    bgColor: 'from-purple-500 to-indigo-600', 
                    icon: Wifi, 
                    delay: 0.9, 
                    radius: 150, 
                    angle: 120,
                    image: '/api/placeholder/80/80'
                  },
                  { 
                    name: 'Green Campus',
                    bgColor: 'from-green-500 to-emerald-600', 
                    icon: Leaf, 
                    delay: 1.0, 
                    radius: 150, 
                    angle: 180,
                    image: '/api/placeholder/80/80'
                  },
                  { 
                    name: 'Science Lab',
                    bgColor: 'from-orange-500 to-red-600', 
                    icon: FlaskConical, 
                    delay: 1.1, 
                    radius: 150, 
                    angle: 240,
                    image: '/api/placeholder/80/80'
                  },
                  { 
                    name: 'Sports Facility',
                    bgColor: 'from-yellow-500 to-orange-600', 
                    icon: Dumbbell, 
                    delay: 1.2, 
                    radius: 150, 
                    angle: 300,
                    image: '/api/placeholder/80/80'
                  },
                ].map(({ name, bgColor, icon: Icon, delay, radius, angle, image }, index) => {
                  const x = Math.cos((angle * Math.PI) / 180) * radius;
                  const y = Math.sin((angle * Math.PI) / 180) * radius;
                  
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.8, delay }}
                      className="absolute top-1/2 left-1/2 group"
                      style={{
                        transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`
                      }}
                    >
                      {/* Main Image Container */}
                      <motion.div
                        animate={{ 
                          y: [0, -10, 0],
                          rotateY: [0, 360]
                        }}
                        transition={{ 
                          y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                          rotateY: { duration: 20, repeat: Infinity, ease: "linear" }
                        }}
                        className={`w-20 h-20 rounded-xl bg-gradient-to-br ${bgColor} flex items-center justify-center shadow-xl relative overflow-hidden border-2 border-white/30`}
                      >
                        {/* Background Pattern */}
                        <div className="absolute inset-0 opacity-20">
                          <div className="w-full h-full bg-gradient-to-br from-white/30 to-transparent"></div>
                        </div>
                        
                        {/* Icon */}
                        <Icon className="w-8 h-8 text-white z-10 drop-shadow-md" />
                        
                        {/* Hover Effect */}
                        <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </motion.div>

                      {/* Label */}
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: delay + 0.3 }}
                        className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap"
                      >
                        <div className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-semibold text-gray-700 shadow-lg">
                          {name}
                        </div>
                      </motion.div>
                    </motion.div>
                  );
                })}

                {/* Additional Floating Images */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 1.5 }}
                  className="absolute top-16 right-16"
                >
                  <motion.div
                    animate={{ 
                      rotate: [0, 10, -10, 0],
                      scale: [1, 1.05, 1]
                    }}
                    transition={{ 
                      duration: 4, 
                      repeat: Infinity, 
                      ease: "easeInOut" 
                    }}
                    className="w-24 h-24 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 shadow-xl flex items-center justify-center border-2 border-white/30"
                  >
                    <Server className="w-10 h-10 text-white" />
                  </motion.div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 1.7 }}
                  className="absolute bottom-16 left-16"
                >
                  <motion.div
                    animate={{ 
                      rotate: [0, -10, 10, 0],
                      scale: [1, 1.05, 1]
                    }}
                    transition={{ 
                      duration: 5, 
                      repeat: Infinity, 
                      ease: "easeInOut" 
                    }}
                    className="w-20 h-20 rounded-2xl bg-gradient-to-br from-teal-500 to-green-600 shadow-xl flex items-center justify-center border-2 border-white/30"
                  >
                    <Settings className="w-8 h-8 text-white" />
                  </motion.div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 1.9 }}
                  className="absolute top-32 left-8"
                >
                  <motion.div
                    animate={{ 
                      y: [0, -15, 0],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{ 
                      duration: 6, 
                      repeat: Infinity, 
                      ease: "easeInOut" 
                    }}
                    className="w-16 h-16 rounded-xl bg-gradient-to-br from-pink-500 to-rose-600 shadow-xl flex items-center justify-center border-2 border-white/30"
                  >
                    <Lightbulb className="w-6 h-6 text-white" />
                  </motion.div>
                </motion.div>

                {/* Connection Lines with Enhanced Animation */}
                <svg className="absolute inset-0 w-full h-full">
                  <defs>
                    <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="rgba(255,255,255,0.6)" />
                      <stop offset="50%" stopColor="rgba(59, 130, 246, 0.4)" />
                      <stop offset="100%" stopColor="rgba(255,255,255,0.2)" />
                    </linearGradient>
                    <filter id="glow">
                      <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                      <feMerge> 
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                  </defs>
                  {Array.from({ length: 6 }, (_, i) => {
                    const angle = (i * 60 * Math.PI) / 180;
                    const x = 300 + Math.cos(angle) * 150;
                    const y = 300 + Math.sin(angle) * 150;
                    return (
                      <motion.line
                        key={i}
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: [0.3, 0.7, 0.3] }}
                        transition={{ 
                          pathLength: { duration: 1, delay: 1.5 + i * 0.1 },
                          opacity: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                        }}
                        x1="300"
                        y1="300"
                        x2={x}
                        y2={y}
                        stroke="url(#connectionGradient)"
                        strokeWidth="2"
                        strokeDasharray="8,4"
                        filter="url(#glow)"
                      />
                    );
                  })}
                </svg>

                {/* Particle Effects */}
                {Array.from({ length: 12 }, (_, i) => (
                  <motion.div
                    key={`particle-${i}`}
                    initial={{ opacity: 0 }}
                    animate={{ 
                      opacity: [0, 1, 0],
                      scale: [0, 1, 0],
                      x: [0, Math.random() * 400 - 200],
                      y: [0, Math.random() * 400 - 200]
                    }}
                    transition={{
                      duration: Math.random() * 3 + 2,
                      repeat: Infinity,
                      delay: Math.random() * 2,
                      ease: "easeOut"
                    }}
                    className="absolute top-1/2 left-1/2 w-2 h-2 bg-white/60 rounded-full"
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Infrastructure Highlights Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
              Infrastructure Highlights
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our campus infrastructure is designed with the future in mind, incorporating the latest 
              technology and sustainable practices to create an optimal learning environment.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {infrastructureHighlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${highlight.color} flex items-center justify-center mb-6 shadow-lg`}>
                  {highlight.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">{highlight.title}</h3>
                <p className="text-gray-600 leading-relaxed text-lg">{highlight.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Facilities Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
              Campus Facilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Explore our comprehensive range of facilities designed to support every aspect 
              of student life and learning.
            </p>
          </motion.div>

          <div className="space-y-16">
            {facilitiesData.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
                className="bg-white rounded-3xl p-8 shadow-xl"
              >
                <div className="flex items-center mb-8">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center mr-6 shadow-lg`}>
                    {category.icon}
                  </div>
                  <h3 className="text-3xl font-bold text-gray-800">{category.category}</h3>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {category.facilities.map((facility, facilityIndex) => (
                    <motion.div
                      key={facility.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: categoryIndex * 0.2 + facilityIndex * 0.1 }}
                      className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-6 border border-gray-100"
                    >
                      <div className="flex justify-between items-start mb-4">
                        <h4 className="text-xl font-bold text-gray-800">{facility.name}</h4>
                        <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                          {facility.count}
                        </span>
                      </div>
                      <p className="text-gray-600 leading-relaxed">{facility.description}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
              Sustainability Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We're committed to environmental responsibility with green infrastructure 
              that reduces our carbon footprint and teaches students about sustainability.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sustainabilityFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-center group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-4">{feature.description}</p>
                <div className="bg-green-50 rounded-full px-4 py-2 text-green-600 font-semibold text-sm">
                  {feature.impact}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-purple-700">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Experience Our Campus
            </h2>
            <p className="text-xl text-white/90 leading-relaxed mb-8">
              See our world-class infrastructure firsthand. Schedule a campus tour 
              and discover how our facilities enhance the learning experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 transform hover:scale-105 transition-all duration-300 shadow-lg">
                Schedule Campus Tour
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-600 transform hover:scale-105 transition-all duration-300">
                Virtual Tour
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 
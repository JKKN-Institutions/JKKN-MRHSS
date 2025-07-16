'use client';

import React from 'react';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { 
  Users, 
  Award, 
  BookOpen, 
  Target, 
  Heart, 
  Star,
  Clock,
  Trophy,
  Building,
  Lightbulb,
  Globe,
  Phone,
  Mail,
  MapPin,
  UserCheck,
  Shield,
  FileText,
  Settings,
  Calendar,
  GraduationCap,
  ChevronRight,
  Quote
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
  
  .animate-gradient-xy {
    animation: gradient-xy 15s ease infinite;
  }
  
  .animate-gradient-xy-reverse {
    animation: gradient-xy-reverse 20s ease infinite;
  }
  
  .animate-float {
    animation: float 6s ease-in-out infinite;
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

export default function SchoolManagementAndAdministration() {
  const leadershipTeam = [
    {
      name: "Dr. Neha Verma",
      position: "Principal",
      description: "With 25+ years in education, Dr. Verma leads our school with vision and dedication to academic excellence. Her innovative approach to education has transformed our institution into a center of learning excellence.",
      education: "Ph.D. in Education, M.Ed. English Literature",
      experience: "25+ years",
      specialization: "Educational Leadership & Curriculum Development",
      email: "principal@nvschool.edu",
      phone: "+91 98765 43210",
      message: "Our commitment to excellence goes beyond academic achievement. We strive to create an environment where every student can discover their potential, develop their talents, and grow into responsible global citizens. Through innovative teaching methods and a supportive community, we prepare our students not just for exams, but for life.",
      achievements: [
        "National Education Excellence Award 2023",
        "Published 15+ Research Papers",
        "Led 50+ Educational Reforms"
      ],
      vision: [
        {
          icon: <Star className="w-6 h-6" />,
          title: "Academic Excellence",
          description: "Fostering a culture of continuous learning and achievement"
        },
        {
          icon: <Users className="w-6 h-6" />,
          title: "Student Development",
          description: "Nurturing well-rounded individuals with strong character"
        }
      ]
    },
    {
      name: "Mr. Vikram Sharma",
      position: "Vice Principal",
      description: "A passionate educator with expertise in modern teaching methodologies and student development. His commitment to academic excellence and student welfare has been instrumental in our school's success.",
      education: "M.A. Mathematics, B.Ed.",
      experience: "20+ years",
      specialization: "Academic Administration & Assessment",
      email: "vp@nvschool.edu",
      phone: "+91 98765 43211",
      message: "Education is a journey of discovery and growth. As Vice Principal, I am dedicated to creating an environment where students can explore, innovate, and excel. We focus on developing critical thinking, creativity, and character, ensuring our students are well-prepared for the challenges of tomorrow.",
      achievements: [
        "Best Administrator Award 2022",
        "Implemented Digital Learning Platform",
        "Mentored 1000+ Students"
      ],
      vision: [
        {
          icon: <Target className="w-6 h-6" />,
          title: "Innovation in Education",
          description: "Implementing cutting-edge teaching methodologies"
        },
        {
          icon: <Lightbulb className="w-6 h-6" />,
          title: "Future-Ready Skills",
          description: "Preparing students for the challenges of tomorrow"
        }
      ]
    }
  ];

  const departments = [
    {
      name: "Academic Affairs",
      head: "Mrs. Priya Gupta",
      icon: <BookOpen className="w-8 h-8" />,
      responsibilities: [
        "Curriculum Development & Implementation",
        "Academic Standards & Assessment",
        "Teacher Training & Professional Development",
        "Student Academic Performance Monitoring"
      ]
    },
    {
      name: "Student Services",
      head: "Dr. Kavya Reddy",
      icon: <Users className="w-8 h-8" />,
      responsibilities: [
        "Student Counseling & Guidance",
        "Extracurricular Activities Coordination",
        "Student Welfare & Support Services",
        "Career Guidance & College Counseling"
      ]
    },
    {
      name: "Administration & Finance",
      head: "Mr. Rajesh Kumar",
      icon: <Building className="w-8 h-8" />,
      responsibilities: [
        "Financial Management & Budgeting",
        "Human Resources & Staff Management",
        "Infrastructure & Facilities Management",
        "Compliance & Regulatory Affairs"
      ]
    },
    {
      name: "Technology & Innovation",
      head: "Mr. Arun Patel",
      icon: <Lightbulb className="w-8 h-8" />,
      responsibilities: [
        "IT Infrastructure & Support",
        "Digital Learning Platforms",
        "Educational Technology Integration",
        "Data Management & Analytics"
      ]
    }
  ];

  const governanceStructure = [
    {
      title: "Board of Governors",
      description: "Strategic oversight and policy formulation",
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: "Principal's Office",
      description: "Executive leadership and daily operations",
      icon: <UserCheck className="w-6 h-6" />
    },
    {
      title: "Academic Council",
      description: "Curriculum and academic standards",
      icon: <BookOpen className="w-6 h-6" />
    },
    {
      title: "Parent-Teacher Committee",
      description: "Community engagement and feedback",
      icon: <Users className="w-6 h-6" />
    }
  ];

  const policies = [
    {
      title: "Academic Policy",
      description: "Standards for curriculum, assessment, and academic integrity",
      icon: <FileText className="w-6 h-6" />,
      lastUpdated: "August 2024"
    },
    {
      title: "Student Code of Conduct",
      description: "Guidelines for behavior, discipline, and student rights",
      icon: <Users className="w-6 h-6" />,
      lastUpdated: "July 2024"
    },
    {
      title: "Safety & Security Policy",
      description: "Comprehensive safety protocols and emergency procedures",
      icon: <Shield className="w-6 h-6" />,
      lastUpdated: "September 2024"
    },
    {
      title: "Anti-Bullying Policy",
      description: "Zero-tolerance approach to bullying and harassment",
      icon: <Heart className="w-6 h-6" />,
      lastUpdated: "June 2024"
    }
  ];

  const managementPhilosophy = [
    {
      principle: "Collaborative Leadership",
      description: "We believe in shared decision-making and inclusive leadership that involves all stakeholders.",
      icon: <Users className="w-8 h-8" />
    },
    {
      principle: "Continuous Improvement",
      description: "Our commitment to ongoing evaluation and enhancement of all educational processes.",
      icon: <Target className="w-8 h-8" />
    },
    {
      principle: "Transparency & Accountability",
      description: "Open communication and responsibility in all our administrative and academic decisions.",
      icon: <FileText className="w-8 h-8" />
    },
    {
      principle: "Innovation & Adaptability",
      description: "Embracing new ideas and adapting to changing educational landscapes and student needs.",
      icon: <Lightbulb className="w-8 h-8" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Custom CSS Styles */}
      <style jsx>{customStyles}</style>
      
      <Header />
      <br/>
      {/* Top Section with 1 Columns */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              {/* Main Image Container */}
              <div className="relative w-60 h-60 sm:w-72 sm:h-72 lg:w-80 lg:h-80 mx-auto rounded-[2.5rem] overflow-hidden">
                <motion.div
                  animate={{
                    scale: [1, 1.05, 1],
                    rotate: [0, 2, 0]
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute inset-0"
                >
                  <Image
                    src="/images/senthamarai.jpg"
                    alt="Smt.N.Sendamaraai"
                    fill
                    className="object-cover"
                  />
                </motion.div>

                {/* Floating Elements */}
                <motion.div
                  animate={{ 
                    y: [0, -20, 0],
                    rotate: [0, 5, 0]
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute top-6 left-6 w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-white/20 rounded-full backdrop-blur-sm"
                ></motion.div>
                <motion.div
                  animate={{ 
                    y: [0, -15, 0],
                    rotate: [0, -5, 0]
                  }}
                  transition={{ 
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                  className="absolute bottom-6 right-6 w-6 h-6 sm:w-8 sm:h-8 lg:w-12 lg:h-12 bg-white/20 rounded-full backdrop-blur-sm"
                ></motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="inline-block mb-4"
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#a51c83] to-[#003f13] rounded-full blur-lg opacity-50"></div>
                    <div className="relative bg-gradient-to-r from-[#a51c83] to-[#003f13] text-white px-8 py-3 rounded-full text-xs font-semibold shadow-lg">
                      Message from the Chairperson-JKKN Educational Institutions
                    </div>
                  </div>
                </motion.div>
                <h1 className="text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-[#a51c83] to-[#003f13] bg-clip-text text-transparent">
                Smt.N.Sendamaraai
                </h1>
                <p className="text-base text-gray-600 leading-relaxed mb-8 text-justify">
                Happy to hold the monumental responsibility as Chairperson of “J.K.K.Nattraja Educational Institutions” which has made exceptional progress and has achieved the status of one of the most prestigious matriculation schools. “Leadership and excellence” is our motto, a fact that is evident from our state of art infrastructure and the quality of each individual.
                </p>
                
      
              </div>              
            </motion.div>
          </div>
        </div>
      </section>

      {/* Top Section with 2 Columns */}
      <section className="pt-12 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
        
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8 order-2 lg:order-1"
            >
              <div>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="inline-block mb-4"
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#a51c83] to-[#003f13] rounded-full blur-lg opacity-50"></div>
                    <div className="relative bg-gradient-to-r from-[#a51c83] to-[#003f13] text-white px-8 py-3 rounded-full text-xs font-semibold shadow-lg">
                      Message from the Director - JKKN Educational Institutions
                    </div>
                  </div>
                </motion.div>
                <h1 className="text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-[#a51c83] to-[#003f13] bg-clip-text text-transparent">
                Shri.S.Ommsharravana
                </h1>
                <p className="text-base text-gray-600 leading-relaxed mb-8 text-justify">
                We are set to take on the mission of implementing new education methodologies to enable quality learning. It also encourages independent thinking and helps the students in developing wholesome personalities so that they can contribute their best to society and the country. We work together to make JKKN the best temple of learning, guiding and encouraging them in their own way. JKKN aims to produce top-notch professionals with their colorful flag flying in the air of success in this pulsating world of competition.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative order-1 lg:order-2"
            >
              {/* Main Image Container */}
              <div className="relative w-60 h-60 sm:w-72 sm:h-72 lg:w-80 lg:h-80 mx-auto rounded-[2.5rem] overflow-hidden">
                <motion.div
                  animate={{
                    scale: [1, 1.05, 1],
                    rotate: [0, 2, 0]
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute inset-0"
                >
                  <Image
                    src="/images/saravanan.jpg"
                    alt="Shri.S.Ommsharravana"
                    fill
                    className="object-cover"
                  />
                </motion.div>

                {/* Floating Elements */}
                <motion.div
                  animate={{
                    y: [0, -20, 0],
                    rotate: [0, 5, 0]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute top-6 left-6 w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-white/20 rounded-full backdrop-blur-sm"
                ></motion.div>
                <motion.div
                  animate={{
                    y: [0, -15, 0],
                    rotate: [0, -5, 0]
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                  className="absolute bottom-6 right-6 w-6 h-6 sm:w-8 sm:h-8 lg:w-12 lg:h-12 bg-white/20 rounded-full backdrop-blur-sm"
                ></motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      
      <Footer />
    </div>
  );
} 
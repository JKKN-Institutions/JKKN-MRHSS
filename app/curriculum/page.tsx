'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import dynamic from 'next/dynamic';
import { 
  GraduationCap, 
  BookOpen, 
  Users, 
  Target,
  Award,
  Brain,
  Paintbrush,
  Calculator,
  Globe,
  Music,
  FlaskConical,
  Computer,
  Heart,
  Trophy,
  ChevronRight,
  Play,
  Star,
  Microscope,
  Languages,
  Activity
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

export default function CurriculumPage() {
  const [activeLevel, setActiveLevel] = useState('pre-primary');

  const curriculumLevels = [
    {
      id: 'pre-primary',
      title: 'Pre-Primary',
      ageRange: 'Ages 3-6',
      description: 'Building foundational skills through play-based learning and exploration',
      color: 'from-pink-400 to-rose-500',
      icon: <Heart className="w-8 h-8" />,
      students: '150+',
      teachers: '12',
      highlights: [
        'Play-based learning approach',
        'Social and emotional development',
        'Early literacy and numeracy',
        'Creative arts and movement',
        'Safe and nurturing environment'
      ],
      subjects: [
        {
          name: 'Early Literacy',
          icon: <BookOpen className="w-6 h-6" />,
          description: 'Introduction to letters, sounds, and basic reading skills',
          activities: ['Phonics games', 'Story time', 'Letter recognition', 'Pre-writing skills']
        },
        {
          name: 'Numeracy Basics',
          icon: <Calculator className="w-6 h-6" />,
          description: 'Counting, shapes, patterns, and basic math concepts',
          activities: ['Number games', 'Shape sorting', 'Pattern making', 'Measurement fun']
        },
        {
          name: 'Creative Arts',
          icon: <Paintbrush className="w-6 h-6" />,
          description: 'Painting, drawing, music, and creative expression',
          activities: ['Art projects', 'Music and movement', 'Drama play', 'Craft activities']
        },
        {
          name: 'Physical Development',
          icon: <Activity className="w-6 h-6" />,
          description: 'Gross and fine motor skills development',
          activities: ['Playground activities', 'Dance and movement', 'Balance games', 'Hand-eye coordination']
        }
      ]
    },
    {
      id: 'primary',
      title: 'Primary',
      ageRange: 'Ages 6-11',
      description: 'Developing core academic skills and fostering curiosity for learning',
      color: 'from-blue-400 to-cyan-500',
      icon: <BookOpen className="w-8 h-8" />,
      students: '450+',
      teachers: '24',
      highlights: [
        'Core subject mastery',
        'Critical thinking development',
        'Collaborative learning',
        'STEM integration',
        'Character building'
      ],
      subjects: [
        {
          name: 'English Language Arts',
          icon: <Languages className="w-6 h-6" />,
          description: 'Reading comprehension, writing skills, and communication',
          activities: ['Reading circles', 'Creative writing', 'Grammar games', 'Public speaking']
        },
        {
          name: 'Mathematics',
          icon: <Calculator className="w-6 h-6" />,
          description: 'Number operations, problem-solving, and logical thinking',
          activities: ['Math manipulatives', 'Word problems', 'Math journals', 'Calculator skills']
        },
        {
          name: 'Science Exploration',
          icon: <FlaskConical className="w-6 h-6" />,
          description: 'Hands-on experiments and scientific inquiry',
          activities: ['Lab experiments', 'Nature observations', 'Science fair projects', 'Field trips']
        },
        {
          name: 'Social Studies',
          icon: <Globe className="w-6 h-6" />,
          description: 'History, geography, and community understanding',
          activities: ['Map studies', 'Historical timelines', 'Cultural projects', 'Community visits']
        },
        {
          name: 'Arts & Music',
          icon: <Music className="w-6 h-6" />,
          description: 'Creative expression through various art forms',
          activities: ['Choir participation', 'Art exhibitions', 'Drama performances', 'Instrument lessons']
        },
        {
          name: 'Physical Education',
          icon: <Activity className="w-6 h-6" />,
          description: 'Sports, fitness, and healthy lifestyle habits',
          activities: ['Team sports', 'Fitness challenges', 'Swimming lessons', 'Health education']
        }
      ]
    },
    {
      id: 'secondary',
      title: 'Secondary',
      ageRange: 'Ages 11-16',
      description: 'Advanced learning with specialized subjects and career exploration',
      color: 'from-purple-400 to-violet-500',
      icon: <Brain className="w-8 h-8" />,
      students: '380+',
      teachers: '28',
      highlights: [
        'Advanced subject specialization',
        'Critical analysis skills',
        'Research methodologies',
        'Leadership opportunities',
        'Career guidance'
      ],
      subjects: [
        {
          name: 'Advanced Mathematics',
          icon: <Calculator className="w-6 h-6" />,
          description: 'Algebra, geometry, statistics, and advanced problem-solving',
          activities: ['Math competitions', 'Research projects', 'Peer tutoring', 'Calculator programming']
        },
        {
          name: 'Sciences',
          icon: <Microscope className="w-6 h-6" />,
          description: 'Physics, chemistry, biology with laboratory work',
          activities: ['Advanced lab work', 'Science olympiad', 'Research papers', 'Science mentorship']
        },
        {
          name: 'Languages',
          icon: <Languages className="w-6 h-6" />,
          description: 'Advanced language skills and literature analysis',
          activities: ['Literary analysis', 'Creative writing', 'Debate club', 'Language exchange']
        },
        {
          name: 'Technology',
          icon: <Computer className="w-6 h-6" />,
          description: 'Programming, digital literacy, and computer science',
          activities: ['Coding projects', 'App development', 'Digital design', 'Tech competitions']
        },
        {
          name: 'Social Sciences',
          icon: <Globe className="w-6 h-6" />,
          description: 'History, geography, economics, and political science',
          activities: ['Model UN', 'Historical research', 'Economic simulations', 'Social projects']
        },
        {
          name: 'Arts & Electives',
          icon: <Paintbrush className="w-6 h-6" />,
          description: 'Visual arts, performing arts, and specialized electives',
          activities: ['Art portfolios', 'Theater productions', 'Music ensembles', 'Specialized workshops']
        }
      ]
    },
    {
      id: 'higher-secondary',
      title: 'Higher Secondary',
      ageRange: 'Ages 16-18',
      description: 'College preparation with advanced placement and career specialization',
      color: 'from-green-400 to-emerald-500',
      icon: <GraduationCap className="w-8 h-8" />,
      students: '200+',
      teachers: '18',
      highlights: [
        'College preparation programs',
        'Advanced placement courses',
        'Independent research',
        'Internship opportunities',
        'University partnerships'
      ],
      subjects: [
        {
          name: 'Advanced Sciences',
          icon: <Microscope className="w-6 h-6" />,
          description: 'Advanced physics, chemistry, biology, and research methods',
          activities: ['Independent research', 'Scientific publications', 'Lab assistance', 'Science fairs']
        },
        {
          name: 'Advanced Mathematics',
          icon: <Calculator className="w-6 h-6" />,
          description: 'Calculus, statistics, discrete mathematics, and applications',
          activities: ['Math research', 'Competition teams', 'Tutoring programs', 'Real-world applications']
        },
        {
          name: 'Humanities',
          icon: <BookOpen className="w-6 h-6" />,
          description: 'Literature, philosophy, history, and critical thinking',
          activities: ['Research papers', 'Philosophy debates', 'Historical analysis', 'Literary criticism']
        },
        {
          name: 'Technology & Engineering',
          icon: <Computer className="w-6 h-6" />,
          description: 'Advanced programming, engineering principles, and innovation',
          activities: ['Software development', 'Engineering projects', 'Tech startups', 'Innovation labs']
        },
        {
          name: 'Business & Economics',
          icon: <Trophy className="w-6 h-6" />,
          description: 'Business management, economics, and entrepreneurship',
          activities: ['Business plans', 'Economic modeling', 'Startup incubator', 'Industry partnerships']
        },
        {
          name: 'Specialized Tracks',
          icon: <Star className="w-6 h-6" />,
          description: 'Pre-med, pre-engineering, liberal arts, and career-focused tracks',
          activities: ['Internships', 'Mentorship programs', 'College visits', 'Career shadowing']
        }
      ]
    }
  ];

  const activeData = curriculumLevels.find(level => level.id === activeLevel);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Custom CSS Styles */}
      <style jsx>{customStyles}</style>
      
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-blue-600 to-purple-600 animate-gradient-xy opacity-90"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 via-purple-600 to-pink-700 animate-gradient-xy-reverse opacity-80"></div>
        
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
                  Curriculum Excellence
                </h1>
                <p className="text-xl md:text-2xl text-white/90 leading-relaxed drop-shadow-md mb-8">
                  Comprehensive educational programs designed to nurture every student's potential from Pre-Primary through Higher Secondary levels.
                </p>
              </motion.div>

              {/* Curriculum Overview */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="bg-white/20 backdrop-blur-md rounded-2xl p-6 border border-white/30"
              >
                <div className="flex items-center mb-4">
                  <GraduationCap className="w-8 h-8 text-white mr-3" />
                  <h3 className="text-xl font-bold text-white">Our Approach</h3>
                </div>
                <p className="text-white/90 text-lg leading-relaxed">
                  We provide a progressive curriculum that builds upon each level, ensuring students develop 
                  strong foundations while preparing them for future academic and life challenges.
                </p>
              </motion.div>

              {/* Quick Stats */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="grid grid-cols-3 gap-4"
              >
                <div className="bg-white/20 backdrop-blur-md rounded-xl p-4 text-center border border-white/30">
                  <div className="text-2xl font-bold text-white">1200+</div>
                  <div className="text-white/80 text-sm">Students</div>
                </div>
                <div className="bg-white/20 backdrop-blur-md rounded-xl p-4 text-center border border-white/30">
                  <div className="text-2xl font-bold text-white">82</div>
                  <div className="text-white/80 text-sm">Teachers</div>
                </div>
                <div className="bg-white/20 backdrop-blur-md rounded-xl p-4 text-center border border-white/30">
                  <div className="text-2xl font-bold text-white">4</div>
                  <div className="text-white/80 text-sm">Levels</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Side Animated Illustration */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative hidden lg:block"
            >
              {/* Educational Journey Visualization */}
              <div className="relative w-full h-[600px]">
                {/* Background Images */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1.2, delay: 0.8 }}
                  className="absolute top-8 left-8 w-32 h-32 rounded-2xl overflow-hidden shadow-xl transform rotate-12 animate-float"
                >
                  <div className="w-full h-full bg-gradient-to-br from-pink-400 to-rose-500 flex items-center justify-center">
                    <div className="text-white text-center">
                      <Heart className="w-8 h-8 mx-auto mb-2" />
                      <div className="text-xs font-bold">Pre-Primary</div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1.2, delay: 1.0 }}
                  className="absolute top-16 right-16 w-28 h-28 rounded-2xl overflow-hidden shadow-xl transform -rotate-12 animate-float"
                  style={{ animationDelay: '1s' }}
                >
                  <div className="w-full h-full bg-gradient-to-br from-blue-400 to-cyan-500 flex items-center justify-center">
                    <div className="text-white text-center">
                      <BookOpen className="w-7 h-7 mx-auto mb-1" />
                      <div className="text-xs font-bold">Primary</div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1.2, delay: 1.2 }}
                  className="absolute bottom-20 left-12 w-36 h-36 rounded-2xl overflow-hidden shadow-xl transform rotate-6 animate-float"
                  style={{ animationDelay: '2s' }}
                >
                  <div className="w-full h-full bg-gradient-to-br from-purple-400 to-violet-500 flex items-center justify-center">
                    <div className="text-white text-center">
                      <Brain className="w-9 h-9 mx-auto mb-2" />
                      <div className="text-xs font-bold">Secondary</div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1.2, delay: 1.4 }}
                  className="absolute bottom-12 right-20 w-24 h-24 rounded-2xl overflow-hidden shadow-xl transform -rotate-6 animate-float"
                  style={{ animationDelay: '3s' }}
                >
                  <div className="w-full h-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center">
                    <div className="text-white text-center">
                      <GraduationCap className="w-6 h-6 mx-auto mb-1" />
                      <div className="text-xs font-bold">Higher Sec</div>
                    </div>
                  </div>
                </motion.div>

                {/* Floating Subject Icons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 1.6 }}
                  className="absolute top-32 left-32 w-16 h-16 bg-white/90 rounded-full shadow-lg flex items-center justify-center animate-float"
                  style={{ animationDelay: '0.5s' }}
                >
                  <Calculator className="w-8 h-8 text-blue-600" />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 1.8 }}
                  className="absolute top-40 right-32 w-14 h-14 bg-white/90 rounded-full shadow-lg flex items-center justify-center animate-float"
                  style={{ animationDelay: '1.5s' }}
                >
                  <FlaskConical className="w-7 h-7 text-purple-600" />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 2.0 }}
                  className="absolute bottom-32 left-24 w-12 h-12 bg-white/90 rounded-full shadow-lg flex items-center justify-center animate-float"
                  style={{ animationDelay: '2.5s' }}
                >
                  <Paintbrush className="w-6 h-6 text-pink-600" />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 2.2 }}
                  className="absolute bottom-40 right-28 w-18 h-18 bg-white/90 rounded-full shadow-lg flex items-center justify-center animate-float"
                  style={{ animationDelay: '3.5s' }}
                >
                  <Globe className="w-8 h-8 text-green-600" />
                </motion.div>

                {/* Animated Particles */}
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: [0, 1, 0], scale: [0, 1, 0] }}
                    transition={{
                      duration: 3,
                      delay: 2 + i * 0.3,
                      repeat: Infinity,
                      repeatDelay: 4
                    }}
                    className="absolute w-2 h-2 bg-white/70 rounded-full"
                    style={{
                      left: `${20 + Math.random() * 60}%`,
                      top: `${20 + Math.random() * 60}%`,
                    }}
                  />
                ))}

                {/* Central Hub */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white/95 rounded-full flex items-center justify-center shadow-2xl animate-pulse-glow border-4 border-white/50"
                >
                  <GraduationCap className="w-16 h-16 text-blue-600" />
                </motion.div>

                {/* Level Icons */}
                {[
                  { icon: Heart, color: 'from-pink-400 to-rose-500', delay: 0.7, radius: 140, angle: 45 },
                  { icon: BookOpen, color: 'from-blue-400 to-cyan-500', delay: 0.8, radius: 140, angle: 135 },
                  { icon: Brain, color: 'from-purple-400 to-violet-500', delay: 0.9, radius: 140, angle: 225 },
                  { icon: GraduationCap, color: 'from-green-400 to-emerald-500', delay: 1.0, radius: 140, angle: 315 }
                ].map(({ icon: Icon, color, delay, radius, angle }, index) => {
                  const x = Math.cos((angle * Math.PI) / 180) * radius;
                  const y = Math.sin((angle * Math.PI) / 180) * radius;
                  
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.8, delay }}
                      className={`absolute top-1/2 left-1/2 w-20 h-20 rounded-full bg-gradient-to-br ${color} flex items-center justify-center shadow-xl border-2 border-white/30`}
                      style={{
                        transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`
                      }}
                    >
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                      >
                        <Icon className="w-10 h-10 text-white" />
                      </motion.div>
                    </motion.div>
                  );
                })}

                {/* Connection Lines */}
                <svg className="absolute inset-0 w-full h-full">
                  <defs>
                    <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="rgba(255,255,255,0.4)" />
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
                  {[45, 135, 225, 315].map((angle, i) => {
                    const x = 300 + Math.cos((angle * Math.PI) / 180) * 140;
                    const y = 300 + Math.sin((angle * Math.PI) / 180) * 140;
                    return (
                      <motion.line
                        key={i}
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 1, delay: 1.5 + i * 0.1 }}
                        x1="300"
                        y1="300"
                        x2={x}
                        y2={y}
                        stroke="url(#connectionGradient)"
                        strokeWidth="4"
                        strokeDasharray="10,5"
                        filter="url(#glow)"
                      />
                    );
                  })}
                </svg>

                {/* Orbiting Elements */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
                  className="absolute top-1/2 left-1/2 w-80 h-80 transform -translate-x-1/2 -translate-y-1/2"
                >
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-yellow-400 rounded-full shadow-lg flex items-center justify-center">
                    <Star className="w-5 h-5 text-white" />
                  </div>
                </motion.div>

                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                  className="absolute top-1/2 left-1/2 w-96 h-96 transform -translate-x-1/2 -translate-y-1/2"
                >
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-6 h-6 bg-orange-400 rounded-full shadow-lg flex items-center justify-center">
                    <Music className="w-4 h-4 text-white" />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Level Navigation */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
              Educational Levels
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Explore our comprehensive curriculum across all educational levels, each designed to 
              meet students where they are and take them where they need to go.
            </p>
          </motion.div>

          {/* Level Selector */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {curriculumLevels.map((level, index) => (
              <motion.button
                key={level.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                onClick={() => setActiveLevel(level.id)}
                className={`p-6 rounded-2xl transition-all duration-300 transform hover:scale-105 ${
                  activeLevel === level.id
                    ? 'bg-gradient-to-br ' + level.color + ' text-white shadow-2xl'
                    : 'bg-gray-50 hover:bg-gray-100 text-gray-800 shadow-lg hover:shadow-xl'
                }`}
              >
                <div className="flex flex-col items-center space-y-4">
                  <div className={`p-3 rounded-full ${
                    activeLevel === level.id ? 'bg-white/20' : 'bg-gray-200'
                  }`}>
                    {level.icon}
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-bold mb-1">{level.title}</h3>
                    <p className={`text-sm ${activeLevel === level.id ? 'text-white/80' : 'text-gray-600'}`}>
                      {level.ageRange}
                    </p>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Active Level Details */}
      <AnimatePresence mode="wait">
        {activeData && (
          <motion.section
            key={activeLevel}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
            className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50"
          >
            <div className="max-w-7xl mx-auto">
              {/* Level Header */}
              <div className="grid lg:grid-cols-2 gap-12 mb-16">
                <div>
                  <h3 className="text-4xl font-bold mb-4 text-gray-800">
                    {activeData.title} Education
                  </h3>
                  <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                    {activeData.description}
                  </p>
                  
                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-6 mb-8">
                    <div className="bg-white rounded-xl p-4 shadow-lg">
                      <div className="flex items-center mb-2">
                        <Users className="w-6 h-6 text-blue-600 mr-2" />
                        <span className="font-semibold text-gray-800">Students</span>
                      </div>
                      <div className="text-2xl font-bold text-blue-600">{activeData.students}</div>
                    </div>
                    <div className="bg-white rounded-xl p-4 shadow-lg">
                      <div className="flex items-center mb-2">
                        <Target className="w-6 h-6 text-green-600 mr-2" />
                        <span className="font-semibold text-gray-800">Teachers</span>
                      </div>
                      <div className="text-2xl font-bold text-green-600">{activeData.teachers}</div>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="bg-white rounded-2xl p-6 shadow-xl">
                    <h4 className="text-xl font-bold mb-4 text-gray-800 flex items-center">
                      <Award className="w-6 h-6 text-yellow-500 mr-2" />
                      Key Highlights
                    </h4>
                    <ul className="space-y-2">
                      {activeData.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-center text-gray-600">
                          <ChevronRight className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Visual Element */}
                <div className="relative">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className={`bg-gradient-to-br ${activeData.color} rounded-3xl p-8 shadow-2xl relative overflow-hidden`}
                  >
                    <div className="relative z-10">
                      <div className="text-white text-center">
                        <div className="text-6xl mb-4">{activeData.icon}</div>
                        <h4 className="text-2xl font-bold mb-2">{activeData.title} Level</h4>
                        <p className="text-white/90 mb-6">{activeData.ageRange}</p>
                        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                          <p className="text-white/90 text-sm">
                            Empowering students at the {activeData.title.toLowerCase()} level with 
                            age-appropriate curriculum and innovative teaching methodologies.
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Background decorations */}
                    <div className="absolute top-4 right-4 w-16 h-16 bg-white/10 rounded-full animate-float"></div>
                    <div className="absolute bottom-4 left-4 w-12 h-12 bg-white/10 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
                  </motion.div>
                </div>
              </div>

              {/* Subjects Grid */}
              <div>
                <h4 className="text-3xl font-bold mb-8 text-gray-800 text-center">
                  Core Subjects & Activities
                </h4>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {activeData.subjects.map((subject, index) => (
                    <motion.div
                      key={subject.name}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                      className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                    >
                      <div className="flex items-center mb-4">
                        <div className="p-3 bg-blue-100 rounded-xl mr-3">
                          {subject.icon}
                        </div>
                        <h5 className="text-xl font-bold text-gray-800">{subject.name}</h5>
                      </div>
                      <p className="text-gray-600 mb-4 leading-relaxed">{subject.description}</p>
                      
                      <div>
                        <h6 className="font-semibold text-gray-800 mb-2 text-sm uppercase tracking-wider">
                          Key Activities:
                        </h6>
                        <ul className="space-y-1">
                          {subject.activities.map((activity, idx) => (
                            <li key={idx} className="text-sm text-gray-600 flex items-center">
                              <Play className="w-3 h-3 text-blue-500 mr-2 flex-shrink-0" />
                              {activity}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Ready to Join Our Educational Journey?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Discover how our comprehensive curriculum can help your child reach their full potential 
              at every stage of their educational journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 transform hover:scale-105 transition-all duration-300 shadow-lg">
                Schedule a Visit
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-600 transform hover:scale-105 transition-all duration-300">
                Download Curriculum Guide
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 
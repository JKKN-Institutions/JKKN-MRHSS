'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import dynamic from 'next/dynamic';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { 
  BookOpen, 
  Calculator, 
  FlaskConical,
  Globe,
  Music,
  Paintbrush,
  Computer,
  Languages,
  Activity,
  Microscope,
  Heart,
  Brain,
  Trophy,
  Star,
  Users,
  Target,
  Award,
  ChevronRight,
  Play,
  Clock,
  MapPin,
  User,
  Sparkles,
  Zap,
  Eye,
  TrendingUp,
  Lightbulb,
  Rocket
} from 'lucide-react';

// Type definitions
interface SubjectCategory {
  id: string;
  title: string;
  description: string;
  color: string;
  icon: React.ReactNode;
}

interface Subject {
  name: string;
  icon: React.ReactNode;
  levels: string[];
  description: string;
  topics: Record<string, string[]>;
  assessment: string;
  duration: string;
}

type SubjectCategoryId = 'core' | 'languages' | 'sciences';

// Enhanced Custom CSS Animations
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

  @keyframes shimmer {
    0% {
      background-position: -200% 0;
    }
    100% {
      background-position: 200% 0;
    }
  }

  @keyframes bounce-glow {
    0%, 100% {
      transform: translateY(0) scale(1);
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
    }
    50% {
      transform: translateY(-5px) scale(1.02);
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
    }
  }

  @keyframes text-glow {
    0%, 100% {
      text-shadow: 0 0 20px rgba(255, 255, 255, 0.8);
    }
    50% {
      text-shadow: 0 0 30px rgba(255, 255, 255, 1), 0 0 40px rgba(147, 51, 234, 0.5);
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

  .animate-shimmer {
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
    background-size: 200% 100%;
    animation: shimmer 2s infinite;
  }

  .animate-bounce-glow {
    animation: bounce-glow 4s ease-in-out infinite;
  }

  .animate-text-glow {
    animation: text-glow 3s ease-in-out infinite;
  }

  .glass-morphism {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(20px);
  }

  .hover-lift {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .hover-lift:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
  }

  .interactive-card {
    position: relative;
    overflow: hidden;
  }

  .interactive-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
    transition: left 0.5s;
  }

  .interactive-card:hover::before {
    left: 100%;
  }
`;

// Enhanced Loading components with better animations
const HeaderSkeleton = () => (
  <div className="fixed top-0 left-0 right-0 z-50 h-20 bg-white shadow-lg">
    <div className="flex items-center justify-between h-full px-8">
      <div className="flex items-center space-x-3">
        <div className="w-12 h-12 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full animate-pulse"></div>
        <div className="h-6 w-32 bg-gradient-to-r from-gray-200 to-gray-300 rounded animate-pulse"></div>
      </div>
      <div className="h-6 w-6 bg-gradient-to-r from-gray-200 to-gray-300 rounded animate-pulse"></div>
    </div>
  </div>
);

const FooterSkeleton = () => (
  <div className="bg-gray-900 text-white py-16">
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="space-y-4">
            <div className="h-6 w-32 bg-gradient-to-r from-gray-700 to-gray-600 rounded animate-pulse"></div>
            <div className="space-y-2">
              <div className="h-4 w-full bg-gradient-to-r from-gray-700 to-gray-600 rounded animate-pulse"></div>
              <div className="h-4 w-3/4 bg-gradient-to-r from-gray-700 to-gray-600 rounded animate-pulse"></div>
              <div className="h-4 w-1/2 bg-gradient-to-r from-gray-700 to-gray-600 rounded animate-pulse"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// Components will be imported at the top

// Enhanced Interactive Card Component
const InteractiveSubjectCard = ({ subject, category, index }: { 
  subject: Subject, 
  category: SubjectCategory, 
  index: number 
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="interactive-card hover-lift bg-white rounded-2xl shadow-lg overflow-hidden group"
    >
      {/* Subject Header with Enhanced Hover Effects */}
      <motion.div 
        className={`bg-gradient-to-r ${category.color} p-6 text-white relative overflow-hidden`}
        animate={{
          backgroundSize: isHovered ? "120% 120%" : "100% 100%"
        }}
        transition={{ duration: 0.3 }}
      >
        <motion.div 
          className="flex items-center space-x-3 mb-3"
          animate={{ x: isHovered ? 5 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            animate={{ 
              rotate: isHovered ? 360 : 0,
              scale: isHovered ? 1.1 : 1
            }}
            transition={{ duration: 0.3 }}
          >
            {subject.icon}
          </motion.div>
          <h4 className="text-xl font-bold">{subject.name}</h4>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: isHovered ? 1 : 0,
              scale: isHovered ? 1 : 0
            }}
            transition={{ duration: 0.2 }}
          >
            <Sparkles className="w-5 h-5" />
          </motion.div>
        </motion.div>
        <motion.p 
          className="text-white/90"
          animate={{ opacity: isHovered ? 1 : 0.9 }}
        >
          {subject.description}
        </motion.p>
        
        {/* Animated Background Particles */}
        <motion.div
          className="absolute top-0 right-0 w-32 h-32 opacity-10"
          animate={{
            rotate: isHovered ? 180 : 0,
            scale: isHovered ? 1.2 : 1
          }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-full h-full bg-white rounded-full"></div>
        </motion.div>
      </motion.div>

      {/* Enhanced Subject Content */}
      <div className="p-6 space-y-6">
        {/* Levels with Animation */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <h5 className="font-semibold text-gray-800 mb-3 flex items-center">
            <motion.div
              animate={{ rotate: isHovered ? 360 : 0 }}
              transition={{ duration: 0.5 }}
            >
              <Target className="w-4 h-4 mr-2 text-indigo-600" />
            </motion.div>
            Available Levels
          </h5>
          <div className="flex flex-wrap gap-2">
            {subject.levels.map((level: string, idx: number) => (
              <motion.span
                key={level}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="px-3 py-1 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 rounded-full text-sm font-medium cursor-pointer"
              >
                {level}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Expandable Topics Section */}
        <div>
          <motion.button
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full flex items-center justify-between font-semibold text-gray-800 mb-3 p-2 rounded-lg hover:bg-gray-50 transition-colors"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex items-center">
              <BookOpen className="w-4 h-4 mr-2 text-indigo-600" />
              Key Topics
            </div>
            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronRight className="w-4 h-4" />
            </motion.div>
          </motion.button>
          
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-3 overflow-hidden"
              >
                {Object.entries(subject.topics).map(([level, topics]: [string, string[]], levelIdx) => (
                  <motion.div 
                    key={level} 
                    className="border-l-4 border-indigo-200 pl-4 bg-gray-50 rounded-r-lg p-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: levelIdx * 0.1 }}
                  >
                    <h6 className="font-medium text-gray-700 mb-2 flex items-center">
                      <Lightbulb className="w-3 h-3 mr-1 text-yellow-500" />
                      {level}
                    </h6>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {topics.map((topic: string, idx: number) => (
                        <motion.li 
                          key={idx} 
                          className="flex items-center hover:text-indigo-600 transition-colors"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: (levelIdx * 0.1) + (idx * 0.05) }}
                          whileHover={{ x: 5 }}
                        >
                          <ChevronRight className="w-3 h-3 mr-1 text-indigo-400" />
                          {topic}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Enhanced Assessment & Duration */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <motion.div
            whileHover={{ scale: 1.02, x: 5 }}
            className="p-3 rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50"
          >
            <h6 className="font-semibold text-gray-800 mb-2 flex items-center">
              <Award className="w-4 h-4 mr-2 text-blue-600" />
              Assessment
            </h6>
            <p className="text-sm text-gray-600">{subject.assessment}</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.02, x: 5 }}
            className="p-3 rounded-lg bg-gradient-to-r from-green-50 to-emerald-50"
          >
            <h6 className="font-semibold text-gray-800 mb-2 flex items-center">
              <Clock className="w-4 h-4 mr-2 text-green-600" />
              Duration
            </h6>
            <p className="text-sm text-gray-600">{subject.duration}</p>
          </motion.div>
        </motion.div>

        {/* Interactive Action Button */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={`w-full mt-4 py-3 px-6 bg-gradient-to-r ${category.color} text-white rounded-xl font-semibold flex items-center justify-center space-x-2 hover:shadow-lg transition-all duration-300`}
        >
          <Eye className="w-4 h-4" />
          <span>Learn More</span>
          <motion.div
            animate={{ x: isHovered ? 5 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <ChevronRight className="w-4 h-4" />
          </motion.div>
        </motion.button>
      </div>
    </motion.div>
  );
};

export default function SubjectsOfferedPage() {
  const [activeCategory, setActiveCategory] = useState<SubjectCategoryId>('core');
  const [selectedLevel, setSelectedLevel] = useState('all');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

  // Mouse tracking for interactive effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const subjectCategories: SubjectCategory[] = [
    {
      id: 'core',
      title: 'Core Subjects',
      description: 'Essential subjects forming the foundation of education',
      color: 'from-blue-500 to-indigo-600',
      icon: <BookOpen className="w-8 h-8" />
    },
    {
      id: 'languages',
      title: 'Languages',
      description: 'Communication skills and multilingual education',
      color: 'from-purple-500 to-violet-600',
      icon: <Languages className="w-8 h-8" />
    },
    {
      id: 'sciences',
      title: 'Sciences',
      description: 'Environmental science and nature studies',
      color: 'from-green-500 to-emerald-600',
      icon: <FlaskConical className="w-8 h-8" />
    }
  ];

  const subjects: Record<SubjectCategoryId, Subject[]> = {
    core: [
      {
        name: 'English',
        icon: <BookOpen className="w-6 h-6" />,
        levels: ['Pre-Primary', 'Primary', 'Secondary', 'Higher Secondary'],
        description: 'Comprehensive English language and literature program developing communication skills',
        topics: {
          'Pre-Primary': ['Phonics', 'Letter recognition', 'Basic vocabulary', 'Story time'],
          'Primary': ['Reading comprehension', 'Grammar', 'Creative writing', 'Public speaking'],
          'Secondary': ['Literature analysis', 'Advanced writing', 'Research skills', 'Critical thinking'],
          'Higher Secondary': ['Advanced literature', 'Comparative analysis', 'Academic writing', 'Rhetoric']
        },
        assessment: 'Portfolio-based assessment, presentations, and written examinations',
        duration: 'Full academic year with intensive workshops'
      },
      {
        name: 'Mathematics',
        icon: <Calculator className="w-6 h-6" />,
        levels: ['Pre-Primary', 'Primary', 'Secondary', 'Higher Secondary'],
        description: 'Comprehensive mathematical education from basic numeracy to advanced calculus',
        topics: {
          'Pre-Primary': ['Counting', 'Shapes', 'Patterns', 'Basic operations'],
          'Primary': ['Arithmetic', 'Geometry', 'Fractions', 'Word problems'],
          'Secondary': ['Algebra', 'Trigonometry', 'Statistics', 'Coordinate geometry'],
          'Higher Secondary': ['Calculus', 'Advanced statistics', 'Discrete mathematics', 'Applied mathematics']
        },
        assessment: 'Continuous assessment, practical applications, and examinations',
        duration: 'Year-round program with specialized tracks'
      },
      {
        name: 'Social Studies',
        icon: <Globe className="w-6 h-6" />,
        levels: ['Primary', 'Secondary', 'Higher Secondary'],
        description: 'Understanding society, history, geography, and civic responsibilities',
        topics: {
          'Primary': ['Local community', 'Basic geography', 'Historical stories', 'Cultural awareness'],
          'Secondary': ['World history', 'Political systems', 'Economic principles', 'Environmental studies'],
          'Higher Secondary': ['Advanced history', 'International relations', 'Philosophy', 'Sociology']
        },
        assessment: 'Project-based learning, field studies, and comprehensive examinations',
        duration: 'Academic year with field trips and practical applications'
      }
    ],
    languages: [
      {
        name: 'Tamil',
        icon: <Languages className="w-6 h-6" />,
        levels: ['Pre-Primary', 'Primary', 'Secondary', 'Higher Secondary'],
        description: 'Tamil language instruction and cultural understanding',
        topics: {
          'Pre-Primary': ['Basic Tamil vocabulary', 'Simple sentences', 'Tamil rhymes and songs', 'Cultural stories'],
          'Primary': ['Tamil grammar fundamentals', 'Reading skills', 'Writing practice', 'Literature introduction'],
          'Secondary': ['Advanced Tamil grammar', 'Poetry analysis', 'Essay writing', 'Classical texts'],
          'Higher Secondary': ['Classical Tamil literature', 'Modern Tamil poetry', 'Comparative literature', 'Language research']
        },
        assessment: 'Speaking assessments, written tests, and cultural presentations',
        duration: 'Full academic year with cultural immersion activities'
      }
    ],
    sciences: [
      {
        name: 'Environmental Science',
        icon: <Globe className="w-6 h-6" />,
        levels: ['Primary', 'Secondary', 'Higher Secondary'],
        description: 'Understanding environmental issues and sustainable development',
        topics: {
          'Primary': ['Nature conservation', 'Pollution awareness', 'Recycling', 'Animal habitats'],
          'Secondary': ['Ecosystem dynamics', 'Climate change', 'Renewable energy', 'Biodiversity'],
          'Higher Secondary': ['Environmental policy', 'Sustainability science', 'Conservation biology', 'Green technology']
        },
        assessment: 'Project work, field studies, and research presentations',
        duration: 'Integrated throughout the academic year'
      }
    ]
  };

  const activeSubjects = subjects[activeCategory] || [];

  const filteredSubjects = selectedLevel === 'all' 
    ? activeSubjects 
    : activeSubjects.filter((subject: Subject) => subject.levels.includes(selectedLevel));

  const levelOptions = ['all', 'Pre-Primary', 'Primary', 'Secondary', 'Higher Secondary'];

  return (
    <div ref={containerRef} className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
      {/* Custom CSS Styles */}
      <style jsx>{customStyles}</style>
      
      {/* Interactive Mouse Follower */}
      <motion.div
        className="fixed w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full pointer-events-none z-50 opacity-20 blur-sm"
        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28
        }}
      />
      
      <Header />
      


      {/* Enhanced Subject Categories Navigation */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-purple-50/50"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-200/20 rounded-full blur-xl animate-bounce-glow"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-blue-200/20 rounded-full blur-xl animate-bounce-glow" style={{ animationDelay: '1s' }}></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent"
              animate={{ backgroundPosition: ["0%", "100%", "0%"] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Subject Categories
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Explore our comprehensive range of subjects organized into three main categories
            </motion.p>
          </motion.div>

          {/* Enhanced Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {subjectCategories.map((category, index) => (
              <motion.button
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => setActiveCategory(category.id as SubjectCategoryId)}
                className={`flex items-center space-x-3 px-6 py-4 rounded-xl font-semibold transition-all duration-300 group relative overflow-hidden ${
                  activeCategory === category.id
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg transform scale-105`
                    : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md hover:shadow-lg hover-lift'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  animate={{ 
                    rotate: activeCategory === category.id ? 360 : 0,
                    scale: activeCategory === category.id ? 1.1 : 1
                  }}
                  transition={{ duration: 0.5 }}
                >
                  {category.icon}
                </motion.div>
                <span>{category.title}</span>
                {activeCategory === category.id && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute inset-0 bg-white/10 rounded-xl animate-shimmer"
                  />
                )}
                <motion.div
                  className="absolute bottom-0 left-0 h-0.5 bg-white/50"
                  initial={{ width: 0 }}
                  animate={{ width: activeCategory === category.id ? "100%" : 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            ))}
          </div>

          {/* Enhanced Level Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {levelOptions.map((level, index) => (
              <motion.button
                key={level}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                onClick={() => setSelectedLevel(level)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 relative overflow-hidden group ${
                  selectedLevel === level
                    ? 'bg-indigo-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md hover-lift'
                }`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {level === 'all' ? 'All Levels' : level}
                {selectedLevel === level && (
                  <motion.div
                    layoutId="levelIndicator"
                    className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 -z-10 rounded-lg"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Subjects Display */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white/50 to-gray-50/50 relative">
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {/* Enhanced Category Header */}
              <motion.div 
                className="text-center mb-16"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <motion.h3 
                  className="text-3xl md:text-4xl font-bold mb-4 text-gray-800"
                  animate={{ scale: [1, 1.02, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {subjectCategories.find(cat => cat.id === activeCategory)?.title}
                </motion.h3>
                <motion.p 
                  className="text-lg text-gray-600 max-w-2xl mx-auto"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {subjectCategories.find(cat => cat.id === activeCategory)?.description}
                </motion.p>
              </motion.div>

              {/* Enhanced Subjects Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {filteredSubjects.map((subject: Subject, index: number) => (
                  <InteractiveSubjectCard
                    key={subject.name}
                    subject={subject}
                    category={subjectCategories.find(cat => cat.id === activeCategory)!}
                    index={index}
                  />
                ))}
              </div>

              {filteredSubjects.length === 0 && (
                <motion.div 
                  className="text-center py-16"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.div 
                    className="text-gray-400 mb-4"
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <BookOpen className="w-16 h-16 mx-auto" />
                  </motion.div>
                  <h3 className="text-xl font-semibold text-gray-600 mb-2">No subjects found</h3>
                  <p className="text-gray-500">
                    No subjects available for the selected level in this category.
                  </p>
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Enhanced Additional Information Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-indigo-50 to-purple-50 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-32 h-32 bg-gradient-to-r from-purple-200/20 to-indigo-200/20 rounded-full blur-xl"
              animate={{
                x: [0, 100, 0],
                y: [0, -50, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 10 + i * 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 2
              }}
              style={{
                left: `${i * 20}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
              animate={{ 
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Why Choose Our Subjects?
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Brain className="w-12 h-12" />,
                title: 'Holistic Development',
                description: 'Our subjects are designed to develop cognitive, emotional, and physical aspects of students.',
                color: 'from-blue-500 to-indigo-600',
                particles: 8
              },
              {
                icon: <Users className="w-12 h-12" />,
                title: 'Expert Faculty',
                description: 'Experienced teachers with specialized knowledge in their respective subject areas.',
                color: 'from-purple-500 to-violet-600',
                particles: 6
              },
              {
                icon: <Trophy className="w-12 h-12" />,
                title: 'Modern Facilities',
                description: 'State-of-the-art laboratories, libraries, and technology to support learning.',
                color: 'from-emerald-500 to-green-600',
                particles: 10
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="interactive-card hover-lift bg-white rounded-2xl shadow-lg p-8 text-center group relative overflow-hidden"
                whileHover={{ y: -10, scale: 1.02 }}
              >
                {/* Floating particles */}
                {[...Array(feature.particles)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-0 group-hover:opacity-60"
                    animate={{
                      x: [0, Math.random() * 200 - 100],
                      y: [0, Math.random() * 200 - 100],
                      opacity: [0, 0.6, 0]
                    }}
                    transition={{
                      duration: 2 + Math.random() * 2,
                      repeat: Infinity,
                      delay: Math.random() * 2
                    }}
                    style={{
                      left: "50%",
                      top: "50%"
                    }}
                  />
                ))}

                <motion.div
                  className={`inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r ${feature.color} text-white mb-6 relative z-10`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ 
                    rotate: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                  }}
                >
                  {feature.icon}
                  <motion.div
                    className="absolute inset-0 rounded-full bg-white/20"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </motion.div>
                
                <motion.h3 
                  className="text-xl font-bold text-gray-800 mb-4"
                  whileHover={{ scale: 1.05 }}
                >
                  {feature.title}
                </motion.h3>
                
                <motion.p 
                  className="text-gray-600"
                  initial={{ opacity: 0.8 }}
                  whileHover={{ opacity: 1 }}
                >
                  {feature.description}
                </motion.p>

                {/* Hover shine effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 opacity-0 group-hover:opacity-100"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 
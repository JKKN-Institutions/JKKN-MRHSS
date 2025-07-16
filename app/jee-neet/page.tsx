'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { 
  GraduationCap, 
  BookOpen, 
  Users, 
  Target,
  Award,
  Brain,
  TrendingUp,
  Calculator,
  Globe,
  FlaskConical,
  Computer,
  Heart,
  Trophy,
  ChevronRight,
  Play,
  Star,
  Microscope,
  Clock,
  CheckCircle,
  ArrowRight,
  Zap,
  Users2,
  Medal,
  BookMarked,
  Lightbulb,
  ChartBar,
  Timer,
  Sparkles,
  Atom,
  Dna,
  Beaker,
  PieChart,
  BarChart3,
  TrendingDown,
  Rocket,
  Shield,
  Crown,
  Gem
} from 'lucide-react';

// Enhanced custom animations
const customStyles = `
  @keyframes float-slow {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-20px) rotate(2deg); }
  }
  
  @keyframes float-medium {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-15px) rotate(-2deg); }
  }
  
  @keyframes float-fast {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-10px) rotate(1deg); }
  }
  
  @keyframes glow-pulse {
    0%, 100% {
      box-shadow: 0 0 20px rgba(59, 130, 246, 0.3),
                  0 0 40px rgba(59, 130, 246, 0.2),
                  0 0 80px rgba(59, 130, 246, 0.1);
    }
    50% {
      box-shadow: 0 0 30px rgba(59, 130, 246, 0.5),
                  0 0 60px rgba(59, 130, 246, 0.3),
                  0 0 120px rgba(59, 130, 246, 0.2);
    }
  }
  
  @keyframes gradient-shift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
  
  @keyframes text-shimmer {
    0% { background-position: -200% center; }
    100% { background-position: 200% center; }
  }
  
  @keyframes morph {
    0% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
    50% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
    100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
  }

  .float-slow { animation: float-slow 6s ease-in-out infinite; }
  .float-medium { animation: float-medium 4s ease-in-out infinite; }
  .float-fast { animation: float-fast 3s ease-in-out infinite; }
  .glow-pulse { animation: glow-pulse 2s ease-in-out infinite; }
  .gradient-shift { 
    background: linear-gradient(-45deg, #667eea, #764ba2, #f093fb, #f5576c);
    background-size: 400% 400%;
    animation: gradient-shift 8s ease infinite;
  }
  .text-shimmer {
    background: linear-gradient(120deg, transparent, rgba(255,255,255,0.8), transparent);
    background-size: 200% 100%;
    animation: text-shimmer 2s infinite;
    -webkit-background-clip: text;
    background-clip: text;
  }
  .morph-blob {
    animation: morph 8s ease-in-out infinite;
  }
  
  .glass-card {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  }
  
  .neon-border {
    position: relative;
    overflow: hidden;
  }
  
  .neon-border::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
    transition: left 0.5s;
  }
  
  .neon-border:hover::before {
    left: 100%;
  }
`;

// Enhanced Counter Component with animations
const AnimatedCounter = ({ end, duration = 2000, suffix = '', prefix = '' }: { 
  end: number; 
  duration?: number; 
  suffix?: string; 
  prefix?: string; 
}) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const isInView = useInView(countRef);

  useEffect(() => {
    if (!isInView) return;
    
    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutCubic = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOutCubic * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, isInView]);

  return <span ref={countRef}>{prefix}{count}{suffix}</span>;
};

// Enhanced Feature Card with better animations
const EnhancedFeatureCard = ({ 
  icon: Icon, 
  title, 
  description, 
  gradient,
  delay = 0
}: { 
  icon: any; 
  title: string; 
  description: string; 
  gradient: string;
  delay?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 50, scale: 0.9 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ duration: 0.6, delay, type: "spring", bounce: 0.4 }}
    whileHover={{ y: -10, scale: 1.02 }}
    className={`relative overflow-hidden rounded-2xl p-8 ${gradient} group cursor-pointer neon-border`}
  >
    <div className="relative z-10">
      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="w-16 h-16 mx-auto mb-6 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm"
      >
        <Icon className="w-8 h-8 text-white" />
      </motion.div>
             <h3 className="text-2xl font-bold text-white mb-4 text-center">{title}</h3>
       <p className="text-black leading-relaxed text-center font-medium">{description}</p>
    </div>
    
    {/* Animated background elements */}
    <div className="absolute -top-10 -right-10 w-20 h-20 bg-white/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500" />
    <div className="absolute -bottom-10 -left-10 w-16 h-16 bg-white/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500" />
  </motion.div>
);

// Success Story Card with enhanced design
const EnhancedSuccessCard = ({ 
  name, 
  exam, 
  rank, 
  college, 
  quote,
  delay = 0
}: { 
  name: string; 
  exam: string; 
  rank: string; 
  college: string; 
  quote: string;
  delay?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6, delay }}
    whileHover={{ scale: 1.03, y: -5 }}
    className="glass-card rounded-2xl p-6 group hover:shadow-2xl transition-all duration-300"
  >
    <div className="flex items-start space-x-4 mb-4">
      <motion.div 
        whileHover={{ scale: 1.1 }}
        className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-xl shadow-lg"
      >
        {name.charAt(0)}
      </motion.div>
             <div className="flex-1">
         <h3 className="text-black font-bold text-lg mb-1">{name}</h3>
         <div className="flex items-center space-x-2 mb-1">
           <span className="px-2 py-1 bg-blue-500/20 text-black rounded-lg text-xs font-bold">{exam}</span>
           <span className="text-black text-sm font-bold">Rank {rank}</span>
         </div>
         <p className="text-black text-sm font-bold">{college}</p>
       </div>
      <motion.div
        whileHover={{ rotate: 15 }}
        className="p-2 bg-yellow-500/20 rounded-lg"
      >
        <Trophy className="w-5 h-5 text-yellow-400" />
      </motion.div>
    </div>
    
         <div className="relative">
       <p className="text-black italic leading-relaxed text-sm bg-white/30 p-4 rounded-lg border border-white/20 font-medium">
         "{quote}"
       </p>
       <div className="absolute -top-2 -left-2 text-3xl text-black/60">"</div>
     </div>
    
    <div className="mt-4 flex justify-between items-center pt-4 border-t border-white/10">
      <div className="flex space-x-1">
        {[1,2,3,4,5].map((star) => (
          <Star key={star} className="w-4 h-4 text-yellow-400 fill-current" />
        ))}
      </div>
             <span className="text-xs text-black font-bold bg-amber-400 px-2 py-1 rounded">Success Story</span>
    </div>
  </motion.div>
);

// Statistics Card Component
const StatCard = ({ 
  icon: Icon, 
  label, 
  value, 
  suffix = '',
  delay = 0 
}: { 
  icon: any; 
  label: string; 
  value: number; 
  suffix?: string;
  delay?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5, delay, type: "spring" }}
    whileHover={{ scale: 1.05, y: -5 }}
    className="glass-card rounded-2xl p-6 text-center group hover:shadow-xl transition-all duration-300"
  >
    <motion.div
      whileHover={{ scale: 1.1, rotate: 5 }}
      className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg"
    >
      <Icon className="w-8 h-8 text-white" />
    </motion.div>
         <div className="text-4xl font-bold text-black mb-2 glow-pulse">
       <AnimatedCounter end={value} suffix={suffix} />
     </div>
     <p className="text-black font-bold text-sm">{label}</p>
  </motion.div>
);

// Main JEE-NEET Page
const JeeNeetPage = () => {
  const [activeTab, setActiveTab] = useState<'jee' | 'neet' | 'cuet'>('jee');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Mouse tracking for interactive effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const jeeStats = [
    { label: 'Students Qualified', value: 245, icon: Users2 },
    { label: 'Top 1000 Ranks', value: 45, icon: Trophy },
    { label: 'IIT Selections', value: 23, icon: Medal },
    { label: 'Success Rate', value: 89, suffix: '%', icon: TrendingUp }
  ];

  const neetStats = [
    { label: 'NEET Qualified', value: 189, icon: Users2 },
    { label: 'Top 500 Ranks', value: 38, icon: Trophy },
    { label: 'Medical Colleges', value: 67, icon: Heart },
    { label: 'Success Rate', value: 92, suffix: '%', icon: TrendingUp }
  ];

  const cuetStats = [
    { label: 'CUET Qualified', value: 156, icon: Users2 },
    { label: 'Top Universities', value: 42, icon: Trophy },
    { label: 'Course Selections', value: 78, icon: BookOpen },
    { label: 'Success Rate', value: 88, suffix: '%', icon: TrendingUp }
  ];

  const successStories = [
    {
      name: "Arun Kumar",
      exam: "JEE Advanced",
      rank: "247",
      college: "IIT Madras - Computer Science",
      quote: "The systematic approach and dedicated faculty helped me achieve my IIT dream. The mock tests were exactly like the real exam!"
    },
    {
      name: "Priya Sharma",
      exam: "NEET",
      rank: "156",
      college: "AIIMS Delhi - MBBS",
      quote: "Excellent preparation strategy and personalized attention. The biology coaching was outstanding and helped me crack AIIMS!"
    },
    {
      name: "Rajesh Patel",
      exam: "JEE Main",
      rank: "1,234",
      college: "NIT Trichy - Electronics",
      quote: "The faculty's guidance and peer learning environment was exceptional. Daily practice sessions made all the difference!"
    }
  ];

  const jeeFeatures = [
    {
      icon: Calculator,
      title: "Advanced Mathematics",
      description: "Master Calculus, Algebra, Coordinate Geometry, and Trigonometry with innovative problem-solving techniques and daily practice sessions.",
      gradient: "bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700"
    },
    {
      icon: Atom,
      title: "Physics Excellence",
      description: "Deep dive into Mechanics, Thermodynamics, Optics, and Modern Physics with hands-on experiments and conceptual clarity.",
      gradient: "bg-gradient-to-br from-green-600 via-teal-600 to-cyan-700"
    },
    {
      icon: Beaker,
      title: "Chemistry Mastery",
      description: "Complete coverage of Organic, Inorganic, and Physical Chemistry with laboratory integration and reaction mechanisms.",
      gradient: "bg-gradient-to-br from-orange-600 via-red-600 to-pink-700"
    }
  ];

  const neetFeatures = [
    {
      icon: Dna,
      title: "Biology Excellence",
      description: "Comprehensive Botany and Zoology with emphasis on human physiology, genetics, and molecular biology concepts.",
      gradient: "bg-gradient-to-br from-green-600 via-emerald-600 to-teal-700"
    },
    {
      icon: FlaskConical,
      title: "Chemistry Focus",
      description: "Targeted approach to Organic Chemistry, Biomolecules, and important reactions specifically for medical entrance exams.",
      gradient: "bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700"
    },
    {
      icon: Calculator,
      title: "Physics Foundation",
      description: "Essential physics concepts including Mechanics, Optics, and Modern Physics tailored specifically for NEET requirements.",
      gradient: "bg-gradient-to-br from-orange-600 via-amber-600 to-yellow-700"
    }
  ];

  const cuetFeatures = [
    {
      icon: BookOpen,
      title: "Domain Knowledge",
      description: "Comprehensive coverage of specific domain subjects including Arts, Science, Commerce, and Languages for university admissions.",
      gradient: "bg-gradient-to-br from-purple-600 via-pink-600 to-rose-700"
    },
    {
      icon: Brain,
      title: "General Test",
      description: "Strengthen logical reasoning, quantitative ability, and general awareness skills essential for CUET success.",
      gradient: "bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-700"
    },
    {
      icon: Globe,
      title: "Language Proficiency",
      description: "Master multiple language options including Hindi, English, and regional languages with focused grammar and comprehension.",
      gradient: "bg-gradient-to-br from-teal-600 via-cyan-600 to-blue-700"
    }
  ];

  return (
    <>
      <style jsx>{customStyles}</style>
      
      {/* Header */}
      <Header />
      
      <div className="min-h-screen relative overflow-hidden">
        {/* Dynamic Background Elements */}
        <div className="fixed inset-0 pointer-events-none">
          <div 
            className="absolute w-96 h-96 morph-blob opacity-20"
            style={{
              background: 'linear-gradient(45deg, #667eea, #764ba2)',
              left: mousePosition.x * 0.02 + 'px',
              top: mousePosition.y * 0.02 + 'px',
              filter: 'blur(60px)',
            }}
          />
          <div 
            className="absolute w-72 h-72 morph-blob opacity-15"
            style={{
              background: 'linear-gradient(45deg, #f093fb, #f5576c)',
              right: mousePosition.x * 0.01 + 'px',
              bottom: mousePosition.y * 0.01 + 'px',
              filter: 'blur(80px)',
            }}
          />
        </div>

        {/* Floating Elements */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-20 left-20 w-8 h-8 bg-blue-500/20 rounded-full float-slow" />
          <div className="absolute top-40 right-32 w-6 h-6 bg-purple-500/20 rounded-full float-medium" />
          <div className="absolute bottom-32 left-1/4 w-4 h-4 bg-pink-500/20 rounded-full float-fast" />
          <div className="absolute top-1/3 right-20 w-10 h-10 bg-green-500/20 rounded-full float-slow" />
          <div className="absolute bottom-20 right-1/3 w-6 h-6 bg-yellow-500/20 rounded-full float-medium" />
        </div>

                 {/* Enhanced Hero Section */}
         <section className="relative min-h-screen flex items-center justify-center px-4 py-20 pt-32">
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, type: "spring", bounce: 0.4 }}
              className="mb-12"
            >
              <motion.h1 
                className="text-4xl md:text-6xl font-bold mb-8 leading-tight"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
              >
                <span className="bg-gradient-to-r text-black from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent ">
                   NEET, JEE & CUET
                 </span>
                 <br />
                 <motion.span 
                   className="text-black relative"
                   initial={{ opacity: 0, x: -50 }}
                   animate={{ opacity: 1, x: 0 }}
                   transition={{ duration: 1, delay: 0.5 }}
                 >
                   Coaching Excellence
                  <motion.div
                    className="absolute -top-4 -right-4 w-8 h-8"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  >
                    <Sparkles className="w-8 h-8 text-yellow-400" />
                  </motion.div>
                </motion.span>
              </motion.h1>
              
                             <motion.p 
                 className="text-xl md:text-2xl text-black max-w-4xl mx-auto leading-relaxed mb-8 font-medium"
                 initial={{ opacity: 0, y: 30 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 1, delay: 0.7 }}
               >
                 Achieve exam success with our comprehensive coaching for professional courses in 
                 <span className="text-cyan-600 font-bold mx-1">Engineering</span>, 
                 <span className="text-emerald-600 font-bold mx-1">Medicine</span>, and 
                 <span className="text-purple-600 font-bold mx-1">Law</span>. 
                 Join JKKN Matric Hr Sec School's proven coaching programs.
               </motion.p>
            </motion.div>

            {/* Enhanced Tab Selector */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex justify-center mb-12"
            >
                             <div className="glass-card rounded-2xl p-3 border-2 border-white/30">
                 <div className="flex flex-wrap justify-center gap-2">
                   <motion.button
                     onClick={() => setActiveTab('jee')}
                     whileHover={{ scale: 1.05 }}
                     whileTap={{ scale: 0.95 }}
                     className={`px-6 py-4 rounded-xl font-bold text-base transition-all duration-300 flex items-center space-x-2 ${
                       activeTab === 'jee'
                         ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-2xl'
                         : 'text-black hover:text-white hover:bg-white/10'
                     }`}
                   >
                     <Rocket className="w-5 h-5" />
                     <span>JEE</span>
                   </motion.button>
                   <motion.button
                     onClick={() => setActiveTab('neet')}
                     whileHover={{ scale: 1.05 }}
                     whileTap={{ scale: 0.95 }}
                     className={`px-6 py-4 rounded-xl font-bold text-base transition-all duration-300 flex items-center space-x-2 ${
                       activeTab === 'neet'
                         ? 'bg-gradient-to-r from-green-500 to-blue-600 text-white shadow-2xl'
                         : 'text-black hover:text-white hover:bg-white/10'
                     }`}
                   >
                     <Heart className="w-5 h-5" />
                     <span>NEET</span>
                   </motion.button>
                   <motion.button
                     onClick={() => setActiveTab('cuet')}
                     whileHover={{ scale: 1.05 }}
                     whileTap={{ scale: 0.95 }}
                     className={`px-6 py-4 rounded-xl font-bold text-base transition-all duration-300 flex items-center space-x-2 ${
                       activeTab === 'cuet'
                         ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white shadow-2xl'
                         : 'text-black hover:text-white hover:bg-white/10'
                     }`}
                   >
                     <BookOpen className="w-5 h-5" />
                     <span>CUET</span>
                   </motion.button>
                 </div>
               </div>
            </motion.div>

            {/* Enhanced CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
                             <motion.button 
                 whileHover={{ scale: 1.05, y: -2 }}
                 whileTap={{ scale: 0.95 }}
                 className="group px-10 py-5 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-2xl font-bold text-lg shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 flex items-center space-x-3 neon-border"
               >
                 <Gem className="w-6 h-6" />
                 <span>Start Your Journey</span>
                 <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
               </motion.button>
               
               <motion.button 
                 whileHover={{ scale: 1.05, y: -2 }}
                 whileTap={{ scale: 0.95 }}
                 className="group px-10 py-5 glass-card rounded-2xl font-bold text-lg text-black hover:bg-white/20 transition-all duration-300 flex items-center space-x-3 border-2 border-black/20"
               >
                 <Play className="w-5 h-5" />
                 <span>Watch Success Stories</span>
               </motion.button>
            </motion.div>
          </div>
        </section>

        

        {/* Enhanced Features Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
                             <h2 className="text-3xl md:text-4xl font-bold mb-6">
                 <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                   {activeTab === 'jee' ? 'JEE' : activeTab === 'neet' ? 'NEET' : 'CUET'}
                 </span>{' '}
                 <span className="text-black">Mastery Program</span>
               </h2>
                             <p className="text-xl text-purple-300 max-w-4xl mx-auto leading-relaxed">
                 Comprehensive curriculum designed with cutting-edge methodology to ensure your success
               </p>
            </motion.div>

                         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {(activeTab === 'jee' ? jeeFeatures : activeTab === 'neet' ? neetFeatures : cuetFeatures).map((feature, index) => (
                <EnhancedFeatureCard
                  key={feature.title}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  gradient={feature.gradient}
                  delay={index * 0.2}
                />
              ))}
            </div>
          </div>
                 </section>

         {/* Coaching Excellence Section */}
         <section className="py-20 relative">
           <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20 backdrop-blur-sm" />
           <div className="max-w-7xl mx-auto px-4 relative z-10">
             <motion.div
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8 }}
               className="text-center mb-16"
             >
               <h2 className="text-3xl md:text-4xl font-bold mb-6">
                 <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                   Why Choose
                 </span>
                 <span className="text-black ml-4">JKKN Coaching?</span>
               </h2>
               <p className="text-xl text-orange-300 max-w-4xl mx-auto leading-relaxed">
                 Experience comprehensive coaching with proven methodology and personalized attention
               </p>
             </motion.div>

             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
               {[
                 {
                   icon: Users,
                   title: "Expert Faculty",
                   description: "Experienced and qualified teachers dedicated to providing top-notch coaching and guidance",
                   gradient: "bg-gradient-to-br from-blue-600 to-cyan-700"
                 },
                 {
                   icon: BookMarked,
                   title: "Latest Study Materials",
                   description: "Access to updated study materials, practice papers, and comprehensive mock tests",
                   gradient: "bg-gradient-to-br from-green-600 to-teal-700"
                 },
                 {
                   icon: Clock,
                   title: "Flexible Scheduling",
                   description: "Classes conducted outside regular school hours to balance studies and exam preparation",
                   gradient: "bg-gradient-to-br from-purple-600 to-pink-700"
                 },
                 {
                   icon: Target,
                   title: "Personalized Attention",
                   description: "Individual coaching and support to address weaknesses and achieve remarkable results",
                   gradient: "bg-gradient-to-br from-orange-600 to-red-700"
                 }
               ].map((feature, index) => (
                 <motion.div
                   key={feature.title}
                   initial={{ opacity: 0, y: 50 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   transition={{ duration: 0.6, delay: index * 0.1 }}
                   whileHover={{ y: -10, scale: 1.02 }}
                   className={`relative overflow-hidden rounded-2xl p-6 ${feature.gradient} group cursor-pointer`}
                 >
                   <div className="relative z-10 text-center">
                     <motion.div
                       whileHover={{ scale: 1.1, rotate: 5 }}
                       className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm"
                     >
                       <feature.icon className="w-8 h-8 text-white" />
                     </motion.div>
                     <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                     <p className="text-black leading-relaxed text-sm font-medium">{feature.description}</p>
                   </div>
                   <div className="absolute -top-10 -right-10 w-20 h-20 bg-white/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500" />
                 </motion.div>
               ))}
             </div>

             {/* School Commitment Section */}
             <motion.div
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               transition={{ duration: 0.8 }}
               className="glass-card rounded-3xl p-8 md:p-12 text-center relative overflow-hidden border-2 border-white/30"
             >
               <div className="relative z-10">
                 <motion.div
                   initial={{ scale: 0 }}
                   whileInView={{ scale: 1 }}
                   transition={{ duration: 0.5, delay: 0.3 }}
                   className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center"
                 >
                   <GraduationCap className="w-10 h-10 text-white" />
                 </motion.div>
                 
                 <h3 className="text-3xl md:text-4xl font-bold text-black mb-6">
                   Our Commitment to Your Success
                 </h3>
                 
                 <p className="text-lg text-gray-700 mb-8 leading-relaxed max-w-4xl mx-auto">
                   At JKKN Matric Hr Sec School, we understand the significance of entrance exams like NEET, JEE, and CUET 
                   for students aspiring to pursue professional courses. Our comprehensive coaching ensures students are 
                   well-equipped with knowledge and skills to pursue their professional aspirations.
                 </p>
                 
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                   {[
                     { title: "Thorough Understanding", desc: "Complete syllabus coverage with essential skills" },
                     { title: "Proven Results", desc: "Track record of remarkable student achievements" },
                     { title: "Future Ready", desc: "Preparing students for successful professional careers" }
                   ].map((item, index) => (
                     <motion.div
                       key={item.title}
                       initial={{ opacity: 0, y: 20 }}
                       whileInView={{ opacity: 1, y: 0 }}
                       transition={{ duration: 0.5, delay: index * 0.1 }}
                       className="bg-white/20 rounded-xl p-4 backdrop-blur-sm"
                     >
                       <h4 className="font-bold text-black mb-2">{item.title}</h4>
                       <p className="text-gray-700 text-sm">{item.desc}</p>
                     </motion.div>
                   ))}
                 </div>
               </div>
             </motion.div>
           </div>
         </section>

         {/* Enhanced Success Stories */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-purple-900/20 backdrop-blur-sm" />
          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
                             <h2 className="text-3xl md:text-4xl font-bold mb-6">
                 <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                   Success Stories
                 </span>
                 <span className="text-black ml-4">& Achievements</span>
               </h2>
                             <p className="text-xl text-teal-300 max-w-3xl mx-auto">
                 Real achievements from our dedicated students
               </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {successStories.map((story, index) => (
                <EnhancedSuccessCard
                  key={story.name}
                  {...story}
                  delay={index * 0.2}
                />
              ))}
            </div>
          </div>
        </section>

        
      </div>
      
      {/* Footer */}
      <Footer />
    </>
  );
};

export default JeeNeetPage; 
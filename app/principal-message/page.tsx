'use client';

import React from 'react';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import { 
  Heart, 
  Users, 
  BookOpen, 
  Award,
  Star,
  Globe,
  Lightbulb,
  Target,
  Quote,
  MessageCircle,
  Trophy,
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
const Header = dynamic(() => import('../components/Header'), { 
  ssr: false,
  loading: () => <HeaderSkeleton />
});
const Footer = dynamic(() => import('../components/Footer'), { 
  ssr: false,
  loading: () => <FooterSkeleton />
});

export default function PrincipalMessage() {
  const visionPoints = [
    {
      icon: <Star className="w-8 h-8" />,
      title: "Academic Excellence",
      description: "Fostering a culture of continuous learning and academic achievement that prepares our students for global success.",
      color: "from-yellow-400 to-orange-500"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Character Building",
      description: "Developing strong moral values, empathy, and ethical leadership that will guide our students throughout their lives.",
      color: "from-pink-400 to-red-500"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community Spirit",
      description: "Creating a supportive, inclusive environment where every student, teacher, and family feels valued and connected.",
      color: "from-blue-400 to-purple-500"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Perspective",
      description: "Preparing our students to be responsible global citizens who can contribute positively to our interconnected world.",
      color: "from-green-400 to-teal-500"
    }
  ];

  const achievements = [
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Academic Recognition",
      description: "Consistently ranked among the top educational institutions in the region",
      stats: "Top 5% Schools"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Student Success",
      description: "Outstanding university placement rates and scholarship achievements",
      stats: "95% University Acceptance"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Innovation in Education",
      description: "Leading implementation of modern teaching methodologies and technology",
      stats: "100% Digital Classrooms"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Holistic Development",
      description: "Comprehensive programs for sports, arts, and character development",
      stats: "50+ Extracurricular Activities"
    }
  ];

  const principalQuotes = [
    {
      quote: "Education is not just about acquiring knowledge; it's about igniting the spark of curiosity that will burn bright throughout a lifetime.",
      context: "On the Philosophy of Learning"
    },
    {
      quote: "Every child who walks through our doors carries within them unlimited potential. Our job is to help them discover and nurture that potential.",
      context: "On Student Potential"
    },
    {
      quote: "A school is more than buildings and books; it's a community where dreams take shape and futures are forged.",
      context: "On School Community"
    }
  ];

  return (
    <div className="min-h-screen custom-gradient">
      {/* Custom CSS Styles */}
      <style jsx>{customStyles}</style>
      
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen pt-20 sm:pt-32 pb-12 sm:pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(165,28,131,1)] to-[rgba(0,63,19,1)] animate-gradient-xy opacity-90"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(165,28,131,0.8)] to-[rgba(0,63,19,0.8)] animate-gradient-xy-reverse opacity-80"></div>
        
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
        
        <div className="relative max-w-7xl mx-auto z-10 h-full">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center h-full">
            {/* Left Side Content - Order 2 on mobile, 1 on desktop */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6 sm:space-y-8 order-2 lg:order-1"
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="flex items-center mb-4 sm:mb-6">
                  <MessageCircle className="w-8 h-8 sm:w-12 sm:h-12 text-white mr-3 sm:mr-4" />
                  <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent drop-shadow-lg leading-tight">
                    Principal's Message
                  </h1>
                </div>
                <p className="text-sm sm:text-base md:text-lg text-white/90 leading-relaxed drop-shadow-md mb-6 sm:mb-8">
                  A personal reflection on our educational journey, vision for the future, and commitment to excellence.
                </p>
              </motion.div>

              {/* Principal Info Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="bg-white/20 backdrop-blur-md rounded-2xl p-4 sm:p-6"
              >
                <div className="flex items-center mb-3 sm:mb-4">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/30 rounded-full flex items-center justify-center mr-3 sm:mr-4">
                    <BookOpen className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-white">M Koshi Priya</h3>
                    <p className="text-white/80 text-[9px] sm:text-xs">Principal, NV School</p>
                    <p className="text-white/70 text-[9px] sm:text-[11px]">M.A (Eng)., M.A (His)., Diploma in M.T.T., B.Ed., TESOL</p>
                  </div>
                </div>
                <p className="text-white/90 text-xs sm:text-sm leading-relaxed">
                  With over 20 years of experience in education, I am passionate about creating 
                  an environment where every student can thrive and reach their full potential.
                </p>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-3 sm:gap-4"
              >
                <button className="bg-white text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-xs sm:text-sm hover:bg-blue-50 transform hover:scale-105 transition-all duration-300 shadow-lg">
                  Meet Our Team
                </button>
                <button className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-xs sm:text-sm hover:bg-white hover:text-blue-600 transform hover:scale-105 transition-all duration-300">
                  Schedule a Visit
                </button>
              </motion.div>
            </motion.div>

            {/* Right Side Principal Photo - Order 1 on mobile, 2 on desktop */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative block mx-auto mt-8 lg:mt-0 lg:block order-1 lg:order-2"
            >
              <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[600px] flex items-center justify-center">
                {/* Principal Photo Placeholder */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="relative w-56 h-64 sm:w-64 sm:h-72 md:w-80 md:h-96 bg-white/20 backdrop-blur-md rounded-3xl border border-white/30 shadow-2xl"
                >
                  <img 
                    src="/images/nv-prince.jpeg" 
                    alt="Principal" 
                    className="w-full h-full object-cover rounded-3xl"
                  />
                </motion.div>

                {/* Floating Achievement Icons */}
                {achievements.map((achievement, index) => {
                  const positions = [
                    { top: '5%', left: '5%', delay: 0.8 },
                    { top: '15%', right: '5%', delay: 1.0 },
                    { bottom: '25%', left: '10%', delay: 1.2 },
                    { bottom: '5%', right: '10%', delay: 1.4 }
                  ];
                  
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.8, delay: positions[index].delay }}
                      className="absolute w-12 h-12 sm:w-16 sm:h-16 bg-white/20 rounded-full flex items-center justify-center shadow-lg backdrop-blur-md"
                      style={positions[index]}
                    >
                      <div className="text-white">
                        {achievement.icon}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <motion.div
          animate={{ 
            y: [0, -30, 0],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-1/4 w-16 h-16 sm:w-24 sm:h-24 bg-white/10 rounded-full"
        ></motion.div>
        
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, -180, -360]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
          className="absolute bottom-1/4 right-1/4 w-12 h-12 sm:w-20 sm:h-20 bg-white/10 rounded-full"
        ></motion.div>
      </section>

      {/* Personal Message Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
              A Message from Our Principal
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-xl relative overflow-hidden"
          >
            {/* Quote Icon */}
            <div className="absolute top-6 left-6 text-blue-600/20">
              <Quote className="w-24 h-24" />
            </div>
            
            <div className="relative z-10">
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-8 first-letter:text-6xl first-letter:font-bold first-letter:text-blue-600 first-letter:float-left first-letter:mr-3 first-letter:mt-1">
              Dear Students, Parents, and Esteemed Visitors
              </p>
              
              <p className="text-base text-gray-700 leading-relaxed mb-6">
              It is with great pride and enthusiasm that I extend a warm welcome to all of you. At Nattraja Vidhyalya, we are committed to providing an education that nurtures young minds and prepares them for a successful future.
              </p>
              
              <p className="text-base text-gray-700 leading-relaxed mb-6">
              Our school is not just an institution; it is a thriving community where every student is encouraged to reach their full potential. We believe in the holistic development of our students, where academic excellence goes hand in hand with personal growth. Our dedicated team of educators employs innovative teaching methods and integrates modern technology to make learning an engaging and enriching experience.
              </p>
              
              <p className="text-base text-gray-700 leading-relaxed mb-6">
              We offer a curriculum that is designed to meet the highest standards of the board, ensuring that our students are well-prepared for the challenges of the future. Our focus is on fostering critical thinking, creativity, and a lifelong love for learning. Beyond academics, we provide ample opportunities for our students to explore their interests and talents through a wide range of extracurricular activities
              </p>
              
              <p className="text-base text-gray-700 leading-relaxed mb-8">
              Our state-of-the-art facilities support our commitment to providing a conducive learning environment. From well-equipped classrooms and laboratories to sports and arts facilities, we strive to create an atmosphere where students can thrive.
              </p>
              
              <p className="text-base text-gray-700 leading-relaxed mb-8">
              At Nattraja Vidhyalya, we value the partnership between our school, parents, and the community. We believe that education is a collaborative effort, and we encourage active involvement from all stakeholders to ensure the success of our students.
              </p>

              <p className="text-base text-gray-700 leading-relaxed mb-8">
              As we look towards the future, we remain dedicated to our mission of nurturing responsible, compassionate, and confident individuals who are ready to make a positive impact on the world.
              </p>

              <p className="text-base text-gray-700 leading-relaxed mb-8">
              Thank you for being a part of the Nattraja Vidhyalya family. Together, let us inspire and empower our students to achieve greatness.
              </p>

              <div className="pt-6">
                <p className="text-base font-semibold text-gray-800 mb-2">With warm regards,</p>
                <p className="text-lg font-bold text-blue-600">M Koshi Priya <small>M.A (Eng)., M.A (His)., Diploma in M.T.T., B.Ed., TESOL</small></p>
                <p className="text-sm text-gray-600">Principal</p>
                <p className="text-sm text-gray-600">Nattraja Vidhyalya, Kumarapalayam</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import { 
  Music, 
  Heart, 
  Star, 
  Users, 
  BookOpen, 
  Award,
  Shield,
  Globe,
  Lightbulb,
  TreePine,
  Crown,
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
  
  @keyframes musical-notes {
    0%, 100% {
      transform: translateY(0px) scale(1);
    }
    50% {
      transform: translateY(-30px) scale(1.1);
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
  
  .animate-musical-notes {
    animation: musical-notes 4s ease-in-out infinite;
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

export default function SchoolAnthemMotto() {
  const schoolMotto = {
    title: "Our School Motto",
    text: "\"Satyam Shivam Sundaram\"",
    translation: "Truth, Goodness, Beauty",
    description: "Our motto embodies the three fundamental principles that guide our educational philosophy: the pursuit of truth through knowledge, the cultivation of goodness through character, and the appreciation of beauty through arts and culture."
  };

  const anthemVerses = [
    {
      number: 1,
      lines: [
        "In halls of learning, bright and grand,",
        "Where wisdom grows from heart to hand,",
        "NV School, our pride and joy,",
        "Shapes every girl and every boy."
      ]
    },
    {
      number: 2,
      lines: [
        "With truth as guide and knowledge bright,",
        "We strive to reach each worthy height,",
        "In unity we stand as one,",
        "Till life's great journey has begun."
      ]
    },
    {
      number: 3,
      lines: [
        "Through science, arts, and literature,",
        "We build a future strong and sure,",
        "With values deep and spirits free,",
        "We'll serve humanity."
      ]
    },
    {
      number: 4,
      lines: [
        "Oh NV School, forever true,",
        "We pledge our loyalty to you,",
        "May your light forever shine,",
        "Through all of space and all of time."
      ]
    }
  ];

  const mottoValues = [
    {
      icon: <Crown className="w-8 h-8" />,
      title: "Satyam (Truth)",
      description: "We believe in the power of truth and honesty in all our endeavors. Truth forms the foundation of genuine learning and authentic relationships.",
      color: "from-yellow-400 to-orange-500",
      principles: ["Intellectual honesty", "Transparent communication", "Factual accuracy", "Authentic expression"]
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Shivam (Goodness)",
      description: "Goodness encompasses moral excellence, compassion, and service to others. We nurture students to be forces of positive change in the world.",
      color: "from-green-400 to-teal-500",
      principles: ["Moral excellence", "Compassionate service", "Ethical leadership", "Social responsibility"]
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Sundaram (Beauty)",
      description: "Beauty in thought, word, and deed enriches our lives and inspires creativity. We cultivate appreciation for beauty in all its forms.",
      color: "from-purple-400 to-pink-500",
      principles: ["Aesthetic appreciation", "Creative expression", "Cultural understanding", "Artistic excellence"]
    }
  ];

  const anthemMeaning = {
    title: "The Spirit Behind Our Anthem",
    description: "Our school anthem is more than just words set to music; it's a declaration of our shared values and aspirations. Each verse reflects our commitment to holistic education, character development, and service to humanity.",
    themes: [
      {
        theme: "Unity and Belonging",
        description: "The anthem emphasizes our school as a place where every student belongs and contributes to our collective success.",
        icon: <Users className="w-6 h-6" />
      },
      {
        theme: "Academic Excellence",
        description: "We celebrate the pursuit of knowledge across all disciplines, from sciences to arts and literature.",
        icon: <BookOpen className="w-6 h-6" />
      },
      {
        theme: "Character Formation",
        description: "The anthem highlights our commitment to developing strong moral character and ethical leadership.",
        icon: <Shield className="w-6 h-6" />
      },
      {
        theme: "Service to Humanity",
        description: "We inspire students to use their education and talents in service of the greater good.",
        icon: <Globe className="w-6 h-6" />
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Custom CSS Styles */}
      <style jsx>{customStyles}</style>
      
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 animate-gradient-xy opacity-90"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 via-purple-600 to-rose-600 animate-gradient-xy-reverse opacity-80"></div>
        
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
                  School Anthem & Motto
                </h1>
                <p className="text-xl md:text-2xl text-white/90 leading-relaxed drop-shadow-md mb-8">
                  Discover the inspiring words and timeless values that unite our school community and guide our educational journey.
                </p>
              </motion.div>

              {/* Motto Highlight */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="bg-white/20 backdrop-blur-md rounded-2xl p-6 border border-white/30"
              >
                <div className="flex items-center mb-4">
                  <Crown className="w-8 h-8 text-white mr-3" />
                  <h3 className="text-xl font-bold text-white">Our Motto</h3>
                </div>
                <div className="text-3xl font-bold text-white mb-2">
                  "Satyam Shivam Sundaram"
                </div>
                <p className="text-white/90 text-lg">
                  Truth, Goodness, Beauty
                </p>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <button className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 transform hover:scale-105 transition-all duration-300 shadow-lg">
                  Listen to Our Anthem
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-purple-600 transform hover:scale-105 transition-all duration-300">
                  Learn Our Values
                </button>
              </motion.div>
            </motion.div>

            {/* Right Side Musical Illustration */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative hidden lg:block"
            >
              {/* Musical Notes Animation */}
              <div className="relative w-full h-[600px]">
                {/* Central Music Symbol */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white/90 rounded-full flex items-center justify-center shadow-2xl animate-pulse-glow"
                >
                  <Music className="w-16 h-16 text-purple-600" />
                </motion.div>

                {/* Animated School Images */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.8 }}
                  className="absolute top-10 left-10 w-24 h-24 rounded-2xl overflow-hidden shadow-xl border-4 border-white/50"
                >
                  <motion.img
                    animate={{ 
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, 0]
                    }}
                    transition={{ 
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=400&fit=crop&crop=center"
                    alt="School Building"
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8, x: -20 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  transition={{ duration: 1, delay: 1.0 }}
                  className="absolute top-20 right-16 w-20 h-20 rounded-full overflow-hidden shadow-xl border-4 border-white/50"
                >
                  <motion.img
                    animate={{ 
                      scale: [1, 1.2, 1],
                      y: [0, -5, 0]
                    }}
                    transition={{ 
                      duration: 3.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
                    alt="Student"
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8, y: 30 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 1, delay: 1.2 }}
                  className="absolute bottom-20 left-16 w-28 h-20 rounded-xl overflow-hidden shadow-xl border-4 border-white/50"
                >
                  <motion.img
                    animate={{ 
                      scale: [1, 1.05, 1],
                      x: [0, 3, 0]
                    }}
                    transition={{ 
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop&crop=center"
                    alt="Books and Learning"
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8, x: 20 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  transition={{ duration: 1, delay: 1.4 }}
                  className="absolute bottom-32 right-8 w-22 h-22 rounded-2xl overflow-hidden shadow-xl border-4 border-white/50"
                >
                  <motion.img
                    animate={{ 
                      scale: [1, 1.15, 1],
                      rotate: [0, -3, 0]
                    }}
                    transition={{ 
                      duration: 4.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop&crop=center"
                    alt="Musical Instruments"
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8, y: -20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 1, delay: 1.6 }}
                  className="absolute top-32 left-1/2 transform -translate-x-1/2 w-20 h-20 rounded-full overflow-hidden shadow-xl border-4 border-white/50"
                >
                  <motion.img
                    animate={{ 
                      scale: [1, 1.1, 1],
                      y: [0, -8, 0]
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=400&fit=crop&crop=faces"
                    alt="Students Learning"
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8, x: -30 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  transition={{ duration: 1, delay: 1.8 }}
                  className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-24 h-18 rounded-xl overflow-hidden shadow-xl border-4 border-white/50"
                >
                  <motion.img
                    animate={{ 
                      scale: [1, 1.08, 1],
                      rotate: [0, 2, 0]
                    }}
                    transition={{ 
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=400&h=300&fit=crop&crop=center"
                    alt="School Activities"
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8, y: 25 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 1, delay: 2.0 }}
                  className="absolute top-1/4 right-2 w-18 h-18 rounded-full overflow-hidden shadow-xl border-4 border-white/50"
                >
                  <motion.img
                    animate={{ 
                      scale: [1, 1.12, 1],
                      x: [0, -4, 0]
                    }}
                    transition={{ 
                      duration: 4.2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400&h=400&fit=crop&crop=center"
                    alt="Graduation"
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                {/* Floating Musical Notes */}
                {[
                  { size: 'w-8 h-8', delay: 0.7, x: 80, y: -60, duration: 3 },
                  { size: 'w-6 h-6', delay: 0.9, x: -90, y: -40, duration: 4 },
                  { size: 'w-10 h-10', delay: 1.1, x: 100, y: 50, duration: 3.5 },
                  { size: 'w-7 h-7', delay: 1.3, x: -80, y: 70, duration: 4.5 },
                  { size: 'w-5 h-5', delay: 1.5, x: 60, y: -100, duration: 3.8 },
                  { size: 'w-9 h-9', delay: 1.7, x: -60, y: 110, duration: 4.2 },
                ].map((note, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: note.delay }}
                    className={`absolute top-1/2 left-1/2 ${note.size} bg-white/80 rounded-full flex items-center justify-center shadow-lg`}
                    style={{
                      transform: `translate(calc(-50% + ${note.x}px), calc(-50% + ${note.y}px))`
                    }}
                  >
                    <motion.div
                      animate={{ 
                        y: [0, -20, 0],
                        rotate: [0, 360]
                      }}
                      transition={{ 
                        duration: note.duration,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <Music className={`${note.size.replace('w-', 'w-').replace('h-', 'h-')} text-purple-600`} />
                    </motion.div>
                  </motion.div>
                ))}

                {/* Motto Elements */}
                {[
                  { text: 'Truth', icon: Crown, color: 'from-yellow-400 to-orange-500', x: -140, y: -30 },
                  { text: 'Goodness', icon: Heart, color: 'from-green-400 to-teal-500', x: 140, y: -30 },
                  { text: 'Beauty', icon: Star, color: 'from-purple-400 to-pink-500', x: 0, y: 140 },
                ].map((element, index) => (
                  <motion.div
                    key={element.text}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 2 + index * 0.2 }}
                    className={`absolute top-1/2 left-1/2 bg-gradient-to-br ${element.color} rounded-2xl px-4 py-3 shadow-xl`}
                    style={{
                      transform: `translate(calc(-50% + ${element.x}px), calc(-50% + ${element.y}px))`
                    }}
                  >
                    <div className="flex items-center space-x-2 text-white">
                      <element.icon className="w-5 h-5" />
                      <span className="font-semibold text-sm">{element.text}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Floating Musical Elements */}
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
          className="absolute top-1/4 left-1/4 w-24 h-24 bg-white/10 rounded-full flex items-center justify-center"
        >
          <Music className="w-8 h-8 text-white/50" />
        </motion.div>
        
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
          className="absolute bottom-1/4 right-1/4 w-20 h-20 bg-white/10 rounded-full flex items-center justify-center"
        >
          <Quote className="w-6 h-6 text-white/50" />
        </motion.div>
      </section>

      {/* School Motto Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
              {schoolMotto.title}
            </h2>
            <div className="text-5xl md:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
              {schoolMotto.text}
            </div>
            <div className="text-2xl md:text-3xl text-gray-600 mb-8 font-medium">
              {schoolMotto.translation}
            </div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              {schoolMotto.description}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {mottoValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center mb-6 shadow-lg`}>
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{value.description}</p>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-800 text-sm uppercase tracking-wider">
                    Key Aspects:
                  </h4>
                  <ul className="space-y-1">
                    {value.principles.map((principle, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-center">
                        <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mr-2 flex-shrink-0"></div>
                        {principle}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* School Anthem Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
              Our School Anthem
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              These inspiring verses unite our school community and express our shared aspirations for excellence, unity, and service.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {anthemVerses.map((verse, index) => (
              <motion.div
                key={verse.number}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {verse.number}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">Verse {verse.number}</h3>
                </div>
                <div className="space-y-3">
                  {verse.lines.map((line, lineIndex) => (
                    <motion.p
                      key={lineIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.2 + lineIndex * 0.1 }}
                      className="text-gray-700 text-lg leading-relaxed italic"
                    >
                      {line}
                    </motion.p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Anthem Meaning Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
              {anthemMeaning.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              {anthemMeaning.description}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {anthemMeaning.themes.map((theme, index) => (
              <motion.div
                key={theme.theme}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform duration-300">
                    {theme.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">{theme.theme}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{theme.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 
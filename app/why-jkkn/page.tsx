'use client';

import React from 'react';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import Image from 'next/image';
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Custom CSS Styles */}
      <style jsx>{customStyles}</style>

      <Header />

      <div className="flex justify-center pt-32">
        <Image
          src="/images/founder.jpg"
          alt="Founder J.K.K. Natarajah"
          width={300} // Adjust width as needed
          height={300} // Adjust height as needed
          className="rounded-full shadow-lg"
        />
      </div>

      {/* Personal Message Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
              A Message from Our Founder
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
                Founder J.K.K. Rangammal Charitable Trust

              </p>

              <p className="text-base text-gray-700 leading-relaxed mb-6">
              Founded in 1969 by the visionary Shri J.K.K. Nattraja Ayya, our organization has fostered an environment of inspiration, commitment, innovation, and enterprise. With a strong emphasis on excellence, we have consistently upheld our mission to empower individuals through knowledge. We firmly believe that information holds immense power, and through education, we lay the foundation for progress in every society and every family. At our institution, we strive to create an environment that promotes growth, learning, and the pursuit of excellence, making us a leading destination for those seeking quality education and a brighter future.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 
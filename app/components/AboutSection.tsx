'use client';

import { motion } from 'framer-motion';
import { BookOpen, Users, Award, Target, Lightbulb, Heart } from 'lucide-react';

const AboutSection = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const features = [
    {
      icon: BookOpen,
      title: "Academic Excellence",
      description: "Committed to providing world-class education with innovative teaching methodologies."
    },
    {
      icon: Users,
      title: "Holistic Development",
      description: "Nurturing students' physical, mental, and spiritual growth through comprehensive programs."
    },
    {
      icon: Award,
      title: "Recognition & Awards",
      description: "Consistently achieving excellence and receiving prestigious awards in education."
    },
    {
      icon: Target,
      title: "Future-Ready Skills",
      description: "Equipping students with 21st-century skills for global success."
    },
    {
      icon: Lightbulb,
      title: "Innovation Hub",
      description: "Fostering creativity and critical thinking through modern learning environments."
    },
    {
      icon: Heart,
      title: "Values-Based Education",
      description: "Instilling strong moral values and character development in every student."
    }
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating geometric shapes */}
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-pink-400/20 to-orange-400/20 rounded-full blur-xl"
          animate={{
            x: [0, -25, 0],
            y: [0, 15, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-40 left-1/4 w-40 h-40 bg-gradient-to-r from-green-400/20 to-blue-400/20 rounded-full blur-xl"
          animate={{
            x: [0, 40, 0],
            y: [0, -30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #3b82f6 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        {/* Header Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full text-sm font-medium mb-6"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></span>
            About JKKN MHSS
          </motion.div>
          
          <motion.h2
            className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Empowering Minds,
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
              Shaping Futures
            </span>
          </motion.h2>
          
          <motion.p
            className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            At JKKN MHSS, we believe in nurturing not just academic excellence, but the complete development of every student. 
            Our commitment to innovation, values, and holistic growth creates leaders of tomorrow.
          </motion.p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Column - Image/Visual */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              {/* Main image container with animated border */}
              <motion.div
                className="relative rounded-2xl overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-2xl" />
                <div className="relative h-96 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 rounded-2xl flex items-center justify-center">
                  <img
                    src="/images/about/about.webp"
                    alt="About JKKN MHSS"
                    className="object-cover w-full h-full rounded-2xl shadow-lg border-4 border-white/60"
                    style={{ maxHeight: '22rem', maxWidth: '100%' }}
                  />
                </div>
              </motion.div>
              
              {/* Floating elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg"
                animate={{
                  y: [-10, 10, -10],
                  rotate: [0, 360],
                }}
                transition={{
                  y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                  rotate: { duration: 8, repeat: Infinity, ease: "linear" }
                }}
              >
                <Award className="w-8 h-8 text-white" />
              </motion.div>
              
              <motion.div
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center shadow-lg"
                animate={{
                  y: [10, -10, 10],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                  scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                }}
              >
                <Target className="w-6 h-6 text-white" />
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div>
                             <motion.h3
                 className="text-2xl font-bold text-gray-900 mb-6"
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.6, delay: 0.2 }}
                 viewport={{ once: true }}
               >
                 Our Mission & Vision
               </motion.h3>
              
              <motion.div
                className="space-y-6"
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                <motion.div
                  className="p-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-gray-100"
                  variants={fadeInUp}
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                                     <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                     <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-3">
                       <Target className="w-4 h-4 text-white" />
                     </div>
                     Our Mission
                   </h4>
                  <p className="text-gray-600 leading-relaxed">
                    To provide exceptional education that empowers students with knowledge, skills, and values 
                    necessary to become responsible global citizens and future leaders.
                  </p>
                </motion.div>

                <motion.div
                  className="p-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-gray-100"
                  variants={fadeInUp}
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                                     <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                     <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mr-3">
                       <Lightbulb className="w-4 h-4 text-white" />
                     </div>
                     Our Vision
                   </h4>
                  <p className="text-gray-600 leading-relaxed">
                    To be a leading educational institution that fosters innovation, creativity, and excellence, 
                    preparing students to thrive in an ever-evolving world.
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="relative mb-20">
          {/* Background image for Features Grid */}
          <img
            src="/images/logo/why-jkkn/why-jkkn-background.png"
            alt="Why JKKN Background"
            className="absolute inset-0 w-full h-full object-cover opacity-10 pointer-events-none select-none z-0"
            style={{ filter: 'blur(1px)' }}
          />
          <motion.div
            className="relative z-10"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h3
              className="text-2xl font-bold text-center text-gray-900 mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Why Choose JKKN MHSS?
            </motion.h3>
          
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="group relative p-6 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                variants={fadeInUp}
                whileHover={{ 
                  scale: 1.05, 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
              >
                {/* Gradient background on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10">
                  <motion.div
                    className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <feature.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  
                                     <h4 className="text-lg font-semibold text-gray-900 mb-3">
                     {feature.title}
                   </h4>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
                     <motion.div
             className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
             whileHover={{ scale: 1.05 }}
             whileTap={{ scale: 0.95 }}
           >
             <Heart className="w-5 h-5 mr-2" />
             Join Our Community
           </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;

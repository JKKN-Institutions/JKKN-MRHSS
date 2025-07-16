"use client";

import { motion } from "framer-motion";
import { Trophy, Medal, Award, Star, Sparkles } from "lucide-react";

const AchievementsSection = () => {
  const achievements = [
    {
      icon: Trophy,
      title: "State Topper in SSLC Exams",
      description: "Our students consistently achieve outstanding results in SSLC examinations, with multiple state toppers showcasing our academic excellence.",
      emoji: "🥇",
      color: "from-yellow-500 to-orange-500",
      bgColor: "bg-gradient-to-br from-yellow-50 to-orange-50",
      iconColor: "text-yellow-600",
    },
    {
      icon: Medal,
      title: "Zonal Sports Champions",
      description: "Our sports teams have dominated zonal competitions, demonstrating excellence in athletics, team sports, and individual events.",
      emoji: "🏐",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-gradient-to-br from-blue-50 to-cyan-50",
      iconColor: "text-blue-600",
    },
    {
      icon: Award,
      title: "Best Eco-Friendly School Award 2024",
      description: "Recognized for our commitment to environmental sustainability and green initiatives in education and campus management.",
      emoji: "🏅",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-gradient-to-br from-green-50 to-emerald-50",
      iconColor: "text-green-600",
    },
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating achievement symbols */}
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 rounded-full blur-xl"
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
          className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-xl"
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
          className="absolute bottom-40 left-1/4 w-40 h-40 bg-gradient-to-r from-green-400/20 to-emerald-400/20 rounded-full blur-xl"
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
            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-yellow-500 to-orange-600 text-white rounded-full text-sm font-medium mb-6"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Star className="w-4 h-4 mr-2" />
            Celebrating Excellence
          </motion.div>
          
          <motion.h2
            className="text-2xl md:text-4xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Our Achievements
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">
              & Recognition
            </span>
          </motion.h2>
          
          <motion.p
            className="text-base text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            At JKKN MHSS, we take pride in our students' outstanding accomplishments across academics, 
            sports, and environmental initiatives. These achievements reflect our commitment to excellence 
            and holistic development.
          </motion.p>
        </motion.div>

        {/* Achievements Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              variants={fadeInUp}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`${achievement.bgColor} rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/50`}
            >
              {/* Achievement Header */}
              <div className="text-center mb-6">
                                 <motion.div
                   className="text-4xl mb-4"
                   animate={{ 
                     scale: [1, 1.1, 1],
                     rotate: [0, 5, -5, 0]
                   }}
                   transition={{
                     duration: 2,
                     repeat: Infinity,
                     ease: "easeInOut"
                   }}
                 >
                   {achievement.emoji}
                 </motion.div>
                
                                 <motion.div
                   className={`w-12 h-12 rounded-full bg-gradient-to-r ${achievement.color} flex items-center justify-center mx-auto mb-4`}
                   whileHover={{ rotate: 360 }}
                   transition={{ duration: 0.6 }}
                 >
                   <achievement.icon className={`h-6 w-6 text-white`} />
                 </motion.div>
              </div>

              {/* Content */}
                             <div className="text-center">
                 <h3 className="text-lg font-bold text-gray-900 mb-4">
                   {achievement.title}
                 </h3>
                 <p className="text-sm text-gray-600 leading-relaxed">
                   {achievement.description}
                 </p>
               </div>

              {/* Sparkle effect */}
              <motion.div
                className="absolute top-4 right-4"
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.5,
                }}
              >
                <Sparkles className="w-3 h-3 text-yellow-500" />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Recognition Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-8 shadow-lg max-w-4xl mx-auto border border-yellow-200/50">
                         <motion.div
               className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6"
               animate={{ 
                 scale: [1, 1.1, 1],
                 rotate: [0, 360]
               }}
               transition={{
                 scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                 rotate: { duration: 10, repeat: Infinity, ease: "linear" }
               }}
             >
               <Trophy className="w-8 h-8 text-white" />
             </motion.div>
            
                         <h3 className="text-xl font-bold text-gray-900 mb-4">
               Continuing the Legacy of Excellence
             </h3>
             <p className="text-gray-600 text-base leading-relaxed">
               These achievements are not just milestones but stepping stones towards greater success. 
               We continue to inspire and motivate our students to reach new heights in their academic 
               and personal journeys, building a legacy of excellence that will inspire future generations.
             </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AchievementsSection; 
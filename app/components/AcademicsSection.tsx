'use client';

import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, Users, Target, Award, Lightbulb } from 'lucide-react';

const AcademicsSection = () => {
  const academicLevels = [
    {
      icon: '🧒',
      title: "Kindergarten",
      description: "Early childhood education focusing on foundational skills, creativity, and social development in a nurturing environment.",
      features: ["Play-based learning", "Social skills development", "Creative expression", "Basic numeracy & literacy"],
      color: "from-pink-400 to-pink-600",
      bgColor: "bg-pink-50",
      iconColor: "text-pink-600"
    },
    {
      icon: '📘',
      title: "Primary School",
      description: "Comprehensive primary education building strong academic foundations and character development.",
      features: ["Core subjects mastery", "Critical thinking skills", "Character building", "Extracurricular activities"],
      color: "from-blue-400 to-blue-600",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600"
    },
    {
      icon: '📗',
      title: "Middle School",
      description: "Advanced learning with specialized subjects and preparation for higher secondary education.",
      features: ["Subject specialization", "Project-based learning", "Technology integration", "Leadership development"],
      color: "from-green-400 to-green-600",
      bgColor: "bg-green-50",
      iconColor: "text-green-600"
    },
    {
      icon: '📕',
      title: "Higher Secondary",
      description: "Specialized streams in Science, Commerce, and Arts with career-focused curriculum and guidance.",
      features: ["Stream specialization", "Career counseling", "University preparation", "Advanced research skills"],
      color: "from-purple-400 to-purple-600",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600"
    }
  ];

  const streams = [
    {
      name: "Science",
      subjects: ["Physics", "Chemistry", "Biology", "Mathematics"],
      icon: "🔬",
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Commerce",
      subjects: ["Accountancy", "Business Studies", "Economics", "Mathematics"],
      icon: "💼",
      color: "from-green-500 to-emerald-500"
    },
    {
      name: "Arts",
      subjects: ["History", "Geography", "Political Science", "Economics"],
      icon: "🎨",
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
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
            Academic Excellence
          </motion.div>
          
          <motion.h2
            className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Structured Academic
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
              Framework
            </span>
          </motion.h2>
          
          <motion.p
            className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            We provide a comprehensive educational journey from kindergarten to higher secondary, 
            ensuring every student receives quality education tailored to their developmental stage and future aspirations.
          </motion.p>
        </motion.div>

        {/* Academic Levels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {academicLevels.map((level, index) => (
            <motion.div
              key={level.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`${level.bgColor} rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300`}
            >
              {/* Icon */}
              <div className="text-4xl mb-4 text-center">{level.icon}</div>
              
              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                {level.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                {level.description}
              </p>
              
              {/* Features */}
              <ul className="space-y-2">
                {level.features.map((feature, featureIndex) => (
                  <motion.li
                    key={featureIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: (index * 0.1) + (featureIndex * 0.1) }}
                    viewport={{ once: true }}
                    className="flex items-center text-sm text-gray-600"
                  >
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${level.color} mr-3`}></div>
                    {feature}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

       

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Begin Your Academic Journey?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Join JKKN MHSS and experience excellence in education across all levels
            </p>
            <motion.button
              
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300"
            ><a href="http://localhost:3000/admissions">
              Apply Now</a>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AcademicsSection; 
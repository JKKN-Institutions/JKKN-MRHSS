'use client';

import { motion } from 'framer-motion';
import { Play, FlaskConical, Library, Bed, Bus, Heart } from 'lucide-react';

const CampusFacilitiesSection = () => {
  const facilities = [
    {
      icon: Play,
      emoji: '🏀',
      title: "Spacious Playground & Indoor Games",
      description: "State-of-the-art sports facilities including basketball courts, indoor games, and recreational areas for physical development and team building.",
      features: ["Basketball courts", "Indoor games room", "Multi-purpose sports area", "Fitness equipment"],
      color: "from-orange-400 to-red-500",
      bgColor: "bg-orange-50",
      iconColor: "text-orange-600"
    },
    {
      icon: FlaskConical,
      emoji: '🧪',
      title: "Science & Computer Labs",
      description: "Modern laboratories equipped with latest technology for hands-on learning in science and computer education.",
      features: ["Physics lab", "Chemistry lab", "Biology lab", "Computer lab"],
      color: "from-blue-400 to-cyan-500",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600"
    },
    {
      icon: Library,
      emoji: '📚',
      title: "Digital Library",
      description: "Comprehensive digital library with vast collection of books, e-resources, and study materials for academic excellence.",
      features: ["E-books collection", "Research databases", "Study spaces", "Digital resources"],
      color: "from-green-400 to-emerald-500",
      bgColor: "bg-green-50",
      iconColor: "text-green-600"
    },
    {
      icon: Bed,
      emoji: '🛏️',
      title: "Hostel for Boys & Girls",
      description: "Comfortable and secure hostel facilities with modern amenities for both boys and girls with 24/7 supervision.",
      features: ["Separate wings", "Modern amenities", "24/7 security", "Nutritious meals"],
      color: "from-purple-400 to-pink-500",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600"
    },
    {
      icon: Bus,
      emoji: '🚍',
      title: "GPS-Enabled Transport",
      description: "Safe and reliable transportation with GPS tracking for real-time monitoring and secure travel for students.",
      features: ["GPS tracking", "Safe routes", "Trained drivers", "Real-time monitoring"],
      color: "from-yellow-400 to-orange-500",
      bgColor: "bg-yellow-50",
      iconColor: "text-yellow-600"
    },
    {
      icon: Heart,
      emoji: '🩺',
      title: "Medical Care & Safety Systems",
      description: "Comprehensive medical facilities and safety systems ensuring the health and well-being of all students.",
      features: ["First aid facilities", "Regular health checkups", "Emergency response", "Safety protocols"],
      color: "from-red-400 to-pink-500",
      bgColor: "bg-red-50",
      iconColor: "text-red-600"
    }
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-50 via-white to-green-50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-green-400/20 to-blue-400/20 rounded-full blur-xl"
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
          className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-orange-400/20 to-red-400/20 rounded-full blur-xl"
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
          className="absolute bottom-40 left-1/4 w-40 h-40 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-xl"
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
            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-500 to-blue-600 text-white rounded-full text-sm font-medium mb-6"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></span>
            Campus Facilities
          </motion.div>
          
          <motion.h2
            className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            World-Class
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Campus Facilities
            </span>
          </motion.h2>
          
          <motion.p
            className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Our campus is equipped with modern facilities designed to provide students with the best learning environment, 
            ensuring their safety, comfort, and academic success.
          </motion.p>
        </motion.div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {facilities.map((facility, index) => (
            <motion.div
              key={facility.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`${facility.bgColor} rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100`}
            >
              {/* Icon and Emoji */}
              <div className="flex items-center justify-center mb-4">
                <div className="text-4xl mr-3">{facility.emoji}</div>
                <div className={`w-12 h-12 bg-gradient-to-r ${facility.color} rounded-full flex items-center justify-center`}>
                  <facility.icon className={`w-6 h-6 ${facility.iconColor}`} />
                </div>
              </div>
              
              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                {facility.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                {facility.description}
              </p>
              
              {/* Features */}
              <ul className="space-y-2">
                {facility.features.map((feature, featureIndex) => (
                  <motion.li
                    key={featureIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: (index * 0.1) + (featureIndex * 0.1) }}
                    viewport={{ once: true }}
                    className="flex items-center text-sm text-gray-600"
                  >
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${facility.color} mr-3`}></div>
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
          <div className="bg-gradient-to-r from-green-500 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Experience Our Facilities</h3>
            <p className="text-lg mb-6 opacity-90">
              Schedule a campus tour to explore our world-class facilities and see how we create the perfect learning environment.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-white text-green-600 font-semibold rounded-full hover:bg-gray-100 transition-all"
            >
              Schedule Campus Tour
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CampusFacilitiesSection; 
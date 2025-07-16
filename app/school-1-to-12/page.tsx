"use client";

import React from "react";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

export default function School1To12Page() {
  // Animation variants
  const heroVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };
  const featureCardVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 30 },
    visible: { opacity: 1, scale: 1, y: 0 },
  };
  const ctaVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2 } },
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-100 flex flex-col items-center justify-start pt-16 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden -z-10">
          {/* Floating gradient circles */}
          <motion.div
            className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-2xl"
            animate={{ x: [0, 30, 0], y: [0, -20, 0], scale: [1, 1.1, 1] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute top-40 right-20 w-32 h-32 bg-gradient-to-r from-pink-400/20 to-blue-400/20 rounded-full blur-2xl"
            animate={{ x: [0, -25, 0], y: [0, 15, 0], scale: [1, 0.9, 1] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-40 left-1/4 w-56 h-56 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"
            animate={{ x: [0, 40, 0], y: [0, -30, 0], scale: [1, 1.2, 1] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
          {/* Animated grid pattern */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, #a78bfa 1px, transparent 0)`,
              backgroundSize: '40px 40px'
            }} />
          </div>
        </div>

        {/* Hero Section with Glassmorphism */}
        <section className="relative w-full flex flex-col items-center justify-center py-20 px-4">
          <motion.div
            className="relative z-10 max-w-3xl w-full mx-auto text-center rounded-3xl bg-white/30 backdrop-blur-lg shadow-2xl border border-white/30 p-10"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.h1
              className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6 drop-shadow-lg"
              variants={heroVariants}
              initial="hidden"
              animate="visible"
            >
              Grades 1 to 12<br />
              <motion.span
                className="text-lg md:text-2xl font-medium text-gray-700 block mt-2"
                variants={heroVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.2 }}
              >
                Empowering Every Learner, Every Step of the Way
              </motion.span>
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-gray-700 mb-8"
              variants={heroVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.4 }}
            >
              JKKN Matric Hr Sec School: Holistic Learning for Primary to Higher Secondary Education<br /><br />
              Experience comprehensive and holistic learning at JKKN Matric Hr Sec School in Tamil Nadu. Our Chrysalis curriculum nurtures students from classes 1 to 5, focusing on cognitive, social, emotional, and physical development. With experiential learning and engaging themes, we lay a strong foundation in language, math, science, and social studies. Our child-centered teaching methods incorporate technology and emphasize social-emotional skills, ensuring a well-rounded education.<br /><br />
              <b>Middle School Excellence in Textbooks and Resources</b><br />
              Unlock academic success at JKKN Matric Hr Sec School’s middle school program (6th to 8th standard). We provide high-quality textbooks, supplementary materials, and digital resources across subjects like English, Mathematics, Science, and more. Our well-stocked library further enhances learning opportunities. With experienced teachers and comprehensive resources, we empower students to understand concepts, excel in exams, and achieve academic excellence.<br /><br />
              <b>High School Education for a Promising Future</b><br />
              Discover a comprehensive education at JKKN Matric Hr Sec School for classes 9 and 10. Aligned with the Tamil Nadu State Board curriculum, our experienced facilitators employ modern teaching methodologies and technology to make learning interactive and engaging. We foster critical thinking, problem-solving, and holistic development through a balance of academics and extracurricular activities. Prepare for a successful academic journey and future endeavors with us.<br /><br />
              <b>Gateway to Higher Education</b><br />
              Unlock your potential at JKKN Matriculation Higher Secondary School in classes 11 and 12. Our well-rounded curriculum, aligned with the Tamil Nadu State Board syllabus, offers science, commerce, and humanities streams. With a focus on critical thinking and analytical skills, we prepare students for higher education and competitive exams like NEET, JEE, CUET, and KVPY. Experience student-centered learning, digital integration, and a variety of co-curricular activities for a bright future ahead.
            </motion.p>
            <motion.div
              variants={heroVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.6 }}
            >
              <Link href="/admissions">
                <motion.button
                  className="px-8 py-3 rounded-full font-semibold text-white text-lg bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 shadow-lg hover:from-purple-600 hover:to-pink-600 transition-all"
                  whileHover={{ scale: 1.07 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Enquire Admissions
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </section>

        {/* Features Section with Staggered Animation */}
        <motion.section
          className="w-full max-w-5xl mx-auto py-16 px-4 grid md:grid-cols-3 gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {[
            {
              icon: "🧑‍🏫",
              title: "Expert Faculty",
              desc: "Dedicated, experienced teachers inspire and guide students at every stage."
            },
            {
              icon: "📖",
              title: "Future-Ready Curriculum",
              desc: "Blend of academics, technology, and life skills for holistic growth."
            },
            {
              icon: "🔬",
              title: "STEM & Innovation",
              desc: "Hands-on labs, coding, and science projects spark curiosity and problem-solving."
            },
            {
              icon: "🎭",
              title: "Arts & Culture",
              desc: "Music, dance, drama, and visual arts nurture creativity and self-expression."
            },
            {
              icon: "🏆",
              title: "Sports & Wellness",
              desc: "Wide range of sports and wellness programs for physical and mental health."
            },
            {
              icon: "🌏",
              title: "Global Perspective",
              desc: "Language learning, exchange programs, and global awareness activities."
            }
          ].map((feature, idx) => (
            <motion.div
              key={feature.title}
              className="bg-white/80 rounded-2xl shadow-xl p-8 flex flex-col items-center text-center border border-white/40 hover:scale-105 transition-transform relative overflow-hidden"
              variants={featureCardVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: idx * 0.15, duration: 0.7, type: "spring" }}
              whileHover={{ scale: 1.09, boxShadow: "0 8px 32px rgba(80,80,200,0.14)" }}
            >
              {/* Animated floating icon */}
              <motion.div
                className="text-4xl mb-4"
                animate={{ scale: [1, 1.15, 1], rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-xl font-bold mb-2 text-purple-700">{feature.title}</h3>
              <p className="text-gray-600 text-base">{feature.desc}</p>
              {/* Sparkle effect */}
              <motion.div
                className="absolute top-4 right-4"
                animate={{ opacity: [0, 1, 0], scale: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, delay: idx * 0.5 }}
              >
                <span className="inline-block w-3 h-3 rounded-full bg-gradient-to-r from-purple-400 to-pink-400" />
              </motion.div>
            </motion.div>
          ))}
        </motion.section>

        {/* Call to Action with Animation */}
        <motion.section
          className="w-full flex flex-col items-center justify-center py-12 px-4 bg-gradient-to-r from-purple-100 via-blue-100 to-pink-100 rounded-t-3xl mt-8 shadow-inner"
          variants={ctaVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2
            className="text-2xl md:text-3xl font-bold text-gray-800 mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Shape Your Child's Future with Us
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 mb-6 max-w-2xl text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Explore our Grades 1 to 12 program and see how we empower students to achieve academic excellence, personal growth, and lifelong success. Connect with us to learn more or schedule a campus visit!
          </motion.p>
          <Link href="/contact">
            <motion.button
              className="px-7 py-3 rounded-full font-semibold text-white text-lg bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shadow-lg hover:from-blue-600 hover:to-pink-600 transition-all"
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.97 }}
            >
              Contact Us
            </motion.button>
          </Link>
        </motion.section>
      </main>
      <Footer />
    </>
  );
} 
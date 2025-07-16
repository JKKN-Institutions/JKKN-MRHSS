'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, useScroll, useTransform, easeOut } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { 
  BookOpenIcon, 
  ComputerDesktopIcon, 
  UsersIcon, 
  ClockIcon,
  WifiIcon,
  AcademicCapIcon,
  BuildingLibraryIcon,
  MagnifyingGlassIcon
} from '@heroicons/react/24/outline';

const LibraryPage = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState('overview');
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  // Animation variants
  const fadeInUp = {
    initial: { y: 60, opacity: 0 },
    animate: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6, ease: easeOut }
    }
  };

  const staggerContainer = {
    animate: {
      transition: { staggerChildren: 0.1 }
    }
  };

  const scaleInCenter = {
    initial: { scale: 0.8, opacity: 0 },
    animate: { 
      scale: 1, 
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  // Library statistics
  const stats = [
    { number: '25,000+', label: 'Books Collection', icon: BookOpenIcon },
    { number: '50+', label: 'Digital Resources', icon: ComputerDesktopIcon },
    { number: '200+', label: 'Seating Capacity', icon: UsersIcon },
    { number: '12hrs', label: 'Daily Operating', icon: ClockIcon }
  ];

  // Library features
  const features = [
    {
      title: 'Digital Catalog System',
      description: 'Advanced online catalog with smart search functionality',
      icon: MagnifyingGlassIcon,
      color: 'bg-blue-500'
    },
    {
      title: 'High-Speed WiFi',
      description: 'Free high-speed internet access throughout the library',
      icon: WifiIcon,
      color: 'bg-green-500'
    },
    {
      title: 'Research Support',
      description: 'Dedicated librarians to assist with research projects',
      icon: AcademicCapIcon,
      color: 'bg-purple-500'
    },
    {
      title: 'Study Spaces',
      description: 'Quiet zones, group study rooms, and collaborative areas',
      icon: BuildingLibraryIcon,
      color: 'bg-orange-500'
    }
  ];

  // Gallery images
  const galleryImages = [
    {
      id: 1,
      src: "/images/library.png"
    },
    {
      id: 2,
      src: "/images/classroom.png"
    },
    {
      id: 3,
      src: "/images/classroom.png"
    },
    {
      id: 4,
      src: "/images/classroom.png"
    },
    {
      id: 5,
      src: "/images/classroom.png"
    },
    {
      id: 6,
      src: "/images/classroom.png"
    }
  ];

  const resources = [
    {
      title: 'Fiction & Literature',
      count: '8,500+ Books',
      description: 'Classic and contemporary literature from various cultures',
      icon: '📚'
    },
    {
      title: 'Academic Resources',
      count: '12,000+ Books',
      description: 'Textbooks, reference materials, and academic journals',
      icon: '🎓'
    },
    {
      title: 'Digital Collection',
      count: '5,000+ E-books',
      description: 'Online books, audiobooks, and digital magazines',
      icon: '💻'
    },
    {
      title: 'Multilingual Collection',
      count: '3,000+ Books',
      description: 'Books in Tamil, Hindi, English, and other regional languages',
      icon: '🌍'
    }
  ];

  return (
    <>
      <Header />
      
      <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        {/* Enhanced Hero Section */}
        <section className="relative overflow-hidden">
          <motion.div 
            style={{ y }}
            className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"
          />
          
          <div className="container mx-auto px-8 pt-32 pb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <motion.div
                variants={staggerContainer}
                initial="initial"
                animate="animate"
                className="space-y-6"
              >
                <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                  <BuildingLibraryIcon className="w-4 h-4" />
                  Matriculation Higher Secondary School
                </motion.div>
                
                <motion.h1 
                  variants={fadeInUp}
                  className="text-4xl lg:text-6xl font-bold leading-tight"
                >
                  Where Knowledge
                  <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Meets Discovery
                  </span>
                </motion.h1>
                
                <motion.p 
                  variants={fadeInUp}
                  className="text-xl text-gray-600 leading-relaxed max-w-lg"
                >
                  At JKKN Matriculation Higher Secondary School, we understand the importance of a well-equipped library in fostering a love for learning and promoting academic excellence.
Our school library is a treasure trove of knowledge, offering a diverse collection of fiction and non-fiction books, reference materials, and multilingual books to cater to the needs of our students.
Our library is stocked with an extensive collection of books that cater to the diverse interests and reading levels of our students.
From classic works of fiction to contemporary bestsellers, our fiction section is sure to ignite the imagination of our young readers.

                </motion.p>

                <motion.div 
                  variants={fadeInUp}
                  className="flex flex-wrap gap-4"
                >
                  <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg">
                    Virtual Tour
                  </button>
                  <button className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:border-gray-400 transition-colors">
                    Browse Catalog
                  </button>
                </motion.div>
              </motion.div>

              {/* Right Image with floating elements */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/labs/lab.webp"
                    alt="Library Interior"
                    fill
                    className="object-cover"
                    priority
                  />
                  
                  {/* Floating Stats Cards */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm p-4 rounded-lg shadow-lg"
                  >
                    <div className="text-2xl font-bold text-blue-600">25K+</div>
                    <div className="text-sm text-gray-600">Books Available</div>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 }}
                    className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm p-4 rounded-lg shadow-lg"
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                      <span className="text-sm font-medium">Open Now</span>
                    </div>
                    <div className="text-xs text-gray-500 mt-1">Mon-Sat: 8AM-6PM</div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center group hover:scale-105 transition-transform duration-300"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4 group-hover:bg-blue-200 transition-colors">
                    <stat.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Library Features</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Modern amenities and services designed to enhance your learning experience
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className={`inline-flex items-center justify-center w-12 h-12 ${feature.color} rounded-lg mb-4`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>



        {/* Image Gallery Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Library Gallery</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore our modern library spaces and facilities
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {galleryImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedImage(index)}
                >
                  <div className="relative h-64 rounded-xl overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                    <Image
                      src={image.src}
                      alt={`Library image ${image.id}`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Modal for image preview */}
        <AnimatePresence>
          {selectedImage !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.5, opacity: 0 }}
                className="relative max-w-4xl w-full aspect-[16/9] bg-white rounded-lg overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={galleryImages[selectedImage].src}
                  alt={`Library image ${galleryImages[selectedImage].id}`}
                  fill
                  className="object-cover"
                />
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 text-white bg-black/50 w-10 h-10 rounded-full hover:bg-black/70 transition-colors"
                >
                  ×
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </main>

      <Footer />
    </>
  );
};

export default LibraryPage; 
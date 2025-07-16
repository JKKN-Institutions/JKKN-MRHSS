'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, User, Eye } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Header from '../components/Header';
import Footer from '../components/Footer';

const SchoolNewsPage = () => {
  const router = useRouter();
  const [search, setSearch] = useState('');

  const newsData = [
    {
      id: 1,
      title: 'Sparkle Day 2025 at Nattraja Vidhyalya',
      description: 'On January 25, 2025, Nattraja Vidhyalya hosted its much-anticipated Sparkle Day, an event that truly lived up to its name by illuminating the talents and creativity of our students. The festivities commenced at 2:30 PM on our school campus, drawing an enthusiastic gathering of parents, faculty, and students.',
      image: '/images/photos/1.jpeg',
      date: '2024-01-25',
      author: 'Admin',
      category: 'Academic'
    },
    {
      id: 2,
      title: 'Atal Community Day',
      description: 'On Thursday, April 27th, 2023, we had an incredible time commemorating Atal Community Day alongside 45 enthusiastic students from neighboring schools.',
      image: '/images/photos/2.webp',
      date: '2023-06-20',
      author: 'Admin',
      category: 'Sports'
    },
    {
      id: 3,
      title: 'Cultural Program Success',
      description: 'The annual cultural program was a grand success with performances by students from all grades. Traditional and modern performances mesmerized the audience.',
      image: '/images/photos/3.png',
      date: '2024-03-05',
      author: 'Admin',
      category: 'Cultural'
    },
    {
      id: 4,
      title: 'Achievements of our 12th-grade students in the recent public examinations.',
      description: 'Our J.K.K.N. Higher Secondary School is proud to announce the exceptional achievements of our 12th-grade students in the recent public examinations',
      image: '/images/photos/4.webp',
      date: '2023-06-20',
      author: 'Admin',
      category: 'Infrastructure'
    },
    {
      id: 5,
      title: 'Student Achievement Awards',
      description: 'Our students excelled in district-level competitions and brought laurels to the school. Special recognition ceremony was held.',
      image: '/images/photos/5.png',
      date: '2024-02-20',
      author: 'Admin',
      category: 'Achievement'
    },
    {
      id: 6,
      title: 'Tree Plantation Drive',
      description: 'Students and teachers participated in a tree plantation drive as part of our environmental conservation initiative.',
      image: '/images/photos/6.png',
      date: '2024-02-15',
      author: 'Admin',
      category: 'Environment'
    }
  ];

  // Filter news by search input (case-insensitive, partial match on title)
  const filteredNews = newsData.filter(news =>
    news.title.toLowerCase().includes(search.toLowerCase())
  );

  const handleBackClick = () => {
    router.back();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Search Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-4 flex justify-end">
        <input
          type="text"
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Search news by heading..."
          className="w-full max-w-md px-4 py-2 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg bg-white border border-white text-black sm:border-gray-300 sm:text-gray-900"
        />
      </div>

      {/* News Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-8">
        {filteredNews.length === 0 ? (
          <div className="text-center text-gray-500 text-lg py-20">No news found.</div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredNews.map((news, index) => (
              <motion.div
                key={news.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ 
                  y: -8, 
                  transition: { duration: 0.3 }
                }}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={news.image} 
                    alt={news.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {news.category}
                    </span>
                  </div>

                  {/* View Button on Hover */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                  >
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <Eye className="w-5 h-5 text-gray-800" />
                    </motion.button>
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {news.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                    {news.description}
                  </p>

                  {/* Meta Information */}
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(news.date).toLocaleDateString('en-GB', { 
                        day: '2-digit', 
                        month: '2-digit', 
                        year: 'numeric' 
                      })}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <User className="w-4 h-4" />
                      <span>{news.author}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default SchoolNewsPage; 
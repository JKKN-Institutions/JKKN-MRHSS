"use client";

import React, { useState } from "react";
import { motion } from 'framer-motion';
import { Calendar, Eye, Tag } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const newsData = [
  {
    id: 1,
    title: "Annual Day Celebration",
    image: "/images/photos/10.png",
    description: "Our school celebrated Annual Day with vibrant performances and awards.",
    date: '2024-04-10',
    category: 'Announcement',
  },
  {
    id: 2,
    title: "Science Exhibition",
    image: "/images/photos/11.png",
    description: "Students showcased innovative science projects and models.",
    date: '2024-03-28',
    category: 'Academic',
  },
  {
    id: 3,
    title: "Sports Meet",
    image: "/images/photos/12.png",
    description: "A day full of sportsmanship and athletic achievements.",
    date: '2024-03-15',
    category: 'Sports',
  },
  {
    id: 4,
    title: "Art Competition",
    image: "/images/photos/13.png",
    description: "Creative artworks by students were displayed and awarded.",
    date: '2024-03-01',
    category: 'Cultural',
  },
  // Add more news items as needed
];

export default function LatestNewsPage() {
  const [search, setSearch] = useState("");

  const filteredNews = newsData.filter((news) =>
    news.title.toLowerCase().includes(search.toLowerCase())
  );

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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredNews.length === 0 ? (
            <div className="col-span-full text-center text-gray-500 text-lg py-20">
              No news found.
            </div>
          ) : (
            filteredNews.map((news, index) => (
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
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                      <Tag className="w-3.5 h-3.5" /> {news.category}
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
                  <div className="space-y-2 text-xs text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(news.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))
          )}
        </motion.div>
      </div>
      <Footer />
    </div>
  );
} 
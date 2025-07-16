'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, MapPin, Users, Eye } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PastEventsPage = () => {
  const router = useRouter();
  const [search, setSearch] = useState('');

  const eventsData = [
    {
      id: 1,
      title: 'Annual Day Celebration 2024',
      description: 'A grand celebration featuring cultural performances, award ceremonies, and showcase of student achievements throughout the year.',
      image: '/images/photos/7.png',
      date: '2024-03-20',
      location: 'School Auditorium',
      participants: '500+ Students',
      category: 'Cultural'
    },
    {
      id: 2,
      title: 'Inter-School Science Fair',
      description: 'Students from various schools participated in the regional science fair hosted by NV School. Many innovative projects were displayed.',
      image: '/images/photos/8.png',
      date: '2024-03-12',
      location: 'Science Block',
      participants: '200+ Students',
      category: 'Academic'
    },
    {
      id: 3,
      title: 'Sports Championship 2024',
      description: 'Annual sports championship with various athletic events including track and field, basketball, volleyball, and cricket matches.',
      image: '/images/photos/9.png',
      date: '2024-02-25',
      location: 'Sports Ground',
      participants: '300+ Athletes',
      category: 'Sports'
    },
    {
      id: 4,
      title: 'Environmental Awareness Program',
      description: 'A comprehensive program focusing on environmental conservation, waste management, and sustainable living practices.',
      image: '/images/photos/10.png',
      date: '2024-02-18',
      location: 'School Campus',
      participants: '400+ Students',
      category: 'Environment'
    },
    {
      id: 5,
      title: 'Career Guidance Workshop',
      description: 'Industry experts and career counselors conducted sessions to guide students about various career opportunities and pathways.',
      image: '/images/photos/11.png',
      date: '2024-02-10',
      location: 'Conference Hall',
      participants: '150+ Students',
      category: 'Career'
    },
    {
      id: 6,
      title: 'Traditional Arts Festival',
      description: 'Celebration of traditional Indian arts including classical dance, music, painting, and handicrafts demonstrations.',
      image: '/images/photos/12.png',
      date: '2024-01-28',
      location: 'Cultural Center',
      participants: '250+ Participants',
      category: 'Cultural'
    }
  ];

  const handleBackClick = () => {
    router.back();
  };

  // Filter events by title
  const filteredEvents = eventsData.filter(event =>
    event.title.toLowerCase().includes(search.toLowerCase())
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
      {/* Events Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredEvents.length === 0 ? (
            <div className="col-span-full text-center text-gray-500 text-lg py-20">
              No events found.
            </div>
          ) : (
            filteredEvents.map((event, index) => (
              <motion.div
                key={event.id}
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
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {event.category}
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
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors duration-300">
                    {event.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                    {event.description}
                  </p>
                  {/* Meta Information */}
                  <div className="space-y-2 text-xs text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(event.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4" />
                      <span>{event.participants}</span>
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
};

export default PastEventsPage; 
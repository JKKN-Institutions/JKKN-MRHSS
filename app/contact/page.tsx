'use client';

import React from 'react';
import ContactInfo from './ContactInfo';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#FDF9F3] to-[#E8F5E9] pt-16">
      <Header/><br/><br/><br/><br/>
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-green-900 mb-4">Get in Touch</h1>
          <p className="text-base text-gray-600">We'd love to hear from you</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column: Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-xl p-8"
          >
            <ContactInfo />
          </motion.div>

          {/* Right Column: Online Admissions */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center text-center"
          >
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-green-900">Admissions Open</h2>
              <p className="text-lg text-gray-600">Academic Year 2025 - 2026</p>
              <div className="pt-4">
                <a
                  href="https://jkkn.in/admission-form"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-block bg-gradient-to-r from-green-600 to-green-700 text-white font-bold py-4 px-12 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
                  suppressHydrationWarning
                >
                  <span className="relative z-10">Apply Now</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-green-700 to-green-800 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
              </div>
              <p className="text-xs text-gray-500 mt-4">Limited seats available for the upcoming academic year</p>
            </div>
          </motion.div>
        </div>
      </div>
      <br/><br/><br/><br/>
      <Footer/>
    </main>
  );
} 
'use client';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';

// Loading components
const HeaderSkeleton = () => (
  <div className="fixed top-0 left-0 right-0 z-50 h-20 bg-white shadow-lg animate-pulse">
    <div className="flex items-center justify-between h-full px-8">
      <div className="flex items-center space-x-3">
        <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
        <div className="h-6 w-32 bg-gray-300 rounded"></div>
      </div>
      <div className="h-6 w-6 bg-gray-300 rounded"></div>
    </div>
  </div>
);

const FooterSkeleton = () => (
  <div className="bg-gray-900 text-white py-16">
    <div className="max-w-7xl mx-auto px-4 animate-pulse">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="space-y-4">
            <div className="h-6 w-32 bg-gray-700 rounded"></div>
            <div className="space-y-2">
              <div className="h-4 w-full bg-gray-700 rounded"></div>
              <div className="h-4 w-3/4 bg-gray-700 rounded"></div>
              <div className="h-4 w-1/2 bg-gray-700 rounded"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// Dynamically import components
const Header = dynamic(() => import('../components/Header'), {
  ssr: false,
  loading: () => <HeaderSkeleton />
});

const Footer = dynamic(() => import('../components/Footer'), {
  ssr: false,
  loading: () => <FooterSkeleton />
});

// Animation variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
};

const cardVariants: Variants = {
  hidden: { 
    opacity: 0,
    y: 50
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1]
    }
  }
};

const imageVariants: Variants = {
  hidden: { scale: 1.2, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1]
    }
  }
};

export default function LabPage() {
  return (
    <div className="min-h-screen">
      <Suspense fallback={<HeaderSkeleton />}>
        <Header />
      </Suspense>
      
      <main className="pt-20">
        <motion.div 
          className="max-w-7xl mx-auto px-4 py-12"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h1 
            className="text-4xl font-bold text-center mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Our Laboratories
          </motion.h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Science Lab */}
            <motion.div 
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              variants={cardVariants}
              whileHover={{ y: -5 }}
            >
              <motion.div 
                className="relative h-48 w-full overflow-hidden"
                variants={imageVariants}
              >
                <Image
                  src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80"
                  alt="Science Laboratory"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </motion.div>
              <div className="p-6">
                <motion.h2 
                  className="text-2xl font-semibold mb-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  Science Laboratory
                </motion.h2>
                <motion.p 
                  className="text-gray-600 mb-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  Our state-of-the-art science laboratory is equipped with modern equipment and safety measures,
                  providing students with hands-on experience in physics, chemistry, and biology experiments.
                </motion.p>
                <motion.ul 
                  className="text-gray-600 space-y-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <li>• Modern equipment for all science disciplines</li>
                  <li>• Safety-first environment</li>
                  <li>• Regular practical sessions</li>
                </motion.ul>
              </div>
            </motion.div>

            {/* Computer Lab */}
            <motion.div 
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              variants={cardVariants}
              whileHover={{ y: -5 }}
            >
              <motion.div 
                className="relative h-48 w-full overflow-hidden"
                variants={imageVariants}
              >
                <Image
                  src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80"
                  alt="Computer Laboratory"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </motion.div>
              <div className="p-6">
                <motion.h2 
                  className="text-2xl font-semibold mb-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  Computer Laboratory
                </motion.h2>
                <motion.p 
                  className="text-gray-600 mb-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  The computer lab features the latest technology and software, enabling students to develop
                  essential digital skills and programming knowledge in a modern learning environment.
                </motion.p>
                <motion.ul 
                  className="text-gray-600 space-y-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <li>• High-performance computers</li>
                  <li>• Latest software and tools</li>
                  <li>• Programming and coding sessions</li>
                </motion.ul>
              </div>
            </motion.div>

            {/* Language Lab */}
            <motion.div 
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              variants={cardVariants}
              whileHover={{ y: -5 }}
            >
              <motion.div 
                className="relative h-48 w-full overflow-hidden"
                variants={imageVariants}
              >
                <Image
                  src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80"
                  alt="Language Laboratory"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </motion.div>
              <div className="p-6">
                <motion.h2 
                  className="text-2xl font-semibold mb-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  Language Laboratory
                </motion.h2>
                <motion.p 
                  className="text-gray-600 mb-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  Our language lab is designed to enhance communication skills through interactive learning
                  tools and multimedia resources for comprehensive language development.
                </motion.p>
                <motion.ul 
                  className="text-gray-600 space-y-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <li>• Interactive learning software</li>
                  <li>• Audio-visual equipment</li>
                  <li>• Individual practice stations</li>
                </motion.ul>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </main>

      <Suspense fallback={<FooterSkeleton />}>
        <Footer />
      </Suspense>
    </div>
  );
} 
"use client";

import { motion } from "framer-motion";
import { Quote, Heart, Star, User } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const WhatParentsSaySection = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [currentActiveIndex, setCurrentActiveIndex] = useState(0);
  const testimonials = [
    {
      quote: "My child loves going to school every day. The teachers are caring and the facilities are top-notch.",
      author: "Parent of Class 5 Student",
      rating: 5,
      avatar: "👨‍👩‍👧‍👦",
      color: "from-blue-500 to-purple-500",
      bgColor: "bg-gradient-to-br from-blue-50 to-purple-50",
    },
    {
      quote: "The academic excellence and personal development my child has achieved here is remarkable. The school truly cares about each student's growth.",
      author: "Parent of Class 8 Student",
      rating: 5,
      avatar: "👨‍👩‍👦",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-gradient-to-br from-green-50 to-emerald-50",
    },
    {
      quote: "JKKN has provided an excellent learning environment. My child's confidence and skills have improved significantly since joining.",
      author: "Parent of Class 10 Student",
      rating: 5,
      avatar: "👨‍👩‍👧",
      color: "from-pink-500 to-rose-500",
      bgColor: "bg-gradient-to-br from-pink-50 to-rose-50",
    },
    {
      quote: "The school's focus on both academics and character development is exactly what we wanted for our child's education.",
      author: "Parent of Class 6 Student",
      rating: 5,
      avatar: "👨‍👩‍👦‍👦",
      color: "from-orange-500 to-red-500",
      bgColor: "bg-gradient-to-br from-orange-50 to-red-50",
    },
    {
      quote: "The teachers are dedicated and the school's innovative teaching methods have made learning enjoyable for my child.",
      author: "Parent of Class 7 Student",
      rating: 5,
      avatar: "👨‍👩‍👧‍👦",
      color: "from-indigo-500 to-blue-500",
      bgColor: "bg-gradient-to-br from-indigo-50 to-blue-50",
    },
    {
      quote: "We're impressed with the school's commitment to excellence and the positive impact it has had on our child's development.",
      author: "Parent of Class 9 Student",
      rating: 5,
      avatar: "👨‍👩‍👧",
      color: "from-teal-500 to-cyan-500",
      bgColor: "bg-gradient-to-br from-teal-50 to-cyan-50",
    },
  ];

  // Create infinite loop by duplicating testimonials
  const infiniteTestimonials = [...testimonials, ...testimonials, ...testimonials];

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

  const renderStars = (rating: number) => {
    return Array.from({ length: rating }, (_, i) => (
      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
    ));
  };

  // Auto-scroll functionality with one-by-one infinite loop
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let currentIndex = 0;
    const cardWidth = 380 + 24; // card width + gap
    const scrollDuration = 3000; // 3 seconds per card
    const startTime = Date.now();

    const autoScroll = () => {
      if (!isHovered) {
        const elapsed = Date.now() - startTime;
        const progress = (elapsed % scrollDuration) / scrollDuration;
        
        // Calculate position for current card
        const targetPosition = currentIndex * cardWidth;
        const nextPosition = ((currentIndex + 1) % testimonials.length) * cardWidth;
        const currentPosition = targetPosition + (nextPosition - targetPosition) * progress;
        
        // Check if we can actually scroll
        const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;
        
        if (maxScroll > 0) {
          scrollContainer.scrollLeft = currentPosition;
          
          // Update index when we complete a card
          if (progress >= 0.99) {
            currentIndex = (currentIndex + 1) % testimonials.length;
            setCurrentActiveIndex(currentIndex);
          }
        }
      }
      
      animationId = requestAnimationFrame(autoScroll);
    };

    // Start the animation after a short delay
    const startDelay = setTimeout(() => {
      animationId = requestAnimationFrame(autoScroll);
    }, 1000);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
      clearTimeout(startDelay);
    };
  }, [isHovered, testimonials.length]);

  // Debug: Log scroll container dimensions
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      console.log('Scroll container dimensions:', {
        scrollWidth: scrollContainer.scrollWidth,
        clientWidth: scrollContainer.clientWidth,
        canScroll: scrollContainer.scrollWidth > scrollContainer.clientWidth
      });
    }
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating quote symbols */}
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-xl"
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
          className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-xl"
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
          className="absolute bottom-40 left-1/4 w-40 h-40 bg-gradient-to-r from-pink-400/20 to-rose-400/20 rounded-full blur-xl"
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
            backgroundImage: `radial-gradient(circle at 1px 1px, #8b5cf6 1px, transparent 0)`,
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
            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-full text-sm font-medium mb-6"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Heart className="w-4 h-4 mr-2" />
            Parent Testimonials
          </motion.div>
          
          <motion.h2
            className="text-2xl md:text-4xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            What Parents Say
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-rose-600">
              About JKKN
            </span>
          </motion.h2>
          
          <motion.p
            className="text-base text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Hear from our valued parents about their experience with JKKN MHSS. 
            Their trust and satisfaction reflect our commitment to providing the best education for every child.
          </motion.p>
        </motion.div>

        {/* Testimonials Scrolling Container */}
        <motion.div
          className="relative mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          {/* Scroll Container */}
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto gap-6 pb-6 scrollbar-hide max-w-full"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{ 
              scrollBehavior: 'smooth',
              scrollSnapType: 'x mandatory',
              transition: 'scroll-left 0.5s ease-in-out'
            }}
          >
            {infiniteTestimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10, scale: 1.02 }}
                className={`${testimonial.bgColor} rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/50 relative overflow-hidden min-w-[320px] max-w-[380px] flex-shrink-0`}
                style={{ scrollSnapAlign: 'start' }}
              >
                {/* Quote Icon */}
                <motion.div
                  className="absolute top-4 right-4 opacity-10"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Quote className="w-12 h-12 text-gray-400" />
                </motion.div>

                {/* Avatar */}
                <motion.div
                  className="text-4xl mb-4 text-center"
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
                  {testimonial.avatar}
                </motion.div>

                {/* Rating Stars */}
                <div className="flex justify-center mb-4">
                  {renderStars(testimonial.rating)}
                </div>

                {/* Quote */}
                <blockquote className="text-gray-700 text-sm leading-relaxed mb-6 text-center italic">
                  "{testimonial.quote}"
                </blockquote>

                {/* Author */}
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <User className="w-4 h-4 text-gray-500 mr-2" />
                    <span className="text-sm font-semibold text-gray-800">
                      {testimonial.author}
                    </span>
                  </div>
                  <div className={`w-16 h-1 bg-gradient-to-r ${testimonial.color} rounded-full mx-auto`}></div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Scroll Indicators and Auto-scroll Status */}
          <div className="flex flex-col items-center mt-6 space-y-3">
            {/* Auto-scroll indicator */}
            <motion.div
              className="flex items-center space-x-2 text-sm text-gray-500"
              animate={{ opacity: isHovered ? 0.5 : 1 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="w-2 h-2 rounded-full bg-purple-500"
                animate={{ 
                  scale: isHovered ? 1 : [1, 1.2, 1],
                  opacity: isHovered ? 0.5 : 1
                }}
                transition={{ 
                  scale: { duration: 1, repeat: Infinity, ease: "easeInOut" },
                  opacity: { duration: 0.3 }
                }}
              />
              <span className="text-xs">
                {isHovered ? "Paused" : `Card ${currentActiveIndex + 1} of ${testimonials.length}`}
              </span>
              {/* Loop indicator */}
              <motion.div
                className="flex items-center space-x-1"
                animate={{ 
                  x: isHovered ? 0 : [0, 5, 0]
                }}
                transition={{ 
                  x: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                }}
              >
                <span className="text-xs text-purple-500">∞</span>
                <span className="text-xs text-gray-400">
                  ({testimonials.length} cards, infinite loop)
                </span>
              </motion.div>
            </motion.div>
            
            {/* Scroll dots */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <motion.div
                  key={index}
                  className={`w-2 h-2 rounded-full cursor-pointer transition-colors ${
                    index === currentActiveIndex ? 'bg-purple-500' : 'bg-gray-300 hover:bg-purple-500'
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => {
                    if (scrollContainerRef.current) {
                      const cardWidth = 380 + 24; // card width + gap
                      scrollContainerRef.current.scrollLeft = index * cardWidth;
                    }
                  }}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Heart className="w-5 h-5 mr-2" />
            Join Our School Family
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatParentsSaySection; 
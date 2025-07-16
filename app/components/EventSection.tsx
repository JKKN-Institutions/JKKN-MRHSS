"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";


interface CardData {
  id: string;
  title: string;
  image: string;
  href: string;
}

const EventSection = () => {

  // Sample data - replace with actual data
  const cardData = [
    {
      id: "news",
      title: "School News",
      image: "/images/photos/1.jpeg",
      href: "/school-news"
    },
    {
      id: "events",
      title: "Past Events",
      image: "/images/photos/2.png",
      href: "/past-events"
    },
    {
      id: "buzz",
      title: "Latest News",
      image: "/images/photos/3.png",
      href: "/latest-buzz"
    }
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.3
      } 
    },
  };



  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background SVG Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#3B82F6" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Events & <span className="text-blue-600">News</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest happenings, achievements, and events at our school
          </p>
        </motion.div>

        {/* Three Cards Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {cardData.map((card) => (
            <motion.div
              key={card.id}
              variants={cardVariants}
              whileHover={{ scale: 1.05, y: -10 }}
              className="group cursor-pointer"
            >
              <Link href={card.href}>
                <div className="relative h-80 w-full rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-2xl font-bold text-white drop-shadow-lg">
                      {card.title}
                    </h3>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default EventSection; 
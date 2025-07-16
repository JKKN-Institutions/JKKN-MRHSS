'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import dynamic from 'next/dynamic';
import { 
  Users, 
  BookOpen, 
  Trophy, 
  Music, 
  Palette, 
  Microscope, 
  Globe, 
  Camera, 
  Gamepad2, 
  Laptop,
  Search,
  Filter,
  ChevronRight,
  Star,
  Calendar,
  MapPin,
  Clock
} from 'lucide-react';

// Dynamic imports for better performance
const Header = dynamic(() => import('../components/Header'), {
  loading: () => <HeaderSkeleton />
});

const Footer = dynamic(() => import('../components/Footer'), {
  loading: () => <FooterSkeleton />
});

// Loading skeletons
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

// Committee and Club data - JKKN Matric Hr. Sec. School
const committeesAndClubs = [
  {
    id: 1,
    name: "Literary Committee",
    category: "committee",
    description: "Organizing literary events, competitions, and fostering reading culture among students.",
    icon: BookOpen,
    color: "from-blue-500 to-blue-600",
    members: 15,
    meetingDay: "Monday",
    time: "4:00 PM",
    activities: ["Essay Competitions", "Poetry Recitation", "Debate Tournaments", "Book Clubs"],
    achievements: ["District Literary Competition Winner", "Best School Magazine"],
    featured: true
  },
  {
    id: 2,
    name: "Cultural Committee",
    category: "committee",
    description: "Organizing cultural programs, festivals, and celebrating diversity through arts.",
    icon: Palette,
    color: "from-purple-500 to-pink-500",
    members: 20,
    meetingDay: "Tuesday",
    time: "3:30 PM",
    activities: ["Annual Day Celebrations", "Festival Programs", "Cultural Shows", "Art Exhibitions"],
    achievements: ["Best Cultural Performance 2024", "State Level Recognition"],
    featured: true
  },
  {
    id: 3,
    name: "Sports Committee",
    category: "committee",
    description: "Promoting physical fitness and organizing sports events and competitions.",
    icon: Trophy,
    color: "from-orange-500 to-red-500",
    members: 18,
    meetingDay: "Thursday",
    time: "3:45 PM",
    activities: ["Annual Sports Day", "Inter-House Competitions", "Athletic Training", "Team Sports"],
    achievements: ["District Sports Champions", "State Level Participation"],
    featured: true
  },
  {
    id: 4,
    name: "Music Club",
    category: "club",
    description: "Nurturing musical talents through vocal and instrumental training.",
    icon: Music,
    color: "from-indigo-500 to-purple-600",
    members: 35,
    meetingDay: "Wednesday",
    time: "3:00 PM",
    activities: ["Vocal Training", "Instrumental Music", "Music Concerts", "Choir Practice"],
    achievements: ["Best Music Performance", "Inter-school Competition Winner"],
    featured: false
  },
  {
    id: 5,
    name: "Dance Club",
    category: "club",
    description: "Expressing creativity through various dance forms and choreography.",
    icon: Users,
    color: "from-pink-500 to-rose-500",
    members: 42,
    meetingDay: "Friday",
    time: "3:15 PM",
    activities: ["Classical Dance", "Folk Dance", "Modern Dance", "Choreography"],
    achievements: ["State Dance Competition Winner", "Cultural Excellence Award"],
    featured: false
  },
  {
    id: 6,
    name: "Photography Club",
    category: "club",
    description: "Capturing memories and developing visual storytelling skills through photography.",
    icon: Camera,
    color: "from-cyan-500 to-blue-500",
    members: 25,
    meetingDay: "Saturday",
    time: "2:00 PM",
    activities: ["Event Photography", "Nature Photography", "Photo Exhibitions", "Digital Art"],
    achievements: ["Best Photography Portfolio", "School Magazine Cover"],
    featured: false
  },
  {
    id: 7,
    name: "Science Club",
    category: "club",
    description: "Encouraging scientific thinking and innovation through hands-on experiments.",
    icon: Microscope,
    color: "from-green-500 to-emerald-500",
    members: 30,
    meetingDay: "Wednesday",
    time: "4:00 PM",
    activities: ["Science Fair", "Lab Experiments", "Research Projects", "Science Quiz"],
    achievements: ["Innovation Award 2024", "Best Science Project"],
    featured: true
  },
  {
    id: 8,
    name: "National Service Scheme (NSS)",
    category: "club",
    description: "Developing social consciousness and community service among students.",
    icon: Globe,
    color: "from-teal-500 to-green-600",
    members: 50,
    meetingDay: "Multiple Days",
    time: "Various Times",
    activities: ["Blood Donation Camps", "Cleanliness Drives", "Community Service", "Social Awareness"],
    achievements: ["Best NSS Unit Award", "Community Service Excellence"],
    featured: true
  },
  {
    id: 9,
    name: "Eco Club",
    category: "club",
    description: "Promoting environmental awareness and sustainable practices in school and community.",
    icon: Gamepad2,
    color: "from-emerald-500 to-teal-600",
    members: 35,
    meetingDay: "Monday",
    time: "3:30 PM",
    activities: ["Tree Plantation", "Environmental Awareness", "Waste Management", "Green Initiatives"],
    achievements: ["Green School Certificate", "Environmental Excellence Award"],
    featured: true
  }
];

// Custom animations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94] as const
    }
  }
};

const floatingVariants = {
  initial: { y: 0 },
  animate: {
    y: [-5, 5, -5],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut" as const
    }
  }
};

const CommitteesClubsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [filteredItems, setFilteredItems] = useState(committeesAndClubs);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  useEffect(() => {
    const filtered = committeesAndClubs.filter(item => {
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      return matchesCategory;
    });
    setFilteredItems(filtered);
  }, [selectedCategory]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-pink-600/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              variants={floatingVariants}
              initial="initial"
              animate="animate"
              className="inline-block mb-6"
            >
              <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full shadow-2xl">
                <Users className="w-12 h-12 text-white" />
              </div>
            </motion.div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              JKKN Committees &{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Clubs
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8 leading-relaxed">
              JKKN Matric Hr. Sec. School offers a wide range of committees and clubs that foster student 
              development and community engagement. These extracurricular activities are integral to our 
              school's program, allowing students to explore their passions, enhance their skills, and 
              contribute to society.
            </p>
            
            <p className="text-lg text-gray-500 max-w-3xl mx-auto mb-12 leading-relaxed">
              With a focus on literary, cultural, and sports activities, our committees organize exciting 
              events and competitions throughout the year, empowering students to showcase their talents 
              and grow their abilities.
            </p>

            
          </motion.div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-16 bg-white/60 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Featured Organizations
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Highlighted committees and clubs making exceptional impact in our school community
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredItems.filter(item => item.featured).map((item) => (
              <FeaturedCard key={item.id} item={item} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* All Committees and Clubs */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              All Organizations
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore all our committees and clubs to find your perfect match
            </p>
          </motion.div>

          <AnimatePresence>
            <motion.div
              layout
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  variants={cardVariants}
                  whileHover={{ 
                    scale: 1.05, 
                    rotateY: 5,
                    transition: { duration: 0.3 }
                  }}
                  onHoverStart={() => setHoveredCard(item.id)}
                  onHoverEnd={() => setHoveredCard(null)}
                  className="relative group"
                >
                  <ClubCard item={item} isHovered={hoveredCard === item.id} />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredItems.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="text-gray-400 mb-4">
                <Search className="w-16 h-16 mx-auto mb-4" />
                <p className="text-xl">No results found</p>
                <p className="text-sm">Try adjusting your search criteria</p>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Community Engagement Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Community Engagement &{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Social Responsibility
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8 leading-relaxed">
              Emphasizing the importance of community service, JKKN Matric Hr Sec School actively 
              encourages student involvement in clubs like the National Service Scheme (NSS) and the Eco Club.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-gradient-to-r from-red-500 to-pink-500 rounded-xl mr-4">
                    <Globe className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Community Service Activities</h3>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: '🩸', text: 'Blood Donation Camps' },
                    { icon: '🧹', text: 'Cleanliness Drives' },
                    { icon: '🌱', text: 'Tree Plantation' },
                    { icon: '🤝', text: 'Social Awareness Programs' }
                  ].map((activity, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg"
                    >
                      <span className="text-2xl mr-3">{activity.icon}</span>
                      <span className="text-sm font-medium text-gray-700">{activity.text}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-8 text-white shadow-2xl">
                <div className="mb-8">
                  <h3 className="text-3xl font-bold mb-4">Holistic Education</h3>
                  <p className="text-blue-100 leading-relaxed">
                    Experience holistic education that nurtures student growth at JKKN Matric Hr Sec School. 
                    Our committees and clubs provide ample opportunities for skill development, interest pursuit, 
                    and community service.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2">150+</div>
                    <div className="text-blue-200 text-sm">Active Members</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2">25+</div>
                    <div className="text-blue-200 text-sm">Annual Events</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2">50+</div>
                    <div className="text-blue-200 text-sm">Community Projects</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2">100%</div>
                    <div className="text-blue-200 text-sm">Student Participation</div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                  <p className="text-center text-blue-100 font-medium">
                    "Stay connected with us through our school diary for the latest updates on these 
                    enriching activities that shape our students' overall development."
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

// Featured Card Component
const FeaturedCard = ({ item }: { item: any }) => {
  const IconComponent = item.icon;
  
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
      className="relative overflow-hidden rounded-2xl bg-white shadow-xl group"
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}></div>
      
      <div className="relative p-8">
        <div className="flex items-center justify-between mb-6">
          <div className={`p-3 rounded-xl bg-gradient-to-r ${item.color} shadow-lg`}>
            <IconComponent className="w-8 h-8 text-white" />
          </div>
          <div className="flex items-center text-yellow-500">
            <Star className="w-5 h-5 fill-current" />
            <span className="ml-1 text-sm font-medium">Featured</span>
          </div>
        </div>
        
        <h3 className="text-xl font-bold text-gray-900 mb-3">{item.name}</h3>
        <p className="text-gray-600 mb-6 line-clamp-2">{item.description}</p>
        
        <div className="space-y-3 mb-6">
          <div className="flex items-center text-sm text-gray-500">
            <Users className="w-4 h-4 mr-2" />
            <span>{item.members} members</span>
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <Calendar className="w-4 h-4 mr-2" />
            <span>{item.meetingDay}</span>
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <Clock className="w-4 h-4 mr-2" />
            <span>{item.time}</span>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {item.activities.slice(0, 3).map((activity: string, index: number) => (
            <span
              key={index}
              className="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-full"
            >
              {activity}
            </span>
          ))}
        </div>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`w-full py-3 px-4 bg-gradient-to-r ${item.color} text-white rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group`}
        >
          <span>Learn More</span>
          <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
        </motion.button>
      </div>
    </motion.div>
  );
};

// Club Card Component
const ClubCard = ({ item, isHovered }: { item: any; isHovered: boolean }) => {
  const IconComponent = item.icon;
  
  return (
    <div className="relative overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 group h-full">
      <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
      
      <div className="relative p-6 h-full flex flex-col">
        <div className="flex items-center justify-between mb-4">
          <div className={`p-2 rounded-lg bg-gradient-to-r ${item.color} shadow-md`}>
            <IconComponent className="w-6 h-6 text-white" />
          </div>
          {item.featured && (
            <div className="flex items-center text-yellow-500">
              <Star className="w-4 h-4 fill-current" />
            </div>
          )}
        </div>
        
        <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
          {item.name}
        </h3>
        
        <p className="text-gray-600 text-sm mb-4 flex-grow line-clamp-2">
          {item.description}
        </p>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-xs text-gray-500">
            <Users className="w-3 h-3 mr-2" />
            <span>{item.members} members</span>
          </div>
          <div className="flex items-center text-xs text-gray-500">
            <Calendar className="w-3 h-3 mr-2" />
            <span>{item.meetingDay}</span>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-1 mb-4">
          {item.activities.slice(0, 2).map((activity: string, index: number) => (
            <span
              key={index}
              className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded-md"
            >
              {activity}
            </span>
          ))}
        </div>
        
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full py-2 px-3 text-sm font-medium text-gray-700 border border-gray-200 rounded-lg hover:border-blue-300 hover:text-blue-600 transition-all duration-300 flex items-center justify-center group"
        >
          <span>View Details</span>
          <ChevronRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
        </motion.button>
      </div>
    </div>
  );
};

export default CommitteesClubsPage; 
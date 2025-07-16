"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Music, 
  Palette, 
  Trophy, 
  Users, 
  Camera, 
  Mic, 
  BookOpen, 
  Globe,
  Heart,
  Star,
  Award,
  Target,
  Zap,
  Play
} from "lucide-react";

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

const CoCurricularPage = () => {
  const [selectedActivity, setSelectedActivity] = useState<number | null>(null);

  const activities = [
    {
      id: 1,
      title: "Annual Cultural Festival",
      category: "arts",
      description: "JKKN's biggest celebration featuring dance, drama, music, and artistic performances by talented students from all grades.",
      highlights: ["500+ student participants", "3-day grand celebration", "Professional jury evaluation", "Inter-house competitions"],
      image: "/images/photos/1.jpeg",
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 2,
      title: "Science Laboratory Club",
      category: "academic",
      description: "Advanced scientific exploration with hands-on experiments, innovation projects, and research beyond regular curriculum.",
      highlights: ["Weekly lab sessions", "Science exhibition", "Research projects", "Innovation fair"],
      image: "/images/labs/lab.webp",
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 3,
      title: "Outdoor Sports Championship",
      category: "sports",
      description: "Comprehensive sports program including cricket, football, basketball, athletics, and traditional games.",
      highlights: ["15+ outdoor sports", "Inter-school tournaments", "State-level participation", "Professional coaching"],
      image: "/images/sports/outdoor.jpg",
      color: "from-green-500 to-emerald-500"
    },
    {
      id: 4,
      title: "Indoor Sports Complex",
      category: "sports",
      description: "Modern indoor sports facilities for table tennis, badminton, chess, carrom, and fitness training.",
      highlights: ["Climate-controlled facility", "Professional equipment", "Regular tournaments", "Fitness programs"],
      image: "/images/sports/indoor.png",
      color: "from-blue-600 to-teal-500"
    },
    {
      id: 5,
      title: "Music & Cultural Orchestra",
      category: "music",
      description: "Comprehensive music education including Carnatic, Western, instrumental, and vocal training programs.",
      highlights: ["Classical & contemporary", "Multiple instruments", "Performance opportunities", "Music competitions"],
      image: "/images/photos/15.png",
      color: "from-orange-500 to-red-500"
    },
    {
      id: 6,
      title: "Art & Creative Workshop",
      category: "arts",
      description: "Explore creativity through painting, sketching, sculpture, crafts, and modern digital art techniques.",
      highlights: ["Professional art guidance", "Regular exhibitions", "Competition participation", "Art material provided"],
      image: "/images/photos/25.png",
      color: "from-indigo-500 to-purple-500"
    },
    {
      id: 7,
      title: "Drama & Theatre Society",
      category: "arts",
      description: "Develop acting skills, stage presence, and storytelling through theatrical performances and workshops.",
      highlights: ["Annual drama production", "Acting workshops", "Costume & makeup", "Script writing"],
      image: "/images/photos/35.png",
      color: "from-pink-500 to-rose-500"
    },
    {
      id: 8,
      title: "Photography & Media Club",
      category: "clubs",
      description: "Learn photography techniques, digital editing, and visual storytelling while documenting school events.",
      highlights: ["Digital photography", "Photo editing training", "School magazine", "Event documentation"],
      image: "/images/photos/45.png",
      color: "from-gray-600 to-slate-500"
    },
    {
      id: 9,
      title: "Literary & Debate Society",
      category: "academic",
      description: "Enhance communication skills through debates, elocution, creative writing, and public speaking events.",
      highlights: ["Inter-school debates", "Elocution contests", "Creative writing", "Public speaking skills"],
      image: "/images/photos/55.png",
      color: "from-teal-500 to-cyan-500"
    },
    {
      id: 10,
      title: "Environmental Green Club",
      category: "clubs",
      description: "Promote environmental awareness through eco-friendly initiatives, tree plantation, and sustainability projects.",
      highlights: ["Tree plantation drives", "Waste management", "Eco-awareness campaigns", "Green initiatives"],
      image: "/images/photos/65.png",
      color: "from-green-600 to-lime-500"
    },
    {
      id: 11,
      title: "Computer & Robotics Club",
      category: "academic",
      description: "Explore technology through programming, robotics, web development, and digital innovation projects.",
      highlights: ["Programming languages", "Robotics projects", "Tech competitions", "Digital literacy"],
      image: "/images/photos/75.png",
      color: "from-purple-600 to-blue-500"
    },
    {
      id: 12,
      title: "Library Reading Circle",
      category: "academic",
      description: "Foster reading habits through book clubs, storytelling sessions, and literary discussions in our modern library.",
      highlights: ["10,000+ books", "Reading competitions", "Author interactions", "Book review sessions"],
      image: "/images/library.png",
      color: "from-amber-500 to-orange-500"
    },
    {
      id: 13,
      title: "Community Service Club",
      category: "clubs",
      description: "Develop social responsibility through community outreach programs and volunteer activities.",
      highlights: ["Community outreach", "Volunteer programs", "Social awareness", "Leadership development"],
      image: "/images/educationstrory/smilethon.jpeg",
      color: "from-red-500 to-pink-500"
    },
    {
      id: 14,
      title: "Mathematics Olympiad Club",
      category: "academic",
      description: "Advanced mathematics training for competitive exams and problem-solving skill development.",
      highlights: ["Olympiad preparation", "Problem solving", "Math competitions", "Logical thinking"],
      image: "/images/photos/30.png",
      color: "from-blue-700 to-indigo-500"
    },
    {
      id: 15,
      title: "Student Council & Leadership",
      category: "clubs",
      description: "Develop leadership skills through student government, event organization, and peer mentoring programs.",
      highlights: ["Student governance", "Event planning", "Peer mentoring", "Leadership training"],
      image: "/images/students.jpg",
      color: "from-violet-500 to-purple-600"
    }
  ];

  // Activity image galleries
  const activityGalleries: { [key: number]: string[] } = {
    1: [ // Annual Cultural Festival
      "/images/photos/1.jpeg",
      "/images/photos/15.png",
      "/images/photos/20.png",
      "/images/photos/25.png",
      "/images/photos/30.png",
      "/images/photos/35.png"
    ],
    2: [ // Science Laboratory Club
      "/images/labs/lab.webp",
      "/images/photos/40.png",
      "/images/photos/45.png",
      "/images/photos/50.png"
    ],
    3: [ // Outdoor Sports Championship
      "/images/sports/outdoor.jpg",
      "/images/sports/sports.png",
      "/images/photos/55.png",
      "/images/photos/60.png"
    ],
    4: [ // Indoor Sports Complex
      "/images/sports/indoor.png",
      "/images/sports/yoha.webp",
      "/images/photos/65.png",
      "/images/photos/70.png"
    ],
    5: [ // Music & Cultural Orchestra
      "/images/photos/15.png",
      "/images/photos/75.png",
      "/images/photos/80.png",
      "/images/photos/10.png"
    ],
    6: [ // Art & Creative Workshop
      "/images/photos/25.png",
      "/images/photos/30.png",
      "/images/photos/35.png",
      "/images/photos/40.png"
    ],
    7: [ // Drama & Theatre Society
      "/images/photos/35.png",
      "/images/photos/45.png",
      "/images/photos/50.png",
      "/images/photos/55.png"
    ],
    8: [ // Photography & Media Club
      "/images/photos/45.png",
      "/images/photos/60.png",
      "/images/photos/65.png",
      "/images/photos/70.png"
    ],
    9: [ // Literary & Debate Society
      "/images/photos/55.png",
      "/images/photos/75.png",
      "/images/photos/80.png",
      "/images/photos/2.png"
    ],
    10: [ // Environmental Green Club
      "/images/photos/65.png",
      "/images/photos/3.png",
      "/images/photos/4.png",
      "/images/photos/5.png"
    ],
    11: [ // Computer & Robotics Club
      "/images/photos/75.png",
      "/images/photos/6.png",
      "/images/photos/7.png",
      "/images/photos/8.png"
    ],
    12: [ // Library Reading Circle
      "/images/library.png",
      "/images/photos/9.png",
      "/images/photos/11.png",
      "/images/photos/12.png"
    ],
    13: [ // Community Service Club
      "/images/educationstrory/smilethon.jpeg",
      "/images/photos/13.png",
      "/images/photos/14.png",
      "/images/photos/16.png"
    ],
    14: [ // Mathematics Olympiad Club
      "/images/photos/30.png",
      "/images/photos/17.png",
      "/images/photos/18.png",
      "/images/photos/19.png"
    ],
    15: [ // Student Council & Leadership
      "/images/students.jpg",
      "/images/photos/21.png",
      "/images/photos/22.png",
      "/images/photos/23.png"
    ]
  };

  const stats = [
    { label: "Active Clubs", value: "15+", icon: Users },
    { label: "Annual Events", value: "75+", icon: Star },
    { label: "Student Participants", value: "1200+", icon: Target },
    { label: "Awards & Recognition", value: "50+", icon: Award }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/5 to-pink-600/10" />
        {/* Floating background elements */}
        <motion.div
          animate={{ 
            x: [0, 100, 0],
            y: [0, -50, 0],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-10 w-20 h-20 bg-blue-200/30 rounded-full blur-xl"
        />
        <motion.div
          animate={{ 
            x: [0, -80, 0],
            y: [0, 60, 0],
            rotate: [0, -180, -360]
          }}
          transition={{ 
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-40 right-20 w-32 h-32 bg-purple-200/20 rounded-full blur-xl"
        />
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative"
        >
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full text-blue-700 font-semibold text-sm mb-6"
            >
              <Users className="w-4 h-4 mr-2" />
              Explore • Develop • Serve
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
            >
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                JKKN Matric Hr.Sec.School
              </span>
              <br />
              <span className="text-gray-800 text-2xl md:text-3xl lg:text-4xl">
                Co-Curricular Excellence
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto mb-8 leading-relaxed"
            >
              <span className="font-semibold text-blue-600">Explore Interests</span>, 
              <span className="font-semibold text-purple-600"> Develop Skills</span>, and 
              <span className="font-semibold text-pink-600"> Serve the Community</span>
            </motion.p>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-lg text-gray-600 max-w-5xl mx-auto mb-10 leading-relaxed"
            >
              Discover a wide range of co-curricular activities where students have the opportunity to explore their passions, 
              enhance their abilities, and engage in meaningful community service. These activities are an integral part of our 
              curriculum, playing a vital role in shaping students' overall development.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-col sm:flex-row justify-center gap-4"
            >
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2">
                <Play className="w-5 h-5" />
                <span>Explore Activities</span>
              </button>
              <button className="bg-white/80 backdrop-blur-sm text-gray-700 px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border border-gray-200 hover:bg-white">
                View School Diary
              </button>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-800 mb-2">{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Overview Section */}
      <section className="py-20 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
              Experience Diverse Excellence
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Experience a diverse array of literary, cultural, and sports activities through our clubs and committees. 
              These activities provide a platform for students to showcase their talents, acquire new skills, and connect with peers who share similar interests.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Literary & Cultural */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50"
            >
              <div className="bg-gradient-to-r from-blue-500 to-purple-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Literary & Cultural</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Showcase talents through debate societies, drama clubs, music orchestras, and art workshops. 
                Connect with peers who share similar creative interests.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  Drama & Theatre Society
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                  Literary & Debate Club
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-pink-500 rounded-full mr-3"></div>
                  Music & Cultural Orchestra
                </li>
              </ul>
            </motion.div>

            {/* Sports & Fitness */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50"
            >
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <Trophy className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Sports & Fitness</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Excel in indoor and outdoor sports with professional coaching and state-level participation opportunities. 
                Build teamwork and leadership skills.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  Outdoor Sports Championship
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                  Indoor Sports Complex
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-teal-500 rounded-full mr-3"></div>
                  Professional Coaching
                </li>
              </ul>
            </motion.div>

            {/* Community Service */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50"
            >
              <div className="bg-gradient-to-r from-orange-500 to-red-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Community Service</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Foster social responsibility through NSS and Eco Club initiatives. Participate in blood donation camps, 
                cleanliness drives, and environmental projects.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                  National Service Scheme (NSS)
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                  Environmental Eco Club
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-pink-500 rounded-full mr-3"></div>
                  Community Outreach Programs
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Community Service Initiatives */}
      <section className="py-20 bg-gradient-to-r from-green-50 via-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center px-4 py-2 bg-green-100 rounded-full text-green-700 font-semibold text-sm mb-6">
                <Globe className="w-4 h-4 mr-2" />
                Social Responsibility
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Serving the 
                <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent"> Community</span>
              </h2>
              <p className="text-md text-gray-600 mb-8 leading-relaxed">
                At JKKN Matric Hr Sec School, we foster a sense of social responsibility through community service initiatives. 
                Our National Service Scheme (NSS) and Eco Club offer students opportunities to participate in impactful projects.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-red-100 p-2 rounded-lg">
                    <Heart className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Blood Donation Camps</h4>
                    <p className="text-gray-600 text-sm">Regular blood donation drives to save lives and serve humanity</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <Target className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Cleanliness Drives</h4>
                    <p className="text-gray-600 text-sm">Community cleanliness initiatives to maintain a healthy environment</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <Zap className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Tree Plantation Programs</h4>
                    <p className="text-gray-600 text-sm">Environmental conservation through massive tree plantation drives</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-green-400 to-blue-500 rounded-3xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Community Impact</h3>
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-green-100">Blood Donors</span>
                    <span className="text-2xl font-bold">500+</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-blue-100">Trees Planted</span>
                    <span className="text-2xl font-bold">2000+</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-purple-100">Clean-up Drives</span>
                    <span className="text-2xl font-bold">50+</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-yellow-100">Community Projects</span>
                    <span className="text-2xl font-bold">25+</span>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-white/20 rounded-xl backdrop-blur-sm">
                  <p className="text-sm text-white/90">
                    "By engaging in these activities, students learn the importance of giving back to society and become active members of their communities."
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Holistic Education Philosophy */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Preparing for a 
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"> Promising Future</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
              Our co-curricular activities are carefully designed to complement our academic curriculum, providing students with a well-rounded education. 
              We encourage all students to actively participate in these activities for holistic development.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-center group"
            >
              <div className="bg-gradient-to-br from-blue-500 to-purple-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <BookOpen className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Academic Integration</h3>
              <p className="text-gray-600 text-sm">
                Activities carefully designed to complement and enhance academic learning
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-center group"
            >
              <div className="bg-gradient-to-br from-green-500 to-teal-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Skill Development</h3>
              <p className="text-gray-600 text-sm">
                Opportunities to pursue interests and develop essential life skills
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-center group"
            >
              <div className="bg-gradient-to-br from-orange-500 to-red-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Heart className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Community Engagement</h3>
              <p className="text-gray-600 text-sm">
                Active participation in community service and social responsibility
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-center group"
            >
              <div className="bg-gradient-to-br from-purple-500 to-pink-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Star className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Holistic Development</h3>
              <p className="text-gray-600 text-sm">
                Nurturing well-rounded individuals ready to conquer the world
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-center mt-16"
          >
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Stay Connected with Our School Diary</h3>
              <p className="text-gray-600 mb-6">
                Stay informed about upcoming events and activities through our school diary, which offers regular updates on co-curricular happenings. 
                We encourage all students to actively participate in these enriching activities.
              </p>
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                Access School Diary
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Activity Gallery Section */}
      <section className="py-16 bg-white/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
              Activity Gallery
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Click on any activity below to view our amazing collection of photos and moments
            </p>
          </motion.div>

          {/* Activity Name Buttons */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
            {activities.map((activity, index) => (
              <motion.button
                key={activity.id}
                onClick={() => setSelectedActivity(activity.id)}
                className={`p-4 rounded-xl font-semibold text-sm transition-all duration-300 transform hover:scale-105 ${
                  selectedActivity === activity.id
                    ? `bg-gradient-to-r ${activity.color} text-white shadow-lg scale-105`
                    : "bg-white text-gray-700 shadow-md hover:shadow-lg border border-gray-200"
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="text-center">
                  <div className="font-bold text-xs lg:text-sm leading-tight">
                    {activity.title}
                  </div>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Image Gallery */}
          <AnimatePresence mode="wait">
            {selectedActivity && (
              <motion.div
                key={selectedActivity}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl shadow-xl p-8"
              >
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold text-gray-800 mb-2">
                    {activities.find(a => a.id === selectedActivity)?.title}
                  </h3>
                  <p className="text-gray-600">
                    {activities.find(a => a.id === selectedActivity)?.description}
                  </p>
                </div>
                
                                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {activityGalleries[selectedActivity]?.map((image: string, index: number) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1, duration: 0.3 }}
                      className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
                    >
                      <div 
                        className="aspect-square bg-cover bg-center bg-no-repeat transform group-hover:scale-110 transition-transform duration-500"
                        style={{ backgroundImage: `url('${image}')` }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-4 left-4 right-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                        <p className="text-sm font-semibold">Activity Image {index + 1}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Close Button */}
                <div className="text-center mt-8">
                  <motion.button
                    onClick={() => setSelectedActivity(null)}
                    className="bg-gradient-to-r from-gray-600 to-gray-700 text-white px-6 py-3 rounded-full font-semibold hover:from-gray-700 hover:to-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Close Gallery
                  </motion.button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Instruction Text when no activity selected */}
          {!selectedActivity && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="text-6xl mb-4">📸</div>
              <h3 className="text-2xl font-bold text-gray-700 mb-2">Choose an Activity</h3>
              <p className="text-gray-600">Click on any activity button above to view its photo gallery</p>
            </motion.div>
          )}
        </div>
      </section>

     

      <Footer />
    </div>
  );
};

export default CoCurricularPage; 
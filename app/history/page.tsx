'use client';

import React from 'react';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import { 
  Users, 
  Award, 
  BookOpen, 
  Target, 
  Heart, 
  Star,
  Clock,
  Trophy,
  Building,
  Lightbulb,
  Globe
} from 'lucide-react';

// Custom CSS Animations
const customStyles = `
  @keyframes gradient-xy {
    0%, 100% {
      background-size: 400% 400%;
      background-position: left center;
    }
    50% {
      background-size: 200% 200%;
      background-position: right center;
    }
  }
  
  @keyframes gradient-xy-reverse {
    0%, 100% {
      background-size: 300% 300%;
      background-position: right center;
    }
    50% {
      background-size: 250% 250%;
      background-position: left center;
    }
  }
  
  @keyframes float {
    0%, 100% {
      transform: translateY(0px) rotate(0deg);
    }
    50% {
      transform: translateY(-20px) rotate(180deg);
    }
  }
  
  @keyframes float-delayed {
    0%, 100% {
      transform: translateY(0px) rotate(0deg);
    }
    50% {
      transform: translateY(-15px) rotate(-180deg);
    }
  }
  
  @keyframes float-slow {
    0%, 100% {
      transform: translateY(0px) rotate(0deg);
    }
    50% {
      transform: translateY(-10px) rotate(90deg);
    }
  }
  
  .animate-gradient-xy {
    animation: gradient-xy 15s ease infinite;
  }
  
  .animate-gradient-xy-reverse {
    animation: gradient-xy-reverse 20s ease infinite;
  }
  
  .animate-float {
    animation: float 6s ease-in-out infinite;
  }
  
  .animate-float-delayed {
    animation: float-delayed 8s ease-in-out infinite 2s;
  }
  
  .animate-float-slow {
    animation: float-slow 10s ease-in-out infinite 4s;
  }
`;

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

// Dynamically import components with SSR disabled to avoid hydration mismatches
const Header = dynamic(() => import('../components/Header'), { 
  ssr: false,
  loading: () => <HeaderSkeleton />
});
const Footer = dynamic(() => import('../components/Footer'), { 
  ssr: false,
  loading: () => <FooterSkeleton />
});

export default function SchoolHistoryAndVision() {
  const institutions = [
    {
      title: "Dental College",
      icon: <Users className="w-8 h-8" />,
      description: "State-of-the-art dental education and healthcare facilities"
    },
    {
      title: "Pharmacy",
      icon: <BookOpen className="w-8 h-8" />,
      description: "Comprehensive pharmaceutical education and research"
    },
    {
      title: "Nursing",
      icon: <Heart className="w-8 h-8" />,
      description: "Professional nursing education and healthcare training"
    },
    {
      title: "Education",
      icon: <Target className="w-8 h-8" />,
      description: "Teacher training and educational excellence"
    },
    {
      title: "Engineering",
      icon: <Lightbulb className="w-8 h-8" />,
      description: "Technical education and innovation"
    },
    {
      title: "Arts and Science",
      icon: <Star className="w-8 h-8" />,
      description: "Comprehensive liberal arts and scientific education"
    }
  ];

  const communityServices = [
    {
      title: "Healthcare",
      icon: <Heart className="w-8 h-8" />,
      items: [
        "Free dental camps and treatments",
        "Free surgeries",
        "Blood donation camps",
        "Medical support for the impoverished"
      ]
    },
    {
      title: "Education",
      icon: <BookOpen className="w-8 h-8" />,
      items: [
        "Educational scholarships",
        "Motivational camps",
        "Entrepreneurship awareness",
        "Cultural activities"
      ]
    },
    {
      title: "Social Welfare",
      icon: <Users className="w-8 h-8" />,
      items: [
        "Aid for destitute individuals",
        "Disaster relief support",
        "Community development",
        "Social empowerment"
      ]
    }
  ];

  const milestones = [
    {
      year: "1965",
      title: "First Girls' School",
      description: "Shri. J.K.K. Natarajah founded a girls' school in Kumarapalayam to address the educational needs of local girls.",
      icon: <Building className="w-6 h-6" />
    },
    {
      year: "1969",
      title: "Trust Foundation",
      description: "J.K.K. Rangammal Charitable Trust was established (Reg No: 33) with a mission to promote literacy and women's empowerment.",
      icon: <BookOpen className="w-6 h-6" />
    },
    {
      year: "1970s",
      title: "Expansion",
      description: "Under Shrimathi N. Sendamaraai's leadership, the trust expanded to provide multidisciplinary education to both genders.",
      icon: <Lightbulb className="w-6 h-6" />
    },
    {
      year: "1980s-90s",
      title: "Institutional Growth",
      description: "Established multiple educational institutions including Dental, Pharmacy, Nursing, and Engineering colleges.",
      icon: <Award className="w-6 h-6" />
    },
    {
      year: "2000s",
      title: "Community Impact",
      description: "Launched extensive community service programs including free medical camps and educational scholarships.",
      icon: <Globe className="w-6 h-6" />
    },
    {
      year: "Present",
      title: "Comprehensive Education",
      description: "Operating 10 institutions offering diverse educational programs and continuing community service initiatives.",
      icon: <Target className="w-6 h-6" />
    }
  ];

  const visionPoints = [
    {
      icon: <Star className="w-8 h-8" />,
      title: "Educational Excellence",
      description: "To provide quality multidisciplinary education accessible to all sections of society."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Women's Empowerment",
      description: "To promote and support women's education and socio-economic development."
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Community Service",
      description: "To actively contribute to community welfare through healthcare and educational initiatives."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Social Development",
      description: "To enhance the socio-economic status of the community through education and support programs."
    }
  ];

  const coreValues = [
    "Excellence in Education",
    "Women's Empowerment",
    "Community Service",
    "Social Responsibility",
    "Accessibility",
    "Continuous Growth"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Custom CSS Styles */}
      <style jsx>{customStyles}</style>
      
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#a51c83] to-[#003f13] animate-gradient-xy opacity-90"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#a51c83] to-[#003f13] animate-gradient-xy-reverse opacity-80"></div>
        
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
        
        <div className="relative max-w-7xl mx-auto z-10 h-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center h-full">
            {/* Left Side Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent drop-shadow-lg leading-tight">
                  J.K.K. Rangammal Charitable Trust
                </h1>
                <p className="text-base md:text-lg text-white/90 leading-relaxed drop-shadow-md mb-8">
                  Empowering communities through education and social service since 1969. A legacy of excellence in education and women's empowerment.
                </p>
              </motion.div>

              {/* Stats Cards */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="grid grid-cols-2 gap-4"
              >
                <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6">
                  <div className="flex items-center mb-2">
                    <Clock className="w-6 h-6 text-white mr-2" />
                    <span className="text-white/80 text-sm font-medium">Established</span>
                  </div>
                  <div className="text-lg md:text-xl font-bold text-white">1969</div>
                  <div className="text-white/70 text-sm">55+ Years</div>
                </div>
                
                <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6">
                  <div className="flex items-center mb-2">
                    <Users className="w-6 h-6 text-white mr-2" />
                    <span className="text-white/80 text-sm font-medium">Institutions</span>
                  </div>
                  <div className="text-lg md:text-xl font-bold text-white">10+</div>
                  <div className="text-white/70 text-sm">Growing</div>
                </div>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-sm hover:bg-blue-50 transform hover:scale-105 transition-all duration-300 shadow-lg">
                  Explore Our Journey
                </button>
                <button 
                  onClick={() => document.getElementById('our-institutions')?.scrollIntoView({ behavior: 'smooth' })}
                  className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-sm hover:bg-white hover:text-blue-600 transform hover:scale-105 transition-all duration-300"
                >
                  View Institutions
                </button>
              </motion.div>
            </motion.div>

            {/* Right Side - Institution Showcase */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative hidden lg:block"
            >
              <div className="grid grid-cols-2 gap-4">
                {institutions.slice(0, 4).map((institution, index) => (
                  <motion.div
                    key={institution.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="bg-white/20 backdrop-blur-md rounded-xl p-4"
                  >
                    <div className="text-white mb-2">{institution.icon}</div>
                    <h3 className="text-white font-semibold mb-1">{institution.title}</h3>
                    <p className="text-white/80 text-sm">{institution.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Founding Story Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
                Visionary Beginnings
              </h2>
              <div className="space-y-6 text-base text-gray-600 leading-relaxed">
                <p>
                  In the 1960s, the girls of Kumarapalayam faced a significant challenge: they had to walk 2.5 kilometers 
                  to the nearby town of Bhavani for schooling. This distance led many parents to hesitate or stop their 
                  daughters' education, leaving many young girls confined to their homes or working in handlooms and 
                  dyeing industries.
                </p>
                <p>
                  Recognizing the urgent need for women's education, visionary philanthropist Shri. J.K.K. Natarajah 
                  founded a girls' school in Kumarapalayam in 1965, four years before establishing the J.K.K. Rangammal 
                  Charitable Trust.
                </p>
                <p>
                  Established in 1969 (Reg No: 33), the J.K.K. Rangammal Charitable Trust was founded with the goal of 
                  promoting literacy and women's empowerment to enhance the socio-economic status of the community.
                </p>
              </div>
            </div>
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="bg-white rounded-2xl p-8 shadow-2xl"
              >
                <div className="flex items-center mb-6">
                  <Clock className="w-8 h-8 text-blue-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-800">Our Growth Journey</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <span className="text-xl font-bold text-blue-600 mr-4">1965</span>
                    <span className="text-gray-600">First Girls' School established</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-xl font-bold text-purple-600 mr-4">1969</span>
                    <span className="text-gray-600">Trust founded</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-xl font-bold text-pink-600 mr-4">Present</span>
                    <span className="text-gray-600">10+ institutions</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Institutions Section */}
      <section id="our-institutions" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
              Our Institutions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A comprehensive network of educational institutions offering diverse programs and opportunities.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {institutions.map((institution, index) => (
              <motion.div
                key={institution.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <div className="text-blue-600 mb-4">{institution.icon}</div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{institution.title}</h3>
                <p className="text-gray-600">{institution.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
              Community Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Making a difference in the community through various social service initiatives.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {communityServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-xl"
              >
                <div className="text-blue-600 mb-4">{service.icon}</div>
                <h3 className="text-lg font-bold text-gray-800 mb-4">{service.title}</h3>
                <ul className="space-y-3">
                  {service.items.map((item, itemIndex) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.2 + itemIndex * 0.1 }}
                      className="flex items-center text-gray-600"
                    >
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Historical Milestones */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
              Historical Milestones
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Key moments that shaped our journey and defined our commitment to excellence in education.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line - Hidden on mobile, visible on md and up */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-blue-600 to-purple-600 hidden md:block"></div>
            
            <div className="space-y-8 md:space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`flex flex-col md:flex-row items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className={`w-full md:w-5/12 ${
                    index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                  }`}>
                    <div className="bg-white rounded-2xl p-4 md:p-6 shadow-xl hover:shadow-2xl transition-all duration-300">
                      <div className="flex items-center mb-4">
                        <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white mr-3 md:mr-4">
                          {milestone.icon}
                        </div>
                        <div>
                          <h3 className="text-base md:text-lg font-bold text-gray-800">{milestone.title}</h3>
                          <span className="text-sm md:text-base font-semibold text-blue-600">{milestone.year}</span>
                        </div>
                      </div>
                      <p className="text-sm md:text-base text-gray-600 leading-relaxed">{milestone.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline Node - Hidden on mobile, visible on md and up */}
                  <div className="hidden md:flex w-2/12 justify-center">
                    <div className="w-4 h-4 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full border-4 border-white shadow-lg"></div>
                  </div>
                  
                  <div className="w-full md:w-5/12"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
              Our Vision & Mission
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Guiding principles that drive our commitment to educational excellence and character development.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 shadow-xl"
            >
              <div className="flex items-center mb-6">
                <Target className="w-8 h-8 text-blue-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-800">Our Vision</h3>
              </div>
              <p className="text-base text-gray-700 leading-relaxed mb-6">
                To be a globally recognized educational institution that empowers students to become innovative leaders, 
                critical thinkers, and responsible global citizens who make a positive impact on the world.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {visionPoints.map((point, index) => (
                  <motion.div
                    key={point.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    className="bg-white rounded-xl p-4 shadow-lg"
                  >
                    <div className="text-blue-600 mb-2">{point.icon}</div>
                    <h4 className="font-semibold text-gray-800 mb-2">{point.title}</h4>
                    <p className="text-xs text-gray-600">{point.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 shadow-xl"
            >
              <div className="flex items-center mb-6">
                <Heart className="w-8 h-8 text-orange-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-800">Our Mission</h3>
              </div>
              <p className="text-base text-gray-700 leading-relaxed mb-6">
                To provide a nurturing, inclusive, and challenging educational environment that fosters academic excellence, 
                character development, and creative expression while preparing students for success in a rapidly evolving world.
              </p>
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-800 mb-4">Core Values:</h4>
                {coreValues.map((value, index) => (
                  <motion.div
                    key={value}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    className="flex items-center bg-white rounded-lg p-3 shadow-md"
                  >
                    <div className="w-2 h-2 bg-orange-600 rounded-full mr-3"></div>
                    <span className="text-gray-700 font-medium">{value}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

     
      <Footer />
    </div>
  );
} 
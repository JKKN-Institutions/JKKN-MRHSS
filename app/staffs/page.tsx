'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import dynamic from 'next/dynamic';
import Image from 'next/image';
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
  Globe,
  Phone,
  Mail,
  MapPin,
  UserCheck,
  Shield,
  FileText,
  Settings,
  Calendar,
  GraduationCap,
  ChevronRight,
  Quote,
  Search,
  Filter,
  X,
  Linkedin,
  Twitter,
  Facebook,
  MessageCircle,
  Eye,
  Download,
  Play,
  Pause
} from 'lucide-react';

// Dynamically import Header and Footer
const Header = dynamic(() => import('../components/Header'), { ssr: false });
const Footer = dynamic(() => import('../components/Footer'), { ssr: false });

// Staff Image Component with fallback
const StaffImage = ({ src, alt, className }: { src: string; alt: string; className?: string }) => {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    setHasError(true);
    setImgSrc('/images/founder.jpg'); // Fallback to a default image
  };

  return (
    <>
      {!hasError ? (
        <Image
          src={imgSrc}
          alt={alt}
          fill
          className={className}
          onError={handleError}
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
          <Users className="w-16 h-16 text-gray-600" />
        </div>
      )}
    </>
  );
};

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

// Define TypeScript interfaces
interface StaffMember {
  id: number;
  name: string;
  position: string;
  department: string;
  image: string;
  email: string;
  phone: string;
  experience: string;
  education: string;
  specialization: string;
  bio: string;
  achievements: string[];
  subjects: string[];
  social: {
    linkedin: string;
    twitter: string;
    facebook: string;
  };
}

// Sample staff data
const staffData: StaffMember[] = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    position: "Principal",
    department: "Administration",
    image: "/images/founder.jp", // Use existing placeholder image
    email: "sarah.johnson@nvschool.edu",
    phone: "+1 (555) 123-4567",
    experience: "15 years",
    education: "Ph.D in Educational Leadership",
    specialization: "School Administration, Curriculum Development",
    bio: "Dr. Sarah Johnson is a visionary leader with over 15 years of experience in educational administration. She has transformed multiple schools with her innovative teaching methodologies.",
    achievements: ["Outstanding Principal Award 2023", "Educational Innovation Award", "Community Service Recognition"],
    subjects: ["Educational Leadership", "School Management"],
    social: {
      linkedin: "#",
      twitter: "#",
      facebook: "#"
    }
  },
  {
    id: 2,
    name: "Prof. Michael Chen",
    position: "Vice Principal",
    department: "Academic Affairs",
    image: "/images/saravanan.jp", // Use existing placeholder image
    email: "michael.chen@nvschool.edu",
    phone: "+1 (555) 123-4568",
    experience: "12 years",
    education: "M.Ed in Mathematics Education",
    specialization: "Mathematics, Data Analysis",
    bio: "Prof. Michael Chen brings innovative mathematical thinking to our academic programs. His research-based approach has helped hundreds of students excel in STEM fields.",
    achievements: ["Best Teacher Award 2022", "Mathematics Excellence Award", "Research Publication Recognition"],
    subjects: ["Advanced Mathematics", "Statistics", "Data Science"],
    social: {
      linkedin: "#",
      twitter: "#",
      facebook: "#"
    }
  },
  {
    id: 3,
    name: "Ms. Emily Rodriguez",
    position: "English Department Head",
    department: "Languages",
    image: "/images/senthamarai.jp", // Use existing placeholder image
    email: "emily.rodriguez@nvschool.edu",
    phone: "+1 (555) 123-4569",
    experience: "10 years",
    education: "M.A in English Literature",
    specialization: "Literature, Creative Writing",
    bio: "Ms. Emily Rodriguez is passionate about fostering creativity and critical thinking through literature. Her engaging teaching style has inspired countless students.",
    achievements: ["Creative Writing Excellence Award", "Literature Department Recognition", "Student Choice Award"],
    subjects: ["English Literature", "Creative Writing", "Public Speaking"],
    social: {
      linkedin: "#",
      twitter: "#",
      facebook: "#"
    }
  },
  {
    id: 4,
    name: "Dr. James Wilson",
    position: "Science Department Head",
    department: "Sciences",
    image: "/images/founder.jp", // Use existing placeholder image
    email: "james.wilson@nvschool.edu",
    phone: "+1 (555) 123-4570",
    experience: "14 years",
    education: "Ph.D in Physics",
    specialization: "Physics, Quantum Mechanics",
    bio: "Dr. James Wilson brings cutting-edge scientific knowledge to our students. His hands-on approach to physics education has resulted in numerous student achievements.",
    achievements: ["Science Educator of the Year", "Research Excellence Award", "Innovation in Teaching Award"],
    subjects: ["Physics", "Advanced Science", "Research Methodology"],
    social: {
      linkedin: "#",
      twitter: "#",
      facebook: "#"
    }
  },
  {
    id: 5,
    name: "Ms. Lisa Thompson",
    position: "Art & Design Teacher",
    department: "Arts",
    image: "/images/saravanan.jp", // Use existing placeholder image
    email: "lisa.thompson@nvschool.edu",
    phone: "+1 (555) 123-4571",
    experience: "8 years",
    education: "MFA in Fine Arts",
    specialization: "Digital Art, Traditional Painting",
    bio: "Ms. Lisa Thompson combines traditional artistic techniques with modern digital tools to inspire creativity in every student.",
    achievements: ["Art Education Excellence", "Digital Innovation Award", "Student Art Exhibition Recognition"],
    subjects: ["Digital Art", "Traditional Art", "Art History"],
    social: {
      linkedin: "#",
      twitter: "#",
      facebook: "#"
    }
  },
  {
    id: 6,
    name: "Mr. David Kumar",
    position: "Physical Education Coach",
    department: "Sports",
    image: "/images/senthamarai.jp", // Use existing placeholder image
    email: "david.kumar@nvschool.edu",
    phone: "+1 (555) 123-4572",
    experience: "11 years",
    education: "M.P.Ed in Physical Education",
    specialization: "Sports Training, Athletic Development",
    bio: "Mr. David Kumar has coached multiple championship teams and focuses on developing both physical fitness and character in students.",
    achievements: ["Coach of the Year 2023", "Championship Team Leader", "Youth Development Award"],
    subjects: ["Physical Education", "Sports Training", "Health & Wellness"],
    social: {
      linkedin: "#",
      twitter: "#",
      facebook: "#"
    }
  }
];

const departments = ["All", "Administration", "Academic Affairs", "Languages", "Sciences", "Arts", "Sports"];

export default function StaffDetails() {
  const [selectedDepartment, setSelectedDepartment] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStaff, setSelectedStaff] = useState<StaffMember | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  // Filter staff based on department and search query
  const filteredStaff = staffData.filter(staff => {
    const matchesDepartment = selectedDepartment === "All" || staff.department === selectedDepartment;
    const matchesSearch = staff.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         staff.position.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         staff.specialization.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesDepartment && matchesSearch;
  });

  // Animation variants - fix TypeScript issues
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  } as const;

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        damping: 25,
        stiffness: 500
      }
    },
    hover: {
      y: -10,
      scale: 1.02,
      transition: {
        type: "spring" as const,
        damping: 25,
        stiffness: 400
      }
    }
  } as const;

  const heroVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const
      }
    }
  } as const;

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring" as const,
        damping: 25,
        stiffness: 500
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.3
      }
    }
  } as const;

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  } as const;

  // Handle staff card click
  const handleStaffClick = (staff: StaffMember) => {
    setSelectedStaff(staff);
    setIsModalOpen(true);
  };

  // Close modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedStaff(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <Header />
      
      {/* Hero Section */}
      <motion.section
        className="relative pt-32 pb-20 px-4 overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={heroVariants}
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.div
            className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-green-400/20 to-blue-400/20 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [360, 180, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full text-blue-800 text-sm font-medium mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Users className="w-4 h-4 mr-2" />
            Meet Our Dedicated Faculty
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Our Amazing
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Faculty Team
            </span>
          </motion.h1>

          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            Our dedicated team of experienced educators brings passion, expertise, and innovation 
            to create an exceptional learning environment for every student.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <div className="flex items-center text-gray-600">
              <GraduationCap className="w-5 h-5 mr-2 text-blue-600" />
              <span className="font-medium">{staffData.length}+ Expert Educators</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Award className="w-5 h-5 mr-2 text-purple-600" />
              <span className="font-medium">Multiple Award Winners</span>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Search and Filter Section */}
      <motion.section
        className="px-4 mb-16"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-white/20">
            <div className="flex flex-col lg:flex-row gap-6 items-center">
              {/* Search Bar */}
              <div className="relative flex-1 w-full">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search by name, position, or specialization..."
                  className="w-full pl-12 pr-4 py-4 bg-gray-50 rounded-xl border-0 focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all duration-300"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              {/* Department Filter */}
              <div className="flex flex-wrap gap-2">
                {departments.map((dept) => (
                  <motion.button
                    key={dept}
                    onClick={() => setSelectedDepartment(dept)}
                    className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                      selectedDepartment === dept
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {dept}
                  </motion.button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Staff Grid */}
      <motion.section
        className="px-4 pb-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            layout
          >
            <AnimatePresence>
              {filteredStaff.map((staff) => (
                <motion.div
                  key={staff.id}
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  whileHover="hover"
                  className="group cursor-pointer"
                  onClick={() => handleStaffClick(staff)}
                  layout
                >
                  <div className="bg-white/80 backdrop-blur-xl rounded-3xl overflow-hidden shadow-xl border border-white/20 transition-all duration-500 group-hover:shadow-2xl">
                    {/* Image Section */}
                    <div className="relative h-80 overflow-hidden">
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-10"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                      <StaffImage
                        src={staff.image}
                        alt={staff.name}
                        className="object-cover transition-all duration-700 group-hover:scale-110"
                      />
                      
                      {/* Overlay Content */}
                      <motion.div
                        className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                        initial={{ y: 20 }}
                        whileHover={{ y: 0 }}
                      >
                        <div className="bg-white/90 backdrop-blur-sm rounded-full p-4">
                          <Eye className="w-8 h-8 text-blue-600" />
                        </div>
                      </motion.div>

                      {/* Department Badge */}
                      <div className="absolute top-4 left-4 z-30">
                        <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                          {staff.department}
                        </span>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-6">
                      <motion.h3
                        className="text-2xl font-bold text-gray-900 mb-2"
                        initial={{ opacity: 0.8 }}
                        whileHover={{ opacity: 1 }}
                      >
                        {staff.name}
                      </motion.h3>
                      
                      <p className="text-blue-600 font-semibold mb-3">{staff.position}</p>
                      
                      <div className="space-y-2 text-sm text-gray-600 mb-4">
                        <div className="flex items-center">
                          <GraduationCap className="w-4 h-4 mr-2 text-gray-400" />
                          <span>{staff.education}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-2 text-gray-400" />
                          <span>{staff.experience} experience</span>
                        </div>
                      </div>

                      <p className="text-gray-700 text-sm line-clamp-3 mb-4">
                        {staff.bio}
                      </p>

                      {/* Action Buttons */}
                      <div className="flex items-center justify-between">
                        <div className="flex space-x-2">
                          <motion.a
                            href={`mailto:${staff.email}`}
                            className="p-2 bg-blue-100 text-blue-600 rounded-full hover:bg-blue-200 transition-colors"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={(e) => e.stopPropagation()}
                          >
                            <Mail className="w-4 h-4" />
                          </motion.a>
                          <motion.a
                            href={`tel:${staff.phone}`}
                            className="p-2 bg-green-100 text-green-600 rounded-full hover:bg-green-200 transition-colors"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={(e) => e.stopPropagation()}
                          >
                            <Phone className="w-4 h-4" />
                          </motion.a>
                        </div>
                        
                        <motion.button
                          className="text-blue-600 text-sm font-medium flex items-center group-hover:text-purple-600 transition-colors"
                          whileHover={{ x: 5 }}
                        >
                          View Details
                          <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* No Results Message */}
          {filteredStaff.length === 0 && (
            <motion.div
              className="text-center py-20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-12 shadow-xl border border-white/20 max-w-md mx-auto">
                <Search className="w-16 h-16 mx-auto text-gray-400 mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">No Staff Found</h3>
                <p className="text-gray-600 mb-6">
                  Try adjusting your search criteria or department filter.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedDepartment("All");
                  }}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-medium hover:shadow-lg transition-all duration-300"
                >
                  Clear Filters
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </motion.section>

      {/* Staff Detail Modal */}
      <AnimatePresence>
        {isModalOpen && selectedStaff && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
            />
            
            {/* Modal Content */}
            <motion.div
              className="relative bg-white rounded-3xl max-w-4xl max-h-[90vh] overflow-hidden shadow-2xl"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-6 right-6 z-50 p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white/90 transition-colors"
              >
                <X className="w-6 h-6 text-gray-600" />
              </button>

              <div className="overflow-y-auto max-h-[90vh]">
                {/* Header Section */}
                <div className="relative h-80 bg-gradient-to-br from-blue-600 to-purple-600">
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="relative z-10 flex items-end h-full p-8">
                    <div className="flex items-end space-x-6">
                      <div className="relative">
                        <div className="w-32 h-32 rounded-2xl overflow-hidden border-4 border-white shadow-xl">
                          <StaffImage
                            src={selectedStaff.image}
                            alt={selectedStaff.name}
                            className="object-cover"
                          />
                        </div>
                      </div>
                      <div className="text-white pb-2">
                        <h2 className="text-4xl font-bold mb-2">{selectedStaff.name}</h2>
                        <p className="text-xl text-blue-100 mb-2">{selectedStaff.position}</p>
                        <div className="flex items-center space-x-4 text-blue-200">
                          <span className="flex items-center">
                            <Building className="w-4 h-4 mr-1" />
                            {selectedStaff.department}
                          </span>
                          <span className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {selectedStaff.experience}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-8">
                      {/* Bio Section */}
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                          <Quote className="w-6 h-6 mr-2 text-blue-600" />
                          About
                        </h3>
                        <p className="text-gray-700 text-lg leading-relaxed">
                          {selectedStaff.bio}
                        </p>
                      </div>

                      {/* Subjects Section */}
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                          <BookOpen className="w-6 h-6 mr-2 text-green-600" />
                          Subjects Taught
                        </h3>
                        <div className="flex flex-wrap gap-3">
                          {selectedStaff.subjects.map((subject: string, index: number) => (
                            <span
                              key={index}
                              className="bg-gradient-to-r from-green-100 to-blue-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium"
                            >
                              {subject}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Achievements Section */}
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                          <Trophy className="w-6 h-6 mr-2 text-yellow-600" />
                          Achievements
                        </h3>
                        <div className="space-y-3">
                          {selectedStaff.achievements.map((achievement: string, index: number) => (
                            <div
                              key={index}
                              className="flex items-center p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl border border-yellow-200"
                            >
                              <Award className="w-5 h-5 text-yellow-600 mr-3 flex-shrink-0" />
                              <span className="text-gray-800 font-medium">{achievement}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                      {/* Contact Info */}
                      <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                          <Phone className="w-5 h-5 mr-2 text-blue-600" />
                          Contact Information
                        </h3>
                        <div className="space-y-4">
                          <div className="flex items-center text-gray-700">
                            <Mail className="w-5 h-5 mr-3 text-gray-400" />
                            <a
                              href={`mailto:${selectedStaff.email}`}
                              className="hover:text-blue-600 transition-colors break-all"
                            >
                              {selectedStaff.email}
                            </a>
                          </div>
                          <div className="flex items-center text-gray-700">
                            <Phone className="w-5 h-5 mr-3 text-gray-400" />
                            <a
                              href={`tel:${selectedStaff.phone}`}
                              className="hover:text-blue-600 transition-colors"
                            >
                              {selectedStaff.phone}
                            </a>
                          </div>
                        </div>
                      </div>

                      {/* Education */}
                      <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                          <GraduationCap className="w-5 h-5 mr-2 text-purple-600" />
                          Education
                        </h3>
                        <p className="text-gray-700 font-medium">{selectedStaff.education}</p>
                        <p className="text-gray-600 text-sm mt-2">Specialization: {selectedStaff.specialization}</p>
                      </div>

                      {/* Social Links */}
                      <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                          <Globe className="w-5 h-5 mr-2 text-green-600" />
                          Connect
                        </h3>
                        <div className="flex space-x-3">
                          <a
                            href={selectedStaff.social.linkedin}
                            className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
                          >
                            <Linkedin className="w-5 h-5" />
                          </a>
                          <a
                            href={selectedStaff.social.twitter}
                            className="p-3 bg-blue-400 text-white rounded-full hover:bg-blue-500 transition-colors"
                          >
                            <Twitter className="w-5 h-5" />
                          </a>
                          <a
                            href={selectedStaff.social.facebook}
                            className="p-3 bg-blue-800 text-white rounded-full hover:bg-blue-900 transition-colors"
                          >
                            <Facebook className="w-5 h-5" />
                          </a>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="space-y-3">
                        <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center">
                          <MessageCircle className="w-5 h-5 mr-2" />
                          Send Message
                        </button>
                        <button className="w-full bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center">
                          <Download className="w-5 h-5 mr-2" />
                          Download CV
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
} 
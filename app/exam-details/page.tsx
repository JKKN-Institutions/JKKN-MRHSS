'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import dynamic from 'next/dynamic';
import { 
  Calendar, 
  Clock, 
  BookOpen, 
  Target,
  Award,
  CheckCircle,
  AlertTriangle,
  FileText,
  Download,
  Bell,
  Users,
  BarChart3,
  TrendingUp,
  Filter,
  Search,
  Eye,
  ChevronRight,
  GraduationCap,
  Timer,
  Star,
  Info,
  MapPin,
  Bookmark
} from 'lucide-react';

// Dynamic imports
const Header = dynamic(() => import('../components/Header'), {
  ssr: false,
  loading: () => <HeaderSkeleton />
});

const Footer = dynamic(() => import('../components/Footer'), {
  ssr: false,
  loading: () => <FooterSkeleton />
});


// Custom animations
const customStyles = `
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-20px); }
  }
  
  @keyframes pulse-glow {
    0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.5); }
    50% { box-shadow: 0 0 40px rgba(59, 130, 246, 0.8); }
  }
  
  @keyframes slide-up {
    from { transform: translateY(100px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
  }
  
  .float-animation { animation: float 6s ease-in-out infinite; }
  .pulse-glow { animation: pulse-glow 2s ease-in-out infinite; }
  .slide-up { animation: slide-up 0.6s ease-out; }
`;

// Skeleton components
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

// Type definitions
interface UpcomingExam {
  id: number;
  subject: string;
  date: string;
  time: string;
  duration: string;
  room: string;
  type: string;
  syllabus: string;
  status: string;
}

interface CompletedExam {
  id: number;
  subject: string;
  date: string;
  grade: string;
  marks: string;
  status: string;
}

interface ExamData {
  upcoming: UpcomingExam[];
  completed: CompletedExam[];
}

// Exam data
const examData: ExamData = {
  upcoming: [
    {
      id: 1,
      subject: "Mathematics",
      date: "2024-02-15",
      time: "09:00 AM",
      duration: "3 hours",
      room: "Room A-101",
      type: "Final",
      syllabus: "Chapters 1-12",
      status: "confirmed"
    },
    {
      id: 2,
      subject: "Physics",
      date: "2024-02-17",
      time: "02:00 PM",
      duration: "2.5 hours",
      room: "Lab B-203",
      type: "Practical",
      syllabus: "All experiments",
      status: "confirmed"
    },
    {
      id: 3,
      subject: "Chemistry",
      date: "2024-02-20",
      time: "10:30 AM",
      duration: "3 hours",
      room: "Room C-205",
      type: "Theory",
      syllabus: "Units 1-8",
      status: "tentative"
    },
    {
      id: 4,
      subject: "English Literature",
      date: "2024-02-22",
      time: "09:00 AM",
      duration: "3 hours",
      room: "Room D-301",
      type: "Final",
      syllabus: "All prescribed texts",
      status: "confirmed"
    }
  ],
  completed: [
    {
      id: 5,
      subject: "Biology",
      date: "2024-01-25",
      grade: "A+",
      marks: "95/100",
      status: "excellent"
    },
    {
      id: 6,
      subject: "History",
      date: "2024-01-22",
      grade: "A",
      marks: "88/100",
      status: "good"
    }
  ]
};

const stats = [
  { label: "Total Exams", value: "12", icon: FileText, color: "bg-blue-500" },
  { label: "Completed", value: "8", icon: CheckCircle, color: "bg-green-500" },
  { label: "Upcoming", value: "4", icon: Clock, color: "bg-orange-500" },
  { label: "Average Score", value: "91%", icon: Award, color: "bg-purple-500" }
];

export default function ExamDetailsPage() {
  const [selectedTab, setSelectedTab] = useState('upcoming');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [selectedExam, setSelectedExam] = useState(null);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const cardVariants = {
    rest: { 
      scale: 1,
      boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)"
    },
    hover: { 
      scale: 1.02,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: {
        duration: 0.3
      }
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed': return 'text-green-600 bg-green-100';
      case 'tentative': return 'text-yellow-600 bg-yellow-100';
      case 'excellent': return 'text-purple-600 bg-purple-100';
      case 'good': return 'text-blue-600 bg-blue-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const filteredExams = examData[selectedTab as keyof ExamData].filter((exam: UpcomingExam | CompletedExam) => {
    const matchesSearch = exam.subject.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = selectedFilter === 'all' || ('type' in exam && exam.type?.toLowerCase() === selectedFilter);
    return matchesSearch && matchesFilter;
  });

  return (
    <>
      <style jsx>{customStyles}</style>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <Header />
        
        {/* Hero Section */}
        <motion.section 
          className="pt-32 pb-20 px-4 relative overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
          <motion.div 
            className="max-w-7xl mx-auto text-center relative z-10"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div 
              className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mb-8 float-animation"
              variants={itemVariants}
            >
              <GraduationCap className="w-10 h-10 text-white" />
            </motion.div>
            
            <motion.h1 
              className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6"
              variants={itemVariants}
            >
              Exam Details
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto"
              variants={itemVariants}
            >
              Stay organized and prepared with comprehensive exam schedules, results, and performance analytics
            </motion.p>

            {/* Stats Cards */}
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
              variants={containerVariants}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className={`w-12 h-12 ${stat.color} rounded-xl flex items-center justify-center mb-4 mx-auto`}>
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Main Content */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            




            {/* Exam Schedule Information */}
            <motion.div 
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Examination Pattern</h3>
                  <p className="text-blue-100">Comprehensive assessment schedule for all grade levels</p>
                </div>
                
                <div className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                    {/* LKG to IX Pattern */}
                    <motion.div
                      className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 }}
                    >
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                          <GraduationCap className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-gray-900">LKG – IXth Standard</h4>
                          <p className="text-gray-600">Primary & Secondary Level</p>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        {[
                          { name: 'Term Tests', count: 3, color: 'bg-blue-500' },
                          { name: 'Quarterly', count: 1, color: 'bg-indigo-500' },
                          { name: 'Half Yearly', count: 1, color: 'bg-purple-500' },
                          { name: 'Terminal', count: 1, color: 'bg-violet-500' }
                        ].map((exam, index) => (
                          <motion.div
                            key={exam.name}
                            className="flex items-center justify-between p-4 bg-white rounded-xl shadow-sm border border-gray-100"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8 + index * 0.1 }}
                          >
                            <div className="flex items-center gap-3">
                              <div className={`w-3 h-3 ${exam.color} rounded-full`}></div>
                              <span className="font-medium text-gray-900">{exam.name}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-2xl font-bold text-gray-900">{exam.count}</span>
                              <span className="text-sm text-gray-500">exam{exam.count > 1 ? 's' : ''}</span>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>

                    {/* X to XII Pattern */}
                    <motion.div
                      className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-100"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 }}
                    >
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center">
                          <Target className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-gray-900">Xth – XIIth Standard</h4>
                          <p className="text-gray-600">Higher Secondary Level</p>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        {[
                          { name: 'Monthly Tests', count: 5, color: 'bg-purple-500' },
                          { name: 'Quarterly', count: 1, color: 'bg-pink-500' },
                          { name: 'Half Yearly', count: 1, color: 'bg-rose-500' },
                          { name: 'Revision Tests', count: 3, color: 'bg-fuchsia-500' }
                        ].map((exam, index) => (
                          <motion.div
                            key={exam.name}
                            className="flex items-center justify-between p-4 bg-white rounded-xl shadow-sm border border-gray-100"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8 + index * 0.1 }}
                          >
                            <div className="flex items-center gap-3">
                              <div className={`w-3 h-3 ${exam.color} rounded-full`}></div>
                              <span className="font-medium text-gray-900">{exam.name}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-2xl font-bold text-gray-900">{exam.count}</span>
                              <span className="text-sm text-gray-500">exam{exam.count > 1 ? 's' : ''}</span>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </div>

                  {/* Attendance Requirements */}
                  <motion.div
                    className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-4 sm:p-6 mt-6 flex flex-col gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 }}
                  >
                    <div className="flex flex-col sm:flex-row items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center flex-shrink-0 mx-auto sm:mx-0">
                        <AlertTriangle className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1 w-full">
                        <h4 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2 justify-center sm:justify-start">
                          <Users className="w-5 h-5 text-orange-500" />
                          Attendance Requirements
                        </h4>
                        <div className="bg-white rounded-xl p-4 sm:p-6">
                          <div className="flex flex-col sm:flex-row items-center gap-3 mb-3">
                            <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                              <span className="text-orange-600 font-bold text-sm">75%</span>
                            </div>
                            <span className="font-semibold text-gray-900">Minimum Attendance Required</span>
                          </div>
                          <p className="text-gray-700 leading-relaxed text-center sm:text-left">
                            Students will <strong>not be allowed to complete the year</strong> if they have secured less than 
                            <span className="text-orange-600 font-semibold"> 75% attendance</span>. 
                            Regular attendance is mandatory for academic progression.
                          </p>
                          <div className="mt-4 p-3 bg-orange-50 rounded-lg">
                            <p className="text-sm text-orange-700 flex items-center gap-2 justify-center sm:justify-start">
                              <Info className="w-4 h-4" />
                              This policy ensures consistent learning and academic excellence
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Exam Cards */}
            <motion.div 
              className="grid gap-6"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <AnimatePresence mode="wait">
                {filteredExams.map((exam: UpcomingExam | CompletedExam) => (
                  <motion.div
                    key={exam.id}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100"
                    variants={cardVariants}
                    initial="rest"
                    whileHover="hover"
                    layout
                    exit={{ opacity: 0, scale: 0.9 }}
                  >
                    {selectedTab === 'upcoming' && 'type' in exam ? (
                      <div className="p-6">
                        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                          <div className="flex-1">
                            <div className="flex items-center gap-4 mb-4">
                              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                                <BookOpen className="w-6 h-6 text-white" />
                              </div>
                              <div>
                                <h3 className="text-xl font-bold text-gray-900">{exam.subject}</h3>
                                <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(exam.status)}`}>
                                  {exam.status.charAt(0).toUpperCase() + exam.status.slice(1)}
                                </span>
                              </div>
                            </div>
                            
                            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                              <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4 text-blue-500" />
                                <span>{exam.date}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4 text-orange-500" />
                                <span>{(exam as UpcomingExam).time}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Timer className="w-4 h-4 text-purple-500" />
                                <span>{(exam as UpcomingExam).duration}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <MapPin className="w-4 h-4 text-red-500" />
                                <span>{(exam as UpcomingExam).room}</span>
                              </div>
                            </div>
                            
                            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                              <div className="flex items-center gap-2 mb-2">
                                <Bookmark className="w-4 h-4 text-blue-500" />
                                <span className="font-medium">Syllabus:</span>
                              </div>
                              <p className="text-gray-700">{(exam as UpcomingExam).syllabus}</p>
                            </div>
                          </div>
                        
                          <div className="flex flex-col gap-3">
                            <motion.button
                              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-medium flex items-center gap-2 hover:shadow-lg transition-shadow"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <Eye className="w-4 h-4" />
                              View Details
                            </motion.button>
                            <motion.button
                              className="px-6 py-3 border border-gray-200 text-gray-700 rounded-xl font-medium flex items-center gap-2 hover:bg-gray-50 transition-colors"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <Download className="w-4 h-4" />
                              Download
                            </motion.button>
                          </div>
                        </div>
                      </div>
                    ) : selectedTab === 'completed' && 'grade' in exam ? (
                      <div className="p-6">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-600 rounded-xl flex items-center justify-center">
                              <Award className="w-6 h-6 text-white" />
                            </div>
                            <div>
                              <h3 className="text-xl font-bold text-gray-900">{exam.subject}</h3>
                              <p className="text-gray-600">{exam.date}</p>
                            </div>
                          </div>
                          
                          <div className="text-right">
                            <div className="text-2xl font-bold text-gray-900 mb-1">{(exam as CompletedExam).grade}</div>
                            <div className="text-gray-600">{(exam as CompletedExam).marks}</div>
                            <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium mt-2 ${getStatusColor(exam.status)}`}>
                              {exam.status.charAt(0).toUpperCase() + exam.status.slice(1)}
                            </span>
                          </div>
                        </div>
                      </div>
                    ) : null}
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            {filteredExams.length === 0 && (
              <motion.div 
                className="text-center py-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">No exams found</h3>
                <p className="text-gray-600">Try adjusting your search or filter criteria</p>
              </motion.div>
            )}
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
} 
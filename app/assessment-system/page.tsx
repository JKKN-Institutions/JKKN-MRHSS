'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import dynamic from 'next/dynamic';
import { 
  ClipboardCheck, 
  BarChart3, 
  Award, 
  Target,
  BookCheck,
  TrendingUp,
  Users,
  Clock,
  CheckCircle,
  AlertCircle,
  Star,
  FileText,
  Calculator,
  PieChart,
  LineChart,
  GraduationCap,
  Shield,
  Lightbulb,
  Calendar,
  MessageSquare,
  Eye,
  ChevronRight
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
  
  @keyframes pulse-glow {
    0%, 100% {
      box-shadow: 0 0 20px rgba(59, 130, 246, 0.4);
    }
    50% {
      box-shadow: 0 0 40px rgba(59, 130, 246, 0.8);
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
  
  .animate-pulse-glow {
    animation: pulse-glow 3s ease-in-out infinite;
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

// Dynamically import components with SSR disabled
const Header = dynamic(() => import('../components/Header'), { 
  ssr: false,
  loading: () => <HeaderSkeleton />
});
const Footer = dynamic(() => import('../components/Footer'), { 
  ssr: false,
  loading: () => <FooterSkeleton />
});

export default function AssessmentSystemPage() {
  const [activeSection, setActiveSection] = useState('overview');

  const gradingScale = [
    { grade: 'A+', percentage: '95-100%', gpa: '4.0', description: 'Outstanding Achievement', color: 'from-emerald-500 to-green-600' },
    { grade: 'A', percentage: '90-94%', gpa: '3.7-3.9', description: 'Excellent Achievement', color: 'from-blue-500 to-cyan-600' },
    { grade: 'A-', percentage: '85-89%', gpa: '3.3-3.6', description: 'Very Good Achievement', color: 'from-indigo-500 to-blue-600' },
    { grade: 'B+', percentage: '80-84%', gpa: '3.0-3.2', description: 'Good Achievement', color: 'from-purple-500 to-indigo-600' },
    { grade: 'B', percentage: '75-79%', gpa: '2.7-2.9', description: 'Satisfactory Achievement', color: 'from-yellow-500 to-orange-600' },
    { grade: 'B-', percentage: '70-74%', gpa: '2.3-2.6', description: 'Acceptable Achievement', color: 'from-orange-500 to-red-600' },
    { grade: 'C+', percentage: '65-69%', gpa: '2.0-2.2', description: 'Below Expectations', color: 'from-red-500 to-pink-600' },
    { grade: 'C', percentage: '60-64%', gpa: '1.7-1.9', description: 'Needs Improvement', color: 'from-gray-500 to-gray-600' }
  ];

  const assessmentMethods = [
    {
      type: 'Formative Assessment',
      icon: <ClipboardCheck className="w-8 h-8" />,
      description: 'Ongoing evaluation during the learning process',
      weight: '30%',
      examples: ['Daily quizzes', 'Class participation', 'Homework assignments', 'Learning journals'],
      color: 'from-blue-400 to-cyan-500'
    },
    {
      type: 'Summative Assessment',
      icon: <BookCheck className="w-8 h-8" />,
      description: 'Evaluation at the end of instructional units',
      weight: '50%',
      examples: ['Unit tests', 'Mid-term exams', 'Final exams', 'Major projects'],
      color: 'from-purple-400 to-violet-500'
    },
    {
      type: 'Performance Assessment',
      icon: <TrendingUp className="w-8 h-8" />,
      description: 'Real-world application of knowledge and skills',
      weight: '20%',
      examples: ['Presentations', 'Lab practicals', 'Portfolio reviews', 'Skill demonstrations'],
      color: 'from-green-400 to-emerald-500'
    }
  ];

  const reportingSchedule = [
    {
      period: 'Quarter 1',
      duration: 'August - October',
      assessments: ['Formative assessments', 'Unit tests', 'Project submissions'],
      reporting: 'Progress report issued',
      conferences: 'Optional parent conferences',
      color: 'from-orange-400 to-red-500'
    },
    {
      period: 'Quarter 2',
      duration: 'November - December',
      assessments: ['Mid-term examinations', 'Continuous assessments', 'Semester projects'],
      reporting: 'First semester report card',
      conferences: 'Mandatory parent conferences',
      color: 'from-blue-400 to-purple-500'
    },
    {
      period: 'Quarter 3',
      duration: 'January - March',
      assessments: ['Unit assessments', 'Practical evaluations', 'Research projects'],
      reporting: 'Progress report issued',
      conferences: 'Optional parent conferences',
      color: 'from-green-400 to-teal-500'
    },
    {
      period: 'Quarter 4',
      duration: 'April - June',
      assessments: ['Final examinations', 'Portfolio reviews', 'Capstone projects'],
      reporting: 'Final report card & transcripts',
      conferences: 'End-of-year conferences',
      color: 'from-purple-400 to-pink-500'
    }
  ];

  const academicPolicies = [
    {
      title: 'Academic Integrity',
      icon: <Shield className="w-8 h-8" />,
      description: 'Maintaining the highest standards of honesty and ethical conduct in all academic work.',
      points: [
        'Zero tolerance for plagiarism and cheating',
        'Proper citation and referencing required',
        'Collaborative work guidelines clearly defined',
        'Academic dishonesty consequences outlined'
      ],
      color: 'from-red-400 to-pink-500'
    },
    {
      title: 'Late Work Policy',
      icon: <Clock className="w-8 h-8" />,
      description: 'Clear guidelines for handling assignments submitted after deadlines.',
      points: [
        '10% reduction per day for late submissions',
        'Maximum of 3 days late acceptance',
        'Extensions granted for valid reasons',
        'Make-up work available for excused absences'
      ],
      color: 'from-yellow-400 to-orange-500'
    },
    {
      title: 'Grade Review Process',
      icon: <Eye className="w-8 h-8" />,
      description: 'Transparent process for students and parents to review and discuss grades.',
      points: [
        'Grade inquiry within 5 days of posting',
        'Teacher consultation before formal review',
        'Department head involvement if needed',
        'Appeals process clearly defined'
      ],
      color: 'from-blue-400 to-cyan-500'
    },
    {
      title: 'Special Accommodations',
      icon: <Users className="w-8 h-8" />,
      description: 'Support systems for students with diverse learning needs.',
      points: [
        'Extended time for assessments when needed',
        'Alternative assessment formats available',
        'Learning support team coordination',
        'Individualized education plans honored'
      ],
      color: 'from-green-400 to-emerald-500'
    }
  ];

  const supportPrograms = [
    {
      program: 'Academic Tutoring',
      description: 'One-on-one and small group tutoring sessions',
      availability: 'After school hours & weekends',
      subjects: 'All core subjects available',
      cost: 'Free for enrolled students'
    },
    {
      program: 'Study Skills Workshop',
      description: 'Essential study strategies and time management',
      availability: 'Monthly workshops',
      subjects: 'Cross-curricular skills',
      cost: 'Included in school fees'
    },
    {
      program: 'Remedial Classes',
      description: 'Additional support for struggling students',
      availability: 'During lunch breaks',
      subjects: 'Math, Science, English',
      cost: 'No additional cost'
    },
    {
      program: 'Peer Mentoring',
      description: 'Student-to-student academic support',
      availability: 'Throughout school year',
      subjects: 'Various subject areas',
      cost: 'Community service program'
    }
  ];

  return (
    <div className="min-h-screen custom-gradient">
      {/* Custom CSS Styles */}
      <style jsx>{customStyles}</style>
      
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-600 animate-gradient-xy opacity-90"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 via-indigo-600 to-purple-700 animate-gradient-xy-reverse opacity-80"></div>
        
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
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent drop-shadow-lg leading-tight">
                  Assessment System & Grading Policy
                </h1>
                <p className="text-xl md:text-2xl text-white/90 leading-relaxed drop-shadow-md mb-8">
                  Comprehensive evaluation framework designed to measure student progress, 
                  promote learning, and ensure academic excellence across all levels.
                </p>
              </motion.div>

              {/* Assessment Philosophy */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="bg-white/20 backdrop-blur-md rounded-2xl p-6 border border-white/30"
              >
                <div className="flex items-center mb-4">
                  <BarChart3 className="w-8 h-8 text-white mr-3" />
                  <h3 className="text-xl font-bold text-white">Our Assessment Philosophy</h3>
                </div>
                <p className="text-white/90 text-lg leading-relaxed">
                  We believe assessment should guide learning, provide meaningful feedback, 
                  and celebrate student growth while maintaining rigorous academic standards.
                </p>
              </motion.div>

              {/* Quick Stats */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="grid grid-cols-3 gap-4"
              >
                <div className="bg-white/20 backdrop-blur-md rounded-xl p-4 text-center border border-white/30">
                  <div className="text-2xl font-bold text-white">8</div>
                  <div className="text-white/80 text-sm">Grade Levels</div>
                </div>
                <div className="bg-white/20 backdrop-blur-md rounded-xl p-4 text-center border border-white/30">
                  <div className="text-2xl font-bold text-white">4</div>
                  <div className="text-white/80 text-sm">Quarters</div>
                </div>
                <div className="bg-white/20 backdrop-blur-md rounded-xl p-4 text-center border border-white/30">
                  <div className="text-2xl font-bold text-white">3</div>
                  <div className="text-white/80 text-sm">Assessment Types</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Side Animated Illustration */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative hidden lg:block"
            >
              {/* Assessment Visualization */}
              <div className="relative w-full h-[600px]">
                {/* Central Assessment Hub */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white/90 rounded-full flex items-center justify-center shadow-2xl animate-pulse-glow"
                >
                  <ClipboardCheck className="w-16 h-16 text-indigo-600" />
                </motion.div>

                {/* Orbiting Assessment Elements */}
                {[
                  { icon: BookCheck, color: 'from-blue-400 to-cyan-500', delay: 0.7, radius: 120, angle: 0, label: 'Tests' },
                  { icon: TrendingUp, color: 'from-purple-400 to-violet-500', delay: 0.8, radius: 120, angle: 72, label: 'Projects' },
                  { icon: Award, color: 'from-green-400 to-emerald-500', delay: 0.9, radius: 120, angle: 144, label: 'Performance' },
                  { icon: Calculator, color: 'from-yellow-400 to-orange-500', delay: 1.0, radius: 120, angle: 216, label: 'Quizzes' },
                  { icon: FileText, color: 'from-pink-400 to-red-500', delay: 1.1, radius: 120, angle: 288, label: 'Reports' },
                ].map(({ icon: Icon, color, delay, radius, angle, label }, index) => {
                  const x = Math.cos((angle * Math.PI) / 180) * radius;
                  const y = Math.sin((angle * Math.PI) / 180) * radius;
                  
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.8, delay }}
                      className="absolute top-1/2 left-1/2"
                      style={{
                        transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`
                      }}
                    >
                      <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${color} flex items-center justify-center shadow-xl mb-2`}>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        >
                          <Icon className="w-8 h-8 text-white" />
                        </motion.div>
                      </div>
                      <div className="text-xs text-white text-center font-semibold bg-white/20 rounded-full px-2 py-1">
                        {label}
                      </div>
                    </motion.div>
                  );
                })}

                {/* Floating Grade Elements */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1.2, delay: 1.2 }}
                  className="absolute top-16 left-16 w-20 h-20 bg-gradient-to-br from-emerald-400 to-green-500 rounded-xl flex items-center justify-center shadow-xl animate-float"
                >
                  <div className="text-white text-center">
                    <div className="text-lg font-bold">A+</div>
                    <div className="text-xs">95-100%</div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1.2, delay: 1.4 }}
                  className="absolute top-20 right-20 w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-xl flex items-center justify-center shadow-xl animate-float"
                  style={{ animationDelay: '1s' }}
                >
                  <div className="text-white text-center">
                    <div className="text-sm font-bold">GPA</div>
                    <div className="text-xs">4.0</div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1.2, delay: 1.6 }}
                  className="absolute bottom-20 left-20 w-18 h-18 bg-gradient-to-br from-purple-400 to-violet-500 rounded-xl flex items-center justify-center shadow-xl animate-float"
                  style={{ animationDelay: '2s' }}
                >
                  <PieChart className="w-8 h-8 text-white" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Grading Scale Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
              Grading Scale & Standards
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our comprehensive grading system provides clear benchmarks for academic achievement 
              and helps students understand their progress toward learning objectives.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {gradingScale.map((grade, index) => (
              <motion.div
                key={grade.grade}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${grade.color} flex items-center justify-center mb-4 shadow-lg`}>
                  <span className="text-2xl font-bold text-white">{grade.grade}</span>
                </div>
                <div className="space-y-2">
                  <div className="text-lg font-bold text-gray-800">{grade.percentage}</div>
                  <div className="text-sm text-gray-600">GPA: {grade.gpa}</div>
                  <div className="text-sm text-gray-600">{grade.description}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Assessment Methods Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
              Assessment Methods
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We employ multiple assessment strategies to provide a comprehensive view of student 
              learning and ensure every student can demonstrate their knowledge and skills.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {assessmentMethods.map((method, index) => (
              <motion.div
                key={method.type}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${method.color} flex items-center justify-center mb-6 shadow-lg`}>
                  {method.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">{method.type}</h3>
                <p className="text-gray-600 leading-relaxed mb-4">{method.description}</p>
                
                <div className="mb-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
                    Weight: {method.weight}
                  </span>
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-800 text-sm uppercase tracking-wider">
                    Examples:
                  </h4>
                  <ul className="space-y-1">
                    {method.examples.map((example, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reporting Schedule Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
              Progress Reporting Schedule
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Regular communication with students and families about academic progress through 
              structured reporting periods and parent-teacher conferences.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reportingSchedule.map((period, index) => (
              <motion.div
                key={period.period}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                className="bg-white rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className={`w-full h-4 rounded-t-xl bg-gradient-to-r ${period.color} mb-6`}></div>
                
                <h3 className="text-xl font-bold mb-2 text-gray-800">{period.period}</h3>
                <p className="text-gray-600 mb-4 text-sm">{period.duration}</p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 text-xs uppercase tracking-wider mb-2">
                      Key Assessments:
                    </h4>
                    <ul className="space-y-1">
                      {period.assessments.map((assessment, idx) => (
                        <li key={idx} className="text-xs text-gray-600 flex items-center">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 flex-shrink-0"></div>
                          {assessment}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-800 text-xs uppercase tracking-wider mb-1">
                      Reporting:
                    </h4>
                    <p className="text-xs text-gray-600">{period.reporting}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-800 text-xs uppercase tracking-wider mb-1">
                      Conferences:
                    </h4>
                    <p className="text-xs text-gray-600">{period.conferences}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Policies Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
              Academic Policies
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Clear guidelines and policies ensure fairness, maintain academic standards, 
              and support student success throughout their educational journey.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {academicPolicies.map((policy, index) => (
              <motion.div
                key={policy.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${policy.color} flex items-center justify-center mb-6 shadow-lg`}>
                  {policy.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">{policy.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{policy.description}</p>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-800 text-sm uppercase tracking-wider">
                    Key Points:
                  </h4>
                  <ul className="space-y-2">
                    {policy.points.map((point, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-start">
                        <ChevronRight className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Programs Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
              Academic Support Programs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive support systems designed to help every student achieve their full 
              academic potential and succeed in their educational journey.
            </p>
          </motion.div>

          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">Program</th>
                    <th className="px-6 py-4 text-left font-semibold">Description</th>
                    <th className="px-6 py-4 text-left font-semibold">Availability</th>
                    <th className="px-6 py-4 text-left font-semibold">Subjects</th>
                    <th className="px-6 py-4 text-left font-semibold">Cost</th>
                  </tr>
                </thead>
                <tbody>
                  {supportPrograms.map((program, index) => (
                    <motion.tr
                      key={program.program}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="border-b border-gray-100 hover:bg-blue-50 transition-colors duration-200"
                    >
                      <td className="px-6 py-4 font-semibold text-gray-800">{program.program}</td>
                      <td className="px-6 py-4 text-gray-600">{program.description}</td>
                      <td className="px-6 py-4 text-gray-600">{program.availability}</td>
                      <td className="px-6 py-4 text-gray-600">{program.subjects}</td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          {program.cost}
                        </span>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white text-center"
          >
            <h3 className="text-2xl font-bold mb-4">Need More Information?</h3>
            <p className="text-lg mb-6 opacity-90">
              Our academic counselors are here to help you understand our assessment system 
              and support your student's academic success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transform hover:scale-105 transition-all duration-300">
                <MessageSquare className="w-5 h-5 inline mr-2" />
                Contact Academic Office
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transform hover:scale-105 transition-all duration-300">
                <Calendar className="w-5 h-5 inline mr-2" />
                Schedule a Meeting
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 
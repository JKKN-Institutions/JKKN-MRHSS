'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronRight, 
  Shield, 
  Eye, 
  Lock, 
  Users, 
  FileText, 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  CheckCircle,
  Info,
  Bookmark,
  Download,
  ExternalLink
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface PolicySection {
  id: string;
  title: string;
  icon: React.ReactNode;
  content: string[];
  details?: string[];
  gradient: string;
}

export default function PrivacyPolicyPage() {
  const [activeSection, setActiveSection] = useState<string>('overview');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sections = [
    { id: 'overview', title: 'Overview', icon: Info },
    { id: 'collection', title: 'Data Collection', icon: Eye },
    { id: 'usage', title: 'Data Usage', icon: Users },
    { id: 'sharing', title: 'Data Sharing', icon: Shield },
    { id: 'security', title: 'Security', icon: Lock },
    { id: 'retention', title: 'Data Retention', icon: Clock },
    { id: 'rights', title: 'Your Rights', icon: FileText },
    { id: 'contact', title: 'Contact Us', icon: Phone }
  ];

  const policySections: PolicySection[] = [
    {
      id: 'overview',
      title: 'Privacy Policy Overview',
      icon: <Info className="w-6 h-6" />,
      gradient: 'from-blue-500 via-purple-500 to-blue-600',
      content: [
        'At JKKN Matriculation Higher Secondary School, we prioritize the privacy and protection of personal information shared by our website visitors.',
        'This Privacy Policy outlines our practices regarding the collection, use, and disclosure of personal information on our website.',
        'We are committed to maintaining the highest standards of data protection and privacy for our students, parents, and community members.'
      ]
    },
    {
      id: 'collection',
      title: 'Personal Information We Collect',
      icon: <Eye className="w-6 h-6" />,
      gradient: 'from-emerald-500 via-teal-500 to-cyan-600',
      content: [
        'When you visit our website, we may collect the following types of personal information from you:'
      ],
      details: [
        'Name, date of birth, and gender of the student',
        'Parent or guardian contact information, including email address, phone number, and postal address',
        'Academic records and performance data',
        'Information voluntarily provided through contact forms or email communications'
      ]
    },
    {
      id: 'usage',
      title: 'Use of Personal Information',
      icon: <Users className="w-6 h-6" />,
      gradient: 'from-purple-500 via-pink-500 to-rose-600',
      content: [
        'We may use your personal information for the following purposes:'
      ],
      details: [
        'Facilitating the admission process and enrollment of students',
        'Providing information about our school\'s programs, activities, and events',
        'Communicating important updates, announcements, and newsletters to parents or guardians',
        'Improving our website\'s content, functionality, and user experience',
        'Conducting research and analysis to enhance educational offerings and student support services'
      ]
    },
    {
      id: 'sharing',
      title: 'Disclosure of Personal Information',
      icon: <Shield className="w-6 h-6" />,
      gradient: 'from-orange-500 via-red-500 to-pink-600',
      content: [
        'We do not disclose your personal information to third parties without your consent, except in the following circumstances:'
      ],
      details: [
        'When required by law or legal process',
        'To protect the rights or property of JKKN Matriculation Higher Secondary School or our website users',
        'To contractors or service providers who assist us in website operation or the provision of educational services'
      ]
    },
    {
      id: 'security',
      title: 'Security of Personal Information',
      icon: <Lock className="w-6 h-6" />,
      gradient: 'from-indigo-500 via-blue-500 to-purple-600',
      content: [
        'We take reasonable precautions to safeguard your personal information from unauthorized access, use, or disclosure.',
        'However, no security measures can guarantee absolute protection, and we cannot ensure the complete security of your personal information.'
      ]
    },
    {
      id: 'retention',
      title: 'Retention of Personal Information',
      icon: <Clock className="w-6 h-6" />,
      gradient: 'from-green-500 via-emerald-500 to-teal-600',
      content: [
        'We retain your personal information for as long as necessary to fulfill the purposes for which it was collected.',
        'A longer retention period may be required by law or regulation.'
      ]
    },
    {
      id: 'rights',
      title: 'Your Rights',
      icon: <FileText className="w-6 h-6" />,
      gradient: 'from-cyan-500 via-blue-500 to-indigo-600',
      content: [
        'You have the right to access, correct, or request the deletion of your personal information.',
        'If you wish to exercise these rights or have any questions or concerns regarding your personal information, please contact us using the provided contact information.'
      ]
    }
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <Header />
      
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
        <motion.div
          className="h-full bg-gradient-to-r from-blue-500 to-purple-600"
          style={{ width: `${scrollProgress}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5"></div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl mb-8 shadow-xl"
            >
              <Shield className="w-10 h-10 text-white" />
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-6"
            >
              Privacy Policy
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto mb-8"
            >
              Your privacy is fundamental to our mission. Learn how JKKN Matriculation Higher Secondary School 
              protects and manages your personal information.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap items-center justify-center gap-4 text-sm text-gray-500"
            >
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Bookmark className="w-4 h-4" />
                <span>7 min read</span>
              </div>
            </motion.div>
          </div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-white/70 backdrop-blur-xl rounded-2xl p-6 border border-white/20 shadow-xl">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Navigation</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {sections.map((section) => {
                  const IconComponent = section.icon;
                  return (
                    <motion.button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className={`flex items-center space-x-2 p-3 rounded-xl transition-all duration-300 text-left ${
                        activeSection === section.id
                          ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                          : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <IconComponent className="w-4 h-4" />
                      <span className="text-sm font-medium">{section.title}</span>
                    </motion.button>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            {policySections.map((section, index) => (
              <motion.div
                key={section.id}
                id={section.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
                  <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-xl">
                    {/* Header */}
                    <div className="flex items-center space-x-4 mb-6">
                      <div className={`p-4 rounded-2xl bg-gradient-to-r ${section.gradient} shadow-lg`}>
                        <div className="text-white">
                          {section.icon}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h2 className="text-2xl font-bold text-gray-900">{section.title}</h2>
                        <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mt-2"></div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="space-y-4">
                      {section.content.map((item, contentIndex) => (
                        <motion.p
                          key={contentIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6, delay: contentIndex * 0.1 }}
                          className="text-gray-700 leading-relaxed text-lg"
                        >
                          {item}
                        </motion.p>
                      ))}

                      {/* Details */}
                      {section.details && (
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6, delay: 0.3 }}
                          className="mt-6 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl border border-blue-100"
                        >
                          <div className="space-y-3">
                            {section.details.map((detail, detailIndex) => (
                              <motion.div
                                key={detailIndex}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.4 + detailIndex * 0.1 }}
                                className="flex items-start space-x-3 group/item"
                              >
                                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-700 group-hover/item:text-gray-900 transition-colors duration-200">
                                  {detail}
                                </span>
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Contact Section */}
            <motion.div
              id="contact"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="group"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 via-blue-500/20 to-purple-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
                <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white shadow-2xl">
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold mb-4">Contact Information</h2>
                    <p className="text-blue-100 text-lg max-w-2xl mx-auto">
                      For inquiries, concerns, or requests regarding this Privacy Policy or the handling of personal information, please reach out to us.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6">
                    <motion.div
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20"
                    >
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <Phone className="w-6 h-6" />
                      </div>
                      <h3 className="font-semibold mb-2">Phone</h3>
                      <p className="text-blue-100">+919345855001</p>
                    </motion.div>

                    <motion.div
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20"
                    >
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <Mail className="w-6 h-6" />
                      </div>
                      <h3 className="font-semibold mb-2">Email</h3>
                      <p className="text-blue-100">school@jkkn.org</p>
                    </motion.div>

                    <motion.div
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20"
                    >
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <MapPin className="w-6 h-6" />
                      </div>
                      <h3 className="font-semibold mb-2">Address</h3>
                      <p className="text-blue-100 text-sm leading-relaxed">
                        Natarajapuram, NH-544<br />
                        Kumarapalayam (TK), Namakkal (DT)<br />
                        Tamil Nadu, 638183
                      </p>
                    </motion.div>
                  </div>

                  <div className="text-center mt-8">
                    <motion.a
                      href="mailto:school@jkkn.org"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center space-x-2 bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Send us an email</span>
                      <ExternalLink className="w-4 h-4" />
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 
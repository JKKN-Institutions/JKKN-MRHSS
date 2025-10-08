'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, FileText, Image, FolderOpen, TrendingUp, Users, Sparkles } from 'lucide-react';
import { getEvents, getPosts, getMedia, getCategories } from '../admin/utils/storage';
import { initializeSampleData } from '../admin/utils/sample-data';
import { format } from 'date-fns';
import toast from 'react-hot-toast';

export default function DashboardPage() {
  const [stats, setStats] = useState({
    totalEvents: 0,
    upcomingEvents: 0,
    totalPosts: 0,
    publishedPosts: 0,
    totalMedia: 0,
    totalCategories: 0,
  });

  const [recentActivity, setRecentActivity] = useState<any[]>([]);

  useEffect(() => {
    const events = getEvents();
    const posts = getPosts();
    const media = getMedia();
    const categories = getCategories();

    setStats({
      totalEvents: events.length,
      upcomingEvents: events.filter(e => e.status === 'upcoming').length,
      totalPosts: posts.length,
      publishedPosts: posts.filter(p => p.status === 'published').length,
      totalMedia: media.length,
      totalCategories: categories.length,
    });

    // Combine recent activity
    const activity = [
      ...events.slice(0, 3).map(e => ({ type: 'event', title: e.title, date: e.createdAt })),
      ...posts.slice(0, 3).map(p => ({ type: 'post', title: p.title, date: p.createdAt })),
    ]
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, 5);

    setRecentActivity(activity);
  }, []);

  const handleLoadSampleData = () => {
    if (confirm('Load sample data? This will add demo events, posts, and categories.')) {
      initializeSampleData();
      toast.success('Sample data loaded! Refresh the page to see changes.');
      setTimeout(() => window.location.reload(), 1500);
    }
  };

  const statCards = [
    {
      title: 'Total Events',
      value: stats.totalEvents,
      subtitle: `${stats.upcomingEvents} upcoming`,
      icon: Calendar,
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20',
      textColor: 'text-blue-600 dark:text-blue-400',
    },
    {
      title: 'Total Posts',
      value: stats.totalPosts,
      subtitle: `${stats.publishedPosts} published`,
      icon: FileText,
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20',
      textColor: 'text-purple-600 dark:text-purple-400',
    },
    {
      title: 'Media Files',
      value: stats.totalMedia,
      subtitle: 'Total uploads',
      icon: Image,
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50 dark:bg-green-900/20',
      textColor: 'text-green-600 dark:text-green-400',
    },
    {
      title: 'Categories',
      value: stats.totalCategories,
      subtitle: 'Active categories',
      icon: FolderOpen,
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50 dark:bg-orange-900/20',
      textColor: 'text-orange-600 dark:text-orange-400',
    },
  ];

  return (
    <div className="p-6 lg:p-8 space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Dashboard Overview</h1>
          <p className="text-gray-600 dark:text-gray-400">
            Welcome back! Here's what's happening with your college website.
          </p>
        </div>
        {stats.totalEvents === 0 && stats.totalPosts === 0 && (
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleLoadSampleData}
            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all"
          >
            <Sparkles className="w-5 h-5" />
            Load Sample Data
          </motion.button>
        )}
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((card, index) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start justify-between mb-4">
              <div className={`p-3 rounded-lg ${card.bgColor}`}>
                <card.icon className={`w-6 h-6 ${card.textColor}`} />
              </div>
              <div className={`p-1 rounded ${card.bgColor}`}>
                <TrendingUp className={`w-4 h-4 ${card.textColor}`} />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                {card.value}
              </h3>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">
                {card.title}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-500">{card.subtitle}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Recent Activity and Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activity */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6"
        >
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Recent Activity</h2>
          {recentActivity.length === 0 ? (
            <p className="text-gray-500 dark:text-gray-400 text-center py-8">
              No recent activity. Start by adding events or posts!
            </p>
          ) : (
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 pb-4 border-b border-gray-100 dark:border-gray-700 last:border-0 last:pb-0"
                >
                  <div
                    className={`p-2 rounded-lg ${
                      activity.type === 'event'
                        ? 'bg-blue-50 dark:bg-blue-900/20'
                        : 'bg-purple-50 dark:bg-purple-900/20'
                    }`}
                  >
                    {activity.type === 'event' ? (
                      <Calendar
                        className={`w-5 h-5 ${
                          activity.type === 'event'
                            ? 'text-blue-600 dark:text-blue-400'
                            : 'text-purple-600 dark:text-purple-400'
                        }`}
                      />
                    ) : (
                      <FileText
                        className={`w-5 h-5 ${
                          activity.type === 'event'
                            ? 'text-blue-600 dark:text-blue-400'
                            : 'text-purple-600 dark:text-purple-400'
                        }`}
                      />
                    )}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900 dark:text-white">
                      {activity.title}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      {activity.type === 'event' ? 'Event' : 'Post'} •{' '}
                      {format(new Date(activity.date), 'MMM dd, yyyy')}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6"
        >
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Quick Actions</h2>
          <div className="space-y-3">
            <a
              href="/dashboard/events"
              className="block p-4 bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/30 rounded-lg transition-colors"
            >
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <span className="font-medium text-gray-900 dark:text-white">Add Event</span>
              </div>
            </a>
            <a
              href="/dashboard/posts"
              className="block p-4 bg-purple-50 dark:bg-purple-900/20 hover:bg-purple-100 dark:hover:bg-purple-900/30 rounded-lg transition-colors"
            >
              <div className="flex items-center gap-3">
                <FileText className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                <span className="font-medium text-gray-900 dark:text-white">Create Post</span>
              </div>
            </a>
            <a
              href="/dashboard/media"
              className="block p-4 bg-green-50 dark:bg-green-900/20 hover:bg-green-100 dark:hover:bg-green-900/30 rounded-lg transition-colors"
            >
              <div className="flex items-center gap-3">
                <Image className="w-5 h-5 text-green-600 dark:text-green-400" />
                <span className="font-medium text-gray-900 dark:text-white">Upload Media</span>
              </div>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}


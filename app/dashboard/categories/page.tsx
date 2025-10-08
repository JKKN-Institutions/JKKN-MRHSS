'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FolderOpen, FileText, Lock } from 'lucide-react';
import { getCategories, updateCategoryPostCounts } from '@/app/admin/utils/storage';
import { Category } from '@/app/admin/types';
import { format } from 'date-fns';

export default function CategoriesPage() {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    loadCategories();
  }, []);

  const loadCategories = () => {
    updateCategoryPostCounts();
    const loadedCategories = getCategories();
    setCategories(loadedCategories);
  };


  return (
    <div className="p-6 lg:p-8 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Categories</h1>
          <p className="text-gray-600 dark:text-gray-400">Fixed categories for organizing posts</p>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg border border-gray-300 dark:border-gray-600">
          <Lock className="w-5 h-5" />
          <span className="font-medium">Read Only</span>
        </div>
      </div>

      {/* Info Banner */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-4"
      >
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0">
            <svg className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-blue-900 dark:text-blue-300 mb-1">
              Fixed Categories
            </h3>
            <p className="text-sm text-blue-800 dark:text-blue-400">
              These 3 categories are fixed and aligned with your website sections. You cannot add, edit, or delete them.
              Use these categories when creating posts to ensure they appear on the correct website pages.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map((category, index) => (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border-2 border-gray-200 dark:border-gray-700 p-6 hover:shadow-lg transition-all"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg">
                <FolderOpen className="w-6 h-6 text-white" />
              </div>
              <div className="flex items-center gap-1 px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-md">
                <Lock className="w-3 h-3 text-gray-600 dark:text-gray-400" />
                <span className="text-xs text-gray-600 dark:text-gray-400 font-medium">Fixed</span>
              </div>
            </div>

            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              {category.name}
            </h3>

            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-3">
              <FileText className="w-4 h-4" />
              <span className="font-medium">{category.postCount} posts</span>
            </div>

            <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="text-gray-500 dark:text-gray-500">Slug:</span>
                <span className="font-mono text-gray-700 dark:text-gray-300">{category.slug}</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-gray-500 dark:text-gray-500">Created:</span>
                <span className="text-gray-700 dark:text-gray-300">
                  {format(new Date(category.createdAt), 'MMM dd, yyyy')}
                </span>
              </div>
            </div>

            {/* Website Link */}
            <div className="mt-4">
              <a
                href={`/${category.slug}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center px-3 py-2 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-lg text-sm font-medium hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors"
              >
                View on Website →
              </a>
            </div>
          </motion.div>
        ))}
      </div>

    </div>
  );
}


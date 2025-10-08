'use client';

import { Event, Post, Category, MediaFile } from '../types';

/**
 * Sample data for demo purposes
 * Run initializeSampleData() once to populate the dashboard with example content
 */

export const sampleEvents: Event[] = [
  {
    id: '1',
    title: 'Annual Science Exhibition 2025',
    date: '2025-11-15',
    time: '09:00',
    venue: 'Main Auditorium',
    description: 'Students will showcase their innovative science projects and experiments. Over 50 projects from different grades will be on display.',
    image: '/images/events/science-exhibition.jpg',
    tags: ['academic', 'science', 'exhibition'],
    status: 'upcoming',
    createdAt: '2025-01-15T10:00:00.000Z',
  },
  {
    id: '2',
    title: 'Sports Day 2025',
    date: '2025-12-10',
    time: '08:00',
    venue: 'School Sports Ground',
    description: 'Annual sports day featuring track and field events, relay races, and various athletic competitions for all age groups.',
    image: '/images/events/sports-day.jpg',
    tags: ['sports', 'annual', 'competition'],
    status: 'upcoming',
    createdAt: '2025-02-01T10:00:00.000Z',
  },
  {
    id: '3',
    title: 'Cultural Festival',
    date: '2025-01-20',
    time: '16:00',
    venue: 'Cultural Hall',
    description: 'A celebration of diverse cultures through music, dance, and art performances by talented students.',
    image: '/images/events/cultural-festival.jpg',
    tags: ['cultural', 'music', 'dance'],
    status: 'past',
    createdAt: '2024-12-01T10:00:00.000Z',
  },
];

export const samplePosts: Post[] = [
  {
    id: '1',
    title: 'Welcome to Academic Year 2025-26',
    category: 'School News',
    thumbnail: '/images/posts/welcome.jpg',
    shortDescription: 'We are excited to welcome all students and parents to the new academic year with enhanced facilities and programs.',
    content: '<h2>Welcome to JKKN College</h2><p>We are thrilled to begin this new academic year with renewed energy and commitment to excellence in education. This year brings exciting new programs, upgraded facilities, and enhanced learning opportunities for all our students.</p><h3>What\'s New This Year</h3><ul><li>State-of-the-art computer labs</li><li>Expanded library collection</li><li>New sports facilities</li><li>Enhanced online learning platform</li></ul><p>We look forward to an amazing year of growth and achievement together!</p>',
    publishedDate: '2025-06-01T10:00:00.000Z',
    author: 'Principal',
    status: 'published',
    createdAt: '2025-05-15T10:00:00.000Z',
  },
  {
    id: '2',
    title: 'Students Excel in State-Level Science Competition',
    category: 'Latest News',
    thumbnail: '/images/posts/science-competition.jpg',
    shortDescription: 'Our students secured first place in the state-level science competition, showcasing exceptional talent and dedication.',
    content: '<h2>Proud Moment for JKKN</h2><p>We are incredibly proud to announce that our students have won first place in the State-Level Science Competition held last week. Their innovative project on renewable energy impressed the judges and demonstrated exceptional scientific thinking.</p><h3>The Winning Team</h3><p>The team consisted of five brilliant students from Grade 11 who worked tirelessly for three months on their project. Their dedication, creativity, and scientific approach were remarkable.</p><p>Congratulations to the entire team and their mentors!</p>',
    publishedDate: '2025-03-15T10:00:00.000Z',
    author: 'Academic Coordinator',
    status: 'published',
    createdAt: '2025-03-14T10:00:00.000Z',
  },
  {
    id: '3',
    title: 'Annual Day Celebration 2024',
    category: 'Past Events',
    thumbnail: '/images/posts/basketball-court.jpg',
    shortDescription: 'Our college celebrated Annual Day 2024 with great enthusiasm, featuring cultural performances and awards ceremony.',
    content: '<h2>Memorable Annual Day Celebration</h2><p>The Annual Day 2024 was a grand success with students showcasing their talents through various cultural performances, dance, music, and drama. The event celebrated the achievements of our students throughout the year.</p><h3>Highlights</h3><ul><li>Award ceremony for outstanding students</li><li>Cultural performances by all grades</li><li>Special performances by faculty</li><li>Guest speaker address</li></ul><p>We thank all the participants and organizers for making this event memorable!</p>',
    publishedDate: '2025-02-10T10:00:00.000Z',
    author: 'Event Coordinator',
    status: 'published',
    createdAt: '2025-02-08T10:00:00.000Z',
  },
];

export const sampleCategories: Category[] = [
  {
    id: '1',
    name: 'School News',
    slug: 'school-news',
    postCount: 1,
    createdAt: '2025-01-01T10:00:00.000Z',
  },
  {
    id: '2',
    name: 'Past Events',
    slug: 'past-events',
    postCount: 1,
    createdAt: '2025-01-01T10:00:00.000Z',
  },
  {
    id: '3',
    name: 'Latest News',
    slug: 'latest-news',
    postCount: 1,
    createdAt: '2025-01-01T10:00:00.000Z',
  },
];

/**
 * Initialize sample data in localStorage
 * Call this function once to populate the dashboard with demo content
 */
export const initializeSampleData = (): void => {
  if (typeof window === 'undefined') return;

  // Check if data already exists
  const hasEvents = localStorage.getItem('admin_events');
  const hasPosts = localStorage.getItem('admin_posts');
  const hasCategories = localStorage.getItem('admin_categories');

  if (!hasEvents) {
    localStorage.setItem('admin_events', JSON.stringify(sampleEvents));
    console.log('✅ Sample events initialized');
  }

  if (!hasPosts) {
    localStorage.setItem('admin_posts', JSON.stringify(samplePosts));
    console.log('✅ Sample posts initialized');
  }

  if (!hasCategories) {
    localStorage.setItem('admin_categories', JSON.stringify(sampleCategories));
    console.log('✅ Sample categories initialized');
  }
};

/**
 * Clear all data from localStorage
 */
export const clearAllData = (): void => {
  if (typeof window === 'undefined') return;

  localStorage.removeItem('admin_events');
  localStorage.removeItem('admin_posts');
  localStorage.removeItem('admin_categories');
  localStorage.removeItem('admin_media');
  console.log('🗑️ All admin data cleared');
};

/**
 * Reset data - clear and reinitialize with sample data
 */
export const resetToSampleData = (): void => {
  clearAllData();
  initializeSampleData();
  console.log('🔄 Data reset to sample data');
};


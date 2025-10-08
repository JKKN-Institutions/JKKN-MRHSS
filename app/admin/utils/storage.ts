'use client';

import { Event, Post, Category, MediaFile } from '../types';

// Storage keys
const EVENTS_KEY = 'admin_events';
const POSTS_KEY = 'admin_posts';
const CATEGORIES_KEY = 'admin_categories';
const MEDIA_KEY = 'admin_media';

// Generic storage functions
export const getFromStorage = <T>(key: string, defaultValue: T): T => {
  if (typeof window === 'undefined') return defaultValue;
  const item = localStorage.getItem(key);
  return item ? JSON.parse(item) : defaultValue;
};

export const saveToStorage = <T>(key: string, value: T): void => {
  if (typeof window === 'undefined') return;
  localStorage.setItem(key, JSON.stringify(value));
};

// Events
export const getEvents = (): Event[] => getFromStorage(EVENTS_KEY, []);
export const saveEvents = (events: Event[]): void => saveToStorage(EVENTS_KEY, events);

// Posts
export const getPosts = (): Post[] => getFromStorage(POSTS_KEY, []);
export const savePosts = (posts: Post[]): void => saveToStorage(POSTS_KEY, posts);

// Categories
export const getCategories = (): Category[] => {
  const categories = getFromStorage(CATEGORIES_KEY, [] as Category[]);
  if (categories.length === 0) {
    // Initialize with default categories matching website sections
    const defaultCategories: Category[] = [
      { id: '1', name: 'School News', slug: 'school-news', postCount: 0, createdAt: new Date().toISOString() },
      { id: '2', name: 'Past Events', slug: 'past-events', postCount: 0, createdAt: new Date().toISOString() },
      { id: '3', name: 'Latest News', slug: 'latest-news', postCount: 0, createdAt: new Date().toISOString() },
    ];
    saveCategories(defaultCategories);
    return defaultCategories;
  }
  return categories;
};
export const saveCategories = (categories: Category[]): void => saveToStorage(CATEGORIES_KEY, categories);

// Media
export const getMedia = (): MediaFile[] => getFromStorage(MEDIA_KEY, []);
export const saveMedia = (media: MediaFile[]): void => saveToStorage(MEDIA_KEY, media);

// Update category post counts
export const updateCategoryPostCounts = (): void => {
  const categories = getCategories();
  const posts = getPosts();
  
  const updatedCategories = categories.map(category => ({
    ...category,
    postCount: posts.filter(post => post.category === category.name).length,
  }));
  
  saveCategories(updatedCategories);
};


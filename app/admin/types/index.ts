export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  venue: string;
  description: string;
  image: string;
  tags: string[];
  status: 'upcoming' | 'past';
  createdAt: string;
}

export interface Post {
  id: string;
  title: string;
  category: string;
  thumbnail: string;
  shortDescription: string;
  content: string;
  publishedDate: string;
  author: string;
  status: 'published' | 'draft';
  createdAt: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  postCount: number;
  createdAt: string;
}

export interface MediaFile {
  id: string;
  name: string;
  url: string;
  size: number;
  type: string;
  uploadedAt: string;
}

export interface User {
  email: string;
  name: string;
  role: string;
  avatar?: string;
}


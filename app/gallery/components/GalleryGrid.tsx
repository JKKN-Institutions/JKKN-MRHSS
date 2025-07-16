'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Masonry from 'react-masonry-css';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: string;
}

// Category-based Scrolling Images Component
const CategoryScrollingSections = () => {
  const categories = [
    { name: 'Campus Life', color: 'from-blue-50 to-cyan-50' },
    { name: 'Academic Activities', color: 'from-green-50 to-emerald-50' },
    { name: 'Sports & Recreation', color: 'from-orange-50 to-red-50' },
    { name: 'Cultural Events', color: 'from-purple-50 to-pink-50' },
    { name: 'Infrastructure', color: 'from-gray-50 to-slate-50' },
    { name: 'Student Life', color: 'from-yellow-50 to-amber-50' }
  ];

  // Generate images for each category
  const getCategoryImages = (categoryName: string) => {
    const images = [];
    const categoryIndex = categories.findIndex(cat => cat.name === categoryName);
    
    // Get images that belong to this category (every 6th image starting from categoryIndex + 1)
    for (let i = categoryIndex + 1; i <= 83; i += 6) {
      if (i <= 83) {
        images.push({
          id: i,
          src: `/images/photos/${i}.png`,
          alt: `${categoryName} - Photo ${i}`,
        });
      }
    }
    
    // If we don't have enough images, duplicate them to ensure smooth scrolling
    while (images.length < 8) {
      images.push(...images.slice(0, Math.min(images.length, 8 - images.length)));
    }
    
    return images;
  };

  return (
    <div className="space-y-12 mb-16">
      {categories.map((category, index) => {
        const categoryImages = getCategoryImages(category.name);
        
        return (
          <div key={category.name} className="relative">
            {/* Category Heading */}
            <div className="text-center mb-6">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">
                {category.name}
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
            </div>
            
            {/* Scrolling Images for this Category */}
            <div className={`relative overflow-hidden bg-gradient-to-r ${category.color} py-8 rounded-2xl`}>
              <div className="absolute inset-0 bg-white/30"></div>
              <div className="relative">
                <div className={`flex space-x-6 ${index % 2 === 0 ? 'animate-scroll-loop' : 'animate-scroll-reverse-loop'}`}>
                  {/* First set of images */}
                  {categoryImages.map((image, imgIndex) => (
                    <div
                      key={`first-${image.id}-${imgIndex}`}
                      className="flex-shrink-0 w-72 h-52 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                    >
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={288}
                        height={208}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  ))}
                  {/* Second set for seamless loop */}
                  {categoryImages.map((image, imgIndex) => (
                    <div
                      key={`second-${image.id}-${imgIndex}`}
                      className="flex-shrink-0 w-72 h-52 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                    >
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={288}
                        height={208}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  ))}
                  {/* Third set for extra smooth loop */}
                  {categoryImages.map((image, imgIndex) => (
                    <div
                      key={`third-${image.id}-${imgIndex}`}
                      className="flex-shrink-0 w-72 h-52 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                    >
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={288}
                        height={208}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

// Generate gallery images from the photos folder (1.png to 83.png)
const generateGalleryImages = (): GalleryImage[] => {
  const images: GalleryImage[] = [];
  const categories = ['Campus Life', 'Academic Activities', 'Sports & Recreation', 'Cultural Events', 'Infrastructure', 'Student Life'];
  
  for (let i = 1; i <= 83; i++) {
    // Assign categories based on image number for variety
    const categoryIndex = (i - 1) % categories.length;
    const category = categories[categoryIndex];
    
    // Generate descriptive alt text based on category and number
    let altText = '';
    switch (category) {
      case 'Campus Life':
        altText = `Campus life and daily activities - Photo ${i}`;
        break;
      case 'Academic Activities':
        altText = `Academic activities and classroom learning - Photo ${i}`;
        break;
      case 'Sports & Recreation':
        altText = `Sports and recreational activities - Photo ${i}`;
        break;
      case 'Cultural Events':
        altText = `Cultural events and celebrations - Photo ${i}`;
        break;
      case 'Infrastructure':
        altText = `School infrastructure and facilities - Photo ${i}`;
        break;
      case 'Student Life':
        altText = `Student life and interactions - Photo ${i}`;
        break;
      default:
        altText = `School activity - Photo ${i}`;
    }
    
    images.push({
      id: i,
      src: `/images/photos/${i}.png`,
      alt: altText,
      category: category
    });
  }
  
  return images;
};

const galleryImages: GalleryImage[] = generateGalleryImages();

const categories = ['All', 'Campus Life', 'Academic Activities', 'Sports & Recreation', 'Cultural Events', 'Infrastructure', 'Student Life'];

export default function GalleryGrid() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay for fade-in effect
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  const filteredImages = selectedCategory === 'All'
    ? galleryImages
    : galleryImages.filter(image => image.category === selectedCategory);

  const breakpointColumns = {
    default: 4,
    1280: 3,
    1024: 2,
    640: 1
  };

  return (
    <div className="space-y-8">
      {/* Category-based Scrolling Sections */}
      <CategoryScrollingSections />

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full transform scale-95 opacity-0 animate-modal-in">
            <button
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="relative rounded-lg overflow-hidden">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                width={1024}
                height={768}
                className="object-contain max-w-full max-h-[80vh]"
                sizes="(max-width: 1024px) 100vw, 1024px"
              />
            </div>
            <div className="bg-white/10 backdrop-blur-md p-6 mt-4 rounded-lg text-white">
              <h3 className="text-xl font-semibold">{selectedImage.alt}</h3>
              <p className="text-gray-300 mt-2">{selectedImage.category}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 
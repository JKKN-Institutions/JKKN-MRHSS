'use client';

import { ReactNode } from 'react';

interface FlipCardProps {
  frontContent: ReactNode;
  backContent: ReactNode;
}

export default function FlipCard({ frontContent, backContent }: FlipCardProps) {
  return (
    <div className="perspective-1000 w-full h-80 cursor-pointer group">
      <div className="relative w-full h-full transform-style-3d transition-transform duration-700 group-hover:rotate-y-180">
        {/* Front Face */}
        <div className="absolute inset-0 w-full h-full backface-hidden">
          {frontContent}
        </div>
        
        {/* Back Face */}
        <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180">
          {backContent}
        </div>
      </div>
    </div>
  );
} 
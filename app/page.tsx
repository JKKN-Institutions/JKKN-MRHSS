'use client';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import EventSection from './components/EventSection';

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

const GenericSkeleton = () => (
  <div className="w-full py-16 animate-pulse">
    <div className="max-w-7xl mx-auto px-4">
      <div className="h-8 w-64 bg-gray-300 rounded mx-auto mb-8"></div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-64 bg-gray-300 rounded-lg"></div>
        ))}
      </div>
    </div>
  </div>
);

// Error fallback component
const ComponentErrorFallback = ({ error }: { error?: Error }) => (
  <div className="w-full py-8 text-center">
    <p className="text-gray-500">Unable to load component. Please refresh the page.</p>
    {process.env.NODE_ENV === 'development' && error && (
      <details className="mt-4 text-sm text-red-600">
        <summary>Error Details</summary>
        <pre className="mt-2 text-left">{error.message}</pre>
      </details>
    )}
  </div>
);

// Dynamically import components with better error handling
const Header = dynamic(() => import('./components/Header').catch(err => {
  console.error('Failed to load Header:', err);
  return { default: () => <ComponentErrorFallback error={err} /> };
}), {
  ssr: false,
  loading: () => <HeaderSkeleton />
});

const HeroSection = dynamic(() => import('./components/HeroSection').catch(err => {
  console.error('Failed to load HeroSection:', err);
  return { default: () => <ComponentErrorFallback error={err} /> };
}), { 
  ssr: false,
  loading: () => <GenericSkeleton />
});

// const EducationStorySection = dynamic(() => import('./components/EducationStorySection').catch(err => {
//   console.error('Failed to load EducationStorySection:', err);
//   return { default: () => <ComponentErrorFallback error={err} /> };
// }), { 
//   ssr: false,
//   loading: () => <GenericSkeleton />
// });

// const ModernCardsSection = dynamic(() => import('./components/ModernCards').catch(err => {
//   console.error('Failed to load ModernCardsSection:', err);
//   return { default: () => <ComponentErrorFallback error={err} /> };
// }), { 
//   ssr: false,
//   loading: () => <GenericSkeleton />
// });

const AboutSection = dynamic(() => import('./components/AboutSection').catch(err => {
  console.error('Failed to load AboutSection:', err);
  return { default: () => <ComponentErrorFallback error={err} /> };
}), { 
  ssr: false,
  loading: () => <GenericSkeleton />
});

const AcademicsSection = dynamic(() => import('./components/AcademicsSection').catch(err => {
  console.error('Failed to load AcademicsSection:', err);
  return { default: () => <ComponentErrorFallback error={err} /> };
}), { 
  ssr: false,
  loading: () => <GenericSkeleton />
});

const EventsSection = dynamic(() => import('./components/EventSection').catch(err => {
  console.error('Failed to load EventsSection:', err);
  return { default: () => <ComponentErrorFallback error={err} /> };
}), { 
  ssr: false,
  loading: () => <GenericSkeleton />
});

const Footer = dynamic(() => import('./components/Footer').catch(err => {
  console.error('Failed to load Footer:', err);
  return { default: () => <ComponentErrorFallback error={err} /> };
}), {
  ssr: false,
  loading: () => <FooterSkeleton />
});

export default function Home() {
  return (
    <div className="min-h-screen">
      <Suspense fallback={<HeaderSkeleton />}>
        <Header />
      </Suspense>
      <Suspense fallback={<GenericSkeleton />}>
        <HeroSection />
      </Suspense>
      {/* <Suspense fallback={<GenericSkeleton />}>
        <EducationStorySection />
      </Suspense> */}
      <Suspense fallback={<GenericSkeleton />}>
        <AboutSection />
      </Suspense>
      <Suspense fallback={<GenericSkeleton />}>
        <EventSection />
      </Suspense>
      <Suspense fallback={<GenericSkeleton />}>
        <AcademicsSection />
      </Suspense>
      <Suspense fallback={<FooterSkeleton />}>
        <Footer />
      </Suspense>
    </div>
  );
}

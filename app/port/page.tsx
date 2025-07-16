'use client';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import FlipCard from '../components/FlipCard';
import '../styles/flip-card.css';
import Image from 'next/image';

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

// Dynamically import components
const Header = dynamic(() => import('../components/Header').catch(err => {
  console.error('Failed to load Header:', err);
  return { default: () => <ComponentErrorFallback error={err} /> };
}), {
  ssr: false,
  loading: () => <HeaderSkeleton />
});

const Footer = dynamic(() => import('../components/Footer').catch(err => {
  console.error('Failed to load Footer:', err);
  return { default: () => <ComponentErrorFallback error={err} /> };
}), {
  ssr: false,
  loading: () => <FooterSkeleton />
});

export default function PortPage() {
  return (
    <div className="min-h-screen">
      <Suspense fallback={<HeaderSkeleton />}>
        <Header />
      </Suspense>
      
      <main className="pt-20">
        {/* Hero Section */}
        <div className="relative w-full h-[500px] bg-gray-900">
          <div className="absolute inset-0">
            <Image
              src="/images/transport/transport.webp"
              alt="School Bus"
              fill
              className="object-cover opacity-40"
              priority
            />
          </div>
          <div className="relative h-full max-w-7xl mx-auto px-4 flex flex-col items-center justify-center text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              School Transport Services
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mb-8">
              Safe, reliable, and comfortable transportation for our students. 
              Our dedicated fleet ensures timely pick-up and drop-off services.
            </p>
            <div className="flex gap-4">
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg">
                <p className="text-white font-medium">7 Buses</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg">
                <p className="text-white font-medium">Multiple Routes</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg">
                <p className="text-white font-medium">GPS Tracking</p>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-16">Why Choose Our Transport Service?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Safety Feature */}
              <div className="group relative bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="absolute inset-0 bg-gray-900 rounded-xl opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
                <div className="relative">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Safety First</h3>
                  <p className="text-gray-600">GPS tracking systems, speed governors, and professionally trained drivers ensure the highest standards of safety for your children.</p>
                </div>
              </div>

              {/* Coverage Feature */}
              <div className="group relative bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="absolute inset-0 bg-gray-900 rounded-xl opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
                <div className="relative">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Wide Coverage</h3>
                  <p className="text-gray-600">Multiple routes and designated stops across the city for convenient pick-up and drop-off points.</p>
                </div>
              </div>

              {/* Comfort Feature */}
              <div className="group relative bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="absolute inset-0 bg-gray-900 rounded-xl opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
                <div className="relative">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Comfort & Quality</h3>
                  <p className="text-gray-600">Well-maintained, modern buses providing a comfortable and pleasant journey for all students.</p>
                </div>
              </div>

              {/* Schedule Feature */}
              <div className="group relative bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="absolute inset-0 bg-gray-900 rounded-xl opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
                <div className="relative">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Flexible Schedule</h3>
                  <p className="text-gray-600">Timely and flexible scheduling to ensure punctuality and accommodate special requests when needed.</p>
                </div>
              </div>

              {/* Peace of Mind Feature */}
              <div className="group relative bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="absolute inset-0 bg-gray-900 rounded-xl opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
                <div className="relative">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Parent Peace of Mind</h3>
                  <p className="text-gray-600">Rest assured knowing your children are in safe hands during their daily commute to and from school.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold text-center mb-8">Our Bus Fleet</h2>
          <div className="prose max-w-none">
            
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              <FlipCard
                frontContent={
                  <div className="relative w-full h-full">
                    <Image
                      src="/images/transport/transport.webp"
                      alt="School Bus"
                      fill
                      className="object-cover rounded-lg"
                      priority
                    />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-lg">
                      <span className="text-xl font-bold text-gray-800">JKKN MHSS-01</span>
                    </div>
                  </div>
                }
                backContent={
                  <div className="flex flex-col h-full p-4 bg-[#002309] text-white rounded-lg">
                    <div className="mb-6">
                      <h4 className="text-xl font-semibold mb-3">Bus Incharge</h4>
                      <div className="space-y-2">
                        <p>
                          <span className="font-medium">Name:</span> Mr. Rajesh Kumar
                        </p>
                        <p>
                          <span className="font-medium">Contact:</span> +91 98765 43210
                        </p>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-3">Route</h4>
                      <div className="space-y-2">
                        <p>
                          <span className="font-medium">Morning:</span> 7:00 AM - 8:30 AM
                        </p>
                        <p>
                          <span className="font-medium">Evening:</span> 3:30 PM - 5:00 PM
                        </p>
                        <p>
                          <span className="font-medium">Areas:</span> bhavani → komarapalayam → jkkn matriculation higher secondary school
                        </p>
                      </div>
                    </div>
                  </div>
                }
              />
              
              <FlipCard
                frontContent={
                  <div className="relative w-full h-full">
                    <Image
                      src="/images/transport/transport.webp"
                      alt="School Bus"
                      fill
                      className="object-cover rounded-lg"
                      priority
                    />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-lg">
                      <span className="text-xl font-bold text-gray-800">JKKN MHSS-02</span>
                    </div>
                  </div>
                }
                backContent={
                  <div className="flex flex-col h-full p-4 bg-[#002309] text-white rounded-lg">
                    <div className="mb-6">
                      <h4 className="text-xl font-semibold mb-3">Bus Incharge</h4>
                      <div className="space-y-2">
                        <p>
                          <span className="font-medium">Name:</span> Mrs. Lakshmi Devi
                        </p>
                        <p>
                          <span className="font-medium">Contact:</span> +91 98765 43211
                        </p>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-3">Route</h4>
                      <div className="space-y-2">
                        <p>
                          <span className="font-medium">Morning:</span> 7:15 AM - 8:45 AM
                        </p>
                        <p>
                          <span className="font-medium">Evening:</span> 3:45 PM - 5:15 PM
                        </p>
                        <p>
                          <span className="font-medium">Areas:</span> bhavani → komarapalayam → jkkn matriculation higher secondary school
                        </p>
                      </div>
                    </div>
                  </div>
                }
              />
              
              <FlipCard
                frontContent={
                  <div className="relative w-full h-full">
                    <Image
                      src="/images/transport/transport.webp"
                      alt="School Bus"
                      fill
                      className="object-cover rounded-lg"
                      priority
                    />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-lg">
                      <span className="text-xl font-bold text-gray-800">JKKN MHSS-03</span>
                    </div>
                  </div>
                }
                backContent={
                  <div className="flex flex-col h-full p-4 bg-[#002309] text-white rounded-lg">
                    <div className="mb-6">
                      <h4 className="text-xl font-semibold mb-3">Bus Incharge</h4>
                      <div className="space-y-2">
                        <p>
                          <span className="font-medium">Name:</span> Mr. Suresh Babu
                        </p>
                        <p>
                          <span className="font-medium">Contact:</span> +91 98765 43212
                        </p>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-3">Route</h4>
                      <div className="space-y-2">
                        <p>
                          <span className="font-medium">Morning:</span> 7:30 AM - 9:00 AM
                        </p>
                        <p>
                          <span className="font-medium">Evening:</span> 4:00 PM - 5:30 PM
                        </p>
                        <p>
                          <span className="font-medium">Areas:</span> bhavani → komarapalayam → jkkn matriculation higher secondary school
                        </p>
                      </div>
                    </div>
                  </div>
                }
              />
            </div>
          </div>
        </div>
      </main>

      <Suspense fallback={<FooterSkeleton />}>
        <Footer />
      </Suspense>
    </div>
  );
} 
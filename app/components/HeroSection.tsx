"use client";

import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Blurred Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="/videos/background.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      {/* Overlay for extra blur/darkness */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Glassmorphism Card */}
      <div className="relative z-20 flex flex-col items-center justify-center w-full px-4">
        <div className="mx-auto w-full max-w-xl mt-12 rounded-2xl bg-white/20 backdrop-blur-lg shadow-xl py-12 px-6 flex flex-col items-center">
          <h1 className="text-2xl md:text-3xl font-extrabold text-white text-center mb-4 tracking-wide">
            JKKN<span className="inline-block mx-2" />MATRICULATION HIGHER SECONDARY SCHOOL
          </h1>
          {/* <p className="text-lg md:text-xl text-white/90 text-center mb-8">
            Join us in a journey of innovation, inspiration, and impact.
          </p> */}
          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
            <Link href="/admissions" className="w-full sm:w-auto">
              <button
                className="w-full sm:w-auto px-5 py-2 rounded-full font-semibold text-white text-base bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shadow-md hover:from-blue-600 hover:to-pink-600 transition-all cursor-pointer"
              >
                Admission Open 2025-2026
              </button>
            </Link>
            <Link href="/contact" className="w-full sm:w-auto">
              <button
                className="w-full sm:w-auto px-5 py-2 rounded-full font-semibold text-white text-base bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shadow-md hover:from-blue-600 hover:to-pink-600 transition-all cursor-pointer"
              >
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
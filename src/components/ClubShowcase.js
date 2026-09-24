'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import Image from 'next/image';

const ClubShowcase = () => {
  const { isDarkMode } = useTheme();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Gallery images
  const galleryImages = [
    {
      src: "https://sficcu.vercel.app/assets/gallery1-1b0UnlhH.jpg",
      alt: "Club Innovation Workshop"
    },
    {
      src: "https://sficcu.vercel.app/assets/gallery2-BgfdLor_.jpg",
      alt: "Team Collaboration Session"
    },
    {
      src: "https://sficcu.vercel.app/assets/gallery3-D88p1lDU.jpg",
      alt: "Technology Presentation"
    },
    {
      src: "https://sficcu.vercel.app/assets/gallery4-DtrMrnVd.jpg",
      alt: "Innovation Showcase"
    },
    {
      src: "https://sficcu.vercel.app/assets/gallery5-DmnOxHaz.png",
      alt: "Club Meeting"
    }
  ];

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className={`py-20 transition-colors duration-500 ${isDarkMode ? 'bg-gradient-to-b from-black via-gray-900 to-black' : 'bg-gradient-to-b from-gray-50 via-white to-gray-50'}`}>
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-6xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Sci-Fi Innovation 
            <span className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"> Club</span>
          </h2>
          <p className="text-xl md:text-2xl font-bold max-w-4xl mx-auto mb-4 leading-relaxed bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            &ldquo;Innovation at Heart, Excellence in Action&rdquo;
          </p>
          <p className={`text-lg md:text-xl max-w-4xl mx-auto leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Pioneering the future through innovation and technology
            <br />
            Where imagination meets implementation
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Photo Gallery Carousel */}
          <div className={`group relative overflow-hidden rounded-2xl transition-all duration-700 transform hover:scale-105 hover:-translate-y-2
            ${isDarkMode 
              ? 'bg-gradient-to-br from-gray-800/90 via-gray-900/90 to-black/90 shadow-2xl hover:shadow-purple-500/25' 
              : 'bg-gradient-to-br from-white via-blue-50/50 to-purple-50/30 shadow-2xl hover:shadow-blue-500/25'
            }`}
            style={{
              background: isDarkMode 
                ? 'linear-gradient(135deg, rgba(31, 41, 55, 0.9) 0%, rgba(17, 24, 39, 0.9) 50%, rgba(0, 0, 0, 0.9) 100%)'
                : 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(239, 246, 255, 0.8) 50%, rgba(243, 244, 246, 0.7) 100%)',
              backdropFilter: 'blur(20px)',
              border: `2px solid ${isDarkMode ? 'rgba(75, 85, 99, 0.3)' : 'rgba(209, 213, 219, 0.3)'}`,
            }}
          >
            <div className="p-8">
              <h3 className={`text-2xl font-bold mb-6 text-center ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Our Journey in Pictures
              </h3>
              <div className="relative max-w-md mx-auto">
                {/* Main carousel image */}
                <div className="aspect-square rounded-xl overflow-hidden mb-6 shadow-xl">
                  <Image 
                    src={galleryImages[currentImageIndex].src}
                    alt={galleryImages[currentImageIndex].alt}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover transition-all duration-500 hover:scale-110"
                  />
                </div>
                
                {/* Navigation buttons */}
                <button
                  onClick={prevImage}
                  className={`absolute left-2 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${isDarkMode ? 'bg-gray-800/90 hover:bg-gray-700 text-white' : 'bg-white/90 hover:bg-white text-gray-900'} shadow-xl hover:shadow-2xl hover:scale-110`}
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextImage}
                  className={`absolute right-2 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${isDarkMode ? 'bg-gray-800/90 hover:bg-gray-700 text-white' : 'bg-white/90 hover:bg-white text-gray-900'} shadow-xl hover:shadow-2xl hover:scale-110`}
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
                
                {/* Indicators */}
                <div className="flex justify-center gap-3 mt-4">
                  {galleryImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`h-3 rounded-full transition-all duration-300 ${
                        index === currentImageIndex 
                          ? 'bg-gradient-to-r from-green-400 to-blue-500 w-8' 
                          : isDarkMode ? 'bg-gray-600 hover:bg-gray-500 w-3' : 'bg-gray-300 hover:bg-gray-400 w-3'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* YouTube Video */}
          <div className={`group relative overflow-hidden rounded-2xl transition-all duration-700 transform hover:scale-105 hover:-translate-y-2
            ${isDarkMode 
              ? 'bg-gradient-to-br from-gray-800/90 via-gray-900/90 to-black/90 shadow-2xl hover:shadow-red-500/25' 
              : 'bg-gradient-to-br from-white via-red-50/50 to-pink-50/30 shadow-2xl hover:shadow-red-500/25'
            }`}
            style={{
              background: isDarkMode 
                ? 'linear-gradient(135deg, rgba(31, 41, 55, 0.9) 0%, rgba(17, 24, 39, 0.9) 50%, rgba(0, 0, 0, 0.9) 100%)'
                : 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(254, 242, 242, 0.8) 50%, rgba(249, 250, 251, 0.7) 100%)',
              backdropFilter: 'blur(20px)',
              border: `2px solid ${isDarkMode ? 'rgba(75, 85, 99, 0.3)' : 'rgba(209, 213, 219, 0.3)'}`,
            }}
          >
            <div className="p-8">
              <h3 className={`text-2xl font-bold mb-6 text-center ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Watch Our Story
              </h3>
              <div className="aspect-video rounded-xl overflow-hidden shadow-xl">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/wXIax8Zqcm8"
                  title="Sci-Fi Innovation Club Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action Buttons */}
        <div className="text-center">
          <h3 className={`text-3xl md:text-4xl font-bold mb-8 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Ready to Innovate?
          </h3>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="https://cuintranet.in/clubs"
              target="_blank"
              rel="noopener noreferrer"
              className={`relative inline-flex items-center gap-3 px-10 py-5 rounded-full font-bold text-xl transition-all duration-500 transform hover:scale-110 hover:-translate-y-1 group/btn
                ${isDarkMode
                  ? 'bg-gradient-to-r from-green-600 via-green-700 to-green-800 hover:from-green-500 hover:via-green-600 hover:to-green-700 text-white shadow-xl hover:shadow-green-500/40'
                  : 'bg-gradient-to-r from-green-600 via-blue-600 to-green-700 hover:from-green-700 hover:via-blue-700 hover:to-green-800 text-white shadow-xl hover:shadow-green-500/40'
                }`}
              style={{
                boxShadow: isDarkMode 
                  ? '0 10px 25px -5px rgba(34, 197, 94, 0.4), 0 10px 10px -5px rgba(34, 197, 94, 0.2)'
                  : '0 10px 25px -5px rgba(34, 197, 94, 0.4), 0 10px 10px -5px rgba(37, 99, 235, 0.3)'
              }}
            >
              <div className="absolute inset-0 rounded-full opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-white/20 to-white/10"></div>
              <span className="relative z-10">Apply Now</span>
              <div className="absolute inset-0 rounded-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000"></div>
              </div>
            </a>
            
            <a
              href="https://chat.whatsapp.com/EsqChHUok02G5MT1UknOND?s=sw&p=a&mlu=4&ilr=4"
              target="_blank"
              rel="noopener noreferrer"
              className={`relative inline-flex items-center gap-3 px-10 py-5 rounded-full font-bold text-xl border-2 transition-all duration-500 transform hover:scale-110 hover:-translate-y-1 group/btn
                ${isDarkMode 
                  ? 'border-gray-600 text-white hover:border-green-400 hover:bg-green-400/10 hover:text-green-400' 
                  : 'border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white hover:border-blue-700 shadow-lg hover:shadow-blue-500/25'
                }`}
            >
              <div className="absolute inset-0 rounded-full opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-white/10 to-white/5"></div>
              <span className="relative z-10">Join WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClubShowcase;

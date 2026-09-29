'use client';

import { useTheme } from '@/contexts/ThemeContext';

export default function CommunityPartners() {
  const { isDarkMode } = useTheme();

  const partners = [
    {
      id: 1,
      name: 'Computer Society',
      logo: '/cs.png',
      linkedinUrl: 'https://www.linkedin.com/'
    },
    {
      id: 2,
      name: 'Campus to Corporate',
      logo: '/c2c.png',
      linkedinUrl: 'https://www.linkedin.com/company/cu-campus-to-corporate/'
    }
  ];

  return (
    <section className={`py-20 transition-colors duration-500 ${isDarkMode ? 'bg-gradient-to-b from-gray-900 via-black to-gray-900' : 'bg-gradient-to-b from-white via-gray-50 to-white'}`}>
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-5xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Our Community 
            <span className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"> Partners</span>
          </h2>
          <p className={`text-lg md:text-xl max-w-3xl mx-auto leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Collaborating with industry leaders to support innovation and entrepreneurship
          </p>
        </div>

        {/* Partners Logo Grid */}
        <div className="flex justify-center items-center gap-16 md:gap-24">
          {partners.map((partner) => (
            <a
              key={partner.id}
              href={partner.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block transition-all duration-300 transform hover:scale-110"
              title={`Connect with ${partner.name} on LinkedIn`}
            >
              {/* Logo Image - Direct, No Container */}
              <img
                src={partner.logo}
                alt={`${partner.name} logo`}
                className="w-40 h-32 md:w-56 md:h-40 object-contain transition-all duration-300 group-hover:brightness-110 cursor-pointer"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'block';
                }}
              />
              
              {/* Fallback Text */}
              <div className={`hidden w-40 h-32 md:w-56 md:h-40 flex items-center justify-center text-xl font-bold text-center ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                {partner.name}
              </div>
              
              {/* Partner Name (appears on hover) */}
              <div className={`absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 
                ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} text-sm font-medium whitespace-nowrap`}>
                {partner.name}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

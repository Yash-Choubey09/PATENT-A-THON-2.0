// EXPERT MENTORS COMPONENT
// Section for displaying mentor profiles with LinkedIn links
// To add/edit mentors, update the 'mentors' array below

'use client';

import Image from 'next/image';
import { useTheme } from '../contexts/ThemeContext';

const LinkedInIcon = () => (
  // LinkedIn SVG icon for mentor profiles
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 24 24" className="inline-block align-middle text-blue-500 mr-1">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.026-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.838-1.563 3.036 0 3.6 2.001 3.6 4.601v5.595z"/>
  </svg>
);

const ExpertMentors = () => {
  const { isDarkMode } = useTheme(); // Use global theme context
  
  const mentors = [
    {
      name: "Dr. Sachin Ahuja",
      position: "ED Engineering",
      organization: "Chandigarh University",
      image: "/Sachin Sir.jpeg",
      linkedin: "https://www.linkedin.com/in/dr-sachin-ahuja-0885a235/"
    },
    {
      name: "Dr. Ruchika Gupta",
      position: "Directer- Research and Outreach",
      organization: "Chandigarh University",
      image: "/Ruchika M.jpeg",
      linkedin: "https://www.linkedin.com/in/ruchikagupta09/"
    },
    {
      name: "Dr. Puneet Kumar",
      position: "Directer-CSE 2nd Year",
      organization: "Chandigarh University",
      image: "/Puneet SIr.jpeg",
      linkedin: "https://www.linkedin.com/in/dr-puneet-kumar-2a84b531/"
    },
    {
      name: "Dr. Navneet Kaur",
      position: "AD- Research and Outreach",
      organization: "Chandigarh University",
      image: "/navneet_mam.png",
      linkedin: "#"
    },
    {
      name: "Er. Bhavneet Kaur",
      position: "Assistant Professor",
      organization: "Chandigarh University",
      image: "/Bhavneet.jpeg",
      linkedin: "https://www.linkedin.com/in/bhavneet-kaur-a8095153/"
    }
  ];

  return (
    <section id="mentors" className={`py-20 transition-colors duration-500 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
      <div className="max-w-full mx-auto px-8">
        {/* Section title and intro */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Expert Mentors</h2>
          <p className={`text-xl max-w-3xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Learn from industry experts and academic leaders
          </p>
        </div>
        
        {/* Mentors grid: each card shows image, name, position, organization, and LinkedIn link */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {mentors.map((mentor, index) => (
            <div
              key={index}
              className={`backdrop-blur-sm rounded-xl p-6 border-2 transition-all duration-500 text-center group relative overflow-hidden hover:shadow-lg hover:transform hover:scale-105 ${isDarkMode ? 'bg-gray-800/80 border-gray-700 hover:border-green-400 hover:bg-gray-800/90 hover:shadow-green-400/20' : 'bg-white/90 border-blue-200 hover:border-blue-400 hover:bg-white hover:shadow-blue-400/20'}`}
            >
              {/* Animated border effect */}
              <div className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse ${isDarkMode ? 'bg-gradient-to-r from-green-400/10 via-blue-500/10 to-purple-600/10' : 'bg-gradient-to-r from-blue-400/10 via-purple-500/10 to-indigo-600/10'}`}></div>
              
              <div className="relative z-10">
                <div className={`relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 transition-all duration-300 ${isDarkMode ? 'border-gray-600 group-hover:border-green-400' : 'border-blue-300 group-hover:border-blue-500'}`}>
                  <Image
                    src={mentor.image}
                    alt={`${mentor.name} portrait`}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className={`text-lg font-semibold mb-2 transition-colors duration-300 ${isDarkMode ? 'text-white group-hover:text-green-400' : 'text-gray-900 group-hover:text-blue-600'}`}>
                  {mentor.name}
                </h3>
                <p className={`font-medium mb-2 text-sm transition-colors duration-300 ${isDarkMode ? 'text-green-400' : 'text-blue-500 group-hover:text-blue-600'}`}>
                  {mentor.position}
                </p>
                <p className={`text-xs mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {mentor.organization}
                </p>
                <a
                  href={mentor.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center justify-center gap-1 font-medium text-sm mt-2 transition-colors duration-300 ${isDarkMode ? 'text-blue-400 hover:text-green-400' : 'text-blue-600 hover:text-blue-800'}`}
                >
                  <LinkedInIcon />
                  LinkedIn
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertMentors;
// End EXPERT MENTORS COMPONENT

// This section shows all the expert mentors.
// To add a mentor, just add to the 'mentors' array below.
// You can change their name, position, organization, image, or LinkedIn link.

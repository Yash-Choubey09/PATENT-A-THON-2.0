'use client';

import { Linkedin } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const coordinators = [
  {
    name: 'V Ishitha',
    role: 'Chair, CS & Secretary, SCIFI',
    image: '/Ishita.jpeg',
    linkedin: 'https://www.linkedin.com/in/v-ishitha-62918228a/',
  },
  {
    name: 'Yash',
    role: 'Chair, SSIT & Joint Secretary, SCIFI',
    image: '/yash.png',
    linkedin: '#',
  },
  {
    name: 'Pieyush',
    role: 'Vice Chair, CS',
    image: '/pieyush.jpg',
    linkedin: '#',
  },
  {
    name: 'Shreya',
    role: 'Vice Chair, SSIT & Student Coordinator',
    image: '/shreya.jpeg',
    linkedin: '#',
  },
];

export default function StudentCoordinators() {
  const { isDarkMode } = useTheme();

  return (
    <section
      id="student-coordinators"
      className={`py-20 md:py-24 transition-colors duration-300 ${
        isDarkMode ? 'bg-[#00172B]' : 'bg-slate-50'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p
            className={`text-xs md:text-sm font-black uppercase tracking-[0.2em] mb-4 ${
              isDarkMode ? 'text-[#00A3FF]' : 'text-[#0066FF]'
            }`}
          >
            Student Leadership
          </p>

          <h2
            className={`text-4xl md:text-5xl font-black tracking-tight ${
              isDarkMode ? 'text-white' : 'text-[#002B49]'
            }`}
          >
            Student Coordinators
          </h2>

          <p
            className={`mt-4 text-sm md:text-base leading-relaxed ${
              isDarkMode ? 'text-slate-400' : 'text-slate-600'
            }`}
          >
            Meet the student leaders helping bring Patent-A-Thon 2.0
            to life.
          </p>
        </div>

        {/* Coordinators Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {coordinators.map((person) => (
            <div
              key={person.name}
              className={`group rounded-2xl border overflow-hidden transition-all duration-300 hover:-translate-y-1 ${
                isDarkMode
                  ? 'bg-[#08233B] border-slate-700 hover:border-[#00A3FF]/60 hover:shadow-xl hover:shadow-[#0066FF]/10'
                  : 'bg-white border-slate-200 hover:border-[#0066FF]/40 hover:shadow-xl hover:shadow-slate-200'
              }`}
            >

              {/* Profile Image / Placeholder */}
              <div
                className={`relative h-64 flex items-center justify-center overflow-hidden ${
                  isDarkMode
                    ? 'bg-[#061E32]'
                    : 'bg-slate-100'
                }`}
              >
                {person.image ? (
                  <img
                    src={person.image}
                    alt={person.name}
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div
                    className={`w-24 h-24 rounded-full flex items-center justify-center text-3xl font-black border-2 ${
                      isDarkMode
                        ? 'bg-[#082A45] border-[#00A3FF]/40 text-[#00A3FF]'
                        : 'bg-white border-[#0066FF]/30 text-[#0066FF]'
                    }`}
                  >
                    {person.name.charAt(0)}
                  </div>
                )}

                {/* Bottom Gradient */}
                <div
                  className={`absolute inset-x-0 bottom-0 h-24 pointer-events-none ${
                    isDarkMode
                      ? 'bg-gradient-to-t from-[#08233B] to-transparent'
                      : 'bg-gradient-to-t from-white/80 to-transparent'
                  }`}
                />
              </div>

              {/* Content */}
              <div className="p-5 text-center">

                <h3
                  className={`text-lg font-extrabold transition-colors duration-300 ${
                    isDarkMode
                      ? 'text-white group-hover:text-[#00A3FF]'
                      : 'text-[#002B49] group-hover:text-[#0066FF]'
                  }`}
                >
                  {person.name}
                </h3>

                <p
                  className={`mt-2 text-sm font-semibold leading-relaxed min-h-[42px] ${
                    isDarkMode
                      ? 'text-slate-400'
                      : 'text-slate-600'
                  }`}
                >
                  {person.role}
                </p>

                {/* LinkedIn */}
                {person.linkedin !== '#' && (
                  <a
                    href={person.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${person.name} LinkedIn profile`}
                    className={`inline-flex items-center justify-center w-9 h-9 mt-4 rounded-lg transition-all duration-300 ${
                      isDarkMode
                        ? 'bg-[#0066FF]/15 text-[#00A3FF] hover:bg-[#00A3FF] hover:text-[#00172B]'
                        : 'bg-[#0066FF]/10 text-[#0066FF] hover:bg-[#0066FF] hover:text-white'
                    }`}
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                )}

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

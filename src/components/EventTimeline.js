'use client';

import { useState } from 'react';
import { CalendarDays } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const timeline = [
  {
    date: '12th Sep - 7th Oct',
    title: 'Registrations Open (Tentative)',
    desc: 'Kick-off your innovation journey! Register your team and join the movement.',
  },
  {
    date: '8th October',
    title: '1st Round: Draft to Craft',
    desc: 'Ideation & research phase, followed by step-by-step guidance on IPR form filling.',
  },
  {
    date: 'Post Round 1',
    title: 'Virtual Mentoring Sessions',
    desc: 'Interactive mentoring with industry experts to refine your ideas and IPR drafts.',
  },
  {
    date: '21st October',
    title: '2nd Round: Compile to Filed',
    desc: 'Present your ideas and submit finalized forms. Screened participants move to the final round.',
  },
  {
    date: '3rd November',
    title: 'Patent-a-thon 2.0 Finale',
    desc: 'The Grand Finale! Top finalists showcase their patented innovations before the jury.',
  },
];

export default function EventTimeline() {
  const [active, setActive] = useState(0);
  const { isDarkMode } = useTheme();

  return (
    <section
      id="timeline"
      className={`py-20 md:py-24 transition-colors duration-300 ${
        isDarkMode ? 'bg-[#061E32]' : 'bg-white'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Header */}
        <div className="text-center mb-16">
          <p
            className={`text-xs md:text-sm font-black uppercase tracking-[0.2em] ${
              isDarkMode ? 'text-[#00A3FF]' : 'text-[#0066FF]'
            }`}
          >
            Mark Your Calendar
          </p>

          <h2
            className={`mt-3 text-4xl md:text-5xl font-black tracking-tight ${
              isDarkMode ? 'text-white' : 'text-[#002B49]'
            }`}
          >
            Event Timeline
          </h2>

          <p
            className={`mt-4 max-w-2xl mx-auto text-sm md:text-base leading-relaxed ${
              isDarkMode ? 'text-slate-400' : 'text-slate-600'
            }`}
          >
            Follow the journey from registration to the grand finale.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">

          {/* Center Line */}
          <div
            className={`absolute left-5 md:left-1/2 top-0 bottom-0 w-px md:-translate-x-1/2 ${
              isDarkMode ? 'bg-slate-700' : 'bg-slate-200'
            }`}
          />

          <div className="space-y-8 md:space-y-12">
            {timeline.map((item, index) => {
              const isActive = active === index;
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={item.title}
                  className={`relative flex ${
                    isLeft
                      ? 'md:justify-start'
                      : 'md:justify-end'
                  }`}
                >

                  {/* Timeline Dot */}
                  <div
                    className={`absolute left-[12px] md:left-1/2 md:-translate-x-1/2 top-6 z-10 w-4 h-4 rounded-full border-4 ${
                      isActive
                        ? isDarkMode
                          ? 'bg-[#00A3FF] border-[#08233B]'
                          : 'bg-[#0066FF] border-white'
                        : isDarkMode
                          ? 'bg-slate-600 border-[#061E32]'
                          : 'bg-slate-300 border-white'
                    }`}
                  />

                  {/* Timeline Card */}
                  <button
                    type="button"
                    onClick={() => setActive(index)}
                    className={`w-full md:w-[45%] text-left ml-12 md:ml-0 p-6 rounded-2xl border transition-all duration-300 ${
                      isActive
                        ? isDarkMode
                          ? 'bg-[#082A45] border-[#00A3FF]/60 shadow-xl shadow-[#0066FF]/10'
                          : 'bg-white border-[#0066FF]/50 shadow-xl shadow-slate-200'
                        : isDarkMode
                          ? 'bg-[#08233B] border-slate-700 hover:border-[#00A3FF]/40'
                          : 'bg-slate-50 border-slate-200 hover:border-[#0066FF]/40'
                    }`}
                  >
                    <div className="flex items-start gap-4">

                      {/* Icon */}
                      <div
                        className={`w-10 h-10 shrink-0 rounded-xl flex items-center justify-center ${
                          isDarkMode
                            ? 'bg-[#0066FF]/15 text-[#00A3FF]'
                            : 'bg-[#0066FF]/10 text-[#0066FF]'
                        }`}
                      >
                        <CalendarDays className="w-5 h-5" />
                      </div>

                      {/* Content */}
                      <div className="min-w-0">

                        <p
                          className={`text-xs font-black uppercase tracking-wider mb-2 ${
                            isDarkMode
                              ? 'text-[#00A3FF]'
                              : 'text-[#0066FF]'
                          }`}
                        >
                          {item.date}
                        </p>

                        <h3
                          className={`text-lg md:text-xl font-extrabold leading-snug ${
                            isDarkMode
                              ? 'text-white'
                              : 'text-[#002B49]'
                          }`}
                        >
                          {item.title}
                        </h3>

                        {isActive && (
                          <p
                            className={`mt-3 text-sm leading-relaxed ${
                              isDarkMode
                                ? 'text-slate-300'
                                : 'text-slate-600'
                            }`}
                          >
                            {item.desc}
                          </p>
                        )}

                      </div>
                    </div>
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}


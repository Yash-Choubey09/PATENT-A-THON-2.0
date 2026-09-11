'use client';

import { Calendar, Clock, MapPin, Award, Sparkles } from 'lucide-react';
import { useEffect, useState } from "react";
import { useTheme } from '../contexts/ThemeContext';

const Header = () => {
  const { isDarkMode } = useTheme();

  function useCountUp(to, duration = 2000) {
    const [count, setCount] = useState(0);
    useEffect(() => {
      let start = 0;
      const end = parseInt(to, 10);
      if (start === end) return;
      let incrementTime = Math.floor(duration / end);
      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) clearInterval(timer);
      }, incrementTime);
      return () => clearInterval(timer);
    }, [to, duration]);
    return count;
  }

  const [startCount, setStartCount] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date('2026-10-07T23:59:59').getTime();
    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    const timer = setInterval(updateCountdown, 1000);
    updateCountdown();
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const header = document.getElementById('main-header');
      if (header) {
        const rect = header.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          setStartCount(true);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const participants = useCountUp(startCount ? 500 : 0, 2000);

  return (
    <header id="main-header" className={`min-h-screen pt-28 pb-16 relative overflow-hidden transition-colors duration-300 ${
      isDarkMode ? 'bg-[#00172B] text-white' : 'bg-slate-50 text-slate-900'
    }`}>
      {/* Dynamic Background Mesh */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[850px] h-[400px] bg-gradient-to-b from-[#0066FF]/15 via-[#00A3FF]/10 to-transparent blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 text-center flex flex-col justify-center min-h-[calc(100vh-7rem)]">
        
        {/* Organizing Badge */}
        <div className={`inline-flex items-center gap-2 self-center px-4 py-1.5 rounded-full border font-bold text-xs md:text-sm mb-6 shadow-sm ${
          isDarkMode ? 'bg-[#0066FF]/10 border-[#0066FF]/20 text-[#00A3FF]' : 'bg-[#0066FF]/10 border-[#0066FF]/20 text-[#0066FF]'
        }`}>
          <Award className={`w-4 h-4 ${isDarkMode ? 'text-[#00A3FF]' : 'text-[#0066FF]'}`} />
          <span>University Institute of Engineering × UCRD - Patent Cell</span>
        </div>

        {/* Hero Main Heading - Explicit Ternary Fix */}
        <h1 className={`text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-3 leading-none ${
          isDarkMode ? 'text-white' : 'text-[#002B49]'
        }`}>
          PATENT-A-THON <span className={isDarkMode ? 'text-[#00A3FF]' : 'text-[#0066FF]'}>2.0</span>
        </h1>

        {/* Tagline */}
        <p className={`text-sm md:text-xl font-extrabold tracking-[0.25em] uppercase mb-6 flex items-center justify-center gap-2 ${
          isDarkMode ? 'text-[#00A3FF]' : 'text-[#0066FF]'
        }`}>
          <Sparkles className="w-4 h-4 hidden sm:block" />
          IDEATE • INNOVATE • INVENT
          <Sparkles className="w-4 h-4 hidden sm:block" />
        </p>

        {/* Sub-headline */}
        <p className={`text-base md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed font-medium ${
          isDarkMode ? 'text-slate-300' : 'text-slate-600'
        }`}>
          Turning Ideas Into A Brighter Tomorrow. Join Chandigarh University&apos;s premier innovation marathon to transform high-impact concepts into verified intellectual property.
        </p>

        {/* Info Badges */}
        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-6 mb-12 text-xs md:text-base font-bold">
          <div className={`flex items-center gap-2.5 px-4 py-2.5 rounded-2xl shadow-md border ${
            isDarkMode ? 'bg-slate-800/80 border-slate-700 text-white' : 'bg-white border-slate-200 text-slate-800'
          }`}>
            <Calendar className="w-4 h-4 md:w-5 md:h-5 text-[#0066FF]" />
            <span>12th Sep – 3rd Nov</span>
          </div>
          <div className={`flex items-center gap-2.5 px-4 py-2.5 rounded-2xl shadow-md border ${
            isDarkMode ? 'bg-slate-800/80 border-slate-700 text-white' : 'bg-white border-slate-200 text-slate-800'
          }`}>
            <Clock className="w-4 h-4 md:w-5 md:h-5 text-[#0066FF]" />
            <span>Hybrid Event</span>
          </div>
          <div className={`flex items-center gap-2.5 px-4 py-2.5 rounded-2xl shadow-md border ${
            isDarkMode ? 'bg-slate-800/80 border-slate-700 text-white' : 'bg-white border-slate-200 text-slate-800'
          }`}>
            <MapPin className="w-4 h-4 md:w-5 md:h-5 text-[#0066FF]" />
            <a href="https://maps.app.goo.gl/AiwNVUqkVgkSVL6B7" target="_blank" rel="noopener noreferrer" className="hover:text-[#0066FF] transition-colors">
              Chandigarh University
            </a>
          </div>
        </div>

        {/* Countdown Timer */}
        <div className="mb-12">
          <p className={`text-xs font-black uppercase tracking-widest mb-4 ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
            Registration Closing In
          </p>
          <div className="flex justify-center gap-2 sm:gap-4">
            {[
              { label: 'Days', value: timeLeft.days },
              { label: 'Hours', value: timeLeft.hours },
              { label: 'Minutes', value: timeLeft.minutes },
              { label: 'Seconds', value: timeLeft.seconds },
            ].map((item, idx) => (
              <div key={idx} className={`w-20 sm:w-24 py-3.5 rounded-2xl shadow-md border ${
                isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'
              }`}>
                <span className={`block text-2xl sm:text-4xl font-black ${
                  isDarkMode ? 'text-[#00A3FF]' : 'text-[#002B49]'
                }`}>
                  {String(item.value).padStart(2, '0')}
                </span>
                <span className={`text-[10px] sm:text-xs font-bold uppercase tracking-wider ${
                  isDarkMode ? 'text-slate-400' : 'text-slate-500'
                }`}>
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Primary CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a
            href="https://forms.gle/Pvzz2wkyFasMteDT7"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#0066FF] hover:bg-[#0052CC] text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            Register Now
          </a>
          <a
            href="https://chat.whatsapp.com/CXnEqBAZlSIC3Msbv8017a"
            target="_blank"
            rel="noopener noreferrer"
            className={`border-2 px-8 py-4 rounded-full font-bold text-lg transition-all ${
              isDarkMode 
                ? 'border-slate-300 text-white hover:bg-white hover:text-[#002B49]' 
                : 'border-[#002B49] text-[#002B49] hover:bg-[#002B49] hover:text-white'
            }`}
          >
            Join WhatsApp
          </a>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto w-full">
          {[
            { label: 'Expected Participants', val: `${participants}+` },
            { label: 'Innovation Tracks', val: '9' },
            { label: 'Ideation Scope', val: '∞' },
            { label: 'Organized Events', val: '17+' },
          ].map((stat, idx) => (
            <div key={idx} className={`p-5 rounded-2xl backdrop-blur-sm shadow-sm border ${
              isDarkMode ? 'bg-slate-800/60 border-slate-700' : 'bg-white border-slate-200'
            }`}>
              <div className={`text-3xl font-black mb-1 ${isDarkMode ? 'text-[#00A3FF]' : 'text-[#0066FF]'}`}>
                {stat.val}
              </div>
              <div className={`text-xs md:text-sm font-bold ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </header>
  );
};

export default Header;
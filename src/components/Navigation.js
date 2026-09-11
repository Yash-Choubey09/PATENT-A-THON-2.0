'use client';

import { useState } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import Image from 'next/image';
import { useTheme } from '../contexts/ThemeContext';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b transition-colors duration-300 ${
      isDarkMode ? 'bg-[#00172B]/90 border-slate-800' : 'bg-white/95 border-slate-200 shadow-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Branding */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative w-11 h-11 flex items-center justify-center transition-transform group-hover:scale-105">
              <Image
                src={isDarkMode ? "/LOGO.png" : "/LOGO-black.png"}
                alt="Patent-A-Thon Logo"
                width={44}
                height={44}
                className="rounded-full object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className={`font-black text-lg tracking-tight leading-tight ${isDarkMode ? 'text-white' : 'text-[#002B49]'}`}>
                PATENT-A-THON <span className={isDarkMode ? 'text-[#00A3FF]' : 'text-[#0066FF]'}>2.0</span>
              </span>
              <span className={`text-[10px] font-bold tracking-widest uppercase ${isDarkMode ? 'text-[#00A3FF]' : 'text-[#0066FF]'}`}>
                IDEATE • INNOVATE • INVENT
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className={`hidden lg:flex items-center space-x-8 font-bold text-sm ${isDarkMode ? 'text-slate-200' : 'text-slate-700'}`}>
            {['About', 'Tracks', 'Timeline', 'Partners', 'FAQ'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className={`transition-colors ${isDarkMode ? 'hover:text-[#00A3FF]' : 'hover:text-[#0066FF]'}`}
              >
                {item}
              </a>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <a
              href="https://forms.gle/Pvzz2wkyFasMteDT7"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0066FF] hover:bg-[#0052CC] text-white px-5 py-2.5 rounded-full font-bold text-sm shadow-md hover:shadow-lg transition-all"
            >
              Register Now
            </a>
            <a
              href="https://chat.whatsapp.com/CXnEqBAZlSIC3Msbv8017a"
              target="_blank"
              rel="noopener noreferrer"
              className={`border-2 px-5 py-2.5 rounded-full font-bold text-sm transition-all ${
                isDarkMode 
                  ? 'border-slate-300 text-slate-100 hover:bg-white hover:text-[#002B49]' 
                  : 'border-[#002B49] text-[#002B49] hover:bg-[#002B49] hover:text-white'
              }`}
            >
              Join WhatsApp
            </a>

            <button
              onClick={toggleTheme}
              className={`p-2.5 rounded-full border transition-all ${
                isDarkMode 
                  ? 'bg-slate-800 text-amber-400 border-slate-700 hover:bg-slate-700' 
                  : 'bg-slate-100 text-slate-800 border-slate-300 hover:bg-slate-200'
              }`}
              aria-label="Toggle theme"
            >
              {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          </div>

          {/* Mobile Menu Actions */}
          <div className="md:hidden flex items-center space-x-2">
            <button 
              onClick={toggleTheme} 
              className={`p-2 rounded-full ${isDarkMode ? 'bg-slate-800 text-amber-400' : 'bg-slate-100 text-slate-800'}`}
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button onClick={toggleMenu} className={`p-2 ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className={`md:hidden py-4 border-t space-y-3 ${isDarkMode ? 'border-slate-800' : 'border-slate-200'}`}>
            {['About', 'Tracks', 'Timeline', 'Partners'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                onClick={toggleMenu} 
                className={`block px-4 py-2 rounded-lg text-sm font-semibold ${
                  isDarkMode ? 'hover:bg-slate-800 text-slate-200' : 'hover:bg-slate-100 text-slate-700'
                }`}
              >
                {item}
              </a>
            ))}
            <div className="pt-2 flex flex-col gap-2">
              <a href="https://forms.gle/Pvzz2wkyFasMteDT7" target="_blank" rel="noopener noreferrer" className="bg-[#0066FF] text-white py-2.5 text-center rounded-full font-bold text-sm">
                Register Now
              </a>
              <a href="https://chat.whatsapp.com/CXnEqBAZlSIC3Msbv8017a" target="_blank" rel="noopener noreferrer" className={`border text-center py-2.5 rounded-full font-bold text-sm ${isDarkMode ? 'border-white text-white' : 'border-[#002B49] text-[#002B49]'}`}>
                Join WhatsApp
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
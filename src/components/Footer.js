
'use client';

import { Mail, Github, Linkedin, Twitter, Phone, Instagram, Youtube, MessageCircle } from 'lucide-react';
import Image from 'next/image';
import { useTheme } from '../contexts/ThemeContext';

const Footer = () => {
  const { isDarkMode } = useTheme();

  return (
    <footer className={`${
      isDarkMode 
        ? 'bg-gray-900/95 backdrop-blur-lg border-t border-gray-700/50' 
        : 'bg-white/95 backdrop-blur-lg border-t border-gray-200/50'
    } py-12`}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8">
                <Image
                  src={isDarkMode ? "/LOGO.png" : "/LOGO-black.png"}
                  alt="Patent-A-Thon Logo"
                  width={32}
                  height={32}
                  className="rounded-lg"
                  priority
                />
              </div>
              <span className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-black'}`}>
                Patent-A-Thon 2.0
              </span>
            </div>
            <p className={`ml-10 font-bold ${isDarkMode ? 'text-green-400' : 'text-purple-600'} max-w-md font-semibold`}>
              Ideate • Innovate • Invent
            </p>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className={`text-lg font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-black'}`}>
              Contact
            </h3>
            <div className="space-y-3">
              <a 
                href="mailto:scifiinnovationclub@gmail.com" 
                className={`flex items-start space-x-2 transition-colors ${
                  isDarkMode 
                    ? 'text-gray-300 hover:text-white' 
                    : 'text-gray-600 hover:text-black'
                }`}
              >
                <Mail size={16} className={`mt-0.5 flex-shrink-0 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                <span className="text-sm">scifiinnovationclub@gmail.com</span>
              </a>
              
              <a 
                href="tel:+918447904432" 
                className={`flex items-start space-x-2 transition-colors ${
                  isDarkMode 
                    ? 'text-gray-300 hover:text-white' 
                    : 'text-gray-600 hover:text-black'
                }`}
              >
                <Phone size={16} className={`mt-0.5 flex-shrink-0 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                <div className="text-sm">
                  <div className="whitespace-nowrap">+91 84479 04432</div>
                  <div className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Yash Chaubey (Joint Secretary)</div>
                </div>
              </a>
              
              <a 
                href="tel:+917699326022" 
                className={`flex items-start space-x-2 transition-colors ${
                  isDarkMode 
                    ? 'text-gray-300 hover:text-white' 
                    : 'text-gray-600 hover:text-black'
                }`}
              >
                <Phone size={16} className={`mt-0.5 flex-shrink-0 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                <div className="text-sm">
                  <div className="whitespace-nowrap">+91 76993 26022</div>
                  <div className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Aritra (Joint Secretary)</div>
                </div>
              </a>
            </div>
          </div>

           {/* Social Links */}
          <div>
            <h3 className={`text-lg font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-black'}`}>
              Follow Us
            </h3>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/scifiinnovationclub?igsh=NDVtamhnOXZsdGpk"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-10 h-10 rounded-full flex items-center justify-center hover:bg-pink-500/20 hover:text-pink-400 transition-all duration-300 group ${isDarkMode ? 'bg-gray-800' : 'bg-gray-600'}`}
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/sci-fi-innovation-club/?viewAsMember=true"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-10 h-10 rounded-full flex items-center justify-center hover:bg-blue-500/20 hover:text-blue-400 transition-all duration-300 group ${isDarkMode ? 'bg-gray-800' : 'bg-gray-600'}`}
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href='https://www.youtube.com/@sci-fiinnovation'
                target="_blank"
                rel="noopener noreferrer"
                className={`w-10 h-10 rounded-full flex items-center justify-center hover:bg-red-500/20 hover:text-red-400 transition-all duration-300 group ${isDarkMode ? 'bg-gray-800' : 'bg-gray-600'}`}
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href="https://chat.whatsapp.com/EsqChHUok02G5MT1UknOND?s=sw&p=a&mlu=4&ilr=4"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-10 h-10 rounded-full flex items-center justify-center hover:bg-green-500/20 hover:text-green-400 transition-all duration-300 group ${isDarkMode ? 'bg-gray-800' : 'bg-gray-600'}`}
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={`mt-8 pt-8 border-t ${
          isDarkMode ? 'border-gray-700/50' : 'border-gray-200/50'
        }`}>
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              © 2026 Patent-A-Thon | Sci-Fi Innovation Club
            </p>
            {/* <div className="flex space-x-6">
              <a 
                href="#" 
                className={`text-sm transition-colors ${
                  isDarkMode 
                    ? 'text-gray-400 hover:text-white' 
                    : 'text-gray-500 hover:text-black'
                }`}
              >
                Privacy Policy
              </a>
              <a 
                href="#" 
                className={`text-sm transition-colors ${
                  isDarkMode 
                    ? 'text-gray-400 hover:text-white' 
                    : 'text-gray-500 hover:text-black'
                }`}
              >
                Terms of Service
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

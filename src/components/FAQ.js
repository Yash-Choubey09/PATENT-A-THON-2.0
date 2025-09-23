// This section is for FAQs (Frequently Asked Questions).
// To add or change a question, edit the 'faqs' array below.
// FAQ COMPONENT
// Section for displaying frequently asked questions
// To add/edit FAQs, update the 'faqs' array below

'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState(null);
  const { isDarkMode } = useTheme(); // Use global theme context

  const faqs = [
    {
      question: "Who can participate in Patent-a-thon 1.0?",
      answer: "All undergraduate and graduate students from any discipline are welcome to join."
    },
    {
    "question": "What is the team size limit?",
    "answer": "Teams can have up to 5 members, and even more than 5 are allowed."
    },
    {
      question: "Do I need prior patent experience?",
      answer: "No prior patent experience required. We'll provide workshops and mentorship on patent filing."
    },
    {
      question: "What should I bring to the event?",
      answer: "Bring your laptop, chargers, and any hardware you might need."
    },
    {
      question: "How will intellectual property be handled?",
      answer: "Participants retain full ownership of their innovations. We provide guidance on patent protection."
    },
    {
      question: "Is there any registration fee?",
      answer: "No, the event is completely free for all participants."
    },
    {
      question: "Why trust us?",
      answer: "We will not disclose your idea and you retain full ownership of your innovation. Your confidentiality and rights are our top priority."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section id="faq" className={`py-20 transition-colors duration-500 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
      <div className="max-w-full mx-auto px-8">
        {/* Section title and intro */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Frequently Asked Questions</h2>
        </div>
        
        {/* FAQ grid: each card shows question and answer, toggleable */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`backdrop-blur-sm border rounded-xl overflow-hidden hover:border-green-400 transition-all duration-300 ${isDarkMode ? 'bg-gray-800/80 border-gray-700' : 'bg-white/80 border-gray-300'}`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className={`w-full px-8 py-6 text-left bg-transparent transition-colors duration-200 flex items-center justify-between ${isDarkMode ? 'hover:bg-gray-800/30' : 'hover:bg-gray-100/30'}`}
              >
                <span className={`font-semibold pr-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  {faq.question}
                </span>
                {openFAQ === index ? (
                  <ChevronUp className="w-5 h-5 text-green-400 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                )}
              </button>
              
              {openFAQ === index && (
                <div className={`px-8 py-6 border-t ${isDarkMode ? 'bg-gray-800/30 border-gray-700' : 'bg-gray-100/30 border-gray-300'}`}>
                  <p className={`leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
// End FAQ COMPONENT

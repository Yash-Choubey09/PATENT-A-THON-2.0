'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const faqs = [
  {
    question: 'Who can participate in Patent-A-Thon 2.0?',
    answer:
      'All undergraduate and graduate students from any discipline are welcome to join.',
  },
  {
    question: 'What is the team size limit?',
    answer:
      'Teams can have up to 5 members, and even more than 5 are allowed.',
  },
  {
    question: 'Do I need prior patent experience?',
    answer:
      "No prior patent experience required. We'll provide workshops and mentorship on patent filing.",
  },
  {
    question: 'What should I bring to the event?',
    answer:
      'Bring your laptop, chargers, and any hardware you might need.',
  },
  {
    question: 'How will intellectual property be handled?',
    answer:
      'Participants retain full ownership of their innovations. We provide guidance on patent protection.',
  },
  {
    question: 'Is there any registration fee?',
    answer: 'No, the event is completely free for all participants.',
  },
  {
    question: 'Why trust us?',
    answer:
      'We will not disclose your idea and you retain full ownership of your innovation. Your confidentiality and rights are our top priority.',
  },
];

export default function FAQ() {
  const [openFAQ, setOpenFAQ] = useState(null);
  const { isDarkMode } = useTheme();

  return (
    <section
      id="faq"
      className={`py-20 md:py-24 transition-colors duration-300 ${
        isDarkMode ? 'bg-[#00172B]' : 'bg-slate-50'
      }`}
    >
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-14">
          <span
            className={`text-xs font-black uppercase tracking-[0.2em] ${
              isDarkMode ? 'text-[#00A3FF]' : 'text-[#0066FF]'
            }`}
          >
            Need To Know?
          </span>

          <h2
            className={`mt-3 text-4xl md:text-5xl font-black ${
              isDarkMode ? 'text-white' : 'text-[#002B49]'
            }`}
          >
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openFAQ === index;

            return (
              <div
                key={faq.question}
                className={`rounded-2xl border overflow-hidden transition-all duration-300 ${
                  isOpen
                    ? isDarkMode
                      ? 'bg-[#082A45] border-[#00A3FF]/50'
                      : 'bg-white border-[#0066FF]/40 shadow-md'
                    : isDarkMode
                      ? 'bg-[#08233B] border-slate-700'
                      : 'bg-white border-slate-200'
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenFAQ(isOpen ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left"
                >
                  <span
                    className={`font-bold ${
                      isDarkMode ? 'text-white' : 'text-[#002B49]'
                    }`}
                  >
                    {faq.question}
                  </span>

                  <ChevronDown
                    className={`w-5 h-5 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    } ${isDarkMode ? 'text-[#00A3FF]' : 'text-[#0066FF]'}`}
                  />
                </button>

                {isOpen && (
                  <div
                    className={`px-6 pb-6 text-sm leading-relaxed border-t ${
                      isDarkMode
                        ? 'border-slate-700 text-slate-300'
                        : 'border-slate-100 text-slate-600'
                    }`}
                  >
                    <p className="pt-5">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
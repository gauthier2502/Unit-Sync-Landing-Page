import React from 'react';
import { ChevronDown, ChevronUp, FileDown } from 'lucide-react';
import { FAQS } from '../config';
import { useFAQ } from '../hooks';
import { Button } from './Button';

export const FAQSection: React.FC = () => {
  const { toggleFAQ, isOpen: isFAQOpen } = useFAQ(0);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-16">
          Frequently Asked Questions
        </h2>

        <div className="grid md:grid-cols-2 gap-x-16 gap-y-10">
          {FAQS.map((faq, index) => {
            const isOpen = isFAQOpen(index);
            return (
              <div key={index} className="flex flex-col items-start">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex items-start text-left w-full group focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div
                    className={`flex-shrink-0 mt-1 w-6 h-6 rounded-full flex items-center justify-center mr-4 transition-colors duration-200 ${
                      isOpen ? 'bg-[#2E5BFF]' : 'bg-slate-900 group-hover:bg-slate-700'
                    }`}
                  >
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-white" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-white" />
                    )}
                  </div>
                  <span className="text-xl font-serif font-bold text-slate-900 leading-tight">
                    {faq.question}
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-slate-600 leading-relaxed pl-10 text-base">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 flex flex-col items-center">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Need more technical details?</h3>
            <p className="text-slate-600">Download our comprehensive technical documentation</p>
          </div>
          <a
            href="/UnitSync-Technical-Information.pdf"
            download
            className="inline-block"
          >
            <Button size="lg" className="bg-slate-900 text-white hover:bg-slate-800">
              <FileDown className="w-5 h-5 mr-2" />
              Download Technical PDF
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};
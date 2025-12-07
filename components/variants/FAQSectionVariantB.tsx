import React from 'react';
import { ChevronDown, ChevronUp, FileDown, Shield } from 'lucide-react';
import { FAQS } from '../../config';
import { useFAQ, useToggle } from '../../hooks';
import { Button } from '../Button';

export const FAQSectionVariantB: React.FC = () => {
  const { toggleFAQ, isOpen: isFAQOpen } = useFAQ(0);
  const { isOpen: isOverviewOpen, toggle: toggleOverview } = useToggle(false);

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
          <button
            onClick={toggleOverview}
            className="flex items-center gap-2 text-slate-700 hover:text-slate-900 transition-colors group"
          >
            <Shield className="w-5 h-5" />
            <span className="text-lg font-semibold">See Security & Integration Overview</span>
            <span className="text-sm text-slate-500">(3-min read)</span>
            {isOverviewOpen ? (
              <ChevronUp className="w-5 h-5 text-slate-400 group-hover:text-slate-600" />
            ) : (
              <ChevronDown className="w-5 h-5 text-slate-400 group-hover:text-slate-600" />
            )}
          </button>

          <div
            className={`transition-all duration-300 ease-in-out overflow-hidden ${
              isOverviewOpen ? 'max-h-[800px] opacity-100 mt-8' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="max-w-3xl mx-auto bg-slate-50 rounded-lg p-8 border border-slate-200">
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">Security Compliance</h4>
                  <p className="text-slate-600 leading-relaxed">
                    UnitSync maintains HIPAA compliance with end-to-end encryption, comprehensive audit trails,
                    and SOC 2 Type II certification. All data is encrypted at rest and in transit using industry-standard
                    AES-256 and TLS 1.3 protocols.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">System Integration</h4>
                  <p className="text-slate-600 leading-relaxed">
                    Our platform seamlessly integrates with all major EHR systems including Epic, Cerner, Allscripts,
                    and MEDITECH. The RESTful API supports HL7, FHIR, and custom integration protocols with
                    bidirectional data sync.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">Infrastructure</h4>
                  <p className="text-slate-600 leading-relaxed">
                    Hosted on enterprise-grade cloud infrastructure with 99.9% uptime SLA, automated backups
                    every 6 hours, and disaster recovery systems across multiple geographic regions.
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-300 text-center">
                  <p className="text-slate-600 mb-4">Need the complete technical documentation?</p>
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

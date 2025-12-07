import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { DashboardMockup } from '../components/DashboardMockup';
import { HowUnitSyncWorksVariantB } from '../components/variants/HowUnitSyncWorksVariantB';
import { InsideDashboardVariantB } from '../components/variants/InsideDashboardVariantB';
import { DoctorTestimonialVariantB } from '../components/variants/DoctorTestimonialVariantB';
import { SuccessStoriesVariantB } from '../components/variants/SuccessStoriesVariantB';
import { FAQSectionVariantB } from '../components/variants/FAQSectionVariantB';
import { Assistant } from '../components/Assistant';
import { Navbar } from '../components/Navbar';
import { Timeline } from '../components/Timeline';
import { ABTestToggle } from '../components/ABTestToggle';
import { ShieldCheck, Activity, Twitter, Linkedin, Mail, MapPin, Wifi, ArrowRight } from 'lucide-react';

export const VariantB: React.FC = () => {
  return (
    <div className="min-h-screen bg-white selection:bg-[#2E5BFF] selection:text-white">
      <Navbar ctaButtonText="Start Pilot" bookingPageUrl="/book-demo-b" />

      <main className="pt-20">

        {/* HERO SECTION */}
        <section className="relative overflow-hidden pt-12 pb-16 lg:pt-28 lg:pb-32">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-blue-50/50 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

              <div className="max-w-2xl mx-auto lg:mx-0 text-center lg:text-left z-10">
                <div className="inline-flex items-center space-x-2 bg-blue-50 text-[#2E5BFF] px-3 py-1 rounded-full text-xs font-semibold mb-6 border border-blue-100">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2E5BFF]"></span>
                  </span>
                  <span>Now accepting pilot partners for Q4</span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6 font-serif">
                  <span className="gradient-text">75% of ER time</span> is logistics. Reclaim it with predictive operations.
                </h1>

                <p className="text-lg sm:text-xl text-slate-600 mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0">
                  The digital control tower for mid-sized public hospitals. Move from reactive administration to predictive patient care with UnitSync.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
                  <Link to="/book-demo-b">
                    <Button size="lg" withIcon className="w-full sm:w-auto">Start Reclaiming Time</Button>
                  </Link>
                  <Button size="lg" variant="outline" className="w-full sm:w-auto">View ROI Calculator</Button>
                </div>

                <div className="flex flex-wrap justify-center lg:justify-start items-center gap-x-6 gap-y-3 text-sm text-slate-500">
                  <div className="flex items-center">
                    <ShieldCheck className="w-4 h-4 mr-1.5 text-green-600" />
                    HIPAA Compliant
                  </div>
                  <div className="flex items-center">
                    <ShieldCheck className="w-4 h-4 mr-1.5 text-green-600" />
                    GDPR Ready
                  </div>
                </div>
              </div>

              <div className="relative w-full max-w-lg lg:max-w-none mx-auto lg:order-last">
                <DashboardMockup />
              </div>

            </div>
          </div>
        </section>

        {/* LOGO TICKER */}
        <section className="border-y border-slate-100 bg-slate-50/50 py-10">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <p className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-6">Seamlessly integrates with</p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
              <div className="text-2xl font-bold font-serif text-slate-800">EPIC</div>
              <div className="text-2xl font-bold font-sans italic text-slate-800">Cerner</div>
              <div className="text-2xl font-bold font-mono text-slate-800">Allscripts</div>
              <div className="text-2xl font-bold font-sans text-slate-800 tracking-tighter">MEDITECH</div>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS SECTION */}
        <div id="features" className="scroll-mt-28">
            <HowUnitSyncWorksVariantB />
        </div>

        {/* INSIDE DASHBOARD SECTION */}
        <InsideDashboardVariantB />

        {/* DOCTOR TESTIMONIAL */}
        <div id="testimonials" className="scroll-mt-28">
            <DoctorTestimonialVariantB />
        </div>

        {/* SUCCESS STORIES SECTION */}
        <SuccessStoriesVariantB />

        {/* TIMELINE SECTION - NEW FOR VARIANT B */}
        <Timeline />

        {/* FAQ SECTION */}
        <div id="faq" className="scroll-mt-28">
            <FAQSectionVariantB />
        </div>

        {/* CTA FINAL */}
        <section className="py-32 bg-white relative overflow-hidden">
           <div className="max-w-4xl mx-auto px-4 text-center relative z-10 flex flex-col items-center">

              <div className="inline-flex items-center space-x-2 bg-white border border-green-200 rounded-full px-4 py-1.5 mb-8 shadow-sm">
                 <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                 </span>
                 <span className="text-sm font-semibold text-green-700">Beta Testing Open</span>
                 <Wifi className="w-4 h-4 text-green-600" />
              </div>

              <h2 className="text-5xl md:text-6xl font-serif font-bold text-[#2E5BFF] mb-6 tracking-tight leading-[1.1]">
                Ready to modernize <br/> your hospital operations?
              </h2>

              <p className="text-xl text-slate-500 mb-10 max-w-xl mx-auto font-medium">
                with <span className="text-slate-900 font-semibold">75% reduction in wait times</span> compared to legacy systems*
              </p>

              <div className="flex flex-col sm:flex-row justify-center items-center gap-4 w-full sm:w-auto">
                <Link to="/book-demo-b">
                  <Button size="lg" className="!bg-[#2E5BFF] !text-white hover:!bg-blue-600 shadow-xl shadow-blue-500/30 w-full sm:w-auto px-8 py-4 h-auto text-lg">
                    Get started <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link to="/book-demo-b">
                  <Button size="lg" variant="outline" className="bg-white border-slate-200 text-slate-900 hover:bg-slate-50 w-full sm:w-auto px-8 py-4 h-auto text-lg shadow-sm">
                    Talk to us
                  </Button>
                </Link>
              </div>
           </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                 <Activity className="w-6 h-6 text-[#2E5BFF]" />
                 <span className="text-white text-xl font-bold">UnitSync</span>
              </div>
              <p className="max-w-xs text-sm">Empowering hospitals with intelligence to save lives and resources.</p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
                <li><a href="#" className="hover:text-white">Press</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center"><Mail className="w-4 h-4 mr-2"/> support@unitsync.com</li>
                <li className="flex items-center"><MapPin className="w-4 h-4 mr-2"/> 12 Ave Marceau, Paris</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
            <div className="mb-4 md:mb-0">
              &copy; 2024 UnitSync. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-white"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="hover:text-white"><Linkedin className="w-5 h-5" /></a>
            </div>
          </div>
        </div>
      </footer>

      {/* AI Assistant */}
      <Assistant />

      {/* AB Test Toggle */}
      <ABTestToggle />

    </div>
  );
};

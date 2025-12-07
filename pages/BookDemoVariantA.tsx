import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Calendar } from '../components/Calendar';
import { BookingForm } from '../components/BookingForm';
import { ABTestToggle } from '../components/ABTestToggle';
import { Activity, Twitter, Linkedin, Mail, MapPin } from 'lucide-react';

export const BookDemoVariantA: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-slate-50 selection:bg-[#2E5BFF] selection:text-white">
      <Navbar bookingPageUrl="/book-demo-a" />
      <ABTestToggle />

      <main className="pt-20">
        <section className="py-12 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center space-x-2 bg-blue-50 text-[#2E5BFF] px-3 py-1 rounded-full text-xs font-semibold mb-4 border border-blue-100">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2E5BFF]"></span>
                </span>
                <span>Limited pilot spots available</span>
              </div>

              <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight mb-4">
                Book Your <span className="text-[#2E5BFF]">Free Demo</span>
              </h1>

              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                See how UnitSync can transform your hospital operations. Schedule a personalized demo with our team.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <div>
                <Calendar
                  selectedDate={selectedDate}
                  selectedTime={selectedTime}
                  onDateSelect={setSelectedDate}
                  onTimeSelect={setSelectedTime}
                />

                <div className="mt-6 bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
                  <h3 className="text-sm font-semibold text-slate-900 mb-3">What to Expect</h3>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li className="flex items-start">
                      <span className="text-[#2E5BFF] mr-2 mt-0.5">•</span>
                      <span>45-minute personalized demo tailored to your hospital's needs</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#2E5BFF] mr-2 mt-0.5">•</span>
                      <span>Live walkthrough of key features and integrations</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#2E5BFF] mr-2 mt-0.5">•</span>
                      <span>Q&A session with our product experts</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#2E5BFF] mr-2 mt-0.5">•</span>
                      <span>Custom ROI analysis for your organization</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <BookingForm selectedDate={selectedDate} selectedTime={selectedTime} />
              </div>
            </div>

            <div className="mt-16 text-center">
              <p className="text-sm text-slate-500">
                Need help? Contact us at{' '}
                <a href="mailto:support@unitsync.com" className="text-[#2E5BFF] hover:underline">
                  support@unitsync.com
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>

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
    </div>
  );
};

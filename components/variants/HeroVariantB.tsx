import React from 'react';
import { Button } from '../Button';
import { DashboardMockup } from '../DashboardMockup';
import { ShieldCheck, Wifi } from 'lucide-react';

export const HeroVariantB: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-12 pb-16 lg:pt-28 lg:pb-32 bg-gradient-to-br from-blue-50 via-white to-slate-50">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          <div className="max-w-2xl mx-auto lg:mx-0 text-center lg:text-left z-10">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full text-xs font-semibold mb-6 shadow-lg">
              <Wifi className="w-3 h-3" />
              <span>Live Demo Available - Join Q4 Pilot Program</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6">
              Hospital Intelligence That <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Saves Lives</span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-700 mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0 font-medium">
              Transform chaotic data streams into clear, actionable insights. UnitSync helps mid-sized hospitals predict patient surges, optimize resources, and deliver better care.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
              <Button size="lg" withIcon className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                Start Free Trial
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto border-2 border-slate-300 hover:border-blue-500 hover:text-blue-600">
                Watch Demo
              </Button>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start items-center gap-x-8 gap-y-3 text-sm">
              <div className="flex items-center text-slate-600 font-semibold">
                <ShieldCheck className="w-5 h-5 mr-2 text-green-600" />
                HIPAA Certified
              </div>
              <div className="flex items-center text-slate-600 font-semibold">
                <ShieldCheck className="w-5 h-5 mr-2 text-green-600" />
                SOC 2 Compliant
              </div>
            </div>
          </div>

          <div className="relative w-full max-w-lg lg:max-w-none mx-auto lg:order-last">
            <DashboardMockup />
          </div>

        </div>
      </div>
    </section>
  );
};

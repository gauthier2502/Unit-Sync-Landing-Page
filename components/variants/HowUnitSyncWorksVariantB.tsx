import React from 'react';
import { TrendingUp, Users, Activity, ArrowRight } from 'lucide-react';

const steps = [
  {
    number: 1,
    icon: TrendingUp,
    title: 'Predict patient inflow',
    description: 'AI-powered forecasting analyzes historical data, seasonal patterns, and real-time trends to predict patient volumes hours or days in advance, giving your team time to prepare.',
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-50',
  },
  {
    number: 2,
    icon: Users,
    title: 'Allocate staff and resources',
    description: 'Smart scheduling automatically adjusts staffing levels, assigns beds, and allocates equipment based on predicted demand, ensuring optimal coverage without waste.',
    color: 'from-green-500 to-emerald-500',
    bgColor: 'bg-green-50',
  },
  {
    number: 3,
    icon: Activity,
    title: 'Stabilize operations and monitor KPIs',
    description: 'Real-time dashboards track key performance indicators across all departments, sending intelligent alerts when thresholds are breached so you can maintain smooth operations.',
    color: 'from-purple-500 to-pink-500',
    bgColor: 'bg-purple-50',
  },
];

export const HowUnitSyncWorksVariantB: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-2">
            How It Works
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 font-serif">
            How UnitSync Works
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            From prediction to action in three seamless steps
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-green-200 to-purple-200 transform -translate-y-1/2 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={index}
                  className="relative bg-white border-2 border-slate-200 rounded-2xl p-8 hover:shadow-2xl hover:border-blue-300 transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className={`w-16 h-16 ${step.bgColor} rounded-full flex items-center justify-center mb-6 relative`}>
                      <div className="absolute -top-3 -right-3 w-8 h-8 bg-[#2E5BFF] text-white rounded-full flex items-center justify-center font-bold text-sm shadow-lg">
                        {step.number}
                      </div>
                      <Icon className="w-8 h-8 text-[#2E5BFF]" />
                    </div>

                    <h3 className="text-2xl font-bold text-slate-900 mb-4">
                      {step.title}
                    </h3>

                    <p className="text-slate-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                      <ArrowRight className="w-8 h-8 text-slate-300" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center justify-center space-x-4 bg-gradient-to-r from-blue-50 to-green-50 px-8 py-6 rounded-2xl border border-blue-200">
            <Activity className="w-8 h-8 text-[#2E5BFF]" />
            <div className="text-left">
              <div className="text-2xl font-bold text-slate-900">Continuous optimization</div>
              <div className="text-slate-600">The system learns and improves with every shift</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

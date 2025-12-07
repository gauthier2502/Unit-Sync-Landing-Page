import React from 'react';
import { CheckCircle, Zap, LineChart, Users } from 'lucide-react';

const steps = [
  {
    icon: Users,
    title: 'Connect Your Systems',
    description: 'Integrate with your existing EHR and hospital management systems in minutes. No complex migrations required.',
  },
  {
    icon: LineChart,
    title: 'Real-Time Data Sync',
    description: 'UnitSync automatically aggregates data from all connected systems into a unified dashboard.',
  },
  {
    icon: Zap,
    title: 'AI-Powered Insights',
    description: 'Our intelligence engine analyzes patterns and provides actionable recommendations instantly.',
  },
  {
    icon: CheckCircle,
    title: 'Take Informed Action',
    description: 'Make faster, data-driven decisions that improve patient outcomes and operational efficiency.',
  },
];

export const HowItWorks: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Get up and running in four simple steps. No technical expertise required.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="relative flex flex-col items-center text-center group"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -mt-4 w-8 h-8 bg-[#2E5BFF] rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                  {index + 1}
                </div>

                <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mb-6 mt-6 shadow-md group-hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2 border border-slate-100">
                  <Icon className="w-10 h-10 text-[#2E5BFF]" />
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-slate-600 leading-relaxed">{step.description}</p>

                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-slate-200 to-transparent"></div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

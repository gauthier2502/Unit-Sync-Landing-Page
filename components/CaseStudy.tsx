import React from 'react';
import { TrendingUp, Clock, Users, DollarSign } from 'lucide-react';

const stats = [
  {
    icon: TrendingUp,
    value: '45%',
    label: 'Improvement in patient flow',
  },
  {
    icon: Clock,
    value: '2.5hrs',
    label: 'Reduced average wait time',
  },
  {
    icon: Users,
    value: '30%',
    label: 'More patients served daily',
  },
  {
    icon: DollarSign,
    value: '$2.1M',
    label: 'Annual cost savings',
  },
];

export const CaseStudy: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center space-x-2 bg-green-50 text-green-700 px-3 py-1 rounded-full text-xs font-semibold mb-6 border border-green-200">
              <span>Success Story</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6 leading-tight">
              St. Mary's Regional cuts wait times by half
            </h2>

            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              A 400-bed public hospital in the Midwest implemented UnitSync to address critical bottlenecks in their emergency department. Within 90 days, they saw dramatic improvements across all key metrics.
            </p>

            <blockquote className="border-l-4 border-[#2E5BFF] pl-6 mb-8">
              <p className="text-lg text-slate-700 italic mb-3">
                "UnitSync transformed how we operate. We went from reactive firefighting to proactive management. Our staff is less stressed, and our patients are happier."
              </p>
              <footer className="text-sm text-slate-500 font-semibold">
                — Dr. Rachel Martinez, Chief Medical Officer
              </footer>
            </blockquote>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                    <Icon className="w-6 h-6 text-[#2E5BFF] mb-2" />
                    <div className="text-2xl font-bold text-slate-900 mb-1">{stat.value}</div>
                    <div className="text-sm text-slate-600">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop"
                alt="Hospital staff collaborating"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-6 shadow-xl border border-slate-100 max-w-xs">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-slate-900">98%</div>
                  <div className="text-sm text-slate-600">Staff satisfaction rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

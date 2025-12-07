import React from 'react';
import { Zap, BarChart3, Users, Bell, Calendar, Shield } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Predictive Analytics',
    description: 'AI-powered forecasting helps you anticipate patient surges before they happen, giving you time to prepare.',
    color: 'from-yellow-500 to-orange-500',
    bgColor: 'bg-yellow-50',
  },
  {
    icon: BarChart3,
    title: 'Real-Time Dashboards',
    description: 'Monitor every department at a glance with live data visualization and custom KPI tracking.',
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-50',
  },
  {
    icon: Users,
    title: 'Staff Optimization',
    description: 'Intelligent scheduling and workload balancing ensures optimal coverage without burnout.',
    color: 'from-purple-500 to-pink-500',
    bgColor: 'bg-purple-50',
  },
  {
    icon: Bell,
    title: 'Smart Alerts',
    description: 'Context-aware notifications deliver critical information to the right person at the right time.',
    color: 'from-red-500 to-rose-500',
    bgColor: 'bg-red-50',
  },
  {
    icon: Calendar,
    title: 'Resource Planning',
    description: 'Automated bed management and equipment tracking prevents bottlenecks and maximizes utilization.',
    color: 'from-green-500 to-emerald-500',
    bgColor: 'bg-green-50',
  },
  {
    icon: Shield,
    title: 'Compliance Built-In',
    description: 'HIPAA-compliant architecture with automated audit trails and encryption at rest and in transit.',
    color: 'from-slate-600 to-slate-800',
    bgColor: 'bg-slate-50',
  },
];

export const FeaturesGridVariantB: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-2">
            Features
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
            Everything you need to run a modern hospital
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Powerful features that work together seamlessly to give you complete visibility and control.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-2xl hover:border-transparent transition-all duration-300 hover:-translate-y-2"
              >
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300"
                     style={{ backgroundImage: `linear-gradient(to bottom right, var(--tw-gradient-from), var(--tw-gradient-to))` }}></div>

                <div className={`w-14 h-14 ${feature.bgColor} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-7 h-7 bg-gradient-to-br ${feature.color} bg-clip-text text-transparent`} style={{ WebkitTextFillColor: 'transparent', backgroundClip: 'text' }} />
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {feature.title}
                </h3>

                <p className="text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center justify-center space-x-4 bg-gradient-to-r from-blue-50 to-purple-50 px-8 py-6 rounded-2xl border border-blue-100">
            <Zap className="w-8 h-8 text-blue-600" />
            <div className="text-left">
              <div className="text-2xl font-bold text-slate-900">30+ integrations</div>
              <div className="text-slate-600">Connect with your existing tools seamlessly</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

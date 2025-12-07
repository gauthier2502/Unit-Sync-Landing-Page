import React from 'react';

export const InsideDashboard: React.FC = () => {
  const dashboardFeatures = [
    {
      title: 'Patient Inflow Forecast',
      description: 'Predictive analytics powered by AI help you anticipate patient volume and capacity needs hours in advance.',
      image: '/screenshot_2025-12-06_at_17.06.04.png',
      alt: 'Patient Inflow Forecast Dashboard showing predicted vs actual patient flow'
    },
    {
      title: 'Staff Planner',
      description: 'Optimize staffing across all departments with intelligent scheduling that ensures proper coverage and compliance.',
      image: '/screenshot_2025-12-06_at_17.08.18.png',
      alt: 'Staff Planner Dashboard with weekly schedule management'
    },
    {
      title: 'Patient Triage System',
      description: 'Real-time triage optimization ensures critical patients are prioritized and department flow remains efficient.',
      image: '/screenshot_2025-12-06_at_17.09.59.png',
      alt: 'Patient Triage System Dashboard with real-time monitoring'
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-slate-900 mb-4 tracking-tight">
            Inside the Dashboard
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Powerful features designed for hospital operations teams
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {dashboardFeatures.map((feature, index) => (
            <div
              key={index}
              className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden"
            >
              <div className="p-6 pb-4">
                <h3 className="text-xl font-serif font-bold text-slate-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  {feature.description}
                </p>
              </div>

              <div className="px-6 pb-6">
                <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm aspect-[16/10] flex items-center justify-center">
                  <img
                    src={feature.image}
                    alt={feature.alt}
                    className="w-full h-full object-cover scale-125"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.parentElement!.innerHTML = '<div class="flex items-center justify-center w-full h-full bg-slate-100 text-slate-400"><span class="text-sm">Dashboard Preview</span></div>';
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { Link } from 'react-router-dom';
import { Rocket, ArrowRight } from 'lucide-react';
import { Button } from './Button';

interface TimelinePhase {
  period: string;
  title: string;
  description: string;
}

const PHASES: TimelinePhase[] = [
  {
    period: 'Month 0-2',
    title: 'Installation',
    description: 'System setup, EHR integration, and initial team training. We handle the technical heavy lifting while your operations continue smoothly.',
  },
  {
    period: 'Month 2-6',
    title: 'Co-Creation',
    description: 'Customize workflows with your team, refine dashboards, and optimize for your hospital\'s unique needs. Your feedback shapes the system.',
  },
  {
    period: 'Month 6-12',
    title: 'Activation',
    description: 'Full deployment across departments, advanced features rollout, and performance optimization. See measurable improvements in efficiency.',
  },
];

export const Timeline: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Your 12-Month Journey to Success
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            A proven, phased approach that minimizes disruption and maximizes results. No big-bang implementation—just steady, collaborative progress.
          </p>
        </div>

        <div className="max-w-5xl mx-auto mb-16">
          <div className="relative">
            <div className="absolute top-6 left-0 right-0 h-0.5 bg-slate-300 hidden md:block" style={{ left: '5%', right: '5%' }}></div>

            <div className="grid md:grid-cols-3 gap-8 md:gap-4 relative">
              {PHASES.map((phase, index) => (
                <div key={index} className="relative">
                  <div className="flex flex-col items-center text-center">
                    <div className="relative z-10 mb-6">
                      <div className="w-12 h-12 rounded-full bg-white border-4 border-[#2E5BFF] flex items-center justify-center shadow-lg">
                        <div className="w-3 h-3 rounded-full bg-[#2E5BFF]"></div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <p className="text-sm font-semibold text-[#2E5BFF] uppercase tracking-wide">
                        {phase.period}
                      </p>
                      <h3 className="text-xl font-bold text-slate-900">
                        {phase.title}
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {phase.description}
                      </p>
                    </div>
                  </div>

                  {index < PHASES.length - 1 && (
                    <div className="md:hidden flex justify-center my-6">
                      <div className="w-0.5 h-8 bg-slate-300"></div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-blue-50 text-[#2E5BFF] px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-blue-100">
            <Rocket className="w-4 h-4" />
            <span>Limited pilot spots available for Q4</span>
          </div>

          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            Join forward-thinking hospitals already experiencing measurable improvements in efficiency and patient care.
          </p>

          <Link to="/book-demo">
            <Button size="lg" className="!bg-[#2E5BFF] !text-white hover:!bg-blue-600 shadow-xl shadow-blue-500/30 px-10 py-4 h-auto text-lg">
              Start Pilot Program <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

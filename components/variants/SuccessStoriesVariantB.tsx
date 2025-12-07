import React from 'react';
import { Building2 } from 'lucide-react';

interface SuccessStory {
  duration: string;
  hospitalName: string;
  hospitalType: string;
  title: string;
  description: string;
  attribution: {
    name: string;
    role: string;
  };
  imageUrl: string;
}

const successStories: SuccessStory[] = [
  {
    duration: 'Using UnitSync for 8 months',
    hospitalName: 'Metropolitan General',
    hospitalType: '450-bed facility',
    title: 'Reduced ER wait times by 40%',
    description: 'After implementing UnitSync\'s predictive bed management system, Metropolitan General saw immediate improvements in patient flow. Real-time capacity insights enabled proactive staffing decisions and eliminated bottlenecks.',
    attribution: {
      name: 'Dr. James Peterson',
      role: 'Chief of Emergency Medicine'
    },
    imageUrl: 'https://images.pexels.com/photos/236380/pexels-photo-236380.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    duration: 'Using UnitSync for 1 year',
    hospitalName: 'Riverside Medical Center',
    hospitalType: '320-bed facility',
    title: 'Increased daily patient capacity by 28%',
    description: 'Riverside leveraged UnitSync\'s AI-powered scheduling to optimize operating room utilization and reduce turnover times. The system\'s predictive analytics helped anticipate surge periods and allocate resources efficiently.',
    attribution: {
      name: 'Sarah Chen',
      role: 'Director of Operations'
    },
    imageUrl: 'https://images.pexels.com/photos/7088530/pexels-photo-7088530.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    duration: 'Using UnitSync for 6 months',
    hospitalName: 'Lakeside Community Hospital',
    hospitalType: '280-bed facility',
    title: 'Saved $1.8M annually in operational costs',
    description: 'By reducing unnecessary overtime and optimizing supply chain management through UnitSync\'s demand forecasting, Lakeside achieved significant cost savings while maintaining high-quality patient care standards.',
    attribution: {
      name: 'Michael Torres',
      role: 'CFO'
    },
    imageUrl: 'https://images.pexels.com/photos/4031867/pexels-photo-4031867.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    duration: 'Using UnitSync for 10 months',
    hospitalName: 'Northern Valley Medical',
    hospitalType: '380-bed facility',
    title: 'Improved staff satisfaction by 45%',
    description: 'UnitSync\'s intelligent workload distribution and predictive scheduling reduced burnout and improved work-life balance for Northern Valley\'s clinical staff. The transparency of real-time data fostered better team collaboration.',
    attribution: {
      name: 'Dr. Emily Rodriguez',
      role: 'Chief Medical Officer'
    },
    imageUrl: 'https://images.pexels.com/photos/6129507/pexels-photo-6129507.jpeg?auto=compress&cs=tinysrgb&w=800'
  }
];

export const SuccessStoriesVariantB: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-16 text-center">
          Some Success Stories from our users
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {successStories.map((story, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="grid sm:grid-cols-2 gap-0">
                <div className="p-8 flex flex-col justify-between">
                  <div>
                    <div className="inline-block bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold mb-4 border border-blue-100">
                      {story.duration}
                    </div>

                    <h3 className="text-2xl font-bold text-slate-900 mb-3 leading-tight">
                      {story.title}
                    </h3>

                    <p className="text-slate-600 text-sm leading-relaxed mb-4">
                      {story.description}
                    </p>

                    <p className="text-xs text-slate-500 font-semibold mb-1">
                      {story.hospitalName} - {story.hospitalType}
                    </p>
                  </div>

                  <div className="flex items-center space-x-2 mt-6 pt-6 border-t border-slate-100">
                    <div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Building2 className="w-4 h-4 text-slate-600" />
                    </div>
                    <div className="text-sm">
                      <div className="font-semibold text-slate-900">{story.attribution.name}</div>
                      <div className="text-slate-500 text-xs">{story.attribution.role}</div>
                    </div>
                  </div>
                </div>

                <div className="relative h-full min-h-[300px] sm:min-h-0">
                  <img
                    src={story.imageUrl}
                    alt={`${story.hospitalName} success story`}
                    className="absolute inset-0 w-full h-full object-cover"
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

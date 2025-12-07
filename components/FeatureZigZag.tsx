import React from 'react';
import { Button } from './Button';
import { CheckCircle } from 'lucide-react';

interface Props {
  title: string;
  description: string;
  benefits: string[];
  ctaText: string;
  image: React.ReactNode;
  reversed?: boolean;
}

export const FeatureZigZag: React.FC<Props> = ({ title, description, benefits, ctaText, image, reversed = false }) => {
  return (
    <div className="py-16 md:py-24 overflow-hidden">
      <div className={`flex flex-col md:flex-row items-center gap-12 md:gap-20 ${reversed ? 'md:flex-row-reverse' : ''}`}>
        
        {/* Content Side */}
        <div className="flex-1 space-y-6">
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
            {title}
          </h3>
          <p className="text-lg text-slate-600 leading-relaxed">
            {description}
          </p>
          <ul className="space-y-3">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle className="w-5 h-5 text-[#2E5BFF] mt-1 mr-3 flex-shrink-0" />
                <span className="text-slate-700">{benefit}</span>
              </li>
            ))}
          </ul>
          <div className="pt-4">
             <Button variant="ghost" withIcon className="!px-0 !text-left">{ctaText}</Button>
          </div>
        </div>

        {/* Visual Side */}
        <div className="flex-1 w-full relative">
            <div className="relative rounded-2xl bg-white p-2 shadow-2xl border border-slate-100">
                <div className="absolute top-0 -left-4 w-20 h-20 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                <div className="absolute top-0 -right-4 w-20 h-20 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                
                {/* The "Image" is passed as a component for flexibility */}
                <div className="bg-slate-50 rounded-xl overflow-hidden aspect-[4/3] flex items-center justify-center relative">
                    {image}
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};
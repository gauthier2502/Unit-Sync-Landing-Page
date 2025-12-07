import React, { useState } from 'react';
import { Check, ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from './Button';

const testimonials = [
  {
    id: 1,
    headline: "Adjust protocols \nanytime with a provider",
    bullets: [
      "Low administrative burden to help your staff focus on treatment",
      "Adjust your staffing levels as needed to balance patient load and burnout",
      "Change operational protocols in partnership with department heads at any time, instantly"
    ],
    doctorName: "Dr. Sandra Wilson",
    doctorRole: "SVP of Emergency Ops, UnitSync",
    imageSrc: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=1964&auto=format&fit=crop"
  },
  {
    id: 2,
    headline: "Real-time insights for \nbetter patient outcomes",
    bullets: [
      "Identify bottlenecks before they become critical issues in the ER",
      "Streamline communication between departments instantly",
      "Data-driven decisions that save lives and optimize resources"
    ],
    doctorName: "Dr. Sarah Chen",
    doctorRole: "Chief of Cardiology, Mercy Hospital",
    imageSrc: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=1964&auto=format&fit=crop"
  }
];

export const DoctorTestimonial: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    }
    if (isRightSwipe) {
      prevSlide();
    }
    // Reset
    setTouchStart(0);
    setTouchEnd(0);
  };

  const current = testimonials[currentIndex];

  return (
    <section className="py-24 bg-white overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          
          {/* Left Column: Text Content */}
          <div 
            className="flex-1 space-y-8 order-2 lg:order-1 animate-in fade-in slide-in-from-left-4 duration-500 fill-mode-both"
            key={`text-${current.id}`}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#2E5BFF] leading-[1.15] tracking-tight whitespace-pre-line">
              {current.headline}
            </h2>
            
            <div className="space-y-5">
              {current.bullets.map((item, i) => (
                <div key={i} className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center">
                        <Check className="w-3.5 h-3.5 text-orange-600 stroke-[3]" />
                    </div>
                  </div>
                  <p className="ml-4 text-lg text-slate-700 font-medium leading-snug">{item}</p>
                </div>
              ))}
            </div>

            <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <Button size="lg" className="rounded-full px-10 py-4 shadow-xl shadow-blue-500/20">
                Learn More
              </Button>

              <div className="flex gap-3">
                <button 
                  onClick={prevSlide}
                  className="w-12 h-12 flex items-center justify-center rounded-full border border-slate-200 hover:bg-slate-50 hover:border-slate-300 transition-all active:scale-95"
                  aria-label="Previous testimonial"
                >
                  <ArrowLeft className="w-5 h-5 text-slate-600" />
                </button>
                <button 
                  onClick={nextSlide}
                  className="w-12 h-12 flex items-center justify-center rounded-full border border-slate-200 hover:bg-slate-50 hover:border-slate-300 transition-all active:scale-95"
                  aria-label="Next testimonial"
                >
                  <ArrowRight className="w-5 h-5 text-slate-600" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Image Content */}
          <div 
            className="flex-1 w-full order-1 lg:order-2 animate-in fade-in slide-in-from-right-4 duration-500 fill-mode-both"
            key={`img-${current.id}`}
          >
            <div className="relative aspect-[3/4] lg:aspect-[4/5] rounded-[2.5rem] overflow-hidden bg-[#F3F0E7]">
               {/* Doctor Image */}
               <img 
                 src={current.imageSrc}
                 alt={current.doctorName}
                 className="w-full h-full object-cover object-top"
               />
               
               {/* Floating Name Card */}
               <div className="absolute bottom-8 left-8 right-auto bg-white/80 backdrop-blur-md px-6 py-4 rounded-2xl shadow-sm border border-white/50 animate-in slide-in-from-bottom-4 fade-in duration-700 delay-150 fill-mode-both">
                  <div className="font-bold text-slate-900 text-lg">{current.doctorName}</div>
                  <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide mt-0.5">{current.doctorRole}</div>
               </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};
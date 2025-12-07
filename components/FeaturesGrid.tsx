import React from 'react';
import { ArrowRight, Play, Pause, Zap, BarChart2, Calendar, PieChart, MoreHorizontal } from 'lucide-react';
import { AreaChart, Area, BarChart, Bar, ResponsiveContainer, XAxis, Tooltip } from 'recharts';

const FeatureCard = ({ 
  title, 
  description, 
  cta, 
  children, 
  className = "", 
  width = "half" 
}: { 
  title: string; 
  description: string; 
  cta: string; 
  children?: React.ReactNode; 
  className?: string;
  width?: "half" | "full"
}) => (
  <div className={`group flex flex-col bg-slate-50 rounded-3xl overflow-hidden border border-slate-100 ${width === 'full' ? 'md:col-span-2' : 'md:col-span-1'} ${className}`}>
    <div className="p-8 pb-0 flex flex-col h-full">
      <h3 className="text-2xl font-serif font-bold text-slate-900 mb-3">{title}</h3>
      <p className="text-slate-600 leading-relaxed mb-6 max-w-md">{description}</p>
      <div className="flex items-center text-[#2E5BFF] font-semibold text-sm cursor-pointer mb-8 group/link">
        <span>{cta}</span>
        <ArrowRight className="w-4 h-4 ml-1" />
      </div>
      <div className="flex-1 w-full flex items-end justify-center overflow-hidden">
        {children}
      </div>
    </div>
  </div>
);

export const FeaturesGrid = () => {
  return (
    <section className="py-24 bg-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center mb-16 space-y-2">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900">
          Five smart features administrators love.
        </h2>
        <p className="text-xl text-slate-500 font-serif italic">
          (Discover many more in the dashboard.)
        </p>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Row 1: Key Moments (Line Chart) */}
        <FeatureCard 
          title="Predictive Inflow"
          description="Discover the reasons behind every major surge in patient volume with detailed, AI-generated summaries embedded right on the performance chart."
          cta="Learn more"
        >
          <div className="w-full h-64 bg-white rounded-t-xl shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.1)] p-4 border border-b-0 border-slate-200 relative">
             {/* Header with Status */}
             <div className="absolute top-4 left-6 z-10 flex flex-col items-start">
                <div className="flex items-center space-x-2 mb-1">
                    <span className="flex h-2 w-2 relative">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                    </span>
                    <span className="text-xs font-bold text-red-500 uppercase tracking-wider">Surge Detected</span>
                </div>
                <div className="text-2xl font-bold text-slate-900">142 <span className="text-sm font-normal text-slate-500">Patients/hr</span></div>
             </div>

             <div className="w-full h-full">
                <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={[
                    {time: '08:00', v: 40}, 
                    {time: '09:00', v: 55}, 
                    {time: '10:00', v: 80}, 
                    {time: '11:00', v: 70}, 
                    {time: '12:00', v: 110}, 
                    {time: '13:00', v: 130}, 
                    {time: '14:00', v: 142}, 
                    {time: '15:00', v: 115}, 
                    {time: '16:00', v: 90}
                ]} margin={{ top: 60, right: 10, left: 10, bottom: 0 }}>
                    <defs>
                    <linearGradient id="colorV" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#2E5BFF" stopOpacity={0.1}/>
                        <stop offset="95%" stopColor="#2E5BFF" stopOpacity={0}/>
                    </linearGradient>
                    </defs>
                    <XAxis dataKey="time" hide />
                    <Tooltip cursor={{ stroke: '#2E5BFF', strokeWidth: 1 }} contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                    <Area type="monotone" dataKey="v" stroke="#2E5BFF" strokeWidth={3} fill="url(#colorV)" />
                </AreaChart>
                </ResponsiveContainer>
             </div>
             
             {/* Peak Time Annotation */}
             <div className="absolute top-[35%] right-[25%] bg-slate-900 text-white text-[10px] px-3 py-1.5 rounded-lg shadow-lg flex items-center space-x-2 border border-slate-700 animate-bounce" style={{ animationDuration: '3s' }}>
                <div className="flex flex-col items-start">
                    <span className="font-bold text-red-400">Peak Predicted</span>
                    <span className="text-[9px] text-slate-300">14:00 • +45% Volume</span>
                </div>
             </div>
             
             {/* Bottom Info */}
             <div className="absolute bottom-3 left-6 right-6 flex justify-between items-center border-t border-slate-100 pt-3">
                 <div className="text-[10px] text-slate-400 font-medium uppercase">Live Forecast</div>
                 <div className="bg-blue-50 text-[#2E5BFF] text-[10px] font-bold px-2 py-0.5 rounded">Accuracy 94%</div>
             </div>
          </div>
        </FeatureCard>

        {/* Row 1: Resource Utilization (Bar Chart) */}
        <FeatureCard 
          title="Resource Utilization"
          description="View a monthly breakdown of bed occupancy and equipment usage from every department. Plus, see a forecast of your capacity needs."
          cta="Learn more"
        >
          <div className="w-full h-64 bg-white rounded-t-xl shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.1)] p-6 border border-b-0 border-slate-200 flex flex-col justify-end">
             <div className="flex justify-between items-end mb-2 px-2">
                <div className="text-xs font-semibold text-slate-500">ICU Beds</div>
                <div className="text-xs font-semibold text-slate-500">OR Rooms</div>
             </div>
             <div>
                <ResponsiveContainer width="100%" height={160}>
                <BarChart data={[
                    {a: 65, b: 40}, {a: 59, b: 45}, {a: 80, b: 50}, {a: 81, b: 55}, {a: 56, b: 40}
                ]} barGap={4}>
                    <Bar dataKey="a" fill="#2E5BFF" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="b" fill="#94A3B8" radius={[4, 4, 0, 0]} />
                </BarChart>
                </ResponsiveContainer>
             </div>
          </div>
        </FeatureCard>

        {/* Row 2: Queue (Spreadsheet) */}
        <FeatureCard 
          title="Live Triage Queue"
          description="Gain more control with a tool that lets you plan, edit, and execute multiple patient transfers simultaneously, all with real-time status updates."
          cta="Learn more"
          width="full"
        >
          <div className="w-full h-auto min-h-[220px] bg-white rounded-t-xl shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.1)] border border-b-0 border-slate-200 overflow-hidden flex flex-col">
            {/* Table Header */}
            <div className="flex items-center px-6 py-3 border-b border-slate-100 bg-slate-50/50">
                <div className="w-1/4 text-xs font-bold text-slate-400 uppercase">Patient ID</div>
                <div className="w-1/4 text-xs font-bold text-slate-400 uppercase">Severity</div>
                <div className="w-1/4 text-xs font-bold text-slate-400 uppercase">Status</div>
                <div className="w-1/4 text-xs font-bold text-slate-400 uppercase text-right">Action</div>
            </div>
            {/* Rows */}
            <div className="flex flex-col">
                {[
                    { id: 'P-9281', sev: 'Level 1 (Critical)', status: 'Waiting Bed', color: 'text-red-600' },
                    { id: 'P-9284', sev: 'Level 3 (Urgent)', status: 'In Assessment', color: 'text-orange-500' },
                    { id: 'P-9289', sev: 'Level 4 (Standard)', status: 'Discharged', color: 'text-green-600' },
                ].map((row, i) => (
                    <div key={i} className="flex items-center px-6 py-4 border-b border-slate-50 cursor-pointer group/row">
                        <div className="w-1/4 text-sm font-bold text-slate-800">{row.id}</div>
                        <div className={`w-1/4 text-sm font-medium ${row.color}`}>{row.sev}</div>
                        <div className="w-1/4 text-sm text-slate-500 flex items-center">
                            <div className={`w-1.5 h-1.5 rounded-full mr-2 ${row.status === 'Discharged' ? 'bg-slate-300' : 'bg-blue-500 animate-pulse'}`}></div>
                            {row.status}
                        </div>
                        <div className="w-1/4 text-right">
                             <button className="text-xs font-semibold text-[#2E5BFF] bg-blue-50 px-3 py-1 rounded-full">
                                Details
                             </button>
                        </div>
                    </div>
                ))}
            </div>
          </div>
        </FeatureCard>

        {/* Row 3: Smart Handoffs (Timeline) */}
        <FeatureCard 
          title="Smart Handoffs"
          description="Access AI-generated shift recaps, critical patient KPIs, and the actual audio of the doctor's handover briefing—all without leaving UnitSync."
          cta="Learn more"
        >
          <div className="w-full h-64 bg-white rounded-t-xl shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.1)] p-6 border border-b-0 border-slate-200 relative flex flex-col">
             <div className="flex justify-between items-center mb-6">
                 <div className="flex items-center space-x-3">
                     <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-white">
                         <Play className="w-4 h-4 fill-current ml-0.5" />
                     </div>
                     <div>
                         <div className="text-sm font-bold text-slate-900">Morning Handoff</div>
                         <div className="text-xs text-slate-500">Dr. Sarah • 07:00 AM</div>
                     </div>
                 </div>
                 <div className="text-xs font-mono text-slate-400">14:20</div>
             </div>

             {/* Waveform Visualization */}
             <div className="flex items-center justify-between space-x-1 h-12 mb-4 px-2">
                 {[40, 60, 30, 80, 50, 90, 40, 60, 70, 40, 30, 60, 40, 80, 50, 70, 40, 20].map((h, i) => (
                     <div
                        key={i}
                        className={`w-1.5 rounded-full ${i < 7 ? 'bg-[#2E5BFF]' : 'bg-slate-200'}`}
                        style={{
                            height: `${h}%`,
                            transform: `scaleY(${i < 7 ? 1 : 0.8})`
                        }}
                     ></div>
                 ))}
             </div>

             <div className="bg-slate-50 p-3 rounded-lg border border-slate-100">
                 <div className="flex items-start space-x-2">
                     <div className="mt-1 w-2 h-2 rounded-full bg-[#2E5BFF] flex-shrink-0 animate-pulse"></div>
                     <p className="text-xs text-slate-600 leading-snug">
                         <span className="font-bold text-slate-800">Summary:</span> ICU capacity at 90%. 3 discharges pending approval. Bed 4 requires cardio consult ASAP.
                     </p>
                 </div>
             </div>
          </div>
        </FeatureCard>

        {/* Row 3: Staffing Plans (Pie) */}
        <FeatureCard 
          title="Staffing Plans"
          description="Schedule recurring shift patterns for specialized teams. Create automated plans for residents, attendings, and nurses to ensure 24/7 coverage."
          cta="Learn more"
        >
           <div className="w-full h-64 bg-white rounded-t-xl shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.1)] p-6 border border-b-0 border-slate-200 relative flex flex-col items-center justify-center">
             <div className="absolute top-4 right-4">
                 <MoreHorizontal className="w-5 h-5 text-slate-400" />
             </div>

             <div className="flex items-center space-x-8">
                 {/* Donut Chart Representation */}
                 <div className="relative w-32 h-32">
                     <svg viewBox="0 0 36 36" className="w-full h-full transform -rotate-90">
                         {/* Circle Background */}
                         <path className="text-slate-100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="4" />
                         {/* Segment 1 */}
                         <path className="text-[#2E5BFF]" strokeDasharray="40, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="4" />
                         {/* Segment 2 */}
                         <path className="text-purple-500" strokeDasharray="25, 100" strokeDashoffset="-40" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="4" />
                     </svg>
                     <div className="absolute inset-0 flex flex-col items-center justify-center">
                         <span className="text-2xl font-bold text-slate-900">100%</span>
                         <span className="text-[10px] uppercase font-bold text-slate-400">Coverage</span>
                     </div>
                 </div>

                 {/* Legend */}
                 <div className="space-y-3">
                     <div className="flex items-center text-xs">
                         <div className="w-3 h-3 rounded bg-[#2E5BFF] mr-2"></div>
                         <span className="text-slate-600">Nurses (40%)</span>
                     </div>
                     <div className="flex items-center text-xs">
                         <div className="w-3 h-3 rounded bg-purple-500 mr-2"></div>
                         <span className="text-slate-600">Residents (25%)</span>
                     </div>
                     <div className="flex items-center text-xs">
                         <div className="w-3 h-3 rounded bg-slate-200 mr-2"></div>
                         <span className="text-slate-600">On Call (35%)</span>
                     </div>
                 </div>
             </div>
             
             <div className="mt-6 w-full bg-slate-50 rounded-lg p-2 text-center border border-slate-100">
                 <span className="text-xs font-semibold text-slate-500">Auto-Fill Enabled</span>
             </div>
           </div>
        </FeatureCard>

      </div>

      {/* Footer Promo */}
      <div className="mt-24 text-center max-w-2xl mx-auto">
         <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-6 animate-pulse">
            <Zap className="w-6 h-6 text-green-600 fill-current" />
         </div>
         <h3 className="text-3xl font-serif font-bold text-slate-900 mb-4">
             And up to 30% reduction in wait times
         </h3>
         <p className="text-slate-600 text-lg mb-2">
             Take advantage of every efficiency opportunity by making moves without waiting for bottlenecks to clear.
         </p>
         <p className="text-xs text-slate-400 uppercase tracking-wide font-semibold mt-4">
             Varies by department size.
         </p>
      </div>
    </section>
  );
};
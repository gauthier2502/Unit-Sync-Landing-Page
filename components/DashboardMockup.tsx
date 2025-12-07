import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Activity, Users, Clock, AlertCircle, Search, MoreHorizontal } from 'lucide-react';

const data = [
  { time: '08:00', inflow: 12, predicted: 15 },
  { time: '10:00', inflow: 25, predicted: 28 },
  { time: '12:00', inflow: 45, predicted: 40 },
  { time: '14:00', inflow: 38, predicted: 35 },
  { time: '16:00', inflow: 50, predicted: 55 },
  { time: '18:00', inflow: 40, predicted: 65 },
  { time: '20:00', inflow: 30, predicted: 45 },
];

export const DashboardMockup: React.FC = () => {
  return (
    <div className="relative w-full mx-auto group perspective-1000">
      {/* Background Glow */}
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000 group-hover:duration-200 will-change-transform"></div>
      
      {/* Main Container - Dark Mode Interface */}
      <div className="relative bg-[#0B1121] rounded-xl ring-1 ring-white/10 shadow-2xl overflow-hidden flex flex-col h-full">
        
        {/* Header Bar */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#151e32] border-b border-white/5 shrink-0">
          <div className="flex items-center space-x-2">
            <div className="flex space-x-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
            </div>
          </div>
          <div className="hidden sm:flex items-center bg-[#0B1121] rounded-md px-3 py-1 border border-white/5">
            <Search className="w-3 h-3 text-slate-500 mr-2" />
            <span className="text-[10px] text-slate-500">Search patients...</span>
          </div>
          <div className="flex items-center space-x-3">
             <div className="h-1.5 w-1.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]"></div>
             <div className="text-[10px] font-mono text-slate-400">v2.4 Live</div>
          </div>
        </div>

        {/* Responsive Content Grid */}
        <div className="p-4 sm:p-6 grid grid-cols-1 sm:grid-cols-12 gap-6 h-full">
          
          {/* Sidebar Stats: Row on Mobile, Column on Desktop */}
          <div className="sm:col-span-4 grid grid-cols-3 sm:grid-cols-1 gap-4 h-full">
            
            <div className="bg-[#151e32]/50 p-3 sm:p-4 rounded-lg border border-white/5 flex flex-col justify-between group/card hover:bg-[#151e32] transition-colors">
              <div className="flex items-center text-xs text-slate-400 mb-2">
                <Activity className="w-3.5 h-3.5 mr-2 text-[#2E5BFF]" /> <span className="hidden xs:inline">Load</span>
              </div>
              <div>
                <div className="text-lg sm:text-2xl font-bold text-white tracking-tight">84%</div>
                <div className="text-[10px] text-green-400 font-medium mt-1">✓ Capacity</div>
              </div>
            </div>

            <div className="bg-[#151e32]/50 p-3 sm:p-4 rounded-lg border border-white/5 flex flex-col justify-between group/card hover:bg-[#151e32] transition-colors">
              <div className="flex items-center text-xs text-slate-400 mb-2">
                <Users className="w-3.5 h-3.5 mr-2 text-[#2E5BFF]" /> <span className="hidden xs:inline">Queue</span>
              </div>
              <div>
                 <div className="text-lg sm:text-2xl font-bold text-white tracking-tight">12</div>
                 <div className="text-[10px] text-green-400 font-medium mt-1">↓ 15%</div>
              </div>
            </div>

             <div className="bg-[#151e32]/50 p-3 sm:p-4 rounded-lg border border-white/5 flex flex-col justify-between group/card hover:bg-[#151e32] transition-colors">
              <div className="flex items-center text-xs text-slate-400 mb-2">
                <Clock className="w-3.5 h-3.5 mr-2 text-orange-500" /> <span className="hidden xs:inline">Wait</span>
              </div>
              <div>
                <div className="text-lg sm:text-2xl font-bold text-white tracking-tight">24m</div>
                <div className="text-[10px] text-slate-500 font-medium mt-1">Avg</div>
              </div>
            </div>
          </div>

          {/* Main Chart Area */}
          <div className="sm:col-span-8 bg-[#151e32]/30 rounded-lg border border-white/5 p-4 sm:p-5 relative flex flex-col min-h-[250px] sm:min-h-0">
             <div className="flex justify-between items-center mb-6">
                <div className="flex items-center space-x-2">
                    <h4 className="text-sm font-medium text-slate-200">ED Inflow Prediction</h4>
                </div>
                <span className="px-2 py-0.5 rounded text-[10px] font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20">AI Active</span>
             </div>
             
             <div className="flex-1 w-full min-h-[180px]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={data}>
                    <defs>
                      <linearGradient id="colorPredicted" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#2E5BFF" stopOpacity={0.4}/>
                        <stop offset="95%" stopColor="#2E5BFF" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                    <XAxis dataKey="time" stroke="#64748b" fontSize={10} tickLine={false} axisLine={false} dy={10} />
                    <YAxis stroke="#64748b" fontSize={10} tickLine={false} axisLine={false} dx={-10} />
                    <Tooltip 
                        contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '8px', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.5)' }}
                        itemStyle={{ color: '#e2e8f0', fontSize: '12px' }}
                        labelStyle={{ color: '#94a3b8', fontSize: '10px', marginBottom: '4px' }}
                    />
                    <Area type="monotone" dataKey="predicted" stroke="#2E5BFF" strokeWidth={2} fillOpacity={1} fill="url(#colorPredicted)" />
                    <Area type="monotone" dataKey="inflow" stroke="#64748b" strokeWidth={1} strokeDasharray="4 4" fill="none" />
                  </AreaChart>
                </ResponsiveContainer>
             </div>

             {/* Integrated Alert - Bottom Left */}
             <div className="absolute bottom-4 left-4 right-4 sm:right-auto bg-[#0B1121]/90 backdrop-blur border border-red-500/30 p-3 rounded-lg flex items-center space-x-3 shadow-lg animate-fade-in-up">
                <div className="bg-red-500/10 p-1.5 rounded-full shrink-0">
                    <AlertCircle className="w-4 h-4 text-red-500" />
                </div>
                <div>
                    <div className="text-xs font-bold text-white">Surge Predicted: 18:00</div>
                    <div className="text-[10px] text-slate-400">Recommendation: Staff +2 Nurses</div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

import React, { useState, useEffect } from 'react';
import { Globe, MapPin, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

export default function GlobalHiringNetwork({ onRequestCallback }) {
  const [activeNotice, setActiveNotice] = useState(0);

  const notices = [
    { city: 'New York, USA', role: 'Senior Java & AI Lead', company: 'Fortune 500 Fintech', time: '1m ago' },
    { city: 'Toronto, Canada', role: 'Cloud Solutions Architect', roleSalary: '$165K/yr', company: 'Enterprise SaaS', time: '3m ago' },
    { city: 'London, UK', role: 'GenAI & LLM Specialist', company: 'Global Tech Corp', time: '5m ago' },
    { city: 'Frankfurt, Germany', role: 'DevOps & Kubernetes Lead', company: 'Automotive Giant', time: '8m ago' },
    { city: 'Sydney, Australia', role: 'Data Engineer + MLOps', company: 'HealthTech Pioneer', time: '12m ago' },
  ];

  const locations = [
    { name: 'USA', x: '24%', y: '38%', count: '4,200+ Hires' },
    { name: 'Canada', x: '22%', y: '25%', count: '1,800+ Hires' },
    { name: 'UK', x: '47%', y: '28%', count: '1,400+ Hires' },
    { name: 'Germany', x: '52%', y: '32%', count: '1,100+ Hires' },
    { name: 'India', x: '70%', y: '52%', count: '3,800+ Hires' },
    { name: 'Australia', x: '84%', y: '75%', count: '900+ Hires' },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveNotice((prev) => (prev + 1) % notices.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [notices.length]);

  return (
    <section className="py-20 bg-slate-900 text-white border-t border-slate-800 relative overflow-hidden">
      
      {/* Background Radial Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-indigo-600/10 rounded-full blur-[140px] animate-pulse-glow"></div>
      </div>

      <div className="container-main relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-indigo-300 text-xs font-extrabold mb-4 backdrop-blur-md">
            <Globe className="w-3.5 h-3.5 text-indigo-400" /> GLOBAL PLACEMENT FOOTPRINT
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
            Global Hiring <span className="text-indigo-400">Network</span>
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            Connecting enterprise clients across North America, Europe, and Asia-Pacific with elite technical talent.
          </p>
        </div>

        {/* Map Visualization Box */}
        <div className="bg-white/5 border border-white/10 rounded-[36px] p-8 sm:p-12 relative min-h-[420px] flex flex-col justify-between overflow-hidden shadow-2xl backdrop-blur-xl">
          
          {/* Top Live Notification Card Banner */}
          <div className="bg-indigo-600/30 border border-indigo-500/40 rounded-2xl p-4 max-w-md backdrop-blur-md animate-in fade-in slide-in-from-left-2 z-20">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-emerald-400 animate-ping"></div>
              <div>
                <p className="text-xs font-extrabold text-white">
                  Live Hire: {notices[activeNotice].role}
                </p>
                <p className="text-[10px] text-indigo-200">
                  Placed in {notices[activeNotice].city} • {notices[activeNotice].time}
                </p>
              </div>
            </div>
          </div>

          {/* Map Node Dots Visual */}
          <div className="relative w-full h-[260px] my-auto">
            {locations.map((loc, idx) => (
              <div 
                key={idx}
                style={{ left: loc.x, top: loc.y }}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer"
              >
                {/* Pulsing Node */}
                <div className="w-4 h-4 rounded-full bg-indigo-500 flex items-center justify-center relative">
                  <div className="absolute inset-0 rounded-full bg-indigo-400 animate-ping opacity-75"></div>
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                </div>

                {/* Hover Label Card */}
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-slate-900 border border-slate-700 text-white rounded-xl px-3 py-1.5 text-[10px] font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg z-30 pointer-events-none">
                  <span className="text-indigo-400 font-extrabold">{loc.name}</span> • {loc.count}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Action Footer */}
          <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 z-20">
            <p className="text-xs font-bold text-slate-300">
              🌍 Active Candidate Networks in 14+ Countries Worldwide
            </p>
            <button 
              onClick={onRequestCallback}
              className="px-8 py-3.5 rounded-full btn-blue text-xs font-extrabold inline-flex items-center gap-2 border-0 cursor-pointer shadow-lg"
            >
              Hire Global Talent <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}

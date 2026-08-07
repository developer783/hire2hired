import React from 'react';
import { Users, Briefcase, TrendingUp, Clock } from 'lucide-react';

export default function ImpactBanner() {
  const metrics = [
    { 
      icon: <Users className="w-6 h-6 text-indigo-600 flex-shrink-0" />,
      value: "10K+", 
      label: "Active Consultants" 
    },
    { 
      icon: <Briefcase className="w-6 h-6 text-indigo-600 flex-shrink-0" />,
      value: "500+", 
      label: "Companies Hiring" 
    },
    { 
      icon: <TrendingUp className="w-6 h-6 text-indigo-600 flex-shrink-0" />,
      value: "95%", 
      label: "Match Success Rate" 
    },
    { 
      icon: <Clock className="w-6 h-6 text-indigo-600 flex-shrink-0" />,
      value: "48hrs", 
      label: "Avg. Time to Match" 
    },
  ];

  return (
    <section className="py-14 bg-slate-50 border-y border-slate-200/80">
      <div className="container-main">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 md:divide-x md:divide-slate-200">
          {metrics.map((m, idx) => (
            <div key={idx} className="flex items-center justify-center gap-4 px-4 py-2 animate-on-scroll">
              <div className="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center shadow-2xs">
                {m.icon}
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight leading-none">
                  {m.value}
                </p>
                <p className="text-xs font-bold text-slate-500 mt-1">
                  {m.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

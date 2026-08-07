import React from 'react';
import { Building2, Users, Sparkles, Calendar, Award, Clock, TrendingUp, Activity } from 'lucide-react';

export default function LiveEnterpriseDashboard() {
  const metrics = [
    { title: 'Active Employers', value: '520+', icon: <Building2 className="w-5 h-5 text-indigo-600" />, trend: '+14% this month', color: 'bg-indigo-50 border-indigo-100' },
    { title: 'Verified Candidates', value: '14,300', icon: <Users className="w-5 h-5 text-purple-600" />, trend: '+1,200 this week', color: 'bg-purple-50 border-purple-100' },
    { title: 'AI Matches Today', value: '186', icon: <Sparkles className="w-5 h-5 text-cyan-600" />, trend: '98% accuracy', color: 'bg-cyan-50 border-cyan-100' },
    { title: 'Interviews Scheduled', value: '37', icon: <Calendar className="w-5 h-5 text-amber-600" />, trend: 'Active today', color: 'bg-amber-50 border-amber-100' },
    { title: 'Offers Accepted', value: '11', icon: <Award className="w-5 h-5 text-emerald-600" />, trend: '100% retention', color: 'bg-emerald-50 border-emerald-100' },
    { title: 'Avg. Hiring Time', value: '46 Hours', icon: <Clock className="w-5 h-5 text-rose-600" />, trend: 'Industry avg: 45 days', color: 'bg-rose-50 border-rose-100' },
  ];

  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200/80">
      <div className="container-main">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-slate-700 text-xs font-extrabold mb-4 shadow-2xs">
            <Activity className="w-3.5 h-3.5 text-indigo-600" /> REAL-TIME ANALYTICS
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-slate-900 tracking-tight">
            Live Enterprise <span className="text-indigo-600">Analytics Dashboard</span>
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            Real-time platform metrics tracking active talent sourcing, automated AI screening, and accelerated contract placements nationwide.
          </p>
        </div>

        {/* 6 Grid Metric Widgets */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
          {metrics.map((m, idx) => (
            <div key={idx} className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs hover-card-warm flex flex-col justify-between space-y-4">
              <div className="flex items-center justify-between">
                <div className={`w-12 h-12 rounded-2xl ${m.color} border flex items-center justify-center`}>
                  {m.icon}
                </div>
                <span className="text-[10px] font-extrabold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center gap-1">
                  <TrendingUp className="w-3 h-3" /> {m.trend}
                </span>
              </div>

              <div>
                <p className="text-xs font-extrabold text-slate-400 uppercase tracking-wider">
                  {m.title}
                </p>
                <p className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 mt-1 tracking-tight">
                  {m.value}
                </p>
              </div>

              {/* Sparkline Visual Simulation */}
              <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                <div className="bg-indigo-600 h-full w-[78%] rounded-full"></div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

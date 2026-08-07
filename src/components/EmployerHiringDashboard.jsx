import React, { useState, useEffect } from 'react';
import { Building2, Users, Search, CheckCircle2, Clock, Filter, ArrowRight, ShieldCheck } from 'lucide-react';

export default function EmployerHiringDashboard({ onRequestCallback }) {
  const [activity, setActivity] = useState([
    { title: 'Senior Java & AI Developer', candidate: 'Raoul K.', status: 'Offer Accepted ($165K)', time: '2m ago' },
    { title: 'Data Engineer + MLOps', candidate: 'David L.', status: 'Technical Vetting Passed', time: '12m ago' },
    { title: 'AI Applications Lead', candidate: 'Sarah M.', status: 'Interview Confirmed', time: '24m ago' },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActivity((prev) => [
        { title: 'Full Stack Python Developer', candidate: `Candidate #${Math.floor(100 + Math.random() * 900)}`, status: 'Matched via AI Engine', time: 'Just now' },
        ...prev.slice(0, 2)
      ]);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-white border-b border-slate-200/80">
      <div className="container-main">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
          <p className="text-xs font-bold uppercase tracking-widest text-indigo-600 mb-2">
            ENTERPRISE RECRUITMENT SOFTWARE UI
          </p>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-slate-900 tracking-tight">
            Employer <span className="text-indigo-600">Hiring Dashboard</span>
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            Experience the automated SaaS portal used by hiring managers to review pre-vetted candidate shortlists, track interviews, and complete 48-hour hires.
          </p>
        </div>

        {/* Enterprise SaaS Window UI Frame */}
        <div className="bg-slate-900 rounded-[36px] p-6 sm:p-10 border border-slate-800 shadow-2xl space-y-8 text-white">
          
          {/* Top Window Bar */}
          <div className="flex items-center justify-between pb-6 border-b border-slate-800">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-rose-500"></div>
                <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
              </div>
              <span className="text-xs font-extrabold text-slate-400 pl-2 border-l border-slate-800">
                Hire2Hired Enterprise Portal v4.2
              </span>
            </div>

            <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
              ● Live Sync: Connected
            </span>
          </div>

          {/* SaaS Stat Widgets Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
              <p className="text-[10px] font-extrabold text-slate-400 uppercase">Open Positions</p>
              <p className="text-2xl font-display font-extrabold text-white mt-1">18 Active Roles</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
              <p className="text-[10px] font-extrabold text-slate-400 uppercase">Candidate Pipeline</p>
              <p className="text-2xl font-display font-extrabold text-indigo-400 mt-1">42 Shortlisted</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
              <p className="text-[10px] font-extrabold text-slate-400 uppercase">Technical Evaluation</p>
              <p className="text-2xl font-display font-extrabold text-emerald-400 mt-1">98.4% Pass Rate</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
              <p className="text-[10px] font-extrabold text-slate-400 uppercase">Placement Success</p>
              <p className="text-2xl font-display font-extrabold text-purple-400 mt-1">99.1% Retention</p>
            </div>
          </div>

          {/* Activity Feed */}
          <div className="space-y-3 pt-2">
            <p className="text-xs font-extrabold uppercase tracking-wider text-slate-400">Live Recent Activity Feed</p>
            <div className="space-y-2">
              {activity.map((act, idx) => (
                <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center justify-between transition-all">
                  <div className="flex items-center gap-3">
                    <ShieldCheck className="w-5 h-5 text-indigo-400" />
                    <div>
                      <p className="text-xs font-extrabold text-white">{act.title}</p>
                      <p className="text-[11px] text-slate-300">Candidate: {act.candidate}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-bold text-emerald-400">{act.status}</span>
                    <p className="text-[10px] text-slate-400 mt-0.5">{act.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Action Bar */}
          <div className="pt-4 text-center">
            <button 
              onClick={onRequestCallback}
              className="px-8 py-4 rounded-full btn-blue text-sm font-extrabold inline-flex items-center gap-2 border-0 cursor-pointer shadow-lg"
            >
              Request Employer Portal Access <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}

import React from 'react';
import { Building2, ShieldCheck, UserCheck, Clock, ArrowRight, CheckCircle } from 'lucide-react';

export default function EmployerGuarantee({ onRequestCallback }) {
  const benefits = [
    {
      icon: <Clock className="w-5 h-5 text-indigo-400" />,
      title: "< 48-Hour Rapid Match",
      desc: "Pre-screened consultant candidates matched to your exact tech requirements within 48 hours."
    },
    {
      icon: <UserCheck className="w-5 h-5 text-indigo-400" />,
      title: "Top 5% Pre-Vetted Pool",
      desc: "Rigorous technical assessments, system design evaluations, and soft skills screening."
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-indigo-400" />,
      title: "High-Retention Guarantee",
      desc: "Dedicated account managers and risk-free replacement guarantees for total peace of mind."
    },
    {
      icon: <Building2 className="w-5 h-5 text-indigo-400" />,
      title: "Flexible Staffing Models",
      desc: "Staff Augmentation, Direct Hire, Contract-to-Hire, and Dedicated Engineering Teams."
    }
  ];

  return (
    <section id="employers" className="py-20 md:py-28 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container-main relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column */}
          <div className="space-y-6">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wider bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
              For Enterprise Employers & Hiring Managers
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white leading-tight">
              Hire Top Consultant Talent — <span className="text-indigo-400">Fast & Reliable</span>
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Stop waiting months to fill critical engineering roles. Hire2Hired connects leading enterprises with pre-vetted, top 5% technical consultants through AI-powered matching and dedicated human support.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 pt-3">
              {benefits.map((b, idx) => (
                <div key={idx} className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-5 space-y-2">
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center">
                    {b.icon}
                  </div>
                  <h4 className="font-bold text-white text-base">{b.title}</h4>
                  <p className="text-slate-400 text-xs leading-relaxed">{b.desc}</p>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <button 
                onClick={onRequestCallback}
                className="px-8 py-4 rounded-2xl glow-btn font-extrabold text-sm flex items-center gap-2.5 border-0 cursor-pointer shadow-lg hover:scale-105 transition-transform"
              >
                Request Consultant Talent <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Right Column: Spotlight Box */}
          <div className="bg-slate-800/90 border border-slate-700 rounded-3xl p-8 md:p-10 shadow-2xl space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-indigo-600 text-white flex items-center justify-center font-extrabold text-xl font-display shadow-md">
                VP
              </div>
              <div>
                <h4 className="font-bold text-white text-lg">Enterprise Client Spotlight</h4>
                <p className="text-indigo-400 text-xs font-semibold mt-0.5">Director of Talent Acquisition @ US Enterprise</p>
              </div>
            </div>

            <p className="text-slate-300 text-base italic leading-relaxed">
              "Hire2Hired matched us with 4 senior cloud consultants within 48 hours. Their AI matching accuracy combined with dedicated advisor screening cut our hiring timeline by 70%."
            </p>

            <div className="pt-6 border-t border-slate-700/80 flex items-center justify-between text-xs text-slate-400 font-bold">
              <span className="flex items-center gap-1.5 text-emerald-400">
                <CheckCircle className="w-4 h-4" /> 98% Placement Retention
              </span>
              <span>500+ Active Enterprise Clients</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

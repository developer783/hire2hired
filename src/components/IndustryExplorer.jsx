import React, { useState } from 'react';
import { Building2, Code2, Heart, DollarSign, ShieldAlert, Cloud, ArrowRight } from 'lucide-react';

export default function IndustryExplorer({ onOpenApply }) {
  const [selectedIndustry, setSelectedIndustry] = useState(0);

  const industries = [
    {
      title: 'Technology & AI',
      icon: <Code2 className="w-6 h-6 text-indigo-600" />,
      stats: { candidates: '5,400+', avgSalary: '$170K', hiringTime: '36 Hours' },
      techStack: ['Java', 'Python', 'React', 'FastAPI', 'LLMs', 'Kubernetes'],
      openJobs: '180+ Roles',
      story: 'Fortune 500 tech firm hired 12 Senior AI Engineers in 48 hours.'
    },
    {
      title: 'Finance & Fintech',
      icon: <DollarSign className="w-6 h-6 text-emerald-600" />,
      stats: { candidates: '3,200+', avgSalary: '$165K', hiringTime: '48 Hours' },
      techStack: ['Spring Boot', 'Big Data', 'Snowflake', 'Microservices', 'SQL'],
      openJobs: '140+ Roles',
      story: 'National investment bank onboarded 8 Quantitative Data Engineers.'
    },
    {
      title: 'Healthcare & Biotech',
      icon: <Heart className="w-6 h-6 text-rose-600" />,
      stats: { candidates: '2,100+', avgSalary: '$158K', hiringTime: '42 Hours' },
      techStack: ['Python', 'HIPAA Cloud', 'AWS Healthcare', 'Node.js', 'React'],
      openJobs: '95+ Roles',
      story: 'Leading health network placed 6 Senior HealthTech Developers.'
    },
    {
      title: 'Cybersecurity & Defense',
      icon: <ShieldAlert className="w-6 h-6 text-amber-600" />,
      stats: { candidates: '1,900+', avgSalary: '$175K', hiringTime: '48 Hours' },
      techStack: ['Zero Trust', 'Python', 'SIEM', 'AWS Security', 'Go'],
      openJobs: '110+ Roles',
      story: 'Defense contractor filled 5 Cyber Security Architects in 3 days.'
    },
    {
      title: 'Cloud Infrastructure',
      icon: <Cloud className="w-6 h-6 text-cyan-600" />,
      stats: { candidates: '2,800+', avgSalary: '$168K', hiringTime: '38 Hours' },
      techStack: ['Terraform', 'AWS / Azure', 'Docker', 'Kubernetes', 'CI/CD'],
      openJobs: '160+ Roles',
      story: 'SaaS unicorn scaled cloud team with 10 DevOps Engineers.'
    }
  ];

  const current = industries[selectedIndustry];

  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200/80">
      <div className="container-main">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
          <p className="text-xs font-bold uppercase tracking-widest text-indigo-600 mb-2">
            CROSS-INDUSTRY STAFFING
          </p>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-slate-900 tracking-tight">
            Industry <span className="text-indigo-600">Explorer</span>
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            Explore dedicated hiring pipelines, candidate pools, and active contract opportunities customized by industry sector.
          </p>
        </div>

        {/* Industry Card Filter Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 mb-12">
          {industries.map((ind, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedIndustry(idx)}
              className={`p-5 rounded-3xl border transition-all text-center cursor-pointer flex flex-col items-center gap-3 ${
                selectedIndustry === idx 
                  ? 'bg-white border-indigo-600 shadow-xl scale-105 ring-4 ring-indigo-100' 
                  : 'bg-white/60 border-slate-200 hover:border-indigo-300 hover:bg-white'
              }`}
            >
              <div className="w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center">
                {ind.icon}
              </div>
              <span className="text-xs font-extrabold text-slate-900 leading-tight">
                {ind.title}
              </span>
            </button>
          ))}
        </div>

        {/* Dynamic Industry Details Panel */}
        <div className="bg-white rounded-[36px] p-8 sm:p-12 border border-slate-200 shadow-xl space-y-8 animate-in fade-in">
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-100 pb-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center">
                {current.icon}
              </div>
              <div>
                <h3 className="font-display font-extrabold text-2xl text-slate-900">{current.title}</h3>
                <p className="text-xs text-indigo-600 font-bold">{current.openJobs} Active Contracts</p>
              </div>
            </div>

            <button 
              onClick={() => onOpenApply(`Industry: ${current.title}`)}
              className="px-6 py-3 rounded-full btn-blue text-xs font-extrabold flex items-center gap-2 border-0 cursor-pointer shadow-md"
            >
              Explore {current.title} Jobs <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* 3 Metric Box Breakdown */}
          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-4">
              <p className="text-[10px] font-extrabold text-slate-400 uppercase">Verified Talent Pool</p>
              <p className="text-2xl font-display font-extrabold text-slate-900 mt-1">{current.stats.candidates}</p>
            </div>
            <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-4">
              <p className="text-[10px] font-extrabold text-slate-400 uppercase">Avg. Salary</p>
              <p className="text-2xl font-display font-extrabold text-indigo-600 mt-1">{current.stats.avgSalary}</p>
            </div>
            <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-4">
              <p className="text-[10px] font-extrabold text-slate-400 uppercase">Match Speed</p>
              <p className="text-2xl font-display font-extrabold text-emerald-600 mt-1">{current.stats.hiringTime}</p>
            </div>
          </div>

          {/* Tech Stack Chips & Case Study */}
          <div className="space-y-4">
            <div>
              <p className="text-xs font-extrabold text-slate-400 uppercase tracking-wider mb-2">Industry Technology Stack</p>
              <div className="flex flex-wrap gap-2">
                {current.techStack.map((tech, i) => (
                  <span key={i} className="px-3 py-1 rounded-full text-xs font-bold bg-indigo-50 text-indigo-700 border border-indigo-100">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-slate-900 text-white rounded-2xl p-4 border border-slate-800 flex items-center justify-between text-xs font-bold">
              <span>🏆 Recent Success Story: {current.story}</span>
              <span className="text-emerald-400 font-extrabold">Verified Hire</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

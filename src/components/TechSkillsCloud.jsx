import React, { useState } from 'react';
import { Cpu, DollarSign, TrendingUp, Building2, Briefcase, ArrowRight } from 'lucide-react';

export default function TechSkillsCloud({ onOpenApply }) {
  const [activeSkill, setActiveSkill] = useState(0);

  const skills = [
    { name: 'Java & Spring Boot', category: 'Backend', salary: '$165,000 / yr', demand: '98% Very High', companies: '180+ Partners', positions: '340+ Open Roles', icon: '☕' },
    { name: 'Python & GenAI', category: 'AI & Data', salary: '$175,000 / yr', demand: '99% Peak Demand', companies: '210+ Partners', positions: '420+ Open Roles', icon: '🐍' },
    { name: 'React & Next.js', category: 'Frontend', salary: '$155,000 / yr', demand: '96% High', companies: '160+ Partners', positions: '290+ Open Roles', icon: '⚡' },
    { name: 'AWS & Cloud Infrastructure', category: 'DevOps', salary: '$170,000 / yr', demand: '97% High Demand', companies: '190+ Partners', positions: '380+ Open Roles', icon: '☁️' },
    { name: 'Data Engineering & Spark', category: 'Big Data', salary: '$168,000 / yr', demand: '96% High', companies: '140+ Partners', positions: '260+ Open Roles', icon: '⚙️' },
    { name: 'Docker & Kubernetes', category: 'DevOps', salary: '$165,000 / yr', demand: '95% High', companies: '150+ Partners', positions: '230+ Open Roles', icon: '🐳' },
    { name: 'LLMs & Prompt Engineering', category: 'GenAI', salary: '$180,000 / yr', demand: '99% Extreme', companies: '130+ Partners', positions: '310+ Open Roles', icon: '🤖' },
    { name: 'QA Automation & Cypress', category: 'Testing', salary: '$145,000 / yr', demand: '93% High', companies: '120+ Partners', positions: '190+ Open Roles', icon: '🧪' },
  ];

  return (
    <section className="py-20 bg-white border-b border-slate-200/80">
      <div className="container-main">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
          <p className="text-xs font-bold uppercase tracking-widest text-indigo-600 mb-2">
            IN-DEMAND ENTERPRISE STACK
          </p>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-slate-900 tracking-tight">
            Technology <span className="gradient-text-animated">Skills Cloud</span>
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            Hover over any technical domain to view real-time market demand, average salary benchmarks, and open contract roles.
          </p>
        </div>

        {/* Floating Skill Chips Grid */}
        <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto mb-12">
          {skills.map((s, idx) => (
            <button
              key={idx}
              onMouseEnter={() => setActiveSkill(idx)}
              onClick={() => setActiveSkill(idx)}
              className={`px-5 py-3 rounded-full text-sm font-extrabold transition-all border cursor-pointer flex items-center gap-2 ${
                activeSkill === idx 
                  ? 'bg-indigo-600 text-white border-indigo-600 shadow-lg scale-105 ring-4 ring-indigo-200' 
                  : 'bg-slate-50 text-slate-700 border-slate-200 hover:border-indigo-400 hover:bg-slate-100'
              }`}
            >
              <span>{s.icon}</span>
              <span>{s.name}</span>
            </button>
          ))}
        </div>

        {/* Expanded Floating Skill Details Card */}
        <div className="bg-slate-900 text-white rounded-[36px] p-8 max-w-3xl mx-auto border border-slate-800 shadow-2xl space-y-6 animate-in fade-in slide-in-from-bottom-2">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div className="flex items-center gap-3">
              <span className="text-3xl">{skills[activeSkill].icon}</span>
              <div>
                <h3 className="font-display font-extrabold text-2xl text-white">
                  {skills[activeSkill].name}
                </h3>
                <p className="text-xs text-indigo-400 font-bold uppercase tracking-wider">
                  Category: {skills[activeSkill].category}
                </p>
              </div>
            </div>
            <span className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
              {skills[activeSkill].demand}
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
              <p className="text-[10px] font-extrabold text-slate-400 uppercase">Avg. Salary</p>
              <p className="text-lg font-display font-extrabold text-white mt-1">{skills[activeSkill].salary}</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
              <p className="text-[10px] font-extrabold text-slate-400 uppercase">Market Demand</p>
              <p className="text-lg font-display font-extrabold text-emerald-400 mt-1">{skills[activeSkill].demand.split(' ')[0]}</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
              <p className="text-[10px] font-extrabold text-slate-400 uppercase">Hiring Partners</p>
              <p className="text-lg font-display font-extrabold text-cyan-400 mt-1">{skills[activeSkill].companies}</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
              <p className="text-[10px] font-extrabold text-slate-400 uppercase">Open Positions</p>
              <p className="text-lg font-display font-extrabold text-purple-400 mt-1">{skills[activeSkill].positions}</p>
            </div>
          </div>

          <button 
            onClick={() => onOpenApply(skills[activeSkill].name)}
            className="w-full py-4 rounded-full btn-blue text-sm font-extrabold flex items-center justify-center gap-2 border-0 cursor-pointer shadow-md"
          >
            Apply For {skills[activeSkill].name} Roles <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}

import React, { useState } from 'react';
import { 
  Building2, Users, Search, BarChart2, Target, CheckCircle, 
  Database, LogIn, ArrowRight, ShieldCheck, Zap, Sparkles, 
  Clock, Award, ChevronRight, Home, CheckCircle2, TrendingUp,
  FileText, Cpu, UserCheck
} from 'lucide-react';
import employersHeroImg from '../assets/employers_hero.png';

export default function EmployersOverviewPage({ onNavigate, onRequestCallback, isFullPage = true }) {
  const [activeTab, setActiveTab] = useState('all');
  const [teamSize, setTeamSize] = useState(5);

  const services = [
    {
      id: 'sourcing',
      title: "AI Talent Sourcing",
      icon: Search,
      color: "text-indigo-600 bg-indigo-50 border-indigo-200",
      badge: "CORE ENGINE",
      desc: "Our neural matching algorithm scans 50,000+ pre-vetted engineers across 120+ technical skill parameters to present top candidates in 48 hours."
    },
    {
      id: 'analytics',
      title: "Predictive Hiring Analytics",
      icon: BarChart2,
      color: "text-emerald-600 bg-emerald-50 border-emerald-200",
      badge: "DATA-DRIVEN",
      desc: "Leverage predictive data points on candidate longevity, past codebase velocity, and project success metrics for risk-free hiring."
    },
    {
      id: 'screening',
      title: "Rapid Screening & Shortlisting",
      icon: Target,
      color: "text-amber-600 bg-amber-50 border-amber-200",
      badge: "48-HR SLA",
      desc: "Automated live code execution, system design evaluations, and video interview scorecards delivered straight to your hiring portal."
    },
    {
      id: 'culture',
      title: "Cultural Fit Analysis",
      icon: Users,
      color: "text-purple-600 bg-purple-50 border-purple-200",
      badge: "ALIGNMENT",
      desc: "Ensure seamless integration into your team's workflow, agile cadences, communication tools, and timezones."
    },
    {
      id: 'recruitment',
      title: "End-to-End Recruitment",
      icon: CheckCircle,
      color: "text-sky-600 bg-sky-50 border-sky-200",
      badge: "FULL SERVICE",
      desc: "From initial spec definition to contract execution, background screening, and onboarding management — we handle everything."
    },
    {
      id: 'pipeline',
      title: "Talent Pipeline Building",
      icon: Database,
      color: "text-rose-600 bg-rose-50 border-rose-200",
      badge: "ON-DEMAND",
      desc: "Maintain a dedicated pool of pre-screened backup engineers ready to deploy within 24 hours when project needs expand."
    }
  ];

  // ROI Calculator Math
  const daysSaved = 40;
  const costSavingsPct = 45;
  const estimatedHoursSaved = teamSize * 120;

  return (
    <div className={`bg-[#fafbfd] ${isFullPage ? 'pt-24 pb-20' : 'py-20 md:py-28'} border-b border-slate-200/80 min-h-[85vh]`}>
      <div className="container-main space-y-16">
        
        {/* Full Page Breadcrumbs */}
        {isFullPage && (
          <div className="max-w-6xl mx-auto flex items-center gap-2 text-xs font-bold text-slate-500">
            <a href="#home" onClick={(e) => { e.preventDefault(); onNavigate('home'); }} className="flex items-center gap-1 text-slate-600 hover:text-indigo-600 no-underline">
              <Home className="w-3.5 h-3.5" /> Home
            </a>
            <ChevronRight className="w-3 h-3 text-slate-400" />
            <span className="text-slate-600">Employers</span>
            <ChevronRight className="w-3 h-3 text-slate-400" />
            <span className="text-indigo-600 font-extrabold">Overview</span>
          </div>
        )}

        {/* Hero Section */}
        <div className="max-w-6xl mx-auto bg-gradient-to-br from-slate-900 via-slate-950 to-indigo-950 rounded-3xl p-8 sm:p-12 text-white shadow-2xl overflow-hidden border border-slate-800 relative">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 text-xs font-extrabold uppercase tracking-wider">
                <Building2 className="w-3.5 h-3.5" /> FOR ENTERPRISE & GROWING TEAMS
              </div>

              <div className="space-y-3">
                <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-white leading-tight">
                  Transform Hiring with <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-sky-300">
                    AI Talent Matching
                  </span>
                </h1>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
                  Cut time-to-hire from 42 days down to 48 hours. Hire pre-vetted senior software engineers, architects, and IT consultants with zero upfront risk.
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/10">
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-indigo-400">48 Hrs</div>
                  <div className="text-xs text-slate-400 font-medium">Avg Delivery SLA</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400">98.4%</div>
                  <div className="text-xs text-slate-400 font-medium">Trial Retention</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-sky-400">14 Days</div>
                  <div className="text-xs text-slate-400 font-medium">Risk-Free Trial</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 pt-2">
                <button 
                  onClick={() => onNavigate('bookconsultation')}
                  className="px-7 py-3.5 rounded-xl btn-blue text-xs font-extrabold flex items-center gap-2 border-0 cursor-pointer shadow-md hover:scale-105 transition-transform"
                >
                  Book Employer Consultation <ArrowRight className="w-4 h-4" />
                </button>

                <button 
                  onClick={() => onNavigate('employer-how-it-works')}
                  className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-extrabold border border-white/15 cursor-pointer transition"
                >
                  How It Works →
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center">
              <div className="relative rounded-3xl overflow-hidden border border-slate-800 shadow-2xl max-w-sm group">
                <img 
                  src={employersHeroImg} 
                  alt="Employers Overview" 
                  className="w-full h-auto object-cover rounded-3xl group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 text-xs text-white flex items-center gap-3">
                  <UserCheck className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                  <div>
                    <div className="font-extrabold text-white">50,000+ Pre-Vetted Talent</div>
                    <div className="text-[10px] text-slate-300">Ready for instant deployment</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* 6 Employer Service Modules */}
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-extrabold uppercase tracking-wider text-indigo-600">END-TO-END HIRING SOLUTIONS</span>
            <h2 className="text-3xl font-extrabold text-slate-900">Comprehensive Employer Services</h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto font-medium">
              Designed for fast-growing startups, Fortune 500 enterprises, and IT agencies scaling their engineering capacity.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => {
              const ServiceIcon = s.icon;
              return (
                <div key={s.id} className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs hover:border-indigo-400 hover:shadow-lg transition space-y-4">
                  <div className="flex items-center justify-between">
                    <div className={`w-12 h-12 rounded-2xl ${s.color} flex items-center justify-center font-bold shadow-xs`}>
                      <ServiceIcon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-extrabold bg-slate-100 text-slate-600 px-2.5 py-1 rounded-full border border-slate-200">
                      {s.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-extrabold text-slate-900">{s.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed font-medium mt-2">{s.desc}</p>
                  </div>

                  <button 
                    onClick={() => onNavigate('bookconsultation')}
                    className="w-full py-2.5 rounded-xl bg-slate-900 hover:bg-indigo-600 text-white text-xs font-extrabold border-0 cursor-pointer transition flex items-center justify-center gap-1.5 shadow-xs"
                  >
                    Request {s.title} <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Interactive Employer ROI Calculator */}
        <div className="max-w-6xl mx-auto bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm space-y-8">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-extrabold uppercase tracking-wider text-indigo-600">INTERACTIVE HIRING CALCULATOR</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Calculate Your Employer Hiring Savings</h2>
              <p className="text-xs sm:text-sm text-slate-600 font-medium">
                Traditional tech hiring takes 42+ days and thousands in recruitment agency fees. See how much time and money Hire2Hired saves your team.
              </p>

              {/* Slider Input */}
              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-3">
                <div className="flex items-center justify-between text-xs font-extrabold text-slate-900">
                  <span>Number of Engineers to Hire:</span>
                  <span className="text-indigo-600 text-lg font-extrabold bg-indigo-50 px-3 py-1 rounded-xl border border-indigo-200">{teamSize} Engineers</span>
                </div>
                <input 
                  type="range" 
                  min="1" 
                  max="25" 
                  value={teamSize} 
                  onChange={(e) => setTeamSize(parseInt(e.target.value))}
                  className="w-full h-2 bg-indigo-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                />
                <div className="flex justify-between text-[10px] text-slate-400 font-bold">
                  <span>1 Engineer</span>
                  <span>10 Engineers</span>
                  <span>25 Engineers</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 bg-gradient-to-br from-slate-900 to-indigo-950 text-white rounded-3xl p-8 shadow-xl space-y-6">
              <div className="grid grid-cols-2 gap-4 border-b border-white/10 pb-6">
                <div>
                  <div className="text-xs text-slate-400 font-bold uppercase">Time Saved</div>
                  <div className="text-3xl font-extrabold text-emerald-400 mt-1">{daysSaved * teamSize} Days</div>
                  <div className="text-[10px] text-slate-300 mt-0.5">vs 42-day market average</div>
                </div>

                <div>
                  <div className="text-xs text-slate-400 font-bold uppercase">Cost Reduction</div>
                  <div className="text-3xl font-extrabold text-indigo-400 mt-1">{costSavingsPct}% OFF</div>
                  <div className="text-[10px] text-slate-300 mt-0.5">vs standard headhunter fees</div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="text-xs text-slate-300 font-bold">Engineering Hours Saved in Sourcing:</div>
                <div className="text-xl font-extrabold text-white">{estimatedHoursSaved.toLocaleString()} Hours</div>
              </div>

              <button 
                onClick={() => onNavigate('bookconsultation')}
                className="w-full py-3.5 rounded-xl btn-blue text-xs font-extrabold flex items-center justify-center gap-2 border-0 cursor-pointer shadow-md hover:scale-105 transition"
              >
                Claim Your Employer Savings →
              </button>
            </div>

          </div>
        </div>

        {/* Employer Portal Access Card */}
        <div className="max-w-6xl mx-auto bg-gradient-to-r from-slate-900 to-indigo-950 rounded-3xl p-8 sm:p-12 text-white border border-slate-800 shadow-2xl flex flex-wrap items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-400 flex items-center gap-1">
              <ShieldCheck className="w-4 h-4" /> SECURE EMPLOYER PORTAL
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Already an Enterprise Employer Partner?</h2>
            <p className="text-xs sm:text-sm text-slate-300 font-medium">
              Access active hiring pipelines, review candidate video scorecards, and manage contract billing directly from your employer dashboard.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <button 
              onClick={() => onNavigate('employer-login')}
              className="px-6 py-3.5 rounded-xl bg-white text-slate-900 hover:bg-slate-100 text-xs font-extrabold border-0 cursor-pointer shadow-md transition flex items-center gap-2"
            >
              <LogIn className="w-4 h-4 text-indigo-600" /> Employer Login
            </button>
            <button 
              onClick={() => onNavigate('bookconsultation')}
              className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-extrabold border border-white/15 cursor-pointer transition"
            >
              Book 15-Min Demo
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

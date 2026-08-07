import React, { useState, useEffect } from 'react';
import { 
  Menu, X, ChevronDown, BookOpen, Lightbulb, Award, Briefcase, 
  Target, GitMerge, FileText, MessageSquare, CheckCircle, UserCheck,
  TrendingUp, Search, BarChart2, Users, Database, LogIn, 
  Code2, DollarSign, Heart, Megaphone, Wrench, Building2, HelpCircle, 
  ArrowRight, Phone, Sparkles
} from 'lucide-react';

export default function Navbar({ onRequestCallback }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar-sticky ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container-main flex items-center justify-between h-[84px]">
        
        {/* Brand Logo */}
        <a href="/" className="flex items-center gap-2.5 no-underline group flex-shrink-0">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-blue-600 flex items-center justify-center text-white font-extrabold text-xl shadow-md group-hover:scale-105 transition-transform">
            H2
          </div>
          <span className="font-display font-extrabold text-2xl tracking-tight text-slate-900">
            Hire<span className="text-indigo-600">2</span>Hired
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center gap-5">
          
          {/* 1. COURSES MEGA DROPDOWN */}
          <div 
            className="relative"
            onMouseEnter={() => setActiveDropdown('courses')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className={`flex items-center gap-1 px-3 py-2 rounded-xl text-[14px] font-bold transition-all border-0 cursor-pointer ${
              activeDropdown === 'courses' ? 'bg-[#262121] text-white' : 'text-slate-700 hover:text-indigo-600'
            }`}>
              Courses
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'courses' ? 'rotate-180 text-white' : 'text-slate-400'}`} />
            </button>

            {activeDropdown === 'courses' && (
              <div className="absolute top-full left-0 w-[580px] bg-[#262121] text-white rounded-3xl shadow-2xl p-6 z-50 animate-in fade-in slide-in-from-top-2 border border-slate-800 space-y-3">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400 px-2">Job-Ready AI & Tech Bootcamps</p>
                <div className="grid grid-cols-2 gap-3">
                  <a href="#services" className="flex items-start gap-3 p-3 rounded-2xl hover:bg-white/10 transition no-underline text-white">
                    <span className="text-xl">☕</span>
                    <div>
                      <div className="text-sm font-bold flex items-center gap-2">
                        Java + AI Bootcamp
                        <span className="text-[9px] bg-indigo-500/20 text-indigo-300 px-2 py-0.5 rounded-full font-bold">BESTSELLER</span>
                      </div>
                      <div className="text-xs text-slate-300 mt-0.5">Enterprise Java, Spring Boot & AI APIs</div>
                    </div>
                  </a>

                  <a href="#services" className="flex items-start gap-3 p-3 rounded-2xl hover:bg-white/10 transition no-underline text-white">
                    <span className="text-xl">⚙️</span>
                    <div>
                      <div className="text-sm font-bold flex items-center gap-2">
                        Data Engineer + AI
                        <span className="text-[9px] bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded-full font-bold">NEW</span>
                      </div>
                      <div className="text-xs text-slate-300 mt-0.5">Spark, Airflow, AWS & MLOps Pipelines</div>
                    </div>
                  </a>

                  <a href="#services" className="flex items-start gap-3 p-3 rounded-2xl hover:bg-white/10 transition no-underline text-white">
                    <span className="text-xl">🤖</span>
                    <div>
                      <div className="text-sm font-bold flex items-center gap-2">
                        AI Developer Bootcamp
                        <span className="text-[9px] bg-purple-500/20 text-purple-300 px-2 py-0.5 rounded-full font-bold">HOT</span>
                      </div>
                      <div className="text-xs text-slate-300 mt-0.5">LLMs, RAG, Vector DBs & AI Agents</div>
                    </div>
                  </a>

                  <a href="#services" className="flex items-start gap-3 p-3 rounded-2xl hover:bg-white/10 transition no-underline text-white">
                    <span className="text-xl">📊</span>
                    <div>
                      <div className="text-sm font-bold">Data Science + AI</div>
                      <div className="text-xs text-slate-300 mt-0.5">Python, ML, Deep Learning & Predictive AI</div>
                    </div>
                  </a>

                  <a href="#services" className="flex items-start gap-3 p-3 rounded-2xl hover:bg-white/10 transition no-underline text-white">
                    <span className="text-xl">🐍</span>
                    <div>
                      <div className="text-sm font-bold">Python Full Stack + AI</div>
                      <div className="text-xs text-slate-300 mt-0.5">Django, FastAPI, React & LangChain</div>
                    </div>
                  </a>

                  <a href="#services" className="flex items-start gap-3 p-3 rounded-2xl hover:bg-white/10 transition no-underline text-white">
                    <span className="text-xl">🧪</span>
                    <div>
                      <div className="text-sm font-bold">QA Automation + AI</div>
                      <div className="text-xs text-slate-300 mt-0.5">Selenium, Cypress, Playwright & AI Testing</div>
                    </div>
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* 2. SERVICES */}
          <a href="#services" className="px-2.5 py-2 text-[14px] font-bold text-slate-700 hover:text-indigo-600 transition-colors no-underline">
            Services
          </a>

          {/* 3. BLOG */}
          <a href="#transformations" className="px-2.5 py-2 text-[14px] font-bold text-slate-700 hover:text-indigo-600 transition-colors no-underline">
            Blog
          </a>

          {/* 4. JOBS */}
          <a href="#employers" className="px-2.5 py-2 text-[14px] font-bold text-slate-700 hover:text-indigo-600 transition-colors no-underline">
            Jobs
          </a>

          {/* 5. ABOUT */}
          <div 
            className="relative"
            onMouseEnter={() => setActiveDropdown('about')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className={`flex items-center gap-1 px-2.5 py-2 rounded-xl text-[14px] font-bold transition-all border-0 cursor-pointer ${
              activeDropdown === 'about' ? 'bg-[#262121] text-white' : 'text-slate-700 hover:text-indigo-600'
            }`}>
              About
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'about' ? 'rotate-180 text-white' : 'text-slate-400'}`} />
            </button>

            {activeDropdown === 'about' && (
              <div className="absolute top-full left-0 w-[500px] bg-[#262121] text-white rounded-3xl shadow-2xl p-6 z-50 animate-in fade-in slide-in-from-top-2 border border-slate-800">
                <div className="grid grid-cols-2 gap-4">
                  <a href="#about" className="flex items-start gap-3.5 p-3 rounded-2xl hover:bg-white/10 transition no-underline text-white">
                    <BookOpen className="w-5 h-5 text-indigo-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-sm font-bold">Our Story</div>
                      <div className="text-xs text-slate-300 mt-1">Learn about Hire2Hired's journey and mission.</div>
                    </div>
                  </a>

                  <a href="#how-it-works" className="flex items-start gap-3.5 p-3 rounded-2xl hover:bg-white/10 transition no-underline text-white">
                    <Lightbulb className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-sm font-bold">How It Works</div>
                      <div className="text-xs text-slate-300 mt-1">Discover our AI-powered matching process.</div>
                    </div>
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* 6. FOR CONSULTANTS */}
          <div 
            className="relative"
            onMouseEnter={() => setActiveDropdown('consultants')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className={`flex items-center gap-1 px-2.5 py-2 rounded-xl text-[14px] font-bold transition-all border-0 cursor-pointer ${
              activeDropdown === 'consultants' ? 'bg-[#262121] text-white' : 'text-slate-700 hover:text-indigo-600'
            }`}>
              For Consultants
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'consultants' ? 'rotate-180 text-white' : 'text-slate-400'}`} />
            </button>

            {activeDropdown === 'consultants' && (
              <div className="absolute top-full left-0 w-[540px] bg-[#262121] text-white rounded-3xl shadow-2xl p-6 z-50 animate-in fade-in slide-in-from-top-2 border border-slate-800 space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <a href="#services" className="flex items-start gap-3 p-3 rounded-2xl hover:bg-white/10 transition no-underline text-white">
                    <Target className="w-4 h-4 text-indigo-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-sm font-bold">Overview</div>
                      <div className="text-xs text-slate-300 mt-0.5">Empowers your consulting career.</div>
                    </div>
                  </a>

                  <a href="#services" className="flex items-start gap-3 p-3 rounded-2xl hover:bg-white/10 transition no-underline text-white">
                    <FileText className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-sm font-bold">AI Resume Optimization</div>
                      <div className="text-xs text-slate-300 mt-0.5">Resume AI-optimized for impact.</div>
                    </div>
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* 7. FOR EMPLOYERS */}
          <div 
            className="relative"
            onMouseEnter={() => setActiveDropdown('employers')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className={`flex items-center gap-1 px-2.5 py-2 rounded-xl text-[14px] font-bold transition-all border-0 cursor-pointer ${
              activeDropdown === 'employers' ? 'bg-[#262121] text-white' : 'text-slate-700 hover:text-indigo-600'
            }`}>
              For Employers
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'employers' ? 'rotate-180 text-white' : 'text-slate-400'}`} />
            </button>

            {activeDropdown === 'employers' && (
              <div className="absolute top-full left-0 w-[540px] bg-[#262121] text-white rounded-3xl shadow-2xl p-6 z-50 animate-in fade-in slide-in-from-top-2 border border-slate-800 space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <a href="#employers" className="flex items-start gap-3 p-3 rounded-2xl hover:bg-white/10 transition no-underline text-white">
                    <Search className="w-4 h-4 text-indigo-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-sm font-bold">AI Talent Sourcing</div>
                      <div className="text-xs text-slate-300 mt-0.5">Find candidates with AI precision.</div>
                    </div>
                  </a>

                  <a href="#employers" className="flex items-start gap-3 p-3 rounded-2xl hover:bg-white/10 transition no-underline text-white">
                    <UserCheck className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-sm font-bold">Rapid Screening</div>
                      <div className="text-xs text-slate-300 mt-0.5">Candidate screening in 48 hours.</div>
                    </div>
                  </a>
                </div>
              </div>
            )}
          </div>

        </nav>

        {/* Right CTA Buttons Area: Request Callback & Get Started */}
        <div className="hidden lg:flex items-center gap-3">
          <button 
            onClick={onRequestCallback}
            className="h-10 px-5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-extrabold flex items-center gap-2 border-0 cursor-pointer whitespace-nowrap transition"
          >
            <Phone className="w-3.5 h-3.5 text-indigo-600" />
            Request Callback
          </button>

          <button 
            onClick={onRequestCallback}
            className="h-10 px-6 rounded-full btn-blue text-xs font-extrabold flex items-center gap-2 border-0 cursor-pointer whitespace-nowrap shadow-md hover:scale-105 transition-transform"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Get Started
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2.5 rounded-xl text-slate-700 hover:bg-slate-100 bg-transparent border-0 cursor-pointer transition"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-6 py-6 space-y-4 animate-in fade-in">
          <nav className="flex flex-col space-y-3">
            <a href="#services" onClick={() => setMobileMenuOpen(false)} className="text-base font-bold text-slate-800 hover:text-indigo-600 no-underline">Courses</a>
            <a href="#services" onClick={() => setMobileMenuOpen(false)} className="text-base font-bold text-slate-800 hover:text-indigo-600 no-underline">Services</a>
            <a href="#transformations" onClick={() => setMobileMenuOpen(false)} className="text-base font-bold text-slate-800 hover:text-indigo-600 no-underline">Blog</a>
            <a href="#employers" onClick={() => setMobileMenuOpen(false)} className="text-base font-bold text-slate-800 hover:text-indigo-600 no-underline">Jobs</a>
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="text-base font-bold text-slate-800 hover:text-indigo-600 no-underline">About Us</a>
            <a href="#services" onClick={() => setMobileMenuOpen(false)} className="text-base font-bold text-slate-800 hover:text-indigo-600 no-underline">For Consultants</a>
            <a href="#employers" onClick={() => setMobileMenuOpen(false)} className="text-base font-bold text-slate-800 hover:text-indigo-600 no-underline">For Employers</a>
          </nav>

          <div className="flex flex-col gap-3 pt-2">
            <button 
              onClick={() => { setMobileMenuOpen(false); onRequestCallback(); }}
              className="w-full py-3 rounded-full bg-slate-100 text-slate-900 text-sm font-bold flex items-center justify-center gap-2 border-0 cursor-pointer"
            >
              <Phone className="w-4 h-4 text-indigo-600" />
              Request Callback
            </button>

            <button 
              onClick={() => { setMobileMenuOpen(false); onRequestCallback(); }}
              className="w-full py-3 rounded-full btn-blue text-sm font-bold flex items-center justify-center gap-2 border-0 cursor-pointer"
            >
              <Sparkles className="w-4 h-4" />
              Get Started
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

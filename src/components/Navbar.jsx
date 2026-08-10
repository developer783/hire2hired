import React, { useState, useEffect } from 'react';
import { 
  Menu, X, ChevronDown, BookOpen, Lightbulb, Award, Briefcase, 
  Target, GitMerge, FileText, MessageSquare, CheckCircle, UserCheck,
  TrendingUp, Search, BarChart2, Users, Database, LogIn, 
  Code, Code2, DollarSign, Heart, Megaphone, Wrench, Building2, HelpCircle, 
  ArrowRight, Phone, Sparkles
} from 'lucide-react';

export default function Navbar({ onRequestCallback, currentView, onNavigate }) {
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

  const handleNavClick = (e, view, hash) => {
    e.preventDefault();
    setActiveDropdown(null);
    setMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate(view);
    }
    if (hash && view === 'home') {
      window.location.hash = hash;
    }
  };

  return (
    <header className={`navbar-sticky ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="w-full px-6 sm:px-10 lg:px-14 flex items-center justify-between h-[84px]">
        
        {/* Brand Logo */}
        <a 
          href="#home" 
          onClick={(e) => handleNavClick(e, 'home')} 
          className="flex items-center gap-2.5 no-underline group flex-shrink-0"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-blue-600 flex items-center justify-center text-white font-extrabold text-xl shadow-md group-hover:scale-105 transition-transform">
            H2
          </div>
          <span className="font-display font-extrabold text-2xl tracking-tight text-slate-900">
            Hire<span className="text-indigo-600">2</span>Hired
          </span>
        </a>

        {/* Desktop Navigation Links with Equal Spacing */}
        <nav className="hidden lg:flex items-center justify-evenly flex-1 max-w-6xl mx-6">
          
          {/* 1. COURSES MEGA DROPDOWN */}
          <div 
            className="relative"
            onMouseEnter={() => setActiveDropdown('courses')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button 
              onClick={() => onNavigate('courses')}
              className={`flex items-center gap-1 px-2 py-1.5 rounded-xl text-[14px] font-bold transition-all border-0 cursor-pointer whitespace-nowrap ${
                currentView === 'courses' || activeDropdown === 'courses' ? 'bg-[#262121] text-white' : 'text-slate-700 hover:text-indigo-600'
              }`}
            >
              Courses
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'courses' ? 'rotate-180 text-white' : 'text-slate-400'}`} />
            </button>

            {activeDropdown === 'courses' && (
              <div className="absolute top-full left-0 w-[640px] bg-[#262121] text-white rounded-3xl shadow-2xl p-6 z-50 animate-in fade-in slide-in-from-top-2 border border-slate-800 space-y-3">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400 px-2">12+ Job-Ready AI & Tech Specialisations</p>
                <div className="grid grid-cols-2 gap-3">
                  <a href="#courses" onClick={() => { setActiveDropdown(null); onNavigate('courses'); }} className="flex items-start gap-3 p-3 rounded-2xl hover:bg-white/10 transition no-underline text-white">
                    <span className="text-xl">☕</span>
                    <div>
                      <div className="text-sm font-bold flex items-center gap-2">
                        Java + AI Bootcamp
                        <span className="text-[9px] bg-indigo-500/20 text-indigo-300 px-2 py-0.5 rounded-full font-bold">BESTSELLER</span>
                      </div>
                      <div className="text-xs text-slate-300 mt-0.5">Enterprise Java, Spring Boot & AI APIs</div>
                    </div>
                  </a>

                  <a href="#services" onClick={() => setActiveDropdown(null)} className="flex items-start gap-3 p-3 rounded-2xl hover:bg-white/10 transition no-underline text-white">
                    <span className="text-xl">☁️</span>
                    <div>
                      <div className="text-sm font-bold flex items-center gap-2">
                        Cloud & DevOps + AI
                        <span className="text-[9px] bg-sky-500/20 text-sky-300 px-2 py-0.5 rounded-full font-bold">HIGH GROWTH</span>
                      </div>
                      <div className="text-xs text-slate-300 mt-0.5">AWS, Azure, Terraform, K8s & AI Infra</div>
                    </div>
                  </a>

                  <a href="#services" onClick={() => setActiveDropdown(null)} className="flex items-start gap-3 p-3 rounded-2xl hover:bg-white/10 transition no-underline text-white">
                    <span className="text-xl">🤖</span>
                    <div>
                      <div className="text-sm font-bold flex items-center gap-2">
                        AI Developer Bootcamp
                        <span className="text-[9px] bg-purple-500/20 text-purple-300 px-2 py-0.5 rounded-full font-bold">HOT</span>
                      </div>
                      <div className="text-xs text-slate-300 mt-0.5">LLMs, RAG, Vector DBs & AI Agents</div>
                    </div>
                  </a>

                  <a href="#services" onClick={() => setActiveDropdown(null)} className="flex items-start gap-3 p-3 rounded-2xl hover:bg-white/10 transition no-underline text-white">
                    <span className="text-xl">🛡️</span>
                    <div>
                      <div className="text-sm font-bold flex items-center gap-2">
                        Cybersecurity & AI Security
                        <span className="text-[9px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-full font-bold">HIGH DEMAND</span>
                      </div>
                      <div className="text-xs text-slate-300 mt-0.5">Ethical Hacking, SIEM & Zero-Trust Cloud</div>
                    </div>
                  </a>

                  <a href="#services" onClick={() => setActiveDropdown(null)} className="flex items-start gap-3 p-3 rounded-2xl hover:bg-white/10 transition no-underline text-white">
                    <span className="text-xl">⚙️</span>
                    <div>
                      <div className="text-sm font-bold">Data Engineer + AI</div>
                      <div className="text-xs text-slate-300 mt-0.5">Spark, Airflow, AWS & MLOps Pipelines</div>
                    </div>
                  </a>

                  <a href="#services" onClick={() => setActiveDropdown(null)} className="flex items-start gap-3 p-3 rounded-2xl hover:bg-white/10 transition no-underline text-white">
                    <span className="text-xl">🔮</span>
                    <div>
                      <div className="text-sm font-bold">GenAI & Agentic Architect</div>
                      <div className="text-xs text-slate-300 mt-0.5">LangChain, Autonomous Agents & Fine-Tuning</div>
                    </div>
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* 2. SERVICES LINK */}
          <a 
            href="#services" 
            onClick={(e) => { e.preventDefault(); onNavigate('services'); }}
            className={`px-2 py-1.5 text-[14px] font-bold transition-colors no-underline whitespace-nowrap ${
              currentView === 'services' ? 'text-indigo-600 font-extrabold' : 'text-slate-700 hover:text-indigo-600'
            }`}
          >
            Services
          </a>

          {/* 3. ABOUT DROPDOWN */}
          <div 
            className="relative"
            onMouseEnter={() => setActiveDropdown('about')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className={`flex items-center gap-1 px-2 py-1.5 rounded-xl text-[14px] font-bold transition-all border-0 cursor-pointer whitespace-nowrap ${
              activeDropdown === 'about' || currentView === 'our-story' || currentView === 'why-choose-us' || currentView === 'careers' ? 'bg-[#262121] text-white' : 'text-slate-700 hover:text-indigo-600'
            }`}>
              About
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'about' ? 'rotate-180 text-white' : 'text-slate-400'}`} />
            </button>

            {activeDropdown === 'about' && (
              <div className="absolute top-full left-0 w-[540px] bg-[#262121] text-white rounded-3xl shadow-2xl p-6 z-50 animate-in fade-in slide-in-from-top-2 border border-slate-800">
                <div className="grid grid-cols-2 gap-4">
                  <a 
                    href="#our-story" 
                    onClick={(e) => handleNavClick(e, 'our-story')} 
                    className="flex items-start gap-3.5 p-3 rounded-2xl hover:bg-white/10 transition no-underline text-white"
                  >
                    <BookOpen className="w-5 h-5 text-indigo-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-sm font-bold">Our Story</div>
                      <div className="text-xs text-slate-300 mt-1">Learn about Hire2Hired's journey and mission.</div>
                    </div>
                  </a>

                  <a 
                    href="#employer-how-it-works" 
                    onClick={(e) => handleNavClick(e, 'employer-how-it-works')} 
                    className="flex items-start gap-3.5 p-3 rounded-2xl hover:bg-white/10 transition no-underline text-white"
                  >
                    <Lightbulb className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-sm font-bold">How It Works</div>
                      <div className="text-xs text-slate-300 mt-1">Discover our AI-powered matching process.</div>
                    </div>
                  </a>

                  <a 
                    href="#why-choose-us" 
                    onClick={(e) => handleNavClick(e, 'why-choose-us')} 
                    className="flex items-start gap-3.5 p-3 rounded-2xl hover:bg-white/10 transition no-underline text-white"
                  >
                    <Award className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-sm font-bold">Why Choose Us</div>
                      <div className="text-xs text-slate-300 mt-1">See what makes Hire2Hired different.</div>
                    </div>
                  </a>

                  <a 
                    href="#careers" 
                    onClick={(e) => handleNavClick(e, 'careers')} 
                    className="flex items-start gap-3.5 p-3 rounded-2xl hover:bg-white/10 transition no-underline text-white"
                  >
                    <Briefcase className="w-5 h-5 text-sky-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-sm font-bold">Careers</div>
                      <div className="text-xs text-slate-300 mt-1">Join our team and shape the future of hiring.</div>
                    </div>
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* 4. FOR CONSULTANTS DROPDOWN */}
          <div 
            className="relative"
            onMouseEnter={() => setActiveDropdown('consultants')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className={`flex items-center gap-1 px-2 py-1.5 rounded-xl text-[14px] font-bold transition-all border-0 cursor-pointer whitespace-nowrap ${
              activeDropdown === 'consultants' || currentView === 'consultants' || currentView === 'how-it-works' || currentView === 'signup' || currentView === 'login' ? 'bg-[#262121] text-white' : 'text-slate-700 hover:text-indigo-600'
            }`}>
              For Consultants
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'consultants' ? 'rotate-180 text-white' : 'text-slate-400'}`} />
            </button>

            {activeDropdown === 'consultants' && (
              <div className="absolute top-full left-0 w-[640px] bg-[#262121] text-white rounded-3xl shadow-2xl p-6 z-50 animate-in fade-in slide-in-from-top-2 border border-slate-800 space-y-4">
                
                {/* Top Row: Overview & How It Works for Consultants */}
                <div className="grid grid-cols-2 gap-4">
                  <a 
                    href="#consultants" 
                    onClick={(e) => handleNavClick(e, 'consultants')} 
                    className="flex items-start gap-3.5 p-3 rounded-2xl hover:bg-white/10 transition no-underline text-white"
                  >
                    <Target className="w-5 h-5 text-indigo-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-sm font-bold">Overview</div>
                      <div className="text-xs text-slate-300 mt-1">Discover how Hire2Hired empowers your consulting career.</div>
                    </div>
                  </a>

                  <a 
                    href="#how-it-works" 
                    onClick={(e) => handleNavClick(e, 'how-it-works')} 
                    className="flex items-start gap-3.5 p-3 rounded-2xl hover:bg-white/10 transition no-underline text-white"
                  >
                    <GitMerge className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-sm font-bold">How It Works for Consultants</div>
                      <div className="text-xs text-slate-300 mt-1">Step-by-step guide to getting matched with opportunities.</div>
                    </div>
                  </a>
                </div>

                {/* Services Section Header */}
                <div className="pt-2 border-t border-slate-800">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400 px-2 pb-2">Our Services</p>
                  
                  <div className="grid grid-cols-2 gap-3">
                    
                    <a 
                      href="#consultant-service-resume-optimization" 
                      onClick={(e) => handleNavClick(e, 'consultant-service-resume-optimization')} 
                      className="flex items-start gap-3 p-3 rounded-2xl hover:bg-white/10 transition no-underline text-white"
                    >
                      <FileText className="w-4 h-4 text-indigo-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="text-sm font-bold">AI Resume Optimization</div>
                        <div className="text-xs text-slate-300 mt-0.5">Get your resume AI-optimized for maximum impact.</div>
                      </div>
                    </a>

                    <a 
                      href="#consultant-service-career-matching" 
                      onClick={(e) => handleNavClick(e, 'consultant-service-career-matching')} 
                      className="flex items-start gap-3 p-3 rounded-2xl hover:bg-white/10 transition no-underline text-white"
                    >
                      <Target className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="text-sm font-bold">Smart Career Matching</div>
                        <div className="text-xs text-slate-300 mt-0.5">AI-powered job matching based on your skills.</div>
                      </div>
                    </a>

                    <a 
                      href="#consultant-service-interview-prep" 
                      onClick={(e) => handleNavClick(e, 'consultant-service-interview-prep')} 
                      className="flex items-start gap-3 p-3 rounded-2xl hover:bg-white/10 transition no-underline text-white"
                    >
                      <MessageSquare className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="text-sm font-bold">AI Interview Preparation</div>
                        <div className="text-xs text-slate-300 mt-0.5">Practice with AI-driven interview simulations.</div>
                      </div>
                    </a>

                    <a 
                      href="#consultant-service-skills-assessment" 
                      onClick={(e) => handleNavClick(e, 'consultant-service-skills-assessment')} 
                      className="flex items-start gap-3 p-3 rounded-2xl hover:bg-white/10 transition no-underline text-white"
                    >
                      <CheckCircle className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="text-sm font-bold">Skills Assessment & Portfolio</div>
                        <div className="text-xs text-slate-300 mt-0.5">Showcase your skills with verified assessments.</div>
                      </div>
                    </a>

                    <a 
                      href="#consultant-service-career-intelligence" 
                      onClick={(e) => handleNavClick(e, 'consultant-service-career-intelligence')} 
                      className="flex items-start gap-3 p-3 rounded-2xl hover:bg-white/10 transition no-underline text-white"
                    >
                      <TrendingUp className="w-4 h-4 text-sky-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="text-sm font-bold">Career Path Intelligence</div>
                        <div className="text-xs text-slate-300 mt-0.5">AI insights on career growth opportunities.</div>
                      </div>
                    </a>

                    <a 
                      href="#consultant-service-personal-branding" 
                      onClick={(e) => handleNavClick(e, 'consultant-service-personal-branding')} 
                      className="flex items-start gap-3 p-3 rounded-2xl hover:bg-white/10 transition no-underline text-white"
                    >
                      <Award className="w-4 h-4 text-rose-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="text-sm font-bold">Personal Branding & Marketing</div>
                        <div className="text-xs text-slate-300 mt-0.5">Build your professional brand with AI assistance.</div>
                      </div>
                    </a>

                  </div>
                </div>

              </div>
            )}
          </div>

          {/* 5. FOR EMPLOYERS DROPDOWN */}
          <div 
            className="relative"
            onMouseEnter={() => setActiveDropdown('employers')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button 
              onClick={() => onNavigate('employers')}
              className={`flex items-center gap-1 px-2 py-1.5 rounded-xl text-[14px] font-bold transition-all border-0 cursor-pointer whitespace-nowrap ${
                currentView === 'employers' || currentView === 'bookconsultation' || activeDropdown === 'employers' ? 'bg-[#262121] text-white' : 'text-slate-700 hover:text-indigo-600'
              }`}
            >
              For Employers
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'employers' ? 'rotate-180 text-white' : 'text-slate-400'}`} />
            </button>

            {activeDropdown === 'employers' && (
              <div className="absolute top-full left-0 w-[640px] bg-[#262121] text-white rounded-3xl shadow-2xl p-6 z-50 animate-in fade-in slide-in-from-top-2 border border-slate-800 space-y-4">
                
                {/* Top Row: Overview & How It Works */}
                <div className="grid grid-cols-2 gap-4">
                  <a 
                    href="#employers" 
                    onClick={(e) => handleNavClick(e, 'employers')} 
                    className="flex items-start gap-3.5 p-3 rounded-2xl hover:bg-white/10 transition no-underline text-white"
                  >
                    <Briefcase className="w-5 h-5 text-indigo-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-sm font-bold">Overview</div>
                      <div className="text-xs text-slate-300 mt-1">Transform your hiring with AI-powered talent matching.</div>
                    </div>
                  </a>

                  <a 
                    href="#employer-how-it-works" 
                    onClick={(e) => handleNavClick(e, 'employer-how-it-works')} 
                    className="flex items-start gap-3.5 p-3 rounded-2xl hover:bg-white/10 transition no-underline text-white"
                  >
                    <GitMerge className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-sm font-bold">How It Works for Employers</div>
                      <div className="text-xs text-slate-300 mt-1">Streamlined hiring process from search to onboarding.</div>
                    </div>
                  </a>
                </div>

                {/* Services Section Header */}
                <div className="pt-2 border-t border-slate-800">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400 px-2 pb-2">Our Services</p>
                  
                  <div className="grid grid-cols-2 gap-3">
                    
                    <a 
                      href="#employer-service-talent-sourcing" 
                      onClick={(e) => handleNavClick(e, 'employer-service-talent-sourcing')} 
                      className="flex items-start gap-3 p-3 rounded-2xl hover:bg-white/10 transition no-underline text-white"
                    >
                      <Search className="w-4 h-4 text-indigo-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="text-sm font-bold">AI Talent Sourcing</div>
                        <div className="text-xs text-slate-300 mt-0.5">Find the perfect candidates with AI precision.</div>
                      </div>
                    </a>

                    <a 
                      href="#employer-service-hiring-analytics" 
                      onClick={(e) => handleNavClick(e, 'employer-service-hiring-analytics')} 
                      className="flex items-start gap-3 p-3 rounded-2xl hover:bg-white/10 transition no-underline text-white"
                    >
                      <BarChart2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="text-sm font-bold">Predictive Hiring Analytics</div>
                        <div className="text-xs text-slate-300 mt-0.5">Data-driven insights for better hiring decisions.</div>
                      </div>
                    </a>

                    <a 
                      href="#employer-service-screening" 
                      onClick={(e) => handleNavClick(e, 'employer-service-screening')} 
                      className="flex items-start gap-3 p-3 rounded-2xl hover:bg-white/10 transition no-underline text-white"
                    >
                      <Target className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="text-sm font-bold">Rapid Screening & Shortlisting</div>
                        <div className="text-xs text-slate-300 mt-0.5">AI-powered candidate screening in minutes.</div>
                      </div>
                    </a>

                    <a 
                      href="#employer-service-cultural-fit" 
                      onClick={(e) => handleNavClick(e, 'employer-service-cultural-fit')} 
                      className="flex items-start gap-3 p-3 rounded-2xl hover:bg-white/10 transition no-underline text-white"
                    >
                      <Users className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="text-sm font-bold">Cultural Fit Analysis</div>
                        <div className="text-xs text-slate-300 mt-0.5">Ensure candidates align with your company culture.</div>
                      </div>
                    </a>

                    <a 
                      href="#employer-service-recruitment" 
                      onClick={(e) => handleNavClick(e, 'employer-service-recruitment')} 
                      className="flex items-start gap-3 p-3 rounded-2xl hover:bg-white/10 transition no-underline text-white"
                    >
                      <CheckCircle className="w-4 h-4 text-sky-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="text-sm font-bold">End-to-End Recruitment</div>
                        <div className="text-xs text-slate-300 mt-0.5">Complete recruitment solutions from start to finish.</div>
                      </div>
                    </a>

                    <a 
                      href="#employer-service-pipeline" 
                      onClick={(e) => handleNavClick(e, 'employer-service-pipeline')} 
                      className="flex items-start gap-3 p-3 rounded-2xl hover:bg-white/10 transition no-underline text-white"
                    >
                      <Database className="w-4 h-4 text-rose-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="text-sm font-bold">Talent Pipeline Building</div>
                        <div className="text-xs text-slate-300 mt-0.5">Build and maintain a strong talent pipeline.</div>
                      </div>
                    </a>

                  </div>
                </div>

                {/* Bottom Full-Width Card: Employer Login */}
                <div className="pt-2 border-t border-slate-800">
                  <a 
                    href="#employer-login" 
                    onClick={(e) => handleNavClick(e, 'employer-login')} 
                    className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 hover:bg-white/15 transition no-underline text-white border border-white/10"
                  >
                    <LogIn className="w-5 h-5 text-indigo-400 flex-shrink-0" />
                    <div>
                      <div className="text-sm font-bold">Employer Login</div>
                      <div className="text-xs text-slate-300 mt-0.5">Access your employer dashboard.</div>
                    </div>
                  </a>
                </div>

              </div>
            )}
          </div>

          {/* 6. INDUSTRIES DROPDOWN */}
          <div 
            className="relative"
            onMouseEnter={() => setActiveDropdown('industries')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button 
              onClick={() => onNavigate('industry-technology')}
              className={`flex items-center gap-1 px-2 py-1.5 rounded-xl text-[14px] font-bold transition-all border-0 cursor-pointer whitespace-nowrap ${
                currentView.startsWith('industry-') || activeDropdown === 'industries' ? 'bg-[#262121] text-white' : 'text-slate-700 hover:text-indigo-600'
              }`}
            >
              Industries
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'industries' ? 'rotate-180 text-white' : 'text-slate-400'}`} />
            </button>

            {activeDropdown === 'industries' && (
              <div className="absolute top-full left-0 w-[580px] bg-[#262121] text-white rounded-3xl shadow-2xl p-6 z-50 animate-in fade-in slide-in-from-top-2 border border-slate-800">
                <div className="grid grid-cols-2 gap-4">
                  
                  {/* Technology */}
                  <a 
                    href="#industry-technology" 
                    onClick={(e) => handleNavClick(e, 'industry-technology')} 
                    className="flex items-start gap-3.5 p-3 rounded-2xl hover:bg-white/10 transition no-underline text-white"
                  >
                    <Code className="w-5 h-5 text-indigo-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-sm font-bold">Technology</div>
                      <div className="text-xs text-slate-300 mt-1">Software engineers, developers, and tech professionals.</div>
                    </div>
                  </a>

                  {/* Finance */}
                  <a 
                    href="#industry-finance" 
                    onClick={(e) => handleNavClick(e, 'industry-finance')} 
                    className="flex items-start gap-3.5 p-3 rounded-2xl hover:bg-white/10 transition no-underline text-white"
                  >
                    <DollarSign className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-sm font-bold">Finance</div>
                      <div className="text-xs text-slate-300 mt-1">Financial analysts, accountants, and advisors.</div>
                    </div>
                  </a>

                  {/* Healthcare */}
                  <a 
                    href="#industry-healthcare" 
                    onClick={(e) => handleNavClick(e, 'industry-healthcare')} 
                    className="flex items-start gap-3.5 p-3 rounded-2xl hover:bg-white/10 transition no-underline text-white"
                  >
                    <Heart className="w-5 h-5 text-rose-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-sm font-bold">Healthcare</div>
                      <div className="text-xs text-slate-300 mt-1">Healthcare administrators and medical professionals.</div>
                    </div>
                  </a>

                  {/* Marketing */}
                  <a 
                    href="#industry-marketing" 
                    onClick={(e) => handleNavClick(e, 'industry-marketing')} 
                    className="flex items-start gap-3.5 p-3 rounded-2xl hover:bg-white/10 transition no-underline text-white"
                  >
                    <Megaphone className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-sm font-bold">Marketing</div>
                      <div className="text-xs text-slate-300 mt-1">Digital marketers, content strategists, and brand managers.</div>
                    </div>
                  </a>

                  {/* Engineering */}
                  <a 
                    href="#industry-engineering" 
                    onClick={(e) => handleNavClick(e, 'industry-engineering')} 
                    className="flex items-start gap-3.5 p-3 rounded-2xl hover:bg-white/10 transition no-underline text-white"
                  >
                    <Wrench className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-sm font-bold">Engineering</div>
                      <div className="text-xs text-slate-300 mt-1">Mechanical, civil, electrical, and systems engineers.</div>
                    </div>
                  </a>

                  {/* Consulting */}
                  <a 
                    href="#industry-consulting" 
                    onClick={(e) => handleNavClick(e, 'industry-consulting')} 
                    className="flex items-start gap-3.5 p-3 rounded-2xl hover:bg-white/10 transition no-underline text-white"
                  >
                    <Building2 className="w-5 h-5 text-sky-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-sm font-bold">Consulting</div>
                      <div className="text-xs text-slate-300 mt-1">Management, strategy, and business consultants.</div>
                    </div>
                  </a>

                </div>
              </div>
            )}
          </div>

          {/* 7. RESOURCES DROPDOWN */}
          <div 
            className="relative"
            onMouseEnter={() => setActiveDropdown('resources')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className={`flex items-center gap-1 px-2 py-1.5 rounded-xl text-[14px] font-bold transition-all border-0 cursor-pointer whitespace-nowrap ${
              activeDropdown === 'resources' || currentView === 'blog' || currentView === 'faq' ? 'bg-[#262121] text-white' : 'text-slate-700 hover:text-indigo-600'
            }`}>
              Resources
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'resources' ? 'rotate-180 text-white' : 'text-slate-400'}`} />
            </button>

            {activeDropdown === 'resources' && (
              <div className="absolute top-full right-0 w-[520px] bg-[#262121] text-white rounded-3xl shadow-2xl p-6 z-50 animate-in fade-in slide-in-from-top-2 border border-slate-800">
                <div className="grid grid-cols-2 gap-4">
                  <a 
                    href="#blog" 
                    onClick={(e) => handleNavClick(e, 'blog')} 
                    className="flex items-start gap-3.5 p-3 rounded-2xl hover:bg-white/10 transition no-underline text-white"
                  >
                    <BookOpen className="w-5 h-5 text-indigo-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-sm font-bold">Blog / Guides</div>
                      <div className="text-xs text-slate-300 mt-1">Expert insights on hiring and career development.</div>
                    </div>
                  </a>

                  <a 
                    href="#faq" 
                    onClick={(e) => handleNavClick(e, 'faq')} 
                    className="flex items-start gap-3.5 p-3 rounded-2xl hover:bg-white/10 transition no-underline text-white"
                  >
                    <HelpCircle className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-sm font-bold">FAQ's</div>
                      <div className="text-xs text-slate-300 mt-1">Find answers to commonly asked questions.</div>
                    </div>
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* 8. CONTACT */}
          <a 
            href="#contact" 
            onClick={(e) => { e.preventDefault(); onNavigate('contact'); }}
            className={`px-2 py-1.5 text-[14px] font-bold transition-colors no-underline whitespace-nowrap ${
              currentView === 'contact' ? 'text-indigo-600 font-extrabold' : 'text-slate-700 hover:text-indigo-600'
            }`}
          >
            Contact
          </a>

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
            onClick={() => onNavigate('signup')}
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
            <a href="#our-story" onClick={(e) => handleNavClick(e, 'our-story')} className="text-base font-bold text-slate-800 hover:text-indigo-600 no-underline">About Us / Our Story</a>
            <a href="#why-choose-us" onClick={(e) => handleNavClick(e, 'why-choose-us')} className="text-base font-bold text-slate-800 hover:text-indigo-600 no-underline">Why Choose Us</a>
            <a href="#careers" onClick={(e) => handleNavClick(e, 'careers')} className="text-base font-bold text-slate-800 hover:text-indigo-600 no-underline">Careers</a>
            <a href="#blog" onClick={(e) => handleNavClick(e, 'blog')} className="text-base font-bold text-slate-800 hover:text-indigo-600 no-underline">Blog / Guides (Resources)</a>
            <a href="#courses" onClick={(e) => handleNavClick(e, 'courses')} className="text-base font-bold text-slate-800 hover:text-indigo-600 no-underline">Courses</a>
            <a href="#services" onClick={(e) => handleNavClick(e, 'services')} className="text-base font-bold text-slate-800 hover:text-indigo-600 no-underline">Services</a>
            <a href="#signup" onClick={(e) => handleNavClick(e, 'signup')} className="text-base font-bold text-slate-800 hover:text-indigo-600 no-underline">For Consultants</a>
            <a href="#bookconsultation" onClick={(e) => handleNavClick(e, 'bookconsultation')} className="text-base font-bold text-slate-800 hover:text-indigo-600 no-underline">For Employers / Book Consultation</a>
            <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="text-base font-bold text-slate-800 hover:text-indigo-600 no-underline">Contact</a>
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
              onClick={() => { setMobileMenuOpen(false); onNavigate('signup'); }}
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

import React, { useState } from 'react';
import { 
  Briefcase, MapPin, Clock, ArrowRight, CheckCircle2, Home, ChevronRight, 
  Sparkles, Globe, Heart, Shield, Laptop, Rocket, Users, FileText
} from 'lucide-react';
import careersImg from '../assets/careers_hero.png';

export default function CareersPage({ onNavigate, isFullPage = true }) {
  const [selectedDept, setSelectedDept] = useState('All');
  const [applyJob, setApplyJob] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const departments = ["All", "Engineering", "AI & Data Science", "Talent Acquisition", "Product & Design", "Sales & Ops"];

  const openPositions = [
    {
      id: 1,
      title: "Senior AI / ML Engineer (Agentic Systems)",
      dept: "AI & Data Science",
      location: "Remote (US / India)",
      type: "Full-Time",
      salary: "$140,000 - $190,000 • 0.25% Equity",
      desc: "Build next-generation LLM matching algorithms, vector embeddings, and autonomous recruiter agents."
    },
    {
      id: 2,
      title: "Lead Full Stack Engineer (React & Node.js)",
      dept: "Engineering",
      location: "Remote (Global)",
      type: "Full-Time",
      salary: "$130,000 - $170,000 • 0.20% Equity",
      desc: "Lead frontend and backend web architecture powering 100,000+ candidate interactions and enterprise portals."
    },
    {
      id: 3,
      title: "Senior Talent Acquisition Manager",
      dept: "Talent Acquisition",
      location: "Hybrid (New York / Remote)",
      type: "Full-Time",
      salary: "$90,000 - $130,000 + Performance Bonus",
      desc: "Partner with Fortune 500 tech leaders to curate candidate shortlists and optimize consultant placement."
    },
    {
      id: 4,
      title: "Product Designer (UI/UX & Design Systems)",
      dept: "Product & Design",
      location: "Remote (Global)",
      type: "Full-Time",
      salary: "$110,000 - $150,000",
      desc: "Shape intuitive, futuristic interfaces for our AI matching engine, candidate dashboards, and mobile web app."
    },
    {
      id: 5,
      title: "Enterprise Account Executive (Tech Staffing)",
      dept: "Sales & Ops",
      location: "Remote (US)",
      type: "Full-Time",
      salary: "$120,000 Base + Uncapped OTE",
      desc: "Drive new enterprise partnerships with CTOs and VPs of Engineering seeking top-tier consultant teams."
    }
  ];

  const perks = [
    {
      icon: <Globe className="w-6 h-6 text-indigo-500" />,
      title: "Remote-First Flexibility",
      desc: "Work from anywhere in the world with flexible hours and home office equipment stipends."
    },
    {
      icon: <Rocket className="w-6 h-6 text-purple-500" />,
      title: "Equity & Ownership",
      desc: "Every team member gets stock options so we all share in Hire2Hired's rapid growth."
    },
    {
      icon: <Heart className="w-6 h-6 text-rose-500" />,
      title: "Comprehensive Health",
      desc: "100% premium medical, dental, and vision coverage for employees and dependents."
    },
    {
      icon: <Laptop className="w-6 h-6 text-emerald-500" />,
      title: "$3,000 Learning Budget",
      desc: "Annual stipend for courses, conferences, certifications, and technical books."
    }
  ];

  const filteredJobs = selectedDept === 'All' 
    ? openPositions 
    : openPositions.filter(j => j.dept === selectedDept);

  const handleJobApplySubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setApplyJob(null);
      alert("Application received! Our HR team will reach out shortly.");
    }, 1200);
  };

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
            <a href="#our-story" onClick={(e) => { e.preventDefault(); onNavigate('our-story'); }} className="text-slate-600 hover:text-indigo-600 no-underline">
              About
            </a>
            <ChevronRight className="w-3 h-3 text-slate-400" />
            <span className="text-indigo-600 font-extrabold">Careers</span>
          </div>
        )}

        {/* Hero Banner Section */}
        <div className="max-w-6xl mx-auto bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 rounded-3xl p-8 sm:p-14 text-white shadow-2xl overflow-hidden relative border border-slate-800">
          <div className="grid lg:grid-cols-12 gap-8 items-center relative z-10">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 text-xs font-extrabold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" /> WE ARE HIRING!
              </div>

              <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-white leading-tight tracking-tight">
                Shape the Future of AI Tech Hiring
              </h1>

              <p className="text-slate-300 text-sm sm:text-base font-normal leading-relaxed">
                Join a mission-driven team reinventing how global tech talent connects with opportunity. We're building AI-first solutions to empower candidates and hiring leaders worldwide.
              </p>

              <div className="pt-2">
                <a 
                  href="#open-roles" 
                  className="px-8 py-3.5 rounded-full btn-blue text-xs font-extrabold inline-flex items-center gap-2 border-0 cursor-pointer shadow-lg no-underline text-white hover:scale-105 transition-transform"
                >
                  Explore Open Roles <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center">
              <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl max-w-sm">
                <img 
                  src={careersImg} 
                  alt="Hire2Hired Careers" 
                  className="w-full h-auto object-cover rounded-2xl hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

          </div>
        </div>

        {/* Culture & Benefits Grid */}
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="text-center space-y-2 max-w-xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900">
              Why You'll Love Working Here
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm font-medium">
              We take care of our team with competitive compensation, autonomy, and great benefits.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {perks.map((p, i) => (
              <div key={i} className="bg-white rounded-3xl p-6 border border-slate-200 shadow-2xs space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center">
                  {p.icon}
                </div>
                <h3 className="text-base font-extrabold text-slate-900">{p.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Open Positions Section */}
        <div id="open-roles" className="max-w-6xl mx-auto space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-6">
            <div>
              <h2 className="text-2xl font-display font-extrabold text-slate-900">
                Open Positions ({openPositions.length})
              </h2>
              <p className="text-slate-500 text-xs font-semibold">Find your next role at Hire2Hired</p>
            </div>

            {/* Department Filter Tabs */}
            <div className="flex flex-wrap gap-2">
              {departments.map((dept, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedDept(dept)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition border-0 cursor-pointer ${
                    selectedDept === dept 
                      ? 'bg-indigo-600 text-white shadow-xs' 
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {dept}
                </button>
              ))}
            </div>
          </div>

          {/* Job List Cards */}
          <div className="space-y-4">
            {filteredJobs.map((job) => (
              <div 
                key={job.id} 
                className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-2xs hover:shadow-md transition-all flex flex-col md:flex-row md:items-center justify-between gap-6 group"
              >
                <div className="space-y-2 max-w-2xl">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-700 font-extrabold text-[10px] uppercase">
                      {job.dept}
                    </span>
                    <span className="text-xs text-slate-400 font-bold">•</span>
                    <span className="text-xs font-bold text-slate-500 flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" /> {job.location}
                    </span>
                    <span className="text-xs text-slate-400 font-bold">•</span>
                    <span className="text-xs font-bold text-emerald-600 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-emerald-500" /> {job.type}
                    </span>
                  </div>

                  <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-indigo-600 transition-colors">
                    {job.title}
                  </h3>

                  <p className="text-xs text-slate-600 font-medium leading-relaxed">
                    {job.desc}
                  </p>

                  <div className="text-xs font-bold text-slate-500">
                    💰 {job.salary}
                  </div>
                </div>

                <div className="flex-shrink-0">
                  <button 
                    onClick={() => setApplyJob(job)}
                    className="w-full sm:w-auto px-6 py-3 rounded-xl bg-slate-900 hover:bg-indigo-600 text-white text-xs font-bold border-0 cursor-pointer shadow-xs transition-colors flex items-center justify-center gap-2"
                  >
                    Apply Position <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Application Modal */}
        {applyJob && (
          <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl p-8 max-w-lg w-full border border-slate-200 shadow-2xl space-y-5 animate-in zoom-in-95 relative">
              <button 
                onClick={() => setApplyJob(null)}
                className="absolute top-6 right-6 p-2 text-slate-400 hover:text-slate-600 rounded-full bg-slate-100 border-0 cursor-pointer"
              >
                ✕
              </button>

              <div>
                <span className="text-xs font-extrabold text-indigo-600 uppercase tracking-wider">APPLY FOR POSITION</span>
                <h3 className="text-xl font-extrabold text-slate-900 mt-1">{applyJob.title}</h3>
                <p className="text-xs text-slate-500 font-medium">{applyJob.dept} • {applyJob.location}</p>
              </div>

              <form onSubmit={handleJobApplySubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Full Name <span className="text-rose-500">*</span></label>
                  <input type="text" required placeholder="Alex Morgan" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs outline-none focus:border-indigo-600 focus:bg-white transition" />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Email <span className="text-rose-500">*</span></label>
                  <input type="email" required placeholder="alex@example.com" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs outline-none focus:border-indigo-600 focus:bg-white transition" />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">LinkedIn / Portfolio URL</label>
                  <input type="url" placeholder="https://linkedin.com/in/yourprofile" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs outline-none focus:border-indigo-600 focus:bg-white transition" />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Upload Resume (PDF)</label>
                  <input type="file" accept=".pdf,.doc,.docx" required className="w-full text-xs text-slate-500 file:mr-4 file:py-2.5 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-extrabold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100 cursor-pointer" />
                </div>

                <button 
                  type="submit"
                  disabled={submitted}
                  className="w-full py-3.5 rounded-xl btn-blue text-xs font-extrabold border-0 cursor-pointer shadow transition"
                >
                  {submitted ? 'Submitting Application...' : 'Submit Application'}
                </button>
              </form>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

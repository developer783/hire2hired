import React from 'react';
import { 
  Award, CheckCircle2, ShieldCheck, Zap, TrendingUp, Users, Target, 
  ArrowRight, Sparkles, Home, ChevronRight, Clock, Star, HeartHandshake
} from 'lucide-react';
import whyChooseUsImg from '../assets/why_choose_us.png';

export default function WhyChooseUsPage({ onNavigate, onRequestCallback, isFullPage = true }) {
  const differentiators = [
    {
      icon: <Zap className="w-6 h-6 text-amber-500" />,
      title: "Predictive AI Precision Matching",
      description: "Our proprietary AI analyzes 50+ deep technical vector data points beyond standard keyword matching to connect candidates with roles where they excel."
    },
    {
      icon: <Clock className="w-6 h-6 text-indigo-500" />,
      title: "14-Day Average Placement Speed",
      description: "Cut standard hiring timelines by 65%. Verified, interview-ready candidates are presented within 48 hours of posting."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-emerald-500" />,
      title: "Zero Upfront Cost for Talent",
      description: "100% free for job seekers and consultants. We invest in your career, resume optimization, and interview readiness without hidden fees."
    },
    {
      icon: <HeartHandshake className="w-6 h-6 text-rose-500" />,
      title: "Dedicated Human Career Advisors",
      description: "Technology backed by seasoned industry recruiters. You get one-on-one personalized career coaching and compensation negotiation guidance."
    },
    {
      icon: <Award className="w-6 h-6 text-purple-500" />,
      title: "98% Client & Candidate Satisfaction",
      description: "Over 10,000+ placed senior engineers, architects, and project managers across Fortune 500 enterprises and hyper-growth tech unicorns."
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-sky-500" />,
      title: "Continuous Upskilling & Support",
      description: "Access our exclusive Generative AI, Cloud & Enterprise Bootcamps to stay ahead of fast-evolving market skill demands."
    }
  ];

  const stats = [
    { label: "Talent Placed", value: "10,000+" },
    { label: "Average Time-to-Hire", value: "14 Days" },
    { label: "Placement Retention Rate", value: "98.4%" },
    { label: "Partner Enterprises", value: "500+" }
  ];

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
            <span className="text-indigo-600 font-extrabold">Why Choose Us</span>
          </div>
        )}

        {/* Hero Banner Section */}
        <div className="max-w-6xl mx-auto bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 rounded-3xl p-8 sm:p-14 text-white shadow-2xl overflow-hidden relative border border-slate-800">
          <div className="grid lg:grid-cols-12 gap-8 items-center relative z-10">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 text-xs font-extrabold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" /> WHAT SETS US APART
              </div>

              <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-white leading-tight tracking-tight">
                Why Hire2Hired is the #1 Tech Talent Platform
              </h1>

              <p className="text-slate-300 text-sm sm:text-base font-normal leading-relaxed">
                Traditional staffing agencies rely on slow manual screening and generic keyword searches. We combine high-precision AI matchmaking with human expert advisors to deliver instant, high-quality career placements.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <button 
                  onClick={() => onNavigate('signup')}
                  className="px-8 py-3.5 rounded-full btn-blue text-xs font-extrabold flex items-center gap-2 border-0 cursor-pointer shadow-lg hover:scale-105 transition-transform"
                >
                  Apply as a Consultant <ArrowRight className="w-4 h-4" />
                </button>

                <button 
                  onClick={() => onNavigate('bookconsultation')}
                  className="px-8 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-extrabold flex items-center gap-2 border border-white/20 cursor-pointer transition"
                >
                  Hire Top Talent
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center">
              <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl max-w-sm">
                <img 
                  src={whyChooseUsImg} 
                  alt="Why Choose Hire2Hired" 
                  className="w-full h-auto object-cover rounded-2xl hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

          </div>
        </div>

        {/* 4 Stats Grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((st, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs text-center space-y-1">
              <div className="text-2xl sm:text-3xl font-display font-extrabold text-indigo-600">{st.value}</div>
              <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">{st.label}</div>
            </div>
          ))}
        </div>

        {/* 6 Key Differentiators Grid */}
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900">
              The Hire2Hired Advantage
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm font-medium">
              Engineered from the ground up to empower senior candidates and high-growth hiring teams.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {differentiators.map((d, i) => (
              <div key={i} className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-2xs hover:shadow-md transition-all space-y-4 group">
                <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                  {d.icon}
                </div>
                <h3 className="text-base font-extrabold text-slate-900">{d.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">{d.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Banner */}
        <div className="max-w-6xl mx-auto bg-indigo-50 border border-indigo-100 rounded-3xl p-8 sm:p-12 text-center space-y-5">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Ready to Experience the Difference?
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm max-w-xl mx-auto font-medium">
            Join thousands of senior engineers, developers, and product leaders accelerating their career trajectory with Hire2Hired.
          </p>
          <div className="pt-2">
            <button 
              onClick={() => onNavigate('signup')}
              className="px-8 py-4 rounded-full btn-blue text-sm font-extrabold border-0 cursor-pointer shadow-md hover:scale-105 transition-transform"
            >
              Get Started Now
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

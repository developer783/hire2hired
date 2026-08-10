import React, { useState } from 'react';
import { 
  Building2, Users, Calendar, Clock, CheckCircle2, ArrowRight, 
  ShieldCheck, Sparkles, UserCheck, Briefcase, Home, ChevronRight, 
  FileText, Star, Award, Zap, Phone, Mail
} from 'lucide-react';
import heroImg from '../assets/employers_hero.png';

export default function BookConsultationPage({ onRequestCallback, onNavigate, isFullPage = true }) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    companyName: '',
    fullName: '',
    workEmail: '',
    phone: '',
    roleNeeded: 'Java & Spring Boot Full Stack',
    teamSize: '1–2 Engineers',
    engagementType: 'Direct Hire Placement',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 750);
  };

  const stats = [
    { label: "Partner Companies", value: "500+", color: "text-indigo-600" },
    { label: "Faster Hiring", value: "70%", color: "text-emerald-600" },
    { label: "Retention Rate", value: "90%", color: "text-blue-600" },
  ];

  const benefits = [
    {
      icon: <UserCheck className="w-6 h-6 text-indigo-600" />,
      title: "Pre-Vetted Top 5% Talent",
      desc: "Every candidate undergoes multi-stage technical benchmarks, architecture reviews, and background checks."
    },
    {
      icon: <Clock className="w-6 h-6 text-indigo-600" />,
      title: "48-Hour Rapid Delivery",
      desc: "Receive pre-screened candidate profiles matched with AI precision within 2 business days."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-indigo-600" />,
      title: "14-Day Risk-Free Trial",
      desc: "Evaluate senior engineers on your real codebases before making a long-term commitment."
    },
    {
      icon: <Award className="w-6 h-6 text-indigo-600" />,
      title: "Dedicated Talent Partner",
      desc: "Single point of contact managing compliance, onboarding, payroll, and SLA performance."
    }
  ];

  const steps = [
    {
      step: "01",
      title: "Submit Specs & Scope",
      desc: "Share your required tech stack, seniority level, team size, and project timeline."
    },
    {
      step: "02",
      title: "Receive Matched Shortlist",
      desc: "Get top 3 pre-vetted candidate profiles with verified technical assessment reports in 48 hrs."
    },
    {
      step: "03",
      title: "Interview & Start Trial",
      desc: "Conduct final technical interviews, start your 14-day risk-free trial, and scale your engineering team."
    }
  ];

  return (
    <div className={`bg-[#fafbfd] ${isFullPage ? 'pt-24 pb-20' : 'py-20 md:py-28'} border-b border-slate-200/80`}>
      <div className="container-main">
        
        {/* Full Page Breadcrumbs */}
        {isFullPage && (
          <div className="max-w-6xl mx-auto mb-6 flex items-center gap-2 text-xs font-bold text-slate-500">
            <a href="#home" onClick={(e) => { e.preventDefault(); onNavigate('home'); }} className="flex items-center gap-1 text-slate-600 hover:text-indigo-600 no-underline">
              <Home className="w-3.5 h-3.5" /> Home
            </a>
            <ChevronRight className="w-3 h-3 text-slate-400" />
            <span className="text-indigo-600 font-extrabold">Employers / Hiring Solutions</span>
          </div>
        )}

        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-16 space-y-4">
          <h1 className="text-4xl sm:text-6xl font-display font-extrabold text-slate-900 tracking-tight leading-tight">
            Transform Your Hiring with <br />
            <span className="gradient-text-animated">AI-Powered Talent Matching</span>
          </h1>
          <p className="text-slate-600 text-base sm:text-xl max-w-2xl mx-auto leading-relaxed">
            Hire2Hired helps employers find the perfect consultants faster and more efficiently using advanced AI technology.
          </p>
        </div>

        {/* 2-Column Section: Why Employers Choose Us & Start Hiring Today Card */}
        <div className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column: Why Employers Choose Us (7 Cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xs space-y-6 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-display font-extrabold text-slate-900 mb-6">
                Why Employers Choose Us
              </h2>

              <div className="space-y-4">
                {[
                  "AI-powered candidate sourcing and matching",
                  "Predictive hiring analytics for better decisions",
                  "Rapid screening and shortlisting process",
                  "Cultural fit analysis using AI algorithms",
                  "End-to-end recruitment support",
                  "Build and maintain a strong talent pipeline"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-sm font-semibold text-slate-800">
                    <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold text-xs flex-shrink-0">
                      ✓
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-slate-100 flex items-center gap-3">
              <a 
                href="#consultation-form"
                className="px-7 py-3.5 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold text-xs flex items-center gap-2 no-underline shadow cursor-pointer"
              >
                Book Free Consultation <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Card: Start Hiring Today (5 Cols) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-indigo-50/90 via-blue-50/80 to-indigo-50/90 border border-indigo-200/90 rounded-3xl p-8 sm:p-10 shadow-xs flex flex-col justify-between text-center space-y-6">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-indigo-600 text-white flex items-center justify-center mx-auto shadow-md">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-display font-extrabold text-slate-900">
                Start Hiring Today
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm font-medium max-w-xs mx-auto leading-relaxed">
                Join leading companies that have streamlined their hiring process with Hire2Hired.
              </p>
            </div>

            <div className="space-y-3">
              <button 
                onClick={() => onNavigate('employer-login')}
                className="w-full py-4 rounded-2xl btn-blue font-extrabold text-sm border-0 cursor-pointer shadow-md hover:scale-[1.02] transition-transform flex items-center justify-center gap-2"
              >
                Employer Login <ArrowRight className="w-4 h-4" />
              </button>

              <button 
                onClick={() => onNavigate('employer-how-it-works')}
                className="w-full py-4 rounded-2xl bg-white hover:bg-slate-50 text-slate-800 font-extrabold text-sm border border-slate-300 cursor-pointer shadow-2xs hover:scale-[1.02] transition-transform"
              >
                See How It Works
              </button>
            </div>
          </div>

        </div>

        {/* 3 Proof Stats Bar */}
        <div className="max-w-6xl mx-auto mb-20 grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((st, idx) => (
            <div key={idx} className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xs text-center space-y-1">
              <div className={`font-display font-extrabold text-4xl ${st.color}`}>{st.value}</div>
              <div className="text-slate-500 text-xs font-bold uppercase tracking-wider">{st.label}</div>
            </div>
          ))}
        </div>

        {/* Consultation Form Section */}
        <div id="consultation-form" className="max-w-4xl mx-auto mb-24 pt-4">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm space-y-8">
            <div className="text-center max-w-xl mx-auto space-y-2">
              <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mx-auto mb-2">
                <Calendar className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-display font-extrabold text-slate-900">
                Book Employer <span className="text-indigo-600">Consultation</span>
              </h2>
              <p className="text-slate-500 text-sm">
                Schedule a 15-minute call with our senior talent acquisition strategists to discuss your hiring requirements.
              </p>
            </div>

            {submitted ? (
              <div className="bg-emerald-50 border border-emerald-200 rounded-3xl p-10 text-center space-y-4 animate-in zoom-in-95">
                <div className="w-14 h-14 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto shadow-md">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-extrabold text-slate-900">Consultation Request Confirmed!</h3>
                <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{formData.fullName || 'Hiring Partner'}</strong> from <strong>{formData.companyName || 'your company'}</strong>! Our senior staffing director will reach out to <strong>{formData.workEmail}</strong> within 2 hours to confirm your calendar booking.
                </p>
                <button 
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ companyName: '', fullName: '', workEmail: '', phone: '', roleNeeded: 'Java & Spring Boot Full Stack', teamSize: '1–2 Engineers', engagementType: 'Direct Hire Placement', message: '' });
                  }}
                  className="mt-4 px-8 py-3 rounded-xl bg-slate-900 text-white text-xs font-bold border-0 cursor-pointer shadow"
                >
                  Submit Another Consultation Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">Company Name <span className="text-rose-500">*</span></label>
                    <input 
                      type="text" 
                      required
                      placeholder="Acme Technologies Inc."
                      value={formData.companyName}
                      onChange={(e) => setFormData({...formData, companyName: e.target.value})}
                      className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 outline-none focus:border-indigo-600 focus:bg-white transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">Hiring Manager / Contact Name <span className="text-rose-500">*</span></label>
                    <input 
                      type="text" 
                      required
                      placeholder="Sarah Jenkins"
                      value={formData.fullName}
                      onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                      className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 outline-none focus:border-indigo-600 focus:bg-white transition"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">Work Email Address <span className="text-rose-500">*</span></label>
                    <input 
                      type="email" 
                      required
                      placeholder="sarah@acme.com"
                      value={formData.workEmail}
                      onChange={(e) => setFormData({...formData, workEmail: e.target.value})}
                      className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 outline-none focus:border-indigo-600 focus:bg-white transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">Phone Number <span className="text-rose-500">*</span></label>
                    <input 
                      type="tel" 
                      required
                      placeholder="307-384-7833"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 outline-none focus:border-indigo-600 focus:bg-white transition"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-3 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">Technical Specialisation <span className="text-rose-500">*</span></label>
                    <select 
                      value={formData.roleNeeded}
                      onChange={(e) => setFormData({...formData, roleNeeded: e.target.value})}
                      className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 outline-none focus:border-indigo-600 focus:bg-white transition"
                    >
                      <option value="Java & Spring Boot Full Stack">Java & Spring Boot Full Stack</option>
                      <option value="React & Next.js Frontend">React & Next.js Frontend</option>
                      <option value="Cloud & DevOps Architect">Cloud & DevOps Architect</option>
                      <option value="Generative AI & LLM Specialist">Generative AI & LLM Specialist</option>
                      <option value="Data Engineer & MLOps">Data Engineer & MLOps</option>
                      <option value="Cybersecurity Analyst">Cybersecurity Analyst</option>
                      <option value="QA Automation Engineer">QA Automation Engineer</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">Positions Needed <span className="text-rose-500">*</span></label>
                    <select 
                      value={formData.teamSize}
                      onChange={(e) => setFormData({...formData, teamSize: e.target.value})}
                      className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 outline-none focus:border-indigo-600 focus:bg-white transition"
                    >
                      <option value="1–2 Engineers">1–2 Engineers</option>
                      <option value="3–5 Engineers">3–5 Engineers</option>
                      <option value="Dedicated Tech Team (5+)">Dedicated Tech Team (5+)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">Engagement Model <span className="text-rose-500">*</span></label>
                    <select 
                      value={formData.engagementType}
                      onChange={(e) => setFormData({...formData, engagementType: e.target.value})}
                      className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 outline-none focus:border-indigo-600 focus:bg-white transition"
                    >
                      <option value="Direct Hire Placement">Direct Hire Placement</option>
                      <option value="Contract Staff Augmentation">Contract Staff Augmentation</option>
                      <option value="Contract-to-Hire">Contract-to-Hire</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">Project Specs & Requirements</label>
                  <textarea 
                    rows={4}
                    placeholder="Tell us about your tech stack, project goals, timeline, and candidate requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 outline-none focus:border-indigo-600 focus:bg-white transition resize-none"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold text-sm shadow-md hover:scale-[1.01] transition-all border-0 cursor-pointer flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <span>Booking Consultation...</span>
                  ) : (
                    <>
                      Book Employer Consultation Now <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>

              </form>
            )}
          </div>
        </div>

        {/* Why Enterprise Leaders Hire With Us */}
        <div className="max-w-6xl mx-auto mb-24 space-y-12">
          <div className="text-center max-w-xl mx-auto">
            <p className="text-xs font-extrabold uppercase tracking-widest text-indigo-600 mb-2">THE HIRE2HIRED ADVANTAGE</p>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900">
              Why Top Tech Companies <span className="text-indigo-600">Choose Us</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b, idx) => (
              <div key={idx} className="bg-white rounded-3xl p-6 border border-slate-200 shadow-2xs hover:shadow-md transition">
                <div className="w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center mb-4">
                  {b.icon}
                </div>
                <h3 className="font-display font-extrabold text-lg text-slate-900 mb-2">{b.title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 3-Step Hiring Model */}
        <div className="max-w-6xl mx-auto mb-24 bg-gradient-to-br from-slate-900 via-slate-900 to-indigo-950 text-white rounded-[36px] p-8 sm:p-14 shadow-2xl border border-slate-800">
          <div className="text-center max-w-xl mx-auto mb-12">
            <p className="text-xs font-extrabold uppercase tracking-widest text-indigo-400 mb-2">STREAMLINED HIRING PROCESS</p>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white">
              How Employers Hire
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((st, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 rounded-3xl p-8 space-y-3 hover:bg-white/10 transition">
                <div className="text-4xl font-display font-extrabold text-indigo-400">{st.step}</div>
                <h3 className="font-extrabold text-lg text-white">{st.title}</h3>
                <p className="text-slate-300 text-xs leading-relaxed">{st.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-indigo-50 via-blue-50 to-indigo-50 border border-indigo-200/90 rounded-3xl p-10 sm:p-14 text-center shadow-sm relative overflow-hidden">
            <div className="w-12 h-12 rounded-2xl bg-indigo-600 text-white flex items-center justify-center mx-auto mb-4 shadow-md">
              <Building2 className="w-6 h-6" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display tracking-tight mb-2">
              Ready to scale your <span className="text-indigo-600">engineering team?</span>
            </h3>
            <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto font-medium mb-8">
              Book a 15-minute consultation with our talent acquisition director. We'll match pre-screened candidate profiles in 48 hours.
            </p>
            
            <a 
              href="#consultation-form" 
              className="px-8 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-md hover:scale-105 transition-all border-0 cursor-pointer inline-flex items-center gap-2 no-underline"
            >
              Book Free Consultation
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}

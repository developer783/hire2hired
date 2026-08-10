import React, { useState } from 'react';
import { 
  Check, ChevronRight, Home, Upload, ArrowRight, ArrowLeft, 
  Sparkles, CheckCircle2, UserCheck, Briefcase, FileText, Lock, 
  Paperclip, Award, ShieldCheck
} from 'lucide-react';
import signupHeroImg from '../assets/consultant_signup.png';

import StripePaymentView from './StripePaymentView';

export default function SignupPage({ onNavigate, isFullPage = true }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@example.com',
    role: '',
    experienceLevel: '',
    phone: '',
    linkedIn: '',
    skills: '',
    bio: '',
    resumeFile: null,
    resumeName: '',
    resumeSize: ''
  });

  const rolesList = [
    "Software Engineer",
    "Data Scientist",
    "Product Manager",
    "UX/UI Designer",
    "Business Analyst",
    "Project Manager",
    "Management Consultant",
    "Marketing Specialist",
    "Financial Analyst",
    "Other"
  ];

  const experienceLevels = [
    "Entry-Level / Junior (0-2 Yrs)",
    "Mid-Level Specialist (3-5 Yrs)",
    "Senior Engineer (5-8 Yrs)",
    "Lead Architect / Staff (8+ Yrs)",
    "Executive / Director"
  ];

  const handleNext = (e) => {
    e.preventDefault();
    if (currentStep < 3) {
      setCurrentStep(prev => prev + 1);
      window.scrollTo({ top: 120, behavior: 'smooth' });
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
      window.scrollTo({ top: 120, behavior: 'smooth' });
    } else if (onNavigate) {
      onNavigate('home');
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const sizeMB = (file.size / (1024 * 1024)).toFixed(2);
      setFormData({
        ...formData,
        resumeFile: file,
        resumeName: file.name,
        resumeSize: `${sizeMB} MB`
      });
    }
  };

  const handleSubmitFinal = (e) => {
    e.preventDefault();
    setCurrentStep(4);
    window.scrollTo({ top: 120, behavior: 'smooth' });
  };

  return (
    <div className={`bg-[#fafbfd] ${isFullPage ? 'pt-24 pb-20' : 'py-20 md:py-28'} border-b border-slate-200/80 min-h-[85vh]`}>
      <div className="container-main">
        
        {/* Full Page Breadcrumbs */}
        {isFullPage && (
          <div className="max-w-4xl mx-auto mb-6 flex items-center gap-2 text-xs font-bold text-slate-500">
            <a href="#home" onClick={(e) => { e.preventDefault(); onNavigate('home'); }} className="flex items-center gap-1 text-slate-600 hover:text-indigo-600 no-underline">
              <Home className="w-3.5 h-3.5" /> Home
            </a>
            <ChevronRight className="w-3 h-3 text-slate-400" />
            <span className="text-indigo-600 font-extrabold">Consultant Signup</span>
          </div>
        )}

        <div className="max-w-4xl mx-auto grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Visual Sidebar Card (4 Cols) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-gradient-to-tr from-slate-900 via-indigo-950 to-slate-900 rounded-3xl p-4 border border-slate-800 shadow-xl text-white">
              <div className="flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-wider text-indigo-400 mb-2">
                <Sparkles className="w-3.5 h-3.5" /> AI-POWERED CAREER MATCHING
              </div>
              <div className="relative rounded-2xl overflow-hidden border border-slate-800 mb-4">
                <img 
                  src={signupHeroImg} 
                  alt="Hire2Hired Consultant Application" 
                  className="w-full h-auto object-cover rounded-2xl"
                />
              </div>
              <p className="text-xs text-slate-300 font-medium leading-relaxed">
                Join 10,000+ senior consultants placed at leading Fortune 500 & high-growth tech companies.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-2xs space-y-3 text-xs font-bold text-slate-700">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                <span>Zero placement or application fees</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                <span>Direct client interview requests</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                <span>Predictive AI career & rate optimization</span>
              </div>
            </div>
          </div>

          {/* Right Stage Application Card (8 Cols) */}
          <div className="lg:col-span-8 bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm space-y-8">
            
            {/* Header & Subtitle */}
            <div className="space-y-1">
              <h1 className="text-3xl font-display font-extrabold text-slate-900 tracking-tight">
                Consultant Application
              </h1>
              <p className="text-slate-500 text-xs sm:text-sm font-medium">
                Complete your profile to get matched with top opportunities
              </p>
            </div>

            {submitted ? (
              <div className="bg-emerald-50 border border-emerald-200 rounded-3xl p-10 text-center space-y-4 animate-in zoom-in-95">
                <div className="w-16 h-16 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto shadow-md">
                  <Check className="w-8 h-8" />
                </div>
                <h2 className="text-2xl font-extrabold text-slate-900">Application Submitted!</h2>
                <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed font-medium">
                  Welcome to Hire2Hired, <strong>{formData.firstName} {formData.lastName}</strong>! Our AI matching engine is analyzing your profile and resume. A talent advisor will reach out to <strong>{formData.email}</strong> shortly.
                </p>
                <button 
                  onClick={() => onNavigate('home')}
                  className="mt-4 px-8 py-3 rounded-xl bg-slate-900 text-white text-xs font-bold border-0 cursor-pointer shadow"
                >
                  Return to Home Page
                </button>
              </div>
            ) : (
              <>
                {/* 3-Stage Stepper Header Bar */}
                <div className="relative pt-2">
                  <div className="flex items-center justify-between relative z-10">
                    
                    {/* Stage 1: Account */}
                    <div className="flex flex-col items-center gap-1.5">
                      <div className={`w-10 h-10 rounded-full font-extrabold text-sm flex items-center justify-center transition-all ${
                        currentStep > 1 
                          ? 'bg-emerald-500 text-white shadow-sm' 
                          : currentStep === 1 
                          ? 'bg-indigo-600 text-white shadow-md ring-4 ring-indigo-100' 
                          : 'bg-slate-100 text-slate-400'
                      }`}>
                        {currentStep > 1 ? <Check className="w-5 h-5" /> : '1'}
                      </div>
                      <span className={`text-xs font-bold ${currentStep >= 1 ? 'text-slate-900' : 'text-slate-400'}`}>Account</span>
                    </div>

                    {/* Step 1 to 2 Connector Line */}
                    <div className={`flex-1 h-1 mx-4 rounded-full transition-colors ${currentStep > 1 ? 'bg-indigo-600' : 'bg-slate-200'}`}></div>

                    {/* Stage 2: Profile */}
                    <div className="flex flex-col items-center gap-1.5">
                      <div className={`w-10 h-10 rounded-full font-extrabold text-sm flex items-center justify-center transition-all ${
                        currentStep > 2 
                          ? 'bg-emerald-500 text-white shadow-sm' 
                          : currentStep === 2 
                          ? 'bg-indigo-600 text-white shadow-md ring-4 ring-indigo-100' 
                          : 'bg-slate-100 text-slate-400'
                      }`}>
                        {currentStep > 2 ? <Check className="w-5 h-5" /> : '2'}
                      </div>
                      <span className={`text-xs font-bold ${currentStep >= 2 ? 'text-slate-900' : 'text-slate-400'}`}>Profile</span>
                    </div>

                    {/* Step 2 to 3 Connector Line */}
                    <div className={`flex-1 h-1 mx-4 rounded-full transition-colors ${currentStep > 2 ? 'bg-indigo-600' : 'bg-slate-200'}`}></div>

                    {/* Stage 3: Resume */}
                    <div className="flex flex-col items-center gap-1.5">
                      <div className={`w-10 h-10 rounded-full font-extrabold text-sm flex items-center justify-center transition-all ${
                        currentStep === 3 
                          ? 'bg-indigo-600 text-white shadow-md ring-4 ring-indigo-100' 
                          : 'bg-slate-100 text-slate-400'
                      }`}>
                        3
                      </div>
                      <span className={`text-xs font-bold ${currentStep === 3 ? 'text-slate-900' : 'text-slate-400'}`}>Resume</span>
                    </div>

                  </div>
                </div>

                {/* STAGE 1 FORM: Account */}
                {currentStep === 1 && (
                  <form onSubmit={handleNext} className="space-y-5 animate-in fade-in">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1.5">First name <span className="text-rose-500">*</span></label>
                        <input 
                          type="text" 
                          required
                          placeholder="John"
                          value={formData.firstName}
                          onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                          className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 outline-none focus:border-indigo-600 focus:bg-white transition"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1.5">Last name <span className="text-rose-500">*</span></label>
                        <input 
                          type="text" 
                          required
                          placeholder="Doe"
                          value={formData.lastName}
                          onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                          className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 outline-none focus:border-indigo-600 focus:bg-white transition"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">Email <span className="text-rose-500">*</span></label>
                      <input 
                        type="email" 
                        required
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 outline-none focus:border-indigo-600 focus:bg-white transition"
                      />
                    </div>

                    {/* Step 1 Buttons */}
                    <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                      <button 
                        type="button"
                        onClick={handleBack}
                        className="px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 text-xs font-bold flex items-center gap-1.5 border-0 cursor-pointer transition"
                      >
                        <ArrowLeft className="w-3.5 h-3.5" /> Back
                      </button>

                      <button 
                        type="submit"
                        className="px-8 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold flex items-center gap-1.5 border-0 cursor-pointer shadow hover:scale-[1.02] transition-all"
                      >
                        Next <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </form>
                )}

                {/* STAGE 2 FORM: Profile */}
                {currentStep === 2 && (
                  <form onSubmit={handleNext} className="space-y-5 animate-in fade-in">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">Professional Role <span className="text-rose-500">*</span></label>
                      <select 
                        required
                        value={formData.role}
                        onChange={(e) => setFormData({...formData, role: e.target.value})}
                        className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 outline-none focus:border-indigo-600 focus:bg-white transition"
                      >
                        <option value="">Select your role</option>
                        {rolesList.map((r, i) => (
                          <option key={i} value={r}>{r}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">Experience Level <span className="text-rose-500">*</span></label>
                      <select 
                        required
                        value={formData.experienceLevel}
                        onChange={(e) => setFormData({...formData, experienceLevel: e.target.value})}
                        className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 outline-none focus:border-indigo-600 focus:bg-white transition"
                      >
                        <option value="">Select your experience level</option>
                        {experienceLevels.map((exp, i) => (
                          <option key={i} value={exp}>{exp}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">Phone Number <span className="text-rose-500">*</span></label>
                      <input 
                        type="tel" 
                        required
                        placeholder="+1 (555) 000-0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 outline-none focus:border-indigo-600 focus:bg-white transition"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">LinkedIn Profile (Optional)</label>
                      <input 
                        type="url" 
                        placeholder="https://linkedin.com/in/yourprofile"
                        value={formData.linkedIn}
                        onChange={(e) => setFormData({...formData, linkedIn: e.target.value})}
                        className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 outline-none focus:border-indigo-600 focus:bg-white transition"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Key Skills</label>
                      <input 
                        type="text" 
                        placeholder="e.g., React, Python, Project Management"
                        value={formData.skills}
                        onChange={(e) => setFormData({...formData, skills: e.target.value})}
                        className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 outline-none focus:border-indigo-600 focus:bg-white transition mb-1"
                      />
                      <p className="text-[11px] text-slate-400 font-semibold">Separate skills with commas</p>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">Professional Bio</label>
                      <textarea 
                        rows={3}
                        placeholder="Tell us about your experience, achievements, and what you're looking for..."
                        value={formData.bio}
                        onChange={(e) => setFormData({...formData, bio: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 outline-none focus:border-indigo-600 focus:bg-white transition resize-none"
                      ></textarea>
                    </div>

                    {/* Step 2 Buttons */}
                    <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                      <button 
                        type="button"
                        onClick={handleBack}
                        className="px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 text-xs font-bold flex items-center gap-1.5 border-0 cursor-pointer transition"
                      >
                        <ArrowLeft className="w-3.5 h-3.5" /> Back
                      </button>

                      <button 
                        type="submit"
                        className="px-8 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold flex items-center gap-1.5 border-0 cursor-pointer shadow hover:scale-[1.02] transition-all"
                      >
                        Next <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </form>
                )}

                {/* STAGE 3 FORM: Resume */}
                {currentStep === 3 && (
                  <form onSubmit={handleSubmitFinal} className="space-y-6 animate-in fade-in">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-2">Upload Your Resume</label>
                      
                      <div className="relative border-2 border-dashed border-slate-300 hover:border-indigo-500 bg-slate-50 hover:bg-indigo-50/30 rounded-3xl p-8 text-center transition-all cursor-pointer group">
                        <input 
                          type="file" 
                          accept=".pdf,.doc,.docx"
                          onChange={handleFileChange}
                          className="absolute inset-0 opacity-0 cursor-pointer w-full h-full z-20"
                        />
                        
                        <div className="w-14 h-14 rounded-2xl bg-white border border-slate-200 text-indigo-600 flex items-center justify-center mx-auto mb-3 shadow-xs group-hover:scale-110 transition-transform">
                          <Upload className="w-7 h-7" />
                        </div>

                        <p className="text-sm font-extrabold text-slate-900">
                          {formData.resumeName ? formData.resumeName : 'Click to upload or drag and drop'}
                        </p>
                        <p className="text-xs text-slate-400 font-bold mt-1">
                          {formData.resumeSize ? `Attached file (${formData.resumeSize})` : 'PDF, DOC, or DOCX (max. 10MB)'}
                        </p>
                      </div>
                    </div>

                    {/* What Happens Next Card */}
                    <div className="bg-indigo-50/60 border border-indigo-100 rounded-3xl p-6 space-y-3">
                      <div className="flex items-center gap-2 text-xs font-extrabold text-indigo-900 uppercase tracking-wider">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        What happens next?
                      </div>
                      <ul className="space-y-2 text-xs font-semibold text-slate-700 pl-1 list-none">
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-indigo-600"></span>
                          Our AI will analyze your resume for optimization
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-indigo-600"></span>
                          We'll match you with relevant opportunities
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-indigo-600"></span>
                          You'll receive personalized job recommendations
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-indigo-600"></span>
                          Our agent will contact you with next steps
                        </li>
                      </ul>
                    </div>

                    {/* Step 3 Buttons */}
                    <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                      <button 
                        type="button"
                        onClick={handleBack}
                        className="px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 text-xs font-bold flex items-center gap-1.5 border-0 cursor-pointer transition"
                      >
                        <ArrowLeft className="w-3.5 h-3.5" /> Back
                      </button>

                      <button 
                        type="submit"
                        className="px-8 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold flex items-center gap-2 border-0 cursor-pointer shadow hover:scale-[1.02] transition-all"
                      >
                        <Check className="w-4 h-4" /> Complete Payment
                      </button>
                    </div>
                  </form>
                )}

                {/* STAGE 4: Stripe Payment Checkout */}
                {currentStep === 4 && (
                  <div className="animate-in fade-in">
                    <StripePaymentView 
                      formData={formData}
                      onSuccess={() => setSubmitted(true)}
                      onBack={() => setCurrentStep(3)}
                      onNavigate={onNavigate}
                    />
                  </div>
                )}

              </>
            )}

          </div>

        </div>

      </div>
    </div>
  );
}

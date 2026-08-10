import React, { useState } from 'react';
import { 
  X, Phone, User, Mail, MessageSquare, CheckCircle2, Sparkles, 
  GraduationCap, Briefcase, Paperclip, Clock, ArrowRight, ShieldCheck, FileText
} from 'lucide-react';

export default function CallbackModal({ isOpen, onClose, defaultProgram = '' }) {
  if (!isOpen) return null;

  const [activeTab, setActiveTab] = useState('course'); // 'course' | 'project' | 'query'
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    interestedIn: defaultProgram || 'Java Developer + AI Bootcamp',
    workAuthorization: '',
    serviceNeeded: '',
    estimatedBudget: '',
    subject: '',
    message: '',
    resumeName: '',
    resumeSize: ''
  });

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const sizeMB = (file.size / (1024 * 1024)).toFixed(2);
      if (file.size > 5 * 1024 * 1024) {
        alert('File size exceeds maximum limit of 5 MB.');
        return;
      }
      setFormData({
        ...formData,
        resumeName: file.name,
        resumeSize: `${sizeMB} MB`
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 700);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="modal-backdrop animate-in fade-in z-50 p-4 sm:p-6 overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-5xl w-full p-6 sm:p-10 shadow-2xl relative border border-slate-200 animate-in zoom-in-95 my-8">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-5 right-5 w-10 h-10 rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 flex items-center justify-center border-0 cursor-pointer transition shadow-xs z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Sidebar: Get in Touch & Contact Info (4 Cols) */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-slate-50 border border-slate-200/90 rounded-3xl p-6 space-y-5">
                <h3 className="font-display font-extrabold text-xl text-slate-900">Get in Touch</h3>
                
                <div className="space-y-4 text-xs font-semibold text-slate-700">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 flex-shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-slate-400 text-[11px] font-bold uppercase">Email</p>
                      <a href="mailto:support@hire2hired.com" className="text-indigo-600 font-extrabold text-xs hover:underline">
                        support@hire2hired.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 flex-shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-slate-400 text-[11px] font-bold uppercase">Phone</p>
                      <a href="tel:3073847833" className="text-slate-900 font-extrabold text-xs hover:text-indigo-600">
                        307-384-7833
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-600 flex-shrink-0">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-slate-400 text-[11px] font-bold uppercase">Working Hours</p>
                      <p className="text-slate-800 font-bold">Mon–Sat, 9AM–8PM EST</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Chat on WhatsApp Banner */}
              <a 
                href="https://wa.me/13073847833" 
                target="_blank" 
                rel="noreferrer"
                className="bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-3xl p-5 flex items-center justify-between no-underline transition shadow-2xs group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-emerald-500 text-white flex items-center justify-center text-lg shadow-sm">
                    💬
                  </div>
                  <div>
                    <h4 className="font-extrabold text-xs text-slate-900">Chat on WhatsApp</h4>
                    <p className="text-[11px] text-emerald-700 font-bold">Typically replies in minutes</p>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-emerald-600 group-hover:translate-x-1 transition-transform" />
              </a>

              <div className="p-4 bg-indigo-50/60 rounded-2xl border border-indigo-100 text-center space-y-1">
                <p className="text-[11px] font-extrabold text-indigo-700 uppercase tracking-wider">Zero Spam Guarantee</p>
                <p className="text-[11px] text-slate-600 font-medium">Your data is confidential & protected under Privacy Policy.</p>
              </div>
            </div>

            {/* Right Main Form Panel (8 Cols) */}
            <div className="lg:col-span-8 space-y-6">
              
              {/* 3 Top Switcher Tabs */}
              <div className="grid grid-cols-3 gap-2 sm:gap-3">
                <button
                  type="button"
                  onClick={() => setActiveTab('course')}
                  className={`p-3 sm:p-4 rounded-2xl border text-left transition cursor-pointer flex flex-col justify-between ${
                    activeTab === 'course'
                      ? 'bg-indigo-50/80 border-indigo-600 ring-2 ring-indigo-100 shadow-xs'
                      : 'bg-white border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <GraduationCap className={`w-5 h-5 mb-1 ${activeTab === 'course' ? 'text-indigo-600' : 'text-slate-400'}`} />
                  <div>
                    <h4 className="font-extrabold text-xs sm:text-sm text-slate-900">Course Inquiry</h4>
                    <p className="text-[10px] text-slate-500 font-bold mt-0.5">Get free course counseling</p>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab('project')}
                  className={`p-3 sm:p-4 rounded-2xl border text-left transition cursor-pointer flex flex-col justify-between ${
                    activeTab === 'project'
                      ? 'bg-indigo-50/80 border-indigo-600 ring-2 ring-indigo-100 shadow-xs'
                      : 'bg-white border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <Briefcase className={`w-5 h-5 mb-1 ${activeTab === 'project' ? 'text-indigo-600' : 'text-slate-400'}`} />
                  <div>
                    <h4 className="font-extrabold text-xs sm:text-sm text-slate-900">Start IT Project</h4>
                    <p className="text-[10px] text-slate-500 font-bold mt-0.5">Get a project estimate</p>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab('query')}
                  className={`p-3 sm:p-4 rounded-2xl border text-left transition cursor-pointer flex flex-col justify-between ${
                    activeTab === 'query'
                      ? 'bg-indigo-50/80 border-indigo-600 ring-2 ring-indigo-100 shadow-xs'
                      : 'bg-white border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <MessageSquare className={`w-5 h-5 mb-1 ${activeTab === 'query' ? 'text-indigo-600' : 'text-slate-400'}`} />
                  <div>
                    <h4 className="font-extrabold text-xs sm:text-sm text-slate-900">General Query</h4>
                    <p className="text-[10px] text-slate-500 font-bold mt-0.5">Ask us anything</p>
                  </div>
                </button>
              </div>

              {/* Dynamic Form Content */}
              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Common Top Row: Full Name & Phone */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-extrabold uppercase text-slate-600 mb-1.5">FULL NAME <span className="text-rose-500">*</span></label>
                    <input 
                      type="text"
                      required
                      placeholder="Your name"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 outline-none focus:border-indigo-600 focus:bg-white transition"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-extrabold uppercase text-slate-600 mb-1.5">PHONE <span className="text-rose-500">*</span></label>
                    <input 
                      type="tel"
                      required
                      placeholder="+1 (XXX) XXX-XXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 outline-none focus:border-indigo-600 focus:bg-white transition"
                    />
                  </div>
                </div>

                {/* Email Address */}
                <div>
                  <label className="block text-[11px] font-extrabold uppercase text-slate-600 mb-1.5">EMAIL ADDRESS <span className="text-rose-500">*</span></label>
                  <input 
                    type="email"
                    required
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 outline-none focus:border-indigo-600 focus:bg-white transition"
                  />
                </div>

                {/* TAB 1: Course Inquiry Fields */}
                {activeTab === 'course' && (
                  <>
                    <div>
                      <label className="block text-[11px] font-extrabold uppercase text-slate-600 mb-1.5">INTERESTED IN <span className="text-rose-500">*</span></label>
                      <select
                        required
                        value={formData.interestedIn}
                        onChange={(e) => setFormData({ ...formData, interestedIn: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 outline-none focus:border-indigo-600 focus:bg-white transition"
                      >
                        <option value="">Select a course / service</option>
                        <optgroup label="Training Courses">
                          <option value="Java Developer + AI Bootcamp">Java Developer + AI Bootcamp</option>
                          <option value="Data Engineer + AI Bootcamp">Data Engineer + AI Bootcamp</option>
                          <option value="AI Developer Bootcamp">AI Developer Bootcamp</option>
                          <option value="Data Scientist + AI Bootcamp">Data Scientist + AI Bootcamp</option>
                          <option value="Python Programming">Python Programming</option>
                          <option value="Quality Assurance (QA)">Quality Assurance (QA)</option>
                          <option value="Cloud & DevOps Engineer + AI">Cloud & DevOps Engineer + AI</option>
                          <option value="Cybersecurity & AI Threat Intelligence">Cybersecurity & AI Threat Intelligence</option>
                          <option value="GenAI & Agentic Systems Architect">GenAI & Agentic Systems Architect</option>
                          <option value="React & Next.js Full Stack + AI">React & Next.js Full Stack + AI</option>
                          <option value="Salesforce Developer & AI Specialist">Salesforce Developer & AI Specialist</option>
                          <option value="Embedded Systems & Edge AI">Embedded Systems & Edge AI</option>
                        </optgroup>
                        <optgroup label="IT Services">
                          <option value="Staffing & Recruitment">Staffing & Recruitment</option>
                          <option value="Web Development">Web Development</option>
                          <option value="App Development">App Development</option>
                          <option value="AI Solutions">AI Solutions</option>
                          <option value="UI/UX Design">UI/UX Design</option>
                          <option value="SaaS Development">SaaS Development</option>
                          <option value="Custom Software">Custom Software</option>
                        </optgroup>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] font-extrabold uppercase text-slate-600 mb-1.5">WORK AUTHORIZATION <span className="text-rose-500">*</span></label>
                      <select
                        required
                        value={formData.workAuthorization}
                        onChange={(e) => setFormData({ ...formData, workAuthorization: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 outline-none focus:border-indigo-600 focus:bg-white transition"
                      >
                        <option value="">Select work authorization</option>
                        <option value="US Citizen">US Citizen</option>
                        <option value="Green Card">Green Card</option>
                        <option value="H1B">H1B</option>
                        <option value="EAD">EAD</option>
                        <option value="TN">TN</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] font-extrabold uppercase text-slate-600 mb-1.5">
                        RESUME <span className="text-slate-400 font-semibold uppercase">(Optional PDF/DOC, max 5 MB)</span>
                      </label>
                      <div className="relative border-2 border-dashed border-slate-200 hover:border-indigo-400 bg-slate-50 rounded-2xl p-4 text-center transition cursor-pointer">
                        <input 
                          type="file" 
                          accept=".pdf,.docx,.doc,.txt"
                          onChange={handleFileChange}
                          className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                        />
                        <div className="flex items-center justify-center gap-2 text-slate-600 text-xs font-bold">
                          <Paperclip className="w-4 h-4 text-indigo-600" />
                          <span>{formData.resumeName ? formData.resumeName : 'Click to attach your resume'}</span>
                        </div>
                        {formData.resumeSize && (
                          <p className="text-[10px] text-emerald-600 font-extrabold mt-1">Attached ({formData.resumeSize})</p>
                        )}
                      </div>
                    </div>
                  </>
                )}

                {/* TAB 2: Start IT Project Fields */}
                {activeTab === 'project' && (
                  <>
                    <div>
                      <label className="block text-[11px] font-extrabold uppercase text-slate-600 mb-1.5">SERVICE NEEDED <span className="text-rose-500">*</span></label>
                      <select
                        required
                        value={formData.serviceNeeded}
                        onChange={(e) => setFormData({ ...formData, serviceNeeded: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 outline-none focus:border-indigo-600 focus:bg-white transition"
                      >
                        <option value="">Select a service</option>
                        <option value="Staffing & Recruitment">Staffing & Recruitment</option>
                        <option value="Web Development">Web Development</option>
                        <option value="App Development">App Development</option>
                        <option value="AI Solutions">AI Solutions</option>
                        <option value="UI/UX Design">UI/UX Design</option>
                        <option value="SaaS Development">SaaS Development</option>
                        <option value="Custom Software">Custom Software</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] font-extrabold uppercase text-slate-600 mb-1.5">ESTIMATED BUDGET <span className="text-rose-500">*</span></label>
                      <select
                        required
                        value={formData.estimatedBudget}
                        onChange={(e) => setFormData({ ...formData, estimatedBudget: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 outline-none focus:border-indigo-600 focus:bg-white transition"
                      >
                        <option value="">Select budget range</option>
                        <option value="< $5K">&lt; $5K</option>
                        <option value="$5K – $20K">$5K – $20K</option>
                        <option value="$20K – $50K">$20K – $50K</option>
                        <option value="$50K – $150K">$50K – $150K</option>
                        <option value="$150K+">$150K+</option>
                      </select>
                    </div>
                  </>
                )}

                {/* TAB 3: General Query Fields */}
                {activeTab === 'query' && (
                  <>
                    <div>
                      <label className="block text-[11px] font-extrabold uppercase text-slate-600 mb-1.5">
                        RESUME <span className="text-slate-400 font-semibold uppercase">(optional · PDF/DOC, max 5 MB)</span>
                      </label>
                      <div className="relative border-2 border-dashed border-slate-200 hover:border-indigo-400 bg-slate-50 rounded-2xl p-4 text-center transition cursor-pointer">
                        <input 
                          type="file" 
                          accept=".pdf,.docx,.doc,.txt"
                          onChange={handleFileChange}
                          className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                        />
                        <div className="flex items-center justify-center gap-2 text-slate-600 text-xs font-bold">
                          <Paperclip className="w-4 h-4 text-indigo-600" />
                          <span>{formData.resumeName ? formData.resumeName : 'Click to attach your resume'}</span>
                        </div>
                        {formData.resumeSize && (
                          <p className="text-[10px] text-emerald-600 font-extrabold mt-1">Attached ({formData.resumeSize})</p>
                        )}
                      </div>
                    </div>
                  </>
                )}

                {/* Message Field */}
                <div>
                  <label className="block text-[11px] font-extrabold uppercase text-slate-600 mb-1.5">MESSAGE</label>
                  <textarea 
                    rows={3}
                    placeholder={
                      activeTab === 'course' 
                        ? 'Any specific questions or concerns?' 
                        : activeTab === 'project' 
                        ? 'Describe your project requirements...' 
                        : 'How can we help you?'
                    }
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 outline-none focus:border-indigo-600 focus:bg-white transition resize-none"
                  ></textarea>
                </div>

                {/* Submit CTA Button */}
                <button 
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold text-sm shadow-md hover:scale-[1.01] transition-all border-0 cursor-pointer flex items-center justify-center gap-2 mt-2"
                >
                  {loading ? (
                    <span>Processing Request...</span>
                  ) : activeTab === 'project' ? (
                    <>
                      Get Project Quote <ArrowRight className="w-4 h-4" />
                    </>
                  ) : activeTab === 'query' ? (
                    <>
                      Send Message <ArrowRight className="w-4 h-4" />
                    </>
                  ) : (
                    <>
                      Request Free Callback <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>

                <p className="text-center text-slate-400 text-[11px] font-medium pt-1">
                  By submitting, you agree to our <a href="#privacy" className="text-indigo-600 underline">Privacy Policy</a>
                </p>

              </form>

            </div>

          </div>
        ) : (
          /* Confirmation Success State */
          <div className="text-center py-10 space-y-4 max-w-md mx-auto">
            <div className="w-16 h-16 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto shadow-md animate-in zoom-in">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="font-display font-extrabold text-3xl text-slate-900">
              Request Received!
            </h3>

            <p className="text-slate-600 text-sm leading-relaxed font-medium">
              Thank you, <span className="font-bold text-slate-900">{formData.fullName}</span>! One of our senior advisors will contact you at <span className="font-bold text-indigo-600">{formData.phone}</span> within 24 hours.
            </p>

            <button 
              onClick={handleReset}
              className="mt-4 px-8 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-extrabold border-0 cursor-pointer shadow"
            >
              Done & Close Window
            </button>
          </div>
        )}

      </div>
    </div>
  );
}

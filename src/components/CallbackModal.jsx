import React, { useState } from 'react';
import { X, Phone, User, Mail, MessageSquare, CheckCircle2, Sparkles } from 'lucide-react';

export default function CallbackModal({ isOpen, onClose, defaultProgram = '' }) {
  if (!isOpen) return null;

  const [activeTab, setActiveTab] = useState('candidate'); // 'candidate' | 'employer'
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    program: defaultProgram || 'Java Developer + AI Bootcamp',
    companyName: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="modal-backdrop animate-in fade-in">
      <div className="bg-white rounded-3xl max-w-md w-full p-6 md:p-8 shadow-2xl relative border border-slate-100 animate-in zoom-in-95">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 flex items-center justify-center border-0 cursor-pointer transition"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            {/* Modal Title */}
            <div className="text-center mb-6">
              <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mx-auto mb-3">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="font-display font-extrabold text-2xl text-slate-900">
                Request a Callback
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Our career & staffing advisors will contact you within 24 hours.
              </p>
            </div>

            {/* Toggle Tabs */}
            <div className="flex bg-slate-100 p-1 rounded-xl mb-6">
              <button
                type="button"
                onClick={() => setActiveTab('candidate')}
                className={`flex-1 py-2 rounded-lg text-xs font-bold transition border-0 cursor-pointer ${
                  activeTab === 'candidate'
                    ? 'bg-white text-indigo-600 shadow-xs'
                    : 'text-slate-500 hover:text-slate-800 bg-transparent'
                }`}
              >
                Candidate / Student
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('employer')}
                className={`flex-1 py-2 rounded-lg text-xs font-bold transition border-0 cursor-pointer ${
                  activeTab === 'employer'
                    ? 'bg-white text-indigo-600 shadow-xs'
                    : 'text-slate-500 hover:text-slate-800 bg-transparent'
                }`}
              >
                Employer / Hiring Partner
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Full Name *</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input 
                    type="text"
                    required
                    placeholder="John Doe"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Email Address *</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input 
                    type="email"
                    required
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Phone Number *</label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input 
                    type="tel"
                    required
                    placeholder="+1 (555) 000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100"
                  />
                </div>
              </div>

              {activeTab === 'candidate' ? (
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Program of Interest</label>
                  <select 
                    value={formData.program}
                    onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm outline-none focus:border-indigo-600 bg-white"
                  >
                    <option value="Java Developer + AI Bootcamp">Java Developer + AI Bootcamp</option>
                    <option value="GenAI & LLM Developer Bootcamp">GenAI & LLM Developer Bootcamp</option>
                    <option value="Data Engineer + AI Bootcamp">Data Engineer + AI Bootcamp</option>
                    <option value="SDET & AI QA Automation">SDET & AI QA Automation</option>
                  </select>
                </div>
              ) : (
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Company Name *</label>
                  <input 
                    type="text"
                    required
                    placeholder="Acme Corp"
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm outline-none focus:border-indigo-600"
                  />
                </div>
              )}

              <button 
                type="submit"
                className="w-full py-3.5 rounded-xl glow-btn font-bold text-sm border-0 cursor-pointer shadow-md mt-2"
              >
                Submit Callback Request
              </button>
            </form>
          </div>
        ) : (
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <h3 className="font-display font-extrabold text-2xl text-slate-900">
              Request Received!
            </h3>

            <p className="text-slate-600 text-sm leading-relaxed">
              Thank you, <span className="font-bold text-slate-900">{formData.fullName}</span>. One of our senior advisors will reach out to you at <span className="font-bold text-indigo-600">{formData.phone}</span> within 24 hours.
            </p>

            <button 
              onClick={handleReset}
              className="px-6 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm font-bold border-0 cursor-pointer"
            >
              Done
            </button>
          </div>
        )}

      </div>
    </div>
  );
}

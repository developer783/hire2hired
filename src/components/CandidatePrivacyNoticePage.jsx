import React from 'react';
import { ShieldCheck, Mail, ArrowLeft, Home, ChevronRight, FileText, CheckCircle2, AlertCircle } from 'lucide-react';

export default function CandidatePrivacyNoticePage({ onNavigate, isFullPage = true }) {
  return (
    <div className={`bg-[#fafbfd] ${isFullPage ? 'pt-24 pb-20' : 'py-16'} border-b border-slate-200/80 min-h-[85vh]`}>
      <div className="container-main max-w-4xl mx-auto space-y-8">
        
        {/* Breadcrumbs */}
        {isFullPage && (
          <div className="flex items-center gap-2 text-xs font-bold text-slate-500">
            <a href="#home" onClick={(e) => { e.preventDefault(); onNavigate('home'); }} className="flex items-center gap-1 text-slate-600 hover:text-indigo-600 no-underline">
              <Home className="w-3.5 h-3.5" /> Home
            </a>
            <ChevronRight className="w-3 h-3 text-slate-400" />
            <a href="#privacy" onClick={(e) => { e.preventDefault(); onNavigate('privacy'); }} className="text-slate-600 hover:text-indigo-600 no-underline">
              Privacy Policy
            </a>
            <ChevronRight className="w-3 h-3 text-slate-400" />
            <span className="text-indigo-600 font-extrabold">Candidate Privacy Notice</span>
          </div>
        )}

        {/* Notice Card */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xl space-y-8 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500"></div>

          {/* Header */}
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-extrabold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-indigo-600" /> OFFICIAL CANDIDATE NOTICE
            </div>
            
            <h1 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900">
              Candidate Privacy Notice
            </h1>
            
            <p className="text-xs text-slate-500 font-bold">
              HIRE2HIRED INC. • Effective Date: <strong>August 10, 2026</strong>
            </p>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium pt-2 border-t border-slate-100">
              When you create a Hire2Hired account, submit a resume, apply for a position, participate in recruitment, or use Hire2Hired career services, Hire2Hired may collect and process information about you.
            </p>
          </div>

          {/* Section 1: Information We May Collect */}
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-2">
              <FileText className="w-5 h-5 text-indigo-600" /> Information We May Collect
            </h2>
            <p className="text-xs text-slate-600 font-medium">Depending on your interaction with us, this may include:</p>
            
            <div className="grid sm:grid-cols-2 gap-2 text-xs font-semibold text-slate-700">
              {[
                "Name, Email, Phone & Location",
                "Resume & Cover Letters",
                "Employment & Previous Employer History",
                "Education, Degrees & Certifications",
                "Technical & Professional Skills",
                "Work Preferences & Remote Options",
                "Work Availability & Salary Expectations",
                "Interview & Application Information",
                "Training & Career-Service Records",
                "Account & Security Information"
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-2 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="bg-amber-50 rounded-2xl p-4 border border-amber-200 text-amber-900 text-xs font-semibold flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <span>
                <strong>Data Protection Guarantee:</strong> We generally do not maintain Social Security numbers, passport information, driver's license information, or I-9 documents in our ordinary candidate records.
              </span>
            </div>
          </div>

          {/* Section 2: Why We Collect It */}
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">
              Why We Collect It
            </h2>
            <p className="text-xs text-slate-600 font-medium">We may use your information to:</p>

            <ul className="grid sm:grid-cols-2 gap-2 text-xs font-medium text-slate-700 list-disc list-inside bg-slate-50 p-4 rounded-2xl border border-slate-100 space-y-1">
              <li>Evaluate you for employment opportunities</li>
              <li>Match you with prospective jobs</li>
              <li>Submit your profile to employers</li>
              <li>Coordinate interviews & schedule sessions</li>
              <li>Communicate directly with hiring managers</li>
              <li>Provide staffing & contract recruitment</li>
              <li>Provide technical training & bootcamps</li>
              <li>Prepare optimized resumes & profiles</li>
              <li>Provide mock interview preparation</li>
              <li>Administer your account & process payments</li>
            </ul>
          </div>

          {/* Section 3: Who May Receive It */}
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">
              Who May Receive It
            </h2>
            <p className="text-xs text-slate-600 font-medium">Your information may be shared, where appropriate, with:</p>

            <div className="flex flex-wrap gap-2 text-xs font-bold text-slate-700">
              {[
                "Prospective Employers",
                "Enterprise Clients",
                "Staffing Partners",
                "Recruitment Partners",
                "Applicant Tracking Systems",
                "CRM Providers",
                "Background-Screening Providers",
                "Scheduling Providers",
                "Payment Processors"
              ].map((recipient, idx) => (
                <span key={idx} className="px-3 py-1.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-100">
                  {recipient}
                </span>
              ))}
            </div>
          </div>

          {/* Section 4: Background Screening & Choices */}
          <div className="grid sm:grid-cols-2 gap-6 pt-2 border-t border-slate-100">
            <div className="space-y-2">
              <h3 className="text-sm font-bold text-slate-900">Background Screening</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                Certain positions may require third-party background screening. Where applicable, additional notices and FCRA authorization requirements will apply.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-sm font-bold text-slate-900">Your Privacy Choices</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                Depending on applicable law, you may have rights to access, correct, delete, or control certain personal information. Contact us at <a href="mailto:legal@hire2hired.com" className="text-indigo-600 underline font-bold">legal@hire2hired.com</a>.
              </p>
            </div>
          </div>

          {/* Contact Banner */}
          <div className="bg-slate-900 rounded-2xl p-6 text-white flex flex-wrap items-center justify-between gap-4">
            <div className="space-y-1 text-xs">
              <div className="font-bold text-white">Hire2Hired Inc.</div>
              <div className="text-slate-400">312 W 2nd St A8345, Casper, WY 82601, United States</div>
            </div>

            <div className="flex items-center gap-3">
              <a 
                href="#privacy" 
                onClick={(e) => { e.preventDefault(); onNavigate('privacy'); }}
                className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold no-underline"
              >
                Full Privacy Policy
              </a>
              <a 
                href="mailto:legal@hire2hired.com?subject=Candidate%20Privacy%20Inquiry" 
                className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold no-underline flex items-center gap-1.5"
              >
                <Mail className="w-3.5 h-3.5" /> Email Legal
              </a>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

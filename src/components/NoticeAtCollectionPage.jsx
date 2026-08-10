import React from 'react';
import { ShieldAlert, Mail, Home, ChevronRight, CheckCircle2, FileText, Lock } from 'lucide-react';

export default function NoticeAtCollectionPage({ onNavigate, isFullPage = true }) {
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
            <span className="text-indigo-600 font-extrabold">Notice at Collection</span>
          </div>
        )}

        {/* Notice Card */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xl space-y-8 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-sky-500 via-indigo-500 to-emerald-500"></div>

          {/* Header */}
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-100 text-sky-700 text-xs font-extrabold uppercase tracking-wider">
              <ShieldAlert className="w-4 h-4 text-sky-600" /> CALIFORNIA & STATE LAW DISCLOSURE
            </div>
            
            <h1 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900">
              Notice at Collection
            </h1>
            
            <p className="text-xs text-slate-500 font-bold">
              HIRE2HIRED INC. • Last Updated: <strong>August 10, 2026</strong>
            </p>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium pt-2 border-t border-slate-100">
              Hire2Hired Inc. may collect the following categories of personal information when you use our website, create an account, apply for a position, request services, or communicate with us:
            </p>
          </div>

          {/* Categories of Information */}
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-2">
              <FileText className="w-5 h-5 text-indigo-600" /> Categories of Information
            </h2>

            <div className="grid sm:grid-cols-2 gap-2.5 text-xs font-semibold text-slate-700">
              {[
                "Identifiers and contact information",
                "Account credentials & credentials data",
                "Professional and employment information",
                "Education and certification records",
                "Resume and application information",
                "Interview and recruitment notes",
                "Training and career-service information",
                "Payment and transaction details",
                "Internet, device, and website activity",
                "Communications and voluntary submissions"
              ].map((cat, idx) => (
                <div key={idx} className="flex items-center gap-2.5 bg-slate-50 p-3 rounded-xl border border-slate-100">
                  <CheckCircle2 className="w-4 h-4 text-sky-500 shrink-0" />
                  <span>{cat}</span>
                </div>
              ))}
            </div>

            <div className="bg-sky-50 rounded-2xl p-4 border border-sky-200 text-sky-950 text-xs font-semibold flex items-start gap-3">
              <Lock className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
              <span>
                <strong>Exclusion Disclosure:</strong> Hire2Hired generally does not collect Social Security numbers, passport information, driver's license information, or I-9 documents in its ordinary candidate records.
              </span>
            </div>
          </div>

          {/* Purposes */}
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">
              Purposes of Collection
            </h2>
            <p className="text-xs text-slate-600 font-medium">We may use collected information to:</p>

            <ul className="grid sm:grid-cols-2 gap-2 text-xs font-medium text-slate-700 list-disc list-inside bg-slate-50 p-4 rounded-2xl border border-slate-100 space-y-1">
              <li>Provide recruitment and staffing services</li>
              <li>Evaluate candidate qualifications</li>
              <li>Match candidates with job opportunities</li>
              <li>Submit candidates to employers & clients</li>
              <li>Coordinate interviews & assessment sessions</li>
              <li>Provide technical bootcamps & training</li>
              <li>Provide career-coaching & resume optimization</li>
              <li>Manage accounts & process payments</li>
              <li>Communicate directly with applicants</li>
              <li>Maintain platform security & prevent fraud</li>
              <li>Maintain business records & comply with law</li>
            </ul>
          </div>

          {/* Sharing & Sale Disclosures */}
          <div className="grid sm:grid-cols-2 gap-6 pt-2 border-t border-slate-100">
            <div className="space-y-2">
              <h3 className="text-sm font-bold text-slate-900">Information Sharing</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                Information may be disclosed to: Employers & clients, staffing partners, ATS/CRM providers, background-screening partners, payment processors, and technical service providers.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-sm font-bold text-slate-900">Sale of Personal Information</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                <strong>Hire2Hired does not sell candidate personal information</strong> to unrelated third parties for monetary consideration. If practices change, statutory opt-out choices will be provided.
              </p>
            </div>
          </div>

          {/* Retention & Privacy Policy */}
          <div className="space-y-2 bg-slate-50 p-4 rounded-2xl border border-slate-100 text-xs">
            <h3 className="font-bold text-slate-900">Retention Policy</h3>
            <p className="text-slate-600 leading-relaxed font-medium">
              Hire2Hired retains information for periods appropriate to the purpose for which it was collected and as necessary for legal, contractual, business, security, accounting, recruitment, staffing, and other legitimate purposes.
            </p>
          </div>

          {/* Contact Banner */}
          <div className="bg-slate-900 rounded-2xl p-6 text-white flex flex-wrap items-center justify-between gap-4">
            <div className="space-y-1 text-xs">
              <div className="font-bold text-white">Hire2Hired Inc.</div>
              <div className="text-slate-400">Privacy & Legal Department • Casper, WY, USA</div>
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
                href="mailto:legal@hire2hired.com?subject=Notice%20at%20Collection%20Inquiry" 
                className="px-4 py-2 rounded-xl bg-sky-600 hover:bg-sky-700 text-white text-xs font-bold no-underline flex items-center gap-1.5"
              >
                <Mail className="w-3.5 h-3.5" /> legal@hire2hired.com
              </a>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

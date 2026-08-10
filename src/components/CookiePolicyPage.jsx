import React, { useState } from 'react';
import { Cookie, Shield, Mail, Home, ChevronRight, CheckCircle2, Lock, BarChart3, Target, Settings } from 'lucide-react';

export default function CookiePolicyPage({ onNavigate, isFullPage = true }) {
  const [cookiePreferences, setCookiePreferences] = useState({
    essential: true, // Always true & disabled
    analytics: true,
    marketing: true
  });

  const [savedStatus, setSavedStatus] = useState(false);

  const handleSavePreferences = () => {
    setSavedStatus(true);
    setTimeout(() => setSavedStatus(false), 3000);
  };

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
            <span className="text-indigo-600 font-extrabold">Cookie Policy</span>
          </div>
        )}

        {/* Policy Card */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xl space-y-8 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-amber-500 via-indigo-500 to-sky-500"></div>

          {/* Header */}
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-100 text-amber-800 text-xs font-extrabold uppercase tracking-wider">
              <Cookie className="w-4 h-4 text-amber-600" /> COOKIE & TRACKING POLICY
            </div>
            
            <h1 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900">
              Cookie Policy
            </h1>
            
            <p className="text-xs text-slate-500 font-bold">
              HIRE2HIRED INC. • Effective & Last Updated: <strong>August 10, 2026</strong>
            </p>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium pt-2 border-t border-slate-100">
              This Cookie Policy explains how Hire2Hired Inc. ("Hire2Hired," "Company," "we," "us," or "our") uses cookies, pixels, tags, local storage, SDKs, and similar technologies on our website and portals.
            </p>
          </div>

          {/* Section 1 & 2: What & Why */}
          <div className="grid sm:grid-cols-2 gap-6 bg-slate-50 p-6 rounded-2xl border border-slate-100 text-xs leading-relaxed">
            <div className="space-y-2">
              <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <Cookie className="w-4 h-4 text-amber-600" /> 1. What Are Cookies?
              </h3>
              <p className="text-slate-600 font-medium">
                Cookies are small files or similar technologies stored on your browser or device when you visit a website. Hire2Hired may use cookies, web beacons, local storage, and analytics SDKs.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <Shield className="w-4 h-4 text-indigo-600" /> 2. Why We Use Cookies
              </h3>
              <p className="text-slate-600 font-medium">
                We use cookies to operate the site, maintain secure account sessions, authenticate candidates & clients, analyze traffic, measure performance, and track marketing efficiency.
              </p>
            </div>
          </div>

          {/* Section 3: Types of Cookies (Interactive Preference Box) */}
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-2">
              <Settings className="w-5 h-5 text-indigo-600" /> 3. Types of Cookies We Use & Preference Settings
            </h2>

            <div className="space-y-3">
              {/* Essential */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex flex-wrap items-start justify-between gap-4">
                <div className="space-y-1 max-w-xl">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                    <Lock className="w-4 h-4 text-emerald-600" /> Essential Cookies (Always Active)
                  </div>
                  <p className="text-xs text-slate-600 font-medium">
                    Necessary for account login, security authentication, session management, and website functionality. These cannot be disabled.
                  </p>
                </div>

                <div className="px-3 py-1 bg-emerald-100 text-emerald-800 text-xs font-bold rounded-full border border-emerald-200">
                  Required
                </div>
              </div>

              {/* Analytics */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex flex-wrap items-start justify-between gap-4">
                <div className="space-y-1 max-w-xl">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                    <BarChart3 className="w-4 h-4 text-indigo-600" /> Analytics Cookies (Google Analytics)
                  </div>
                  <p className="text-xs text-slate-600 font-medium">
                    Helps us understand visitor counts, popular courses, website navigation, traffic sources, and performance patterns.
                  </p>
                </div>

                <label className="relative inline-flex items-center cursor-pointer">
                  <input 
                    type="checkbox" 
                    checked={cookiePreferences.analytics} 
                    onChange={(e) => setCookiePreferences({...cookiePreferences, analytics: e.target.checked})} 
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-slate-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
                </label>
              </div>

              {/* Marketing */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex flex-wrap items-start justify-between gap-4">
                <div className="space-y-1 max-w-xl">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                    <Target className="w-4 h-4 text-amber-600" /> Marketing & Advertising Technologies (Meta Pixel)
                  </div>
                  <p className="text-xs text-slate-600 font-medium">
                    Used for conversion tracking, marketing campaign evaluation, and targeted recruitment outreach where permitted.
                  </p>
                </div>

                <label className="relative inline-flex items-center cursor-pointer">
                  <input 
                    type="checkbox" 
                    checked={cookiePreferences.marketing} 
                    onChange={(e) => setCookiePreferences({...cookiePreferences, marketing: e.target.checked})} 
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-slate-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
                </label>
              </div>

            </div>

            {/* Save Button */}
            <div className="flex items-center justify-between pt-2">
              <button 
                onClick={handleSavePreferences}
                className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-extrabold border-0 cursor-pointer transition flex items-center gap-2"
              >
                <CheckCircle2 className="w-4 h-4" /> Save Cookie Preferences
              </button>

              {savedStatus && (
                <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                  Preferences saved successfully!
                </span>
              )}
            </div>
          </div>

          {/* Section 4 & 5: Third-Party & Managing Cookies */}
          <div className="grid sm:grid-cols-2 gap-6 pt-2 border-t border-slate-100 text-xs">
            <div className="space-y-2">
              <h3 className="text-sm font-bold text-slate-900">4. Third-Party Technologies</h3>
              <p className="text-slate-600 leading-relaxed font-medium">
                Third-party providers (analytics, advertising, security, payment, and social media providers) may place or access cookies on our platform under their independent privacy policies.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-sm font-bold text-slate-900">5. Browser Controls</h3>
              <p className="text-slate-600 leading-relaxed font-medium">
                You can manage or block cookies through your browser or device settings. Disabling essential cookies may impair core website functions like login or application submission.
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
                href="mailto:legal@hire2hired.com?subject=Cookie%20Policy%20Inquiry" 
                className="px-4 py-2 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold no-underline flex items-center gap-1.5"
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

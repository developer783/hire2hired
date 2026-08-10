import React, { useState } from 'react';
import { 
  Building2, Lock, Mail, ArrowRight, ShieldCheck, CheckCircle2, 
  Home, ChevronRight, KeyRound, Sparkles
} from 'lucide-react';
import heroImg from '../assets/employer_login.png';

export default function EmployerLoginPage({ onNavigate, onRequestCallback, isFullPage = true }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(true);
  const [loading, setLoading] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setLoggedIn(true);
    }, 700);
  };

  return (
    <div className={`bg-[#fafbfd] ${isFullPage ? 'pt-24 pb-20' : 'py-20 md:py-28'} border-b border-slate-200/80 min-h-[85vh]`}>
      <div className="container-main">
        
        {/* Full Page Breadcrumbs */}
        {isFullPage && (
          <div className="max-w-5xl mx-auto mb-8 flex items-center gap-2 text-xs font-bold text-slate-500">
            <a href="#home" onClick={(e) => { e.preventDefault(); onNavigate('home'); }} className="flex items-center gap-1 text-slate-600 hover:text-indigo-600 no-underline">
              <Home className="w-3.5 h-3.5" /> Home
            </a>
            <ChevronRight className="w-3 h-3 text-slate-400" />
            <a href="#bookconsultation" onClick={(e) => { e.preventDefault(); onNavigate('bookconsultation'); }} className="text-slate-600 hover:text-indigo-600 no-underline">
              Employers
            </a>
            <ChevronRight className="w-3 h-3 text-slate-400" />
            <span className="text-indigo-600 font-extrabold">Employer Portal Login</span>
          </div>
        )}

        <div className="max-w-5xl mx-auto grid lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Visual Illustration & Features (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-gradient-to-tr from-slate-900 via-indigo-950 to-slate-900 rounded-[32px] p-4 border border-slate-800 shadow-2xl relative overflow-hidden group">
              <div className="flex items-center justify-between px-4 py-2 border-b border-slate-800 text-[11px] font-mono text-slate-400">
                <span className="text-slate-300 font-bold">Employer Portal Secure SSL</span>
                <span className="text-emerald-400 font-bold">● ENCRYPTED</span>
              </div>
              <div className="relative rounded-2xl overflow-hidden mt-3 border border-slate-800">
                <img 
                  src={heroImg} 
                  alt="Hire2Hired Employer Secure Portal" 
                  className="w-full h-auto object-cover rounded-2xl transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-2xs space-y-3 text-xs font-semibold text-slate-700">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                <span>Instant access to top 5% pre-screened candidate profiles</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                <span>Real-time AI technical scorecards & video highlights</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                <span>Manage active job requisitions & 14-day trial candidates</span>
              </div>
            </div>
          </div>

          {/* Right Column: Employer Login Form Card (7 Cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm space-y-6">
            
            <div className="text-center sm:text-left space-y-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-extrabold mb-2">
                <Building2 className="w-3.5 h-3.5" /> ENTERPRISE EMPLOYER PORTAL
              </div>
              <h1 className="text-3xl font-display font-extrabold text-slate-900 tracking-tight">
                Employer Login
              </h1>
              <p className="text-slate-500 text-xs sm:text-sm">
                Sign in to your Hire2Hired employer dashboard to view candidates and manage requisitions.
              </p>
            </div>

            {loggedIn ? (
              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center space-y-3 animate-in zoom-in-95">
                <div className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto shadow-md">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-extrabold text-slate-900">Welcome Back to Employer Portal!</h3>
                <p className="text-slate-600 text-xs max-w-sm mx-auto">
                  Signed in as <strong>{email}</strong>. Redirecting you to your active candidate dashboard...
                </p>
                <button 
                  onClick={() => onNavigate('bookconsultation')}
                  className="mt-4 px-6 py-2.5 rounded-xl bg-indigo-600 text-white text-xs font-bold border-0 cursor-pointer shadow"
                >
                  View Candidate Profiles & Requisitions
                </button>
              </div>
            ) : (
              <form onSubmit={handleLogin} className="space-y-4">
                
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">Work Email Address <span className="text-rose-500">*</span></label>
                  <div className="relative">
                    <Mail className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input 
                      type="email" 
                      required
                      placeholder="name@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-10 pr-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 outline-none focus:border-indigo-600 focus:bg-white transition"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="block text-xs font-bold text-slate-700">Password <span className="text-rose-500">*</span></label>
                    <a href="#forgot" onClick={(e) => { e.preventDefault(); alert("Password reset link sent to your work email."); }} className="text-xs font-bold text-indigo-600 hover:underline">
                      Forgot Password?
                    </a>
                  </div>
                  <div className="relative">
                    <Lock className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input 
                      type="password" 
                      required
                      placeholder="••••••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full pl-10 pr-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 outline-none focus:border-indigo-600 focus:bg-white transition"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs font-bold text-slate-600 pt-1">
                  <label className="flex items-center gap-2 cursor-pointer select-none">
                    <input 
                      type="checkbox" 
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      className="rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
                    />
                    <span>Remember this device</span>
                  </label>
                  <span className="text-emerald-600 font-extrabold">2FA Enabled</span>
                </div>

                <button 
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-xl btn-blue font-extrabold text-sm shadow-md hover:scale-[1.01] transition-all border-0 cursor-pointer flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <span>Authenticating...</span>
                  ) : (
                    <>
                      Sign In to Employer Portal <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>

                <div className="pt-6 text-center space-y-4">
                  <p className="text-xs font-semibold text-slate-600">
                    Don't have an account?{' '}
                    <a 
                      href="#signup" 
                      onClick={(e) => { e.preventDefault(); onNavigate('signup'); }} 
                      className="font-extrabold text-indigo-600 hover:text-indigo-700 underline cursor-pointer"
                    >
                      Sign up as an employer
                    </a>
                  </p>

                  <div className="border-t border-slate-100 pt-4">
                    <p className="text-xs font-semibold text-slate-600">
                      Are you a consultant?{' '}
                      <a 
                        href="#login" 
                        onClick={(e) => { e.preventDefault(); onNavigate('login'); }} 
                        className="font-extrabold text-indigo-600 hover:text-indigo-700 underline cursor-pointer"
                      >
                        Sign in here
                      </a>
                    </p>
                  </div>
                </div>

              </form>
            )}

          </div>

        </div>

      </div>
    </div>
  );
}

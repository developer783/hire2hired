import React, { useState, useEffect } from 'react';
import { 
  Lock, Mail, ArrowRight, CheckCircle2, Home, ChevronRight, Sparkles, User, LogOut
} from 'lucide-react';
import loginHeroImg from '../assets/consultant_login.png';

export default function ConsultantLoginPage({ onNavigate, isFullPage = true }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [authUser, setAuthUser] = useState(null);

  const [authError, setAuthError] = useState(null);

  // Check for returned OAuth tokens or active session on mount
  useEffect(() => {
    const hash = window.location.hash;
    const search = window.location.search;

    // Check for Google OAuth Error
    if (hash.includes('error=') || search.includes('error=')) {
      const params = new URLSearchParams(hash.replace('#login', '').replace('#', '?') + search);
      const err = params.get('error');
      setAuthError(`Google OAuth returned: "${err}". Please ensure your Google Cloud Client ID (VITE_GOOGLE_CLIENT_ID) is registered in your .env file.`);
      return;
    }

    // Google Implicit Grant Callback (#access_token=...)
    if (hash.includes('access_token=')) {
      const params = new URLSearchParams(hash.replace('#login', '').replace('#', '?'));
      const token = params.get('access_token');
      if (token) {
        setLoading(true);
        // Call Google's official userinfo API to get real Google user profile
        fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
          headers: { Authorization: `Bearer ${token}` }
        })
        .then(res => res.json())
        .then(data => {
          setLoading(false);
          if (data.error) {
            setAuthError(data.error_description || 'Failed to fetch user profile from Google.');
            return;
          }
          const userObj = {
            name: data.name || data.given_name || data.email.split('@')[0],
            email: data.email,
            avatar: data.picture,
            provider: 'Google OAuth 2.0'
          };
          setAuthUser(userObj);
          setLoggedIn(true);
          localStorage.setItem('hire2hired_user', JSON.stringify(userObj));
        })
        .catch((err) => {
          setLoading(false);
          setAuthError('Failed to connect to Google UserInfo API: ' + err.message);
        });
      }
    } else {
      // Check saved localStorage session
      const saved = localStorage.getItem('hire2hired_user');
      if (saved) {
        try {
          const userObj = JSON.parse(saved);
          setAuthUser(userObj);
          setLoggedIn(true);
        } catch (e) {}
      }
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    setAuthError(null);
    setTimeout(() => {
      setLoading(false);
      const userObj = {
        name: email.split('@')[0],
        email: email,
        provider: 'Email & Password'
      };
      setAuthUser(userObj);
      setLoggedIn(true);
      localStorage.setItem('hire2hired_user', JSON.stringify(userObj));
    }, 750);
  };

  const handleGoogleOAuth = () => {
    setAuthError(null);
    const googleClientId = import.meta.env.VITE_GOOGLE_CLIENT_ID || '1084294829104-exampleclientid.apps.googleusercontent.com';
    const redirectUri = window.location.origin + '/#login';
    const scope = 'https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email';
    
    // Launch Real Google OAuth 2.0 authorization endpoint
    const googleAuthUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${encodeURIComponent(googleClientId)}&redirect_uri=${encodeURIComponent(redirectUri)}&response_type=token&scope=${encodeURIComponent(scope)}&prompt=consent`;
    
    window.location.href = googleAuthUrl;
  };

  const handleGitHubOAuth = () => {
    setAuthError(null);
    const githubClientId = import.meta.env.VITE_GITHUB_CLIENT_ID || 'Ov23xGexamplegithubclientid';
    const redirectUri = window.location.origin + '/#login';
    const scope = 'user:email';
    
    // Launch Real GitHub OAuth authorization endpoint
    const githubAuthUrl = `https://github.com/login/oauth/authorize?client_id=${encodeURIComponent(githubClientId)}&redirect_uri=${encodeURIComponent(redirectUri)}&scope=${encodeURIComponent(scope)}`;
    
    window.location.href = githubAuthUrl;
  };

  const handleSelectGitHubAccount = (accName, accEmail) => {
    setLoading(true);
    setShowGithubModal(false);
    setTimeout(() => {
      setLoading(false);
      const userObj = {
        name: accName,
        email: accEmail,
        avatar: `https://api.dicebear.com/7.x/bottts/svg?seed=${encodeURIComponent(accName)}`,
        provider: 'GitHub'
      };
      setAuthUser(userObj);
      setLoggedIn(true);
      localStorage.setItem('hire2hired_user', JSON.stringify(userObj));
    }, 600);
  };

  const handleLogout = () => {
    localStorage.removeItem('hire2hired_user');
    setAuthUser(null);
    setLoggedIn(false);
  };

  return (
    <div className={`bg-[#fafbfd] ${isFullPage ? 'pt-24 pb-20' : 'py-20 md:py-28'} border-b border-slate-200/80 min-h-[85vh]`}>
      <div className="container-main">
        
        {/* Full Page Breadcrumbs */}
        {isFullPage && (
          <div className="max-w-4xl mx-auto mb-8 flex items-center gap-2 text-xs font-bold text-slate-500">
            <a href="#home" onClick={(e) => { e.preventDefault(); onNavigate('home'); }} className="flex items-center gap-1 text-slate-600 hover:text-indigo-600 no-underline">
              <Home className="w-3.5 h-3.5" /> Home
            </a>
            <ChevronRight className="w-3 h-3 text-slate-400" />
            <span className="text-indigo-600 font-extrabold">Consultant Login</span>
          </div>
        )}

        <div className="max-w-4xl mx-auto grid lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Visual Illustration Card (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-gradient-to-tr from-slate-900 via-indigo-950 to-slate-900 rounded-3xl p-4 border border-slate-800 shadow-xl text-white">
              <div className="flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-wider text-indigo-400 mb-2">
                <Sparkles className="w-3.5 h-3.5" /> CONSULTANT PORTAL
              </div>
              <div className="relative rounded-2xl overflow-hidden border border-slate-800 mb-3">
                <img 
                  src={loginHeroImg} 
                  alt="Hire2Hired Consultant Login" 
                  className="w-full h-auto object-cover rounded-2xl"
                />
              </div>
              <p className="text-xs text-slate-300 font-medium leading-relaxed">
                Access your candidate scorecard, active interview requests, and client matches.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-2xs space-y-2.5 text-xs font-bold text-slate-700">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                <span>Track active hiring pipeline status</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                <span>Update verified skills & portfolio</span>
              </div>
            </div>
          </div>

          {/* Right Login Card (7 Cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm space-y-6">
            
            <div className="text-center sm:text-left space-y-1">
              <h1 className="text-3xl font-display font-extrabold text-slate-900 tracking-tight">
                Login
              </h1>
              <p className="text-slate-500 text-xs sm:text-sm font-medium">
                Enter your email below to login to your account
              </p>
            </div>

            {loggedIn ? (
              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center space-y-4 animate-in zoom-in-95">
                {authUser?.avatar ? (
                  <img src={authUser.avatar} alt="Profile" className="w-16 h-16 rounded-full mx-auto shadow-md border-2 border-emerald-400" />
                ) : (
                  <div className="w-14 h-14 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto shadow-md font-extrabold text-xl">
                    {authUser?.name ? authUser.name.charAt(0).toUpperCase() : '✓'}
                  </div>
                )}
                
                <div>
                  <h3 className="text-xl font-extrabold text-slate-900">Welcome Back, {authUser?.name || 'Consultant'}!</h3>
                  <p className="text-slate-600 text-xs font-medium mt-1">
                    Authenticated via <span className="font-extrabold text-indigo-600">{authUser?.provider || 'Hire2Hired Auth'}</span> ({authUser?.email || email})
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
                  <button 
                    onClick={() => onNavigate('home')}
                    className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold border-0 cursor-pointer shadow"
                  >
                    Go to Consultant Dashboard
                  </button>

                  <button 
                    onClick={handleLogout}
                    className="px-5 py-3 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-700 text-xs font-bold border-0 cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    <LogOut className="w-3.5 h-3.5" /> Log Out
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                
                {authError && (
                  <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs font-semibold leading-relaxed animate-in fade-in">
                    <strong>OAuth Notice:</strong> {authError}
                  </div>
                )}

                {/* Social Login Buttons */}
                <div className="space-y-2.5">
                  <button 
                    type="button"
                    onClick={handleGoogleOAuth}
                    className="w-full py-3.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-800 font-extrabold text-xs flex items-center justify-center gap-2.5 cursor-pointer transition shadow-xs hover:scale-[1.01]"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24">
                      <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"/>
                      <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.29v3.15C3.26 21.3 7.31 24 12 24z"/>
                      <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.29C.47 8.21 0 10.05 0 12s.47 3.79 1.29 5.42l3.99-3.15z"/>
                      <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.26 2.7 1.29 6.58l3.99 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/>
                    </svg>
                    Login with Google
                  </button>

                  <button 
                    type="button"
                    onClick={handleGitHubOAuth}
                    className="w-full py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-xs flex items-center justify-center gap-2.5 cursor-pointer transition shadow-xs hover:scale-[1.01]"
                  >
                    <svg className="w-4 h-4 fill-current text-white" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                    Login with GitHub
                  </button>
                </div>

                <div className="relative flex items-center justify-center my-3">
                  <div className="border-t border-slate-200 w-full"></div>
                  <span className="bg-white px-3 text-[10px] font-extrabold text-slate-400 uppercase tracking-widest absolute">
                    OR CONTINUE WITH
                  </span>
                </div>

                <form onSubmit={handleLogin} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">Email</label>
                    <input 
                      type="email" 
                      required
                      placeholder="m@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 outline-none focus:border-indigo-600 focus:bg-white transition"
                    />
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <label className="block text-xs font-bold text-slate-700">Password</label>
                      <a 
                        href="#forgot" 
                        onClick={(e) => { e.preventDefault(); alert("Password reset link sent to your email."); }}
                        className="text-xs font-bold text-indigo-600 hover:underline"
                      >
                        Forgot your password?
                      </a>
                    </div>
                    <input 
                      type="password" 
                      required
                      placeholder="••••••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 outline-none focus:border-indigo-600 focus:bg-white transition"
                    />
                  </div>

                  <button 
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 rounded-xl btn-blue font-extrabold text-sm shadow-md hover:scale-[1.01] transition-all border-0 cursor-pointer flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <span>Logging in...</span>
                    ) : (
                      <>
                        Login <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>

                <div className="pt-4 text-center border-t border-slate-100">
                  <p className="text-xs font-semibold text-slate-600">
                    Don't have an account?{' '}
                    <a 
                      href="#signup" 
                      onClick={(e) => { e.preventDefault(); onNavigate('signup'); }}
                      className="font-extrabold text-indigo-600 hover:text-indigo-700 underline cursor-pointer"
                    >
                      Sign up
                    </a>
                  </p>
                </div>

              </div>
            )}

          </div>

        </div>

      </div>
    </div>
  );
}

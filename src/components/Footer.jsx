import React from 'react';
import { ArrowRight, Mail, Phone, MapPin, Linkedin, Twitter, Youtube, Github, Sparkles } from 'lucide-react';

export default function Footer({ onRequestCallback, onNavigate }) {
  const handleNav = (e, view) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(view);
    }
  };

  return (
    <footer className="bg-slate-950 text-slate-400 pt-16 pb-12 border-t border-slate-800">
      <div className="container-main space-y-12">
        
        {/* Top Brand Banner & Info */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-10 border-b border-slate-800/80">
          <div className="space-y-3 max-w-xl">
            <a href="#home" onClick={(e) => handleNav(e, 'home')} className="flex items-center gap-2.5 no-underline">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-purple-600 flex items-center justify-center text-white font-bold text-xl shadow-md">
                H2
              </div>
              <span className="font-display font-extrabold text-2xl tracking-tight text-white">
                Hire<span className="text-indigo-500">2</span>Hired
              </span>
            </a>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-medium">
              AI-Powered Talent Matching & Enterprise Staffing Solutions. Connecting elite tech consultants and top enterprise employers nationwide.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button 
              onClick={onRequestCallback}
              className="py-3 px-5 rounded-full bg-slate-900 hover:bg-slate-800 text-white text-xs font-extrabold border border-slate-800 cursor-pointer transition flex items-center gap-2"
            >
              <Phone className="w-3.5 h-3.5 text-indigo-400" />
              Request Callback
            </button>
            <button 
              onClick={(e) => handleNav(e, 'signup')}
              className="py-3 px-6 rounded-full btn-blue text-xs font-extrabold flex items-center gap-2 border-0 cursor-pointer shadow-md hover:scale-105 transition-transform"
            >
              <Sparkles className="w-3.5 h-3.5" />
              Get Started
            </button>
          </div>
        </div>

        {/* 8 Main Navigation Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 pb-12 border-b border-slate-800/80">
          
          {/* 1. COURSES */}
          <div className="space-y-3">
            <h4 className="font-extrabold text-white text-xs uppercase tracking-wider text-indigo-400">Courses</h4>
            <ul className="space-y-2 text-xs font-medium">
              <li><a href="#courses" onClick={(e) => handleNav(e, 'courses')} className="hover:text-white transition no-underline">All Courses</a></li>
              <li><a href="#courses" onClick={(e) => handleNav(e, 'courses')} className="hover:text-white transition no-underline">Java + AI</a></li>
              <li><a href="#courses" onClick={(e) => handleNav(e, 'courses')} className="hover:text-white transition no-underline">Cloud & DevOps</a></li>
              <li><a href="#courses" onClick={(e) => handleNav(e, 'courses')} className="hover:text-white transition no-underline">AI Developer</a></li>
              <li><a href="#courses" onClick={(e) => handleNav(e, 'courses')} className="hover:text-white transition no-underline">Cybersecurity</a></li>
              <li><a href="#courses" onClick={(e) => handleNav(e, 'courses')} className="hover:text-white transition no-underline">Data Engineer</a></li>
            </ul>
          </div>

          {/* 2. SERVICES */}
          <div className="space-y-3">
            <h4 className="font-extrabold text-white text-xs uppercase tracking-wider text-indigo-400">Services</h4>
            <ul className="space-y-2 text-xs font-medium">
              <li><a href="#services" onClick={(e) => handleNav(e, 'services')} className="hover:text-white transition no-underline">IT Services Overview</a></li>
              <li><a href="#employer-service-talent-sourcing" onClick={(e) => handleNav(e, 'employer-service-talent-sourcing')} className="hover:text-white transition no-underline">Talent Sourcing</a></li>
              <li><a href="#consultant-service-resume-optimization" onClick={(e) => handleNav(e, 'consultant-service-resume-optimization')} className="hover:text-white transition no-underline">AI Resume Scanning</a></li>
              <li><a href="#consultant-service-career-matching" onClick={(e) => handleNav(e, 'consultant-service-career-matching')} className="hover:text-white transition no-underline">Smart Matching</a></li>
              <li><a href="#employer-service-recruitment" onClick={(e) => handleNav(e, 'employer-service-recruitment')} className="hover:text-white transition no-underline">Executive Staffing</a></li>
            </ul>
          </div>

          {/* 3. ABOUT */}
          <div className="space-y-3">
            <h4 className="font-extrabold text-white text-xs uppercase tracking-wider text-indigo-400">About</h4>
            <ul className="space-y-2 text-xs font-medium">
              <li><a href="#our-story" onClick={(e) => handleNav(e, 'our-story')} className="hover:text-white transition no-underline">Our Story</a></li>
              <li><a href="#why-choose-us" onClick={(e) => handleNav(e, 'why-choose-us')} className="hover:text-white transition no-underline">Why Choose Us</a></li>
              <li><a href="#careers" onClick={(e) => handleNav(e, 'careers')} className="hover:text-white transition no-underline text-emerald-400 font-bold">Careers</a></li>
              <li><a href="#contact" onClick={(e) => handleNav(e, 'contact')} className="hover:text-white transition no-underline">Contact Us</a></li>
            </ul>
          </div>

          {/* 4. FOR CONSULTANTS */}
          <div className="space-y-3">
            <h4 className="font-extrabold text-white text-xs uppercase tracking-wider text-indigo-400">For Consultants</h4>
            <ul className="space-y-2 text-xs font-medium">
              <li><a href="#consultants" onClick={(e) => handleNav(e, 'consultants')} className="hover:text-white transition no-underline">Overview</a></li>
              <li><a href="#how-it-works" onClick={(e) => handleNav(e, 'how-it-works')} className="hover:text-white transition no-underline">How It Works</a></li>
              <li><a href="#consultant-service-interview-prep" onClick={(e) => handleNav(e, 'consultant-service-interview-prep')} className="hover:text-white transition no-underline">AI Interview Prep</a></li>
              <li><a href="#consultant-service-skills-assessment" onClick={(e) => handleNav(e, 'consultant-service-skills-assessment')} className="hover:text-white transition no-underline">Skills Assessment</a></li>
              <li><a href="#consultant-service-career-intelligence" onClick={(e) => handleNav(e, 'consultant-service-career-intelligence')} className="hover:text-white transition no-underline">Rate Intelligence</a></li>
              <li><a href="#consultant-service-personal-branding" onClick={(e) => handleNav(e, 'consultant-service-personal-branding')} className="hover:text-white transition no-underline">Personal Branding</a></li>
            </ul>
          </div>

          {/* 5. FOR EMPLOYERS */}
          <div className="space-y-3">
            <h4 className="font-extrabold text-white text-xs uppercase tracking-wider text-indigo-400">For Employers</h4>
            <ul className="space-y-2 text-xs font-medium">
              <li><a href="#employers" onClick={(e) => handleNav(e, 'employers')} className="hover:text-white transition no-underline">Overview</a></li>
              <li><a href="#employer-how-it-works" onClick={(e) => handleNav(e, 'employer-how-it-works')} className="hover:text-white transition no-underline">How It Works</a></li>
              <li><a href="#employer-service-hiring-analytics" onClick={(e) => handleNav(e, 'employer-service-hiring-analytics')} className="hover:text-white transition no-underline">Hiring Analytics</a></li>
              <li><a href="#employer-service-screening" onClick={(e) => handleNav(e, 'employer-service-screening')} className="hover:text-white transition no-underline">AI Candidate Screening</a></li>
              <li><a href="#employer-service-cultural-fit" onClick={(e) => handleNav(e, 'employer-service-cultural-fit')} className="hover:text-white transition no-underline">Cultural Fit Matching</a></li>
              <li><a href="#bookconsultation" onClick={(e) => handleNav(e, 'bookconsultation')} className="hover:text-white transition no-underline text-indigo-400 font-bold">Book Consultation</a></li>
            </ul>
          </div>

          {/* 6. INDUSTRIES */}
          <div className="space-y-3">
            <h4 className="font-extrabold text-white text-xs uppercase tracking-wider text-indigo-400">Industries</h4>
            <ul className="space-y-2 text-xs font-medium">
              <li><a href="#industry-technology" onClick={(e) => handleNav(e, 'industry-technology')} className="hover:text-white transition no-underline">Technology & AI</a></li>
              <li><a href="#industry-healthcare" onClick={(e) => handleNav(e, 'industry-healthcare')} className="hover:text-white transition no-underline">Healthcare Tech</a></li>
              <li><a href="#industry-engineering" onClick={(e) => handleNav(e, 'industry-engineering')} className="hover:text-white transition no-underline">Engineering</a></li>
              <li><a href="#industry-finance" onClick={(e) => handleNav(e, 'industry-finance')} className="hover:text-white transition no-underline">Finance & Banking</a></li>
              <li><a href="#industry-marketing" onClick={(e) => handleNav(e, 'industry-marketing')} className="hover:text-white transition no-underline">Marketing & Media</a></li>
              <li><a href="#industry-consulting" onClick={(e) => handleNav(e, 'industry-consulting')} className="hover:text-white transition no-underline">Strategy Consulting</a></li>
            </ul>
          </div>

          {/* 7. RESOURCES */}
          <div className="space-y-3">
            <h4 className="font-extrabold text-white text-xs uppercase tracking-wider text-indigo-400">Resources</h4>
            <ul className="space-y-2 text-xs font-medium">
              <li><a href="#blog" onClick={(e) => handleNav(e, 'blog')} className="hover:text-white transition no-underline">Blog & Insights</a></li>
              <li><a href="#faq" onClick={(e) => handleNav(e, 'faq')} className="hover:text-white transition no-underline text-amber-400 font-bold">FAQ Section</a></li>
              <li><a href="#courses" onClick={(e) => handleNav(e, 'courses')} className="hover:text-white transition no-underline">Tech Bootcamps</a></li>
              <li><a href="#services" onClick={(e) => handleNav(e, 'services')} className="hover:text-white transition no-underline">Enterprise Whitepapers</a></li>
            </ul>
          </div>

          {/* 8. CONTACT */}
          <div className="space-y-3">
            <h4 className="font-extrabold text-white text-xs uppercase tracking-wider text-indigo-400">Contact</h4>
            <div className="space-y-2 text-xs font-medium">
              <a href="#contact" onClick={(e) => handleNav(e, 'contact')} className="hover:text-white font-bold block no-underline text-indigo-400">
                Contact Form →
              </a>
              <div className="flex items-center gap-2 text-slate-400">
                <Mail className="w-3.5 h-3.5 text-indigo-400 flex-shrink-0" />
                <a href="mailto:support@hire2hired.com" className="hover:text-white no-underline text-slate-400">support@hire2hired.com</a>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <Phone className="w-3.5 h-3.5 text-indigo-400 flex-shrink-0" />
                <a href="tel:3073847833" className="hover:text-white no-underline text-slate-400">307-384-7833</a>
              </div>
              <div className="flex items-start gap-2 text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-indigo-400 flex-shrink-0 mt-0.5" />
                <span>Casper, WY, USA</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar & Socials */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© 2026 Hire2Hired Inc. All rights reserved.</p>
          
          <div className="flex items-center gap-3">
            <a href="#" className="w-8 h-8 rounded-full bg-slate-900 border border-slate-800 hover:border-indigo-500 hover:text-indigo-400 flex items-center justify-center text-slate-400 transition">
              <Linkedin className="w-3.5 h-3.5" />
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-slate-900 border border-slate-800 hover:border-indigo-500 hover:text-indigo-400 flex items-center justify-center text-slate-400 transition">
              <Twitter className="w-3.5 h-3.5" />
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-slate-900 border border-slate-800 hover:border-indigo-500 hover:text-indigo-400 flex items-center justify-center text-slate-400 transition">
              <Youtube className="w-3.5 h-3.5" />
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-slate-900 border border-slate-800 hover:border-indigo-500 hover:text-indigo-400 flex items-center justify-center text-slate-400 transition">
              <Github className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <a href="#privacy" onClick={(e) => handleNav(e, 'privacy')} className="hover:text-slate-400 no-underline">Privacy Policy</a>
            <a href="#candidate-privacy-notice" onClick={(e) => handleNav(e, 'candidate-privacy-notice')} className="hover:text-slate-400 no-underline">Candidate Privacy Notice</a>
            <a href="#notice-at-collection" onClick={(e) => handleNav(e, 'notice-at-collection')} className="hover:text-slate-400 no-underline">Notice at Collection</a>
            <a href="#terms" onClick={(e) => handleNav(e, 'terms')} className="hover:text-slate-400 no-underline">Terms of Service</a>
            <a href="#careers" onClick={(e) => handleNav(e, 'careers')} className="hover:text-slate-400 no-underline">Careers</a>
          </div>
        </div>

      </div>
    </footer>
  );
}

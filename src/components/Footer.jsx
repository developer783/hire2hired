import React from 'react';
import { ArrowRight, Mail, Phone, MapPin, Linkedin, Twitter, Youtube, Github } from 'lucide-react';

export default function Footer({ onRequestCallback, onNavigate }) {
  const handleNav = (e, view) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(view);
    }
  };

  return (
    <footer className="bg-slate-950 text-slate-400 pt-16 pb-12 border-t border-slate-800">
      <div className="container-main">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#home" onClick={(e) => handleNav(e, 'home')} className="flex items-center gap-2.5 no-underline">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-purple-600 flex items-center justify-center text-white font-bold text-xl shadow-md">
                H2
              </div>
              <span className="font-display font-extrabold text-2xl tracking-tight text-white">
                Hire<span className="text-indigo-500">2</span>Hired
              </span>
            </a>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              AI-Powered Matching. Human-Perfected Results.<br />
              Connecting top consultants with leading companies nationwide through personalized service, advanced AI talent matching, and dedicated career advisors.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a href="#" className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 hover:border-indigo-500 hover:text-indigo-400 flex items-center justify-center text-slate-400 transition">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 hover:border-indigo-500 hover:text-indigo-400 flex items-center justify-center text-slate-400 transition">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 hover:border-indigo-500 hover:text-indigo-400 flex items-center justify-center text-slate-400 transition">
                <Youtube className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 hover:border-indigo-500 hover:text-indigo-400 flex items-center justify-center text-slate-400 transition">
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: For Consultants */}
          <div>
            <h4 className="font-bold text-white text-sm mb-4">For Consultants</h4>
            <ul className="space-y-2.5 text-xs">
              <li><a href="#our-story" onClick={(e) => handleNav(e, 'our-story')} className="hover:text-indigo-400 transition no-underline">Our Story</a></li>
              <li><a href="#blog" onClick={(e) => handleNav(e, 'blog')} className="hover:text-indigo-400 transition no-underline">Blog & Insights</a></li>
              <li><a href="#services" className="hover:text-indigo-400 transition no-underline">Career Matching</a></li>
              <li><a href="#services" className="hover:text-indigo-400 transition no-underline">Java & Enterprise Contracts</a></li>
              <li><a href="#services" className="hover:text-indigo-400 transition no-underline">AI & Data Science Roles</a></li>
              <li><a href="#services" className="hover:text-indigo-400 transition no-underline">Cloud & DevOps Contracts</a></li>
              <li><a href="#how-it-works" className="hover:text-indigo-400 transition no-underline">Resume & Interview Prep</a></li>
            </ul>
          </div>

          {/* Col 3: For Employers */}
          <div>
            <h4 className="font-bold text-white text-sm mb-4">For Employers</h4>
            <ul className="space-y-2.5 text-xs">
              <li><a href="#employers" className="hover:text-indigo-400 transition no-underline">AI Screening Platform</a></li>
              <li><a href="#employers" className="hover:text-indigo-400 transition no-underline">Pre-Vetted Consultant Pool</a></li>
              <li><a href="#employers" className="hover:text-indigo-400 transition no-underline">Staff Augmentation</a></li>
              <li><a href="#employers" className="hover:text-indigo-400 transition no-underline">Contract-to-Hire Placement</a></li>
              <li><a href="#transformations" className="hover:text-indigo-400 transition no-underline">Client Success Stories</a></li>
            </ul>
          </div>

          {/* Col 4: Contact Info */}
          <div>
            <h4 className="font-bold text-white text-sm mb-4">Get In Touch</h4>
            <div className="space-y-3 text-xs">
              <a href="#contact" onClick={(e) => handleNav(e, 'contact')} className="hover:text-indigo-400 font-bold block no-underline text-indigo-400">
                Contact Page →
              </a>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                <a href="mailto:support@hire2hired.com" className="hover:text-white no-underline text-slate-400">support@hire2hired.com</a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                <a href="tel:3073847833" className="hover:text-white no-underline text-slate-400">307-384-7833</a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-indigo-400 flex-shrink-0 mt-0.5" />
                <span>Casper, WY, USA</span>
              </div>

              <button 
                onClick={onRequestCallback}
                className="w-full mt-2 py-2.5 px-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold flex items-center justify-center gap-2 border-0 cursor-pointer transition shadow-sm"
              >
                Get Started
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© 2026 Hire2Hired. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-400 no-underline">Privacy Policy</a>
            <a href="#" className="hover:text-slate-400 no-underline">Terms of Service</a>
            <a href="#" className="hover:text-slate-400 no-underline">Careers</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

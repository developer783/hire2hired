import React, { useState } from 'react';
import { 
  FileText, Target, MessageSquare, CheckCircle, TrendingUp, Award,
  Sparkles, ArrowRight, Home, ChevronRight, ShieldCheck, Zap, 
  Clock, HelpCircle, ChevronDown, CheckCircle2, UserCheck, Cpu,
  Briefcase, Star, Lightbulb
} from 'lucide-react';
import heroImg from '../assets/consultant_signup.png';

export default function ConsultantServicesPage({ serviceSlug = 'resume-optimization', onNavigate, onOpenApply, isFullPage = true }) {
  const [activeSlug, setActiveSlug] = useState(serviceSlug);
  const [openFaq, setOpenFaq] = useState(null);

  const listNav = [
    { slug: 'resume-optimization', title: 'AI Resume Optimization', icon: FileText },
    { slug: 'career-matching', title: 'Smart Career Matching', icon: Target },
    { slug: 'interview-prep', title: 'AI Interview Prep', icon: MessageSquare },
    { slug: 'skills-assessment', title: 'Skills Assessment', icon: CheckCircle },
    { slug: 'career-path', title: 'Career Intelligence', icon: TrendingUp },
    { slug: 'personal-branding', title: 'Personal Branding', icon: Award }
  ];

  const getServiceData = (slug) => {
    switch (slug) {
      case 'career-matching':
        return {
          title: "Smart Career Matching",
          subtitle: "AI-powered job matching based on your hard technical skills, preferred rate cards, and remote work setup.",
          badge: "98.5% MATCH PRECISE",
          icon: Target,
          stats: [
            { label: "Matches / Mo", value: "3,500+" },
            { label: "Avg Placement", value: "6 Days" },
            { label: "Pay Premium", value: "+32%" }
          ],
          description: "Stop applying to 100s of generic job boards. Our neural engine matches your verified tech stack directly with hiring managers actively looking for your exact skills.",
          features: [
            { title: "Direct Hiring Manager Pipeline", desc: "Bypass third-party agency recruiters and get introduced directly to engineering VPs." },
            { title: "Compensation Transparency", desc: "View exact rate cards and salary ranges before accepting client interview invitations." },
            { title: "Timezone & Remote Flexibility", desc: "Filter roles matching 100% remote work, flexible hours, or hybrid options." },
            { title: "1-Click Application Approval", desc: "Submit your pre-verified dossier with a single click to open client roles." }
          ],
          faqs: [
            { q: "Do I have to pay to get matched with enterprise clients?", a: "No! Hire2Hired is 100% free for consultants. Clients pay our platform for talent matching and delivery." }
          ]
        };
      case 'interview-prep':
        return {
          title: "AI Interview Preparation",
          subtitle: "Practice with AI-driven mock interview simulations tailored to your specific target role and tech stack.",
          badge: "REAL-TIME AI MOCK INTERVIEWS",
          icon: MessageSquare,
          stats: [
            { label: "Interview Pass Rate", value: "91.4%" },
            { label: "AI Scenarios", value: "500+" },
            { label: "Feedback Speed", value: "Instant" }
          ],
          description: "Master system design, live coding, and behavioral STAR questions with interactive AI mock interviewers that evaluate syntax efficiency and response clarity.",
          features: [
            { title: "Role-Specific Technical Questions", desc: "Practice coding algorithms, system design architecture, and cloud framework scenarios." },
            { title: "Instant Speech & Tone Scorecard", desc: "Receive immediate feedback on pace, confidence, filler words, and technical depth." },
            { title: "Company-Specific Question Banks", desc: "Review real past interview questions asked by Fortune 500 tech hiring teams." },
            { title: "Video Replay Analytics", desc: "Watch playback with timestamped AI tips on improving your technical presentation." }
          ],
          faqs: [
            { q: "How realistic are the AI interview simulations?", a: "Our AI model is trained on thousands of actual technical interview scorecards from FAANG and enterprise hiring teams." }
          ]
        };
      case 'skills-assessment':
        return {
          title: "Skills Assessment & Portfolio",
          subtitle: "Showcase your skills with verified assessments, automated code reviews, and a high-impact profile.",
          badge: "VERIFIED CANDIDATE BADGING",
          icon: CheckCircle,
          stats: [
            { label: "Assessment Tests", value: "85+" },
            { label: "Hire Priority", value: "3x Higher" },
            { label: "Verified Badge", value: "100% Free" }
          ],
          description: "Earn verified skill badges in React, Java, Python, AWS, Kubernetes, and System Architecture that give you top tier placement on employer shortlists.",
          features: [
            { title: "Automated Live Code Challenges", desc: "Complete timed coding tests to prove algorithmic efficiency and clean architecture." },
            { title: "GitHub & Portfolio Verification", desc: "Import your public repositories to generate an automated code complexity scorecard." },
            { title: "Top 5% Candidate Badge", desc: "Stand out on employer searches with verified skill certifications and client reviews." },
            { title: "Interactive Project Showcase", desc: "Embed live project demos, architecture diagrams, and recommendation letters." }
          ],
          faqs: [
            { q: "How long do skill assessment tests take?", a: "Most skill assessments take 20 to 30 minutes and can be taken asynchronously whenever convenient." }
          ]
        };
      case 'career-intelligence':
      case 'career-path':
        return {
          title: "Career Path Intelligence",
          subtitle: "AI insights on high-demand tech skills, rate growth trajectories, and career acceleration opportunities.",
          badge: "CAREER MARKET INTELLIGENCE",
          icon: TrendingUp,
          stats: [
            { label: "Market Data Points", value: "1M+" },
            { label: "Rate Forecast", value: "98% Acc." },
            { label: "Growth Boost", value: "+40% Avg" }
          ],
          description: "Stay ahead of industry trends. Learn which tech stacks (like LLMs, PyTorch, Rust, Kubernetes) command the highest rate premiums in enterprise consulting.",
          features: [
            { title: "Hourly Rate & Compensation Predictor", desc: "Analyze real-time market rate benchmarks based on your location and years of experience." },
            { title: "Emerging Tech Skill Recommendations", desc: "Get personalized suggestions on high-paying frameworks to learn next." },
            { title: "Promotion & Seniority Roadmap", desc: "Step-by-step guidance on transitioning from Senior Engineer to Principal Architect or Tech Lead." },
            { title: "Industry Demand Heatmaps", desc: "See which sectors (FinTech, HealthTech, AI, SaaS) are hiring most aggressively." }
          ],
          faqs: [
            { q: "How often is the career market intelligence updated?", a: "Market rate data and skill demand metrics update weekly from real enterprise job postings." }
          ]
        };
      case 'personal-branding':
        return {
          title: "Personal Branding & Marketing",
          subtitle: "Build your professional brand with AI assistance to attract high-paying direct client contracts.",
          badge: "BRAND ACCELERATION",
          icon: Award,
          stats: [
            { label: "Profile Impressions", value: "10x Growth" },
            { label: "Inbound Offers", value: "4x Increase" },
            { label: "Rate Uplift", value: "+25%" }
          ],
          description: "Transform your tech profile into a magnetic personal brand. Optimize your LinkedIn, GitHub, and Hire2Hired dossier to convert client views into interviews.",
          features: [
            { title: "LinkedIn & Bio Optimization", desc: "AI-generated executive summary, headline, and project impact statements." },
            { title: "Featured Case Study Builder", desc: "Structure your past project wins using quantifiable metrics (e.g. reduced latency by 60%)." },
            { title: "Consultant Rate Card Generator", desc: "Establish competitive contract rates based on your verified portfolio strength." },
            { title: "Client Recommendation Collector", desc: "Automated tool to request and display verified manager recommendations." }
          ],
          faqs: [
            { q: "Will Hire2Hired help promote my profile to employers?", a: "Yes! High-rated profiles are featured in our weekly enterprise candidate digests sent to 500+ VP of Engineering subscribers." }
          ]
        };
      case 'resume-optimization':
      default:
        return {
          title: "AI Resume Optimization",
          subtitle: "Get your resume AI-optimized for maximum ATS impact, keyword density, and interview callbacks.",
          badge: "ATS RECRUITER APPROVED",
          icon: FileText,
          stats: [
            { label: "Interview Increase", value: "+240%" },
            { label: "ATS Score", value: "99 / 100" },
            { label: "Optimization Time", value: "< 60 Secs" }
          ],
          description: "75% of resumes are rejected by ATS bots before reaching a human. Our AI scanner restructures your resume with high-impact tech keywords and measurable project wins.",
          features: [
            { title: "Instant ATS Scorecard & Feedback", desc: "Upload your existing resume to get an instant compatibility breakdown across 30+ criteria." },
            { title: "Tech Keyword Density Enrichment", desc: "Inject missing framework, cloud, and engineering keywords relevant to your target role." },
            { title: "Bullet Point Impact Rewriter", desc: "Transform passive job descriptions into metric-driven achievements." },
            { title: "Multi-Format Export (PDF, Word)", desc: "Download clean, modern, recruiter-ready resume templates with one click." }
          ],
          faqs: [
            { q: "Is the AI Resume Optimizer free to use?", a: "Yes! Every registered Hire2Hired consultant gets free access to our AI Resume Optimizer." },
            { q: "Can I customize my resume for different tech roles?", a: "Absoluty. You can tailor your resume for Full-Stack, Backend, DevOps, or AI Engineering positions." }
          ]
        };
    }
  };

  const current = getServiceData(activeSlug);
  const CurrentIcon = current.icon;

  return (
    <div className={`bg-[#fafbfd] ${isFullPage ? 'pt-24 pb-20' : 'py-20 md:py-28'} border-b border-slate-200/80 min-h-[85vh]`}>
      <div className="container-main space-y-12">
        
        {/* Full Page Breadcrumbs */}
        {isFullPage && (
          <div className="max-w-6xl mx-auto flex items-center gap-2 text-xs font-bold text-slate-500">
            <a href="#home" onClick={(e) => { e.preventDefault(); onNavigate('home'); }} className="flex items-center gap-1 text-slate-600 hover:text-indigo-600 no-underline">
              <Home className="w-3.5 h-3.5" /> Home
            </a>
            <ChevronRight className="w-3 h-3 text-slate-400" />
            <a href="#signup" onClick={(e) => { e.preventDefault(); onNavigate('signup'); }} className="text-slate-600 hover:text-indigo-600 no-underline">
              Consultants
            </a>
            <ChevronRight className="w-3 h-3 text-slate-400" />
            <span className="text-slate-600">Services</span>
            <ChevronRight className="w-3 h-3 text-slate-400" />
            <span className="text-indigo-600 font-extrabold capitalize">{activeSlug.replace('-', ' ')}</span>
          </div>
        )}

        {/* Consultant Service Tabs */}
        <div className="max-w-6xl mx-auto bg-white rounded-3xl p-3 border border-slate-200 shadow-sm flex flex-wrap items-center justify-center gap-2">
          {listNav.map((item) => {
            const ItemIcon = item.icon;
            const isActive = activeSlug === item.slug;
            return (
              <button
                key={item.slug}
                onClick={() => {
                  setActiveSlug(item.slug);
                  if (typeof window !== 'undefined') {
                    window.location.hash = `consultant-service-${item.slug}`;
                  }
                }}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs font-extrabold transition border-0 cursor-pointer ${
                  isActive 
                    ? 'bg-indigo-600 text-white shadow-md' 
                    : 'bg-transparent text-slate-600 hover:bg-slate-100'
                }`}
              >
                <ItemIcon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                {item.title}
              </button>
            );
          })}
        </div>

        {/* Hero Banner */}
        <div className="max-w-6xl mx-auto bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 rounded-3xl p-8 sm:p-12 text-white shadow-2xl overflow-hidden border border-slate-800 relative">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 text-xs font-extrabold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" /> {current.badge}
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-600/30 border border-indigo-400/40 flex items-center justify-center text-indigo-400 shadow-md">
                    <CurrentIcon className="w-6 h-6" />
                  </div>
                  <h1 className="text-2xl sm:text-4xl font-display font-extrabold text-white leading-tight">
                    {current.title}
                  </h1>
                </div>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-normal">
                  {current.description}
                </p>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/10">
                {current.stats.map((st, i) => (
                  <div key={i} className="space-y-1">
                    <div className="text-lg sm:text-2xl font-extrabold text-emerald-400">{st.value}</div>
                    <div className="text-[10px] sm:text-xs text-slate-400 font-medium">{st.label}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <button 
                  onClick={() => onNavigate('signup')}
                  className="px-6 py-3 rounded-xl btn-blue text-xs font-extrabold flex items-center gap-2 border-0 cursor-pointer shadow-md hover:scale-105 transition-transform"
                >
                  Join as Consultant for Free →
                </button>

                <button 
                  onClick={() => onNavigate('how-it-works')}
                  className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-extrabold border border-white/15 cursor-pointer transition"
                >
                  How It Works →
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center">
              <div className="relative rounded-3xl overflow-hidden border border-slate-800 shadow-2xl max-w-sm group">
                <img 
                  src={heroImg} 
                  alt={current.title} 
                  className="w-full h-auto object-cover rounded-3xl group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 text-xs text-white flex items-center gap-2">
                  <Star className="w-5 h-5 text-amber-400 flex-shrink-0" />
                  <div>
                    <div className="font-extrabold text-white">100% Free for Tech Talent</div>
                    <div className="text-[10px] text-slate-300">Boost your hiring rate cards today</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Features & Deliverables Grid */}
        <div className="max-w-6xl mx-auto space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-extrabold text-slate-900">Key Benefits of {current.title}</h2>
            <p className="text-xs text-slate-600 max-w-lg mx-auto font-medium">
              Designed to maximize your interview conversion rate and help you land high-paying enterprise contracts.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {current.features.map((feat, idx) => (
              <div key={idx} className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs hover:border-indigo-400 hover:shadow-md transition space-y-2 flex items-start gap-4">
                <div className="w-10 h-10 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold text-xs flex-shrink-0 mt-1 shadow-xs">
                  #{idx + 1}
                </div>
                <div>
                  <h3 className="text-base font-extrabold text-slate-900">{feat.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-medium mt-1">{feat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Service FAQs Accordion */}
        {current.faqs && (
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="text-center space-y-2">
              <h2 className="text-2xl font-extrabold text-slate-900 flex items-center justify-center gap-2">
                <HelpCircle className="w-5 h-5 text-indigo-600" /> Frequently Asked Questions
              </h2>
              <p className="text-xs text-slate-500 font-medium">Common queries regarding {current.title}.</p>
            </div>

            <div className="space-y-3">
              {current.faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div key={idx} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full p-5 text-left flex items-center justify-between gap-4 border-0 cursor-pointer bg-transparent"
                    >
                      <span className="text-sm font-extrabold text-slate-900">{faq.q}</span>
                      <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${isOpen ? 'rotate-180 text-indigo-600' : ''}`} />
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 pt-1 text-xs text-slate-600 leading-relaxed border-t border-slate-100 font-medium">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* CTA Banner */}
        <div className="max-w-6xl mx-auto bg-gradient-to-r from-indigo-600 via-indigo-700 to-blue-700 rounded-3xl p-8 sm:p-12 text-white text-center space-y-4 shadow-xl">
          <h2 className="text-xl sm:text-3xl font-extrabold">Accelerate Your Consulting Career Today</h2>
          <p className="text-xs sm:text-sm text-indigo-100 max-w-lg mx-auto font-medium">
            Join 50,000+ top engineers matched with pre-vetted enterprise client opportunities. 100% free for consultants.
          </p>
          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <button 
              onClick={() => onNavigate('signup')}
              className="px-8 py-3.5 rounded-xl bg-white text-indigo-600 hover:bg-slate-100 text-xs font-extrabold border-0 cursor-pointer shadow-md transition"
            >
              Apply as Consultant Now
            </button>
            <button 
              onClick={() => onNavigate('login')}
              className="px-6 py-3.5 rounded-xl bg-slate-900 text-white hover:bg-black text-xs font-extrabold border-0 cursor-pointer transition"
            >
              Consultant Login
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

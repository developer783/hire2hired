import React, { useState } from 'react';
import { 
  Search, BarChart2, Target, Users, CheckCircle, Database, 
  Sparkles, ArrowRight, Home, ChevronRight, ShieldCheck, Zap, 
  Clock, Award, HelpCircle, ChevronDown, CheckCircle2, Building2,
  Cpu, FileCode, UserCheck, TrendingUp, Layers
} from 'lucide-react';
import employersHeroImg from '../assets/employers_hero.png';

export default function EmployerServicesPage({ serviceSlug = 'talent-sourcing', onNavigate, onRequestCallback, isFullPage = true }) {
  const [activeSlug, setActiveSlug] = useState(serviceSlug);
  const [openFaq, setOpenFaq] = useState(null);

  const listNav = [
    { slug: 'talent-sourcing', title: 'AI Talent Sourcing', icon: Search },
    { slug: 'hiring-analytics', title: 'Predictive Analytics', icon: BarChart2 },
    { slug: 'screening', title: 'Rapid Screening', icon: Target },
    { slug: 'cultural-fit', title: 'Cultural Fit Analysis', icon: Users },
    { slug: 'recruitment', title: 'End-to-End Recruitment', icon: CheckCircle },
    { slug: 'pipeline', title: 'Talent Pipeline', icon: Database }
  ];

  const getServiceData = (slug) => {
    switch (slug) {
      case 'hiring-analytics':
        return {
          title: "Predictive Hiring Analytics",
          subtitle: "Data-driven insights for better, risk-free hiring decisions and candidate performance modeling.",
          badge: "PREDICTIVE DATA & METRICS",
          icon: BarChart2,
          color: "from-emerald-600 to-teal-700",
          stats: [
            { label: "Predictive Accuracy", value: "96.8%" },
            { label: "Mis-Hire Reduction", value: "85%" },
            { label: "Data Parameters", value: "120+" }
          ],
          description: "Leverage machine learning algorithms that analyze historical candidate performance, project velocity, and tenure data to eliminate mis-hires before extending an offer.",
          features: [
            { title: "Codebase Velocity Benchmarking", desc: "Predict candidate commit frequency and PR completion speed based on historical GitHub data." },
            { title: "Retention Risk Scoring", desc: "Assess candidate tenure likelihood and career growth alignment with your company roadmap." },
            { title: "Skill Gap & Salary Benchmarking", desc: "Real-time compensation analytics matched against enterprise market rates." },
            { title: "Team Dynamics Compatibility", desc: "Analyze how a new hire complements your existing engineering team's skill distribution." }
          ],
          faqs: [
            { q: "What data sources feed into Predictive Hiring Analytics?", a: "We aggregate technical assessment scores, verified work history, project complexity metrics, and enterprise client feedback to generate candidate scores." },
            { q: "Can we integrate this with our internal ATS?", a: "Yes! Our platform exports analytics reports directly to Greenhouse, Lever, Workday, and custom HRIS platforms." }
          ]
        };
      case 'screening':
        return {
          title: "Rapid Screening & Shortlisting",
          subtitle: "AI-powered candidate screening in minutes with 48-hour shortlist delivery SLAs.",
          badge: "48-HOUR DELIVERY SLA",
          icon: Target,
          color: "from-amber-600 to-orange-700",
          stats: [
            { label: "Screening Speed", value: "< 10 Mins" },
            { label: "Shortlist Delivery", value: "48 Hours" },
            { label: "Vetting Accuracy", value: "99.2%" }
          ],
          description: "Eliminate manual resume scanning. Our automated system reviews technical scorecards, video interview highlights, and code samples to deliver top 3 candidates within 2 business days.",
          features: [
            { title: "Automated Live Code Audits", desc: "Real-time evaluation of syntax quality, algorithmic efficiency, and security practices." },
            { title: "Async Video Scorecards", desc: "Review 2-minute candidate video responses on communication, problem-solving, and leadership." },
            { title: "Background & Credential Checks", desc: "Automated verification of degree credentials, employment history, and security clearances." },
            { title: "One-Click Interview Booking", desc: "Direct calendar integration to schedule hiring manager interviews instantly." }
          ],
          faqs: [
            { q: "How many shortlisted candidates will we receive?", a: "We deliver a targeted dossier of 3 to 5 fully pre-vetted top performers tailored specifically to your tech stack." },
            { q: "What happens if none of the shortlisted candidates fit?", a: "With our 48-hour SLA guarantee, we refine your parameters and deliver a new candidate batch at zero additional cost." }
          ]
        };
      case 'cultural-fit':
        return {
          title: "Cultural Fit & Team Analysis",
          subtitle: "Ensure candidates align perfectly with your company culture, work ethic, and communication styles.",
          badge: "TEAM ALIGNMENT & RETENTION",
          icon: Users,
          color: "from-purple-600 to-violet-700",
          stats: [
            { label: "Culture Match Score", value: "98.4%" },
            { label: "1-Year Retention", value: "94.2%" },
            { label: "Onboarding Ease", value: "5/5 ⭐" }
          ],
          description: "Technical skills get candidates interviewed — cultural alignment keeps them performing. We evaluate work styles, agile methodologies, and team collaboration dynamics.",
          features: [
            { title: "Agile & Communication Profiling", desc: "Assess experience with Scrum, Kanban, Jira, Slack, and async remote communication protocols." },
            { title: "Management Style Matching", desc: "Ensure alignment between candidate autonomy preferences and your engineering leadership style." },
            { title: "Timezone & Availability Sync", desc: "Guaranteed minimum 4-hour overlap with your core business hours regardless of location." },
            { title: "Soft Skills & Leadership Evaluation", desc: "Behavioral interview scoring evaluating conflict resolution, mentorship, and adaptability." }
          ],
          faqs: [
            { q: "How do you evaluate soft skills remotely?", a: "Our certified behavioral assessors use structured STAR interview frameworks combined with AI sentiment analysis." }
          ]
        };
      case 'recruitment':
        return {
          title: "End-to-End Recruitment Solutions",
          subtitle: "Turnkey recruitment from spec definition to contract execution, compliance, and payroll.",
          badge: "FULL TURNKEY RECRUITMENT",
          icon: CheckCircle,
          color: "from-sky-600 to-indigo-700",
          stats: [
            { label: "Full Turnkey SLA", value: "100%" },
            { label: "Global Compliance", value: "150+ Countries" },
            { label: "Client Satisfaction", value: "99.5%" }
          ],
          description: "Offload your end-to-end talent acquisition. We manage job specification refinement, sourcing, technical screening, offer negotiations, and global payroll compliance.",
          features: [
            { title: "Dedicated Talent Account Director", desc: "Single point of contact managing your active hiring pipeline and candidate scheduling." },
            { title: "Offer Negotiation & Closing", desc: "Market-aligned compensation benchmarking to close top candidates quickly." },
            { title: "Global EOR & Payroll Compliance", desc: "Hire anywhere in the world with full local tax, legal, and benefit compliance handled." },
            { title: "14-Day Risk-Free Guarantee", desc: "If a hire isn't performing within 14 days, pay nothing and get an immediate replacement." }
          ],
          faqs: [
            { q: "Do you handle global contractor compliance and payroll?", a: "Yes, we support both US W-2/1099 contracts and international Employer of Record (EOR) hiring across 150+ countries." }
          ]
        };
      case 'pipeline':
        return {
          title: "On-Demand Talent Pipeline Building",
          subtitle: "Build and maintain a continuous reservoir of pre-vetted engineers ready for immediate deployment.",
          badge: "ON-DEMAND SCALING",
          icon: Database,
          color: "from-rose-600 to-pink-700",
          stats: [
            { label: "Deployment Speed", value: "< 24 Hours" },
            { label: "Standby Talent Pool", value: "50,000+" },
            { label: "Ramp-Up Overhead", value: "0%" }
          ],
          description: "Never let unexpected engineering turnover or project expansion slow down your sprint. We build a dedicated, warm talent pipeline tailored to your technology roadmap.",
          features: [
            { title: "Custom Talent Reservoirs", desc: "Pre-screened engineering pools built specifically for your tech stack (Java, React, AWS, AI)." },
            { title: "Instant Ramp-Up & Scaling", desc: "Add 1 to 20 senior developers to active projects within 24 hours of notice." },
            { title: "Bench Management Support", desc: "Zero idle payroll costs while keeping talent warm for upcoming feature sprints." },
            { title: "Quarterly Pipeline Refresh", desc: "Continuous updating of candidate availability and skill certifications." }
          ],
          faqs: [
            { q: "Is there a monthly fee to maintain a custom talent pipeline?", a: "No upfront retainer required for standard pipeline setups. You only pay when candidates are actively deployed." }
          ]
        };
      case 'talent-sourcing':
      default:
        return {
          title: "AI Talent Sourcing",
          subtitle: "Find pre-vetted senior software engineers, system architects, and tech consultants with AI precision.",
          badge: "AI NEURAL MATCHING",
          icon: Search,
          color: "from-indigo-600 to-blue-700",
          stats: [
            { label: "Candidate Pool", value: "50,000+" },
            { label: "Matching Accuracy", value: "98.7%" },
            { label: "Time-to-Match", value: "48 Hours" }
          ],
          description: "Our proprietary AI neural matching engine evaluates candidates across 120+ technical skill parameters, code quality metrics, and project complexity ratings.",
          features: [
            { title: "120+ Skill Parameter Matching", desc: "Granular evaluation of languages, frameworks, cloud architecture, and database expertise." },
            { title: "GitHub & Code Quality Verification", desc: "Automated analysis of repository commits, code cleanliness, and architectural standards." },
            { title: "Instant Rate & Availability Filtering", desc: "Search candidates by hourly rate cards, full-time salary expectations, and start dates." },
            { title: "Domain & Industry Specialization", desc: "Filter talent with background in FinTech, HealthTech, CyberInfra, GenAI, or Enterprise SaaS." }
          ],
          faqs: [
            { q: "How does AI Talent Sourcing differ from standard job boards?", a: "Job boards flood you with unvetted resumes. Our AI analyzes actual code capability and past enterprise project deliverables, presenting only top 1% matched talent." },
            { q: "Can we source specific niche tech stacks like Rust or PyTorch AI Agents?", a: "Yes! Our database includes specialists across emerging technologies including LLM RAG pipelines, Vector DBs, Rust, and Autonomous Agents." }
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
            <a href="#employers" onClick={(e) => { e.preventDefault(); onNavigate('employers'); }} className="text-slate-600 hover:text-indigo-600 no-underline">
              Employers
            </a>
            <ChevronRight className="w-3 h-3 text-slate-400" />
            <span className="text-slate-600">Services</span>
            <ChevronRight className="w-3 h-3 text-slate-400" />
            <span className="text-indigo-600 font-extrabold capitalize">{activeSlug.replace('-', ' ')}</span>
          </div>
        )}

        {/* Employer Service Tabs */}
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
                    window.location.hash = `employer-service-${item.slug}`;
                  }
                }}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs font-extrabold transition border-0 cursor-pointer ${
                  isActive 
                    ? 'bg-slate-900 text-white shadow-md' 
                    : 'bg-transparent text-slate-600 hover:bg-slate-100'
                }`}
              >
                <ItemIcon className={`w-4 h-4 ${isActive ? 'text-indigo-400' : 'text-slate-400'}`} />
                {item.title}
              </button>
            );
          })}
        </div>

        {/* Service Hero Banner */}
        <div className="max-w-6xl mx-auto bg-gradient-to-br from-slate-900 via-slate-950 to-indigo-950 rounded-3xl p-8 sm:p-12 text-white shadow-2xl overflow-hidden border border-slate-800 relative">
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

              {/* Quick Stats Grid */}
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/10">
                {current.stats.map((st, i) => (
                  <div key={i} className="space-y-1">
                    <div className="text-lg sm:text-2xl font-extrabold text-indigo-400">{st.value}</div>
                    <div className="text-[10px] sm:text-xs text-slate-400 font-medium">{st.label}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <button 
                  onClick={() => onNavigate('bookconsultation')}
                  className="px-6 py-3 rounded-xl btn-blue text-xs font-extrabold flex items-center gap-2 border-0 cursor-pointer shadow-md hover:scale-105 transition-transform"
                >
                  Request {current.title} →
                </button>

                <button 
                  onClick={() => onNavigate('employer-how-it-works')}
                  className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-extrabold border border-white/15 cursor-pointer transition"
                >
                  See 48-Hour Workflow
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center">
              <div className="relative rounded-3xl overflow-hidden border border-slate-800 shadow-2xl max-w-sm group">
                <img 
                  src={employersHeroImg} 
                  alt={current.title} 
                  className="w-full h-auto object-cover rounded-3xl group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 text-xs text-white flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                  <div>
                    <div className="font-extrabold text-white">Enterprise SLA Guaranteed</div>
                    <div className="text-[10px] text-slate-300">14-Day Risk-Free Trial Period</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Features & Deliverables Grid */}
        <div className="max-w-6xl mx-auto space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-extrabold text-slate-900">Key Features of {current.title}</h2>
            <p className="text-xs text-slate-600 max-w-lg mx-auto font-medium">
              Engineered to streamline your hiring pipeline and guarantee top-tier tech talent delivery.
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
              <p className="text-xs text-slate-500 font-medium">Everything you need to know about {current.title}.</p>
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
          <h2 className="text-xl sm:text-3xl font-extrabold">Ready to Deploy {current.title}?</h2>
          <p className="text-xs sm:text-sm text-indigo-100 max-w-lg mx-auto font-medium">
            Schedule a 15-minute consultation with our hiring strategists and start receiving candidate shortlists within 48 hours.
          </p>
          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <button 
              onClick={() => onNavigate('bookconsultation')}
              className="px-8 py-3.5 rounded-xl bg-white text-indigo-600 hover:bg-slate-100 text-xs font-extrabold border-0 cursor-pointer shadow-md transition"
            >
              Book Employer Consultation
            </button>
            <button 
              onClick={() => onNavigate('employer-login')}
              className="px-6 py-3.5 rounded-xl bg-slate-900 text-white hover:bg-black text-xs font-extrabold border-0 cursor-pointer transition"
            >
              Employer Login
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

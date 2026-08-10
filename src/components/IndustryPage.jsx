import React, { useState } from 'react';
import { 
  Code, Heart, Wrench, DollarSign, Megaphone, Building2, 
  Sparkles, CheckCircle2, ArrowRight, Home, ChevronRight, 
  Users, ShieldCheck, Zap, Award, Target, TrendingUp, Briefcase,
  HelpCircle, ChevronDown, Lock, Activity, FileCheck, Stethoscope,
  Microscope, Server, Star, Clock
} from 'lucide-react';
import industriesHeroImg from '../assets/industries_hero.png';
import healthcareHeroImg from '../assets/healthcare_hero.png';
import engineeringHeroImg from '../assets/engineering_hero.png';

export default function IndustryPage({ industrySlug = 'technology', onNavigate, onRequestCallback, isFullPage = true }) {
  const [activeSlug, setActiveSlug] = useState(industrySlug);
  const [openFaq, setOpenFaq] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');

  const listNav = [
    { slug: 'technology', title: 'Technology', icon: Code },
    { slug: 'healthcare', title: 'Healthcare', icon: Heart },
    { slug: 'engineering', title: 'Engineering', icon: Wrench },
    { slug: 'finance', title: 'Finance', icon: DollarSign },
    { slug: 'marketing', title: 'Marketing', icon: Megaphone },
    { slug: 'consulting', title: 'Consulting', icon: Building2 }
  ];

  const getIndustryData = (slug) => {
    switch (slug) {
      case 'healthcare':
        return {
          title: "Healthcare & Life Sciences",
          subtitle: "Healthcare administrators, clinical data specialists, bio-informatics, and medical tech professionals.",
          badge: "HIPAA COMPLIANT TALENT",
          heroImg: healthcareHeroImg,
          icon: Heart,
          accentColor: "from-rose-600 to-pink-600",
          badgeBg: "bg-rose-500/20 text-rose-300 border-rose-400/30",
          roles: [
            "HealthTech System Architects (HIPAA, EHR/EMR Integration)",
            "Clinical Data Scientists & Bio-informatics Specialists",
            "Medical Device Software Engineers (FDA 510(k) Compliant)",
            "Healthcare Ops & Compliance Administrators",
            "Telehealth Platform & Remote Monitoring Developers",
            "HL7 / FHIR Data Pipeline Integration Engineers"
          ],
          stats: [
            { label: "HIPAA Vetting", value: "100%" },
            { label: "Healthcare Talent", value: "8,500+" },
            { label: "Compliance Score", value: "99.9%" }
          ],
          description: "Deploy HIPAA-compliant engineering, clinical data, and healthcare IT professionals with verified credentials, BAA readiness, and regulatory compliance.",
          complianceBadges: [
            { name: "HIPAA Compliant", desc: "100% data privacy & BAA ready" },
            { name: "FDA 510(k) Ready", desc: "Medical device software standards" },
            { name: "SOC 2 Type II", desc: "Enterprise security architecture" },
            { name: "HL7 & FHIR", desc: "Interoperability & EHR integration" }
          ],
          featuredCandidates: [
            {
              name: "Dr. Aris Thorne",
              role: "Lead Clinical Data AI Scientist",
              exp: "11 Yrs Exp",
              skills: ["Python", "PyTorch", "Bio-informatics", "FHIR APIs", "Genomics"],
              rating: "4.95 ⭐",
              rate: "$145 / hr",
              badge: "EX-MAYO CLINIC"
            },
            {
              name: "Elena Rostova",
              role: "Senior HealthTech EHR Architect",
              exp: "9 Yrs Exp",
              skills: ["Epic Systems", "Cerner", "HIPAA Security", "AWS HealthLake", "HL7"],
              rating: "4.98 ⭐",
              rate: "$130 / hr",
              badge: "TOP 1% CANDIDATE"
            },
            {
              name: "Marcus Vance",
              role: "FDA Medical Device Software Lead",
              exp: "14 Yrs Exp",
              skills: ["C/C++", "ISO 13485", "FDA 510(k)", "Embedded RTOS", "Cybersecurity"],
              rating: "4.92 ⭐",
              rate: "$160 / hr",
              badge: "PATENT HOLDER"
            }
          ],
          caseStudies: [
            {
              client: "National Telehealth Platform",
              metric: "36 Hours",
              result: "Placed 4 HIPAA-Compliant FHIR Engineers to launch remote patient monitoring system ahead of schedule.",
              tag: "CASE STUDY"
            },
            {
              client: "Global Bio-Tech Diagnostics",
              metric: "100% Accuracy",
              result: "Deployed 3 AI Bio-informatics data scientists to build cancer biomarker detection pipeline.",
              tag: "AI HEALTHCARE"
            }
          ],
          faqs: [
            {
              q: "How does Hire2Hired verify HIPAA compliance for candidates?",
              a: "Every healthcare candidate undergoes mandatory HIPAA data security evaluations, background screening, license verification, and sign-off on Business Associate Agreement (BAA) standards before placement."
            },
            {
              q: "What sub-sectors of Healthcare do you cover?",
              a: "We staff across Telehealth, Bio-Informatics & Genomics, Electronic Health Records (EHR/EMR), Medical Devices (SaMD), Clinical Trial Management, and Digital Therapeutics."
            },
            {
              q: "How quickly can we start interviewing Healthcare IT talent?",
              a: "Our AI matching algorithm presents pre-screened, HIPAA-verified candidates within 24 to 48 hours of posting your project requirements."
            },
            {
              q: "Can Hire2Hired provide contract-to-hire or permanent placements?",
              a: "Yes! We support flexible engagement models including short-term consulting, full-time contract-to-hire, direct placement, and enterprise team pods."
            }
          ]
        };
      case 'engineering':
        return {
          title: "Engineering & Hardware Systems",
          subtitle: "Mechanical, civil, electrical, systems, and robotics engineers.",
          badge: "PRECISION ENGINEERING",
          heroImg: engineeringHeroImg,
          icon: Wrench,
          accentColor: "from-amber-600 to-orange-600",
          badgeBg: "bg-amber-500/20 text-amber-300 border-amber-400/30",
          roles: [
            "Embedded Systems & Firmware Developers (C/C++, RTOS)",
            "Robotics & Autonomous Automation Engineers",
            "Electrical & PCB Hardware Designers",
            "Mechanical Design Engineers (CAD, SolidWorks)",
            "Systems Integration & Testing Specialists"
          ],
          stats: [
            { label: "Hardware Vetted", value: "6,200+" },
            { label: "Avg Tenure", value: "4.2 Yrs" },
            { label: "Satisfaction Rate", value: "97.8%" }
          ],
          description: "Scale your hardware, robotics, and industrial engineering projects with high-precision systems and firmware talent.",
          complianceBadges: [
            { name: "ISO 9001", desc: "Quality management standards" },
            { name: "AUTOSAR", desc: "Automotive software architecture" },
            { name: "IEEE Standards", desc: "Electrical & electronics compliance" }
          ],
          featuredCandidates: [
            {
              name: "David Kim",
              role: "Principal Robotics & RTOS Engineer",
              exp: "12 Yrs Exp",
              skills: ["ROS2", "C++20", "Embedded Linux", "PCB Design", "Sensor Fusion"],
              rating: "4.96 ⭐",
              rate: "$140 / hr",
              badge: "ROBOTICS EXPERT"
            }
          ],
          caseStudies: [
            {
              client: "Autonomous Vehicle Startup",
              metric: "48 Hours",
              result: "Placed 3 Senior LiDAR Sensor Fusion Engineers for autonomous navigation stack.",
              tag: "HARDWARE"
            }
          ],
          faqs: [
            {
              q: "What engineering domains do you support?",
              a: "We specialize in Embedded Firmware, Robotics, PCB/Hardware, Mechanical CAD, Systems Integration, and Automotive Electronics."
            }
          ]
        };
      case 'finance':
        return {
          title: "Finance & Financial Services",
          subtitle: "Financial analysts, quantitative researchers, fintech developers, and accounting advisors.",
          badge: "FINTECH & QUANT VERTICAL",
          heroImg: industriesHeroImg,
          icon: DollarSign,
          accentColor: "from-emerald-600 to-teal-600",
          badgeBg: "bg-emerald-500/20 text-emerald-300 border-emerald-400/30",
          roles: [
            "Quantitative Developers & High-Frequency Traders (C++, Python)",
            "FinTech Core Banking & Payment Systems Engineers",
            "Risk Analytics & Fraud AI Modelers",
            "Financial Analysts & Certified Public Accountants (CPAs)",
            "Blockchain & Smart Contract Security Audit Engineers"
          ],
          stats: [
            { label: "FinTech Engineers", value: "11,000+" },
            { label: "Audit Compliance", value: "100%" },
            { label: "Placement Speed", value: "3 Days" }
          ],
          description: "Empower your banking, trading, or fintech platform with elite quant developers, financial analysts, and regulatory compliance experts.",
          complianceBadges: [
            { name: "PCI-DSS Level 1", desc: "Payment card security" },
            { name: "FINRA & SEC", desc: "Regulatory reporting readiness" },
            { name: "SOC 1 & SOC 2", desc: "Financial data integrity" }
          ],
          featuredCandidates: [
            {
              name: "Sophia Chen",
              role: "Lead Quant Trader & C++ Engineer",
              exp: "10 Yrs Exp",
              skills: ["C++17", "Python", "Low-Latency", "Options Pricing", "KDB+"],
              rating: "4.99 ⭐",
              rate: "$165 / hr",
              badge: "WALL ST VETERAN"
            }
          ],
          caseStudies: [
            {
              client: "Hedge Fund Unicorn",
              metric: "2 Days",
              result: "Sourced 2 Low-Latency C++ Developers for high-frequency trading engine optimization.",
              tag: "FINTECH"
            }
          ],
          faqs: [
            {
              q: "Do you staff quantitative finance professionals?",
              a: "Yes, we have an extensive network of ex-Hedge Fund and Investment Banking quant developers, risk analysts, and algorithmic trading specialists."
            }
          ]
        };
      case 'marketing':
        return {
          title: "Marketing & Growth Strategy",
          subtitle: "Digital marketers, performance growth strategists, content directors, and brand managers.",
          badge: "GROWTH & ROI DRIVEN",
          heroImg: industriesHeroImg,
          icon: Megaphone,
          accentColor: "from-purple-600 to-violet-600",
          badgeBg: "bg-purple-500/20 text-purple-300 border-purple-400/30",
          roles: [
            "Growth Marketing Leads & Performance Marketers (SEO, SEM, Paid Media)",
            "Product Marketing Managers & GTM Strategists",
            "AI Marketing Automation & CRM Architects (HubSpot, Salesforce)",
            "Content Directors & Brand Strategy Leads",
            "Data Analytics & Conversion Rate Optimization (CRO) Experts"
          ],
          stats: [
            { label: "ROAS Boost", value: "3.4x" },
            { label: "Growth Strategists", value: "7,800+" },
            { label: "Satisfaction", value: "99.1%" }
          ],
          description: "Drive predictable user acquisition and market expansion with ROI-focused growth marketers, performance leads, and brand strategists.",
          complianceBadges: [
            { name: "GDPR & CCPA", desc: "Data privacy & user consent compliance" },
            { name: "MarTech Certified", desc: "HubSpot, Salesforce, Google Ads" }
          ],
          featuredCandidates: [
            {
              name: "Liam O'Connor",
              role: "Head of Performance Growth",
              exp: "8 Yrs Exp",
              skills: ["Meta Ads", "Google Ads", "Mixpanel", "SQL", "Conversion Optimization"],
              rating: "4.94 ⭐",
              rate: "$110 / hr",
              badge: "EX-GROWTH UNICORN"
            }
          ],
          caseStudies: [
            {
              client: "SaaS Scaleup",
              metric: "3.8x ROAS",
              result: "Placed a Performance Marketing Lead who scaled MRR from $100k to $450k in 6 months.",
              tag: "GROWTH"
            }
          ],
          faqs: [
            {
              q: "Can growth marketers manage our paid media ad spend directly?",
              a: "Absoluty. Our marketing specialists are experienced in managing multi-million dollar ad budgets across Search, Social, and Programmatic channels."
            }
          ]
        };
      case 'consulting':
        return {
          title: "Management & Strategy Consulting",
          subtitle: "Management consultants, strategy advisors, transformation leads, and business analysts.",
          badge: "ENTERPRISE STRATEGY",
          heroImg: industriesHeroImg,
          icon: Building2,
          accentColor: "from-sky-600 to-indigo-600",
          badgeBg: "bg-sky-500/20 text-sky-300 border-sky-400/30",
          roles: [
            "Enterprise Digital Transformation Consultants",
            "M&A Advisory & Business Valuation Specialists",
            "Agile & Scrum Enterprise Program Directors",
            "Operations & Supply Chain Efficiency Consultants",
            "Strategic Management & Organizational Leads"
          ],
          stats: [
            { label: "Ex-MBB Advisors", value: "4,500+" },
            { label: "Projects Done", value: "1,200+" },
            { label: "NPS Score", value: "+78" }
          ],
          description: "Solve complex business challenges and execute digital transformation initiatives with top-tier management and strategy consultants.",
          complianceBadges: [
            { name: "Ex-MBB & Big 4", desc: "McKinsey, BCG, Bain, Deloitte" },
            { name: "PMP & SAFe", desc: "Certified program governance" }
          ],
          featuredCandidates: [
            {
              name: "Samantha Wright",
              role: "Digital Transformation Partner",
              exp: "15 Yrs Exp",
              skills: ["M&A Integration", "Enterprise Agility", "Cloud Strategy", "Change Mgmt"],
              rating: "4.98 ⭐",
              rate: "$180 / hr",
              badge: "EX-MCKINSEY"
            }
          ],
          caseStudies: [
            {
              client: "Fortune 500 Retailer",
              metric: "12 Wks",
              result: "Deployed 2 Strategy Partners who restructured supply chain ops saving $14M annually.",
              tag: "STRATEGY"
            }
          ],
          faqs: [
            {
              q: "Are consultants available for short advisory engagements?",
              a: "Yes! You can hire strategy consultants on an hourly advisory basis, fractional weekly model, or full project deployment."
            }
          ]
        };
      case 'technology':
      default:
        return {
          title: "Technology & Software Engineering",
          subtitle: "Software engineers, developers, and tech professionals.",
          badge: "HIGH DEMAND VERTICAL",
          heroImg: industriesHeroImg,
          icon: Code,
          accentColor: "from-indigo-600 to-blue-600",
          badgeBg: "bg-indigo-500/20 text-indigo-300 border-indigo-400/30",
          roles: [
            "Full-Stack Software Engineers (React, Node, Java, Go)",
            "AI / ML & LLM Engineers (PyTorch, RAG, LangChain)",
            "Cloud Architects & DevOps (AWS, Kubernetes, Terraform)",
            "QA Automation & SDET Engineers (Playwright, Cypress)",
            "Data Engineers & Big Data Architects (Spark, Snowflake)"
          ],
          stats: [
            { label: "Avg Placement", value: "48 Hours" },
            { label: "Vetted Talent", value: "15,000+" },
            { label: "Retention Rate", value: "98.5%" }
          ],
          description: "Accelerate your product roadmap with pre-vetted senior software engineers, system architects, and AI specialists matched to your tech stack within 48 hours.",
          complianceBadges: [
            { name: "SOC 2 Type II", desc: "Enterprise security architecture" },
            { name: "AWS & Azure Certified", desc: "Cloud & DevOps expertise" }
          ],
          featuredCandidates: [
            {
              name: "Alex Rivera",
              role: "Principal AI Agent & RAG Architect",
              exp: "10 Yrs Exp",
              skills: ["Python", "LangChain", "Vector DBs", "FastAPI", "Docker"],
              rating: "4.97 ⭐",
              rate: "$140 / hr",
              badge: "TOP AI CONTRIBUTOR"
            }
          ],
          caseStudies: [
            {
              client: "FinTech Scaleup",
              metric: "48 Hours",
              result: "Matched 3 Full-Stack React/Node Engineers to build real-time payment dashboard.",
              tag: "TECH PLACEMENT"
            }
          ],
          faqs: [
            {
              q: "How does Hire2Hired test senior software developers?",
              a: "We conduct 3-stage evaluations including live coding challenges, system architecture reviews, and background code audits."
            }
          ]
        };
    }
  };

  const current = getIndustryData(activeSlug);
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
            <span className="text-slate-600">Industries</span>
            <ChevronRight className="w-3 h-3 text-slate-400" />
            <span className="text-indigo-600 font-extrabold capitalize">{activeSlug}</span>
          </div>
        )}

        {/* Industry Category Navigation Tabs */}
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
                    window.location.hash = `industry-${item.slug}`;
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

        {/* Industry Hero Section */}
        <div className="max-w-6xl mx-auto bg-gradient-to-br from-slate-900 via-slate-950 to-indigo-950 rounded-3xl p-8 sm:p-12 text-white shadow-2xl overflow-hidden border border-slate-800 relative">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full ${current.badgeBg} text-xs font-extrabold uppercase tracking-wider`}>
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
                  onClick={() => onNavigate('signup')}
                  className="px-6 py-3 rounded-xl btn-blue text-xs font-extrabold flex items-center gap-2 border-0 cursor-pointer shadow-md hover:scale-105 transition-transform"
                >
                  Hire {current.title.split(' ')[0]} Talent →
                </button>

                <button 
                  onClick={onRequestCallback}
                  className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-extrabold border border-white/15 cursor-pointer transition"
                >
                  Request Callback
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center">
              <div className="relative rounded-3xl overflow-hidden border border-slate-800 shadow-2xl max-w-sm group">
                <img 
                  src={current.heroImg} 
                  alt={current.title} 
                  className="w-full h-auto object-cover rounded-3xl group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 text-xs text-white flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                  <div>
                    <div className="font-extrabold text-white">Pre-Vetted & Certified</div>
                    <div className="text-[10px] text-slate-300">Strict regulatory compliance check</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Regulatory & Security Compliance Badges */}
        {current.complianceBadges && (
          <div className="max-w-6xl mx-auto space-y-4">
            <div className="text-center space-y-1">
              <h2 className="text-xl font-extrabold text-slate-900 flex items-center justify-center gap-2">
                <ShieldCheck className="w-5 h-5 text-indigo-600" /> Compliance & Security Certifications
              </h2>
              <p className="text-xs text-slate-500 font-medium">All placed talent adheres strictly to global industry regulations.</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {current.complianceBadges.map((badge, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-4 border border-slate-200 shadow-xs flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold flex-shrink-0">
                    <Lock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-extrabold text-slate-900">{badge.name}</div>
                    <div className="text-[10px] text-slate-500 font-medium mt-0.5">{badge.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Featured Pre-Vetted Candidates Section */}
        {current.featuredCandidates && current.featuredCandidates.length > 0 && (
          <div className="max-w-6xl mx-auto space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-4">
              <div>
                <span className="text-xs font-extrabold uppercase tracking-wider text-indigo-600">ACTIVE PIPELINE</span>
                <h2 className="text-2xl font-extrabold text-slate-900">Sample Pre-Vetted {current.title.split(' ')[0]} Talent</h2>
              </div>
              <button 
                onClick={() => onNavigate('signup')}
                className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-black text-white text-xs font-extrabold border-0 cursor-pointer flex items-center gap-1.5 transition"
              >
                View Full Candidate Roster <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {current.featuredCandidates.map((cand, idx) => (
                <div key={idx} className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:border-indigo-400 hover:shadow-lg transition space-y-4 relative">
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="text-[10px] font-extrabold bg-indigo-50 text-indigo-600 px-2.5 py-1 rounded-full border border-indigo-200">
                        {cand.badge}
                      </span>
                      <h3 className="text-base font-extrabold text-slate-900 mt-2">{cand.name}</h3>
                      <div className="text-xs text-indigo-600 font-bold">{cand.role}</div>
                    </div>
                    <span className="text-xs font-extrabold text-amber-500 bg-amber-50 px-2 py-1 rounded-lg border border-amber-200">
                      {cand.rating}
                    </span>
                  </div>

                  <div className="text-xs text-slate-500 font-medium flex items-center gap-4 border-t border-b border-slate-100 py-2.5">
                    <span className="flex items-center gap-1"><Briefcase className="w-3.5 h-3.5 text-slate-400" /> {cand.exp}</span>
                    <span className="flex items-center gap-1"><Zap className="w-3.5 h-3.5 text-emerald-500" /> {cand.rate}</span>
                  </div>

                  <div className="space-y-1.5">
                    <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Top Vetted Skills</div>
                    <div className="flex flex-wrap gap-1.5">
                      {cand.skills.map((s, i) => (
                        <span key={i} className="text-[10px] font-bold bg-slate-100 text-slate-700 px-2 py-0.5 rounded-md">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button 
                    onClick={() => onNavigate('bookconsultation')}
                    className="w-full py-2.5 rounded-xl bg-slate-900 hover:bg-indigo-600 text-white text-xs font-extrabold border-0 cursor-pointer transition shadow-xs"
                  >
                    Schedule Interview
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Roles Hired Card Grid */}
        <div className="max-w-6xl mx-auto space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-extrabold text-slate-900">Key Specialisations in {current.title.split(' ')[0]}</h2>
            <p className="text-xs text-slate-600 max-w-lg mx-auto font-medium">
              Pre-screened against technical evaluations, background verifications, and project complexity matching.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {current.roles.map((role, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-5 border border-slate-200/80 hover:border-indigo-400 hover:shadow-md transition flex items-start gap-4">
                <div className="w-8 h-8 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                  #{idx + 1}
                </div>
                <div className="space-y-1">
                  <h3 className="text-sm font-extrabold text-slate-900">{role}</h3>
                  <p className="text-xs text-slate-500 font-medium">Available for Direct-Hire, Contract, or Advisory placements.</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Real Placement Case Studies */}
        {current.caseStudies && (
          <div className="max-w-6xl mx-auto space-y-6">
            <div className="text-center space-y-2">
              <span className="text-xs font-extrabold uppercase tracking-wider text-indigo-600">PROVEN RESULTS</span>
              <h2 className="text-2xl font-extrabold text-slate-900">Industry Placement Success Stories</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {current.caseStudies.map((cs, idx) => (
                <div key={idx} className="bg-gradient-to-br from-slate-900 to-indigo-950 rounded-3xl p-6 text-white border border-slate-800 shadow-xl space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-extrabold bg-indigo-500/20 text-indigo-300 px-3 py-1 rounded-full border border-indigo-400/30">
                      {cs.tag}
                    </span>
                    <span className="text-xl font-extrabold text-emerald-400 flex items-center gap-1">
                      <Clock className="w-4 h-4" /> {cs.metric}
                    </span>
                  </div>
                  <h3 className="text-base font-extrabold text-white">{cs.client}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed font-medium">{cs.result}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Industry FAQs Accordion */}
        {current.faqs && (
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="text-center space-y-2">
              <h2 className="text-2xl font-extrabold text-slate-900 flex items-center justify-center gap-2">
                <HelpCircle className="w-5 h-5 text-indigo-600" /> Frequently Asked Questions ({current.title.split(' ')[0]})
              </h2>
              <p className="text-xs text-slate-500 font-medium">Common questions about hiring {current.title.split(' ')[0]} professionals through Hire2Hired.</p>
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
        <div className="max-w-6xl mx-auto bg-gradient-to-r from-indigo-600 via-indigo-700 to-blue-700 rounded-3xl p-8 sm:p-12 text-white text-center space-y-4 shadow-xl relative overflow-hidden">
          <div className="relative z-10 space-y-4">
            <h2 className="text-xl sm:text-3xl font-extrabold">Looking to Hire or Get Hired in {current.title.split(' ')[0]}?</h2>
            <p className="text-xs sm:text-sm text-indigo-100 max-w-lg mx-auto font-medium">
              Join 1,200+ enterprise clients and 25,000+ top consultants matched through Hire2Hired's AI platform.
            </p>
            <div className="flex flex-wrap justify-center gap-3 pt-2">
              <button 
                onClick={() => onNavigate('signup')}
                className="px-6 py-3 rounded-xl bg-white text-indigo-600 hover:bg-slate-100 text-xs font-extrabold border-0 cursor-pointer shadow-md transition"
              >
                Sign Up as Consultant
              </button>
              <button 
                onClick={() => onNavigate('bookconsultation')}
                className="px-6 py-3 rounded-xl bg-slate-900 text-white hover:bg-black text-xs font-extrabold border-0 cursor-pointer transition"
              >
                Book Employer Call
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

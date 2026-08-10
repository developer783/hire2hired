import React, { useState } from 'react';
import { 
  ShieldCheck, Package, Users, Globe, Star, ArrowRight, 
  Code, Smartphone, Cpu, Palette, Rocket, Layers, CheckCircle2, 
  Home, ChevronRight, MessageSquare, Zap, Clock, Terminal, ChevronDown, Check
} from 'lucide-react';
import heroImg from '../assets/it_services_hero.png';

export default function ITServicesPage({ onOpenApply, onRequestCallback, isFullPage = true }) {
  const [expandedService, setExpandedService] = useState(null);

  const stats = [
    { label: "Projects Delivered", value: "500+", icon: <Package className="w-5 h-5 text-indigo-600" /> },
    { label: "Enterprise Clients", value: "50+", icon: <Users className="w-5 h-5 text-indigo-600" /> },
    { label: "Global Markets", value: "18+", icon: <Globe className="w-5 h-5 text-indigo-600" /> },
    { label: "Client Satisfaction", value: "4.9★", icon: <Star className="w-5 h-5 text-amber-500 fill-amber-400" /> },
  ];

  const servicesList = [
    {
      id: "staffing-recruitment",
      icon: "🤝",
      title: "Staffing & Dedicated Talent Delivery",
      tagline: "Pre-vetted, job-ready senior engineers on demand in 48 hours",
      techTags: ["Talent Sourcing", "Technical Screening", "Background Verification", "Contract & Full-Time"],
      details: [
        "Vetted Top 5% software engineers, data architects, and cloud specialists",
        "48-hour rapid candidate placement timeline with risk-free trial",
        "Full US compliance, background checks, and payroll infrastructure",
        "Dedicated Technical Project Manager included at zero extra cost"
      ]
    },
    {
      id: "web-development",
      icon: "🌐",
      title: "Web Application Engineering",
      tagline: "Scalable, blazing-fast enterprise web applications & microservices",
      techTags: ["React / Next.js", "Vue / Nuxt", "Node.js", "Python / FastAPI", "GraphQL"],
      details: [
        "Modern SSR & Server Components with Next.js 14 and React 18",
        "High-throughput microservices backend architecture with Redis & Kafka",
        "Responsive, accessible (WCAG 2.1) user interfaces with Tailwind & Vanilla CSS",
        "Automated CI/CD deployment pipelines on Vercel, AWS & Azure"
      ]
    },
    {
      id: "mobile-development",
      icon: "📱",
      title: "Mobile App Development",
      tagline: "Native & cross-platform iOS & Android mobile experiences",
      techTags: ["Flutter", "React Native", "SwiftUI", "Kotlin", "Mobile AI"],
      details: [
        "Cross-platform Flutter & React Native codebases with native performance",
        "Offline-first sync architectures with SQLite & Realm databases",
        "Biometric authentication, push notifications, and payment gateway integration",
        "App Store & Google Play submission and continuous maintenance"
      ]
    },
    {
      id: "ai-solutions",
      icon: "🤖",
      title: "Enterprise AI & GenAI Solutions",
      tagline: "Custom AI models, RAG pipelines & autonomous agents that drive ROI",
      techTags: ["PyTorch / TensorFlow", "LangChain / LlamaIndex", "Vector DBs", "Fine-Tuning", "LLM APIs"],
      details: [
        "Retrieval-Augmented Generation (RAG) over internal enterprise documents",
        "Custom LLM fine-tuning (Llama 3, Mistral) using LoRA / QLoRA techniques",
        "Autonomous multi-agent workflows for customer support & workflow automation",
        "Strict enterprise security guardrails, data privacy, and latency optimization"
      ]
    },
    {
      id: "cloud-devops",
      icon: "☁️",
      title: "Cloud Infrastructure, DevOps & Security",
      tagline: "Containerized AWS/Azure cloud migration, Terraform & Zero-Trust security",
      techTags: ["AWS / Azure / GCP", "Kubernetes", "Docker", "Terraform", "Zero-Trust SIEM"],
      details: [
        "Infrastructure as Code (IaC) using Terraform & CloudFormation",
        "Kubernetes container orchestration with automated horizontal auto-scaling",
        "Zero-Trust cybersecurity framework setup, SIEM monitoring, and compliance",
        "24/7 cloud uptime monitoring, incident response, and cost optimization"
      ]
    },
    {
      id: "saas-development",
      icon: "🚀",
      title: "SaaS Product Engineering",
      tagline: "End-to-end multi-tenant SaaS platforms built to scale to millions",
      techTags: ["Next.js", "Stripe / Braintree", "Prisma / Supabase", "PostgreSQL", "Multi-Tenant"],
      details: [
        "Multi-tenant database schema design and workspace isolation",
        "Subscription billing,usage metering, and seat-based enterprise pricing",
        "Real-time analytics dashboards, audit logs, and role-based access control (RBAC)",
        "API rate limiting, developer documentation, and OAuth2 SSO integrations"
      ]
    },
    {
      id: "custom-software",
      icon: "💻",
      title: "Custom Enterprise Software",
      tagline: "Bespoke software systems engineered for your unique domain needs",
      techTags: ["Java / Spring Boot", "Python / Django", "Go / Rust", "C++", "Legacy Modernization"],
      details: [
        "Legacy application refactoring and cloud-native migration strategies",
        "High-performance transactional systems for finance, healthcare & logistics",
        "Enterprise service bus (ESB) and third-party API integration suites",
        "Comprehensive technical documentation and developer training handoff"
      ]
    }
  ];

  const deliverySteps = [
    { step: "01", title: "Discovery Call", desc: "30-min free consultation to understand your requirements, technical goals, and timeline." },
    { step: "02", title: "Proposal & Estimate", desc: "Detailed project scope, architecture design, milestone breakdown, and transparent pricing within 48 hrs." },
    { step: "03", title: "Design & Architecture", desc: "UI/UX wireframes, database design, microservice specs, and dedicated engineering team assignment." },
    { step: "04", title: "Agile Development", desc: "2-week sprints with bi-weekly client demos. Daily standups, Jira progress tracking, full transparency." },
    { step: "05", title: "QA & Security Review", desc: "Automated unit/integration testing, security vulnerability scans, and performance benchmarking." },
    { step: "06", title: "Launch & Support", desc: "Zero-downtime deployment, infrastructure setup, team onboarding, and SLAs for ongoing support." },
  ];

  const techMarquee = [
    "React", "Next.js", "Node.js", "Python", "Java", "Spring Boot", "Go", "AWS", "Azure", "Kubernetes",
    "Docker", "TensorFlow", "PyTorch", "LangChain", "Flutter", "PostgreSQL", "MongoDB", "Redis", "Kafka", "GraphQL", "TypeScript"
  ];

  return (
    <div className={`bg-[#fafbfd] ${isFullPage ? 'pt-24 pb-20' : 'py-20 md:py-28'} border-b border-slate-200/80`}>
      <div className="container-main">
        
        {/* Full Page Breadcrumbs */}
        {isFullPage && (
          <div className="max-w-6xl mx-auto mb-6 flex items-center gap-2 text-xs font-bold text-slate-500">
            <a href="#home" className="flex items-center gap-1 text-slate-600 hover:text-indigo-600 no-underline">
              <Home className="w-3.5 h-3.5" /> Home
            </a>
            <ChevronRight className="w-3 h-3 text-slate-400" />
            <span className="text-indigo-600 font-extrabold">IT Services & Solutions</span>
          </div>
        )}

        {/* 2-Column Hero Section */}
        <div className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headline & Action Buttons (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-extrabold">
              <ShieldCheck className="w-3.5 h-3.5" /> ENTERPRISE IT SERVICES & SOFTWARE ENGINEERING
            </div>

            <h1 className="text-4xl sm:text-6xl font-display font-extrabold text-slate-900 tracking-tight leading-[1.1]">
              Production-Grade Software <br />
              <span className="gradient-text-animated">Delivered on Time</span>
            </h1>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              End-to-end web, mobile, cloud & AI solutions for startups and Fortune 500 enterprises. We bring your vision to life with battle-tested engineering, dedicated senior teams, and transparent 2-week agile sprints.
            </p>

            {/* Checklist items */}
            <div className="grid sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">✓</div>
                Pre-Vetted Top 5% Dedicated Engineers
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">✓</div>
                48-Hour Rapid Candidate Placement
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">✓</div>
                Transparent 2-Week Agile Sprints
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">✓</div>
                99.9% Uptime SLA & 24/7 Security
              </div>
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <button 
                onClick={() => onRequestCallback()}
                className="px-8 py-4 rounded-full btn-blue text-sm font-extrabold flex items-center gap-2 border-0 cursor-pointer shadow-lg hover:scale-105 transition-all"
              >
                Get Free Technical Consultation <ArrowRight className="w-4 h-4" />
              </button>

              <a 
                href="#capabilities" 
                className="px-7 py-4 rounded-full bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 text-sm font-extrabold flex items-center gap-2 no-underline transition shadow-2xs"
              >
                Explore Capabilities
              </a>
            </div>
          </div>

          {/* Right Column: High-Tech Illustration & Interactive Metric Overlay (5 Cols) */}
          <div className="lg:col-span-5 relative">
            
            {/* Visual Illustration Card */}
            <div className="bg-gradient-to-tr from-slate-900 via-indigo-950 to-slate-900 rounded-[36px] p-4 border border-slate-800 shadow-2xl relative overflow-hidden group">
              
              {/* Terminal Title Bar */}
              <div className="flex items-center justify-between px-4 py-2 border-b border-slate-800 text-[11px] font-mono text-slate-400">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
                  <span className="ml-2 text-slate-300 font-bold">Hire2Hired-Core-v4.8</span>
                </div>
                <span className="text-emerald-400 font-bold">● SYSTEM ONLINE</span>
              </div>

              {/* Illustration Image */}
              <div className="relative rounded-2xl overflow-hidden mt-3 border border-slate-800">
                <img 
                  src={heroImg} 
                  alt="Hire2Hired Enterprise IT Services Engineering" 
                  className="w-full h-auto object-cover rounded-2xl transform group-hover:scale-105 transition-transform duration-500"
                />

                {/* Floating Metric Badge 1 */}
                <div className="absolute top-4 left-4 bg-slate-900/90 backdrop-blur-md border border-slate-700/80 rounded-xl p-3 text-white shadow-xl max-w-[200px]">
                  <p className="text-[10px] font-extrabold uppercase text-indigo-400 tracking-wider">Active Deployments</p>
                  <p className="text-xs font-bold text-slate-100 mt-0.5">Kubernetes Cluster (18 Nodes)</p>
                  <div className="flex items-center gap-1.5 mt-1 text-[10px] text-emerald-400 font-bold">
                    <CheckCircle2 className="w-3 h-3" /> 99.98% Latency 14ms
                  </div>
                </div>

                {/* Floating Metric Badge 2 */}
                <div className="absolute bottom-4 right-4 bg-slate-900/90 backdrop-blur-md border border-slate-700/80 rounded-xl p-3 text-white shadow-xl max-w-[210px]">
                  <p className="text-[10px] font-extrabold uppercase text-cyan-400 tracking-wider">AI Pipeline Status</p>
                  <p className="text-xs font-bold text-slate-100 mt-0.5">GenAI RAG Engine Active</p>
                  <div className="flex items-center gap-1 text-[10px] text-indigo-300 font-bold mt-1">
                    <Zap className="w-3 h-3 text-indigo-400 fill-indigo-400" /> 1,200 requests / sec
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* 4 Proof Stats Bar */}
        <div className="max-w-6xl mx-auto mb-20 grid grid-cols-2 md:grid-cols-4 gap-6 bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
          {stats.map((st, idx) => (
            <div key={idx} className="text-center space-y-1">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center mx-auto mb-2">
                {st.icon}
              </div>
              <div className="font-display font-extrabold text-3xl text-slate-900">{st.value}</div>
              <div className="text-slate-500 text-xs font-bold">{st.label}</div>
            </div>
          ))}
        </div>

        {/* Core Services Section */}
        <div id="capabilities" className="max-w-6xl mx-auto mb-24 space-y-4 pt-4">
          <div className="text-center mb-10">
            <p className="text-xs font-extrabold uppercase tracking-widest text-indigo-600 mb-2">OUR CAPABILITIES</p>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900">
              End-to-End <span className="text-indigo-600">Technology Services</span>
            </h2>
            <p className="text-slate-500 text-sm mt-2">Click any service to view full technical deliverables and capabilities.</p>
          </div>

          {servicesList.map((srv) => {
            const isOpen = expandedService === srv.id;
            return (
              <div 
                key={srv.id}
                className={`bg-white rounded-3xl border transition-all overflow-hidden ${
                  isOpen ? 'border-indigo-600 ring-2 ring-indigo-100 shadow-md' : 'border-slate-200/90 shadow-xs hover:border-indigo-300'
                }`}
              >
                {/* Header Row */}
                <div 
                  onClick={() => setExpandedService(isOpen ? null : srv.id)}
                  className="p-6 sm:p-8 flex items-center justify-between cursor-pointer select-none"
                >
                  <div className="flex items-center gap-5">
                    <div className="w-14 h-14 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-2xl flex-shrink-0 shadow-2xs">
                      {srv.icon}
                    </div>
                    <div>
                      <h3 className="font-display font-extrabold text-xl text-slate-900 leading-tight">
                        {srv.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-500 font-medium mt-1">
                        {srv.tagline}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 flex-shrink-0">
                    <div className="hidden lg:flex flex-wrap gap-1.5 max-w-xs justify-end">
                      {srv.techTags.slice(0, 3).map((tag, i) => (
                        <span key={i} className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-slate-100 text-slate-600 border border-slate-200">
                          {tag}
                        </span>
                      ))}
                      {srv.techTags.length > 3 && (
                        <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-indigo-50 text-indigo-600">
                          +{srv.techTags.length - 3} more
                        </span>
                      )}
                    </div>

                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center transition-transform duration-200 ${isOpen ? 'bg-indigo-600 text-white rotate-180' : 'bg-slate-100 text-slate-500'}`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                {/* Expanded Details Body */}
                {isOpen && (
                  <div className="px-6 sm:px-8 pb-8 pt-2 border-t border-slate-100 space-y-6 animate-in fade-in">
                    <div className="grid sm:grid-cols-2 gap-3">
                      {srv.details.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs font-semibold text-slate-700 bg-slate-50 p-3 rounded-xl border border-slate-100">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-slate-100">
                      <div className="flex flex-wrap gap-1.5">
                        <span className="text-xs font-bold text-slate-400 mr-2 self-center">Tech Stack:</span>
                        {srv.techTags.map((t, i) => (
                          <span key={i} className="px-3 py-1 rounded-lg text-xs font-extrabold bg-indigo-50 text-indigo-700 border border-indigo-100">
                            {t}
                          </span>
                        ))}
                      </div>

                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          onOpenApply(`IT Service Proposal: ${srv.title}`);
                        }}
                        className="px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold flex items-center gap-1.5 border-0 cursor-pointer shadow"
                      >
                        Request Proposal for {srv.title.split(' ')[0]}
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* 6-Step Delivery Roadmap */}
        <div className="max-w-6xl mx-auto mb-24 bg-gradient-to-br from-slate-900 via-slate-900 to-indigo-950 text-white rounded-[36px] p-8 sm:p-14 shadow-2xl border border-slate-800">
          <div className="text-center max-w-xl mx-auto mb-12">
            <p className="text-xs font-extrabold uppercase tracking-widest text-indigo-400 mb-2">AGILE DELIVERY METHODOLOGY</p>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white">
              How We Work
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm mt-2">
              Our proven 6-step delivery process, refined across 500+ successful enterprise projects.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {deliverySteps.map((st, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-2 hover:bg-white/10 transition">
                <div className="text-3xl font-display font-extrabold text-indigo-400 mb-1">{st.step}</div>
                <h3 className="font-bold text-base text-white">{st.title}</h3>
                <p className="text-slate-300 text-xs leading-relaxed">{st.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies Ticker */}
        <div className="max-w-6xl mx-auto mb-20 text-center space-y-6">
          <p className="text-xs font-extrabold uppercase tracking-widest text-indigo-600">TECHNOLOGIES WE MASTER</p>
          <div className="flex flex-wrap justify-center gap-2">
            {techMarquee.map((t, idx) => (
              <span key={idx} className="px-4 py-2 rounded-xl bg-white border border-slate-200 text-xs font-extrabold text-slate-800 shadow-2xs hover:border-indigo-400 transition">
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Consultation CTA */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-indigo-50 via-blue-50 to-indigo-50 border border-indigo-200/90 rounded-3xl p-10 sm:p-14 text-center shadow-sm relative overflow-hidden">
            <div className="w-12 h-12 rounded-2xl bg-indigo-600 text-white flex items-center justify-center mx-auto mb-4 shadow-md">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display tracking-tight mb-2">
              Ready to build something <span className="text-indigo-600">extraordinary?</span>
            </h3>
            <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto font-medium mb-8">
              Get a free 30-minute technical consultation with our senior engineering architects. No sales pitch — just honest technical guidance.
            </p>
            
            <button 
              onClick={onRequestCallback}
              className="px-8 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-md hover:scale-105 transition-all border-0 cursor-pointer inline-flex items-center gap-2"
            >
              Schedule Free Consultation
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

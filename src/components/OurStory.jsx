import React, { useState } from 'react';
import { 
  Users, Award, TrendingUp, Globe, ArrowRight, CheckCircle2, 
  Target, Heart, Lightbulb, Zap, ShieldCheck, Cpu, Code2, 
  Building2, Briefcase, FileText, Inbox, Send, Trash2, Archive, 
  Search, ChevronDown, Sparkles, Phone, Star, GraduationCap, Check
} from 'lucide-react';

export default function OurStory({ onOpenApply, onRequestCallback }) {
  const [activePillarTab, setActivePillarTab] = useState('courses');
  const [activeInboxMail, setActiveInboxMail] = useState(0);

  const mockEmails = [
    {
      id: 0,
      sender: "William Smith",
      email: "william.smith@example.com",
      time: "4 months ago",
      fullDate: "Oct 22, 2023, 9:00:00 AM",
      subject: "Meeting Tomorrow",
      preview: "Hi, let's have a meeting to discuss the project details and have some ideas I'd like to share. It's crucial that we align on our next steps...",
      tags: ["meeting", "work", "important"]
    },
    {
      id: 1,
      sender: "Sarah Jenkins (Lead Recruiter)",
      email: "sarah.j@hire2hired.com",
      time: "2 months ago",
      fullDate: "Dec 14, 2023, 2:30:00 PM",
      subject: "AI Candidate Match Score: 98%",
      preview: "We analyzed 45 Tech Talent profiles and found the top 3 Senior Full-Stack Engineers matching your exact stack requirements...",
      tags: ["ai-match", "hiring"]
    }
  ];

  const stepsData = [
    {
      num: "01",
      title: "Application & Assessment",
      desc: "Submit your profile. Our team reviews your background and evaluates technical aptitude within 24 hrs.",
      badgeColor: "bg-indigo-600"
    },
    {
      num: "02",
      title: "Track Selection & ISA Choice",
      desc: "Choose upfront, EMI, or zero-upfront Income Share Agreement (ISA) with clear transparent terms.",
      badgeColor: "bg-blue-600"
    },
    {
      num: "03",
      title: "Hands-On Bootcamp & Mentorship",
      desc: "Master production-grade code with 1-on-1 guidance from senior software architects and tech leads.",
      badgeColor: "bg-sky-600"
    },
    {
      num: "04",
      title: "AI Resume & Interview Prep",
      desc: "Optimize your portfolio for ATS systems and undergo mock technical & behavioral interview rounds.",
      badgeColor: "bg-indigo-700"
    },
    {
      num: "05",
      title: "Direct Enterprise Match",
      desc: "Get introduced directly to 250+ vetted hiring partner teams through our AI talent matching engine.",
      badgeColor: "bg-blue-700"
    },
    {
      num: "06",
      title: "Career Launch & Placement",
      desc: "Step into your new role. ISA payments only begin after securing a position above the salary threshold.",
      badgeColor: "bg-slate-800"
    }
  ];

  const coreValues = [
    {
      icon: Target,
      color: "bg-indigo-100 text-indigo-600",
      title: "Career Outcome Driven",
      desc: "We judge our performance solely on real graduate job placements and enterprise project delivery success."
    },
    {
      icon: Heart,
      color: "bg-blue-100 text-blue-600",
      title: "Candidate & Client First",
      desc: "Every curriculum update and AI algorithm is designed to create win-win outcomes for talent and employers."
    },
    {
      icon: Lightbulb,
      color: "bg-sky-100 text-sky-600",
      title: "Continuous AI Innovation",
      desc: "We constantly evolve our tools and training to mirror the latest advancements in AI and cloud engineering."
    },
    {
      icon: Users,
      color: "bg-indigo-100 text-indigo-700",
      title: "Collaborative Community",
      desc: "1,200+ alumni, mentors, and hiring managers supporting long-term professional growth and networking."
    },
    {
      icon: Globe,
      color: "bg-blue-100 text-blue-700",
      title: "Global Engineering Quality",
      desc: "US industry standards executed with global scale, cross-border capability, and uncompromised quality."
    },
    {
      icon: Zap,
      color: "bg-slate-100 text-slate-800",
      title: "Agile Execution",
      desc: "We move fast to adapt to shifting tech stacks so our candidates and corporate partners stay ahead."
    }
  ];

  const journeyMilestones = [
    {
      year: "2013",
      title: "Founded in the US",
      desc: "Established with the mission to solve tech talent shortages through practical, industry-aligned training."
    },
    {
      year: "2017",
      title: "Enterprise IT Staffing Launch",
      desc: "Expanded into full-spectrum IT consulting, dedicated engineering pods, and contract-to-hire staffing."
    },
    {
      year: "2021",
      title: "Income Share Agreement Rollout",
      desc: "Introduced 100% placement-backed ISA tracks to ensure financial accessibility for all ambitious engineers."
    },
    {
      year: "2024",
      title: "AI Talent Core Integration",
      desc: "Built proprietary AI candidate scoring, automated resume optimization, and technical match analytics."
    },
    {
      year: "Today",
      title: "Next-Gen Tech Ecosystem",
      desc: "Over 1,200 talent graduates placed, 550+ enterprise IT solutions delivered across 18 global markets."
    }
  ];

  return (
    <div className="bg-[#fafbfd] min-h-screen pt-8 pb-24 text-slate-800">
      
      {/* SECTION 1: Dual-Pillar Hero Section + 2x2 Metric Cards Grid */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Intro Header & Dual Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wider bg-indigo-50 text-indigo-700 border border-indigo-200/80 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
              ABOUT HIRE2HIRED
            </span>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15] font-display">
              Transforming Tech Careers & <span className="bg-gradient-to-r from-indigo-600 via-blue-600 to-indigo-800 bg-clip-text text-transparent">Empowering Enterprise Growth</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-medium">
              Hire2Hired unites cutting-edge AI talent matching with high-impact tech bootcamps to bridge the global technology skills gap for talent and companies alike.
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              Hire2Hired was founded on a simple conviction: technology talent is universal, but seamless access to real-world opportunities is not. We exist to reshape how tech professionals learn, grow, and land high-growth roles — while enabling leading enterprises to deploy top-tier technical capability in record time.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button 
                onClick={() => onOpenApply('Explore Tech Courses')}
                className="px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-md hover:scale-105 transition-all flex items-center gap-2 border-0 cursor-pointer"
              >
                Explore Courses
                <ArrowRight className="w-4 h-4" />
              </button>

              <button 
                onClick={onRequestCallback}
                className="px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-indigo-600 font-bold text-sm border border-indigo-200 shadow-sm transition-all cursor-pointer"
              >
                Our IT Services
              </button>
            </div>
          </div>

          {/* Right Column: 2x2 Metric Cards Grid */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            
            {/* Card 1: Talent Graduates */}
            <div className="bg-white p-6 rounded-3xl border border-slate-200/90 shadow-lg text-center hover:shadow-xl hover:border-indigo-300 transition group">
              <div className="w-12 h-12 mx-auto mb-3 rounded-2xl bg-indigo-100 text-indigo-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div className="text-3xl font-extrabold text-indigo-600 font-display mb-1">
                1,200+
              </div>
              <div className="text-xs font-bold text-slate-600">
                Talent Graduates
              </div>
            </div>

            {/* Card 2: Enterprise IT Projects */}
            <div className="bg-white p-6 rounded-3xl border border-slate-200/90 shadow-lg text-center hover:shadow-xl hover:border-indigo-300 transition group">
              <div className="w-12 h-12 mx-auto mb-3 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Award className="w-6 h-6" />
              </div>
              <div className="text-3xl font-extrabold text-blue-600 font-display mb-1">
                550+
              </div>
              <div className="text-xs font-bold text-slate-600">
                IT Projects
              </div>
            </div>

            {/* Card 3: Hiring Partners */}
            <div className="bg-white p-6 rounded-3xl border border-slate-200/90 shadow-lg text-center hover:shadow-xl hover:border-indigo-300 transition group">
              <div className="w-12 h-12 mx-auto mb-3 rounded-2xl bg-sky-100 text-sky-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                <TrendingUp className="w-6 h-6" />
              </div>
              <div className="text-3xl font-extrabold text-sky-600 font-display mb-1">
                250+
              </div>
              <div className="text-xs font-bold text-slate-600">
                Hiring Partners
              </div>
            </div>

            {/* Card 4: Global Markets */}
            <div className="bg-white p-6 rounded-3xl border border-slate-200/90 shadow-lg text-center hover:shadow-xl hover:border-indigo-300 transition group">
              <div className="w-12 h-12 mx-auto mb-3 rounded-2xl bg-indigo-50 text-indigo-700 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Globe className="w-6 h-6" />
              </div>
              <div className="text-3xl font-extrabold text-indigo-700 font-display mb-1">
                18+
              </div>
              <div className="text-xs font-bold text-slate-600">
                Global Markets
              </div>
            </div>

          </div>

        </div>
      </div>


      {/* SECTION 2: Courses & IT Services Interactive Pillar Toggle */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-sm">
          
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display mb-3">
              Our Core Offerings: Education & IT Services
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Dual capabilities engineered to accelerate career growth and power digital transformation.
            </p>
          </div>

          {/* Pill Switcher */}
          <div className="flex justify-center mb-10">
            <div className="bg-slate-100 p-1.5 rounded-2xl inline-flex gap-2 border border-slate-200">
              <button 
                onClick={() => setActivePillarTab('courses')}
                className={`px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all border-0 cursor-pointer ${
                  activePillarTab === 'courses' 
                    ? 'bg-indigo-600 text-white shadow-md' 
                    : 'text-slate-600 hover:text-slate-900 bg-transparent'
                }`}
              >
                Job-Ready Courses & Bootcamps
              </button>

              <button 
                onClick={() => setActivePillarTab('services')}
                className={`px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all border-0 cursor-pointer ${
                  activePillarTab === 'services' 
                    ? 'bg-indigo-600 text-white shadow-md' 
                    : 'text-slate-600 hover:text-slate-900 bg-transparent'
                }`}
              >
                Enterprise IT Services & Staffing
              </button>
            </div>
          </div>

          {/* Tab 1 Content: Tech Education & Bootcamps */}
          {activePillarTab === 'courses' ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              <div className="p-6 rounded-2xl bg-indigo-50/60 border border-indigo-100 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-bold text-lg">
                  ☕
                </div>
                <h3 className="text-base font-bold text-slate-900">Java + AI Full-Stack Pods</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Enterprise Spring Boot, Microservices architectures, cloud deployment, and AI API integrations.
                </p>
                <div className="pt-2 text-xs font-bold text-indigo-600 flex items-center gap-1 cursor-pointer" onClick={() => onOpenApply('Java + AI Bootcamp')}>
                  View Curriculum <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-blue-50/60 border border-blue-100 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-lg">
                  ⚙️
                </div>
                <h3 className="text-base font-bold text-slate-900">Data & MLOps Engineering</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Real-world data pipelines using Apache Spark, Airflow, Snowflake, AWS Data Lakes & MLOps automation.
                </p>
                <div className="pt-2 text-xs font-bold text-blue-600 flex items-center gap-1 cursor-pointer" onClick={() => onOpenApply('Data Engineering Bootcamp')}>
                  View Curriculum <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-indigo-50/80 border border-indigo-100 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-700 text-white flex items-center justify-center font-bold text-lg">
                  🤖
                </div>
                <h3 className="text-base font-bold text-slate-900">AI Engineering & Agentic Track</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Specialized training in LLM orchestration, RAG architectures, Vector DBs, and autonomous agent systems.
                </p>
                <div className="pt-2 text-xs font-bold text-indigo-700 flex items-center gap-1 cursor-pointer" onClick={() => onOpenApply('AI Developer Track')}>
                  View Curriculum <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>

            </div>
          ) : (
            /* Tab 2 Content: Enterprise IT Services */
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center">
                  <Search className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900">AI-Powered Talent Matching</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Screen pre-vetted tech talent 10x faster with proprietary AI algorithms evaluating code, domain fit & soft skills.
                </p>
                <div className="pt-2 text-xs font-bold text-indigo-600 flex items-center gap-1 cursor-pointer" onClick={onRequestCallback}>
                  Request Talent <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center">
                  <Code2 className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900">Custom Engineering Delivery</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Dedicated software engineering pods deployed for cloud migration, AI pipeline development, and enterprise scaling.
                </p>
                <div className="pt-2 text-xs font-bold text-indigo-600 flex items-center gap-1 cursor-pointer" onClick={onRequestCallback}>
                  Schedule Consultation <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900">Staff Augmentation & C2H</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Flexible staffing solutions allowing enterprises to trial specialists on contract terms with zero placement risk.
                </p>
                <div className="pt-2 text-xs font-bold text-indigo-600 flex items-center gap-1 cursor-pointer" onClick={onRequestCallback}>
                  Explore Guarantee <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>

            </div>
          )}

        </div>
      </div>


      {/* SECTION 3: How It Works 6-Step Stepper Roadmap */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-100 text-blue-800 mb-3">
            SIMPLE & TRANSPARENT ROADMAP
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-display tracking-tight mb-3">
            How It <span className="text-indigo-600">Works</span>
          </h2>
          <p className="text-slate-600 text-base font-medium">
            From initial application to your career milestone — a structured end-to-end placement engine
          </p>
        </div>

        {/* 6 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-10">
          {stepsData.map((step) => (
            <div key={step.num} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between text-center relative group hover:-translate-y-1 transition-transform">
              <div>
                <div className={`w-8 h-8 mx-auto mb-4 rounded-full ${step.badgeColor} text-white font-extrabold text-xs flex items-center justify-center shadow-md`}>
                  {step.num}
                </div>
                <h3 className="text-xs font-bold text-slate-900 mb-2 leading-tight">
                  {step.title}
                </h3>
                <p className="text-[11px] text-slate-500 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ISA Banner Guarantee Block */}
        <div className="bg-gradient-to-r from-indigo-50 via-blue-50 to-indigo-50 rounded-2xl border border-indigo-200/90 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center flex-shrink-0 mt-0.5 shadow">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-slate-900 mb-1">
                Risk-Free Career Advancement — Zero Upfront Tuition
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 max-w-2xl leading-relaxed">
                Our Income Share Agreement (ISA) ensures you invest in your future with zero upfront financial burden. Repayments are capped, time-bound, and only kick in once you're hired above salary thresholds.
              </p>
            </div>
          </div>

          <button 
            onClick={() => onOpenApply('ISA Income Share Application')}
            className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs sm:text-sm whitespace-nowrap shadow hover:scale-105 transition-all border-0 cursor-pointer flex items-center gap-2"
          >
            Get Started
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>


      {/* SECTION 4: Mission & Vision Side-by-Side Cards */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Mission */}
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-md space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-indigo-100 text-indigo-600 flex items-center justify-center">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-extrabold text-slate-900 font-display">
              Our Mission
            </h3>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
              To democratize tech education and eliminate hiring friction by empowering ambitious talent with in-demand skills and delivering pre-vetted engineers to industry-leading companies.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-md space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center">
              <Globe className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-extrabold text-slate-900 font-display">
              Our Vision
            </h3>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
              To become the global benchmark for tech career elevation and enterprise talent deployment — where talent meets technology seamlessly.
            </p>
          </div>

        </div>
      </div>


      {/* SECTION 5: Our Core Values Grid (6 Cards) */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-display tracking-tight">
            Our <span className="text-indigo-600">Core Values</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {coreValues.map((val, idx) => {
            const IconComp = val.icon;
            return (
              <div key={idx} className="bg-white p-7 rounded-3xl border border-slate-200 shadow-sm space-y-3 hover:shadow-md transition">
                <div className={`w-10 h-10 rounded-2xl ${val.color} flex items-center justify-center`}>
                  <IconComp className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">
                  {val.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  {val.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>


      {/* SECTION 6: Our Journey Timeline */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-display tracking-tight">
            Our <span className="text-indigo-600">Journey</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Evolution from US staffing roots to a global AI-driven education and IT services platform
          </p>
        </div>

        <div className="space-y-6 relative before:absolute before:inset-0 before:left-6 md:before:left-1/2 before:-ml-px before:w-0.5 before:bg-slate-200">
          {journeyMilestones.map((ms, idx) => (
            <div key={idx} className={`relative flex items-center ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-600 text-white font-bold text-xs shadow-md border-4 border-white absolute left-0 md:left-1/2 -translate-x-1/2 z-10">
                {ms.year}
              </div>

              <div className="ml-16 md:ml-0 md:w-1/2 px-4 sm:px-8">
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
                  <h3 className="text-base font-bold text-slate-900">{ms.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{ms.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>


      {/* SECTION 7: Acme.ai Platform Workflow Showcase */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xl overflow-hidden">
          <div className="bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:20px_20px] p-8 sm:p-12 text-center border-b border-slate-100">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-2">
              Introducing Acme.ai Platform
            </h2>
            <p className="text-slate-500 font-medium text-sm sm:text-base">
              Automated workflow connecting consultants with enterprise client teams
            </p>

            {/* Interactive Mockup Box */}
            <div className="mt-8 bg-white rounded-2xl border border-slate-200 shadow-2xl text-left overflow-hidden max-w-4xl mx-auto flex flex-col md:flex-row min-h-[360px]">
              
              {/* Sidebar */}
              <div className="w-full md:w-56 bg-slate-50 border-b md:border-b-0 md:border-r border-slate-200 p-4 space-y-4 flex-shrink-0">
                <div className="flex items-center gap-2 px-2 py-1.5 rounded-lg bg-white border border-slate-200 shadow-sm">
                  <div className="w-6 h-6 rounded-full bg-slate-800 text-white text-xs font-bold flex items-center justify-center">
                    AK
                  </div>
                  <span className="text-xs font-semibold text-slate-700 truncate">Alicia Koch</span>
                  <ChevronDown className="w-3.5 h-3.5 text-slate-400 ml-auto" />
                </div>

                <div className="space-y-1">
                  <button className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-semibold bg-slate-900 text-white border-0 cursor-pointer">
                    <div className="flex items-center gap-2">
                      <Inbox className="w-4 h-4" />
                      <span>Inbox</span>
                    </div>
                    <span className="text-[10px] bg-slate-700 text-white px-1.5 py-0.5 rounded-full">128</span>
                  </button>

                  <button className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium text-slate-600 hover:bg-slate-200/60 border-0 bg-transparent cursor-pointer">
                    <div className="flex items-center gap-2">
                      <FileText className="w-4 h-4" />
                      <span>Drafts</span>
                    </div>
                    <span className="text-[10px] bg-slate-200 text-slate-700 px-1.5 py-0.5 rounded-full">9</span>
                  </button>

                  <button className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium text-slate-600 hover:bg-slate-200/60 border-0 bg-transparent cursor-pointer">
                    <Send className="w-4 h-4" />
                    <span>Sent</span>
                  </button>
                </div>
              </div>

              {/* Email List & Details */}
              <div className="flex-1 flex flex-col md:flex-row">
                <div className="w-full md:w-64 border-b md:border-b-0 md:border-r border-slate-200 p-3 space-y-3 flex-shrink-0">
                  <div className="relative w-full">
                    <Search className="w-3.5 h-3.5 absolute left-2.5 top-2.5 text-slate-400" />
                    <input type="text" placeholder="Search" readOnly className="w-full pl-8 pr-3 py-1.5 text-xs bg-slate-100 rounded-md border-0 text-slate-600 outline-none" />
                  </div>

                  {mockEmails.map((item) => (
                    <div 
                      key={item.id}
                      onClick={() => setActiveInboxMail(item.id)}
                      className={`p-2.5 rounded-xl border transition cursor-pointer ${
                        activeInboxMail === item.id 
                          ? 'bg-slate-100 border-slate-300 shadow-sm' 
                          : 'bg-white border-slate-100 hover:bg-slate-50'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-bold text-slate-900">{item.sender}</span>
                        <span className="text-[10px] text-slate-400">{item.time}</span>
                      </div>
                      <div className="text-xs font-medium text-slate-800 mb-1">{item.subject}</div>
                      <div className="text-[11px] text-slate-500 line-clamp-2 leading-relaxed">
                        {item.preview}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex-1 p-5 flex flex-col justify-between bg-white">
                  <div>
                    <div className="flex items-start justify-between pb-3 border-b border-slate-100">
                      <div>
                        <div className="text-xs font-bold text-slate-900">{mockEmails[activeInboxMail].sender}</div>
                        <div className="text-[11px] text-slate-500">{mockEmails[activeInboxMail].subject}</div>
                      </div>
                      <span className="text-[10px] text-slate-400">{mockEmails[activeInboxMail].fullDate}</span>
                    </div>
                    <p className="pt-4 text-xs text-slate-600 leading-relaxed">
                      {mockEmails[activeInboxMail].preview}
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>


      {/* SECTION 8: Join Our Journey CTA Card */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="bg-gradient-to-r from-indigo-50 via-blue-50 to-indigo-50 border border-indigo-200/90 rounded-3xl p-10 sm:p-14 text-center shadow-sm">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3 font-display">
            Join Our Journey
          </h3>
          <p className="text-slate-600 text-sm sm:text-base font-medium mb-8">
            Be part of the future of tech career elevation & enterprise talent delivery. Connect with us today.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={() => onOpenApply('General Application')}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-md hover:scale-105 transition-all border-0 cursor-pointer"
            >
              Apply as a Consultant
            </button>

            <button 
              onClick={onRequestCallback}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-indigo-600 font-bold text-sm border border-indigo-200 shadow-sm transition-all cursor-pointer"
            >
              Book a Call
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}

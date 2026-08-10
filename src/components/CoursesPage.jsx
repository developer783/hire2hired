import React, { useState } from 'react';
import { 
  Code, Clock, Users, Star, ArrowRight, Zap, CheckCircle2, 
  Search, SlidersHorizontal, Home, ChevronRight, Sparkles, Filter, 
  Wifi, Monitor, X, Phone, ShieldCheck
} from 'lucide-react';
import heroImg from '../assets/courses_hero.png';

export default function CoursesPage({ onOpenApply, onRequestCallback, isFullPage = true }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeMode, setActiveMode] = useState('All Modes');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCourse, setSelectedCourse] = useState(null);

  const categories = ['All', 'Full Stack', 'Data & AI', 'AI', 'Cloud & DevOps', 'Cybersecurity', 'Software Engineering'];
  const modes = ['All Modes', 'Live Online', 'Self-Paced'];

  const stats = [
    { label: "Students Enrolled", value: "1,200+", color: "text-indigo-600" },
    { label: "Highest Package", value: "$185K / yr", color: "text-emerald-600" },
    { label: "Hiring Partners", value: "250+", color: "text-blue-600" },
    { label: "Average Rating", value: "4.9★", color: "text-amber-500" }
  ];

  const courses = [
    {
      id: 'java-ai',
      category: 'Full Stack',
      mode: 'Live Online',
      title: 'Java Developer + AI Bootcamp',
      subtitle: 'Build Enterprise Apps with AI Capabilities',
      level: 'Beginner to Advanced',
      icon: '☕',
      tag: 'BESTSELLER',
      badgeColor: 'bg-violet-50 text-violet-700 border-violet-200',
      duration: '8 Months',
      students: '1,200+',
      rating: '4.9',
      reviewsCount: '3,200',
      skills: ['Java', 'Spring Boot', 'Microservices', 'AI APIs', 'OpenAI', 'REST'],
      highlights: [
        'AI API integration & LLM connections',
        'Live doubt sessions with senior mentors',
        'Mock technical & behavioral interviews',
        'Enterprise-ready production skills'
      ],
      description: "Comprehensive 8-month intensive bootcamp mastering Core Java 21, Spring Boot microservices, RESTful architecture, and cutting-edge OpenAI API integration for modern enterprise applications."
    },
    {
      id: 'cloud-devops-ai',
      category: 'Cloud & DevOps',
      mode: 'Live Online',
      title: 'Cloud & DevOps Engineer + AI',
      subtitle: 'AWS, Azure, Kubernetes, Terraform & AI Infra',
      level: 'Intermediate to Advanced',
      icon: '☁️',
      tag: 'HIGH GROWTH',
      badgeColor: 'bg-sky-50 text-sky-700 border-sky-200',
      duration: '6 Months',
      students: '900+',
      rating: '4.9',
      reviewsCount: '1,450',
      skills: ['AWS', 'Azure', 'Kubernetes', 'Docker', 'Terraform', 'CI/CD'],
      highlights: [
        'Multi-cloud AWS & Azure architecture',
        'Infrastructure as Code with Terraform',
        'Kubernetes container orchestration',
        'Automated AI model deployment pipelines'
      ],
      description: "Master multi-cloud architecture, automated Docker/Kubernetes container orchestration, Infrastructure as Code with Terraform, and deploying production AI pipelines."
    },
    {
      id: 'ai-developer',
      category: 'AI',
      mode: 'Live Online',
      title: 'AI Developer Bootcamp',
      subtitle: 'Advanced GenAI & LLM Specialization',
      level: 'Intermediate to Advanced',
      icon: '🤖',
      tag: 'HOT',
      badgeColor: 'bg-indigo-50 text-indigo-700 border-indigo-200',
      duration: '6 Months',
      students: '1,100+',
      rating: '4.9',
      reviewsCount: '1,870',
      skills: ['LLMs', 'RAG', 'Prompt Eng.', 'Vector DBs', 'AI Agents', 'GenAI'],
      highlights: [
        'LLM fine-tuning & RAG architectures',
        'Autonomous AI Agents & workflows',
        'Vector databases (Pinecone/Weaviate)',
        'Building scalable GenAI microservices'
      ],
      description: "Specialize in Generative AI: learn RAG architectures, Pinecone vector stores, LangChain agent loops, and fine-tuning open-source LLMs like Llama 3."
    },
    {
      id: 'cybersecurity-ai',
      category: 'Cybersecurity',
      mode: 'Live Online',
      title: 'Cybersecurity & AI Threat Intelligence',
      subtitle: 'Ethical Hacking, SIEM & Zero-Trust Cloud Security',
      level: 'Beginner to Intermediate',
      icon: '🛡️',
      tag: 'HIGH DEMAND',
      badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      duration: '6 Months',
      students: '850+',
      rating: '4.9',
      reviewsCount: '920',
      skills: ['Ethical Hacking', 'SOC', 'SIEM', 'Cloud Security', 'AI Threat Detection'],
      highlights: [
        'Ethical hacking & penetration testing',
        'AI-driven threat intelligence & SIEM',
        'Zero-Trust cloud security frameworks',
        'Compliance & vulnerability management'
      ],
      description: "Build deep skills in offensive & defensive security, SIEM event monitoring, zero-trust cloud infrastructure, and AI-driven automated threat detection."
    },
    {
      id: 'data-engineer-ai',
      category: 'Data & AI',
      mode: 'Live Online',
      title: 'Data Engineer + AI Bootcamp',
      subtitle: 'Build Smart Data Pipelines with AI & ML',
      level: 'Intermediate',
      icon: '⚙️',
      tag: 'NEW',
      badgeColor: 'bg-amber-50 text-amber-700 border-amber-200',
      duration: '6 Months',
      students: '1,000+',
      rating: '4.8',
      reviewsCount: '980',
      skills: ['Spark', 'Airflow', 'SQL', 'AWS', 'MLOps', 'ML Pipelines'],
      highlights: [
        'ML pipeline & GenAI integration',
        'Real-time streaming AI pipelines',
        'MLOps fundamentals & automation',
        'Cloud infrastructure (AWS/Azure)'
      ],
      description: "Learn PySpark distributed processing, Airflow DAG orchestration, Snowflake data warehousing, real-time streaming ETL, and production MLOps deployment."
    },
    {
      id: 'genai-agent-architect',
      category: 'AI',
      mode: 'Live Online',
      title: 'GenAI & Agentic Systems Architect',
      subtitle: 'LangChain, Autonomous Agents & Custom Fine-Tuning',
      level: 'Advanced',
      icon: '🔮',
      tag: 'ADVANCED',
      badgeColor: 'bg-purple-50 text-purple-700 border-purple-200',
      duration: '5 Months',
      students: '750+',
      rating: '5.0',
      reviewsCount: '640',
      skills: ['LangChain', 'LlamaIndex', 'Fine-Tuning', 'LoRA', 'Agentic AI'],
      highlights: [
        'Custom LLM fine-tuning (LoRA/QLoRA)',
        'Multi-agent crew orchestration',
        'Enterprise RAG & Knowledge Graphs',
        'Production AI Agent deployment'
      ],
      description: "Advanced engineering program focused on multi-agent crew execution, LoRA/QLoRA fine-tuning, knowledge graph integration, and deploying scalable AI agents."
    },
    {
      id: 'react-nextjs-ai',
      category: 'Full Stack',
      mode: 'Live Online',
      title: 'React & Next.js Full Stack + AI',
      subtitle: 'Modern Frontend & AI Application Engineering',
      level: 'Beginner to Advanced',
      icon: '⚡',
      tag: 'POPULAR',
      badgeColor: 'bg-blue-50 text-blue-700 border-blue-200',
      duration: '5 Months',
      students: '1,050+',
      rating: '4.9',
      skills: ['React 18', 'Next.js 14', 'TypeScript', 'Tailwind', 'Vercel AI'],
      highlights: [
        'Next.js App Router & Server Components',
        'TypeScript & Redux Toolkit state mgmt',
        'Vercel AI SDK & streaming UI components',
        'Real-time WebSocket & GraphQL integration'
      ],
      description: "Master modern full-stack web engineering using React 18, Next.js 14 App Router, TypeScript, Vercel AI SDK streaming hooks, and Tailwind CSS."
    },
    {
      id: 'data-scientist-ai',
      category: 'Data & AI',
      mode: 'Self-Paced',
      title: 'Data Scientist + AI Bootcamp',
      subtitle: 'Predictive Analytics & Deep Learning',
      level: 'Beginner to Advanced',
      icon: '📊',
      tag: 'FEATURED',
      badgeColor: 'bg-blue-50 text-blue-700 border-blue-200',
      duration: '6 Months',
      students: '800+',
      rating: '4.9',
      reviewsCount: '1,400',
      skills: ['Python', 'Pandas', 'TensorFlow', 'PyTorch', 'Machine Learning', 'GenAI'],
      highlights: [
        'Predictive modeling & deep learning',
        'Natural Language Processing (NLP)',
        'Data visualization & executive dashboards',
        'Real-world capstone client project'
      ],
      description: "Master statistical modeling, machine learning algorithms, PyTorch neural networks, NLP, and executive data visualization."
    },
    {
      id: 'python-fullstack-ai',
      category: 'Full Stack',
      mode: 'Self-Paced',
      title: 'Python Full Stack + AI Bootcamp',
      subtitle: 'Modern Web Apps & Fast AI Backends',
      level: 'Beginner to Intermediate',
      icon: '🐍',
      tag: 'TRENDING',
      badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      duration: '6 Months',
      students: '950+',
      rating: '4.8',
      reviewsCount: '1,120',
      skills: ['Python', 'FastAPI', 'Django', 'React', 'Tailwind', 'AI Integration'],
      highlights: [
        'FastAPI & Django REST framework',
        'React frontend with modern state mgmt',
        'Integrating LangChain & OpenAI APIs',
        'CI/CD deployment to Vercel & AWS'
      ],
      description: "Build fast Python web backends with FastAPI and Django, coupled with React frontends and LangChain AI extensions."
    },
    {
      id: 'salesforce-ai-dev',
      category: 'Full Stack',
      mode: 'Self-Paced',
      title: 'Salesforce Developer & AI Specialist',
      subtitle: 'Apex, LWC, Einstein AI & Salesforce Cloud',
      level: 'Intermediate',
      icon: '☁️',
      tag: 'ENTERPRISE',
      badgeColor: 'bg-indigo-50 text-indigo-700 border-indigo-200',
      duration: '5 Months',
      students: '650+',
      rating: '4.8',
      reviewsCount: '580',
      skills: ['Apex', 'LWC', 'Einstein AI', 'Sales Cloud', 'Flows', 'SOQL'],
      highlights: [
        'Lightning Web Components & Apex code',
        'Salesforce Einstein AI integration',
        'Enterprise integration patterns & REST APIs',
        'Salesforce Admin & Dev certification prep'
      ],
      description: "Learn Apex programming, Lightning Web Components (LWC), Einstein AI automation, and enterprise integration patterns."
    },
    {
      id: 'embedded-edge-ai',
      category: 'Software Engineering',
      mode: 'Live Online',
      title: 'Embedded Systems & Edge AI',
      subtitle: 'C/C++, Microcontrollers & Edge Machine Learning',
      level: 'Intermediate to Advanced',
      icon: '📟',
      tag: 'NEW',
      badgeColor: 'bg-slate-100 text-slate-800 border-slate-300',
      duration: '6 Months',
      students: '500+',
      rating: '4.8',
      skills: ['C/C++', 'RTOS', 'Microcontrollers', 'Edge Impulse', 'TensorFlow Lite'],
      highlights: [
        'C/C++ firmware development for microcontrollers',
        'Real-Time Operating Systems (FreeRTOS)',
        'Edge AI model optimization (TinyML)',
        'IoT protocol suites (MQTT, CoAP, BLE)'
      ],
      description: "Develop firmware using C/C++ on FreeRTOS microcontrollers and optimize TinyML AI models on edge devices."
    },
    {
      id: 'qa-automation-ai',
      category: 'Software Engineering',
      mode: 'Self-Paced',
      title: 'QA Automation + AI Testing Bootcamp',
      subtitle: 'Next-Gen Test Automation & AI Testing',
      level: 'Beginner to Advanced',
      icon: '🧪',
      tag: 'HIGH DEMAND',
      badgeColor: 'bg-amber-50 text-amber-800 border-amber-200',
      duration: '5 Months',
      students: '700+',
      rating: '4.9',
      skills: ['Selenium', 'Cypress', 'Playwright', 'Java/Python', 'API Testing', 'AI Test Gen'],
      highlights: [
        'AI-assisted test generation & self-healing',
        'Selenium & Playwright framework creation',
        'Postman & REST Assured API testing',
        'Jenkins & GitHub Actions CI/CD pipelines'
      ],
      description: "Build robust test automation frameworks using Selenium, Playwright, Cypress, and AI-assisted self-healing test locators."
    }
  ];

  const filteredCourses = courses.filter((c) => {
    const matchesCategory = activeCategory === 'All' || c.category === activeCategory || (activeCategory === 'Data & AI' && (c.category === 'Data & AI' || c.category === 'AI'));
    const matchesMode = activeMode === 'All Modes' || c.mode === activeMode;
    const matchesSearch = searchQuery === '' || 
      c.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      c.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.skills.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesMode && matchesSearch;
  });

  return (
    <div className={`bg-[#fafbfd] ${isFullPage ? 'pt-24 pb-20' : 'py-20 md:py-28'} border-b border-slate-200/80`}>
      <div className="container-main">
        
        {/* Full Page Breadcrumb */}
        {isFullPage && (
          <div className="max-w-6xl mx-auto mb-6 flex items-center gap-2 text-xs font-bold text-slate-500">
            <a href="#home" className="flex items-center gap-1 text-slate-600 hover:text-indigo-600 no-underline">
              <Home className="w-3.5 h-3.5" /> Home
            </a>
            <ChevronRight className="w-3 h-3 text-slate-400" />
            <span className="text-indigo-600 font-extrabold">All Bootcamps & Courses</span>
          </div>
        )}

        {/* 2-Column Hero Section */}
        <div className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-extrabold">
              <Code className="w-3.5 h-3.5" /> JOB-READY TECHNICAL TRAINING
            </div>

            <h1 className="text-4xl sm:text-6xl font-display font-extrabold text-slate-900 tracking-tight leading-[1.1]">
              Industry-Ready Training <br />
              <span className="gradient-text-animated">to Get You Placed</span>
            </h1>

            <p className="text-slate-600 text-base sm:text-xl leading-relaxed">
              Choose from Live Online or Self-Paced learning. All bootcamps include 1-on-1 mentorship, resume optimization, mock interviews, and access to 60+ hiring drives monthly.
            </p>

            {/* Quick Stats Pills */}
            <div className="flex flex-wrap gap-4 pt-2">
              {stats.map((st, i) => (
                <div key={i} className="bg-white border border-slate-200/90 rounded-2xl px-4 py-2.5 shadow-2xs">
                  <div className={`font-display font-extrabold text-lg ${st.color}`}>{st.value}</div>
                  <div className="text-slate-500 text-xs font-bold">{st.label}</div>
                </div>
              ))}
            </div>

            {/* Search Input */}
            <div className="pt-2 max-w-xl relative">
              <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
              <input 
                type="text"
                placeholder="Search bootcamps, skills (e.g. Java, Spark, LangChain)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white border border-slate-200 text-sm text-slate-800 placeholder:text-slate-400 outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 shadow-xs transition"
              />
              {searchQuery && (
                <button onClick={() => setSearchQuery('')} className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 hover:text-slate-600 bg-transparent border-0 cursor-pointer">
                  Clear
                </button>
              )}
            </div>
          </div>

          {/* Right Column: 3D Illustration Card (5 Cols) */}
          <div className="lg:col-span-5 relative">
            <div className="bg-gradient-to-tr from-slate-900 via-indigo-950 to-slate-900 rounded-[36px] p-4 border border-slate-800 shadow-2xl relative overflow-hidden group">
              <div className="flex items-center justify-between px-4 py-2 border-b border-slate-800 text-[11px] font-mono text-slate-400">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
                  <span className="ml-2 text-slate-300 font-bold">Hire2Hired Bootcamps Engine</span>
                </div>
                <span className="text-indigo-400 font-bold">12 SPECIALISATIONS</span>
              </div>

              <div className="relative rounded-2xl overflow-hidden mt-3 border border-slate-800">
                <img 
                  src={heroImg} 
                  alt="Hire2Hired Software Engineering Bootcamps" 
                  className="w-full h-auto object-cover rounded-2xl transform group-hover:scale-105 transition-transform duration-500"
                />

                {/* Floating Metric 1 */}
                <div className="absolute top-4 left-4 bg-slate-900/90 backdrop-blur-md border border-slate-700/80 rounded-xl p-3 text-white shadow-xl max-w-[200px]">
                  <p className="text-[10px] font-extrabold uppercase text-indigo-400 tracking-wider">Placement Rate</p>
                  <p className="text-xs font-bold text-slate-100 mt-0.5">94.8% Placed in 90 Days</p>
                  <div className="flex items-center gap-1 text-[10px] text-emerald-400 font-bold mt-1">
                    <CheckCircle2 className="w-3 h-3" /> Average $115K Offer
                  </div>
                </div>

                {/* Floating Metric 2 */}
                <div className="absolute bottom-4 right-4 bg-slate-900/90 backdrop-blur-md border border-slate-700/80 rounded-xl p-3 text-white shadow-xl max-w-[210px]">
                  <p className="text-[10px] font-extrabold uppercase text-amber-400 tracking-wider">Income Share Agreement</p>
                  <p className="text-xs font-bold text-slate-100 mt-0.5">$0 Upfront Tuition Option</p>
                  <div className="flex items-center gap-1 text-[10px] text-slate-300 font-bold mt-1">
                    <Sparkles className="w-3 h-3 text-amber-400 fill-amber-400" /> Pay only when hired
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Sticky Filter Bar */}
        <div className="max-w-6xl mx-auto mb-10 bg-white rounded-2xl p-4 border border-slate-200 shadow-sm flex flex-wrap items-center justify-between gap-4">
          
          <div className="flex flex-wrap items-center gap-2">
            <span className="flex items-center gap-1 text-xs font-bold text-slate-500 mr-2">
              <Filter className="w-3.5 h-3.5 text-indigo-600" /> Category:
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-extrabold transition border cursor-pointer ${
                  activeCategory === cat 
                    ? 'bg-indigo-600 text-white border-indigo-600 shadow-xs' 
                    : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100 hover:border-indigo-300'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-slate-400 mr-1">Format:</span>
            {modes.map((m) => (
              <button
                key={m}
                onClick={() => setActiveMode(m)}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition border cursor-pointer ${
                  activeMode === m 
                    ? 'bg-slate-900 text-white border-slate-900' 
                    : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                }`}
              >
                {m}
              </button>
            ))}
            <span className="text-xs font-bold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100 ml-2">
              {filteredCourses.length} Bootcamps
            </span>
          </div>

        </div>

        {/* Bootcamps Grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.length > 0 ? (
            filteredCourses.map((c) => (
              <div 
                key={c.id} 
                className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-xs hover:shadow-md hover:border-indigo-300 transition-all flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  
                  {/* Top Badge & Icon */}
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-2xl shadow-2xs group-hover:scale-105 transition-transform">
                        {c.icon}
                      </div>
                      <div>
                        <h3 className="font-display font-extrabold text-lg text-slate-900 leading-tight">
                          {c.title}
                        </h3>
                        <p className="text-xs text-slate-500 font-medium mt-0.5">
                          {c.subtitle}
                        </p>
                      </div>
                    </div>
                    <span className={`text-[10px] font-extrabold px-2.5 py-1 rounded-full border whitespace-nowrap ${c.badgeColor}`}>
                      {c.tag}
                    </span>
                  </div>

                  {/* Meta Stats */}
                  <div className="flex items-center justify-between text-xs font-semibold text-slate-500 pt-1 pb-2 border-b border-slate-100">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-indigo-600" /> {c.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="w-3.5 h-3.5 text-indigo-600" /> {c.students}
                    </span>
                    <span className="flex items-center gap-1 text-amber-500 font-bold">
                      <Star className="w-3.5 h-3.5 fill-amber-400" /> {c.rating}
                    </span>
                  </div>

                  {/* Skills Chips */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {c.skills.map((sk, idx) => (
                      <span key={idx} className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-slate-100 text-slate-700">
                        {sk}
                      </span>
                    ))}
                  </div>

                  {/* Highlights Checklist */}
                  <div className="space-y-2 pt-2">
                    {c.highlights.map((hl, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs font-medium text-slate-600">
                        <Zap className="w-3.5 h-3.5 text-indigo-600 flex-shrink-0" />
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>

                </div>

                {/* Bottom Row */}
                <div className="pt-6 mt-4 border-t border-slate-100 space-y-3">
                  <div className="flex items-center justify-between text-[11px] font-bold text-slate-500">
                    <span className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-100 text-slate-700">
                      {c.mode === 'Live Online' ? <Wifi className="w-3 h-3 text-indigo-600" /> : <Monitor className="w-3 h-3 text-emerald-600" />}
                      {c.mode}
                    </span>
                    <button 
                      onClick={() => setSelectedCourse(c)} 
                      className="text-indigo-600 hover:text-indigo-800 underline bg-transparent border-0 cursor-pointer"
                    >
                      Quick Syllabus View
                    </button>
                  </div>

                  <button
                    onClick={() => onOpenApply(c.title)}
                    className="w-full py-3.5 rounded-2xl bg-indigo-50 hover:bg-indigo-600 text-indigo-700 hover:text-white font-bold text-sm flex items-center justify-center gap-2 transition border border-indigo-200 cursor-pointer shadow-2xs"
                  >
                    Apply For Program <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-3 bg-white rounded-3xl p-12 text-center border border-slate-200 space-y-3">
              <p className="text-slate-600 text-sm font-bold">No bootcamps match your filter criteria.</p>
              <button 
                onClick={() => { setActiveCategory('All'); setActiveMode('All Modes'); setSearchQuery(''); }}
                className="px-4 py-2 rounded-xl bg-indigo-50 text-indigo-600 text-xs font-bold border border-indigo-200 cursor-pointer"
              >
                Reset All Filters
              </button>
            </div>
          )}
        </div>

        {/* Syllabus / Detail Modal */}
        {selectedCourse && (
          <div className="modal-backdrop animate-in fade-in z-50">
            <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative border border-slate-200 animate-in zoom-in-95">
              <button 
                onClick={() => setSelectedCourse(null)}
                className="absolute top-5 right-5 w-9 h-9 rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 flex items-center justify-center border-0 cursor-pointer transition"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{selectedCourse.icon}</span>
                  <div>
                    <h3 className="font-display font-extrabold text-xl text-slate-900">{selectedCourse.title}</h3>
                    <p className="text-xs text-slate-500 font-semibold">{selectedCourse.subtitle} • {selectedCourse.duration}</p>
                  </div>
                </div>

                <p className="text-xs text-slate-700 leading-relaxed font-medium bg-slate-50 p-3 rounded-xl border border-slate-100">
                  {selectedCourse.description}
                </p>

                <div>
                  <h4 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider mb-2">Core Skills & Curriculum Highlights</h4>
                  <div className="space-y-2">
                    {selectedCourse.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex gap-3">
                  <button 
                    onClick={() => {
                      const t = selectedCourse.title;
                      setSelectedCourse(null);
                      onOpenApply(t);
                    }}
                    className="flex-1 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs border-0 cursor-pointer shadow"
                  >
                    Apply Now
                  </button>
                  <button 
                    onClick={() => setSelectedCourse(null)}
                    className="px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs border-0 cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Guidance CTA Banner */}
        <div className="max-w-4xl mx-auto mt-20">
          <div className="bg-gradient-to-r from-indigo-50 via-blue-50 to-indigo-50 border border-indigo-200/90 rounded-3xl p-10 sm:p-14 text-center shadow-sm relative overflow-hidden">
            <div className="w-12 h-12 rounded-2xl bg-indigo-600 text-white flex items-center justify-center mx-auto mb-4 shadow-md">
              <Phone className="w-6 h-6" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display tracking-tight mb-2">
              Not sure which <span className="text-indigo-600">course to pick?</span>
            </h3>
            <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto font-medium mb-8">
              Our free 1-on-1 counseling sessions help you choose the right path based on your background, technical goals, and target salary.
            </p>
            
            <button 
              onClick={onRequestCallback}
              className="px-8 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-md hover:scale-105 transition-all border-0 cursor-pointer inline-flex items-center gap-2"
            >
              Get Free Guidance
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

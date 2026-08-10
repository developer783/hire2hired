import React, { useState } from 'react';
import { Clock, Users, Star, ArrowRight, Zap, Sparkles, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function ProgramsGrid({ onOpenApply }) {
  const [activeTab, setActiveTab] = useState('All');

  const bootcamps = [
    {
      id: 'java-ai',
      category: 'Full Stack',
      title: 'Java Developer + AI Bootcamp',
      subtitle: 'Build Enterprise Apps with AI Capabilities',
      icon: '☕',
      tag: 'BESTSELLER',
      badgeColor: 'bg-violet-50 text-violet-700 border-violet-200',
      duration: '8 Months',
      students: '1,200+',
      rating: '4.9',
      skills: ['Java', 'Spring Boot', 'Microservices', 'AI APIs', 'OpenAI', 'REST'],
      highlights: [
        'AI API integration & LLM connections',
        'Live doubt sessions with senior mentors',
        'Mock technical & behavioral interviews',
        'Enterprise-ready production skills'
      ]
    },
    {
      id: 'data-engineer-ai',
      category: 'Data & AI',
      title: 'Data Engineer + AI Bootcamp',
      subtitle: 'Build Smart Data Pipelines with AI & ML',
      icon: '⚙️',
      tag: 'NEW',
      badgeColor: 'bg-amber-50 text-amber-700 border-amber-200',
      duration: '6 Months',
      students: '1,000+',
      rating: '4.8',
      skills: ['Spark', 'Airflow', 'SQL', 'AWS', 'MLOps', 'ML Pipelines'],
      highlights: [
        'ML pipeline & GenAI integration',
        'Real-time streaming AI pipelines',
        'MLOps fundamentals & automation',
        'Cloud infrastructure (AWS/Azure)'
      ]
    },
    {
      id: 'ai-developer',
      category: 'AI',
      title: 'AI Developer Bootcamp',
      subtitle: 'Advanced GenAI & LLM Specialization',
      icon: '🤖',
      tag: 'HOT',
      badgeColor: 'bg-indigo-50 text-indigo-700 border-indigo-200',
      duration: '6 Months',
      students: '1,100+',
      rating: '4.9',
      skills: ['LLMs', 'RAG', 'Prompt Eng.', 'Vector DBs', 'AI Agents', 'GenAI'],
      highlights: [
        'LLM fine-tuning & RAG architectures',
        'Autonomous AI Agents & workflows',
        'Vector databases (Pinecone/Weaviate)',
        'Building scalable GenAI microservices'
      ]
    },
    {
      id: 'cloud-devops-ai',
      category: 'Cloud & DevOps',
      title: 'Cloud & DevOps Engineer + AI',
      subtitle: 'AWS, Azure, Kubernetes, Terraform & AI Infra',
      icon: '☁️',
      tag: 'HIGH GROWTH',
      badgeColor: 'bg-sky-50 text-sky-700 border-sky-200',
      duration: '6 Months',
      students: '900+',
      rating: '4.9',
      skills: ['AWS', 'Azure', 'Kubernetes', 'Docker', 'Terraform', 'CI/CD'],
      highlights: [
        'Multi-cloud AWS & Azure architecture',
        'Infrastructure as Code with Terraform',
        'Kubernetes container orchestration',
        'Automated AI model deployment pipelines'
      ]
    },
    {
      id: 'cybersecurity-ai',
      category: 'Cybersecurity',
      title: 'Cybersecurity & AI Threat Intelligence',
      subtitle: 'Ethical Hacking, SIEM & Zero-Trust Cloud Security',
      icon: '🛡️',
      tag: 'HIGH DEMAND',
      badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      duration: '6 Months',
      students: '850+',
      rating: '4.9',
      skills: ['Ethical Hacking', 'SOC', 'SIEM', 'Cloud Security', 'AI Threat Detection'],
      highlights: [
        'Ethical hacking & penetration testing',
        'AI-driven threat intelligence & SIEM',
        'Zero-Trust cloud security frameworks',
        'Compliance & vulnerability management'
      ]
    },
    {
      id: 'genai-agent-architect',
      category: 'AI',
      title: 'GenAI & Agentic Systems Architect',
      subtitle: 'LangChain, Autonomous Agents & Custom Fine-Tuning',
      icon: '🔮',
      tag: 'ADVANCED',
      badgeColor: 'bg-purple-50 text-purple-700 border-purple-200',
      duration: '5 Months',
      students: '750+',
      rating: '5.0',
      skills: ['LangChain', 'LlamaIndex', 'Fine-Tuning', 'LoRA', 'Agentic AI'],
      highlights: [
        'Custom LLM fine-tuning (LoRA/QLoRA)',
        'Multi-agent crew orchestration',
        'Enterprise RAG & Knowledge Graphs',
        'Production AI Agent deployment'
      ]
    },
    {
      id: 'react-nextjs-ai',
      category: 'Full Stack',
      title: 'React & Next.js Full Stack + AI',
      subtitle: 'Modern Frontend & AI Application Engineering',
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
      ]
    },
    {
      id: 'data-scientist-ai',
      category: 'Data & AI',
      title: 'Data Scientist + AI Bootcamp',
      subtitle: 'Predictive Analytics & Deep Learning',
      icon: '📊',
      tag: 'FEATURED',
      badgeColor: 'bg-blue-50 text-blue-700 border-blue-200',
      duration: '6 Months',
      students: '800+',
      rating: '4.9',
      skills: ['Python', 'Pandas', 'TensorFlow', 'PyTorch', 'Machine Learning', 'GenAI'],
      highlights: [
        'Predictive modeling & deep learning',
        'Natural Language Processing (NLP)',
        'Data visualization & executive dashboards',
        'Real-world capstone client project'
      ]
    },
    {
      id: 'python-fullstack-ai',
      category: 'Full Stack',
      title: 'Python Full Stack + AI Bootcamp',
      subtitle: 'Modern Web Apps & Fast AI Backends',
      icon: '🐍',
      tag: 'TRENDING',
      badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      duration: '6 Months',
      students: '950+',
      rating: '4.8',
      skills: ['Python', 'FastAPI', 'Django', 'React', 'Tailwind', 'AI Integration'],
      highlights: [
        'FastAPI & Django REST framework',
        'React frontend with modern state mgmt',
        'Integrating LangChain & OpenAI APIs',
        'CI/CD deployment to Vercel & AWS'
      ]
    },
    {
      id: 'salesforce-ai-dev',
      category: 'Full Stack',
      title: 'Salesforce Developer & AI Specialist',
      subtitle: 'Apex, LWC, Einstein AI & Salesforce Cloud',
      icon: '☁️',
      tag: 'ENTERPRISE',
      badgeColor: 'bg-indigo-50 text-indigo-700 border-indigo-200',
      duration: '5 Months',
      students: '650+',
      rating: '4.8',
      skills: ['Apex', 'LWC', 'Einstein AI', 'Sales Cloud', 'Flows', 'SOQL'],
      highlights: [
        'Lightning Web Components & Apex code',
        'Salesforce Einstein AI integration',
        'Enterprise integration patterns & REST APIs',
        'Salesforce Admin & Dev certification prep'
      ]
    },
    {
      id: 'embedded-edge-ai',
      category: 'Software Engineering',
      title: 'Embedded Systems & Edge AI',
      subtitle: 'C/C++, Microcontrollers & Edge Machine Learning',
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
      ]
    },
    {
      id: 'qa-automation-ai',
      category: 'Software Engineering',
      title: 'QA Automation + AI Testing Bootcamp',
      subtitle: 'Next-Gen Test Automation & AI Testing',
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
      ]
    }
  ];

  const services = [
    {
      title: 'Custom Software & AI Application Development',
      desc: 'End-to-end development of enterprise applications integrated with cutting-edge AI, GenAI models, and microservices architecture.',
      skills: ['React / Next.js', 'Python / Node.js', 'LLMs & GenAI', 'Cloud Architecture']
    },
    {
      title: 'Staff Augmentation & Dedicated Tech Teams',
      desc: 'Rapidly scale your engineering organization with pre-vetted top 5% software engineers, data scientists, and DevOps specialists in 48 hours.',
      skills: ['48-Hr Onboarding', 'Vetted Top 5% Talent', 'Flexible Contract / Full Time', 'Dedicated PM']
    },
    {
      title: 'Cloud Infrastructure, DevOps & Cybersecurity',
      desc: 'Modernize legacy infrastructure with containerized AWS/Azure/GCP clouds, automated CI/CD pipelines, and zero-trust security.',
      skills: ['AWS / Azure / GCP', 'Kubernetes / Docker', 'Terraform', 'CI/CD Pipelines']
    },
    {
      title: 'Data Engineering & MLOps Infrastructure',
      desc: 'Build robust data lakes, real-time streaming ETL pipelines, and production-grade MLOps deployment pipelines for enterprise data.',
      skills: ['Apache Spark / Airflow', 'Snowflake / BigQuery', 'MLOps & Model Monitoring', 'Real-Time ETL']
    }
  ];

  const filteredBootcamps = activeTab === 'All' 
    ? bootcamps 
    : bootcamps.filter(b => {
        if (activeTab === 'Data & AI') return b.category === 'Data & AI' || b.category === 'AI';
        return b.category === activeTab;
      });

  return (
    <section id="services" className="py-20 md:py-28 bg-[#fafbfd] border-t border-slate-200/80">
      <div className="container-main">
        
        {/* Section Header */}
        <div className="text-center mb-12 max-w-3xl mx-auto animate-on-scroll">
          <p className="text-xs font-bold uppercase tracking-widest text-indigo-600 mb-2">
            TECHNICAL BOOTCAMPS & SPECIALISATIONS
          </p>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-slate-900 tracking-tight">
            Job-Focused <span className="text-indigo-600">Core Specialisations</span> & IT Solutions
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
            US-market-ready AI-integrated bootcamps and end-to-end enterprise IT staffing services designed for career transformations and tech acceleration.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {['All', 'Full Stack', 'Data & AI', 'AI', 'Cloud & DevOps', 'Cybersecurity', 'Software Engineering'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-full text-xs font-extrabold transition border cursor-pointer ${
                  activeTab === tab 
                    ? 'bg-indigo-600 text-white border-indigo-600 shadow-md' 
                    : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50 hover:border-indigo-300'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Bootcamps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBootcamps.map((item) => (
            <div key={item.id} className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-xs hover-card-warm flex flex-col justify-between animate-on-scroll">
              <div className="space-y-4">
                
                {/* Top Badge & Icon Row */}
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-2xl shadow-2xs">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-display font-extrabold text-lg text-slate-900 leading-tight">
                        {item.title}
                      </h3>
                      <p className="text-xs text-slate-500 font-medium mt-0.5">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>
                  <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full border whitespace-nowrap ${item.badgeColor}`}>
                    {item.tag}
                  </span>
                </div>

                {/* Duration & Stats */}
                <div className="flex items-center gap-4 text-xs font-semibold text-slate-500 pt-1 pb-2 border-b border-slate-100">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-indigo-600" /> {item.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <Users className="w-3.5 h-3.5 text-indigo-600" /> {item.students}
                  </span>
                  <span className="flex items-center gap-1 text-amber-500 font-bold">
                    <Star className="w-3.5 h-3.5 fill-amber-400" /> {item.rating}
                  </span>
                </div>

                {/* Skills Chips */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {item.skills.map((sk, i) => (
                    <span key={i} className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-slate-100 text-slate-700">
                      {sk}
                    </span>
                  ))}
                </div>

                {/* Highlights Checklist */}
                <div className="space-y-2 pt-2">
                  {item.highlights.map((hl, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs font-medium text-slate-600">
                      <Zap className="w-3.5 h-3.5 text-indigo-600 flex-shrink-0" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>

              </div>

              {/* Bottom CTA */}
              <div className="pt-6 mt-4 border-t border-slate-100">
                <button
                  onClick={() => onOpenApply(item.title)}
                  className="w-full py-3 rounded-2xl bg-indigo-50 hover:bg-indigo-600 text-indigo-700 hover:text-white font-bold text-sm flex items-center justify-center gap-2 transition border border-indigo-200 cursor-pointer"
                >
                  Apply For Program <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Enterprise IT Services Section */}
        <div id="employers" className="mt-24 pt-16 border-t border-slate-200">
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <p className="text-xs font-bold uppercase tracking-widest text-indigo-600 mb-2">
              ENTERPRISE SERVICES & SOLUTIONS
            </p>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900">
              IT Services & Dedicated Talent Delivery
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Empowering companies to build world-class products with top-vetted technical talent and AI integration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((srv, idx) => (
              <div key={idx} className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-xs hover-card-warm flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <h3 className="font-display font-extrabold text-xl text-slate-900">
                    {srv.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {srv.desc}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {srv.skills.map((sk, i) => (
                      <span key={i} className="px-3 py-1 rounded-full text-xs font-bold bg-indigo-50 text-indigo-700 border border-indigo-100">
                        ✓ {sk}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-6">
                  <button 
                    onClick={() => onOpenApply(`IT Service: ${srv.title}`)}
                    className="w-full py-3.5 rounded-full btn-blue text-sm font-bold flex items-center justify-center gap-2 border-0 cursor-pointer"
                  >
                    Request Enterprise Proposal <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

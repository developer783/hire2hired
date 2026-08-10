import React, { useState } from 'react';
import { Sparkles, Sliders, CheckCircle2, RefreshCw, Zap, Award, ArrowRight, Check } from 'lucide-react';

export default function AIMatchingPlayground({ onOpenApply }) {
  const [candidateExp, setCandidateExp] = useState(6);
  const [candidateSalary, setCandidateSalary] = useState(165);
  const [selectedTech, setSelectedTech] = useState('Java + AI Architecture');
  const [isGenerating, setIsGenerating] = useState(false);
  const [matchResult, setMatchResult] = useState({
    compatibility: 98,
    skillMatch: 96,
    salaryMatch: 94,
    cultureFit: 97,
    status: 'Highly Recommended'
  });

  const specialisationsData = {
    'Java + AI Architecture': {
      skills: ['Java 21', 'Spring Boot', 'Microservices', 'OpenAI APIs', 'REST', 'Docker'],
      roles: ['Senior Enterprise Java Lead', 'Java AI Microservices Architect']
    },
    'Cloud & DevOps Engineering': {
      skills: ['AWS', 'Azure', 'Kubernetes', 'Terraform', 'CI/CD Pipelines', 'Docker'],
      roles: ['Lead Cloud DevOps Engineer', 'Site Reliability & AI Infra Lead']
    },
    'GenAI & Agentic Systems': {
      skills: ['LangChain', 'LlamaIndex', 'Autonomous Agents', 'Vector DBs', 'LoRA', 'RAG'],
      roles: ['Principal GenAI Architect', 'Autonomous AI Systems Lead']
    },
    'Cybersecurity & AI Threat Intelligence': {
      skills: ['SIEM', 'Ethical Hacking', 'SOC', 'Zero-Trust Cloud', 'AI Threat AI', 'Pentesting'],
      roles: ['Senior Cloud Security Architect', 'AI Threat Intelligence Engineer']
    },
    'Data Engineering & MLOps': {
      skills: ['Apache Spark', 'Airflow', 'Snowflake', 'AWS Data Lakes', 'MLOps', 'SQL'],
      roles: ['Staff Data Engineer', 'MLOps Infrastructure Specialist']
    },
    'React & Next.js Full Stack': {
      skills: ['React 18', 'Next.js 14', 'TypeScript', 'TailwindCSS', 'Vercel AI SDK', 'GraphQL'],
      roles: ['Lead Full Stack Engineer', 'Next.js Frontend Architect']
    },
    'AI Developer & LLMs': {
      skills: ['Python', 'LLM Fine-Tuning', 'Pinecone', 'RAG Pipelines', 'Prompt Eng.', 'FastAPI'],
      roles: ['Senior AI Applications Developer', 'GenAI Solutions Engineer']
    },
    'Data Science & Deep Learning': {
      skills: ['Python', 'Pandas', 'TensorFlow', 'PyTorch', 'Predictive AI', 'NLP'],
      roles: ['Senior Data Scientist', 'Deep Learning Research Engineer']
    },
    'Python Full Stack + AI': {
      skills: ['Python', 'FastAPI', 'Django', 'React', 'LangChain', 'PostgreSQL'],
      roles: ['Senior Python AI Developer', 'Full Stack AI Product Lead']
    },
    'Salesforce Developer & AI Specialist': {
      skills: ['Apex', 'LWC', 'Einstein AI', 'Sales Cloud', 'SOQL', 'REST Integrations'],
      roles: ['Senior Salesforce AI Developer', 'Enterprise CRM Architect']
    },
    'Embedded Systems & Edge AI': {
      skills: ['C/C++', 'FreeRTOS', 'Microcontrollers', 'TinyML', 'Edge Impulse', 'IoT Protocols'],
      roles: ['Embedded Systems Architect', 'Edge AI Firmware Specialist']
    },
    'QA Automation + AI Testing': {
      skills: ['Selenium', 'Playwright', 'Cypress', 'Java/Python', 'API Automation', 'AI Test Gen'],
      roles: ['Lead QA Automation Engineer', 'SDET & AI Testing Lead']
    }
  };

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      setMatchResult({
        compatibility: Math.min(99, 93 + Math.floor(Math.random() * 6)),
        skillMatch: Math.min(99, 91 + Math.floor(Math.random() * 7)),
        salaryMatch: Math.min(99, 92 + Math.floor(Math.random() * 6)),
        cultureFit: Math.min(99, 94 + Math.floor(Math.random() * 5)),
        status: 'Highly Recommended'
      });
    }, 1200);
  };

  const currentSpec = specialisationsData[selectedTech] || specialisationsData['Java + AI Architecture'];

  return (
    <section className="py-20 bg-white border-b border-slate-200/80">
      <div className="container-main">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-extrabold mb-4">
            <Sliders className="w-3.5 h-3.5" /> INTERACTIVE PLAYGROUND
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-slate-900 tracking-tight">
            AI Matching <span className="gradient-text-animated">Playground</span>
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            Simulate real candidate qualifications across all 12 core specialisations against enterprise client requirements and test Hire2Hired's predictive matching algorithms live.
          </p>
        </div>

        {/* 3-Column Interactive Demo Box */}
        <div className="grid lg:grid-cols-12 gap-8 items-center bg-slate-50 rounded-[36px] p-6 sm:p-10 border border-slate-200 shadow-lg">
          
          {/* Left Panel: Candidate Settings (4 Columns) */}
          <div className="lg:col-span-4 bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-5">
            <h3 className="font-display font-extrabold text-lg text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-3">
              👨‍💻 Candidate Profile
            </h3>

            {/* Tech Stack Selection */}
            <div>
              <label className="text-xs font-bold text-slate-500 block mb-2">Core Specialisation (12 Tracks)</label>
              <select 
                value={selectedTech}
                onChange={(e) => {
                  setSelectedTech(e.target.value);
                  handleGenerate();
                }}
                className="w-full h-11 px-3 rounded-xl border border-slate-200 bg-slate-50 text-xs font-bold text-slate-800 outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100"
              >
                {Object.keys(specialisationsData).map((spec) => (
                  <option key={spec} value={spec}>{spec}</option>
                ))}
              </select>
            </div>

            {/* Dynamic Skills Chips */}
            <div>
              <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5">Parsed Key Skillset</label>
              <div className="flex flex-wrap gap-1.5">
                {currentSpec.skills.map((sk) => (
                  <span key={sk} className="px-2.5 py-1 rounded-lg text-[11px] font-semibold bg-indigo-50 text-indigo-700 border border-indigo-100">
                    ✓ {sk}
                  </span>
                ))}
              </div>
            </div>

            {/* Experience Slider */}
            <div>
              <div className="flex justify-between text-xs font-bold mb-1">
                <span className="text-slate-500">Years of Experience</span>
                <span className="text-indigo-600">{candidateExp} Years</span>
              </div>
              <input 
                type="range"
                min="1"
                max="15"
                value={candidateExp}
                onChange={(e) => setCandidateExp(Number(e.target.value))}
                className="w-full accent-indigo-600 cursor-pointer"
              />
            </div>

            {/* Preferred Salary Slider */}
            <div>
              <div className="flex justify-between text-xs font-bold mb-1">
                <span className="text-slate-500">Target Compensation</span>
                <span className="text-indigo-600">${candidateSalary},000 / yr</span>
              </div>
              <input 
                type="range"
                min="90"
                max="250"
                step="5"
                value={candidateSalary}
                onChange={(e) => setCandidateSalary(Number(e.target.value))}
                className="w-full accent-indigo-600 cursor-pointer"
              />
            </div>

            {/* Extra Info Pills */}
            <div className="flex flex-wrap gap-2 pt-1 border-t border-slate-100">
              <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700">Immediate Availability</span>
              <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-indigo-50 text-indigo-700">Remote / US Hybrid</span>
            </div>
          </div>

          {/* Center Panel: Glowing AI Engine & Trigger Button (4 Columns) */}
          <div className="lg:col-span-4 text-center space-y-6 py-4">
            
            {/* Glowing Core Visual */}
            <div className="w-28 h-28 rounded-full bg-gradient-to-tr from-indigo-600 via-purple-600 to-cyan-500 text-white flex flex-col items-center justify-center mx-auto shadow-2xl shadow-indigo-500/40 relative group">
              <Sparkles className={`w-10 h-10 ${isGenerating ? 'animate-spin' : 'animate-pulse'}`} />
              <span className="text-[9px] font-extrabold uppercase tracking-widest mt-1">MATCH ENGINE</span>
            </div>

            <button 
              onClick={handleGenerate}
              disabled={isGenerating}
              className="w-full py-4 rounded-full btn-blue text-sm font-extrabold flex items-center justify-center gap-2 border-0 cursor-pointer shadow-lg hover:scale-105 transition-transform"
            >
              {isGenerating ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" /> Calculating Synergy...
                </>
              ) : (
                <>
                  <Zap className="w-4 h-4" /> Calculate Match Score
                </>
              )}
            </button>

            {/* Live Result Summary Pill */}
            <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-2xs space-y-2">
              <div className="flex items-center justify-between text-xs font-extrabold">
                <span className="text-slate-500">Predicted Compatibility</span>
                <span className="text-emerald-600 font-display text-xl">{matchResult.compatibility}%</span>
              </div>
              <span className="inline-block px-3 py-1 rounded-full text-[10px] font-extrabold bg-emerald-50 text-emerald-700 border border-emerald-200">
                {matchResult.status}
              </span>
            </div>

          </div>

          {/* Right Panel: Match Scores Breakdown (4 Columns) */}
          <div className="lg:col-span-4 bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4">
            <h3 className="font-display font-extrabold text-lg text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-3">
              🏢 Employer Match Breakdown
            </h3>

            {/* Dynamic Target Roles */}
            <div className="space-y-1.5">
              <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Top Enterprise Matches</p>
              {currentSpec.roles.map((r, i) => (
                <div key={i} className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-xs font-bold text-slate-800 flex items-center justify-between">
                  <span>{r}</span>
                  <span className="text-emerald-600 font-extrabold">98% Match</span>
                </div>
              ))}
            </div>

            <div className="space-y-3 pt-2">
              <div>
                <div className="flex justify-between text-xs font-bold mb-1">
                  <span className="text-slate-600">Technical Alignment</span>
                  <span className="text-indigo-600">{matchResult.skillMatch}%</span>
                </div>
                <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                  <div className="bg-indigo-600 h-full transition-all duration-700" style={{ width: `${matchResult.skillMatch}%` }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-bold mb-1">
                  <span className="text-slate-600">Compensation Fit</span>
                  <span className="text-indigo-600">{matchResult.salaryMatch}%</span>
                </div>
                <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                  <div className="bg-purple-600 h-full transition-all duration-700" style={{ width: `${matchResult.salaryMatch}%` }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-bold mb-1">
                  <span className="text-slate-600">Cultural & Soft Skills Synergy</span>
                  <span className="text-indigo-600">{matchResult.cultureFit}%</span>
                </div>
                <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                  <div className="bg-emerald-500 h-full transition-all duration-700" style={{ width: `${matchResult.cultureFit}%` }}></div>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100">
              <button 
                onClick={() => onOpenApply(`AI Match Application: ${selectedTech}`)}
                className="w-full py-3 rounded-2xl bg-indigo-50 hover:bg-indigo-600 text-indigo-700 hover:text-white font-bold text-xs flex items-center justify-center gap-2 transition border border-indigo-200 cursor-pointer"
              >
                Apply With This Match Profile <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

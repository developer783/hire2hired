import React, { useState, useEffect } from 'react';
import { Upload, FileText, CheckCircle2, Sparkles, Cpu, Award, Zap, RefreshCw } from 'lucide-react';

export default function AIResumeAnalyzer({ onOpenApply }) {
  const [stage, setStage] = useState(0); // 0: Uploaded, 1: Reading, 2: Extracting, 3: Scoring, 4: Complete
  const [isDragOver, setIsDragOver] = useState(false);

  // Auto-cycle live analysis simulation
  useEffect(() => {
    const timer = setInterval(() => {
      setStage((prev) => (prev + 1) % 5);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const skills = [
    { name: 'React', level: 'Expert', score: 98 },
    { name: 'Node.js', level: 'Advanced', score: 94 },
    { name: 'AWS Cloud', level: 'Advanced', score: 92 },
    { name: 'Python & AI', level: 'Expert', score: 96 },
    { name: 'Leadership', level: 'Senior', score: 90 },
    { name: 'Communication', level: 'High Synergy', score: 95 },
  ];

  const roles = [
    { title: 'Senior Java & AI Developer', match: '98%', salary: '$165,000 / yr' },
    { title: 'AI Applications Engineer', match: '96%', salary: '$170,000 / yr' },
    { title: 'Cloud Solutions Architect', match: '94%', salary: '$175,000 / yr' },
  ];

  return (
    <section className="py-20 bg-white border-b border-slate-200/80 relative overflow-hidden">
      <div className="container-main">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-extrabold mb-4">
            <Cpu className="w-3.5 h-3.5" /> INTERACTIVE PRODUCT DEMO
          </div>
          <h2 className="text-4xl sm:text-5xl font-display font-extrabold text-slate-900 tracking-tight">
            Interactive <span className="gradient-text-animated">AI Resume Analyzer</span>
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            See how Hire2Hired's AI engine parses resumes in seconds, extracts verified technical skills, and matches candidates to top-tier enterprise roles.
          </p>
        </div>

        {/* 2-Column Product Showcase */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* LEFT SIDE: Upload Resume Card (5 Columns) */}
          <div className="lg:col-span-5 bg-slate-50 rounded-[32px] p-8 border border-slate-200/90 shadow-sm space-y-6 animate-on-scroll">
            <div className="flex items-center justify-between">
              <h3 className="font-display font-extrabold text-xl text-slate-900 flex items-center gap-2.5">
                <FileText className="w-5 h-5 text-indigo-600" />
                Upload Resume
              </h3>
              <span className="text-xs font-bold text-slate-400">Step 1 of 2</span>
            </div>

            {/* Drag & Drop Box */}
            <div 
              onDragOver={(e) => { e.preventDefault(); setIsDragOver(true); }}
              onDragLeave={() => setIsDragOver(false)}
              onDrop={(e) => { e.preventDefault(); setIsDragOver(false); setStage(1); }}
              className={`border-2 border-dashed rounded-3xl p-8 text-center transition-all cursor-pointer ${
                isDragOver ? 'border-indigo-600 bg-indigo-50/50' : 'border-slate-300 bg-white hover:border-indigo-400'
              }`}
            >
              <div className="w-14 h-14 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center mx-auto mb-4 text-indigo-600">
                <Upload className="w-7 h-7" />
              </div>
              <p className="text-sm font-extrabold text-slate-800">
                Drag & Drop your resume here
              </p>
              <p className="text-xs text-slate-500 mt-1">
                or browse files from your desktop
              </p>
              <div className="flex items-center justify-center gap-2 mt-4">
                <span className="px-2.5 py-1 rounded-md text-[10px] font-bold bg-slate-100 text-slate-600">PDF</span>
                <span className="px-2.5 py-1 rounded-md text-[10px] font-bold bg-slate-100 text-slate-600">DOCX</span>
                <span className="px-2.5 py-1 rounded-md text-[10px] font-bold bg-slate-100 text-slate-600">TXT</span>
              </div>
            </div>

            {/* Simulated Active Upload Card */}
            <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-2xs flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold">
                  📄
                </div>
                <div>
                  <p className="text-xs font-extrabold text-slate-900">Alex_Morgan_Resume.pdf</p>
                  <p className="text-[10px] font-semibold text-slate-500">2.4 MB • Uploaded Just Now</p>
                </div>
              </div>
              <CheckCircle2 className="w-5 h-5 text-emerald-500" />
            </div>

            <button 
              onClick={() => onOpenApply('AI Resume Analysis')}
              className="w-full py-4 rounded-full btn-blue text-sm font-extrabold flex items-center justify-center gap-2 border-0 cursor-pointer shadow-md"
            >
              <Sparkles className="w-4 h-4" />
              Analyze Resume Now
            </button>
          </div>

          {/* RIGHT SIDE: Live AI Analysis Dashboard (7 Columns) */}
          <div className="lg:col-span-7 bg-slate-900 text-white rounded-[36px] p-8 border border-slate-800 shadow-2xl space-y-6 relative overflow-hidden animate-on-scroll">
            
            {/* Live Status Bar */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <div className="flex items-center gap-3">
                <RefreshCw className="w-4 h-4 text-indigo-400 animate-spin" />
                <span className="text-xs font-extrabold uppercase tracking-wider text-indigo-400">
                  {stage === 0 && '● Live Demo: Resume Uploaded'}
                  {stage === 1 && '● Reading Document Streams...'}
                  {stage === 2 && '● Extracting Skill Vectors...'}
                  {stage === 3 && '● Calculating Compatibility Scores...'}
                  {stage === 4 && '● AI Analysis Complete!'}
                </span>
              </div>
              <span className="text-xs font-bold text-slate-400">AI Model v4.2</span>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
              <div 
                className="bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 h-full transition-all duration-500 ease-out"
                style={{ width: `${(stage + 1) * 20}%` }}
              ></div>
            </div>

            {/* 2-Column Internal Breakdown */}
            <div className="grid sm:grid-cols-2 gap-6 pt-2">
              
              {/* Left Column: Skill Extraction */}
              <div className="space-y-3">
                <p className="text-xs font-extrabold text-slate-400 uppercase tracking-wider">
                  Extracted Skill Set ({skills.length})
                </p>
                <div className="space-y-2">
                  {skills.map((sk, idx) => (
                    <div 
                      key={idx}
                      className={`flex items-center justify-between p-2.5 rounded-xl border transition-all ${
                        stage >= 2 ? 'bg-white/10 border-white/20 opacity-100 scale-100' : 'bg-white/5 border-white/5 opacity-40 scale-95'
                      }`}
                    >
                      <span className="text-xs font-bold flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                        {sk.name}
                      </span>
                      <span className="text-[10px] font-bold text-indigo-300 px-2 py-0.5 rounded-full bg-indigo-500/20">
                        {sk.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Technical Scores & Match Suggestions */}
              <div className="space-y-6">
                
                {/* Score Meters */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center">
                    <p className="text-[10px] font-extrabold text-slate-400 uppercase">Technical Score</p>
                    <p className="text-3xl font-display font-extrabold text-emerald-400 mt-1">
                      {stage >= 3 ? '95%' : '--'}
                    </p>
                  </div>

                  <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center">
                    <p className="text-[10px] font-extrabold text-slate-400 uppercase">Culture Fit</p>
                    <p className="text-3xl font-display font-extrabold text-cyan-400 mt-1">
                      {stage >= 3 ? '92%' : '--'}
                    </p>
                  </div>
                </div>

                {/* Recommended Roles */}
                <div className="space-y-2">
                  <p className="text-xs font-extrabold text-slate-400 uppercase tracking-wider">
                    AI Recommended Roles
                  </p>
                  <div className="space-y-2">
                    {roles.map((r, idx) => (
                      <div 
                        key={idx}
                        className={`p-3 rounded-2xl border transition-all ${
                          stage >= 4 ? 'bg-indigo-600/20 border-indigo-500/40 opacity-100' : 'bg-white/5 border-white/5 opacity-30'
                        }`}
                      >
                        <div className="flex items-center justify-between text-xs font-extrabold">
                          <span>{r.title}</span>
                          <span className="text-emerald-400">{r.match}</span>
                        </div>
                        <p className="text-[10px] text-slate-300 mt-1">{r.salary}</p>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

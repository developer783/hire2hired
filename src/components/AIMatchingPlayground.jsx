import React, { useState } from 'react';
import { Sparkles, Sliders, CheckCircle2, RefreshCw, Zap, Award, ArrowRight } from 'lucide-react';

export default function AIMatchingPlayground({ onOpenApply }) {
  const [candidateExp, setCandidateExp] = useState(6);
  const [candidateSalary, setCandidateSalary] = useState(165);
  const [selectedTech, setSelectedTech] = useState('Java & AI');
  const [isGenerating, setIsGenerating] = useState(false);
  const [matchResult, setMatchResult] = useState({
    compatibility: 98,
    skillMatch: 96,
    salaryMatch: 94,
    cultureFit: 97,
    status: 'Highly Recommended'
  });

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      setMatchResult({
        compatibility: Math.min(99, 92 + Math.floor(Math.random() * 7)),
        skillMatch: Math.min(99, 90 + Math.floor(Math.random() * 8)),
        salaryMatch: Math.min(99, 91 + Math.floor(Math.random() * 7)),
        cultureFit: Math.min(99, 93 + Math.floor(Math.random() * 6)),
        status: 'Highly Recommended'
      });
    }, 1200);
  };

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
            Simulate real candidate qualifications against employer requirements and test Hire2Hired's predictive matching algorithms live.
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
              <label className="text-xs font-bold text-slate-500 block mb-2">Core Specialization</label>
              <select 
                value={selectedTech}
                onChange={(e) => setSelectedTech(e.target.value)}
                className="w-full h-11 px-3 rounded-xl border border-slate-200 bg-slate-50 text-xs font-bold text-slate-800 outline-none focus:border-indigo-600"
              >
                <option value="Java & AI">Java + AI Architecture</option>
                <option value="Data & MLOps">Data Engineering & MLOps</option>
                <option value="GenAI & LLMs">GenAI & Autonomous Agents</option>
                <option value="Full Stack React">Full Stack Python & React</option>
              </select>
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
                <span className="text-slate-500">Target Salary</span>
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
            <div className="flex flex-wrap gap-2 pt-1">
              <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-indigo-50 text-indigo-700">Immediate Availability</span>
              <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-purple-50 text-purple-700">100% Remote / Hybrid</span>
            </div>
          </div>

          {/* Center Panel: Glowing AI Engine & Trigger Button (4 Columns) */}
          <div className="lg:col-span-4 text-center space-y-6 py-4">
            
            {/* Glowing Core Visual */}
            <div className="w-28 h-28 rounded-full bg-gradient-to-tr from-indigo-600 via-purple-600 to-cyan-500 text-white flex flex-col items-center justify-center mx-auto shadow-2xl shadow-indigo-500/40 relative group">
              <Sparkles className={`w-10 h-10 ${isGenerating ? 'animate-spin' : 'animate-pulse'}`} />
              <span className="text-[9px] font-extrabold uppercase tracking-widest mt-1">AI ENGINE</span>
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
                  <Zap className="w-4 h-4" /> Generate AI Match
                </>
              )}
            </button>

            {/* Live Result Summary Pill */}
            <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-2xs space-y-2">
              <div className="flex items-center justify-between text-xs font-extrabold">
                <span className="text-slate-500">Overall Match</span>
                <span className="text-emerald-600 font-display text-lg">{matchResult.compatibility}%</span>
              </div>
              <span className="inline-block px-3 py-1 rounded-full text-[10px] font-extrabold bg-emerald-50 text-emerald-700 border border-emerald-200">
                {matchResult.status}
              </span>
            </div>

          </div>

          {/* Right Panel: Match Scores Breakdown (4 Columns) */}
          <div className="lg:col-span-4 bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4">
            <h3 className="font-display font-extrabold text-lg text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-3">
              🏢 Employer Match Results
            </h3>

            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-xs font-bold mb-1">
                  <span className="text-slate-600">Technical Skill Alignment</span>
                  <span className="text-indigo-600">{matchResult.skillMatch}%</span>
                </div>
                <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                  <div className="bg-indigo-600 h-full transition-all duration-700" style={{ width: `${matchResult.skillMatch}%` }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-bold mb-1">
                  <span className="text-slate-600">Salary & Budget Fit</span>
                  <span className="text-indigo-600">{matchResult.salaryMatch}%</span>
                </div>
                <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                  <div className="bg-purple-600 h-full transition-all duration-700" style={{ width: `${matchResult.salaryMatch}%` }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-bold mb-1">
                  <span className="text-slate-600">Cultural & Team Synergy</span>
                  <span className="text-indigo-600">{matchResult.cultureFit}%</span>
                </div>
                <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                  <div className="bg-emerald-500 h-full transition-all duration-700" style={{ width: `${matchResult.cultureFit}%` }}></div>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100">
              <button 
                onClick={() => onOpenApply(`AI Match: ${selectedTech}`)}
                className="w-full py-3 rounded-2xl bg-indigo-50 hover:bg-indigo-600 text-indigo-700 hover:text-white font-bold text-xs flex items-center justify-center gap-2 transition border border-indigo-200 cursor-pointer"
              >
                Apply With This Match <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

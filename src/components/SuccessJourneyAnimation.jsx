import React, { useState, useEffect } from 'react';
import { User, Award, CheckCircle2, TrendingUp, ArrowRight, Star } from 'lucide-react';

export default function SuccessJourneyAnimation() {
  const [activeStory, setActiveStory] = useState(0);

  const stories = [
    {
      name: 'Raoul Kamela',
      avatar: 'RK',
      before: 'Chemical Engineer ($75K/yr)',
      after: 'Sr. Software Engineer ($165K/yr)',
      increase: '+120% Salary Increase',
      quote: "Hire2Hired's AI resume optimization and 1-on-1 coaching matched me directly with Fortune 500 engineering managers within 3 days!",
      steps: ['Resume Uploaded', 'AI Resume Optimization', 'Tech Interview Prep', 'Client Interview', 'Offer Received ($165K)', 'Placed at TechCorp']
    },
    {
      name: 'Sigfried Batoula',
      avatar: 'SB',
      before: 'M.Sc. Graduate ($60K/yr)',
      after: 'AI Application Developer ($155K/yr)',
      increase: '+158% Salary Increase',
      quote: "Low CGPA was holding me back. Hire2Hired's verified project assessment proved my actual coding skills and landed me a top US contract.",
      steps: ['Profile Submitted', 'AI Skill Verification', 'Mock Simulations', 'Direct Client Referral', 'Offer Accepted', 'Placed in 48 Hours']
    },
    {
      name: 'Kevin Sebastian',
      avatar: 'KS',
      before: 'Career Gap Year',
      after: 'Cloud Solutions Developer ($150K/yr)',
      increase: 'New Career Transformation',
      quote: "Transitioning from Mechanical Engineering to IT seemed impossible until Hire2Hired verified my AWS & Python skills.",
      steps: ['Resume Submitted', '1-on-1 Advisor Review', 'AI Matching Engine', 'Client Technical Assessment', 'Final Contract Signed', 'Career Launched']
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStory((prev) => (prev + 1) % stories.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [stories.length]);

  return (
    <section id="transformations" className="py-20 bg-slate-50 border-b border-slate-200/80">
      <div className="container-main">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
          <p className="text-xs font-bold uppercase tracking-widest text-indigo-600 mb-2">
            REAL CAREER TRANSFORMATIONS
          </p>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-slate-900 tracking-tight">
            Candidate <span className="text-indigo-600">Success Journey</span>
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            Real stories of consultants who supercharged their income and landed enterprise tech roles through Hire2Hired.
          </p>
        </div>

        {/* Story Carousel Showcase */}
        <div className="bg-white rounded-[36px] p-8 sm:p-12 border border-slate-200 shadow-xl max-w-4xl mx-auto space-y-8">
          
          {/* Top Profile Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-100 pb-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-indigo-600 to-purple-600 text-white font-extrabold text-xl flex items-center justify-center shadow-lg">
                {stories[activeStory].avatar}
              </div>
              <div>
                <h3 className="font-display font-extrabold text-2xl text-slate-900">
                  {stories[activeStory].name}
                </h3>
                <p className="text-xs font-bold text-slate-500 mt-0.5">
                  {stories[activeStory].before} → <span className="text-indigo-600">{stories[activeStory].after}</span>
                </p>
              </div>
            </div>

            <span className="px-4 py-2 rounded-full text-xs font-extrabold bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center gap-1.5">
              <TrendingUp className="w-4 h-4" /> {stories[activeStory].increase}
            </span>
          </div>

          {/* Testimonial Quote */}
          <blockquote className="text-base sm:text-lg text-slate-700 italic font-medium leading-relaxed">
            "{stories[activeStory].quote}"
          </blockquote>

          {/* Placement Journey Timeline Progress Bar */}
          <div className="space-y-3 pt-2">
            <p className="text-xs font-extrabold uppercase tracking-wider text-slate-400">Placement Step Timeline</p>
            <div className="grid grid-cols-2 sm:grid-cols-6 gap-2">
              {stories[activeStory].steps.map((st, idx) => (
                <div key={idx} className="bg-indigo-50 border border-indigo-100 rounded-xl p-3 text-center space-y-1">
                  <CheckCircle2 className="w-4 h-4 text-indigo-600 mx-auto" />
                  <p className="text-[10px] font-extrabold text-indigo-900 leading-tight">{st}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Switch Story Buttons */}
          <div className="flex justify-center gap-2 pt-4">
            {stories.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveStory(idx)}
                className={`w-3 h-3 rounded-full transition-all border-0 cursor-pointer ${
                  activeStory === idx ? 'w-8 bg-indigo-600' : 'bg-slate-200 hover:bg-slate-300'
                }`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

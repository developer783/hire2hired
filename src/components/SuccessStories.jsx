import React from 'react';
import { ArrowRight, Star } from 'lucide-react';

export default function SuccessStories() {
  const stories = [
    {
      initials: "RK",
      name: "Raoul Kamela",
      before: "Job Seeker / Consultant",
      after: "Lead Java Consultant @ Enterprise Client",
      quote: "Hire2Hired's AI matching paired me with an enterprise client contract within 3 days. My dedicated career advisor guided me through every step.",
      delay: "delay-100"
    },
    {
      initials: "SB",
      name: "Sigfried Batoula",
      before: "M.Sc Computer Science",
      after: "Full-Stack AI Consultant",
      quote: "Getting direct referrals to hiring decision-makers changed everything. In less than a week, I landed my target role with competitive pay!",
      delay: "delay-200"
    },
    {
      initials: "KS",
      name: "Kevin Sebstian",
      before: "Mid-level Developer",
      after: "Senior Cloud & AI Specialist",
      quote: "The personalized coaching and pre-vetted client matching made the consultant transition seamless. Hire2Hired truly lives up to its promise.",
      delay: "delay-300"
    }
  ];

  return (
    <section id="transformations" className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="container-main">
        
        {/* Title */}
        <div className="text-center mb-16 max-w-3xl mx-auto animate-on-scroll">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wider bg-rose-100 text-rose-700 mb-4">
            CONSULTANT SUCCESS STORIES
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-slate-900 tracking-tight">
            Consultants Who <span className="text-indigo-600">Succeeded</span> With Us
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-4">
            Read how professionals advanced their careers and secured top contracts through Hire2Hired.
          </p>
        </div>

        {/* Stories 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stories.map((story, idx) => (
            <div 
              key={idx} 
              className={`bg-slate-50/80 rounded-3xl border border-slate-200/90 p-8 shadow-xs hover-card-lift flex flex-col justify-between animate-on-scroll ${story.delay}`}
            >
              <div>
                {/* Profile Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-indigo-600 to-purple-600 text-white flex items-center justify-center font-extrabold text-base font-display shadow-md">
                    {story.initials}
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-slate-900 text-lg">{story.name}</h3>
                    <div className="flex text-amber-400 gap-1 mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Before -> After Transition Pill */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex-1 bg-white rounded-xl p-3 text-center border border-slate-200 shadow-2xs">
                    <p className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 mb-0.5">Before</p>
                    <p className="text-xs font-bold text-slate-700">{story.before}</p>
                  </div>
                  
                  <ArrowRight className="w-4 h-4 text-indigo-600 flex-shrink-0" />

                  <div className="flex-1 bg-indigo-50 border border-indigo-200 rounded-xl p-3 text-center shadow-2xs">
                    <p className="text-[10px] font-extrabold uppercase tracking-wider text-indigo-600 mb-0.5">After</p>
                    <p className="text-xs font-extrabold text-indigo-900">{story.after}</p>
                  </div>
                </div>

                {/* Testimonial Quote */}
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed italic">
                  "{story.quote}"
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

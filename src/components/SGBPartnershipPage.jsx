import React from 'react';
import { Code2, Users, MessageSquare, TrendingUp, Handshake, ArrowRight, Home, ChevronRight } from 'lucide-react';

export const sgbServices = [
  {
    num: '01',
    icon: Code2,
    title: 'Technical Training & Professional Education',
    desc: 'Practical, industry-relevant technical training focused on developing in-demand professional skills, including Java development, programming fundamentals, hands-on technical learning and industry-oriented project exposure.'
  },
  {
    num: '02',
    icon: Users,
    title: 'Professional Mentorship',
    desc: 'Personalized guidance to help individuals understand career paths, strengthen professional capabilities and navigate the evolving employment market through career guidance, professional development and technical learning support.'
  },
  {
    num: '03',
    icon: MessageSquare,
    title: 'Interview Preparation & Career Readiness',
    desc: 'Structured preparation for recruitment processes, including technical mock interviews, behavioral interview preparation, communication skills development, interview strategies and professional presentation.'
  },
  {
    num: '04',
    icon: TrendingUp,
    title: 'Career Development & Talent Marketing',
    desc: 'Support throughout the career development journey, including professional resume development, LinkedIn profile optimization, job readiness preparation, candidate profile development, career guidance and candidate marketing.'
  }
];

export default function SGBPartnershipPage({ onNavigate, onRequestCallback }) {
  return (
    <div className="bg-slate-50 pt-24 pb-20 border-b border-slate-200/80 min-h-[85vh]">
      <div className="container-main space-y-14">

        {/* Breadcrumbs */}
        <div className="max-w-6xl mx-auto flex items-center gap-2 text-xs font-bold text-slate-500">
          <a href="#home" onClick={(e) => { e.preventDefault(); onNavigate('home'); }} className="flex items-center gap-1 text-slate-600 hover:text-indigo-600 no-underline">
            <Home className="w-3.5 h-3.5" /> Home
          </a>
          <ChevronRight className="w-3 h-3 text-slate-400" />
          <a href="#our-story" onClick={(e) => { e.preventDefault(); onNavigate('our-story'); }} className="text-slate-600 hover:text-indigo-600 no-underline">
            About
          </a>
          <ChevronRight className="w-3 h-3 text-slate-400" />
          <span className="text-indigo-600 font-extrabold">SGB Partnership</span>
        </div>

        {/* Intro */}
        <div className="text-center max-w-3xl mx-auto space-y-5">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wider bg-indigo-50 text-indigo-700 border border-indigo-100">
            Workforce Development | Technical Training | Career Development
          </span>
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Building Careers. Developing Talent.<br className="hidden sm:block" />{' '}
            <span className="text-indigo-600">Connecting People with Opportunities.</span>
          </h1>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            At Hire2Hired, we believe successful careers are built through practical skills, professional mentorship and
            industry-driven learning. We partner with organizations to bridge the gap between academic education and
            employer expectations by delivering structured technical training, career development programs and
            professional readiness solutions.
          </p>
        </div>

        {/* SGB Partnership Banner */}
        <div className="max-w-6xl mx-auto rounded-3xl bg-[#14284b] text-white p-8 md:p-10 shadow-xl relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none"></div>
          <div className="relative flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-5">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center">
                <Handshake className="w-6 h-6 text-amber-300" />
              </div>
              <h2 className="font-display text-2xl md:text-3xl font-extrabold">SGB × Hire2Hired</h2>
            </div>
            <span className="self-start px-4 py-1.5 rounded-full text-[11px] font-extrabold uppercase tracking-wider bg-amber-400/15 text-amber-300 border border-amber-300/30">
              Official Training & Career Development Contractor
            </span>
          </div>
          <p className="relative text-slate-200 leading-relaxed max-w-4xl">
            Hire2Hired serves as SGB's Official Training & Career Development Contractor, delivering specialized
            workforce development programs designed to prepare individuals for today's evolving employment landscape.
            Through this partnership, we combine structured learning, professional mentorship and industry-oriented
            career preparation.
          </p>
        </div>

        {/* Four Core Service Areas */}
        <div className="max-w-6xl mx-auto space-y-6">
          <h2 className="font-display text-2xl md:text-3xl font-extrabold text-slate-900">Our Four Core Service Areas</h2>
          <div className="grid md:grid-cols-2 gap-5">
            {sgbServices.map(({ num, icon: Icon, title, desc }) => (
              <div
                key={num}
                className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all"
              >
                <div className="flex items-start gap-4">
                  <span className="font-display text-3xl font-extrabold text-amber-500 leading-none">{num}</span>
                  <div className="space-y-2">
                    <h3 className="flex items-center gap-2 font-bold text-lg text-slate-900">
                      <Icon className="w-5 h-5 text-indigo-600 flex-shrink-0" />
                      {title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Commitment */}
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[1fr_auto] gap-8 items-center bg-white rounded-3xl border border-slate-200 p-8 md:p-10">
          <div className="space-y-3">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold text-slate-900">Our Commitment</h2>
            <p className="text-slate-600 leading-relaxed">
              At Hire2Hired, our objective goes beyond delivering training. We focus on developing capable professionals
              who understand industry expectations, demonstrate practical skills and are prepared to contribute in
              real-world work environments. Through strategic partnerships, structured training and personalized career
              support, we aim to create meaningful pathways between education, professional development and employment.
            </p>
            <p className="text-sm font-extrabold uppercase tracking-wider text-[#14284b] pt-2">
              Training Talent. Building Careers. Creating Opportunities.
            </p>
          </div>
          {onRequestCallback && (
            <button
              onClick={onRequestCallback}
              className="py-3.5 px-6 rounded-full btn-blue text-sm font-extrabold flex items-center gap-2 border-0 cursor-pointer shadow-md hover:scale-105 transition-transform whitespace-nowrap justify-self-start"
            >
              Talk to Our Team
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

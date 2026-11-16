import React from 'react';
import { Handshake, ArrowRight } from 'lucide-react';
import { sgbServices } from './SGBPartnershipPage';

export default function SGBPartnershipTeaser({ onNavigate }) {
  const open = (e) => {
    e.preventDefault();
    onNavigate('sgb-partnership');
  };

  return (
    <section id="sgb-partnership-brief" className="py-16 md:py-20 bg-slate-50">
      <div className="container-main">
        <a
          href="#sgb-partnership"
          onClick={open}
          className="group block no-underline rounded-3xl bg-[#14284b] text-white p-8 md:p-10 shadow-xl relative overflow-hidden hover:shadow-2xl transition-shadow"
        >
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative grid lg:grid-cols-[1.1fr_1fr] gap-8 lg:gap-12 items-center">
            {/* Brief */}
            <div className="space-y-4">
              <span className="inline-block px-4 py-1.5 rounded-full text-[11px] font-extrabold uppercase tracking-wider bg-amber-400/15 text-amber-300 border border-amber-300/30">
                Official Training & Career Development Contractor
              </span>
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                  <Handshake className="w-6 h-6 text-amber-300" />
                </div>
                <h2 className="font-display text-2xl md:text-4xl font-extrabold">SGB × Hire2Hired</h2>
              </div>
              <p className="text-slate-200 leading-relaxed">
                Hire2Hired serves as SGB's Official Training & Career Development Contractor, delivering specialized
                workforce development programs that combine structured learning, professional mentorship and
                industry-oriented career preparation.
              </p>
              <span className="inline-flex items-center gap-2 py-3 px-6 rounded-full bg-white text-[#14284b] text-sm font-extrabold group-hover:gap-3 transition-all">
                Explore the Partnership
                <ArrowRight className="w-4 h-4" />
              </span>
            </div>

            {/* Service highlights */}
            <ul className="grid sm:grid-cols-2 gap-3 list-none p-0 m-0">
              {sgbServices.map(({ num, icon: Icon, title }) => (
                <li key={num} className="flex items-start gap-3 rounded-2xl bg-white/5 border border-white/10 p-4">
                  <span className="font-display text-xl font-extrabold text-amber-400 leading-none">{num}</span>
                  <span className="flex items-start gap-2 text-sm font-bold text-white leading-snug">
                    <Icon className="w-4 h-4 text-indigo-300 flex-shrink-0 mt-0.5" />
                    {title}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </a>
      </div>
    </section>
  );
}

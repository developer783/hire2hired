import React, { useState } from 'react';
import { Shield, Lock, Search, ChevronRight, Home, Printer, Mail, FileText } from 'lucide-react';

export default function PrivacyPolicyPage({ onNavigate, isFullPage = true }) {
  const [searchTerm, setSearchTerm] = useState('');

  const sections = [
    {
      id: "1",
      title: "1. INTRODUCTION",
      content: `Hire2Hired Inc. ("Hire2Hired," "Company," "we," "us," or "our") respects the privacy of individuals who interact with our company, website, candidate portal, client portal, recruitment services, staffing services, training programs, career services, and related platforms.

This Privacy Policy explains how Hire2Hired collects, uses, discloses, stores, protects, and otherwise processes personal information.

This Privacy Policy applies to information collected from or about:
• Job applicants;
• Candidates;
• Prospective employees;
• Employees;
• Training participants;
• Career-service customers;
• Clients;
• Employer representatives;
• Website visitors;
• Account holders;
• Business contacts; and
• Other individuals who interact with Hire2Hired.

Hire2Hired operates in the United States.
By using our website or services, you acknowledge that you have had an opportunity to review this Privacy Policy.`
    },
    {
      id: "2",
      title: "2. TYPES OF INFORMATION WE COLLECT",
      content: `The information we collect depends on how you interact with Hire2Hired. We seek to collect information that is reasonably necessary for legitimate business purposes.

2.1 Identification and Contact Information
We may collect: First and last name; Preferred name; Email address; Telephone number; Mailing address; City; State; ZIP code; Professional contact information; Account identifiers; and Other contact information provided by you.

2.2 Candidate and Professional Information
For recruitment and staffing purposes, we may collect: Resume/CV; Employment history; Job titles; Previous employers; Employment dates; Professional experience; Education; Degrees; Certifications; Technical skills; Professional skills; Programming languages; Tools and technologies; Professional profiles; Portfolio information; Job preferences; Preferred work location; Remote/hybrid/on-site preferences; Availability; Compensation expectations; Interview information; References; Recruitment status; Offer information; and Other information reasonably relevant to employment opportunities.`
    },
    {
      id: "3",
      title: "3. ACCOUNT INFORMATION",
      content: `Candidates and clients may create accounts through the Hire2Hired website or online portal. Account information may include: Name; Email address; Telephone number; Username; Authentication information; Password credentials; Profile information; Uploaded documents; Application information; Account activity; Login records; Communication records; and Other information submitted through the account. Users are responsible for maintaining the confidentiality of their account credentials.`
    },
    {
      id: "4",
      title: "4. INFORMATION RELATING TO JOB APPLICATIONS",
      content: `When you apply for or are considered for an employment opportunity, we may collect information such as: Job application; Resume; Cover letter; Employment history; Education; Skills; Certifications; Interview responses; Interview scheduling information; Recruiter notes; Hiring status; Employer feedback; Offer information; Availability; Compensation information; and Other information relevant to the recruitment process.`
    },
    {
      id: "5",
      title: "5. INFORMATION WE GENERALLY DO NOT RETAIN IN OUR ORDINARY CANDIDATE RECORDS",
      content: `Hire2Hired does not ordinarily collect or retain the following information in its general candidate database:
• Social Security numbers;
• Passport numbers or passport copies;
• Driver's license numbers or copies;
• Government identification numbers; or
• I-9 documentation.

Where such information is legally required for employment, employment eligibility verification, background screening, payroll, or another legitimate purpose, it may be collected or processed through an authorized employer, government process, or qualified third-party provider.`
    },
    {
      id: "6",
      title: "6. EMPLOYMENT ELIGIBILITY INFORMATION",
      content: `Depending on the employment relationship, federal or state law may require verification of employment eligibility. Where such verification is required, information may be handled through Hire2Hired, the applicable employer, an authorized government system, or an authorized third-party provider. Hire2Hired does not ordinarily retain I-9 documentation in its general candidate records.`
    },
    {
      id: "7",
      title: "7. BACKGROUND CHECKS",
      content: `Hire2Hired may use third-party background-screening providers for certain positions or employment arrangements. Depending on the position, screening may include lawful verification of employment history, education, professional credentials, criminal records, references, or other job-related information permitted by applicable law under FCRA procedures.`
    },
    {
      id: "8",
      title: "8. TRAINING AND CAREER-SERVICE INFORMATION",
      content: `If you participate in Hire2Hired training or career services, we may collect: Enrollment information; Course information; Attendance; Assessment results; Training progress; Career objectives; Resume information; Interview preparation information; Career-service records; Communications; Service-plan information; and Payment or transaction information.`
    },
    {
      id: "9",
      title: "9. CLIENT AND EMPLOYER INFORMATION",
      content: `If you interact with Hire2Hired as a client, employer, hiring manager, staffing partner, or business representative, we may collect: Name; Business email; Business telephone number; Company name; Job requirements; Hiring requirements; Business address; Account information; Communications; Contract information; Billing information; and Other business information provided to us.`
    },
    {
      id: "10",
      title: "10. PAYMENT INFORMATION",
      content: `Hire2Hired may collect payment information when customers purchase services. Depending on the payment method, this may include: Billing name; Billing address; Transaction amount; Transaction date; Payment status; Payment method; Invoice information; and Limited transaction information. Complete credit card details are handled directly by secure third-party processors.`
    },
    {
      id: "11",
      title: "11. COMMUNICATION INFORMATION",
      content: `We may collect information contained in communications with Hire2Hired, including emails, portal communications, support requests, recruitment notes, interview messages, and payment correspondence.`
    },
    {
      id: "12",
      title: "12. TECHNICAL INFORMATION",
      content: `When you access our website or online systems, we may automatically collect: IP address; Browser type; Device type; Operating system; Device identifiers; Pages visited; Website activity; Referring website; Approximate location derived from IP address; Session information; Security logs; Cookies; Pixels; Analytics information; and Similar technical information.`
    },
    {
      id: "13",
      title: "13. COOKIES AND SIMILAR TECHNOLOGIES",
      content: `Hire2Hired uses cookies and similar technologies for website functionality, account authentication, security, remembering preferences, analytics, traffic measurement, and performance monitoring. We may use services like Google Analytics and Meta Pixel.`
    },
    {
      id: "14",
      title: "14. HOW WE USE PERSONAL INFORMATION",
      content: `Hire2Hired may use personal information for:
• Recruitment (reviewing applications, matching candidates, scheduling interviews, onboarding);
• Staffing (managing assignments, worker communications, client staffing records);
• Training (processing enrollment, course delivery, assessments, progress tracking);
• Career Services (resume optimization, counseling, interview prep, candidate marketing);
• Business Operations (processing payments, account security, fraud prevention, audit, legal compliance).`
    },
    {
      id: "15",
      title: "15. LEGAL BASES AND BUSINESS PURPOSES",
      content: `Depending on applicable law, we process personal information to provide requested services, perform contracts, comply with legal obligations, prevent fraud, protect systems, and conduct legitimate business activities.`
    },
    {
      id: "16",
      title: "16. HOW WE SHARE PERSONAL INFORMATION",
      content: `We may share personal information with:
16.1 Prospective Employers and Clients (Resumes, skills, employment history, availability);
16.2 Staffing and Recruitment Partners (To facilitate placement opportunities);
16.3 Applicant Tracking and CRM Providers (ATS software managing candidate profiles);
16.4 Background-Screening Providers (Authorized third-party background checkers);
16.5 Payment Providers (Payment processors);
16.6 Technology Service Providers (Hosting, email, analytics, IT security).`
    },
    {
      id: "17",
      title: "17. LEGAL AND GOVERNMENT DISCLOSURES",
      content: `Hire2Hired may disclose personal information to comply with law, respond to subpoenas or court orders, protect legal rights, investigate fraud, or defend against legal claims.`
    },
    {
      id: "18",
      title: "18. BUSINESS TRANSFERS",
      content: `If Hire2Hired is involved in a merger, acquisition, financing, restructuring, or sale of assets, personal information may be transferred as part of that transaction.`
    },
    {
      id: "19",
      title: "19. WE DO NOT SELL CANDIDATE INFORMATION FOR MONEY",
      content: `Hire2Hired does not sell candidate resumes or personal information to unrelated third parties for monetary consideration.`
    },
    {
      id: "20",
      title: "20. TARGETED ADVERTISING AND ANALYTICS",
      content: `Hire2Hired may use analytics and marketing technologies (Google Analytics, Meta Pixel) to understand website traffic and campaign efficiency. Appropriate opt-out mechanisms are honored where required.`
    },
    {
      id: "21",
      title: "21. DATA SECURITY",
      content: `Hire2Hired maintains reasonable administrative, technical, and organizational safeguards including access controls, authentication, password protection, secure transmission, backups, and secure disposal.`
    },
    {
      id: "22",
      title: "22. DATA RETENTION",
      content: `Hire2Hired retains information for as long as reasonably necessary for recruitment, staffing, training, contractual obligations, accounting, and legal compliance. Secure disposal is conducted when information is no longer required.`
    },
    {
      id: "23",
      title: "23. PRIVACY RIGHTS",
      content: `Depending on your residence, you may have privacy rights including: Right to know/access; Right to correct; Right to delete; Right to data portability; Right to opt out; and Right to non-discrimination.`
    },
    {
      id: "24",
      title: "24. CALIFORNIA PRIVACY RIGHTS",
      content: `If California privacy law applies under the CCPA/CPRA, California residents have specific rights to access, correct, delete, opt-out of sharing, and limit sensitive personal information use.`
    },
    {
      id: "25",
      title: "25. CALIFORNIA JOB APPLICANTS AND EMPLOYEES",
      content: `Where applicable California law applies to job applicants and employees, Hire2Hired provides required notices and privacy rights.`
    },
    {
      id: "26",
      title: "26. PRIVACY REQUESTS",
      content: `Privacy requests may be submitted via email to legal@hire2hired.com with Subject "Privacy Request".`
    },
    {
      id: "27",
      title: "27. IDENTITY VERIFICATION",
      content: `Hire2Hired takes reasonable steps to verify identity before processing access, correction, or deletion requests.`
    },
    {
      id: "28",
      title: "28. PRIVACY REQUEST RESPONSE",
      content: `Where applicable law requires a response to a privacy request, Hire2Hired will respond within the legally required timeframe.`
    },
    {
      id: "29",
      title: "29. CHILDREN'S PRIVACY",
      content: `Hire2Hired's services are not directed toward children under 13. We do not knowingly collect information from children under 13.`
    },
    {
      id: "30",
      title: "30. THIRD-PARTY WEBSITES",
      content: `Our website may contain links to third-party employers, job boards, and training portals. Hire2Hired is not responsible for third-party privacy practices.`
    },
    {
      id: "31",
      title: "31. DATA BREACHES AND SECURITY INCIDENTS",
      content: `If a security incident occurs, Hire2Hired will investigate, contain, remediate, and provide legal notifications as required by applicable federal and state law.`
    },
    {
      id: "32",
      title: "32. DO NOT SEND SENSITIVE INFORMATION THROUGH ORDINARY EMAIL",
      content: `Users should not send Social Security numbers, complete credit card details, or passport numbers via unencrypted email.`
    },
    {
      id: "33",
      title: "33. DATA ACCURACY",
      content: `Users are responsible for ensuring that their resumes, employment history, skills, and account details remain accurate.`
    },
    {
      id: "34",
      title: "34. YOUR RESPONSIBILITIES",
      content: `Users must protect account credentials, avoid password sharing, and notify Hire2Hired immediately of any unauthorized account access.`
    },
    {
      id: "35",
      title: "35. CHANGES TO THIS PRIVACY POLICY",
      content: `Hire2Hired may update this Privacy Policy periodically. Revisions will be posted on this page with an updated "Last Updated" date.`
    },
    {
      id: "36",
      title: "36. CONTACT INFORMATION",
      content: `Hire2Hired Inc.\n312 W 2nd St A8345\nCasper, WY 82601\nUnited States\nWebsite: www.hire2hired.com\nPrivacy & Legal Department: legal@hire2hired.com`
    }
  ];

  const filteredSections = sections.filter(s => 
    s.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    s.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={`bg-[#fafbfd] ${isFullPage ? 'pt-24 pb-20' : 'py-20 md:py-28'} border-b border-slate-200/80 min-h-[85vh]`}>
      <div className="container-main space-y-12">
        
        {/* Full Page Breadcrumbs */}
        {isFullPage && (
          <div className="max-w-6xl mx-auto flex items-center gap-2 text-xs font-bold text-slate-500">
            <a href="#home" onClick={(e) => { e.preventDefault(); onNavigate('home'); }} className="flex items-center gap-1 text-slate-600 hover:text-indigo-600 no-underline">
              <Home className="w-3.5 h-3.5" /> Home
            </a>
            <ChevronRight className="w-3 h-3 text-slate-400" />
            <span className="text-slate-600">Legal</span>
            <ChevronRight className="w-3 h-3 text-slate-400" />
            <span className="text-indigo-600 font-extrabold">Privacy Policy</span>
          </div>
        )}

        {/* Hero Banner */}
        <div className="max-w-6xl mx-auto bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 rounded-3xl p-8 sm:p-12 text-white shadow-2xl overflow-hidden border border-slate-800 relative">
          <div className="space-y-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-extrabold uppercase tracking-wider">
              <Shield className="w-3.5 h-3.5 text-emerald-400" /> DATA PRIVACY & SECURITY
            </div>
            
            <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-white leading-tight">
              Hire2Hired Inc. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-sky-300 to-indigo-300">
                Official Privacy Policy
              </span>
            </h1>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-normal">
              <strong>HIRE2HIRED INC.</strong> • Effective & Last Updated: <strong>August 10, 2026</strong><br />
              Casper, WY, USA • Privacy Contact: <a href="mailto:legal@hire2hired.com" className="text-indigo-400 underline">legal@hire2hired.com</a>
            </p>

            {/* Quick Actions & Search */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <div className="relative flex-1 min-w-[260px]">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                <input 
                  type="text" 
                  placeholder="Search 36 privacy sections (e.g. candidate data, California rights)..." 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/10 text-white placeholder-slate-400 text-xs font-medium border border-white/15 focus:outline-none focus:border-indigo-400"
                />
              </div>

              <button 
                onClick={() => window.print()} 
                className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold border border-white/15 cursor-pointer transition flex items-center gap-2"
              >
                <Printer className="w-3.5 h-3.5" /> Print Policy
              </button>
            </div>
          </div>
        </div>

        {/* Main Privacy Policy Grid */}
        <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-8">
          
          {/* Left Table of Contents Sticky Sidebar (4 Cols) */}
          <div className="lg:col-span-4 hidden lg:block">
            <div className="bg-white rounded-3xl p-5 border border-slate-200 shadow-sm sticky top-28 space-y-3 max-h-[75vh] overflow-y-auto">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <span className="text-xs font-extrabold uppercase tracking-wider text-indigo-600 flex items-center gap-1.5">
                  <FileText className="w-4 h-4" /> Navigation Sections
                </span>
                <span className="text-[10px] font-bold bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full">
                  36 Sections
                </span>
              </div>

              <div className="space-y-1 text-xs font-semibold text-slate-700">
                {sections.map(s => (
                  <a 
                    key={s.id} 
                    href={`#privacy-section-${s.id}`} 
                    className="block py-1.5 px-2.5 rounded-xl hover:bg-slate-100 text-slate-700 hover:text-indigo-600 no-underline truncate transition"
                  >
                    {s.title}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Document Content (8 Cols) */}
          <div className="lg:col-span-8 space-y-6">
            {filteredSections.length === 0 ? (
              <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 shadow-sm space-y-3">
                <Search className="w-8 h-8 text-slate-400 mx-auto" />
                <h3 className="text-lg font-bold text-slate-900">No matching sections found</h3>
                <p className="text-xs text-slate-500 font-medium">Try searching with a different keyword like "cookies", "security", or "retention".</p>
                <button 
                  onClick={() => setSearchTerm('')} 
                  className="px-4 py-2 rounded-xl bg-indigo-600 text-white text-xs font-bold border-0 cursor-pointer"
                >
                  Reset Search
                </button>
              </div>
            ) : (
              filteredSections.map(s => (
                <div key={s.id} id={`privacy-section-${s.id}`} className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-3 scroll-mt-28">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                    <h2 className="text-base sm:text-lg font-display font-extrabold text-slate-900">
                      {s.title}
                    </h2>
                    <span className="text-[10px] font-bold text-slate-400">Section {s.id}</span>
                  </div>

                  <div className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium whitespace-pre-line space-y-2">
                    {s.content}
                  </div>
                </div>
              ))
            )}
          </div>

        </div>

        {/* Legal Contact Footer Banner */}
        <div className="max-w-6xl mx-auto bg-slate-900 rounded-3xl p-8 sm:p-10 text-white border border-slate-800 shadow-xl flex flex-wrap items-center justify-between gap-6">
          <div className="space-y-1">
            <h3 className="text-lg font-extrabold text-white">Privacy Rights & Requests</h3>
            <p className="text-xs text-slate-400 font-medium">Submit privacy inquiries or CCPA data request forms to our legal compliance department.</p>
          </div>

          <a 
            href="mailto:legal@hire2hired.com?subject=Privacy%20Request" 
            className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-extrabold border-0 cursor-pointer no-underline flex items-center gap-2 shadow"
          >
            <Mail className="w-4 h-4" /> legal@hire2hired.com
          </a>
        </div>

      </div>
    </div>
  );
}

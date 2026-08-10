import React, { useState } from 'react';
import { ShieldCheck, FileText, Search, ChevronRight, Home, ArrowUp, Printer, Download, Mail, CheckCircle2 } from 'lucide-react';

export default function TermsOfServicePage({ onNavigate, isFullPage = true }) {
  const [searchTerm, setSearchTerm] = useState('');

  const sections = [
    {
      id: "1",
      title: "1. INTRODUCTION",
      content: `Hire2Hired Inc. ("Hire2Hired," "Company," "we," "us," or "our") is a United States-based company providing recruitment, staffing, training, career development, job-search assistance, interview preparation, and related professional services.

These Terms of Service, Company Policies, and Contractual Terms ("Terms") establish the general terms governing the use of Hire2Hired's website, candidate portal, client portal, recruitment services, staffing services, training programs, career services, and related services.

These Terms may apply to:
• Job candidates;
• Job applicants;
• Training participants;
• Career-service customers;
• Individuals seeking employment;
• Individuals employed by Hire2Hired where applicable;
• Employers and clients;
• Staffing partners;
• Recruitment partners; and
• Authorized users of Hire2Hired systems.

By creating an account, submitting a resume, applying for a position, enrolling in a program, purchasing a service, accepting a qualifying employment opportunity, signing an Agreement, signing a Payment Note, or otherwise using Hire2Hired services, the applicable user agrees to comply with these Terms and any separate agreement applicable to the user's specific services.

Where a separate written agreement is executed between Hire2Hired and a candidate or client, that agreement controls over these general Terms in the event of a conflict.`
    },
    {
      id: "2",
      title: "2. HIRE2HIRED SERVICES",
      content: `Hire2Hired may provide one or more of the following services.

2.1 Recruitment Services
Recruitment services may include:
• Candidate sourcing;
• Resume review;
• Candidate screening;
• Technical screening;
• Candidate qualification;
• Job matching;
• Candidate marketing;
• Candidate submission;
• Employer communication;
• Interview coordination;
• Offer coordination;
• Onboarding coordination; and
• Other recruitment-related services.

Hire2Hired may introduce or present qualified candidates to employers, clients, staffing companies, recruitment partners, or other authorized organizations.`
    },
    {
      id: "3",
      title: "3. STAFFING AND EMPLOYMENT SERVICES",
      content: `Depending on the position, candidate qualifications, client requirements, and applicable employment arrangement, Hire2Hired may:
• Directly employ a candidate;
• Place a candidate with a client;
• Refer a candidate to an employer;
• Provide contract staffing;
• Provide contract-to-hire staffing;
• Provide direct-hire recruitment;
• Work through a staffing or recruitment partner; or
• Facilitate another lawful employment arrangement.

The specific employment relationship will be determined by the applicable employment agreement, staffing agreement, placement agreement, client agreement, or other written documentation. A candidate's employment relationship with Hire2Hired may therefore differ from the relationship of another candidate.`
    },
    {
      id: "4",
      title: "4. TRAINING SERVICES",
      content: `Hire2Hired may provide professional and technical training, including: IT training; Technical training; Career-readiness training; Interview preparation; Mock interviews; Resume preparation; Resume optimization; Professional communication; Job-search preparation; Career counseling; and Related educational services.

Training services are designed to improve a participant's skills and career readiness. Unless expressly stated in a separate written agreement, Hire2Hired does not guarantee employment, placement, interviews, compensation, immigration sponsorship, visa approval, or any particular career outcome.`
    },
    {
      id: "5",
      title: "5. CAREER SERVICES",
      content: `Career services may include: Career counseling; Resume preparation; Resume optimization; Job-search assistance; Job application assistance; Candidate marketing; Interview preparation; Mock interviews; Candidate profile development; Interview coordination; Career planning; Professional development; and Other career-support services. The specific services provided will depend on the service plan, order, invoice, enrollment agreement, or other applicable agreement.`
    },
    {
      id: "6",
      title: "6. NO GUARANTEE OF EMPLOYMENT",
      content: `Hire2Hired does not guarantee: Employment; A job offer; A specific employer; A specific salary; A specific number of interviews; A specific number of job submissions; A specific placement date; Continued employment; Contract renewal; Promotion; Visa approval; Immigration approval; Work authorization; or Any particular career outcome.

Hiring decisions are ultimately made by the applicable employer or client. Where Hire2Hired directly employs a candidate, employment will be governed by the applicable employment agreement and company policies.`
    },
    {
      id: "7",
      title: "7. CANDIDATE RESPONSIBILITIES",
      content: `Candidates agree to:
1. Provide accurate and truthful information.
2. Provide accurate employment history.
3. Provide accurate education and certification information.
4. Provide accurate technical and professional skills.
5. Maintain accurate resumes and professional profiles.
6. Not misrepresent qualifications or experience.
7. Not submit fraudulent, forged, altered, or misleading documents.
8. Attend scheduled interviews.
9. Attend scheduled training or career sessions where applicable.
10. Communicate professionally with Hire2Hired and prospective employers.
11. Promptly disclose material circumstances that could affect the candidate's ability to accept or join a position.
12. Comply with client and employer requirements.
13. Protect confidential information.
14. Comply with applicable laws.
15. Fulfill payment obligations under applicable Agreements and Payment Notes.

False or materially misleading information may result in rejection, suspension, termination of services, or other remedies available under the applicable Agreement and law.`
    },
    {
      id: "8",
      title: "8. CLIENT RESPONSIBILITIES",
      content: `Clients agree to: Provide accurate job descriptions; Provide accurate job requirements; Provide accurate compensation information; Communicate changes in job requirements; Treat candidates professionally; Maintain candidate confidentiality; Use candidate information only for legitimate business purposes; Comply with applicable employment laws; Avoid unlawful discrimination; Provide reasonable recruitment feedback; and Notify Hire2Hired of material changes relating to a position. Clients remain responsible for their own hiring decisions and employment practices.`
    },
    {
      id: "9",
      title: "9. EQUAL EMPLOYMENT OPPORTUNITY",
      content: `Hire2Hired supports fair and lawful recruitment and employment practices. Candidate evaluation should be based on legitimate job-related qualifications, skills, experience, business requirements, and applicable law. Hire2Hired does not knowingly engage in unlawful discrimination. Employment agencies and employers are subject to federal anti-discrimination requirements, including protections concerning race, color, religion, sex, national origin, disability, genetic information, and age where applicable.`
    },
    {
      id: "10",
      title: "10. BACKGROUND CHECKS",
      content: `Hire2Hired may use qualified third-party background-screening providers where appropriate. Hire2Hired does not ordinarily collect or retain Social Security numbers, passport numbers, driver's license numbers, or similar government identification information in its general candidate records. Where sensitive information is required for a background check, the candidate may be directed to provide the information directly to an authorized third-party provider through that provider's secure system. Where applicable, background checks may be subject to the Fair Credit Reporting Act ("FCRA") and applicable federal, state, and local law.`
    },
    {
      id: "11",
      title: "11. EMPLOYMENT ELIGIBILITY",
      content: `Depending on the employment relationship, applicable law may require verification of employment eligibility. Hire2Hired does not ordinarily retain I-9 documents, Social Security numbers, passport information, or driver's license information in its general candidate records. Where employment eligibility verification is required, the information may be handled through an authorized employer or applicable verification process. Candidates are responsible for providing truthful information and legally required documentation.`
    },
    {
      id: "12",
      title: "12. CANDIDATE ACCOUNT",
      content: `Candidates may create an account on the Hire2Hired website or portal. Candidates are responsible for: Maintaining accurate account information; Protecting login credentials; Not sharing credentials with unauthorized individuals; Maintaining account security; Updating material information; and Reporting suspected unauthorized access. Hire2Hired may suspend or terminate an account used fraudulently, unlawfully, or in violation of these Terms.`
    },
    {
      id: "13",
      title: "13. CANDIDATE INFORMATION AND SUBMISSIONS",
      content: `By submitting a resume, profile, application, or other professional information, a candidate authorizes Hire2Hired to use that information for legitimate recruitment, staffing, training, and career-service purposes. Information may be shared with: Prospective employers; Clients; Hiring managers; Staffing partners; Recruitment partners; Applicant tracking systems; Interview scheduling providers; Background-screening providers; and Other service providers necessary to provide requested services.`
    },
    {
      id: "14",
      title: "14. AGREEMENTS",
      content: `A candidate or client may be required to sign one or more written or electronic agreements. These may include: Candidate Services Agreement; Recruitment Agreement; Training Agreement; Career Services Agreement; Placement Agreement; Payment Agreement; Payment Note; Installment Agreement; Candidate Acknowledgment; Client Agreement; or Other written contractual document. An electronically accepted agreement, electronic signature, portal acknowledgment, or other legally valid acceptance may constitute acceptance of the applicable Agreement.`
    },
    {
      id: "15",
      title: "15. PAYMENT OBLIGATION",
      content: `Where a Candidate Agreement establishes a placement, recruitment, career-service, marketing, training, or other payment obligation, the candidate is responsible for paying the amount specified in the applicable Agreement.

Where applicable, Hire2Hired's placement fee is:
15% of the Candidate's first-year Annual Gross Salary.

The applicable Agreement will define the specific triggering event, calculation methodology, payment deadline, and payment schedule.`
    },
    {
      id: "16",
      title: "16. PAYMENT NOTE",
      content: `Where required, a candidate may be required to sign a Payment Note after receiving or accepting a qualifying employment offer. The Payment Note may establish: Total amount due; Payment schedule; Installment amounts; Payment dates; Payment method; Late-payment provisions; and Other payment terms. Failure to sign a required Payment Note after the applicable triggering event may constitute a material breach of the Agreement. A candidate's refusal to sign a Payment Note does not automatically eliminate an existing payment obligation under a previously executed Agreement.`
    },
    {
      id: "17",
      title: "17. PLACEMENT AND PAYMENT TRIGGER",
      content: `Where the Agreement establishes payment based upon a qualifying placement, the payment obligation may be triggered by the event specifically identified in the Agreement. Depending on the applicable Agreement, a qualifying event may include: Acceptance of an employment offer; Commencement of employment; Placement with a client; Contract employment; Contract-to-hire employment; Direct employment; Permanent employment; or Another defined placement event. The applicable signed Agreement controls the exact payment trigger.`
    },
    {
      id: "18",
      title: "18. FAILURE TO PAY AFTER PLACEMENT",
      content: `If a candidate receives a qualifying placement and then intentionally stops communicating with Hire2Hired or otherwise attempts to avoid a contractual payment obligation, the conduct may constitute a material breach. Examples include: Accepting an offer and becoming unreachable; Starting employment and refusing to make required payments; Blocking Hire2Hired communications to avoid payment; Concealing employment status; Providing false employment information; Refusing to acknowledge an existing payment obligation; or Otherwise intentionally attempting to evade payment.`
    },
    {
      id: "19",
      title: "19. FAILURE TO SIGN PAYMENT NOTE",
      content: `If the Candidate is required to execute a Payment Note after receiving or accepting a qualifying offer and fails or refuses to execute it within the required time, this may constitute a material breach. The Candidate may not intentionally refuse to execute the Payment Note solely to avoid an obligation that has already arisen under the applicable Agreement.`
    },
    {
      id: "20",
      title: "20. STOPPING PAYMENTS AFTER PLACEMENT",
      content: `If a Candidate enters into an installment payment arrangement and subsequently stops making required payments without an authorized contractual basis, the Candidate may be in payment default and material breach. Payment default may include: Missing installments; Repeated late payments; Stopping payments; Reversing payments without a valid basis; Refusing to pay an undisputed amount; or Otherwise failing to comply with the Payment Note.`
    },
    {
      id: "21",
      title: "21. FAILURE TO JOIN AFTER PRIOR CONFIRMATION",
      content: `A Candidate may be considered in material breach if:
1. Hire2Hired facilitates or presents a qualifying employment opportunity;
2. The Candidate confirms that the Candidate is willing and able to accept and join the position;
3. The Candidate has been specifically asked about a known issue that could affect joining;
4. The Candidate confirms that the issue will not prevent the Candidate from joining;
5. Hire2Hired relies upon that representation in continuing recruitment or placement activities; and
6. After receiving or accepting the offer, the Candidate refuses to join because of the same issue previously confirmed not to be a barrier.

Examples may include: Relocation; Distance; Commuting; On-site requirements; Remote/hybrid requirements; Work schedule; Shift timing; Start date; Compensation structure; Known personal commitments; Travel requirements; or Other specifically discussed joining conditions.`
    },
    {
      id: "22",
      title: "22. CANDIDATE DUTY TO DISCLOSE JOINING CONCERNS",
      content: `Candidates are expected to disclose known material issues that may affect their ability to accept or join a position. Candidates should disclose relevant concerns before the offer is accepted, including: Relocation concerns; Work-location restrictions; Schedule restrictions; Start-date restrictions; Compensation requirements; Existing employment commitments; Travel limitations; and Other known circumstances that could prevent joining.`
    },
    {
      id: "23",
      title: "23. UNFORESEEABLE CIRCUMSTANCES",
      content: `The failure-to-join provision is not intended to treat every failure to commence employment as a breach. Hire2Hired will consider circumstances that arise after the Candidate's confirmation that were genuinely unforeseeable, outside the Candidate's reasonable control, materially changed by the employer, or protected by applicable law. Examples may include: Employer withdrawal of the offer; Material change to the offer; Material change to the job location or work arrangement; Serious unforeseen emergency; Legally protected circumstances; or Other circumstances that make joining objectively impossible or materially different from the agreed opportunity.`
    },
    {
      id: "24",
      title: "24. MATERIAL BREACH OF AGREEMENT",
      content: `A material breach may include: Failure to pay an amount properly due; Failure to execute a required Payment Note; Stopping payments after placement; Intentionally disappearing after placement; Intentionally avoiding communication to evade payment; Failing to join after making a material prior confirmation concerning a known joining issue; Providing materially false information; Misrepresenting employment or offer status; Attempting to circumvent a contractual payment obligation; Misusing confidential information; Fraudulent conduct; or Another material violation of the applicable Agreement.`
    },
    {
      id: "25",
      title: "25. CONTRACTUAL / LIQUIDATED DAMAGES",
      content: `Where the applicable Agreement expressly provides for contractual or liquidated damages for a defined material breach, Hire2Hired may seek:

25.1 Outstanding Placement Fee
Any placement fee or other contractual amount already earned and due. Where applicable, this may be 15% of the Candidate's first-year Annual Gross Salary.

25.2 $5,000 Contractual Damages
An additional $5,000 contractual/liquidated damages amount may apply to a material breach specifically identified in the signed Agreement as triggering that amount. The parties intend this amount to represent a reasonable estimate of losses that may be difficult to calculate precisely.`
    },
    {
      id: "26",
      title: "26. EXAMPLE OF BREACH AMOUNT",
      content: `For illustration only:
If a Candidate's Annual Gross Salary is $100,000:
• 15% Placement Fee: $15,000
• Contractual Breach Damages: $5,000
Potential contractual amount: $20,000

In addition, Hire2Hired may seek reasonable attorneys' fees, collection costs, court costs, and other recoverable enforcement expenses to the extent permitted by the applicable Agreement and law.`
    },
    {
      id: "27",
      title: "27. NO DOUBLE RECOVERY",
      content: `Hire2Hired will not seek to recover the same loss twice merely by describing the same conduct under multiple contractual provisions. Any recovery remains subject to the applicable Agreement and applicable law.`
    },
    {
      id: "28",
      title: "28. ATTORNEYS' FEES AND COLLECTION COSTS",
      content: `Where expressly provided in the applicable Agreement and permitted by law, a Candidate who materially breaches the Agreement may be responsible for reasonable costs incurred by Hire2Hired in enforcing its contractual rights, including reasonable attorneys' fees, court costs, filing fees, collection costs, and service fees.`
    },
    {
      id: "29",
      title: "29. NOTICE OF DEFAULT",
      content: `Where appropriate, Hire2Hired may provide written notice of a payment default or other contractual breach identifying the Agreement, obligation, alleged breach, amount due, due date, cure period, and required action.`
    },
    {
      id: "30",
      title: "30. CURE PERIOD",
      content: `Where the Agreement provides a cure period, the Candidate may cure the breach within the specified period by making overdue payments, signing a required Payment Note, or correcting inaccurate information.`
    },
    {
      id: "31",
      title: "31. FAILURE TO CURE",
      content: `If a Candidate fails to cure a breach within the applicable period, Hire2Hired may pursue remedies available under the Agreement and applicable law, including declaring amounts due, suspending services, and filing legal action.`
    },
    {
      id: "32",
      title: "32. PAYMENT DISPUTES",
      content: `A Candidate who genuinely disputes an amount should notify Hire2Hired in writing at legal@hire2hired.com identifying the Agreement, disputed amount, and reason for dispute. A good-faith dispute does not automatically constitute a breach.`
    },
    {
      id: "33",
      title: "33. THIRD-PARTY EMPLOYMENT",
      content: `If a Candidate obtains employment through a Hire2Hired client, staffing partner, recruitment partner, vendor, or intermediary, the Candidate remains subject to applicable payment obligations if the employment qualifies as a placement under the Agreement.`
    },
    {
      id: "34",
      title: "34. CONFIDENTIALITY",
      content: `Candidates, clients, and users agree not to disclose, reproduce, misuse, sell, or distribute confidential client, candidate, interview, training, or proprietary business information without authorization.`
    },
    {
      id: "35",
      title: "35. INTELLECTUAL PROPERTY",
      content: `Unless otherwise stated in writing, Hire2Hired owns or has the right to use its training materials, curriculum, presentations, videos, templates, assessments, website content, branding, logos, and software.`
    },
    {
      id: "36",
      title: "36. WEBSITE AND PORTAL USE",
      content: `Users may not attempt unauthorized access, upload malicious software, interfere with system operations, scrape protected information without authorization, or use the platform for unlawful purposes.`
    },
    {
      id: "37",
      title: "37. COMMUNICATIONS",
      content: `By providing contact information or creating an account, users may receive service-related communications regarding applications, interviews, recruitment, payments, and account activity.`
    },
    {
      id: "38",
      title: "38. FEES AND PAYMENTS",
      content: `Hire2Hired may charge fees for training, career services, recruitment-related services, or placement services. Pricing and payment terms may be provided via checkout, invoice, or signed agreement.`
    },
    {
      id: "39",
      title: "39. NON-REFUNDABLE SERVICES",
      content: `Unless a separate written agreement expressly states otherwise, payments for Hire2Hired training, career services, and professional services are non-refundable.`
    },
    {
      id: "40",
      title: "40. THIRD-PARTY SERVICES",
      content: `Hire2Hired may use third-party platforms for applicant tracking, CRM, payment processing, cloud storage, and background screening. Third-party providers may have separate terms.`
    },
    {
      id: "41",
      title: "41. PRIVACY",
      content: `Hire2Hired's collection and use of personal information is governed by the Hire2Hired Privacy Policy, incorporated by reference. Hire2Hired does not ordinarily maintain Social Security numbers or passport information in general candidate records.`
    },
    {
      id: "42",
      title: "42. COOKIES AND ANALYTICS",
      content: `Hire2Hired may use cookies and similar technologies for website functionality, security, analytics, and performance measurement.`
    },
    {
      id: "43",
      title: "43. DATA SECURITY",
      content: `Hire2Hired maintains reasonable administrative, technical, and organizational safeguards designed to protect personal information including role-based access controls and secure transmission.`
    },
    {
      id: "44",
      title: "44. DATA RETENTION",
      content: `Hire2Hired retains information for periods appropriate to the purpose for which it was collected and as necessary for contractual, legal, regulatory, and business requirements.`
    },
    {
      id: "45",
      title: "45. LEGAL, TAX, IMMIGRATION AND FINANCIAL ADVICE",
      content: `Hire2Hired's services do not constitute legal, immigration, tax, or financial advice. Users should consult appropriately qualified professionals.`
    },
    {
      id: "46",
      title: "46. SUSPENSION OR TERMINATION",
      content: `Hire2Hired may suspend or terminate access to services where a user violates these Terms, provides fraudulent information, or fails to make required payments.`
    },
    {
      id: "47",
      title: "47. NO WAIVER",
      content: `Hire2Hired's failure to immediately enforce a provision does not constitute a waiver unless confirmed in writing by an authorized representative.`
    },
    {
      id: "48",
      title: "48. SURVIVAL",
      content: `Payment obligations, confidentiality, intellectual property, dispute provisions, and enforcement rights survive termination.`
    },
    {
      id: "49",
      title: "49. DISCLAIMER",
      content: `To the maximum extent permitted by law, Hire2Hired does not warrant that a candidate will obtain employment, receive an interview, or obtain a specific salary.`
    },
    {
      id: "50",
      title: "50. LIMITATION OF LIABILITY",
      content: `Hire2Hired will not be liable for indirect, incidental, special, consequential, or punitive damages arising from the use of its website or services.`
    },
    {
      id: "51",
      title: "51. GOVERNING LAW",
      content: `These Terms and applicable Agreements will be interpreted under United States federal law and applicable state law governing the transaction.`
    },
    {
      id: "52",
      title: "52. DISPUTE RESOLUTION",
      content: `Disputes will be handled according to the dispute-resolution provisions contained in the applicable signed Agreement.`
    },
    {
      id: "53",
      title: "53. SEVERABILITY",
      content: `If any provision is determined to be invalid or unenforceable, the remaining provisions will remain effective to the maximum extent permitted by law.`
    },
    {
      id: "54",
      title: "54. ENTIRE AGREEMENT",
      content: `The applicable signed Candidate Agreement, Payment Agreement, Payment Note, and incorporated documents constitute the entire agreement between Hire2Hired and the user.`
    },
    {
      id: "55",
      title: "55. CHANGES TO THESE TERMS",
      content: `Hire2Hired may update these Terms periodically by posting the revised version on the website with an updated "Last Updated" date.`
    },
    {
      id: "56",
      title: "56. PRIVACY REQUESTS",
      content: `Privacy-related requests should be submitted to Hire2Hired Inc., 312 W 2nd St A8345, Casper, WY 82601, USA. Email: legal@hire2hired.com.`
    },
    {
      id: "57",
      title: "57. CONTACT INFORMATION",
      content: `Hire2Hired Inc.\n312 W 2nd St A8345\nCasper, WY 82601\nUnited States\nWebsite: www.hire2hired.com\nLegal / Privacy Department: legal@hire2hired.com`
    },
    {
      id: "58",
      title: "58. ACKNOWLEDGMENT",
      content: `By creating an account, submitting information, purchasing services, signing an Agreement, signing a Payment Note, accepting a qualifying placement, or otherwise using Hire2Hired services, the applicable user acknowledges that they have had an opportunity to review the applicable terms and agrees to comply with the terms applicable to their relationship with Hire2Hired.`
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
            <span className="text-indigo-600 font-extrabold">Terms of Service</span>
          </div>
        )}

        {/* Hero Banner */}
        <div className="max-w-6xl mx-auto bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 rounded-3xl p-8 sm:p-12 text-white shadow-2xl overflow-hidden border border-slate-800 relative">
          <div className="space-y-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 text-xs font-extrabold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5" /> OFFICIAL LEGAL DOCUMENT
            </div>
            
            <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-white leading-tight">
              Terms of Service & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-sky-300 to-emerald-300">
                Company Contractual Terms
              </span>
            </h1>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-normal">
              <strong>HIRE2HIRED INC.</strong> • Effective & Last Updated: <strong>August 10, 2026</strong><br />
              casper, WY, USA • Legal Contact: <a href="mailto:legal@hire2hired.com" className="text-indigo-400 underline">legal@hire2hired.com</a>
            </p>

            {/* Quick Actions & Search */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <div className="relative flex-1 min-w-[260px]">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                <input 
                  type="text" 
                  placeholder="Search 58 legal sections (e.g. 15% Placement Fee, Damages)..." 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/10 text-white placeholder-slate-400 text-xs font-medium border border-white/15 focus:outline-none focus:border-indigo-400"
                />
              </div>

              <button 
                onClick={() => window.print()} 
                className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold border border-white/15 cursor-pointer transition flex items-center gap-2"
              >
                <Printer className="w-3.5 h-3.5" /> Print Terms
              </button>
            </div>
          </div>
        </div>

        {/* Main Terms Document Grid */}
        <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-8">
          
          {/* Left Table of Contents Sticky Sidebar (4 Cols) */}
          <div className="lg:col-span-4 hidden lg:block">
            <div className="bg-white rounded-3xl p-5 border border-slate-200 shadow-sm sticky top-28 space-y-3 max-h-[75vh] overflow-y-auto">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <span className="text-xs font-extrabold uppercase tracking-wider text-indigo-600 flex items-center gap-1.5">
                  <FileText className="w-4 h-4" /> Table of Contents
                </span>
                <span className="text-[10px] font-bold bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full">
                  58 Sections
                </span>
              </div>

              <div className="space-y-1 text-xs font-semibold text-slate-700">
                {sections.map(s => (
                  <a 
                    key={s.id} 
                    href={`#section-${s.id}`} 
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
                <p className="text-xs text-slate-500 font-medium">Try searching with a different keyword like "placement", "breach", or "refund".</p>
                <button 
                  onClick={() => setSearchTerm('')} 
                  className="px-4 py-2 rounded-xl bg-indigo-600 text-white text-xs font-bold border-0 cursor-pointer"
                >
                  Reset Search
                </button>
              </div>
            ) : (
              filteredSections.map(s => (
                <div key={s.id} id={`section-${s.id}`} className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-3 scroll-mt-28">
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
            <h3 className="text-lg font-extrabold text-white">Have questions about our contractual terms?</h3>
            <p className="text-xs text-slate-400 font-medium">Contact our legal and compliance department directly for official inquiries.</p>
          </div>

          <a 
            href="mailto:legal@hire2hired.com" 
            className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-extrabold border-0 cursor-pointer no-underline flex items-center gap-2 shadow"
          >
            <Mail className="w-4 h-4" /> legal@hire2hired.com
          </a>
        </div>

      </div>
    </div>
  );
}

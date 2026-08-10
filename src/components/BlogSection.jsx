import React, { useState } from 'react';
import { 
  BookOpen, Search, TrendingUp, Clock, User, ArrowRight, 
  Sparkles, Tag, ChevronRight, X, Phone, Zap, Home
} from 'lucide-react';

export default function BlogSection({ onOpenApply, onRequestCallback, isFullPage = false }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedArticle, setSelectedArticle] = useState(null);

  const categories = ['All', 'Career Growth', 'AI & ML', 'Data & Cloud', 'Placements & ATS', 'Software Engineering'];
  const trendingTopics = ['DSA Prep', 'LLMs', 'System Design', 'Data Engineering', 'MERN vs Java', 'Resume Tips'];

  const articles = [
    {
      id: 1,
      title: "How to Crack FAANG & Top Tech Interviews in 2026: A Complete Roadmap",
      category: "Career Growth",
      date: "Apr 5, 2026",
      author: "Arjun Mehta",
      role: "Senior Tech Lead",
      readTime: "8 min read",
      gradient: "from-indigo-600 to-blue-600",
      icon: "🎯",
      summary: "From DSA prep to system design — a step-by-step guide used by 500+ Hire2Hired alumni who landed senior engineering offers at Amazon, Google, and Microsoft.",
      fullContent: `
        ### The 2026 Engineering Interview Landscape
        Technical interviews at top-tier software companies have evolved significantly. Employers now look beyond raw algorithmic knowledge to evaluate your ability to architect scalable systems, integrate modern AI capabilities, and communicate technical decisions effectively.

        #### Key Preparation Pillars:
        1. **Data Structures & Core Patterns**: Focus on sliding window, two pointers, graph traversal (BFS/DFS), dynamic programming, and binary tree manipulation.
        2. **System Design & Distributed Systems**: Learn how to design high-throughput microservices, caching layers (Redis), database sharding (PostgreSQL/Cassandra), and message queues (Kafka).
        3. **AI & Cloud Fundamentals**: Be prepared to discuss cloud-native deployment (AWS/Kubernetes) and integrating AI API endpoints smoothly.
        4. **Mock Interviews & Feedback**: Conduct at least 15 timed mock interviews with senior mentors to refine technical communication under pressure.
      `
    },
    {
      id: 2,
      title: "Generative AI for Developers: What You Actually Need to Know",
      category: "AI & ML",
      date: "Apr 2, 2026",
      author: "Sneha Patel",
      role: "AI Principal Architect",
      readTime: "10 min read",
      gradient: "from-blue-600 to-indigo-700",
      icon: "🤖",
      summary: "LLMs, RAG pipelines, fine-tuning, and prompt engineering — explained simply. How to integrate Gen AI into real products without the hype.",
      fullContent: `
        ### Moving from GenAI Hype to Production Reality
        Generative AI is transforming enterprise software development, but shipping production-grade AI features requires far more than wrapping an OpenAI API call.

        #### Core Technical Competencies to Build:
        - **Retrieval-Augmented Generation (RAG)**: Connect LLMs to proprietary company data using chunking strategies, embedding models, and vector stores (Pinecone, ChromaDB, Weaviate).
        - **Agentic AI & Workflow Orchestration**: Build autonomous multi-agent loops using LangChain, LlamaIndex, or AutoGen.
        - **Parameter-Efficient Fine-Tuning (PEFT)**: Understand when to fine-tune open-weight models (Llama 3, Mistral) using LoRA and QLoRA techniques.
        - **Evaluation & Guardrails**: Implement automated latency monitoring, hallucination detection, and prompt security guardrails.
      `
    },
    {
      id: 3,
      title: "Why Data Engineering is the Hottest Tech Career in 2026",
      category: "Data & Cloud",
      date: "Mar 28, 2026",
      author: "Varun Singh",
      role: "Staff Data Architect",
      readTime: "6 min read",
      gradient: "from-sky-600 to-blue-600",
      icon: "⚙️",
      summary: "Salaries, demand, skills, and the exact path to becoming a data engineer — from someone who's reviewed 1,000+ data engineering resumes.",
      fullContent: `
        ### The Backbone of Enterprise AI
        Without clean, reliable data pipelines, even the most sophisticated AI models fail. That is why Data Engineering and MLOps have become the most recruited engineering roles across Fortune 500 enterprises.

        #### Essential Skillset Breakdown:
        - **Distributed Processing**: Apache Spark, PySpark, and Databricks for multi-terabyte data transformation.
        - **Orchestration & Workflow**: Apache Airflow and Dagster for scheduling automated ETL pipelines.
        - **Modern Data Warehousing**: Snowflake, Google BigQuery, and AWS Redshift optimization.
        - **MLOps Pipelines**: Automated model deployment, feature stores (Feast), and continuous monitoring.
      `
    },
    {
      id: 4,
      title: "The Tech Resume That Gets Shortlisted: 10 Rules from 50,000 Reviews",
      category: "Placements & ATS",
      date: "Mar 20, 2026",
      author: "Divya Nair",
      role: "Head of Placement Advisory",
      readTime: "5 min read",
      gradient: "from-indigo-600 to-purple-600",
      icon: "📄",
      summary: "Our placement team has reviewed over 50,000 resumes. Here are the 10 patterns that separate shortlisted candidates from rejected ones.",
      fullContent: `
        ### Unlocking the Secret of Automated Resume Parsing
        Over 90% of Fortune 500 companies use Applicant Tracking Systems (ATS) to filter resumes before a human recruiter ever sees them.

        #### Top 5 ATS Rules for Software Engineers:
        1. **Impact-Driven Action Verbs**: Use metrics format: *"Accelerated microservice API response times by 40% using Redis caching."*
        2. **Clean Standard Formatting**: Avoid complex columns, tables, or graphical skill bars that confuse ATS parsers.
        3. **Targeted Technical Keywords**: Include exact technology names (e.g. *Spring Boot, Docker, Kubernetes, AWS*) rather than generic descriptions.
        4. **GitHub & Portfolio Verification**: Always include clickable links to live deployed projects and clean repositories.
        5. **Concise Project Summaries**: Highlight production scale, user volume, and your specific individual contributions.
      `
    },
    {
      id: 5,
      title: "MERN vs Java Full Stack: Which Should You Choose in 2026?",
      category: "Software Engineering",
      date: "Mar 24, 2026",
      author: "Rohit Kapoor",
      role: "Engineering Manager",
      readTime: "7 min read",
      gradient: "from-blue-600 to-slate-800",
      icon: "⚡",
      summary: "A no-fluff comparison of both stacks — salary data, job market demand, learning curve, and which one fits your goals.",
      fullContent: `
        ### Navigating Backend Ecosystems
        Both Java (Spring Boot) and Python / MERN dominate enterprise backend engineering, but they serve distinct architectural needs.

        #### Key Comparative Insights:
        - **Java Enterprise Dominance**: Large banking, healthcare, and retail enterprises rely on Java for high-concurrency microservices due to its JVM speed and stability.
        - **Python & Node AI Ecosystem**: Startups and AI-focused products favor Python/Node due to rich AI/ML libraries (PyTorch, TensorFlow, LangChain) and rapid prototyping speed.
        - **The Ideal Hybrid Engineer**: Combining Spring Boot microservices with Python AI API integrations makes candidates uniquely valuable to modern tech employers.
      `
    },
    {
      id: 6,
      title: "From Zero to Cybersecurity Engineer: A 6-Month Roadmap",
      category: "Career Growth",
      date: "Mar 15, 2026",
      author: "Priya Verma",
      role: "Cloud Security Architect",
      readTime: "9 min read",
      gradient: "from-emerald-600 to-teal-700",
      icon: "🛡️",
      summary: "CEH, CompTIA Security+, ethical hacking labs, and the exact skills companies are hiring for — all in one guide.",
      fullContent: `
        ### The Surging Demand for Security Specialists
        With cyber threats rising globally, cloud security engineers and SOC analysts are among the most sought-after technical roles.

        #### 6-Month Career Action Plan:
        - **Months 1-2**: Networking fundamentals (TCP/IP, DNS, VPNs) and Linux system administration.
        - **Months 3-4**: Ethical hacking hands-on labs, vulnerability assessments, and OWASP Top 10 web security.
        - **Months 5-6**: AWS/Azure Cloud Security, SIEM tool monitoring, zero-trust architecture, and SOC incident response.
      `
    },
    {
      id: 7,
      title: "How Hire2Hired Hiring Drives Work: A Candidate's Guide",
      category: "Placements & ATS",
      date: "Mar 10, 2026",
      author: "Varun Singh",
      role: "Talent Partnership Lead",
      readTime: "4 min read",
      gradient: "from-indigo-600 to-blue-700",
      icon: "🤝",
      summary: "Skill analysis, mock interviews, direct company connects — here's the exact process and how to maximize your chances.",
      fullContent: `
        ### Fast-Tracking the Traditional Hiring Bottleneck
        Traditional hiring processes take an average of 45 days. Hire2Hired reduces placement timelines to under 48 hours through predictive AI talent matching.

        #### How Candidates Benefit:
        - **Direct Hiring Manager Visibility**: Skip generic job board black holes with direct candidate profile referrals.
        - **Verified Technical Badging**: Show recruiters your verified coding scores, interview ratings, and production project history.
        - **Dedicated Career Coaching**: Work 1-on-1 with an advisor to prepare for client technical discussions and salary negotiations.
      `
    },
    {
      id: 8,
      title: "5 Python Automation Projects That Will Impress Any Interviewer",
      category: "Software Engineering",
      date: "Mar 5, 2026",
      author: "Aarav Sharma",
      role: "DevOps & Cloud Lead",
      readTime: "6 min read",
      gradient: "from-slate-700 to-indigo-900",
      icon: "🐍",
      summary: "Forget Todo apps. These real-world automation projects demonstrate practical Python skills that senior engineers actually care about.",
      fullContent: `
        ### Building Portfolio Projects That Stand Out
        Engineering managers review dozens of resumes daily filled with simple Todo apps. To impress hiring teams, your portfolio must showcase real engineering value.

        #### 5 High-Impact Automation Project Ideas:
        1. **Automated Multi-Cloud Infrastructure Provisioner** using Terraform & GitHub Actions.
        2. **Real-Time Data Pipeline** streaming stock/crypto data with Spark, Kafka & Grafana dashboards.
        3. **Autonomous Customer Support AI Agent** powered by LangChain, RAG, and FastAPI.
        4. **Self-Healing QA Test Automation Suite** using Playwright and AI element locators.
        5. **Microservice Health & Security Monitor** with automated Slack incident alerts.
      `
    }
  ];

  const filteredArticles = articles.filter((art) => {
    const matchesCat = activeCategory === 'All' || art.category === activeCategory;
    const matchesSearch = searchQuery === '' || 
      art.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      art.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className={`bg-[#fafbfd] ${isFullPage ? 'pt-24 pb-20' : 'py-20 md:py-28'} border-b border-slate-200/80`}>
      <div className="container-main">
        
        {/* Full Page Breadcrumb */}
        {isFullPage && (
          <div className="max-w-5xl mx-auto mb-6 flex items-center gap-2 text-xs font-bold text-slate-500">
            <a href="#home" className="flex items-center gap-1 text-slate-600 hover:text-indigo-600 no-underline">
              <Home className="w-3.5 h-3.5" /> Home
            </a>
            <ChevronRight className="w-3 h-3 text-slate-400" />
            <span className="text-indigo-600">Blog & Insights</span>
          </div>
        )}

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 animate-on-scroll">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-extrabold mb-4">
            <BookOpen className="w-3.5 h-3.5" /> BLOG & INSIGHTS
          </div>
          <h1 className="text-4xl sm:text-6xl font-display font-extrabold text-slate-900 tracking-tight">
            Learn, Grow & <span className="gradient-text-animated">Stay Ahead</span>
          </h1>
          <p className="mt-4 text-slate-600 text-base sm:text-xl leading-relaxed max-w-2xl mx-auto">
            Career guides, tech deep-dives, placement tips, and industry insights — from engineers and mentors who've been there.
          </p>

          {/* Search Bar */}
          <div className="mt-8 max-w-xl mx-auto relative">
            <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search articles, topics, tags..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white border border-slate-200 text-sm text-slate-800 placeholder:text-slate-400 outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 shadow-xs transition" 
            />
            {searchQuery && (
              <button onClick={() => setSearchQuery('')} className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 hover:text-slate-600 bg-transparent border-0 cursor-pointer">
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Category Pills & Trending Topics */}
        <div className="max-w-5xl mx-auto mb-10 space-y-4">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-extrabold transition border cursor-pointer ${
                  activeCategory === cat 
                    ? 'bg-indigo-600 text-white border-indigo-600 shadow-md' 
                    : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50 hover:border-indigo-300'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Trending Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2 text-xs">
            <span className="flex items-center gap-1 font-bold text-slate-500 mr-1">
              <TrendingUp className="w-3.5 h-3.5 text-indigo-600" /> Trending:
            </span>
            {trendingTopics.map((topic) => (
              <button
                key={topic}
                onClick={() => setSearchQuery(topic)}
                className="px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-600 hover:border-indigo-300 hover:text-indigo-600 transition cursor-pointer text-[11px] font-semibold"
              >
                {topic}
              </button>
            ))}
          </div>

        </div>

        {/* Articles List Grid */}
        <div className="max-w-5xl mx-auto space-y-4">
          {filteredArticles.length > 0 ? (
            filteredArticles.map((art) => (
              <div 
                key={art.id}
                onClick={() => setSelectedArticle(art)}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xs hover:shadow-md hover:border-indigo-200 transition-all cursor-pointer group flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
              >
                <div className="flex items-start gap-5">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${art.gradient} text-white flex items-center justify-center text-2xl flex-shrink-0 shadow-md group-hover:scale-105 transition-transform`}>
                    {art.icon}
                  </div>

                  <div className="space-y-1.5">
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-indigo-600 bg-indigo-50 border border-indigo-100 px-2.5 py-0.5 rounded-full">
                        {art.category}
                      </span>
                      <span className="text-xs font-semibold text-slate-400">{art.date}</span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors leading-snug">
                      {art.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-500 line-clamp-2 leading-relaxed">
                      {art.summary}
                    </p>
                  </div>
                </div>

                {/* Right Meta Info */}
                <div className="flex items-center gap-4 flex-shrink-0 self-end md:self-center border-t md:border-t-0 pt-3 md:pt-0 border-slate-100 w-full md:w-auto justify-between md:justify-end">
                  <div className="text-left md:text-right text-xs text-slate-500 font-medium">
                    <div className="flex items-center gap-1 font-bold text-slate-700">
                      <User className="w-3.5 h-3.5 text-indigo-600" /> {art.author}
                    </div>
                    <div className="flex items-center gap-1 text-[11px] text-slate-400 mt-0.5">
                      <Clock className="w-3 h-3 text-slate-400" /> {art.readTime}
                    </div>
                  </div>

                  <div className="w-10 h-10 rounded-2xl bg-slate-100 group-hover:bg-indigo-600 group-hover:text-white text-slate-600 flex items-center justify-center transition-all shadow-xs">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>

              </div>
            ))
          ) : (
            <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 space-y-3">
              <p className="text-slate-500 text-sm font-bold">No articles found matching "{searchQuery}".</p>
              <button 
                onClick={() => { setSearchQuery(''); setActiveCategory('All'); }}
                className="px-4 py-2 rounded-xl bg-indigo-50 text-indigo-600 text-xs font-bold border border-indigo-200 cursor-pointer"
              >
                Reset Search Filters
              </button>
            </div>
          )}
        </div>

        {/* Article Reader Modal */}
        {selectedArticle && (
          <div className="modal-backdrop animate-in fade-in z-50">
            <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-10 shadow-2xl relative border border-slate-200 max-h-[90vh] overflow-y-auto animate-in zoom-in-95">
              
              <button 
                onClick={() => setSelectedArticle(null)}
                className="absolute top-6 right-6 w-9 h-9 rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 flex items-center justify-center border-0 cursor-pointer transition"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100">
                    {selectedArticle.category}
                  </span>
                  <span className="text-xs font-semibold text-slate-400">{selectedArticle.date}</span>
                  <span className="text-xs font-semibold text-slate-400">• {selectedArticle.readTime}</span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display leading-snug">
                  {selectedArticle.title}
                </h2>

                <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
                  <div className="w-10 h-10 rounded-full bg-slate-900 text-white font-extrabold text-sm flex items-center justify-center">
                    {selectedArticle.author.substring(0, 2).toUpperCase()}
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900">{selectedArticle.author}</div>
                    <div className="text-[11px] text-slate-500">{selectedArticle.role}</div>
                  </div>
                </div>

                <div className="text-sm text-slate-700 leading-relaxed whitespace-pre-line space-y-4 font-normal">
                  {selectedArticle.fullContent}
                </div>

                <div className="bg-indigo-50/80 rounded-2xl p-6 border border-indigo-100 flex flex-col sm:flex-row items-center justify-between gap-4 mt-8">
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Want to master these skills?</h4>
                    <p className="text-xs text-slate-600 mt-0.5">Explore our US-market ready AI bootcamps with Income Share Agreement terms.</p>
                  </div>
                  <button 
                    onClick={() => {
                      const title = selectedArticle.title;
                      setSelectedArticle(null);
                      onOpenApply(`Article Advice: ${title}`);
                    }}
                    className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold whitespace-nowrap shadow border-0 cursor-pointer transition"
                  >
                    Apply For Program
                  </button>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* Bottom CTA Banner: Counseling & Consultation */}
        <div className="max-w-4xl mx-auto mt-20">
          <div className="bg-gradient-to-r from-indigo-50 via-blue-50 to-indigo-50 border border-indigo-200/90 rounded-3xl p-10 sm:p-14 text-center shadow-sm relative overflow-hidden">
            <div className="w-12 h-12 rounded-2xl bg-indigo-600 text-white flex items-center justify-center mx-auto mb-4 shadow-md">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display tracking-tight mb-2">
              Ready to <span className="text-indigo-600">transform your career?</span>
            </h3>
            <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto font-medium mb-8">
              Free counseling session — no upfront tuition for eligible candidates. Income-based payment options available.
            </p>
            
            <button 
              onClick={onRequestCallback}
              className="px-8 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-md hover:scale-105 transition-all border-0 cursor-pointer inline-flex items-center gap-2"
            >
              Book Free Session
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AIResumeAnalyzer from './components/AIResumeAnalyzer';
import InteractiveHiringJourney from './components/InteractiveHiringJourney';
import AIMatchingPlayground from './components/AIMatchingPlayground';
import LiveEnterpriseDashboard from './components/LiveEnterpriseDashboard';
import TechSkillsCloud from './components/TechSkillsCloud';
import SuccessJourneyAnimation from './components/SuccessJourneyAnimation';
import EmployerHiringDashboard from './components/EmployerHiringDashboard';
import IndustryExplorer from './components/IndustryExplorer';
import TraditionalVsHire2Hired from './components/TraditionalVsHire2Hired';
import GlobalHiringNetwork from './components/GlobalHiringNetwork';
import ProgramsGrid from './components/ProgramsGrid';
import EmployerGuarantee from './components/EmployerGuarantee';
import OurStory from './components/OurStory';
import Footer from './components/Footer';
import CallbackModal from './components/CallbackModal';
import BlogSection from './components/BlogSection';
import ITServicesPage from './components/ITServicesPage';
import CoursesPage from './components/CoursesPage';
import ContactPage from './components/ContactPage';
import BookConsultationPage from './components/BookConsultationPage';
import EmployerLoginPage from './components/EmployerLoginPage';
import EmployerHowItWorksPage from './components/EmployerHowItWorksPage';
import SignupPage from './components/SignupPage';
import StripePaymentView from './components/StripePaymentView';
import ConsultantLoginPage from './components/ConsultantLoginPage';
import WhyChooseUsPage from './components/WhyChooseUsPage';
import CareersPage from './components/CareersPage';
import useScrollAnimate from './hooks/useScrollAnimate';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState('');
  const [currentView, setCurrentView] = useState(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash;
      if (hash === '#about' || hash === '#our-story') {
        return 'our-story';
      }
      if (hash === '#blog') {
        return 'blog';
      }
      if (hash === '#services' || hash === '#it-services') {
        return 'services';
      }
      if (hash === '#courses') {
        return 'courses';
      }
      if (hash === '#contact') {
        return 'contact';
      }
      if (hash === '#bookconsultation' || hash === '#employers') {
        return 'bookconsultation';
      }
      if (hash === '#employer-login' || hash === '#employers-login') {
        return 'employer-login';
      }
      if (hash === '#employer-how-it-works' || hash === '#employers-how-it-works') {
        return 'employer-how-it-works';
      }
      if (hash === '#signup') {
        return 'signup';
      }
      if (hash === '#payment') {
        return 'payment';
      }
      if (hash === '#login' || hash === '#consultant-login') {
        return 'login';
      }
      if (hash === '#why-choose-us' || hash === '#about-why-choose-us') {
        return 'why-choose-us';
      }
      if (hash === '#careers') {
        return 'careers';
      }
    }
    return 'home';
  });

  // Activate scroll entrance animations
  useScrollAnimate();

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#about' || hash === '#our-story') {
        setCurrentView('our-story');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#blog') {
        setCurrentView('blog');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#services' || hash === '#it-services') {
        setCurrentView('services');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#courses') {
        setCurrentView('courses');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#contact') {
        setCurrentView('contact');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#bookconsultation' || hash === '#employers') {
        setCurrentView('bookconsultation');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#employer-login' || hash === '#employers-login') {
        setCurrentView('employer-login');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#employer-how-it-works' || hash === '#employers-how-it-works') {
        setCurrentView('employer-how-it-works');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#signup') {
        setCurrentView('signup');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#payment') {
        setCurrentView('payment');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#login' || hash === '#consultant-login') {
        setCurrentView('login');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#why-choose-us' || hash === '#about-why-choose-us') {
        setCurrentView('why-choose-us');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#careers') {
        setCurrentView('careers');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#home' || hash === '') {
        setCurrentView('home');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (view) => {
    setCurrentView(view);
    if (view === 'our-story') {
      window.location.hash = 'our-story';
    } else if (view === 'blog') {
      window.location.hash = 'blog';
    } else if (view === 'services') {
      window.location.hash = 'services';
    } else if (view === 'courses') {
      window.location.hash = 'courses';
    } else if (view === 'contact') {
      window.location.hash = 'contact';
    } else if (view === 'bookconsultation' || view === 'employers') {
      window.location.hash = 'bookconsultation';
    } else if (view === 'employer-login') {
      window.location.hash = 'employer-login';
    } else if (view === 'employer-how-it-works') {
      window.location.hash = 'employer-how-it-works';
    } else if (view === 'signup') {
      window.location.hash = 'signup';
    } else if (view === 'payment') {
      window.location.hash = 'payment';
    } else if (view === 'login' || view === 'consultant-login') {
      window.location.hash = 'login';
    } else if (view === 'why-choose-us') {
      window.location.hash = 'why-choose-us';
    } else if (view === 'careers') {
      window.location.hash = 'careers';
    } else {
      window.location.hash = 'home';
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenCallback = () => {
    setSelectedProgram('');
    setModalOpen(true);
  };

  const handleOpenApply = (programTitle) => {
    setSelectedProgram(programTitle || 'Consultant Position');
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fafbfd]">
      {/* Header & Sticky Navbar */}
      <Navbar 
        onRequestCallback={handleOpenCallback} 
        currentView={currentView}
        onNavigate={handleNavigate}
      />

      {/* Main View Display */}
      <main className="flex-1">
        {currentView === 'our-story' ? (
          <OurStory 
            onOpenApply={handleOpenApply} 
            onRequestCallback={handleOpenCallback} 
          />
        ) : currentView === 'blog' ? (
          <BlogSection 
            onOpenApply={handleOpenApply} 
            onRequestCallback={handleOpenCallback} 
            isFullPage={true}
          />
        ) : currentView === 'services' ? (
          <ITServicesPage 
            onOpenApply={handleOpenApply} 
            onRequestCallback={handleOpenCallback} 
            isFullPage={true}
          />
        ) : currentView === 'courses' ? (
          <CoursesPage 
            onOpenApply={handleOpenApply} 
            onRequestCallback={handleOpenCallback} 
            isFullPage={true}
          />
        ) : currentView === 'contact' ? (
          <ContactPage 
            isFullPage={true}
          />
        ) : currentView === 'bookconsultation' ? (
          <BookConsultationPage 
            onRequestCallback={handleOpenCallback} 
            onNavigate={handleNavigate}
            isFullPage={true}
          />
        ) : currentView === 'employer-login' ? (
          <EmployerLoginPage 
            onNavigate={handleNavigate}
            onRequestCallback={handleOpenCallback} 
            isFullPage={true}
          />
        ) : currentView === 'employer-how-it-works' ? (
          <EmployerHowItWorksPage 
            onNavigate={handleNavigate}
            isFullPage={true}
          />
        ) : currentView === 'signup' ? (
          <SignupPage 
            onNavigate={handleNavigate}
            isFullPage={true}
          />
        ) : currentView === 'payment' ? (
          <StripePaymentView 
            isFullPage={true}
            onNavigate={handleNavigate}
          />
        ) : currentView === 'login' ? (
          <ConsultantLoginPage 
            onNavigate={handleNavigate}
            isFullPage={true}
          />
        ) : currentView === 'why-choose-us' ? (
          <WhyChooseUsPage 
            onNavigate={handleNavigate}
            onRequestCallback={handleOpenCallback}
            isFullPage={true}
          />
        ) : currentView === 'careers' ? (
          <CareersPage 
            onNavigate={handleNavigate}
            isFullPage={true}
          />
        ) : (
          <>
            {/* Hero Section */}
            <HeroSection 
              onOpenApply={handleOpenApply} 
              onRequestCallback={handleOpenCallback}
              onNavigate={handleNavigate}
            />

            {/* SECTION 1: Interactive AI Resume Analyzer (Immediately after Hero) */}
            <AIResumeAnalyzer onOpenApply={handleOpenApply} />

            {/* SECTION 2: Interactive Hiring Journey Timeline */}
            <InteractiveHiringJourney onRequestCallback={handleOpenCallback} />

            {/* SECTION 3: AI Matching Playground */}
            <AIMatchingPlayground onOpenApply={handleOpenApply} />

            {/* SECTION 4: Live Enterprise Analytics Dashboard */}
            <LiveEnterpriseDashboard />

            {/* SECTION 5: Technology Skills Cloud */}
            <TechSkillsCloud onOpenApply={handleOpenApply} />

            {/* SECTION 6: Candidate Success Journey Animation */}
            <SuccessJourneyAnimation />

            {/* SECTION 7: Employer Hiring Dashboard SaaS UI */}
            <EmployerHiringDashboard onRequestCallback={handleOpenCallback} />

            {/* SECTION 8: Industry Explorer */}
            <IndustryExplorer onOpenApply={handleOpenApply} />

            {/* SECTION 9: Traditional Hiring vs Hire2Hired Comparison */}
            <TraditionalVsHire2Hired onRequestCallback={handleOpenCallback} />

            {/* SECTION 10: Global Hiring Network & Map */}
            <GlobalHiringNetwork onRequestCallback={handleOpenCallback} />

            {/* Technical Bootcamps & Courses Grid */}
            <ProgramsGrid onOpenApply={handleOpenApply} />

            {/* Blog & Tech Insights Section */}
            <BlogSection onOpenApply={handleOpenApply} onRequestCallback={handleOpenCallback} />

            {/* Enterprise Staffing & Guarantee */}
            <EmployerGuarantee onRequestCallback={handleOpenCallback} />
          </>
        )}
      </main>

      {/* Comprehensive Footer */}
      <Footer onRequestCallback={handleOpenCallback} onNavigate={handleNavigate} />

      {/* Callback Lead Capture Modal */}
      <CallbackModal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
        defaultProgram={selectedProgram}
      />
    </div>
  );
}


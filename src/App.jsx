import React, { useState } from 'react';
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
import Footer from './components/Footer';
import CallbackModal from './components/CallbackModal';
import useScrollAnimate from './hooks/useScrollAnimate';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState('');

  // Activate scroll entrance animations
  useScrollAnimate();

  const handleOpenCallback = () => {
    setSelectedProgram('');
    setModalOpen(true);
  };

  const handleOpenApply = (programTitle) => {
    setSelectedProgram(programTitle);
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fafbfd]">
      {/* Header & Sticky Navbar */}
      <Navbar onRequestCallback={handleOpenCallback} />

      {/* Main Interactive AI Product Experience */}
      <main className="flex-1">
        
        {/* Hero Section */}
        <HeroSection 
          onOpenApply={handleOpenApply} 
          onRequestCallback={handleOpenCallback}
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

        {/* Enterprise Staffing & Guarantee */}
        <EmployerGuarantee onRequestCallback={handleOpenCallback} />

      </main>

      {/* Comprehensive Footer */}
      <Footer onRequestCallback={handleOpenCallback} />

      {/* Callback Lead Capture Modal */}
      <CallbackModal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
        defaultProgram={selectedProgram}
      />
    </div>
  );
}

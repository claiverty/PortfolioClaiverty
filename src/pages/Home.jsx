import { useEffect } from 'react';
import Footer from '../components/layout/Footer.jsx';
import Header from '../components/layout/Header.jsx';
import AboutSection from '../components/portfolio/AboutSection.jsx';
import ContactSection from '../components/portfolio/ContactSection.jsx';
import HeroSection from '../components/portfolio/HeroSection.jsx';
import ProjectsSection from '../components/portfolio/ProjectsSection.jsx';
import SkillsSection from '../components/portfolio/SkillsSection.jsx';

export default function Home() {
  useEffect(() => {
    const elements = document.querySelectorAll('[data-reveal]');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: '0px 0px -12% 0px',
        threshold: 0.16,
      },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="portfolio-page">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

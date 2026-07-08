import { ArrowDown, Download, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import Button from '../ui/Button.jsx';
import GlassCard from '../ui/GlassCard.jsx';

export default function HeroSection() {
  return (
    <section className="hero" aria-labelledby="home-title">
      <div className="section-container hero__inner">
        <div className="hero__content" data-reveal>
          <p className="hero__availability">
            <span aria-hidden="true">-&gt;</span> Disponível para projetos · 2026
          </p>
          <h1 id="home-title" className="hero__title">
            <span>Claiverty</span>
            <span>Rodrigues</span>
          </h1>
          <p className="hero__text">
            Crio interfaces modernas, responsivas e funcionais para transformar ideias em experiências digitais claras, bonitas e eficientes.
            Trabalho sempre buscando unir código limpo, boa usabilidade e atenção aos detalhes.
          </p>

          <div className="hero__actions">
            <Button href="#projects" icon={ArrowDown}>
              Ver projetos
            </Button>
            <Button href="#contact" variant="secondary">
              Entrar em contato
            </Button>
          </div>

          <div className="social-rail" aria-label="Links sociais">
            <span>@claiverty</span>
            <a href="https://github.com/claiverty" target="_blank" rel="noreferrer">
              <Github aria-hidden="true" size={16} />
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/claiverty/" target="_blank" rel="noreferrer">
              <Linkedin aria-hidden="true" size={16} />
              LinkedIn
            </a>
            <a href="mailto:claiverty14@gmail.com">
              <Mail aria-hidden="true" size={16} />
              E-mail
            </a>
            <a href="/cv/cv-claiverty.pdf" download>
              <Download aria-hidden="true" size={16} />
              CV
            </a>
          </div>
        </div>

        <div className="hero__visual" data-reveal style={{ '--reveal-delay': '120ms' }}>
          <GlassCard className="portrait-card">
            <picture>
              <source media="(max-width: 640px)" srcSet="/assets/claiverty-hero-640.jpg" />
              <img
                src="/assets/claiverty-hero-900.jpg"
                alt="Claiverty Rodrigues, desenvolvedor de software"
                width="900"
                height="1599"
                decoding="async"
                fetchPriority="high"
              />
            </picture>
          </GlassCard>
          <div className="location-badge">
            <MapPin aria-hidden="true" size={15} />
            Formosa, GO
          </div>
        </div>
      </div>
    </section>
  );
}
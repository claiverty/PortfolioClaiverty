import { Github } from 'lucide-react';
import Button from '../ui/Button.jsx';
import SectionTitle from '../ui/SectionTitle.jsx';
import ProjectCard from './ProjectCard.jsx';

export default function ProjectsSection() {
  return (
    <section className="projects" id="projects" aria-labelledby="projects-title">
      <div className="section-container">
        <div className="projects__header" data-reveal>
          <SectionTitle id="projects-title" title="Projetos" />
        </div>
        <div className="projects__grid" data-reveal style={{ '--reveal-delay': '80ms' }}>
          <ProjectCard
            number="01"
            title="Comercial Sagarana - LP e Sistema de Gestão"
            description="O sistema permite divulgar promoções, facilitar o contato com clientes e realizar o controle interno de ofertas e vendas diárias através de um dashboard administrativo."
            image="/assets/projects/comercial-sagarana-card.jpg"
            imageAlt="Comercial Sagarana"
            imageWidth={900}
            imageHeight={444}
            href="https://comercialsagarana.vercel.app/"
            repository="https://github.com/claiverty/comercialSagarana3.0"
          >
            <li>React</li>
            <li>Vite</li>
            <li>Supabase</li>
            <li>PostgreSQL</li>
          </ProjectCard>

          <ProjectCard
            number="02"
            title="Cabeleleila Leila - Sistema de Agendamento"
            description="Sistema de gerenciamento de um salão de beleza, permitindo que clientes realizem reservas e que a administradora controle os atendimentos."
            image="/assets/projects/cabeleleila-leila-card.jpg"
            imageAlt="Interface do sistema Cabeleleila Leila"
            imageWidth={900}
            imageHeight={444}
            href="https://cabeleleilaleila.vercel.app/"
            repository="https://github.com/claiverty/CabeleleilaLeila"
          >
            <li>JavaScript</li>
            <li>CSS</li>
            <li>Supabase</li>
            <li>PostgreSQL</li>
          </ProjectCard>

          <ProjectCard
            number="03"
            title="Comunidade SPFC - Sistema de Votação"
            description="Este é o site de votação para a premiação anual da comunidade de torcedores do São Paulo FC no Discord."
            image="/assets/projects/ballon-dor-spfc-card.jpg"
            imageAlt="Interface do sistema Comunidade SPFC"
            imageWidth={900}
            imageHeight={600}
            href="https://ballondorspfc.vercel.app/"
            repository="https://github.com/claiverty/BallondOrSPFC"
          >
            <li>JavaScript</li>
            <li>Supabase</li>
            <li>PostgreSQL</li>
            <li>OAuth2</li>
          </ProjectCard>
        </div>
        <div className="projects__footer" data-reveal style={{ '--reveal-delay': '120ms' }}>
          <Button href="https://github.com/claiverty" variant="secondary" icon={Github} external>
            {'Ver repositórios'}
          </Button>
        </div>
      </div>
    </section>
  );
}
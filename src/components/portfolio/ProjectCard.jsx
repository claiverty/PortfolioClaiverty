import { ExternalLink, Github } from 'lucide-react';
import GlassCard from '../ui/GlassCard.jsx';

export default function ProjectCard({
  number,
  title,
  description,
  image,
  imageAlt,
  href,
  repository,
  children,
}) {
  return (
    <GlassCard as="article" className="project-card">
      <div className="project-card__media">
        <img src={image} alt={imageAlt} loading="lazy" />
      </div>
      <div className="project-card__body">
        <div className="project-card__topline">
          <span className="project-card__number">{number}</span>
          <div className="project-card__actions">
            <a href={href} target="_blank" rel="noreferrer" aria-label={`Abrir ${title}`}>
              <ExternalLink aria-hidden="true" size={17} />
            </a>
            <a
              href={repository}
              target="_blank"
              rel="noreferrer"
              aria-label={`Abrir repositório de ${title}`}
            >
              <Github aria-hidden="true" size={17} />
            </a>
          </div>
        </div>
        <h3>{title}</h3>
        <p>{description}</p>
        <ul aria-label={`Tecnologias de ${title}`}>{children}</ul>
      </div>
    </GlassCard>
  );
}
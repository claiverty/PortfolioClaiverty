export default function SkillsSection() {
  return (
    <section className="skills" id="skills" aria-labelledby="skills-title">
      <div className="section-container">
        <div className="skills__content" data-reveal>
          <h2 id="skills-title">
            Habilidades<span>.</span>
          </h2>
          <div className="skills__columns">
            <article className="skill-column">
              <h3>Interfaces & Front-end</h3>
              <ul aria-label="Habilidades de Design Web">
                <li>React</li>
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>CSS Modules</li>
                <li>Vite</li>
                <li>Design responsivo</li>
              </ul>
            </article>

            <article className="skill-column">
              <h3>Back-end & Sistemas</h3>
              <ul aria-label="Habilidades de Front-end">
                <li>Node.js</li>
                <li>Python</li>
                <li>Java</li>
                <li>APIs REST</li>
                <li>Lógica de negócio</li>
                <li>Arquitetura de sistemas</li>
              </ul>
            </article>

            <article className="skill-column">
              <h3>Dados & Integrações</h3>
              <ul aria-label="Habilidades de Back-end">
                <li>PostgreSQL</li>
                <li>Integração com APIs</li>
                <li>Automações</li>
                <li>IA aplicada</li>
                <li>Fluxos inteligentes</li>
                <li>Git & GitHub</li>
              </ul>
            </article>

            <article className="skill-column">
              <h3>Produto & Soft Skills</h3>
              <ul aria-label="Habilidades comportamentais">
                <li>UI/UX Design</li>
                <li>Comunicação efetiva</li>
                <li>Resolução de problemas</li>
                <li>Colaboração</li>
                <li>Visão de produto</li>
                <li>Pesquisa com usuários</li>
              </ul>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
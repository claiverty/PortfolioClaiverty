import SectionTitle from '../ui/SectionTitle.jsx';

export default function AboutSection() {
  return (
    <section className="about" id="about" aria-labelledby="about-title">
      <div className="section-container">
        <div className="about__grid">
          <div className="about__copy" data-reveal>
            <SectionTitle id="about-title" title="Sobre" />
            <p className="section-lead">Eu construo sistemas que escalam e depois faço tudo parecer simples.</p>
            <div className="about__body">
              <p>
                Olá, eu sou Claiverty Rodrigues, desenvolvedor de software em formação em Análise e Desenvolvimento de
                Sistemas.
              </p>
              <p>
                Atuo como desenvolvedor de software, criando soluções digitais completas que conectam interface, lógica de
                negócio, automações, sistemas web e integrações inteligentes. Trabalho sempre buscando desenvolver
                projetos funcionais, bem estruturados e com boa experiência para o usuário.
              </p>
              <p>
                Minha evolução vem da construção de projetos completos e estratégicos, envolvendo interfaces modernas,
                aplicações web, sistemas, automações e soluções com inteligência artificial. Mais do que criar telas
                bonitas, busco transformar ideias em produtos digitais úteis, escaláveis e capazes de resolver problemas
                reais.
              </p>
            </div>
            <dl className="about__meta">
              <div>
                <dt>Atuação</dt>
                <dd>Desenvolvimento de Software</dd>
              </div>
              <div>
                <dt>Entrego</dt>
                <dd>Sistemas Web & Automações</dd>
              </div>
              <div>
                <dt>Explorando</dt>
                <dd>IA aplicada a soluções digitais</dd>
              </div>
              <div>
                <dt>Disponível Para</dt>
                <dd>Projetos, freelas e oportunidades</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
import { Github, Linkedin, Mail, Send } from 'lucide-react';
import Button from '../ui/Button.jsx';
import GlassCard from '../ui/GlassCard.jsx';
import SectionTitle from '../ui/SectionTitle.jsx';

export default function ContactSection() {
  return (
    <section className="contact" id="contact" aria-labelledby="contact-title">
      <div className="section-container">
        <div className="contact__grid">
          <div className="contact__copy" data-reveal>
            <SectionTitle id="contact-title" title="Contato" />
            <p className="section-lead">Vamos transformar ideias em soluções reais.</p>
            <p>
              Estou aberto a oportunidades, projetos e colaborações em desenvolvimento de software, sistemas web, automações e soluções com inteligência artificial.
            </p>
            <ul className="contact__links" aria-label="Links de contato">
              <li>
                <a href="mailto:claiverty14@gmail.com">
                  <Mail aria-hidden="true" size={17} />
                  <span>claiverty14@gmail.com</span>
                </a>
              </li>
              <li>
                <a href="https://github.com/claiverty" target="_blank" rel="noreferrer">
                  <Github aria-hidden="true" size={17} />
                  <span>github.com/claiverty</span>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/claiverty/" target="_blank" rel="noreferrer">
                  <Linkedin aria-hidden="true" size={17} />
                  <span>linkedin.com/in/claiverty</span>
                </a>
              </li>
            </ul>
          </div>

          <GlassCard
            as="form"
            className="contact-form"
            data-reveal
            style={{ '--reveal-delay': '120ms' }}
            action="https://formsubmit.co/claiverty14@gmail.com"
            method="POST"
          >
            <div className="form-field">
              <label htmlFor="name">Nome</label>
              <input id="name" name="name" type="text" placeholder="Seu nome" required />
            </div>
            <div className="form-field">
              <label htmlFor="email">E-mail</label>
              <input id="email" name="email" type="email" placeholder="seuemail@email.com" required />
            </div>
            <div className="form-field">
              <label htmlFor="message">Mensagem</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Me conte sobre sua ideia, projeto ou oportunidade."
                required
              />
            </div>
            <Button type="submit" icon={Send}>
              Iniciar Conversa
            </Button>
            <input type="hidden" name="_subject" value="Novo Contato!" />
            <input type="text" name="_honey" hidden tabIndex="-1" autoComplete="off" />
            <input type="hidden" name="_captcha" value="false" />
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
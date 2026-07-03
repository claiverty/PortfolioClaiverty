import { Download, Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import Button from '../ui/Button.jsx';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="header">
      <nav className="header__nav" aria-label="Navegação principal">
        <a
          href="#"
          className="header__logo"
          aria-label="Página inicial de Claiverty Rodrigues"
          onClick={closeMenu}
        >
          {'<CR />'}
        </a>

        <ul className="header__links">
          <li>
            <a href="#about">Sobre</a>
          </li>
          <li>
            <a href="#skills">Habilidades</a>
          </li>
          <li>
            <a href="#projects">Projetos</a>
          </li>
          <li>
            <a href="#contact">Contato</a>
          </li>
        </ul>

        <div className="header__actions">
          <Button href="/cv/cv-claiverty.pdf" icon={Download} download>
            Baixar CV
          </Button>
        </div>

        <button
          className="header__menu-button"
          type="button"
          aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-controls="mobile-menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((value) => !value)}
        >
          {isOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </nav>

      <div className={['mobile-menu', isOpen ? 'is-open' : ''].filter(Boolean).join(' ')} id="mobile-menu">
        <ul>
          <li>
            <a href="#about" onClick={closeMenu}>
              Sobre
            </a>
          </li>
          <li>
            <a href="#skills" onClick={closeMenu}>
              Habilidades
            </a>
          </li>
          <li>
            <a href="#projects" onClick={closeMenu}>
              Projetos
            </a>
          </li>
          <li>
            <a href="#contact" onClick={closeMenu}>
              Contato
            </a>
          </li>
        </ul>
        <div className="mobile-menu__actions">
          <Button href="/cv/cv-claiverty.pdf" variant="secondary" icon={Download} download onClick={closeMenu}>
            Baixar CV
          </Button>
          <Button href="#contact" onClick={closeMenu}>
            Conversar
          </Button>
        </div>
      </div>
    </header>
  );
}
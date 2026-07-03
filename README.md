# Portfolio Claiverty Rodrigues

Portfolio pessoal desenvolvido para apresentar minha atuação como desenvolvedor, meus principais projetos, habilidades técnicas e canais de contato.

O projeto foi reconstruído com React e Vite, com foco em uma interface moderna, escura, responsiva e direta de manter.

## Deploy

Projeto pronto para publicação em plataformas como Vercel, Netlify ou similares.

- Build command: `npm run build`
- Output directory: `dist`

## Tecnologias

- React
- Vite
- React Router DOM
- Lucide React
- CSS organizado por arquivos de responsabilidade
- FormSubmit para envio do formulário de contato

## Funcionalidades

- Hero com apresentação e links sociais
- Seção Sobre textual e responsiva
- Seção de habilidades organizada por áreas
- Cards de projetos com links para deploy e repositório
- Formulário de contato
- Link para download do currículo
- Layout responsivo para desktop, tablet e mobile
- Animações suaves de entrada no scroll
- Design dark com efeitos glass e detalhes em vermelho

## Como Rodar Localmente

Instale as dependências:

```bash
npm install
```

Rode o servidor de desenvolvimento:

```bash
npm run dev
```

Gere a versão de produção:

```bash
npm run build
```

Visualize o build localmente:

```bash
npm run preview
```

## Estrutura Principal

```txt
src/
  components/
    layout/
      Header.jsx
      Footer.jsx
    portfolio/
      HeroSection.jsx
      AboutSection.jsx
      SkillsSection.jsx
      ProjectsSection.jsx
      ProjectCard.jsx
      ContactSection.jsx
    ui/
      Button.jsx
      GlassCard.jsx
      SectionTitle.jsx
  pages/
    Home.jsx
  routes/
    AppRoutes.jsx
  styles/
    components/
    layout/
    pages/
    globals.css
    responsive.css
    variables.css
  App.jsx
  main.jsx

public/
  assets/
    projects/
  cv/
```

## Assets

As imagens usadas diretamente no JSX ficam em `public/assets`, permitindo referências simples como:

```jsx
image="/assets/projects/comercial-sagarana.png"
```

O currículo fica em:

```txt
public/cv/cv-claiverty.pdf
```

## Contato

- GitHub: [github.com/claiverty](https://github.com/claiverty)
- LinkedIn: [linkedin.com/in/claiverty](https://www.linkedin.com/in/claiverty/)
- E-mail: [claiverty14@gmail.com](mailto:claiverty14@gmail.com)
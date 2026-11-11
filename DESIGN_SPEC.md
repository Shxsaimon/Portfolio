# ESPECIFICAÇÃO DE DESIGN & PRODUTO (DESIGN_SPEC)
**Portfólio Pessoal — Saimon Furigo**
*Versão 1.0 — 09/11/2026*

---

## 1. Visão Geral & Posicionamento

* **Nome do Profissional:** Saimon Furigo
* **Perfil:** Desenvolvedor de Software com forte paixão e aptidão por Front-end, Design Systems e refinamento de UX/UI, combinado a uma visão holística de arquitetura de software de ponta a ponta (regras de negócio, segurança, bancos relacionais, concorrência atômica, serverless, CI/CD e infraestrutura).
* **Links Oficiais:**
  * GitHub: [github.com/Shxsaimon](https://github.com/Shxsaimon)
  * LinkedIn: [linkedin.com/in/saimonfurigo](https://www.linkedin.com/in/saimonfurigo/)
* **Objetivo do Portfólio:** Apresentar de forma sofisticada e clara a capacidade de transformar problemas reais em produtos digitais de alta precisão técnica e visual.
* **Ferramenta de Prototipação/Layout:** Google Stitch.

---

## 2. Estrutura de Conteúdo (One-Page Storytelling)

A navegação segue uma narrativa fluida de cima para baixo em 5 seções estratégicas:

```text
┌────────────────────────────────────────────────────────────────────────┐
│ [1] HEADER & HERO: Apresentação Forte + Bio UX/FullStack + Ações       │
├────────────────────────────────────────────────────────────────────────┤
│ [2] PROJETO EM DESTAQUE: Symo Finance (Showcase + Device Switcher)     │
├────────────────────────────────────────────────────────────────────────┤
│ [3] OUTROS PROJETOS: Carrossel Horizontal Estilo Streaming / Slider    │
├────────────────────────────────────────────────────────────────────────┤
│ [4] ARSENAL TÉCNICO: Skills por Camadas (Front/UX, Back, Banco, DevOps)│
├────────────────────────────────────────────────────────────────────────┤
│ [5] FOOTER: Status de Disponibilidade + Cópia de E-mail em 1 Clique    │
└────────────────────────────────────────────────────────────────────────┘
```

### Seção 1: Header & Hero ("Sobre Mim")
- **Navbar Fixa Translúcida:** Logotipo textual (`SF` ou `Saimon.dev`), links de âncora (*Projetos*, *Arsenal*, *Contato*) e botão de ação rápida (*Disponível para novos projetos*).
- **Hero Section:**
  - Tag pill: `● Aberto a novos desafios & oportunidades`
  - Headline de impacto: *Desenvolvedor de Software focado em interfaces elegantes e arquitetura robusta de ponta a ponta.*
  - Subtítulo: Focado na ponte entre UX/UI refinado e engenharia sólida (PHP 8 MVC nativo, PostgreSQL, JavaScript moderno e pipelines em nuvem).
  - CTAs Primários: Botão com gradiente `[Explorar Projetos]` e botões secundários `[GitHub]` e `[LinkedIn]`.

### Seção 2: Projeto Carro-Chefe (Symo Finance)
- Apresentação em bloco de destaque visual único (Showcase):
  - **Coluna Visual (60%):** Mockup do sistema com a **Interatividade Fase 1 (Device Switcher)**:
    - Alternador: `[ 💻 Desktop ]` | `[ 📱 Mobile ]`.
    - Transição fluida entre a visualização do Dashboard em tela cheia e o menu/modal mobile.
    - Badges flutuantes: *45 Telas Documentadas*, *Concorrência Atômica*, *Zero Framework Lock-in*.
  - **Coluna Técnica (40%):**
    - Título e proposta de valor da plataforma de gestão financeira.
    - Destaques de engenharia: Arquitetura MVC nativa sem bibliotecas externas, integração com Neon PgBouncer via SSL, auditoria com JSON Diff.
    - Botões: `[ Ver Galeria Completa ]` e `[ Testar Protótipo ]`.

### Seção 3: Outros Projetos Reais (Carrossel Horizontal / Slider)
- **Conceito:** Exibição estilo *Netflix / Amazon*, mostrando 3 cartões por vez com setas de navegação lateral (prev/next) e suporte a drag/swipe.
- **Nota de Escopo:** Repositórios de anotações/exercícios de estudos ficam de fora; apenas projetos com propósito e entrega real entram aqui.
- **Card Inicial 1:** **Landing Page No Man's Sky** (Front-end imersivo, vídeo hero background, animações CSS e responsividade fluida).
- **Cards Futuros / Próximos Projetos:** Espaços modulares reservados para novos produtos full-stack ou freelas.

### Seção 4: Arsenal Técnico & Metodologia
Organização em 4 grupos claros para evidenciar o domínio de ponta a ponta:
1. **Front-end & UX/UI:** HTML5 Semântico, CSS3 Moderno, Design Tokens, JS Vanilla (ES6+), Bootstrap, Acessibilidade (WCAG), Micro-animações.
2. **Back-end & Arquitetura:** PHP 8.2+ Nativo, Arquitetura MVC, Roteamento HTTP desacoplado, APIs RESTful, Prepared Statements e Defesa em Profundidade.
3. **Bancos de Dados & Dados:** PostgreSQL (Neon Serverless), MySQL, Transações Atômicas (ACID), Modelagem Relacional, Migrations Versionadas.
4. **DevOps & Cloud:** Vercel (Serverless Deployments), Vercel Blob Storage, Git / GitHub Actions (CI/CD de migrações), GitFlow.

### Seção 5: Rodapé & Contato
- Chamada amigável para networking ou contratação.
- Cartão de contato interativo com botão de **copiar e-mail em 1 clique** com feedback visual (`"Copiado!"`).
- Links para redes e créditos.

---

## 3. Roteiro de Interatividades Incrementais

* **Fase 1 (Nativa / No Lançamento):**
  * **Device Frame Switcher no Symo Finance:** Toggle `Desktop / Mobile` que troca a imagem/frame do mockup com transição suave.
  * **Carrossel Horizontal:** Navegação fluida de projetos laterais com botões de avançar/voltar.
* **Fase 2 (Próximo Ciclo):**
  * **Seletor de Perspectiva no Hero:** Botão switch `[Visão Geral / Recrutador]` vs `[Visão Técnica / Engenharia]`.
* **Fase 3 (Refinamento Futuro):**
  * **Seletor de Acentos de Cor:** Pílulas no canto inferior da tela para trocar entre as vibes de cor.

---

## 4. Design Tokens & Paletas para Teste

### Superfícies e Bases Comuns (Dark Moderno)
* **Background Canvas:** `#0A090D` (Obsidian profundo com leve nuance roxa)
* **Surface Container / Cards:** `#14121A` (Berinjela escuro refinado)
* **Surface Container High:** `#1C1824`
* **Card Border:** `1px solid rgba(255, 255, 255, 0.08)` / `#282236`
* **Texto Primário:** `#F4F0EA` (Ice Warm — alta legibilidade sem agredir a visão)
* **Texto Secundário / Muted:** `#9C93AB` (Lavanda acinzentado)

---

### Comparativo das Paletas de Ação (Para Testar no Stitch)

```text
┌───────────────────────────────────────┬───────────────────────────────────────┐
│ VARIANTE 1: DEEP VIOLET ELEGANCE      │ VARIANTE 2: ORCHID ENERGY             │
│ (Foco: Sofisticado, Escuro e Sóbrio)  │ (Foco: Alto Contraste e Elétrico)     │
├───────────────────────────────────────┼───────────────────────────────────────┤
│ • Primária: #6F00FF (Electric Violet) │ • Primária: #6F00FF (Electric Violet) │
│ • Hover de Botões: #340094 / #48005E  │ • Hover de Botões: #8900B3            │
│   (Escurece com profundidade e peso)  │   (Ilumina com energia e vibração)    │
│ • Gradiente de Destaque:              │ • Gradiente de Destaque:              │
│   linear-gradient(135deg,             │   linear-gradient(135deg,             │
│     #6F00FF 0%,                       │     #6F00FF 0%,                       │
│     #340094 100%)                     │     #B829E3 100%)                     │
│ • Bordas Ativas: #48005E              │ • Bordas Ativas: #8900B3              │
└───────────────────────────────────────┴───────────────────────────────────────┘
```

---

## 5. Tipografia & Formas

* **Família Tipográfica Principal:** `Inter` ou `Plus Jakarta Sans` (Google Fonts).
* **Headlines Display:** Peso 700 / 800, `letter-spacing: -0.02em`.
* **Subtítulos e Seções:** Peso 600, `letter-spacing: -0.01em`.
* **Corpo de Texto:** Peso 400, `line-height: 1.6`.
* **Dados Técnicos / Tags:** `JetBrains Mono` ou `Fira Code` (para nomes de tecnologias e métricas).
* **Bordas Arredondadas (Radius):**
  * Botões e Badges: `50px` (estilo pílula suave) ou `8px`.
  * Cards e Containers: `16px`.
  * Modais e Mockup Frames: `20px`.

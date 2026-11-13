# ESPECIFICAÇÃO DE DESIGN & PRODUTO (DESIGN_SPEC)
**Portfólio Pessoal — Saimon Furigo**
  *Versão Consolidada — 2026*

---

## 1. Visão Geral & Posicionamento

* **Nome do Profissional:** Saimon Furigo
* **Perfil:** Desenvolvedor de Software focado em interfaces elegantes e arquitetura de sistemas confiável, unindo refinamento em UX/UI e Design Systems ao domínio prático de desenvolvimento backend, modelagem relacional e automação em nuvem.
* **Canais Oficiais:**
  * GitHub: [github.com/Shxsaimon](https://github.com/Shxsaimon)
  * LinkedIn: [linkedin.com/in/saimonfurigo](https://www.linkedin.com/in/saimonfurigo/)
  * WhatsApp: [+55 (47) 99639-1369](https://wa.me/5547996391369)
  * E-mail: [shxsaimondev@gmail.com](mailto:shxsaimondev@gmail.com)
* **Objetivo do Portfólio:** Vitrine profissional clara e direta, demonstrando competência técnica com projetos reais e código limpo, sem dependências de frameworks pesados no front-end.
* **Origem Visual:** Prototipação conceitual via Google Stitch, refinada e consolidada no tema **Obsidian Kinetic**.

---

## 2. Estrutura de Conteúdo (One-Page Storytelling)

A navegação segue uma narrativa fluida de cima para baixo em 5 seções estratégicas:

```text
┌────────────────────────────────────────────────────────────────────────┐
│ [1] HEADER & HERO: Apresentação + Bio + Links Diretos                 │
├────────────────────────────────────────────────────────────────────────┤
│ [2] PROJETO EM DESTAQUE: Symo Finance (Showcase + Switcher + Lupa)     │
├────────────────────────────────────────────────────────────────────────┤
│ [3] OUTROS PROJETOS: Carrossel Circular com Drag + Modal de Detalhes   │
├────────────────────────────────────────────────────────────────────────┤
│ [4] HABILIDADES TÉCNICAS: Visão por Áreas (Front, Back, Dados, DevOps e Nuvem) │
├────────────────────────────────────────────────────────────────────────┤
│ [5] CONTATO & RODAPÉ: Cópia de E-mail em 1 Clique + Redes + Badge Dev  │
└────────────────────────────────────────────────────────────────────────┘
```

### Seção 1: Header & Hero ("Sobre Mim")
- **Navbar Fixa com Efeito de Vidro (Glassmorphism):**
  - Identificação de perfil: `SOFTWARE DEVELOPER & UX/UI`.
  - Links de âncora para as seções: `Sobre Mim` (`#sobre-mim`), `Projeto em Destaque` (`#projeto-destaque`), `Outros Projetos` (`#outros-projetos`), `Habilidades` (`#habilidades`) e `Contato` (`#contato`).
  - Indicador de status: `● Disponível` com pulso luminoso em verde esmeralda.
  - Botão de ação rápida: `Falar Comigo` direcionando para `#contato`.
- **Hero Section:**
  - Avatar circular com ring brilhante e badge flutuante de disponibilidade.
  - Headline direta: *Sistemas completos com atenção a cada detalhe de interface e arquitetura.*
  - Subtítulo focado em valor prático: atuação na intersecção entre código organizado e interfaces fluidas.
  - CTAs Primários: Botão `[Ver Projetos]` e links secundários para GitHub e LinkedIn.
  - Linha de tecnologias de destaque: `PHP 8+`, `PostgreSQL`, `JavaScript`, `CSS Tokens` e `HTML5`.

### Seção 2: Projeto em Destaque (Symo Finance)
- Apresentação em bloco de destaque visual único (Showcase com âncora `#projeto-destaque`):
  - **Coluna Visual:**
    - Alternador de dispositivos: `[ 💻 Desktop ]` | `[ 📱 Mobile ]`.
    - **Modo Desktop:** Mockup com controles de janela estilo Windows (`─`, `□`, `✕`), barra de URL e **Lupa Interativa** com zoom dinâmico (até 1.9x) acompanhando o cursor do mouse.
    - **Modo Mobile:** Frame de smartphone com transição suave de visualização.
    - Badges técnicos contextuais: `Transações Atômicas (ACID)` e `Neon PostgreSQL + SSL`.
  - **Coluna Técnica:**
    - Título: *Symo Finance — Gestão Financeira Pessoal*.
    - Proposta: plataforma web leve em PHP 8 com arquitetura MVC própria, sem frameworks pesados, garantindo consistência transacional e design fluído.
    - Destaques de engenharia: Arquitetura MVC com Front Controller, Integridade Financeira com transações atômicas e Trilha de Auditoria com JSON Diff.
    - Tags de stack: `PHP 8.2+`, `PostgreSQL (Neon)`, `Vercel Serverless`, `Bootstrap 5.3`, `Chart.js` e `GitHub Actions`.
    - Botões de ação: `[ Ver no GitHub ]` e `[ Galeria de Capturas ]`.

### Seção 3: Outros Projetos Reais (Carrossel Horizontal / Slider)
- **Conceito:** Exibição horizontal estilo streaming com 3 cartões visíveis:
  - **Navegação Circular:** Setas de navegação lateral com loop contínuo (ao chegar nas extremidades, retorna para o início ou final).
  - **Drag-to-Scroll:** Arraste livre pelo mouse no desktop com cursor `grab`/`grabbing`, além de suporte nativo a swipe em telas touch.
- **Card 1: Landing Page No Man's Sky (Projeto Real):**
  - Primeiro projeto web temático, desenvolvido com HTML5, CSS3 puro, vídeo em background contínuo e modal interativo em JS Vanilla integrado ao YouTube.
  - Ao clicar na imagem do card, dispara o **Modal Nativo de Detalhes (`<dialog>`)**, apresentando o case com imagem ampla, tecnologias e botões para a página publicada (`Conhecer Página`) e repositório.
- **Card 2: Próximo Projeto (Placeholder):**
  - Espaço reservado com status de *"Em Breve"* e indicação de *"Fases finais de desenvolvimento"*, com tags genéricas de base (`Web`, `HTML`, `CSS`).
- **Card 3: Em Planejamento (Placeholder):**
  - Espaço reservado com status de *"Em Planejamento"*, com tags genéricas (`Software`, `Lógica`, `Backend`).

### Seção 4: Habilidades Técnicas
Organização em 4 frentes modulares com visão direta por áreas (`VISÃO POR ÁREAS`):
1. **Front-end & UX Craft:** Design Systems com CSS Tokens, HTML5, layouts responsivos, micro-interações e acessibilidade (WCAG).
2. **Back-end & Arquitetura:** PHP 8+, Arquitetura MVC própria, Front Controller, roteamento HTTP, PDO e fundamentos de REST APIs.
3. **Bancos de Dados & ACID:** PostgreSQL (Neon Serverless), MySQL, Transações Atômicas (ACID), Modelagem Relacional e controle de migrações.
4. **DevOps, Nuvem & Tooling:** Vercel (Serverless Deployments), Vercel Blob Storage, Git & GitHub, e GitHub Actions (automação e seeds).

### Seção 5: Rodapé & Contato
- Card de contato com chamada amigável (*"Iniciar uma conversa"* e *"Vamos construir algo memorável juntos?"*).
- Subtítulo honesto: *"Disponível para novos projetos de software, oportunidades de desenvolvimento e colaboração técnica."*
- Ações de e-mail duplas:
  - **Caixa de cópia em 1 clique** com feedback visual (`"Copiado!"`).
  - **Botão de envio direto** via protocolo `mailto:`.
- Canais diretos: GitHub, LinkedIn e WhatsApp (+55 47 99639-1369).
- Rodapé com créditos técnicos e badge profissional com ícone de código: `Software Dev`.

---

## 3. Interatividades Implementadas & Próximos Ciclos

* **Interatividades Ativas e Validadas:**
  * **Device Switcher (Symo Finance):** Toggle entre Desktop e Mobile com transição fluida.
  * **Lupa Interativa (Mockup Desktop):** Zoom óptico dinâmico (1.9x) guiado pelas coordenadas do mouse.
  * **Carrossel Circular com Arraste:** Rolagem contínua com setas infinitas e suporte completo a drag-to-scroll.
  * **Modal Nativo de Detalhes de Projeto (`<dialog>`):** Top-layer nativo com isolamento de acessibilidade e light-dismiss.
  * **Cópia de E-mail em 1 Clique:** Copia o endereço `shxsaimondev@gmail.com` com feedback temporário.
* **Evoluções Futuras (Backlog Opcional):**
  * Seletor de perspectiva no Hero (Visão Geral vs Visão Técnica).
  * Seletor de acentos de cor ou temas secundários.

---

## 4. Design Tokens Consolidados (Obsidian Kinetic)

O tema unificado do portfólio baseia-se em contrastes profundos, superfícies escuras com leve nuance berinjela e acentos elétricos em violeta:

* **Superfícies & Fundo:**
  * Canvas de Fundo: `#0A090D` (Obsidian profundo)
  * Container / Cards (Glassmorphism): `rgba(20, 18, 26, 0.72)` com `backdrop-filter: blur(16px)`
  * Container Elevado: `rgba(28, 24, 38, 0.85)` com `backdrop-filter: blur(20px)`
  * Bordas Padrão: `rgba(255, 255, 255, 0.08)`
* **Tipografia & Textos:**
  * Texto Primário: `#F4F0EA` (Ice Warm — alta legibilidade sem estresse visual)
  * Texto Secundário: `#9C93AB` (Lavanda acinzentado)
* **Acentos & Iluminação:**
  * Primária: `#6F00FF` (Electric Violet)
  * Secundária: `#EFB0FF` (Light Orchid)
  * Terciária / Destaques: `#D0BCFF` (Lavanda suave)

---

## 5. Tipografia & Formas

* **Famílias Tipográficas:**
  * **Display & Corpo de Texto:** `Plus Jakarta Sans` (Google Fonts), pesos 400, 600, 700 e 800.
  * **Dados Técnicos, Tags & Código:** `JetBrains Mono` (Google Fonts), peso 500 / 600.
* **Bordas Arredondadas (Radius):**
  * Botões e Badges: `50px` (estilo pílula suave).
  * Cards e Containers: `16px` a `24px`.
  * Modais e Mockup Frames: `20px` a `32px`.

# Contexto e Diretrizes para Agentes de IA — Portfólio Pessoal

Este documento estabelece as regras de conduta técnica, governança de código, restrições de terminal e padrões de qualidade obrigatórios para qualquer agente de Inteligência Artificial atuando neste repositório.

---

## 1. Missão do Projeto & Identidade

* **Proprietário:** Saimon Furigo (`@Shxsaimon`).
* **Objetivo:** Portfólio pessoal e vitrine de engenharia de software focado em demonstrar competências de **Desenvolvedor de Software & UX/UI**, unindo sensibilidade estética em interfaces a sistemas resilientes de ponta a ponta.
* **Projetos Principais:**
  * **Symo Finance (Destaque Principal):** Plataforma de gestão financeira pessoal em PHP 8 com arquitetura MVC própria, transações atômicas (ACID), PostgreSQL no Neon (PgBouncer/SSL) e Vercel Serverless.
  * **Landing Page No Man's Sky (Carrossel):** Primeiro projeto web temático (HTML5, CSS3 puro, JS Vanilla com vídeo contínuo em background e modal integrado ao YouTube).
* **Guia Visual Vinculante:** [`DESIGN.md`](DESIGN.md) (Tema *Obsidian Kinetic*).
* **Especificação Funcional Vinculante:** [`DESIGN_SPEC.md`](DESIGN_SPEC.md).

---

## 2. Governança de Terminal & Protocolo Rígido de Git

### 2.1. Regra de Ouro de Commits e Pushes
* **NUNCA execute `git commit` ou `git push` de forma autônoma ou silenciosa.**
* O versionamento oficial e publicação no repositório remoto são de controle estritamente manual do usuário.
* **Exceção única:** O agente **SÓ PODE** executar `git commit` e/ou `git push` se o usuário solicitar expressamente na mensagem (ex: *"pode commitar"* ou *"suba isso pro github"*).

### 2.2. Comandos de Leitura Permitidos
* O agente tem permissão total para executar comandos seguros de inspeção local a qualquer momento, tais como:
  * `git status` (verificar arquivos modificados ou não rastreados).
  * `git diff` (verificar alterações exatas no código).
  * `git log` (consultar histórico recente).

### 2.3. Execução de Servidores e Processos Locais
* O agente tem permissão para iniciar servidores locais temporários para teste e validação (ex: `php -S localhost:PORT` ou servidores Node) quando necessário para verificar o comportamento da aplicação.

---

## 3. Gestão de Dependências e Bibliotecas

* **Padrão:** O projeto prioriza leveza máxima, carregamento instantâneo e ausência de *framework lock-in* (HTML5, CSS com tokens nativos e JavaScript Vanilla).
* **Novas Ferramentas:** O agente é livre para sugerir bibliotecas (ícones, animações, utilitários ou bundlers) que simplifiquem o desenvolvimento, mas **NUNCA deve instalar pacotes npm ou injetar CDNs externas sem antes consultar e obter a aprovação explícita do usuário**.

---

## 4. Padrões de Código & Design System

### 4.1. Fidelidade aos Tokens do Design System
* Todas as cores, tipografias, sombras e raios de borda devem seguir estritamente o [`DESIGN.md`](DESIGN.md) e [`css/tokens.css`](css/tokens.css).
* **Evitar estilos soltos/arbitrários:** Caso seja necessário criar uma nova cor, tamanho ou variação visual não prevista, o agente deve comunicar ao usuário e propor a criação de um **novo token padronizado** em vez de deixar regras CSS soltas ou hardcoded.

### 4.2. Idioma e Nomenclatura
* **Comunicação no chat, documentação e comentários no código:** Estritamente em **Português do Brasil (PT-BR)**.
* **Mensagens de commit (quando solicitadas pelo usuário):** Em Português do Brasil, seguindo o padrão Conventional Commits (ex: `feat: ...`, `fix: ...`, `style: ...`, `docs: ...`).
* **Identificadores de código (variáveis, IDs, classes CSS):** Permitido o uso de inglês técnico padronizado ou português fluído.

---

## 5. Princípio da Verdade Técnica (Anti-Alucinação)

* **Rigor Máximo:** É terminantemente proibido inventar tecnologias, ferramentas, frameworks, métricas de desempenho ou experiências profissionais fictícias no portfólio.
* **Dados Faltantes:** Caso falte informação sobre um projeto ou stack, o agente deve obrigatoriamente questionar o usuário ou utilizar placeholders explícitos (ex: cards *"Em Breve"* com status *"Em planejamento"*).

---

## 6. Sincronização Condicional de Documentação

* O agente deve atualizar a documentação técnica ([`DESIGN_SPEC.md`](DESIGN_SPEC.md) ou [`README.md`](README.md)) **SE, E SOMENTE SE**, a alteração de código realizada mudar o funcionamento, a estrutura de seções ou o comportamento do portfólio de modo que a documentação fique incoerente.
* Não fazer alterações cosméticas desnecessárias na documentação.

---

## 7. Acessibilidade (WCAG) & Semântica Web

* **HTML Semântico:** Utilizar as tags estruturais corretas (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`). Proibido o uso indiscriminado de `<div>` para elementos que possuem tag semântica nativa.
* **Imagens:** Todas as tags `<img>` informativas devem conter o atributo `alt` com descrição real e clara do conteúdo visual. Imagens puramente decorativas (flares, gradientes de fundo) devem possuir `aria-hidden="true"`.
* **Acessibilidade Interativa (a11y):**
  * Botões sem texto visível (ex: botões com apenas ícones no carrossel) devem conter obrigatoriamente `aria-label` descritivo.
  * Garantir contraste de texto legível sobre superfícies escuras.
  * Preservar estados visíveis de foco de teclado (`focus-visible`).

---

## 8. Protocolo de Validação & Formato de Entrega

### 8.1. Checklist de Validação Local (Antes de Concluir)
Antes de declarar qualquer tarefa finalizada, o agente deve verificar:
1. Se todos os caminhos relativos de imagens e scripts existem no disco e estão íntegros.
2. Se as interatividades principais permanecem operacionais (Device Switcher com Lupa, Carrossel circular com drag-to-scroll, Modal de detalhes e Cópia de e-mail).
3. Se a responsividade para dispositivos móveis está preservada (sem vazamento horizontal de tela).

### 8.2. Formato Obrigatório da Resposta no Chat
Ao finalizar qualquer alteração de código, a resposta ao usuário deve conter:
1. **Resumo conciso** em tópicos do que foi modificado ou criado.
2. **Instruções de teste:** Como o usuário pode visualizar ou validar a mudança localmente.
3. **Sugestão de comando de commit:** Uma linha pronta de comando Git formatada para que o usuário, caso aprove, possa apenas copiar e rodar no seu terminal (ex: `git add . ; git commit -m "feat: ..."`).

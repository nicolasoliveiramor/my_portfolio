## Objetivo
Reformular completamente o portfolio para ficar mais moderno, legível e fácil de navegar (mobile-first), mantendo o stack atual (React + Vite + TS + styled-components).

## O que vou entregar
- Landing page em seções (Início/Sobre/Skills/Projetos/Contato) com header fixo e navegação por âncoras.
- Projetos com filtros visíveis (Todos/Frontend/Fullstack), cards mais consistentes e melhores estados de loading/erro.
- Componentes de UI revisados (link vs botão, foco, teclado) e estilos globais/tokens modernizados.

## Mudanças principais (passo a passo)
1. **Base visual moderna**
   - Ajustar [GlobalStyle](file:///c:/Users/nicol/OneDrive/%C3%81rea%20de%20Trabalho/CursosEBAC/Portfolio/meu-portfolio/src/styles.ts): tipografia, container com max-width/padding, remover regras globais agressivas (`color` e `overflow-x` em `*`).
   - Evoluir tokens (cores, espaçamento, radius, shadow) para consistência.

2. **Arquitetura da Home em seções**
   - Refatorar [Home](file:///c:/Users/nicol/OneDrive/%C3%81rea%20de%20Trabalho/CursosEBAC/Portfolio/meu-portfolio/src/Home/index.tsx) para componentes de seção (Hero/About/Skills/Projects/Contact), reduzindo mistura de layout + lógica.

3. **Acessibilidade e semântica**
   - Corrigir padrão “botão com a dentro” (links viram `a` estilizado; botões ficam para ações).
   - Garantir foco visível, navegação por teclado e `aria-*` quando necessário.

4. **Projetos com UX melhor**
   - Substituir o toggle atual por navegação (CTA “Ver projetos” rola para a seção).
   - Implementar filtros reais no UI e estados: skeleton/spinner acessível + erro com retry.
   - Simplificar estado de UI (preferência por state local para filtros/toggles; manter RTK Query para dados).

5. **Polimento final**
   - Garantir carregamento de fonte no `index.html`.
   - Ajustes responsivos (grid, tipografia, espaçamento) e microinterações.

## Verificação
- Rodar lint/build.
- Checar responsividade, teclado, links externos e download do CV.

Ao confirmar este plano, eu inicio a implementação imediatamente e valido o resultado no preview.
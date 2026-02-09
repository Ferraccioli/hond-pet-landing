# Hond Pet - Projeto de Landing Page

## Registro de Implementações

### PROMPT [1]: Ajuste das imagens em Mission
- Imagens `dogWalk` e `petResting` ajustadas para formato `aspect-square` e `object-contain`.
- Remoção de backgrounds de cores sólidas.
- Correção de import não utilizado no Hero.

### PROMPT [2]: Header Responsivo
- Implementação de menu hambúrguer com `framer-motion`.
- Overlay mobile com navegação completa.
- Botão CTA adaptado para mobile.

### PROMPT [3]: Imagens em Features
- Ícones do Lucide substituídos por imagens com placeholders.
- Posteriormente substituídos por ativos reais: `GPS.png`, `Book.png`, `Paw.png`.
- Correção de case sensitivity para deploy na Vercel (gps.png -> GPS.png).

### PROMPT [4]: Deploy e Ambiente
- Conexão com GitHub e Push para branch `main`.
- Adição do Git ao PATH do usuário.
- Correção do erro de build na Vercel via ajuste de casing.

### PROMPT [5]: Footer Responsivo
- Layout alterado de `flex` para `grid` responsivo (1 col mobile, 3 tablet, 4 desktop).

### PROMPT [6]: Página de Contato
- Layout alterado para coluna única permanente.
- Container central reduzido para `max-w-[800px]` para melhor leitura.

### PROMPT [7]: Favicon
- Criação de `favicon.svg` roxo baseado na `pata.svg`.

### PROMPT [8]: Ajustes na Seção Missão
- Inversão do layout: Imagens para a direita, Texto para a esquerda.
- Ajuste das direções das animações de FadeIn.
- Refatoração completa conforme Figma: Gap de 80px, texto atualizado e imagens com `object-cover`.
- Ajuste final de dimensões das imagens para 320x320px com `rounded-[24px]`.

### PROMPT [9]: Atualização do CTA do Header
- Alteração do texto de "Baixar App" para "Entrar na waitlist".
- Redirecionamento configurado para a página de Contato (`/contact`).
- Adicionadas sombras (`shadow-2xl`) às imagens da seção Missão conforme última edição manual do usuário.
### PROMPT [10]: Refatoração de Botão (Experience Section)
- Substituição da tag `<a>` bruta pelo componente `Button` da UI e `Link` do react-router-dom para consistência visual e de navegação.

### PROMPT [11]: Modal de Waitlist

- Implementação de um modal global (via Context API) para anúncio de lançamento do app.
- Design fiel ao Figma (Node `20:542`) com overlay escurecido, animações de entrada/saída (`framer-motion`) e data de lançamento (2 de abril de 2026).
- Todos os botões "Baixar App" (Header, Hero, CTASection e Footer) agora disparam este modal.
- O botão interno do modal redireciona para a página de Contato.

### PROMPT [12]: Seções Pet Menu e Viagens (Página Sobre)
- Implementação da seção **Pet Menu**: layout em 3 colunas (desktop) com imagem centralizada e itens de menu com alinhamento lateral alternado.
- Responsividade: Em mobile, os itens do Pet Menu são centralizados na tela (mx-auto) com texto alinhados à esquerda.
- Implementação da seção **Viagens**: layout em 2 colunas com lista de benefícios e imagem com efeito decorativo de blur.
- Imagens otimizadas com `object-cover` e arredondamentos de `40px` conforme Figma.
- Cores e tipografia seguindo rigorosamente o design system (`primary`, `dark`, `muted`).
- **Animações de entrada**: Adição de `framer-motion` nas seções Pet Menu e Viagens (fade-in, slide-up e scale) para melhorar a interatividade com o scroll (`whileInView`).

### PROMPT [14]: Conexão de Links do Footer
- Atualização do componente `Footer` para conectar os "Links Rápidos" às suas respectivas páginas e seções.
- Seções **Pet Menu** (`#pet-menu`) e **Viagens** (`#viagens`) agora possuem IDs e são acessíveis via hash links na página Sobre.
- O link "Seja um Parceiro" foi conectado à página de Contato (`/contact`).

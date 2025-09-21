# Mente em Equilíbrio 

Aplicação web feita para apoiar jovens no cuidado da saúde mental. Reúne exercícios interativos, check-in emocional, frases SOS, vídeos do YouTube e locais de apoio, em uma interface simples e acolhedora.

Aviso importante: este projeto é educacional. Não substitui acompanhamento médico/psicológico. Em caso de crise, procure ajuda profissional (CVV 188, SAMU 192 ou hospital mais próximo).

## Funcionalidades

- **Exercícios de Respiração** — componente BreathingCircle com guia visual.

- **Check-in Emocional** — componente CheckIn (escala + feedback).

- **SOS** — componente SOSCard com frases rápidas de apoio e orientação.

- **Vídeos Educativos** — página Videos com player do YouTube (thumb + play inline).

- **Locais de Apoio** — componente/página MapOrList para achar serviços na cidade.

- **Navegação** — Navbar + rotas com react-router-dom.

## Stack

- React 19 + TypeScript

- Vite (dev server e build)

- Tailwind CSS (estilos utilitários)

- shadcn/ui (Radix UI) — botões, cards, badges, tabs, tooltips, toasts

- Framer Motion (animações)

- React Router DOM (rotas)

- Lucide (ícones)

- Sonner (toasts)

## Estrutura do Projeto
```bash
bem-estar-jovem/
├── src/
│   ├── assets/                # Imagens e mídias
│   ├── components/            # Componentes reutilizáveis
│   │   ├── ui/                # componentes shadcn/ui gerados
│   │   ├── BreathingCircle.tsx
│   │   ├── Button.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── Layout.tsx
│   │   ├── MapOrList.tsx
│   │   ├── MoodTracker.tsx
│   │   ├── Navbar.tsx
│   │   ├── SOSCard.tsx
│   │   └── VideoPlayer.tsx
│   ├── data/                  # Dados estáticos (frases SOS, locais de ajuda)
│   ├── hooks/                 # Hooks (ex.: useTTS)
│   ├── lib/                   # utilitários (ex.: cn/twMerge)
│   ├── pages/                 # Páginas
│   │   ├── Ajuda.tsx
│   │   ├── Ferramentas.tsx
│   │   ├── Index.tsx
│   │   ├── Info.tsx
│   │   ├── NotFound.tsx
│   │   └── Videos.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── package.json
└── README.md
```
## Rotas Principais
```bash
/ — Home

/info — Informações

/ferramentas — Exercícios/recursos

/videos — Vídeos educativos (YouTube)

/ajuda — Contatos e orientações

* — NotFound
```
## Como rodar localmente

Pré-requisitos: Node.js 18+ e npm (ou pnpm/yarn)
```bash
# instalar deps
npm install

# ambiente de desenvolvimento
npm run dev   # http://localhost:5173

# build de produção
npm run build

# servir build localmente (opcional)
npm run preview


Se aparecer erro de alias @/…, confirme seu vite.config.ts com:

resolve: { alias: { '@': new URL('./src', import.meta.url).pathname } }


e no tsconfig.json:

"paths": { "@/*": ["src/*"] }
```


## Acessibilidade & UX

Textos claros, contraste alto e navegação simples.

Componentes baseados em Radix (foco/teclado).

Conteúdos sensíveis com avisos e canais de ajuda.

## Contexto e Público-alvo

Projeto de extensão com foco em saúde mental de jovens (ex.: Lar São Domingos – Maceió/AL).
Código aberto para incentivar adaptações em escolas, ONGs e iniciativas locais.

Sugestões e melhorias são bem-vindas!

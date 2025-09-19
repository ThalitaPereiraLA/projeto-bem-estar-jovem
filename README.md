# Bem Estar Jovem 

## Descrição do Projeto

O Bem-Estar Jovem é uma aplicação web voltada para apoiar jovens em geral no cuidado com a saúde mental.
A plataforma reúne ferramentas interativas, frases de apoio, vídeos educativos e locais de ajuda, em uma interface acolhedora.

## Características Principais

- **Exercícios Interativos**: ferramentas de respiração e check-in emocional.

- **Frases de Apoio (SOS)**: mensagens motivacionais em momentos de crise.

- **Mapa de Apoio**: listagem e visualização de locais de suporte psicológico.

- **Vídeos Educativos**: conteúdos voltados ao bem-estar emocional.


## Tecnologias Utilizadas

- **React 19**: biblioteca para construção da interface

- **TypeScript**: linguagem principal

- **Vite**: build tool e servidor de desenvolvimento

- **TailwindCSS 4**: framework CSS para estilos rápidos e responsivos

- **Framer Motion**: animações fluidas e performáticas

- **React Router DOM**: navegação entre páginas

- **React Hook Form**: gerenciamento de formulários

- **Leaflet + React Leaflet** : mapas interativos

- **Headless UI**: componentes acessíveis e estilizados

- **clsx**: utilitário para manipulação de classes CSS

## Configuração do Ambiente

### Pré-requisitos

- Node.js 18+
- npm ou yarn

## Instalação das Dependências

# Clonar o repositório

```bash
git clone <repository-url>
cd bem-estar-jovem

### Instalar dependências
npm install

### Executar em Desenvolvimento
npm run dev
```

## Aplicação rodará em:
👉 http://localhost:5173

## Estrutura do Projeto
```
bem-estar-jovem/
├── src/
│   ├── assets/             # Imagens, ícones, mídias
│   ├── components/         # Componentes reutilizáveis
│   │   ├── Header.tsx
│   │   ├── HelpButton.tsx
│   │   ├── BreathingCircle.tsx
│   │   ├── CheckIn.tsx
│   │   ├── SOSCard.tsx
│   │   ├── VideoPlayer.tsx
│   │   └── MapOrList.tsx
│   ├── pages/              # Páginas principais
│   │   ├── Home.tsx
│   │   ├── Info.tsx
│   │   ├── Tools.tsx
│   │   ├── Videos.tsx
│   │   └── HelpList.tsx
│   ├── hooks/              # Hooks customizados
│   │   └── useTTS.ts
│   ├── data/               # Dados estáticos
│   │   ├── sosPhrases.ts
│   │   └── helpLocations.ts
│   ├── main.tsx            # Ponto de entrada da aplicação
│   └── index.css           # Estilos globais (Tailwind)
├── package.json            # Dependências e scripts
└── README.md               # Este arquivo
```

## Funcionalidades Principais
- # Exercícios de Respiração

Um círculo animado guia o usuário em exercícios de respiração para relaxamento.

- # Check-in Emocional

Permite que o jovem registre como está se sentindo e visualize seu progresso.

- # Botão SOS

Exibe frases motivacionais de apoio imediato e informações de contato de ajuda.

- # Vídeos Educativos

Seção com vídeos explicativos sobre saúde mental e bem-estar.

- # Locais de Apoio

Listagem e visualização de locais onde o usuário pode buscar ajuda.

## Considerações Técnicas
# Performance

- Vite para build rápido e leve

- Tailwind para estilização otimizada

- Componentização para reuso e manutenção do código

- Escalabilidade

- Estrutura modular com separação clara de responsabilidades

- Suporte a novos componentes e páginas com facilidade


Licença

Este projeto foi desenvolvido para fins acadêmicos e de demonstração, com foco em saúde mental e bem-estar de jovens do Lar São Domingos em Maceió/AL em matéria de Extensão.

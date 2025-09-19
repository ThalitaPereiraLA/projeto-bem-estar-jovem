/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "breathe-in": {
          "0%": { 
            transform: "scale(1)", 
            background: "hsl(var(--breathe-inspire))", // Cor inicial
          },
          "100%": { 
            transform: "scale(1.15)", 
            background: "hsl(var(--breathe-hold-light))", // Cor final
          },
        },
        "breathe-out": {
          "0%": { 
            transform: "scale(1.15)", 
            background: "hsl(var(--breathe-hold-light))", // Cor inicial
          },
          "100%": { 
            transform: "scale(0.85)", 
            background: "hsl(var(--breathe-expire))", // Cor final
          },
        },
        "hold": {
          "0%": { 
            background: "hsl(var(--breathe-hold-light))", // Cor inicial
            transform: "scale(1)" // Tamanho normal
          },
          "100%": {
            background: "hsl(var(--breathe-hold-deep))", // Cor mais escura para o hold
            transform: "scale(1.05)" // Tamanho ligeiramente maior
          },
        },
        // Adicionando a animação de flutuação
        "float-up": {
          "0%": {
            transform: "translateY(0)", // Início na posição normal
          },
          "50%": {
            transform: "translateY(-10px)", // Move um pouco para cima
          },
          "100%": {
            transform: "translateY(0)", // Volta à posição inicial
          },
        },
      },
      animation: {
        "breathe-in": "breathe-in 4s ease-in-out",
        "breathe-out": "breathe-out 4s ease-in-out",
        "hold": "hold 4s ease-in-out", // Animação para segure
        // Adicionando a animação de flutuação
        "float-up": "float-up 2s ease-in-out infinite", // Animação contínua
      },
    },
  },
  plugins: [],
}

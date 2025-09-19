import { useState } from 'react';
import phrases from '../data/sosPhrases';

const bubbleColors = {
  amarelo: 'bg-yellow-300', // Calma
  laranja: 'bg-orange-400', // Motivação
  azul: 'bg-blue-400', // Acolhimento
};

export default function SOSCard() {
  const [i, setI] = useState(Math.floor(Math.random() * phrases.length));

  // Definindo uma cor aleatória para a bolha com base na frase
  const getBubbleColor = (phrase: string) => {
    if (phrase.includes('calma')) return bubbleColors.amarelo;
    if (phrase.includes('motivação')) return bubbleColors.laranja;
    if (phrase.includes('acolhimento')) return bubbleColors.azul;
    return 'bg-gray-200'; // Cor padrão
  };

  const currentPhrase = phrases[i];
  const bubbleColor = getBubbleColor(currentPhrase);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div
        className={`p-6 rounded-lg border ${bubbleColor} shadow-xl max-w-xs w-full text-center transform transition-all animate-pulse`}
        style={{
          animationDuration: '2s',
          animationName: 'floatUp', // Animação de movimento
        }}
      >
        <p className="text-sm font-medium text-white">{currentPhrase}</p>
        <button
          onClick={() => setI(Math.floor(Math.random() * phrases.length))}
          className="mt-4 px-4 py-2 rounded bg-white text-primary text-sm font-semibold transition-colors hover:bg-primary hover:text-white"
        >
          Nova frase
        </button>
      </div>
    </div>
  );
}

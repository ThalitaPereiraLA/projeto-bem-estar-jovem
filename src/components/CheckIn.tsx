import { useState } from 'react';

const messages = [
  "Muito mal — procure ajuda",
  "Mal",
  "Mais ou menos",
  "Bem",
  "Muito bem"
];

const suggestions = [
  "Recomendo procurar um profissional de saúde mental.",
  "Tente conversar com alguém em quem confia ou faça uma pausa.",
  "Se puder, tire um tempo para si e pratique atividades que tragam bem-estar.",
  "Parece que as coisas estão indo bem! Continue assim e aproveite o momento!",
  "Você está se sentindo ótimo! Continue cuidando de si!"
];

export default function CheckIn() {
  const [value, setValue] = useState(50);
  const idx = Math.round((value / 100) * (messages.length - 1));

  return (
    <section aria-labelledby="checkin-title" className="flex flex-col items-center justify-center my-4">
      <h3 id="checkin-title" className="text-lg font-semibold mb-2">Check-in: como você está?</h3>
      <input
        type="range"
        min={0}
        max={100}
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        className="w-64 rounded-full appearance-none"   // tire a h-2 (já controlamos no CSS)
        style={{
          background: '#ddd',                  // base cinza
          backgroundImage: 'var(--gradient-inspire)', // gradiente padrão
          backgroundSize: `${value}% 100%`,    // preenche só até o valor
          backgroundRepeat: 'no-repeat',
          borderRadius: '9999px',
        }}
      />
      <p className="mt-2 text-center">{messages[idx]}</p>
      <p className="mt-2 text-center font-semibold">{suggestions[idx]}</p>
    </section>
  );
}

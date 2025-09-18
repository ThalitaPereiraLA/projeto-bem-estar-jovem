import { useState } from 'react';
import phrases from '../data/sosPhrases';

export default function SOSCard() {
  const [i, setI] = useState(Math.floor(Math.random() * phrases.length));
  return (
    <div className="p-4 rounded-lg border bg-white shadow-sm">
      <p className="text-lg">{phrases[i]}</p>
      <button
        onClick={() => setI(Math.floor(Math.random() * phrases.length))}
        className="mt-3 px-3 py-2 rounded bg-primary text-white"
      >
        Nova frase
      </button>
    </div>
  );
}

import { useState } from 'react';

const messages = [
  "Muito mal — procure ajuda",
  "Mal",
  "Mais ou menos",
  "Bem",
  "Muito bem"
];

export default function CheckIn() {
  const [value, setValue] = useState(50);
  const idx = Math.round((value / 100) * (messages.length - 1));

  return (
    <section aria-labelledby="checkin-title" className="my-4">
      <h3 id="checkin-title" className="text-lg font-semibold">Check-in: como você está?</h3>
      <input
        type="range"
        min={0}
        max={100}
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        className="w-full"
      />
      <p className="mt-2">{messages[idx]}</p>
    </section>
  );
}

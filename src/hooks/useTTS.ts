export function useTTS() {
  const speak = (text: string) => {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = 'pt-BR';
    window.speechSynthesis.speak(u);
  };
  const stop = () => window.speechSynthesis?.cancel();
  return { speak, stop };
}

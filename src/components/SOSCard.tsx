import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiRefreshCw, FiHeart } from "react-icons/fi";
import rawPhrases from "../data/sosPhrases";

/** Tipo padrão das frases */
export type SOSPhrase = {
  text: string;
  type: "calma" | "motivação" | "acolhimento";
};

/** O arquivo de dados pode exportar string[] ou SOSPhrase[] */
type RawPhrase = string | SOSPhrase;

/** Type guard para diferenciar string de objeto tipado */
function isSOSPhrase(p: RawPhrase): p is SOSPhrase {
  return typeof p !== "string" && typeof p.text === "string" && typeof p.type === "string";
}

/** Detecta o tipo quando o dado vier como string simples */
function detectType(s: string): SOSPhrase["type"] {
  const t = s.toLowerCase();
  if (t.includes("motivação") || t.includes("motiva")) return "motivação";
  if (t.includes("acolhimento") || t.includes("acolh")) return "acolhimento";
  return "calma";
}

/** Normaliza o array vindo do arquivo de dados */
function normalizePhrases(data: RawPhrase[]): SOSPhrase[] {
  return data.map((p) => (isSOSPhrase(p) ? p : { text: p, type: detectType(p) }));
}

/** Mapeia estilos por tipo usando suas variáveis CSS globais */
function getCardStyles(type: SOSPhrase["type"]) {
  switch (type) {
    case "calma":
      return {
        bg: "var(--gradient-calm, linear-gradient(135deg, hsl(167 85% 65%), hsl(190 95% 70%)))",
        text: "var(--sos-calm-foreground, #fff)",
        icon: "🌸",
        glow: "rgba(20, 184, 166, 0.35)",
      };
    case "motivação":
      return {
        bg: "var(--gradient-motivation, linear-gradient(135deg, hsl(20 95% 60%), hsl(35 95% 60%)))",
        text: "var(--sos-motivation-foreground, #fff)",
        icon: "🔥",
        glow: "rgba(245, 158, 11, 0.35)",
      };
    case "acolhimento":
      return {
        bg: "var(--gradient-comfort, linear-gradient(135deg, hsl(224 70% 60%), hsl(250 85% 68%)))",
        text: "var(--sos-comfort-foreground, #fff)",
        icon: "💙",
        glow: "rgba(99, 102, 241, 0.35)",
      };
  }
}

export default function SOSCard() {
  // Normaliza os dados (string[] ou SOSPhrase[]) em SOSPhrase[]
  const phrases: SOSPhrase[] = useMemo(
    () => normalizePhrases(rawPhrases as RawPhrase[]),
    []
  );

  const [index, setIndex] = useState<number>(() =>
    Math.floor(Math.random() * phrases.length)
  );
  const [animating, setAnimating] = useState<boolean>(false);

  const current = phrases[index];
  const styles = getCardStyles(current.type);

  const next = () => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      let j = index;
      while (j === index) j = Math.floor(Math.random() * phrases.length);
      setIndex(j);
      setAnimating(false);
    }, 220);
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        {/* Header (fora do card) */}
        <motion.div
          className="text-center mb-6"
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
        >
          <div className="flex items-center justify-center gap-2 mb-1">
            <h1 className="text-2xl font-bold text-white">SOS Emocional</h1>
          </div>
          <p className="text-sm text-white/70">
            Palavras de apoio quando você mais precisa
          </p>
        </motion.div>

        {/* CARD QUADRADO */}
        <motion.div
          className="
            relative mx-auto
            rounded-2xl overflow-hidden
            border border-white/10 backdrop-blur-sm
            shadow-[0_20px_40px_rgba(0,0,0,0.35)]
            flex flex-col items-center justify-center text-center
            p-4
            !w-[360px] !h-[200px]    /* força quadrado no Tailwind */
          "
          style={{
            width: 300,              // reforço inline
            height: 300,             // reforço inline
            background: styles.bg,
            boxShadow: `0 20px 40px ${styles.glow}`,
          }}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: animating ? 0.97 : 1 }}
          transition={{ duration: 0.35 }}
          whileHover={{ scale: 1.02 }}
        >
          {/* Emoji/Ícone */}
          <motion.div
            className="text-3xl mb-2 select-none"
            animate={{ rotate: [0, 8, -8, 0] }}
            transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
          >
            {styles.icon}
          </motion.div>

          {/* Frase */}
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={index}
              className="mb-3"
              style={{ color: styles.text }}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 5 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.28 }}
            >
              <span className="text-sm font-medium leading-snug">
                “{current.text}”
              </span>
            </motion.blockquote>
          </AnimatePresence>

          {/* Tag do tipo */}
          <span
            className="px-2 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wide bg-white/20 backdrop-blur-sm mb-3"
            style={{ color: styles.text }}
          >
            {current.type}
          </span>

          {/* Botão compacto */}
          <motion.button
            onClick={next}
            disabled={animating}
            className="px-3 py-1 rounded-md text-xs font-semibold inline-flex items-center gap-1
                       bg-white/90 text-gray-900 hover:bg-white shadow-md transition-all
                       disabled:opacity-50 disabled:cursor-not-allowed"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
          >
            <motion.span
              animate={{ rotate: animating ? 360 : 5 }}
              transition={{ duration: 0.5 }}
            >
              <FiRefreshCw className="w-3 h-3" />
            </motion.span>
            Nova
          </motion.button>
        </motion.div>

        {/* Rodapé de apoio */}
        <motion.div
          className="text-center mt-6 text-xs text-white/70"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Se você está em crise, procure ajuda profissional.
          <br />
          CVV: 188 • Disponível 24h
        </motion.div>
      </div>
    </div>
  );
}

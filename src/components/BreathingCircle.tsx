import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from './Button';
import { Play, Pause } from "lucide-react";

const steps = [
  { 
    label: "Inspire", 
    description: "Respire fundo",
    gradient: "var(--gradient-inspire)",
    scale: 1.15, 
    duration: 4,
    animation: "breathe-in"
  },
  { 
    label: "Segure", 
    description: "Mantenha o ar",
    gradient: "var(--gradient-hold-light)",
    scale: 1.15, 
    duration: 4,
    animation: "pulse-gentle"
  },
  { 
    label: "Expire", 
    description: "Solte o ar devagar",
    gradient: "var(--gradient-expire)",
    scale: 0.85, 
    duration: 4,
    animation: "breathe-out"
  },
  { 
    label: "Segure", 
    description: "Pause e relaxe",
    gradient: "var(--gradient-hold-deep)",
    scale: 0.85, 
    duration: 4,
    animation: "pulse-gentle"
  },
];

export default function BreathingCircle() {
  const [step, setStep] = useState(0);
  const [running, setRunning] = useState(false);
  const [timeLeft, setTimeLeft] = useState(steps[0].duration);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (running) {
      // Timer for the current step
      timeoutRef.current = setTimeout(() => {
        setStep((prev) => (prev + 1) % steps.length);
        setTimeLeft(steps[(step + 1) % steps.length].duration);
      }, steps[step].duration * 1000);

      // Countdown interval
      intervalRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 0.1) {
            return steps[(step + 1) % steps.length].duration;
          }
          return prev - 0.1;
        });
      }, 100);
    }

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [step, running]);

  const handleStart = () => {
    setRunning(true);
    setStep(0);
    setTimeLeft(steps[0].duration);
  };

  const handleStop = () => {
    setRunning(false);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  const progress = ((steps[step].duration - timeLeft) / steps[step].duration) * 100;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 w-full">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-emerald-500/10 to-teal-500/10 blur-3xl animate-float" />
        <div className="absolute bottom-2 [10%] -translate-x-1/2 w-96 h-96 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Progress Ring */}
        <div className="relative mb-6">
          <svg className="w-96 h-96 transform -rotate-90" viewBox="0 0 100 100">
            {/* Background Circle */}
            <circle
              cx="50"
              cy="50"
              r="30"
              fill="none"
              stroke="hsl(var(--border))"
              strokeWidth="0.5"
              opacity="0.3"
            />
            {/* Progress Circle */}
            <circle
              cx="50"
              cy="50"
              r="30"
              fill="none"
              stroke="url(#progressGradient)"
              strokeWidth="1"
              strokeLinecap="round"
              strokeDasharray={`${2 * Math.PI * 45}`}
              strokeDashoffset={`${2 * Math.PI * 45 * (1 - progress / 100)}`}
              opacity="0.8"
              className="transition-all duration-100 ease-out"
            />
            <defs>
              <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="hsl(var(--breathe-inspire))" />
                <stop offset="50%" stopColor="hsl(var(--breathe-expire))" />
                <stop offset="100%" stopColor="hsl(var(--breathe-hold-deep))" />
              </linearGradient>
            </defs>
          </svg>

          {/* Breathing Circle */}
          <div className="absolute inset-0 flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
          className="w-80 h-80 mt-20 rounded-full flex items-center justify-center breathe-circle relative overflow-hidden"
          style={{
            background: steps[step].gradient, // Muda a cor de fundo conforme a fase
          }}
          initial={{
            scale: 0.9,  // Tamanho inicial
            opacity: 1,  // Mantém a opacidade constante
            filter: "none", // Remover blur, para o círculo não sumir
          }}
          animate={{
            scale: running ? steps[step].scale : 1, // Altera o tamanho durante a animação
            opacity: 1,  // Mantém a opacidade sempre 1
            filter: "none", // Garante que o filtro de blur não altere a visibilidade
          }}
          exit={{
            scale: 0.9,  // Tamanho final ao sair da animação
            opacity: 1,  // Mantém a opacidade constante ao sair
            filter: "none", // Sem filtro de blur ao sair
          }}
          transition={{
            duration: running ? steps[step].duration : 0.8,  // Duração da animação
            ease: [0.25, 0.46, 0.45, 0.94],  // Efeito suave na transição
          }}
        >
  {/* Shimmer Effect */}
  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 animate-pulse" />

  {/* Conteúdo dentro do círculo */}
  <div className="flex flex-col items-center justify-center h-full">
    <h2 className="text-4xl font-bold mb-4 breathe-text">
      {steps[step].label}
    </h2>
    <p className="text-lg opacity-90 breathe-text">
      {steps[step].description}
    </p>
    {running && (
      <div className="mt-4 text-2xl font-mono breathe-text">
        {Math.ceil(timeLeft)}s
      </div>
    )}
  </div>
</motion.div>
    </AnimatePresence>
  </div>
</div>


        {/* Instructions */}
        {!running && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8 max-w-md"
          >
            <h1 className="text-3xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
              Exercício de Respiração
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Siga o ritmo do círculo para uma respiração consciente e relaxante. 
              Cada ciclo dura 16 segundos.
            </p>
          </motion.div>
        )}

        {running && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: - 10 }}
            className="text-center mb-6"
          >
            <p className="text-xl text-muted-foreground">
              Etapa {step + 1} de {steps.length}
            </p>
          </motion.div>
        )}

        {/* Controls */}
        <div className="flex gap-1">
          <Button
            onClick={running ? handleStop : handleStart}
            size="lg"
            className={`px-8 py-4 text-lg font-semibold transition-all duration-300 ${
              running 
                ? "bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 shadow-lg shadow-red-500/25" 
                : "bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 shadow-lg shadow-emerald-500/25"
            }`}
          >
            {running ? (
              <>
                <Pause className="w-5 h-5 mr-2" />
                Parar
              </>
            ) : (
              <>
                <Play className="w-5 h-5 mr-2" />
                Iniciar
              </>
            )}
          </Button>
        </div>

        {/* Breathing Guide */}
        {running && (
          <motion.div
            initial={{ opacity: 1, y: 20 }}
            animate={{ opacity: 1, y: 20 }}
            className="mt-12 text-center"
          >
            <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border/50">
              <div className="grid grid-cols-4 gap-6">
                {steps.map((stepItem, index) => (
                  <div
                    key={index}
                    className={`text-center transition-all duration-500 ${
                      index === step 
                        ? "scale-110 opacity-100" 
                        : "scale-90 opacity-50"
                    }`}
                  >
                    <div
                      className="w-12 h-12 rounded-full mx-auto mb-2 flex items-center justify-center text-white font-bold text-sm"
                      style={{ background: stepItem.gradient }}
                    >
                      {index + 1}
                    </div>
                    <p className="text-sm font-medium">{stepItem.label}</p>
                    <p className="text-xs text-muted-foreground">{stepItem.duration}s</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}

import { useState } from 'react';
import { Smile, Frown, Meh, Heart, Sun, Cloud } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Slider } from './ui/slider';

export const MoodTracker = () => {
  const [currentMood, setCurrentMood] = useState<number>(5);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const moodEmojis = ['😢', '😟', '😐', '🙂', '😊', '😄', '🤩', '🥰', '😁', '🤗'];
  const moodLabels = [
    'Muito difícil',
    'Difícil', 
    'Complicado',
    'Ok',
    'Bem', 
    'Muito bem',
    'Ótimo',
    'Incrível',
    'Radiante',
    'Fantástico'
  ];

  const getMoodColor = (mood: number) => {
    if (mood <= 3) return 'text-help';
    if (mood <= 6) return 'text-primary';
    return 'text-wellness';
  };

  const getMoodIcon = (mood: number) => {
    if (mood <= 3) return Cloud;
    if (mood <= 6) return Meh;
    return Sun;
  };

  const getSupportMessage = (mood: number) => {
    if (mood <= 2) {
      return {
        title: 'Você não está sozinho 💙',
        message: 'Dias difíceis fazem parte da vida. Considere conversar com alguém de confiança ou usar nossos exercícios de respiração.',
        suggestions: ['Tente o exercício de respiração', 'Leia uma carta SOS', 'Considere buscar ajuda profissional']
      };
    }
    if (mood <= 4) {
      return {
        title: 'Tudo bem ter dias assim 🤗',
        message: 'Você está sendo corajoso ao reconhecer seus sentimentos. Pequenos passos podem fazer diferença.',
        suggestions: ['Faça uma pausa e respire', 'Pratique autocompaixão', 'Tente uma atividade que gosta']
      };
    }
    if (mood <= 7) {
      return {
        title: 'Você está indo bem! 😊',
        message: 'É ótimo que você esteja se sentindo equilibrado. Continue cuidando de si mesmo.',
        suggestions: ['Mantenha sua rotina saudável', 'Compartilhe momentos bons', 'Pratique gratidão']
      };
    }
    return {
      title: 'Que alegria saber disso! ✨',
      message: 'É maravilhoso que você esteja se sentindo tão bem. Aproveite esse momento e lembre-se dele nos dias difíceis.',
      suggestions: ['Celebre esse momento', 'Guarde essa energia positiva', 'Ajude alguém que precisa']
    };
  };

  const handleSubmit = () => {
    setHasSubmitted(true);
  };

  const MoodIcon = getMoodIcon(currentMood);
  const support = getSupportMessage(currentMood);

  return (
    <Card className="shadow-medium border-0 bg-gradient-soft">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-poppins flex items-center justify-center gap-3">
          <div className="w-8 h-8 bg-gradient-wellness rounded-lg flex items-center justify-center">
            <Heart className="w-4 h-4 text-wellness-foreground" />
          </div>
          Check-in de Humor
        </CardTitle>
        <p className="text-muted-foreground">
          Como você está se sentindo hoje? Não há respostas certas ou erradas.
        </p>
      </CardHeader>
      
      <CardContent className="space-y-8">
        {!hasSubmitted ? (
          <>
            {/* Mood Slider */}
            <div className="space-y-6">
              <div className="text-center">
                <div className="text-6xl mb-4 animate-float">
                  {moodEmojis[currentMood - 1]}
                </div>
                <h3 className={`text-2xl font-semibold ${getMoodColor(currentMood)}`}>
                  {moodLabels[currentMood - 1]}
                </h3>
              </div>

              <div className="space-y-4">
                <Slider
                  value={[currentMood]}
                  onValueChange={([value]) => setCurrentMood(value)}
                  max={10}
                  min={1}
                  step={1}
                  className="w-full"
                />
                
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>Muito difícil</span>
                  <span>Neutro</span>
                  <span>Fantástico</span>
                </div>
              </div>
            </div>

            {/* Visual mood indicator */}
            <div className="flex justify-center">
              <div className={`p-6 rounded-full ${getMoodColor(currentMood)} bg-current/10`}>
                <MoodIcon className={`w-12 h-12 ${getMoodColor(currentMood)}`} />
              </div>
            </div>

            {/* Submit button */}
            <div className="text-center">
              <Button 
                onClick={handleSubmit}
                size="lg"
                className="bg-gradient-wellness hover:shadow-glow transition-all text-black"
                variant="outline"
              >
                Registrar meu humor
              </Button>
            </div>
          </>
        ) : (
          <>
            {/* Success state */}
            <div className="text-center space-y-6 animate-fade-in">
              <div className="text-6xl">{moodEmojis[currentMood - 1]}</div>
              <div className="space-y-4">
                <h3 className="text-2xl font-poppins font-bold text-foreground">
                  {support.title}
                </h3>
                <p className="text-muted-foreground text-lg">
                  {support.message}
                </p>
              </div>

              {/* Suggestions */}
              <Card className="bg-card border border-border/50">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-foreground mb-4">
                    Sugestões para você:
                  </h4>
                  <div className="space-y-3">
                    {support.suggestions.map((suggestion, index) => (
                      <div key={index} className="flex items-center gap-3 text-sm">
                        <div className="w-2 h-2 bg-wellness rounded-full flex-shrink-0"></div>
                        <span>{suggestion}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={() => window.location.href = '/ferramentas'}
                  className="bg-gradient-primary text-black"
                  variant="outline"
                >
                  Voltar
                </Button>
              </div>
            </div>
          </>
        )}

        {/* Privacy note */}
        <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
          <p className="text-sm text-muted-foreground text-center">
            🔒 <strong>Sua privacidade é protegida:</strong> Nenhuma informação é armazenada ou compartilhada. 
            Este registro existe apenas durante sua sessão atual.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};
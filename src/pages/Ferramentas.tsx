import BreathingCircle from '@/components/BreathingCircle';
import CheckIn from '@/components/CheckIn';
import SOSCard from '@/components/SOSCard';

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Heart, 
  Brain, 
  Clock, 
  Moon, 
  Zap, 
  BookOpen, 
  Headphones,
  Smartphone,
  Smile,
  Meh,
  Frown,
  RotateCcw,
  Download
} from "lucide-react";

const Ferramentas = () => {
    const [selectedMood, setSelectedMood] = useState<string | null>(null);

  const moodOptions = [
    { 
      id: 'bad', 
      icon: <Frown className="w-8 h-8" />, 
      label: 'Mal', 
      color: 'bg-destructive text-accent-foreground',
      message: 'Você não está sozinho. Considere entrar em contato com os recursos abaixo. ❤️'
    },
    { 
      id: 'okay', 
      icon: <Meh className="w-8 h-8" />, 
      label: 'Mais ou Menos', 
      color: 'bg-accent text-accent-foreground',
      message: 'Dias assim acontecem. Considere usar nossas ferramentas de apoio. 💚'
    },
    { 
      id: 'great', 
      icon: <Smile className="w-8 h-8" />, 
      label: 'Bem', 
      color: 'bg-secondary text-accent-foreground',
      message: 'Que bom! Continue cuidando bem de si mesmo. 💙'
    }
  ];

  const breathingExercises = [
    {
      title: "Respiração 4-7-8",
      description: "Inspire por 4s, segure por 7s, expire por 8s",
      duration: "5-10 minutos",
      benefit: "Reduz ansiedade e melhora o sono"
    },
    {
      title: "Respiração Quadrada",
      description: "Inspire por 4s, segure por 4s, expire por 4s, pause por 4s",
      duration: "5-15 minutos",
      benefit: "Acalma o sistema nervoso"
    },
    {
      title: "Respiração Profunda",
      description: "Inspirações lentas e profundas pelo diafragma",
      duration: "3-10 minutos",
      benefit: "Reduz estresse imediatamente"
    }
  ];

  const journalPrompts = [
    "Como me sinto hoje e por quê?",
    "Pelo que sou grato(a) hoje?",
    "Qual foi o melhor momento do meu dia?",
    "O que aprendi sobre mim hoje?",
    "Como posso cuidar melhor de mim amanhã?",
    "Que desafio superei recentemente?",
    "O que me deixa mais feliz?",
    "Como posso ser mais gentil comigo hoje?"
  ];

  const emergencyTechniques = [
    {
      title: "Técnica 5-4-3-2-1",
      steps: [
        "5 coisas que você pode ver",
        "4 coisas que você pode tocar",
        "3 coisas que você pode ouvir",
        "2 coisas que você pode cheirar",
        "1 coisa que você pode saborear"
      ],
      purpose: "Para crises de ansiedade e pânico"
    },
    {
      title: "STOP",
      steps: [
        "Stop - Pare o que está fazendo",
        "Take a breath - Respire profundamente",
        "Observe - Observe seus pensamentos e sentimentos",
        "Proceed - Continue com consciência"
      ],
      purpose: "Para momentos de estresse intenso"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center space-y-4 mb-8">
        <h1 className="text-4xl font-bold text-foreground">Ferramentas de Bem-estar</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Recursos práticos para cuidar da sua saúde mental no dia a dia
        </p>
      </div>

      <Tabs defaultValue="mood" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="mood">Humor</TabsTrigger>
          <TabsTrigger value="breathing">Respiração</TabsTrigger>
          <TabsTrigger value="journal">Diário</TabsTrigger>
          <TabsTrigger value="emergency">Emergência</TabsTrigger>
        </TabsList>

        {/* Medidor de Humor */}
        <TabsContent value="mood" className="space-y-6">
          <section className="space-y-8">
            <Card className="shadow-large border-0 bg-gradient-card">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-primary flex items-center justify-center gap-3">
                  <Heart className="w-8 h-8" />
                  Como você está se sentindo?
                </CardTitle>
                <CardDescription className="text-base">
                  Escolha a opção que melhor representa seu estado atual
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                <div className="grid md:grid-cols-3 gap-4">
                  {moodOptions.map((mood) => (
                    <button
                      key={mood.id}
                      onClick={() => setSelectedMood(mood.id)}
                      className={`p-6 rounded-lg border-2 transition-all hover:scale-105 ${
                        selectedMood === mood.id 
                          ? `${mood.color} border-current` 
                          : 'bg-card border-border hover:border-primary/30'
                      }`}
                    >
                      <div className="flex flex-col items-center space-y-3">
                        {mood.icon}
                        <span className="font-medium">{mood.label}</span>
                      </div>
                    </button>
                  ))}
                </div>

                {selectedMood && (
                  <div className="space-y-4">
                    <div className="bg-muted/50 p-6 rounded-lg text-center border-l-4 border-primary">
                      <p className="font-medium">
                        {moodOptions.find(m => m.id === selectedMood)?.message}
                      </p>
                    </div>
                    <div className="text-center">
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => setSelectedMood(null)}
                      >
                        <RotateCcw className="w-4 h-4 mr-2" />
                        Escolher novamente
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </section>
        </TabsContent>

        {/* Exercícios de Respiração */}
        <TabsContent value="breathing">
          <div >
              <BreathingCircle />
          </div>
        </TabsContent>

        {/* Diário Emocional */}
        <TabsContent value="journal" className="space-y-6">
          <Card className="shadow-medium">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <BookOpen className="w-6 h-6 text-accent" />
                <CardTitle className="text-accent">Prompts para Reflexão</CardTitle>
              </div>
              <CardDescription>
                Use essas perguntas para se conhecer melhor e processar suas emoções
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {journalPrompts.map((prompt, index) => (
                  <div key={index} className="p-4 bg-muted rounded-lg">
                    <p className="text-sm font-medium">{prompt}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Técnicas de Emergência */}
        <TabsContent value="emergency" className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {emergencyTechniques.map((technique, index) => (
              <Card key={index} className="shadow-medium border-destructive/20">
                <CardHeader>
                  <CardTitle className="text-destructive">{technique.title}</CardTitle>
                  <CardDescription className="text-destructive/80">
                    {technique.purpose}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ol className="space-y-2">
                    {technique.steps.map((step, stepIndex) => (
                      <li key={stepIndex} className="flex items-start space-x-2">
                        <span className="flex-shrink-0 w-6 h-6 bg-destructive/10 text-destructive rounded-full text-xs flex items-center justify-center font-bold">
                          {stepIndex + 1}
                        </span>
                        <span className="text-sm">{step}</span>
                      </li>
                    ))}
                  </ol>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      {/* Call to Action */}
      <Card className="mt-8 bg-primary/5 border-primary/20">
        <CardContent className="pt-6 text-center">
          <Smartphone className="w-8 h-8 text-primary mx-auto mb-4" />
          <h3 className="font-semibold text-primary mb-2">Dica Importante</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Essas ferramentas são complementos ao cuidado profissional, não substituições. 
            Se você está enfrentando dificuldades sérias, procure ajuda especializada.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Ferramentas;
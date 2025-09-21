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
import { MoodTracker } from '@/components/MoodTracker';

const Ferramentas = () => {
    const [selectedMood, setSelectedMood] = useState<string | null>(null);

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
        "Pare o que está fazendo",
        "Respire profundamente",
        "Observe seus pensamentos e sentimentos",
        "Continue com consciência"
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
          <TabsTrigger value="journal">Mensagens</TabsTrigger>
          <TabsTrigger value="emergency">Emergência</TabsTrigger>
        </TabsList>

        {/* Medidor de Humor */}
        <TabsContent value="mood" className="space-y-6">
          <Card className="p-4 grid md:grid-cols-1 gap-6">
            <div className="scale-90">
              <MoodTracker />
            </div>
          </Card>
        </TabsContent>

        {/* Exercícios de Respiração */}
        <TabsContent value="breathing">
          <Card className="p-4 grid md:grid-cols-1 gap-6">
            <div className="scale-90">
              <BreathingCircle />
            </div>
          </Card>
        </TabsContent>

        {/* Diário Emocional */}
        <TabsContent value="journal" className="space-y-6">
          <Card className="p-4 grid md:grid-cols-1 gap-6">
            <div>
              <SOSCard />
            </div>
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
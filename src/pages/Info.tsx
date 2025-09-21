import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Heart, Users, AlertCircle, Lightbulb, Shield } from "lucide-react";

const Info = () => {
  const mentalHealthInfo = [
    {
      icon: Brain,
      title: "O que é Saúde Mental?",
      description: "A saúde mental inclui nosso bem-estar emocional, psicológico e social. Ela afeta como pensamos, sentimos e agimos.",
      content: "Ter boa saúde mental não significa apenas a ausência de transtornos mentais, mas sim a capacidade de lidar com os desafios da vida de forma saudável e produtiva."
    },
    {
      icon: Heart,
      title: "Importância do Autocuidado",
      description: "Cuidar da sua saúde mental é tão importante quanto cuidar da sua saúde física.",
      content: "Práticas como exercícios regulares, alimentação balanceada, sono adequado e atividades prazerosas contribuem significativamente para o bem-estar mental."
    },
    {
      icon: Users,
      title: "Rede de Apoio",
      description: "Manter conexões sociais saudáveis é fundamental para a saúde mental.",
      content: "Família, amigos e comunidade fornecem suporte emocional essencial. Não hesite em compartilhar seus sentimentos com pessoas de confiança."
    }
  ];

  const warningSigns = [
    "Mudanças bruscas de humor",
    "Isolamento social prolongado",
    "Perda de interesse em atividades que antes eram prazerosas",
    "Alterações no sono ou apetite",
    "Dificuldade de concentração",
    "Sentimentos persistentes de tristeza ou ansiedade",
    "Pensamentos negativos sobre si mesmo ou o futuro"
  ];

  const selfCareTips = [
    "Pratique exercícios físicos regularmente",
    "Mantenha uma rotina de sono saudável",
    "Alimente-se de forma equilibrada",
    "Reserve tempo para hobbies e lazer",
    "Pratique técnicas de relaxamento",
    "Cultive relacionamentos positivos",
    "Estabeleça limites saudáveis",
    "Procure ajuda profissional quando necessário"
  ];

  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-foreground">Informações sobre Saúde Mental</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Entenda melhor a saúde mental e aprenda como cuidar do seu bem-estar emocional
        </p>
      </div>

      {/* Main Info Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        {mentalHealthInfo.map((info, index) => (
          <Card key={index} className="shadow-medium hover:shadow-large transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <info.icon className="w-6 h-6 text-primary" />
              </div>
              <CardTitle className="text-primary">{info.title}</CardTitle>
              <CardDescription>{info.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{info.content}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Warning Signs */}
      <div className="grid lg:grid-cols-2 gap-8">
        <Card className="shadow-medium">
          <CardHeader>
            <div className="flex items-center space-x-2">
              <AlertCircle className="w-6 h-6 text-destructive" />
              <CardTitle className="text-destructive">Sinais de Alerta</CardTitle>
            </div>
            <CardDescription>
              Fique atento a estes sinais que podem indicar necessidade de ajuda profissional
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {warningSigns.map((sign, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0" />
                  <span className="text-sm">{sign}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Self-Care Tips */}
        <Card className="shadow-medium">
          <CardHeader>
            <div className="flex items-center space-x-2">
              <Lightbulb className="w-6 h-6 text-accent" />
              <CardTitle className="text-accent">Dicas de Autocuidado</CardTitle>
            </div>
            <CardDescription>
              Práticas simples que podem melhorar significativamente seu bem-estar
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {selfCareTips.map((tip, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <span className="text-sm">{tip}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Important Note */}
      <Card className="bg-secondary/10 border-secondary">
        <CardContent className="pt-6">
          <div className="flex items-start space-x-3">
            <Shield className="w-6 h-6 text-secondary mt-1" />
            <div>
              <h3 className="font-semibold text-secondary mb-2">Lembre-se</h3>
              <p className="text-sm text-muted-foreground">
                Se você está passando por dificuldades emocionais, não hesite em buscar ajuda profissional. 
                Psicólogos, psiquiatras e outros profissionais de saúde mental estão preparados para oferecer 
                o suporte necessário. Cuidar da saúde mental é um sinal de força, não de fraqueza.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Info;
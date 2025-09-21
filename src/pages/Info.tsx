import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Heart, Users, AlertCircle, Lightbulb, Shield } from "lucide-react";

const Info = () => {
  const mentalHealthInfo = [
    {
      icon: Brain,
      title: "O que é Saúde Mental?",
      description: "Saúde mental é o jeito como cuidamos das nossas emoções, pensamentos e relações. Ela influencia como a gente se sente, como reage aos desafios e como convive com os outros.",
      content: "Ter uma boa saúde mental não significa “nunca ter problemas”. Significa encontrar maneiras saudáveis de lidar com as dificuldades e continuar seguindo em frente."
    },
    {
      icon: Heart,
      title: "Importância do Autocuidado",
      description: "Cuidar da sua mente é tão importante quanto cuidar do seu corpo.",
      content: "Pequenas atitudes fazem diferença: praticar exercícios, dormir bem, se alimentar de forma equilibrada e reservar tempo para coisas que te fazem feliz. Esses hábitos ajudam a manter o bem-estar mental em dia e aumentam sua energia para enfrentar os desafios do dia a dia."
    },
    {
      icon: Users,
      title: "Rede de Apoio",
      description: "Ter pessoas ao seu lado faz toda a diferença para a saúde mental.",
      content: "Família, amigos e comunidade podem oferecer o apoio emocional que você precisa nos momentos difíceis. Não guarde tudo só pra você, conversar com alguém de confiança ajuda a aliviar o peso e fortalece os laços que importam."
    }
  ];

  const warningSigns = [
    "Mudanças de humor muito intensas",
    "Vontade de se isolar por muito tempo",
    "Perda de interesse no que antes te fazia bem",
    "Alterações no sono ou na alimentação",
    "Dificuldade para se concentrar",
    "Tristeza ou ansiedade constantes",
    "Pensamentos negativos sobre si mesmo ou sobre o futuro"
  ];

  const selfCareTips = [
    "Pratique algum exercício que você goste",
    "Tente dormir e acordar em horários regulares",
    "Alimente-se de forma equilibrada",
    "Reserve tempo para hobbies e coisas que te fazem feliz",
    "Experimente técnicas de respiração ou relaxamento",
    "Cultive amizades e relações positivas",
    "Estabeleça limites saudáveis (diga “não” quando precisar)",
    "Procure ajuda profissional se sentir necessidade"
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
              É importante prestar atenção ao que o corpo e a mente estão tentando dizer. Se você perceber alguns desses sinais, pode ser hora de buscar ajuda profissional:
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
              Pequenas atitudes no dia a dia podem fazer uma grande diferença no seu bem-estar:
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
                Se você estiver passando por dificuldades emocionais, não enfrente isso sozinho. Psicólogos, 
                psiquiatras e outros profissionais de saúde mental podem oferecer o suporte que você precisa.
                Cuidar da mente é um ato de coragem e amor próprio.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Info;
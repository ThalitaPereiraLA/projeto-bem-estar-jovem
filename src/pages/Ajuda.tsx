import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Phone,
  AlertTriangle,
  Heart,
  Users,
} from "lucide-react";

type BadgeVariant = "default" | "secondary" | "destructive" | "outline";

type EmergencyContact = {
  name: string;
  phone: string;
  description: string;
  type: string;
  color: BadgeVariant;
};

const Ajuda = () => {
  const emergencyContacts: EmergencyContact[] = [
    {
      name: "CVV - Centro de Valorização da Vida",
      phone: "188",
      description: "Prevenção do suicídio - Atendimento 24h gratuito",
      type: "Emergência",
      color: "destructive",
    },
    {
      name: "SAMU",
      phone: "192",
      description: "Serviço de Atendimento Móvel de Urgência",
      type: "Emergência Médica",
      color: "destructive",
    },
    {
      name: "Polícia Militar",
      phone: "190",
      description: "Emergências em geral",
      type: "Segurança",
      color: "destructive",
    },
    {
      name: "Disque 100",
      phone: "100",
      description: "Denúncias de violações de direitos humanos",
      type: "Direitos Humanos",
      color: "secondary",
    },
    {
      name: "CAPS - Centro de Atenção Psicossocial",
      phone: "Ligue para a unidade mais próxima",
      description: "Tratamento gratuito e apoio psicológico, focando na reabilitação e reintegração social de pessoas com sofrimento psíquico ou dependência de substâncias.",
      type: "Saúde Mental",
      color: "secondary",
    },
  ];

  const warningSignsEmergency: string[] = [
    "Pensamentos ou tentativas de suicídio",
    "Agressividade intensa",
    "Perda total de contato com a realidade",
    "Comportamentos de alto risco",
    "Uso excessivo de álcool ou outras drogas",
    "Paranoia ou delírios graves",
  ];

  const howToHelp: string[] = [
    "Escute com atenção e sem julgamentos",
    "Não diminua os sentimentos da pessoa",
    "Incentive a procurar ajuda profissional",
    "Mostre que está disponível para apoiar",
    "Cuide também da sua própria saúde emocional",
    "Em situações de emergência, busque ajuda imediatamente",
  ];

  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-foreground">Buscar Ajuda</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Você não está sozinho. Encontre os recursos e contatos necessários para obter apoio profissional
        </p>
      </div>

      {/* Emergency Alert */}
      <Card className="border-destructive bg-destructive/5">
        <CardContent className="pt-6">
          <div className="flex items-start space-x-3">
            <AlertTriangle className="w-6 h-6 text-destructive mt-1" />
            <div className="space-y-2">
              <h3 className="font-bold text-destructive">EM CRISE? PROCURE AJUDA IMEDIATAMENTE</h3>
              <p className="text-sm">
                Se você ou alguém que conhece está em risco imediato, não espere.
                Ligue para os números de emergência abaixo ou vá ao hospital mais próximo.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                <Button variant="destructive" size="sm">
                  <Phone className="w-4 h-4 mr-2" />
                  CVV: 188
                </Button>
                <Button variant="outline" size="sm" className="border-destructive text-destructive">
                  <Phone className="w-4 h-4 mr-2" />
                  SAMU: 192
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Emergency Contacts */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-primary">Contatos de Emergência</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {emergencyContacts.map((contact) => (
            <Card key={contact.phone} className="shadow-medium hover:shadow-large transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <CardTitle className="text-lg">{contact.name}</CardTitle>
                    <CardDescription className="text-sm">{contact.description}</CardDescription>
                  </div>
                  <Badge variant={contact.color} className="ml-2">
                    {contact.type}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">
                  <Phone className="w-4 h-4 mr-2" />
                  {contact.phone}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Information Sections */}
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Warning Signs */}
        <Card className="shadow-medium">
          <CardHeader>
            <CardTitle className="text-destructive flex items-center space-x-2">
              <AlertTriangle className="w-5 h-5" />
              <span>Sinais de Emergência</span>
            </CardTitle>
            <CardDescription>
              Procure ajuda imediata se observar estes sinais
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {warningSignsEmergency.map((sign) => (
                <li key={sign} className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0" />
                  <span className="text-sm">{sign}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* How to Help */}
        <Card className="shadow-medium">
          <CardHeader>
            <CardTitle className="text-primary flex items-center space-x-2">
              <Users className="w-5 h-5" />
              <span>Como Ajudar Alguém</span>
            </CardTitle>
            <CardDescription>
              Dicas para apoiar uma pessoa em sofrimento
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {howToHelp.map((tip) => (
                <li key={tip} className="flex items-start space-x-2">
                  <Heart className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <span className="text-sm">{tip}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Ajuda;

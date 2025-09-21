import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Brain, Users, Shield, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-mental-health.jpg";

const Index = () => {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-hero text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
        />
        <div className="relative container mx-auto px-4 py-20 text-center">
          <div className="max-w-4xl mx-auto space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Sua <span className="text-accent">saúde mental</span> importa
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto">
              Um espaço para entender mais sobre a ansiedade, aprender estratégias simplese e ferramentas para 
              cuidar do seu bem-estar emocional. <br />
              Você não está sozinho nessa jornada.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link to="/info">
                <Button variant="accent" size="lg" className="w-full sm:w-auto">
                  Saiba Mais
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/ajuda">
                <Button variant="outline" size="lg" className="w-full sm:w-auto bg-white/10 border-white/20 text-white hover:bg-white/20">
                  Buscar Ajuda
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Como podemos te ajudar?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Oferecemos recursos completos para apoiar sua jornada de bem-estar mental
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="shadow-medium hover:shadow-large transition-shadow border-0 bg-gradient-card">
            <CardHeader className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="w-6 h-6 text-primary" />
              </div>
              <CardTitle className="text-primary">Informações</CardTitle>
              <CardDescription>
                Conteúdo educativo sobre saúde mental e bem-estar
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="shadow-medium hover:shadow-large transition-shadow border-0 bg-gradient-card">
            <CardHeader className="text-center">
              <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-secondary" />
              </div>
              <CardTitle className="text-secondary">Ferramentas</CardTitle>
              <CardDescription>
                Recursos práticos para autocuidado e gestão emocional
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="shadow-medium hover:shadow-large transition-shadow border-0 bg-gradient-card">
            <CardHeader className="text-center">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-accent" />
              </div>
              <CardTitle className="text-accent">Comunidade</CardTitle>
              <CardDescription>
                Vídeos e conteúdo da nossa comunidade de apoio
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="shadow-medium hover:shadow-large transition-shadow border-0 bg-gradient-card">
            <CardHeader className="text-center">
              <div className="w-12 h-12 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-6 h-6 text-destructive" />
              </div>
              <CardTitle className="text-destructive">Ajuda</CardTitle>
              <CardDescription>
                Suporte profissional e contatos de emergência
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Pronto para começar sua jornada de bem-estar?
            </h2>
            <p className="text-lg text-muted-foreground">
              Explore nossos recursos e encontre o apoio que você precisa. 
              Cuidar da saúde mental é um ato de coragem e amor próprio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/ferramentas">
                <Button variant="hero" size="lg">
                  Explorar Ferramentas
                </Button>
              </Link>
              <Link to="/info">
                <Button variant="outline" size="lg">
                  Ler Mais Sobre
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
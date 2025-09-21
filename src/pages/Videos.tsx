import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Play, Clock, Users, Star, ExternalLink } from "lucide-react";

const Videos = () => {
  const videoCategories = [
    {
      title: "Meditação Guiada",
      videos: [
        {
          title: "Meditação para Ansiedade - 10 minutos",
          description: "Exercício de respiração e mindfulness para reduzir a ansiedade",
          duration: "10:30",
          views: "2.1M",
          rating: 4.9,
          thumbnail: "https://images.unsplash.com/photo-1545389336-cf090694435e?w=300&h=200&fit=crop"
        },
        {
          title: "Relaxamento Profundo para Dormir",
          description: "Meditação noturna para uma noite de sono reparador",
          duration: "25:45",
          views: "1.8M",
          rating: 4.8,
          thumbnail: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop"
        }
      ]
    },
    {
      title: "Palestras Educativas",
      videos: [
        {
          title: "Entendendo a Depressão - Dr. Maria Silva",
          description: "Palestra sobre os sintomas, causas e tratamentos da depressão",
          duration: "45:20",
          views: "850K",
          rating: 4.7,
          thumbnail: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=300&h=200&fit=crop"
        },
        {
          title: "Como Lidar com o Estresse no Trabalho",
          description: "Estratégias práticas para gerenciar o estresse profissional",
          duration: "32:15",
          views: "920K",
          rating: 4.6,
          thumbnail: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=200&fit=crop"
        }
      ]
    },
    {
      title: "Depoimentos",
      videos: [
        {
          title: "Minha Jornada contra a Ansiedade - Ana",
          description: "Depoimento pessoal sobre superação e busca por ajuda",
          duration: "15:30",
          views: "650K",
          rating: 4.9,
          thumbnail: "https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=300&h=200&fit=crop"
        },
        {
          title: "Como a Terapia Mudou Minha Vida - João",
          description: "Relato sobre os benefícios do acompanhamento psicológico",
          duration: "18:45",
          views: "420K",
          rating: 4.8,
          thumbnail: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=300&h=200&fit=crop"
        }
      ]
    },
    {
      title: "Exercícios Práticos",
      videos: [
        {
          title: "Técnicas de Respiração para Ansiedade",
          description: "Aprenda 3 técnicas simples para controlar a ansiedade",
          duration: "12:20",
          views: "1.2M",
          rating: 4.8,
          thumbnail: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=300&h=200&fit=crop"
        },
        {
          title: "Yoga para Relaxamento Mental",
          description: "Sequência de yoga focada no bem-estar emocional",
          duration: "30:00",
          views: "780K",
          rating: 4.7,
          thumbnail: "https://images.unsplash.com/photo-1588286840104-8957b019727f?w=300&h=200&fit=crop"
        }
      ]
    }
  ];

  const featuredVideo = {
    title: "Saúde Mental: Quebrando o Tabu - Mesa Redonda",
    description: "Especialistas discutem a importância de falar sobre saúde mental sem preconceitos",
    duration: "1:15:30",
    views: "3.2M",
    rating: 4.9,
    thumbnail: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=300&fit=crop"
  };

  const VideoCard = ({ video, featured = false }: { video: any, featured?: boolean }) => (
    <Card className={`shadow-medium hover:shadow-large transition-all cursor-pointer ${featured ? 'border-primary' : ''}`}>
      <div className="relative">
        <div 
          className={`bg-cover bg-center ${featured ? 'h-48' : 'h-32'} rounded-t-lg`}
          style={{ backgroundImage: `url(${video.thumbnail})` }}
        >
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center rounded-t-lg">
            <Button variant="ghost" size="icon" className="w-12 h-12 bg-white/20 hover:bg-white/30">
              <Play className="w-6 h-6 text-white" />
            </Button>
          </div>
          <div className="absolute bottom-2 right-2">
            <Badge variant="secondary" className="bg-black/70 text-white">
              <Clock className="w-3 h-3 mr-1" />
              {video.duration}
            </Badge>
          </div>
        </div>
      </div>
      <CardHeader className={featured ? 'pb-2' : 'pb-2'}>
        <CardTitle className={`${featured ? 'text-lg' : 'text-base'} leading-tight`}>
          {video.title}
        </CardTitle>
        <CardDescription className="text-xs">
          {video.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Users className="w-3 h-3" />
              <span>{video.views}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
              <span>{video.rating}</span>
            </div>
          </div>
          <Button variant="ghost" size="sm" className="text-xs">
            <ExternalLink className="w-3 h-3 mr-1" />
            Assistir
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-foreground">Vídeos Educativos</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Conteúdo em vídeo para apoiar sua jornada de bem-estar mental
        </p>
      </div>

      {/* Featured Video */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-primary">Em Destaque</h2>
        <VideoCard video={featuredVideo} featured={true} />
      </div>

      {/* Video Categories */}
      <div className="space-y-8">
        {videoCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">{category.title}</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {category.videos.map((video, videoIndex) => (
                <VideoCard key={videoIndex} video={video} />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <Card className="bg-gradient-card text-center">
        <CardContent className="pt-6">
          <Play className="w-12 h-12 text-primary mx-auto mb-4" />
          <h3 className="text-xl font-bold mb-2">Quer Compartilhar Sua História?</h3>
          <p className="text-muted-foreground mb-4">
            Sua experiência pode ajudar outras pessoas. Entre em contato para participar dos nossos vídeos.
          </p>
          <Button variant="default">Participar</Button>
        </CardContent>
      </Card>

      {/* Disclaimer */}
      <Card className="bg-muted/50">
        <CardContent className="pt-4">
          <p className="text-sm text-muted-foreground text-center">
            <strong>Aviso:</strong> Os vídeos são para fins educativos e não substituem o acompanhamento médico profissional. 
            Para questões de saúde mental, sempre consulte um especialista qualificado.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Videos;
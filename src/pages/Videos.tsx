import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Play, Clock } from "lucide-react";
import VideoPlayer from "../components/VideoPlayer";

type VideoItem = {
  title: string;
  description: string;
  duration: string;  
  youtube: string;   
};

type VideoCategory = {
  title: string;
  videos: VideoItem[];
};

// Extrai o ID do YouTube de vários formatos (watch?v=, youtu.be/, shorts/, embed/)
function getYouTubeId(input: string): string {
  try {
    // Se já parece um ID "puro" (11 chars comuns), retorna direto
    if (/^[\w-]{10,}$/.test(input) && !input.includes("http")) return input.trim();

    const url = new URL(input);
    const host = url.hostname.replace("www.", "");

    if (host === "youtu.be") {
      return url.pathname.replace("/", "");
    }

    if (host === "youtube.com" || host === "m.youtube.com") {
      const v = url.searchParams.get("v");
      if (v) return v;
      const parts = url.pathname.split("/").filter(Boolean);
      // /shorts/ID  ou  /embed/ID
      if (parts[0] === "shorts" || parts[0] === "embed") return parts[1];
    }
  } catch {
    // se não for URL válida, cai aqui (tratado acima)
  }
  return input.trim();
}

function getYouTubeThumb(id: string) {
  return `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
}

function VideoCard({ video, featured = false }: { video: VideoItem; featured?: boolean }) {
  const [playing, setPlaying] = useState(false);
  const id = getYouTubeId(video.youtube);
  const thumb = getYouTubeThumb(id);

  if (playing) {
    return (
      <Card className={`shadow-medium hover:shadow-large transition-all ${featured ? "border-primary" : ""}`}>
        <CardHeader className="pb-2">
          <CardTitle className={`${featured ? "text-lg" : "text-base"} leading-tight`}>{video.title}</CardTitle>
          <CardDescription className="text-xs">{video.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <VideoPlayer youtubeId={id} title={video.title} />
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className={`shadow-medium hover:shadow-large transition-all cursor-pointer ${featured ? "border-primary" : ""}`}>
      <div className="relative">
        <div
          className={`bg-cover bg-center ${featured ? "h-48" : "h-32"} rounded-t-lg`}
          style={{ backgroundImage: `url(${thumb})` }}
          aria-label={video.title}
        >
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center rounded-t-lg">
            <Button
              variant="ghost"
              size="icon"
              className="w-12 h-12 bg-white/20 hover:bg-white/30"
              onClick={() => setPlaying(true)}
              aria-label={`Reproduzir ${video.title}`}
            >
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
      <CardHeader className="pb-2">
        <CardTitle className={`${featured ? "text-lg" : "text-base"} leading-tight`}>{video.title}</CardTitle>
        <CardDescription className="text-xs">{video.description}</CardDescription>
      </CardHeader>
    </Card>
  );
}

const Videos = () => {
  const videoCategories: VideoCategory[] = [
    {
      title: "Meditação Guiada",
      videos: [
        {
          title: "Meditação para Ansiedade",
          description: "Exercício de respiração e mindfulness para reduzir a ansiedade",
          duration: "05:17",
          youtube: "https://www.youtube.com/watch?v=uLVvZWL2FUg",
        },
        {
          title: "Como controlar uma crise de ansiedade",
          description: "Se as crises estão sendo repetidas, recorrentes, procure ajuda profissional.",
          duration: "01:50",
          youtube: "https://www.youtube.com/watch?v=8YG8HABY25w",
        },
      ],
    },
    {
      title: "Exercícios Práticos",
      videos: [
        {
          title: "Exercício de Respiração",
          description: "A técnica mais simples e eficaz de relaxamento",
          duration: "01:51",
          youtube: "https://www.youtube.com/watch?v=kiEmbhvv7Fo", 
        },
        {
          title: "Yoga para Relaxar e Acalmar",
          description: "Aula de yoga focada no bem-estar e relaxamento do sistema nervoso",
          duration: "16:16",
          youtube: "https://www.youtube.com/watch?v=x-UGt6cXtrU", 
        },
      ],
    },
  ];

  const featuredVideo: VideoItem = {
    title: "Exercício de Respiração",
    description: "A técnica mais simples e eficaz de relaxamento",
    duration: "01:51",
    youtube: "https://www.youtube.com/watch?v=kiEmbhvv7Fo",
  };

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
        <VideoCard video={featuredVideo} featured />
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

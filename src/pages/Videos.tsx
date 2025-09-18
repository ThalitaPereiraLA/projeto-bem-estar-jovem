import VideoPlayer from '../components/VideoPlayer';

export default function Videos() {
  return (
    <section className="space-y-6">
      <h2 className="text-xl font-semibold">Vídeos educativos</h2>
      <VideoPlayer youtubeId="dQw4w9WgXcQ" title="O que é ansiedade?" />
      <VideoPlayer youtubeId="dQw4w9WgXcQ" title="Como apoiar um amigo ansioso" />
      <VideoPlayer youtubeId="dQw4w9WgXcQ" title="Exercício de respiração guiada" />
    </section>
  );
}

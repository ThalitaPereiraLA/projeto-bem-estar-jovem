export default function VideoPlayer({
  youtubeId,
  title,
}: {
  youtubeId: string;
  title: string;
}) {
  return (
    <section
      aria-label={title}
      className="my-6 flex flex-col items-center text-center"
    >
      {/* Player */}
      <div className="w-full max-w-md aspect-video rounded-2xl overflow-hidden shadow-lg border border-white/10">
        <iframe
          title={title}
          src={`https://www.youtube.com/embed/${youtubeId}`}
          allowFullScreen
          className="w-full h-full"
        />
      </div>

      {/* Título */}
      <p className="mt-3 text-sm text-white/80">{title}</p>
    </section>
  );
}
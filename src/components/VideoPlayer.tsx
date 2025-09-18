export default function VideoPlayer({ youtubeId, title }: { youtubeId: string, title: string }) {
  return (
    <section aria-label={title} className="my-4">
      <div className="aspect-video">
        <iframe
          title={title}
          src={`https://www.youtube.com/embed/${youtubeId}`}
          allowFullScreen
          className="w-full h-full rounded"
        />
      </div>
      <p className="mt-2 text-sm">{title}</p>
    </section>
  );
}

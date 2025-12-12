import { useState } from "react";
import { useTranslation } from "react-i18next";

const FullScreenVideo = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoId = "abllhb_L4Ms"; // Replace with your YouTube video ID
  // const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  const { t } = useTranslation();

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      {isPlaying ? (
        // The embedded YouTube iframe (plays automatically on load)
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=0&controls=1&rel=0`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ) : (
        // Preview state: Thumbnail with overlay text and play button
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) ), url("video_thumbnail.jpg")`,
            // opacity: 0.9,
            // filter: "brightness(30%)",
          }}
        >
          <div className="absolute top-0 left-0 w-full h-full bg-opacity-50 flex flex-col items-center justify-center">
            <div
              className="max-w-sm lg:max-w-xl text-neutral-400
              space-y-1 lg:space-y-4"
            >
              <h2 className="text-balance text-[#a18458] text-5xl text-shadow-lg font-bold tracking-tight md:text-5xl">
                {t("history.title")}
              </h2>
              <p className="text-pretty md:text-justify text-2xl">
                {t("history.p1")}
              </p>
              <p className="text-pretty md:text-justify text-2xl">
                {t("history.p2")}
              </p>
              <p className="text-pretty md:text-justify text-2xl">
                {t("history.p3")}
              </p>
            </div>

            <button
              onClick={handlePlay}
              className="bg-red-600 text-white px-6 py-3 mt-3 rounded-full text-lg font-semibold hover:bg-red-700 transition"
            >
              Play Video
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FullScreenVideo;

import { useRef, useState } from "react";
import { Pause, Play } from "lucide-react";

function Hero() {
  const videoRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(true);

  const LOCAL_VIDEO = "/videos/Rakhi.mp4";

  const togglePlay = async () => {
    const video = videoRef.current;

    if (!video) return;

    try {
      if (video.paused) {
        await video.play();
        setIsPlaying(true);
      } else {
        video.pause();
        setIsPlaying(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-pink-50 via-white to-rose-50">

      <div className="mx-auto grid max-w-7xl items-center gap-6 sm:gap-8 lg:gap-10 px-3 sm:px-6 py-8 sm:py-12 lg:py-16 lg:grid-cols-2 lg:px-8">

        {/* LEFT CONTENT */}
        <div className="max-w-2xl">

          <p className="inline-flex rounded-full bg-pink-100 px-2.5 sm:px-3 py-1 text-[10px] sm:text-xs font-semibold tracking-wide text-pink-700">
            FESTIVE COLLECTION
          </p>

          <h1 className="mt-3 sm:mt-4 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-gray-900">
            Premium Jewelry Collection
          </h1>

          <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-gray-600">
            Discover elegant and modern jewelry for every occasion.
          </p>

          <div className="mt-6 sm:mt-8 flex flex-wrap gap-2 sm:gap-3">

            <button className="rounded-lg sm:rounded-xl bg-pink-600 px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-semibold text-white shadow-sm hover:bg-pink-700">
              Shop Now
            </button>

            <button className="rounded-lg sm:rounded-xl border border-gray-300 bg-white px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-semibold text-gray-900 hover:bg-gray-100">
              Explore
            </button>

          </div>
        </div>

        {/* VIDEO */}
        <div className="relative overflow-hidden rounded-xl sm:rounded-2xl border border-pink-100 bg-black shadow-lg sm:shadow-2xl">

          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            className="aspect-video w-full object-cover"
          >

            <source
              src={LOCAL_VIDEO}
              type="video/mp4"
            />

          </video>

          {/* OVERLAY */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

          {/* BUTTON */}
          <button
            onClick={togglePlay}
            className="absolute bottom-2 sm:bottom-3 right-2 sm:right-4 inline-flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-white/90 text-gray-900 shadow-lg backdrop-blur hover:bg-white"
          >
            {isPlaying ? (
              <Pause className="h-4 sm:h-5 w-4 sm:w-5" />
            ) : (
              <Play className="h-4 sm:h-5 w-4 sm:w-5 pl-0.5" />
            )}
          </button>

        </div>
      </div>
    </section>
  );
}

export default Hero;
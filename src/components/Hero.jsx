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

      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-2 lg:gap-12 lg:px-8">

        {/* LEFT CONTENT */}
        <div className="max-w-xl">

          <p className="inline-flex rounded-full bg-pink-100 px-3 py-1 text-xs font-semibold tracking-wide text-pink-700">
            FESTIVE COLLECTION
          </p>

          <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            Premium Jewelry Collection
          </h1>

          <p className="mt-4 text-base text-gray-600 sm:text-lg">
            Discover elegant and modern jewelry for every occasion.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">

            <button className="rounded-xl bg-pink-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-pink-700">
              Shop Now
            </button>

            <button className="rounded-xl border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-100">
              Explore
            </button>

          </div>
        </div>

        {/* VIDEO */}
        <div className="relative overflow-hidden rounded-2xl border border-pink-100 bg-black shadow-2xl">

          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            className="aspect-video w-full object-cover sm:min-h-[320px]"
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
            className="absolute bottom-4 right-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-gray-900 shadow-lg backdrop-blur hover:bg-white"
          >
            {isPlaying ? (
              <Pause className="h-5 w-5" />
            ) : (
              <Play className="h-5 w-5 pl-0.5" />
            )}
          </button>

        </div>
      </div>
    </section>
  );
}

export default Hero;
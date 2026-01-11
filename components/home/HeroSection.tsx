import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden">

      {/* Background Image */}
      <Image
        src="/hero/hero.jpg"
        alt="Wildlife photography expedition"
        fill
        priority
        className="object-cover"
      />

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-end px-12 pb-28">
        <div className="max-w-3xl text-white">

          {/* ================= BRAND BLOCK ================= */}
          <div className="flex items-center gap-6 mb-10">

            {/* Logo */}
            <div
              className="w-24 h-24 md:w-28 md:h-28 
                         rounded-full overflow-hidden 
                         border-2 border-white/80 
                         shadow-[0_0_30px_rgba(255,255,255,0.35)]"
            >
              <Image
                src="/home/logo.png"
                alt="Jungle Life In Focus logo"
                width={112}
                height={112}
                className="object-cover w-full h-full"
                priority
              />
            </div>

            {/* Brand name */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-wide">
                Jungle Life In Focus
              </h2>

              <p className="uppercase tracking-widest text-xs mt-1 text-white/80">
                Photography • Expeditions • Stories
              </p>
            </div>

          </div>
          {/* ================= END BRAND BLOCK ================= */}

          {/* Hero headline */}
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Experience the Wild
            <br />
            Through the Lens
          </h1>

          {/* Sub text */}
          <p className="text-lg md:text-xl text-white/85 mb-10">
            Thoughtfully crafted photography journeys and fine-art wildlife
            prints for those who seek more than just pictures.
          </p>

          {/* CTAs */}
          <div className="flex gap-6">
            <a
              href="/tours"
              className="bg-white text-black px-9 py-4 rounded-full 
                         font-semibold hover:bg-yellow-300 transition"
            >
              Explore Expeditions
            </a>

            <a
              href="/photos"
              className="border border-white px-9 py-4 rounded-full 
                         font-semibold hover:bg-white hover:text-black transition"
            >
              View Prints
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}

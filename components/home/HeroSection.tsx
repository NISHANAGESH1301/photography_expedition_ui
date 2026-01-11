import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen">

      {/* Background */}
      <Image
        src="/hero/hero.jpg"
        alt="Wildlife Photography"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-end px-12 pb-40 pt-28 text-white">
        <div className="max-w-3xl">
          <p className="uppercase tracking-widest text-xs mb-4">
            Photography • Expeditions • Stories
          </p>

          <h1 className="text-6xl font-bold leading-tight mb-6">
            Experience the Wild
            <br />Through the Lens
          </h1>

          <p className="text-lg text-white/90 max-w-xl">
            Thoughtfully crafted photography journeys and fine-art wildlife
            prints for those who seek more than just pictures.
          </p>
          {/* Scroll Indicator */}
<div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/80 flex flex-col items-center gap-2 animate-bounce">
 <span className="text-[10px] tracking-[0.35em] uppercase text-white/70 mb-3">
    Discover
  </span>
  <span className="text-xl">↓</span>
</div>

        </div>
      </div>
    </section>
  );
}

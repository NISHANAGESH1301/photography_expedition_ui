import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="px-10 py-20 bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT: Text */}
        <div>
          <h1 className="text-5xl font-bold mb-6 leading-tight">
            Capture the Wild.
            <br />
            Frame the Moment.
          </h1>

          <p className="text-lg text-gray-600 mb-8">
            Explore stunning wildlife photography and book unforgettable
            photography expeditions.
          </p>

          <div className="flex gap-6">
            <a
              href="/photos"
              className="bg-green-700 text-white px-8 py-4 rounded-lg"
            >
              Explore Photos
            </a>

            <a
              href="/tours"
              className="border border-green-700 text-green-700 px-8 py-4 rounded-lg"
            >
              Book a Tour
            </a>
          </div>
        </div>

        {/* RIGHT: HERO IMAGE */}
        <div>
          <Image
            src="/hero/hero.jpg"
            alt="Wildlife photography"
            width={600}
            height={400}
            className="rounded-2xl shadow-lg"
            priority
          />
        </div>

      </div>
    </section>
  );
}

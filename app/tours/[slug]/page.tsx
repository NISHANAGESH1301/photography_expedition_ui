import { tours } from "@/data/tours";
import Image from "next/image";
import { notFound } from "next/navigation";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function TourPage({ params }: PageProps) {
  const { slug } = await params; // ✅ THIS IS THE FIX

  const tour = tours.find((t) => t.slug === slug);

  if (!tour) {
    notFound();
  }

  return (
    <section className="bg-white">

      {/* HERO */}
      <div className="relative h-[70vh]">
        <Image
          src={tour.heroImage}
          alt={tour.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="absolute bottom-16 left-6 md:left-16 text-white max-w-2xl">
          <h1 className="text-3xl md:text-5xl font-bold mb-3">
            {tour.title}
          </h1>
          <p className="text-lg opacity-90">
            {tour.location}
          </p>
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-6xl mx-auto px-8 py-20 grid md:grid-cols-3 gap-16">

        {/* LEFT */}
        <div className="md:col-span-2">
          <h2 className="text-3xl font-semibold mb-6">
            About the Expedition
          </h2>

          <p className="text-gray-700 leading-relaxed mb-10">
            {tour.description}
          </p>

          <h3 className="text-2xl font-semibold mb-4">
            Highlights
          </h3>

          <ul className="list-disc list-inside space-y-2 text-gray-700">
            {tour.highlights.map((h, i) => (
              <li key={i}>{h}</li>
            ))}
          </ul>

          {/* GALLERY */}
          <h3 className="text-2xl font-semibold mt-16 mb-6">
            Previous Expeditions
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {tour.gallery.map((img, i) => (
              <div key={i} className="relative h-48 rounded-xl overflow-hidden">
                <Image
                  src={img}
                  alt=""
                  fill
                  className="object-cover hover:scale-105 transition duration-500"
                />
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="bg-[#f5efe6] rounded-2xl p-8 h-fit md:sticky md:top-24">
          <h3 className="text-xl font-semibold mb-6">
            Expedition Details
          </h3>

          <p><strong>Price:</strong> {tour.price}</p>
          <p><strong>Duration:</strong> {tour.duration}</p>
          <p className="mb-6"><strong>Group Size:</strong> {tour.groupSize}</p>

          <a
            href="https://wa.me/917204640623"
            target="_blank"
            className="block text-center bg-black text-white py-3 rounded-full hover:opacity-90"
          >
            Enquire on WhatsApp
          </a>
        </div>

      </div>
    </section>
  );
}

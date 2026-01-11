import Image from "next/image";

export default function FeatureSection() {
  return (
    <section className="max-w-7xl mx-auto px-12 py-32 grid md:grid-cols-3 gap-14">

      {/* PRINTS */}
      <div className="group">
        <Image
          src="/home/tiger.jpeg"
          alt="Wildlife photo prints"
          width={420}
          height={300}
          className="rounded-3xl mb-6 group-hover:scale-105 transition"
        />
        <h3 className="text-2xl font-semibold mb-3">
          Fine Art Prints
        </h3>
        <p className="text-gray-600 leading-relaxed">
          Museum-quality wildlife photographs curated for collectors,
          homes, and workspaces.
        </p>
      </div>

      {/* TOURS */}
      <div className="group mt-16">
        <Image
          src="/home/leopard.jpeg"
          alt="Photography expeditions"
          width={420}
          height={300}
          className="rounded-3xl mb-6 group-hover:scale-105 transition"
        />
        <h3 className="text-2xl font-semibold mb-3">
          Photography Expeditions
        </h3>
        <p className="text-gray-600 leading-relaxed">
          Small-group journeys led by photographers, not tour operators.
        </p>
      </div>

      {/* PORTFOLIO */}
      <div className="group">
        <Image
          src="/home/admin-photo.jpeg"
          alt="Photographer portfolio"
          width={420}
          height={300}
          className="rounded-3xl mb-6 group-hover:scale-105 transition"
        />
        <h3 className="text-2xl font-semibold mb-3">
          Photographer’s World
        </h3>
        <p className="text-gray-600 leading-relaxed">
          A personal body of work shaped by patience, fieldcraft, and
          respect for nature.
        </p>
      </div>

    </section>
  );
}

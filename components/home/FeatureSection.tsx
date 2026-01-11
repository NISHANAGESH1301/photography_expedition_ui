import Image from "next/image";

export default function FeatureSection() {
  return (
    <section className="-mt-32 bg-white rounded-t-[48px] pt-40 pb-24">
      <div className="max-w-6xl mx-auto px-12 flex justify-center gap-20">

        {/* CARD 1 */}
        <div className="group max-w-sm w-full">
          
          {/* IMAGE WRAPPER */}
          <div className="relative w-full h-[420px] mb-6 overflow-hidden rounded-3xl">
            <Image
              src="/home/tiger.jpeg"
              alt="Wildlife photo prints"
              fill
              className="object-cover group-hover:scale-105 transition duration-500"
            />
          </div>

          <h3 className="text-2xl font-semibold mb-3">
            Fine Art Prints
          </h3>

          <p className="text-gray-600 leading-relaxed">
            Museum-quality wildlife photographs curated for collectors,
            homes, and workspaces.
          </p>
        </div>

        {/* CARD 2 */}
        <div className="group max-w-sm w-full">
          
          {/* IMAGE WRAPPER */}
          <div className="relative w-full h-[420px] mb-6 overflow-hidden rounded-3xl">
            <Image
              src="/home/admin-photo.jpeg"
              alt="Photographer portfolio"
              fill
              className="object-cover group-hover:scale-105 transition duration-500"
            />
          </div>

          <h3 className="text-2xl font-semibold mb-3">
            Photographer’s World
          </h3>

          <p className="text-gray-600 leading-relaxed">
            A personal body of work shaped by patience, fieldcraft,
            and respect for nature.
          </p>
        </div>

      </div>
    </section>
  );
}

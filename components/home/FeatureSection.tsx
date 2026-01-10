import Image from "next/image";

export default function FeatureSection() {
  return (
    <section className="max-w-6xl mx-auto px-10 py-20 grid md:grid-cols-3 gap-10">
      
<div className="bg-white p-6 rounded-xl shadow-sm text-center hover:shadow-md transition">
        <Image
          src="/home/admin-photo.jpeg"
          alt="Photographer portfolio"
          width={300}
          height={200}
          className="rounded-lg mb-4 mx-auto"
        />
        <h3 className="text-xl font-semibold mb-2">
          Photographer Portfolio
        </h3>
        <p className="text-gray-600">
          Explore the photographer’s finest wildlife captures.
        </p>
      </div>

      {/* PHOTOS FEATURE */}
      <div className="bg-white p-6 rounded-xl shadow-sm text-center">
        <Image
          src="/home/tiger.jpeg"
          alt="Photo frames"
          width={300}
          height={200}
          className="rounded-lg mb-4 mx-auto"
        />
        <h3 className="text-xl font-semibold mb-2">
          Premium Photo Frames
        </h3>
        {/* <p className="text-gray-600">
          Order museum-quality framed wildlife photographs.
        </p> */}
      </div>

      {/* TOURS FEATURE */}
      <div className="bg-white p-6 rounded-xl shadow-sm text-center">
        <Image
          src="/home/leopard.jpeg"
          alt="Photography tours"
          width={300}
          height={200}
          className="rounded-lg mb-4 mx-auto"
        />
        <h3 className="text-xl font-semibold mb-2">
          Guided Photography Tours
        </h3>
        <p className="text-gray-600">
          Join curated wildlife photography expeditions.
        </p>
      </div>

      {/* PROFILE FEATURE (NO IMAGE NEEDED NOW) */}
      {/* <div className="bg-white p-6 rounded-xl shadow-sm text-center">
        <div className="text-5xl mb-4">👤</div>
        <h3 className="text-xl font-semibold mb-2">
          Personal Profile
        </h3>
        <p className="text-gray-600">
          Manage your bookings and photo orders.
        </p>
      </div> */}

    </section>
  );
}

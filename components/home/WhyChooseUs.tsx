export default function WhyChooseUs() {
  return (
    <section className="bg-[#fbf8f2] py-20 text-center">
      <h2 className="text-3xl font-semibold mb-10">
        Why Choose Us?
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-14 px-8 text-gray-700">

        {/* Ethical Expeditions */}
        <div>
          <h4 className="font-semibold text-lg mb-3">
            Ethical Expeditions
          </h4>
          <p className="leading-relaxed">
            Wildlife-first approach respecting habitats and animals.
            Our expeditions prioritize ethical practices, patience,
            and minimal disturbance in natural environments.
          </p>
        </div>

        {/* Small Group Mentorship */}
        <div>
          <h4 className="font-semibold text-lg mb-3">
            Small Group Mentorship
          </h4>
          <p className="leading-relaxed">
            Limited participants per jeep ensure personal attention,
            hands-on photography guidance, and cinematic-quality image
            creation in real jungle conditions.
          </p>
        </div>

        {/* Premium Frames */}
        <div>
          <h4 className="font-semibold text-lg mb-3">
            Premium Frames & Personalised Prints
          </h4>
          <p className="leading-relaxed">
            Museum-grade prints paired with high-quality frames,
            crafted to order. Each piece is personalized to complement
            your space and storytelling style.
          </p>
        </div>

      </div>
    </section>
  );
}

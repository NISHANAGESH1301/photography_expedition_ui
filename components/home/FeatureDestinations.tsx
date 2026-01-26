"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
const destinations = [
  {
    slug:'kabini',
    title: "Kabini",
    location: "Karnataka, India",
    image: "/tours/kabini.jpg",
  },
  {
     slug:'ranthambore',
    title: "Ranthambhore",
    location: "Rajasthan, India",
    image: "/tours/ranthambore.jpg",
  },
 
  {
     slug:'kaziranga',
    title: "Kaziranga",
    location: "Assam, India",
    image: "/tours/kaziranga.jpg",
  },
 
  {
     slug:'corbett',
    title: "Corbett",
    location: "Uttarakhand, India",
    image: "/tours/corbett.jpg",
  },
  {
     slug:'masai-maara',
    title: "Masai Mara",
    location: "Kenya, Africa",
    image: "/tours/masai-maara.jpg",
  },
  {
     slug:'serengeti',
    title: "Serengeti",
    location: "Tanzania, Africa",
    image: "/tours/Serengeti-National-Park.jpg",
  },
  {
     slug:'costa-rica',
    title: "Costa Rica Rainforests",
    location: "Central America",
    image: "/tours/costa-rica.jpg",
  },
  {
      slug:'pantanal',
    title: "Pantanal",
    location: "Brazil",
    image: "/tours/pantanal.jpg",
  },
];


export default function FeatureDestinations() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const cardWidth = 320 + 24; // card width + gap

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -cardWidth, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: cardWidth, behavior: "smooth" });
  };

  const handleScroll = () => {
    if (!scrollRef.current) return;
    setActiveIndex(
      Math.round(scrollRef.current.scrollLeft / cardWidth)
    );
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", handleScroll);
    return () => el.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-semibold text-center mb-14">
          Tour Destinations
        </h2>

        
        <div className="relative">

          {/* LEFT ARROW */}
          <button
            onClick={scrollLeft}
            className="hidden md:flex absolute -left-6 top-1/2 -translate-y-1/2 
                       z-20 w-12 h-12 items-center justify-center
                       rounded-full bg-white/90 backdrop-blur
                       shadow-lg hover:shadow-xl hover:scale-110 transition"
            aria-label="Scroll left"
          >
            <ChevronLeft size={22} />
          </button>

          {/* RIGHT ARROW */}
          <button
            onClick={scrollRight}
            className="hidden md:flex absolute -right-6 top-1/2 -translate-y-1/2 
                       z-20 w-12 h-12 items-center justify-center
                       rounded-full bg-white/90 backdrop-blur
                       shadow-lg hover:shadow-xl hover:scale-110 transition"
            aria-label="Scroll right"
          >
            <ChevronRight size={22} />
          </button>

          {/* SCROLL CONTAINER */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory
             scrollbar-hide pb-4"
          >
            {destinations.map((item, index) => (
              <Link
    key={item.slug}
    href={`/tours/${item.slug}`}
    className="group block"
  >
    <div className="relative w-[300px] h-[420px] rounded-3xl overflow-hidden">

      <Image
        src={item.image}
        alt={item.title}
        fill
        className="object-cover group-hover:scale-105 transition duration-500"
      />

      {/* Overlay text */}
      <div className="absolute bottom-6 left-6 text-white">
        <h3 className="text-xl font-semibold">
          {item.title}
        </h3>
        <p className="text-sm opacity-90">
          {item.location}
        </p>
      </div>

    </div>
  </Link>
            ))}
          </div>

          {/* DOT INDICATORS
          <div className="flex justify-center gap-2 mt-8">
            {destinations.map((_, i) => (
              <span
                key={i}
                className={`w-2.5 h-2.5 rounded-full transition ${
                  i === activeIndex
                    ? "bg-black"
                    : "bg-gray-300"
                }`}
              />
            ))}
          </div> */}

        </div>
      </div>
    </section>
  );
}

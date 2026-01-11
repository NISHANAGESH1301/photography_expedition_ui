"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${
          scrolled
            ? "bg-white/85 backdrop-blur-md shadow-md"
            : "bg-transparent"
        }
      `}
    >
      <nav className="flex justify-end px-12 py-5">
        <ul
          className={`flex gap-10 text-lg font-semibold tracking-wide
            ${scrolled ? "text-gray-900" : "text-white"}
          `}
        >
          <li>
            <Link
              href="/"
              className="relative after:absolute after:left-0 after:-bottom-2
                         after:h-[2px] after:w-0 after:bg-yellow-400
                         after:transition-all after:duration-300
                         hover:after:w-full"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              href="/photos"
              className="relative after:absolute after:left-0 after:-bottom-2
                         after:h-[2px] after:w-0 after:bg-yellow-400
                         after:transition-all after:duration-300
                         hover:after:w-full"
            >
              Photos
            </Link>
          </li>

          <li>
            <Link
              href="/tours"
              className="relative after:absolute after:left-0 after:-bottom-2
                         after:h-[2px] after:w-0 after:bg-yellow-400
                         after:transition-all after:duration-300
                         hover:after:w-full"
            >
              Tours
            </Link>
          </li>

          <li>
            <Link
              href="/profile"
              className="relative after:absolute after:left-0 after:-bottom-2
                         after:h-[2px] after:w-0 after:bg-yellow-400
                         after:transition-all after:duration-300
                         hover:after:w-full"
            >
              Profile
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

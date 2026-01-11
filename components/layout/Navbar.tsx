"use client";

import Image from "next/image";
import Link from "next/link";
import { ShoppingCart, User } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#f6f1e9] shadow-sm">
      <nav className="flex items-center justify-between px-8 py-4">

        {/* LEFT: Logo + Brand */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/home/logo.png"
            alt="Jungle Life In Focus"
            width={42}
            height={42}
            className="rounded-full"
          />
          <span className="font-semibold text-gray-900 text-lg">
            Jungle Life In Focus
          </span>
        </Link>

        {/* CENTER: Navigation */}
        <ul className="hidden md:flex items-center gap-10 text-sm font-medium text-gray-700">
          <li>
            <Link href="/" className="hover:text-black transition">
              Home
            </Link>
          </li>
          <li>
            <Link href="/photos" className="hover:text-black transition">
              Gallery
            </Link>
          </li>
          <li>
            <Link href="/tours" className="hover:text-black transition">
              Tours
            </Link>
          </li>
          <li>
            <Link href="/portfolio" className="hover:text-black transition">
              Portfolio
            </Link>
          </li>
        </ul>

        {/* RIGHT: Icons */}
        <div className="flex items-center gap-5 text-gray-700">
          <Link href="/cart" className="hover:text-black transition">
            <ShoppingCart size={20} />
          </Link>
          <Link href="/profile" className="hover:text-black transition">
            <User size={20} />
          </Link>
        </div>

      </nav>
    </header>
  );
}

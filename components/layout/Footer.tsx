import Link from "next/link";
import { Instagram, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#e3d7c6] py-8 border-t border-black/5">
      <div className="max-w-7xl mx-auto px-10">

        <div className="grid md:grid-cols-3 gap-12 text-sm text-gray-700">

          {/* Brand */}
          <div>
            <h3 className="font-semibold text-lg text-gray-900 mb-3">
              Jungle Life In Focus
            </h3>
            <p>
              Wildlife Photography • Expeditions • Fine Art Prints
            </p>
            <p className="mt-4 text-gray-600">
              Thoughtfully crafted visual stories from the wild.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">
              Contact
            </h4>

            <p className="text-gray-800 font-medium mb-3">
              GuruDatt S A
            </p>

            <p className="mb-3 flex items-center gap-2">
              <Mail size={16} className="text-gray-600" />
              <a
                href="mailto:gurudatt.sa26@gmail.com"
                className="hover:underline text-gray-800"
              >
                gurudatt.sa26@gmail.com
              </a>
            </p>

            <a
              href="https://wa.me/917204640623"
              target="_blank"
              className="flex items-center gap-3 text-[#25D366] hover:opacity-80 transition"
            >
              <Phone size={18} />
              <span className="text-gray-700">
                +91 72046 40623 (WhatsApp)
              </span>
            </a>

            <p className="mt-3">India</p>

            <p className="mt-4 text-gray-600">
              Custom prints & private tours available on request.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">
              Explore
            </h4>

            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Instagram size={16} />
                <a
                  href="https://instagram.com/junglelifeinfocus"
                  target="_blank"
                  className="hover:underline"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-8 pt-4 border-t border-black/10 text-xs text-gray-500 text-center">
          © {new Date().getFullYear()} Jungle Life In Focus. All rights reserved.
        </div>

      </div>
    </footer>
  );
}

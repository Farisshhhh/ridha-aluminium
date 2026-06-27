import Link from "next/link";
import Container from "@/components/ui/Container";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      <Container>
        <div className="grid gap-14 py-20 md:grid-cols-2 lg:grid-cols-4">

          {/* Company */}
          <div>
            <h2 className="text-3xl font-black">
              RIDHA
            </h2>

            <p className="mt-1 text-white/70">
              Aluminium & Fabrications
            </p>

            <p className="mt-6 leading-7 text-white/60">
              Premium aluminium fabrication solutions for homes,
              villas and commercial buildings across Mangalore.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold">
              Quick Links
            </h3>

            <ul className="mt-6 space-y-4 text-white/70">
              <li>
                <Link href="/">Home</Link>
              </li>

              <li>
                <Link href="#projects">Projects</Link>
              </li>

              <li>
                <Link href="#services">Services</Link>
              </li>

              <li>
                <Link href="https://wa.me/917411314324">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold">
              Services
            </h3>

            <ul className="mt-6 space-y-4 text-white/70">
              <li>Aluminium Windows</li>
              <li>Sliding Windows</li>
              <li>Glass Facades</li>
              <li>ACP Cladding</li>
              <li>Glass Railings</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold">
              Contact
            </h3>

            <div className="mt-6 space-y-5">

              <div className="flex items-start gap-3">
                <MapPin
                  size={20}
                  className="mt-1 text-blue-400"
                />

                <p className="text-white/70">
                  Mangalore, Karnataka
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Phone
                  size={20}
                  className="text-blue-400"
                />

                <a
                  href="tel:+917411314324"
                  className="text-white/70 hover:text-white"
                >
                  +91 7411314324
                </a>
              </div>

              <div className="flex items-center gap-3">
                <MessageCircle
                  size={20}
                  className="text-blue-400"
                />

                <a
                  href="https://wa.me/917411314324"
                  target="_blank"
                  className="text-white/70 hover:text-white"
                >
                  WhatsApp
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail
                  size={20}
                  className="text-blue-400"
                />

                <a
                  href="mailto:info@ridhaaluminium.com"
                  className="text-white/70 hover:text-white"
                >
                  info@ridhaaluminium.com
                </a>
              </div>

            </div>
          </div>

        </div>

        <div className="border-t border-white/10 py-6 text-center text-sm text-white/50">
          © {new Date().getFullYear()} Ridha Aluminium & Fabrications. All Rights Reserved.
        </div>
      </Container>
    </footer>
  );
}
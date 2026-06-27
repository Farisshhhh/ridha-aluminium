"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

import Logo from "./Logo";
import Button from "@/components/ui/Button";
import { navigation } from "@/data/navigation";
import Container from "@/components/ui/Container";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-slate-200 bg-white/90 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <Container>
        <div className="flex h-24 items-center justify-between">

          {/* Logo */}
          <Logo scrolled={scrolled} />

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-10 lg:flex">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative text-sm font-medium transition-all duration-300 after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-0 after:transition-all after:duration-300 hover:after:w-full ${
                  scrolled
                    ? "text-slate-700 hover:text-black after:bg-slate-900"
                    : "text-white/80 hover:text-white after:bg-white"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Button */}
          <div className="hidden lg:block">
            <Button href="https://wa.me/917411314324?text=Hi%20Ridha%20Aluminium%20%26%20Fabrications,%20I%20would%20like%20to%20get%20a%20free%20quotation.">
              Get Free Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden transition-colors duration-300 ${
              scrolled ? "text-slate-900" : "text-white"
            }`}
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </Container>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="border-t border-slate-200 bg-white/95 backdrop-blur-xl lg:hidden">
          <Container>
            <nav className="flex flex-col gap-6 py-8">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-lg text-slate-700 transition hover:text-black"
                >
                  {item.label}
                </Link>
              ))}

              <Button
                href="https://wa.me/917411314324?text=Hi%20Ridha%20Aluminium%20%26%20Fabrications,%20I%20would%20like%20to%20get%20a%20free%20quotation."
                className="mt-2 w-full justify-center"
              >
                Get Free Quote
              </Button>
            </nav>
          </Container>
        </div>
      )}
    </header>
  );
}
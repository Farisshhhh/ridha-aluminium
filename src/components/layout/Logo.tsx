"use client";

import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  scrolled?: boolean;
};

export default function Logo({ scrolled = false }: LogoProps) {
  return (
    <Link
      href="/"
      className="flex items-center transition-opacity duration-300 hover:opacity-90"
    >
      <Image
        src={scrolled ? "/images/logo-black.png" : "/images/logo-white.png"}
        alt="Ridha Aluminium & Fabrications"
        width={260}
        height={65}
        priority
        className="h-auto w-[150px] sm:w-[180px] lg:w-[230px]"
      />
    </Link>
  );
}
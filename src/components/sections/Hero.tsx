import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden"
      style={{
        backgroundImage: "url('/images/hero.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "72% center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#020617]/90 via-[#020617]/65 to-transparent" />

      <Container className="relative z-10">
        <div
          className="max-w-2xl pl-10 lg:pl-20 xl:pl-24"
          data-aos="fade-up"
        >
          {/* Company */}
          <p
            className="mb-8 text-sm font-semibold uppercase tracking-[0.45em] text-white/70"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            RIDHA ALUMINIUM & FABRICATIONS
          </p>

          {/* Heading */}
          <h1
            className="max-w-xl text-5xl font-black leading-[0.9] tracking-tight text-white lg:text-6xl"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Modern
            <br />
            Aluminium
            <br />
            Solutions.
          </h1>

          {/* Description */}
          <p
            className="mt-12 max-w-md text-base leading-8 text-white/75"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Premium aluminium windows, sliding windows,
            glass facades, ACP cladding and glass railings
            crafted for homes, villas and commercial
            buildings across Mangalore.
          </p>

          {/* Buttons */}
          <div
            className="mt-14 flex flex-wrap gap-5"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <Button href="https://wa.me/919876543210?text=Hi%20Ridha%20Aluminium%20%26%20Fabrications,%20I%20would%20like%20to%20get%20a%20free%20quotation.">
              Get Free Quote
            </Button>

            <Button href="#projects" variant="secondary">
              View Projects
            </Button>
          </div>

          {/* Stats */}
          <div
            className="mt-20 flex flex-wrap gap-14"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <div>
              <h3 className="text-3xl font-bold text-white">
                500+
              </h3>

              <p className="mt-2 text-xs uppercase tracking-[0.2em] text-white/60">
                Projects Completed
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-white">
                10+
              </h3>

              <p className="mt-2 text-xs uppercase tracking-[0.2em] text-white/60">
                Years Experience
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-white">
                100%
              </h3>

              <p className="mt-2 text-xs uppercase tracking-[0.2em] text-white/60">
                Custom Solutions
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
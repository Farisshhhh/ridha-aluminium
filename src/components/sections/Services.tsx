import Image from "next/image";
import Container from "@/components/ui/Container";

const services = [
  {
    title: "Aluminium Windows",
    image: "/images/services/windows.jpg",
    description:
      "Premium aluminium window systems for modern homes and commercial spaces.",
  },
  {
    title: "Glass Facades",
    image: "/images/services/facade.jpg",
    description:
      "Elegant structural glazing and premium curtain wall systems.",
  },
  {
    title: "ACP Cladding",
    image: "/images/services/acp.jpg",
    description:
      "Modern aluminium composite panel cladding with lasting durability.",
  },
  {
    title: "Glass Railings",
    image: "/images/services/railings.jpg",
    description:
      "Frameless glass railing systems for balconies and staircases.",
  },
  {
    title: "Sliding Windows",
    image: "/images/services/sliding.jpg",
    description:
      "Smooth, durable aluminium sliding windows with contemporary styling.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="scroll-mt-24 bg-white py-24"
    >
      <Container>
        {/* Heading */}
        <div
          className="mx-auto mb-14 max-w-3xl text-center"
          data-aos="fade-up"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-500">
            OUR SERVICES
          </p>

          <h2 className="mt-4 text-5xl font-black tracking-tight text-slate-900">
            Crafted for Modern Spaces
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Premium aluminium fabrication solutions for homes, villas and
            commercial buildings across Mangalore.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-6 lg:grid-cols-2">
          {services.map((service, index) => (
            <div
              key={service.title}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className={`group relative overflow-hidden rounded-3xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${
                index === 4
                  ? "aspect-[21/9] lg:col-span-2"
                  : "aspect-[16/10]"
              }`}
            >
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent transition-all duration-500 group-hover:from-black/70" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 p-10">
                <h3 className="text-3xl font-bold text-white">
                  {service.title}
                </h3>

                <p className="mt-3 max-w-md text-base leading-7 text-white/80">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
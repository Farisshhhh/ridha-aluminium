import Image from "next/image";
import Container from "@/components/ui/Container";

const projects = [
  {
    title: "Techno Arcade",
    category: "Commercial Building",
    image: "/images/projects/techno-arcade.jpg",
  },
  {
    title: "Glass Facade",
    category: "Commercial Building",
    image: "/images/projects/glass-facade.jpg",
  },
  {
    title: "Sliding Window",
    category: "Residential Project",
    image: "/images/projects/sliding-window.jpg",
  },
  {
    title: "Balcony Window",
    category: "Residential Project",
    image: "/images/projects/balcony-window.jpg",
  },
  {
    title: "Shower Partition",
    category: "Interior Glass Work",
    image: "/images/projects/shower-partition.jpg",
  },
  {
    title: "Shower Cubicle",
    category: "Interior Glass Work",
    image: "/images/projects/shower-cubicle-2.jpg",
  },
  {
    title: "Wardrobe",
    category: "Interior Aluminium Work",
    image: "/images/projects/wardrobe-1.jpg",
  },
  {
    title: "Modular Wardrobe",
    category: "Interior Aluminium Work",
    image: "/images/projects/wardrobe-2.jpg",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-24 bg-white py-28"
    >
      <Container>
        {/* Heading */}
        <div
          className="mx-auto mb-20 max-w-3xl text-center"
          data-aos="fade-up"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-slate-500">
            RECENT WORK
          </p>

          <h2 className="mt-4 text-5xl font-black tracking-tight text-slate-900">
            Craftsmanship Built to Last
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            From elegant residential installations to large-scale commercial
            projects, every piece reflects our commitment to precision,
            durability, and premium craftsmanship.
          </p>
        </div>

        {/* Projects */}
        <div className="grid gap-x-8 gap-y-16 md:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={project.image}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-lg transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl">

                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-black/10 transition-all duration-500 group-hover:bg-black/30" />

              </div>

              <div className="mt-6">
                <p className="text-sm font-medium uppercase tracking-[0.18em] text-slate-500">
                  {project.category}
                </p>

                <h3 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 transition-colors duration-300 group-hover:text-blue-600">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
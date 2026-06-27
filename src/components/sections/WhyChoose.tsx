import {
  Award,
  Target,
  ShieldCheck,
  Clock3,
} from "lucide-react";
import Container from "@/components/ui/Container";

const features = [
  {
    icon: Award,
    title: "10+ Years of Experience",
    description:
      "With over a decade of experience, we've delivered reliable aluminium and glass fabrication solutions for residential and commercial projects.",
  },
  {
    icon: Target,
    title: "Precision Fabrication",
    description:
      "Every installation is measured and fabricated with precision to ensure a perfect fit and premium finish.",
  },
  {
    icon: ShieldCheck,
    title: "Premium Materials",
    description:
      "We use high-quality aluminium profiles, glass, and accessories built for strength, durability, and long-term performance.",
  },
  {
    icon: Clock3,
    title: "On-Time Completion",
    description:
      "We plan every project carefully and strive to complete work within the promised timeline without compromising quality.",
  },
];

export default function WhyChoose() {
  return (
    <section
      id="why-choose"
      className="scroll-mt-24 bg-slate-50 py-28"
    >
      <Container>
        {/* Heading */}
        <div
          className="mx-auto mb-20 max-w-3xl text-center"
          data-aos="fade-up"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-blue-600">
            WHY CHOOSE RIDHA
          </p>

          <h2 className="mt-4 text-5xl font-black tracking-tight text-slate-900">
            Built on Quality, Precision & Trust
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Every project is completed with attention to detail, premium
            materials, and skilled workmanship. Whether it's a home,
            office, showroom, or commercial building, we deliver aluminium
            and glass solutions that are built to last.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="group rounded-3xl bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 transition-all duration-500 group-hover:scale-110 group-hover:bg-blue-600">
                  <Icon className="h-8 w-8 text-blue-600 transition-colors duration-500 group-hover:text-white" />
                </div>

                <h3 className="mb-4 text-2xl font-bold text-slate-900 transition-colors duration-300 group-hover:text-blue-600">
                  {feature.title}
                </h3>

                <p className="leading-7 text-slate-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
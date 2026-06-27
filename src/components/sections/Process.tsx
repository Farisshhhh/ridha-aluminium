import Container from "@/components/ui/Container";
import {
  MessageCircle,
  Ruler,
  Wrench,
  CheckCircle2,
} from "lucide-react";

const steps = [
  {
    icon: MessageCircle,
    title: "Consultation",
    description:
      "Share your project requirements with us through a call or WhatsApp. We understand your vision and provide expert guidance.",
  },
  {
    icon: Ruler,
    title: "Site Visit & Measurement",
    description:
      "Our team visits your location, takes precise measurements, and recommends the most suitable aluminium and glass solutions.",
  },
  {
    icon: Wrench,
    title: "Fabrication",
    description:
      "Every component is fabricated with precision using premium materials and modern fabrication techniques.",
  },
  {
    icon: CheckCircle2,
    title: "Professional Installation",
    description:
      "Our experienced installers complete the project with attention to detail, ensuring a clean finish and lasting quality.",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="scroll-mt-24 bg-white py-20"
    >
      <Container>

        {/* Heading */}
        <div
          className="mx-auto mb-20 max-w-2xl text-center"
          data-aos="fade-up"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-blue-600">
            OUR PROCESS
          </p>

          <h2 className="mt-4 text-5xl font-black tracking-tight text-slate-900">
            From Consultation to Completion
          </h2>

          <p className="mx-auto mt-6 text-lg leading-8 text-slate-600">
            Our streamlined process ensures every project is planned
            carefully, fabricated with precision, and installed to the
            highest standards.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative grid gap-14 lg:grid-cols-4">

          {/* Connecting Line */}
          <div className="absolute left-0 right-0 top-8 hidden h-0.5 bg-slate-300 lg:block" />

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={step.title}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="group relative text-center transition-all duration-500 hover:-translate-y-2"
              >
                {/* Icon */}
                <div className="relative z-10 mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:shadow-2xl">
                  <Icon size={30} />
                </div>

                {/* Title */}
                <h3 className="mt-8 text-2xl font-bold text-slate-900 transition-colors duration-300 group-hover:text-blue-600">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="mt-4 leading-7 text-slate-600">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

      </Container>
    </section>
  );
}
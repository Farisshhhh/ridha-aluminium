import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { Phone, CheckCircle } from "lucide-react";

export default function CTA() {
  return (
    <section
      className="bg-blue-600 py-24"
      data-aos="zoom-in"
    >
      <Container>
        <div className="mx-auto max-w-2xl text-center text-white">

          <span
            className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-200"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Get Started Today
          </span>

          <h2
            className="mt-5 text-4xl font-bold leading-tight md:text-5xl"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Ready to Start Your Aluminium Project?
          </h2>

          <p
            className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-blue-100"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Whether it's a new home, commercial building, office, or renovation,
            Ridha Aluminium & Fabrications is ready to deliver premium aluminium
            and glass solutions with expert craftsmanship.
          </p>

          <div
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <Button href="https://wa.me/917411314324?text=Hi%20Ridha%20Aluminium%20%26%20Fabrications,%0A%0AI%20would%20like%20to%20get%20a%20free%20quotation%20for%20my%20project.%0A%0AProject%20Type%3A%0ALocation%3A%0ARequirements%3A%0A%0APlease%20get%20back%20to%20me.">
              Get Free Quote
            </Button>

            <a
              href="tel:+917411314324"
              className="inline-flex items-center justify-center rounded-full border border-white px-8 py-4 font-semibold text-white transition-all duration-500 hover:-translate-y-1 hover:bg-white hover:text-blue-600"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call Now
            </a>
          </div>

          <div
            className="mt-12 flex flex-wrap items-center justify-center gap-8 text-blue-100"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5" />
              <span>Free Site Visit</span>
            </div>

            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5" />
              <span>Custom Design</span>
            </div>

            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5" />
              <span>Professional Installation</span>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
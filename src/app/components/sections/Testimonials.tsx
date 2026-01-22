"use client";

import { useEffect, useMemo, useState } from "react";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";

type Testimonial = {
  name: string;
  company: string;
  role: string;
  quote: string;
};

export default function Testimonials() {
  const testimonials: Testimonial[] = useMemo(
    () => [
      {
        name: "Operations Manager",
        company: "Shipper Company",
        role: "Logistics Ops",
        quote:
          "The trip tracking and role-based workflow made our daily dispatch operations faster and more transparent.",
      },
      {
        name: "Fleet Owner",
        company: "Transport Vendor",
        role: "Vendor",
        quote:
          "Easy trip assignment and payment updates helped us manage multiple trucks smoothly without confusion.",
      },
      {
        name: "Logistics Coordinator",
        company: "Enterprise Client",
        role: "Coordinator",
        quote:
          "Simple UI and clear trip milestones allow our team to monitor shipments and close deliveries efficiently.",
      },
      {
        name: "Dispatch Supervisor",
        company: "Regional Transport",
        role: "Supervisor",
        quote:
          "Support response and trip status updates improved our delivery confidence and reduced follow-up calls.",
      },
    ],
    []
  );

  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const total = testimonials.length;

  const goNext = () => setActiveIndex((prev) => (prev + 1) % total);
  const goPrev = () =>
    setActiveIndex((prev) => (prev - 1 + total) % total);

  useEffect(() => {
    if (isPaused) return;
    const t = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % total);
    }, 4500);
    return () => clearInterval(t);
  }, [isPaused, total]);

  return (
    <section className="py-20 bg-orange-50">
      <Container>
        <SectionTitle
          title="Testimonials"
          subtitle="Trusted by logistics teams, vendors, and operations managers."
        />

        {/* ✅ Bigger wrapper */}
        <div
          className="max-w-5xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* ✅ Buttons OUTSIDE with 20px margin */}
          <div className="flex items-center gap-5">
            {/* Prev Button */}
            <button
              onClick={goPrev}
              className="hidden md:flex w-12 h-12 rounded-full bg-white border border-orange-200 text-orange-700 text-2xl font-bold shadow hover:bg-orange-100 transition items-center justify-center"
              aria-label="Previous testimonial"
            >
              ‹
            </button>

            {/* ✅ Main Feedback Card */}
            <div className="relative flex-1 bg-white border border-orange-200 rounded-2xl shadow p-10 md:p-12 overflow-hidden min-h-[260px]">
              {/* Badge */}
              <div className="absolute top-6 right-6 bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-xs font-semibold">
                Verified Feedback
              </div>

              {/* Quote */}
              <p className="text-gray-800 text-xl md:text-2xl leading-relaxed font-medium">
                “{testimonials[activeIndex].quote}”
              </p>

              {/* Footer */}
              <div className="mt-10 flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-orange-100 border border-orange-200 flex items-center justify-center text-orange-600 font-bold text-xl">
                  {testimonials[activeIndex].name.charAt(0)}
                </div>

                <div>
                  <p className="font-bold text-gray-900 text-lg">
                    {testimonials[activeIndex].name}
                  </p>
                  <p className="text-base text-gray-600">
                    {testimonials[activeIndex].role} •{" "}
                    {testimonials[activeIndex].company}
                  </p>
                </div>
              </div>

              {/* Mobile buttons inside (optional) */}
              <div className="flex md:hidden justify-between mt-8">
                <button
                  onClick={goPrev}
                  className="w-12 h-12 rounded-full bg-orange-100 border border-orange-200 text-orange-700 text-2xl font-bold shadow hover:bg-orange-200 transition"
                  aria-label="Previous testimonial"
                >
                  ‹
                </button>

                <button
                  onClick={goNext}
                  className="w-12 h-12 rounded-full bg-orange-100 border border-orange-200 text-orange-700 text-2xl font-bold shadow hover:bg-orange-200 transition"
                  aria-label="Next testimonial"
                >
                  ›
                </button>
              </div>
            </div>

            {/* Next Button */}
            <button
              onClick={goNext}
              className="hidden md:flex w-12 h-12 rounded-full bg-white border border-orange-200 text-orange-700 text-2xl font-bold shadow hover:bg-orange-100 transition items-center justify-center"
              aria-label="Next testimonial"
            >
              ›
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`h-2.5 rounded-full transition-all ${
                  i === activeIndex
                    ? "w-10 bg-orange-500"
                    : "w-2.5 bg-orange-200 hover:bg-orange-300"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>

          <p className="text-center text-xs text-gray-500 mt-4">
            Hover to pause • Use arrows or dots to navigate
          </p>
        </div>
      </Container>
    </section>
  );
}

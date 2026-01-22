import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";

const steps = [
  { title: "Choose Role", desc: "Select Shipper or Trucker to start onboarding." },
  { title: "Create / Accept", desc: "Shipper creates load, Trucker accepts trip request." },
  { title: "Track Trip", desc: "Live milestones like pickup, transit, unloading, delivered." },
  { title: "Complete Payment", desc: "Invoice generation and payment confirmation workflow." },
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-white">
      <Container>
        <SectionTitle
          title="How It Works"
          subtitle="A simple step-by-step logistics flow for both roles."
        />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
          {steps.map((s, idx) => (
            <div
              key={s.title}
              className="p-6 bg-orange-50 border border-orange-200 rounded-2xl shadow"
            >
              <div className="w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold">
                {idx + 1}
              </div>
              <h3 className="mt-4 font-bold text-lg text-gray-900">{s.title}</h3>
              <p className="text-gray-600 mt-2">{s.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

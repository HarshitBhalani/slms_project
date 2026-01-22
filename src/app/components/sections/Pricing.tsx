import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-orange-50">
      <Container>
        <SectionTitle
          title="Pricing"
          subtitle="Transparent truck rate guidance and operational pricing."
        />

        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-7 bg-white border border-orange-200 rounded-2xl shadow">
            <h3 className="text-lg font-bold text-gray-900">Estimated Rates</h3>
            <p className="text-gray-600 mt-2">
              Get approximate truck pricing based on route, truck type, and distance.
            </p>
          </div>

          <div className="p-7 bg-white border border-orange-200 rounded-2xl shadow">
            <h3 className="text-lg font-bold text-gray-900">Flexible Operations</h3>
            <p className="text-gray-600 mt-2">
              Pricing varies based on load category, location, and service requirements.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

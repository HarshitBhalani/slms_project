import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";

export default function IndiaMap() {
  return (
    <section id="indiamap" className="py-20 bg-white">
      <Container>
        <SectionTitle
          title="India Map Coverage"
          subtitle="Pan-India network with fast pickup points and delivery hubs."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Map Placeholder */}
          <div className="h-80 rounded-2xl border border-orange-200 bg-orange-50 flex items-center justify-center text-orange-600 font-semibold">
            India Map Placeholder (Google Maps integration later)
          </div>

          {/* Coverage List */}
          <div className="space-y-4">
            {[
              "Major metro hubs supported (Ahmedabad, Mumbai, Delhi, Bengaluru)",
              "Flexible routes for short & long-haul shipments",
              "POD & tracking points integrated with trip workflow",
              "Operations support for fast resolution",
            ].map((txt) => (
              <div
                key={txt}
                className="p-4 rounded-2xl border bordesr-orange-200 bg-white shadow"
              >
                <p className="text-gray-700">{txt}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

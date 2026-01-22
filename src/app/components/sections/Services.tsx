import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";

export default function Services() {
  return (
    <section id="services" className="py-20 bg-orange-50">
      <Container>
        <SectionTitle
          title="Services Overview"
          subtitle="Role-based tools for Shippers and Truckers."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-7 bg-white border border-orange-200 rounded-2xl shadow">
            <h3 className="text-xl font-bold text-gray-900">For Shippers</h3>
            <p className="text-gray-600 mt-2">
              Create loads, get truck availability, track shipment status, and manage payment workflow.
            </p>

            <ul className="mt-5 space-y-2 text-gray-700">
              <li>• Truck booking & load posting</li>
              <li>• Trip tracking with milestones</li>
              <li>• Invoice + payment updates</li>
              <li>• Dedicated support channel</li>
            </ul>
          </div>

          <div className="p-7 bg-white border border-orange-200 rounded-2xl shadow">
            <h3 className="text-xl font-bold text-gray-900">For Truckers</h3>
            <p className="text-gray-600 mt-2">
              Add trucks, accept trips, manage delivery status, and track earnings via wallet system.
            </p>

            <ul className="mt-5 space-y-2 text-gray-700">
              <li>• Trip assignment & status updates</li>
              <li>• Wallet / payment tracking</li>
              <li>• Document upload (KYC / bank)</li>
              <li>• Profile + truck management</li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}

import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";

export default function MobileApp() {
  return (
    <section className="py-20 bg-white">
      <Container>
        <SectionTitle
          title="Mobile Application"
          subtitle="Get updates, track trips, and manage operations directly from your phone."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <div className="space-y-5">
            <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-semibold">
              {/* <span>📲</span> */}
              Available on Android & iOS
            </div>

            <h3 className="text-3xl font-bold text-gray-900 leading-tight">
              Fast. Simple. Reliable Logistics — From Your Mobile
            </h3>

            <p className="text-gray-600">
              Our mobile app helps Shippers and Truckers manage trips, statuses, payments,
              and support — with a clean role-based workflow.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Live trip status updates",
                "Instant load / trip notifications",
                "Wallet & payment tracking",
                "Support via WhatsApp & ticket",
              ].map((feature) => (
                <div
                  key={feature}
                  className="p-4 bg-orange-50 border border-orange-200 rounded-2xl shadow-sm"
                >
                  <p className="text-gray-800 font-medium"> {feature}</p>
                </div>
              ))}
            </div>

            {/* Store Buttons */}
            <div className="flex gap-4 flex-wrap pt-2">
              <button
                className="flex items-center gap-2 bg-orange-500 text-white px-6 py-3 rounded-xl font-semibold shadow hover:bg-orange-600 transition"
                type="button"
              >
                 Google Play
              </button>

              <button
                className="flex items-center gap-2 bg-white border border-orange-300 text-orange-600 px-6 py-3 rounded-xl font-semibold shadow hover:bg-orange-50 transition"
                type="button"
              >
                 App Store
              </button>
            </div>

            <p className="text-xs text-gray-500">
              Note: Store links will be added after deployment.
            </p>
          </div>

          {/* Right Preview Card */}
          <div className="relative">
            <div className="bg-orange-50 border border-orange-200 rounded-2xl shadow p-6">
              <div className="flex items-center justify-between mb-5">
                <h4 className="font-bold text-gray-900">App Preview</h4>
                <span className="text-xs bg-orange-100 text-orange-700 px-3 py-1 rounded-full font-semibold">
                  Demo UI
                </span>
              </div>

              {/* Fake Mobile UI Preview */}
              <div className="bg-white border border-orange-200 rounded-2xl p-5 shadow-sm">
                <div className="flex items-center justify-between">
                  <div className="font-semibold text-gray-900">Dashboard</div>
                  <div className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded-full">
                    Live
                  </div>
                </div>

                <div className="mt-4 space-y-3">
                  <div className="p-4 rounded-xl bg-orange-50 border border-orange-200">
                    <p className="text-sm font-semibold text-gray-900">
                      Trip Status
                    </p>
                    <p className="text-sm text-gray-600">
                      In Transit → Ahmedabad to Mumbai
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-orange-50 border border-orange-200">
                    <p className="text-sm font-semibold text-gray-900">
                      Payment
                    </p>
                    <p className="text-sm text-gray-600">
                      Invoice Generated → Pending
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-orange-50 border border-orange-200">
                    <p className="text-sm font-semibold text-gray-900">
                      Support
                    </p>
                    <p className="text-sm text-gray-600">
                      WhatsApp / Helpdesk available
                    </p>
                  </div>
                </div>

                <button
                  className="mt-5 w-full bg-orange-500 text-white py-3 rounded-xl font-semibold hover:bg-orange-600 transition"
                  type="button"
                >
                  Continue
                </button>
              </div>
            </div>

            {/* Decorative dot */}
            <div className="hidden lg:block absolute -top-4 -right-4 w-14 h-14 bg-orange-200 rounded-full blur-sm opacity-60" />
          </div>
        </div>
      </Container>
    </section>
  );
}

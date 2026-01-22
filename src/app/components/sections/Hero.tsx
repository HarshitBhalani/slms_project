import Container from "../ui/Container";

export default function Hero() {
  return (
    <section id="home" className="min-h-[90vh] flex items-center bg-white">
      <Container>
        <div className="text-center">
          <span className="inline-block bg-orange-100 text-orange-700 px-4 py-1 rounded-full text-sm font-semibold">
            Pan-India Logistics Platform
          </span>

          <h1 className="text-4xl md:text-5xl font-bold mt-5 text-gray-900">
            Smart Logistics for Shippers & Truckers
          </h1>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Book trucks, track trips, manage payments, and streamline logistics with a simple role-based platform.
          </p>

          <div className="flex justify-center gap-4 mt-8 flex-wrap">
            <button className="bg-orange-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-orange-600 transition shadow">
              I am a Shipper
            </button>

            <button className="bg-white border border-orange-300 text-orange-600 px-6 py-3 rounded-xl font-semibold hover:bg-orange-50 transition shadow">
              I am a Trucker
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}

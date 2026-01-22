import Container from "../ui/Container";
import { FaInstagram, FaLinkedin, FaFacebook, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-orange-50 border-t border-orange-200 mt-16">
      <Container>
        <div className="py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company */}
          <div>
            <h3 className="font-bold text-lg text-orange-700">Company</h3>
            <p className="text-sm text-gray-600 mt-2 leading-relaxed">
              Smart logistics platform for Shippers & Truckers across India.
              Book trucks, track trips, manage payments and simplify operations.
            </p>

            {/* ✅ Social Icons */}
            <div className="flex items-center gap-3 mt-5">
              <a
                href="#"
                className="w-10 h-10 rounded-xl bg-white border border-orange-200 shadow-sm flex items-center justify-center text-orange-600 hover:bg-orange-100 transition"
                aria-label="Instagram"
                title="Instagram"
              >
                <FaInstagram size={18} />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-xl bg-white border border-orange-200 shadow-sm flex items-center justify-center text-orange-600 hover:bg-orange-100 transition"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <FaLinkedin size={18} />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-xl bg-white border border-orange-200 shadow-sm flex items-center justify-center text-orange-600 hover:bg-orange-100 transition"
                aria-label="Facebook"
                title="Facebook"
              >
                <FaFacebook size={18} />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-xl bg-white border border-orange-200 shadow-sm flex items-center justify-center text-orange-600 hover:bg-orange-100 transition"
                aria-label="Twitter"
                title="Twitter"
              >
                <FaXTwitter size={18} />
              </a>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-bold text-lg text-orange-700">Legal</h3>
            <ul className="text-sm text-gray-600 mt-2 space-y-2">
              <li className="hover:text-orange-600 cursor-pointer transition">
                Terms & Conditions
              </li>
              <li className="hover:text-orange-600 cursor-pointer transition">
                Refund Policy
              </li>
              <li className="hover:text-orange-600 cursor-pointer transition">
                Privacy Policy
              </li>
              <li className="hover:text-orange-600 cursor-pointer transition">
                Cookies Policy
              </li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="font-bold text-lg text-orange-700">About</h3>
            <ul className="text-sm text-gray-600 mt-2 space-y-2">
              <li className="hover:text-orange-600 cursor-pointer transition">
                Blog
              </li>
              <li className="hover:text-orange-600 cursor-pointer transition">
                Branches
              </li>
              <li className="hover:text-orange-600 cursor-pointer transition">
                POD Points
              </li>
              <li className="hover:text-orange-600 cursor-pointer transition">
                Glossary
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg text-orange-700">Services</h3>
            <ul className="text-sm text-gray-600 mt-2 space-y-2">
              <li className="hover:text-orange-600 cursor-pointer transition">
                Hire Truck
              </li>
              <li className="hover:text-orange-600 cursor-pointer transition">
                Become Vendor
              </li>
              <li className="hover:text-orange-600 cursor-pointer transition">
                Trip Tracking
              </li>
              <li className="hover:text-orange-600 cursor-pointer transition">
                Payment Workflow
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-orange-200 py-4 text-center text-sm text-gray-600">
          © {new Date().getFullYear()} SLMS — All rights reserved
        </div>
      </Container>
    </footer>
  );
}

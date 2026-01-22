"use client";

import { useState } from "react";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import { Phone, Truck, Package, MessageCircle, MapPin } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    mobile: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;

    // ✅ Mobile number: allow only digits, max 10
    if (name === "mobile") {
      const onlyDigits = value.replace(/\D/g, "").slice(0, 10);
      setForm((prev) => ({ ...prev, mobile: onlyDigits }));

      if (onlyDigits.length !== 10) {
        setErrors((prev) => ({
          ...prev,
          mobile: "Mobile number must be exactly 10 digits.",
        }));
      } else {
        setErrors((prev) => ({ ...prev, mobile: "" }));
      }
      return;
    }

    // ✅ Email validation
    if (name === "email") {
      setForm((prev) => ({ ...prev, email: value }));

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        setErrors((prev) => ({
          ...prev,
          email: "Enter a valid email address (example: abc@gmail.com).",
        }));
      } else {
        setErrors((prev) => ({ ...prev, email: "" }));
      }
      return;
    }

    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const newErrors = {
      email: "",
      mobile: "",
    };

    if (!emailRegex.test(form.email)) {
      newErrors.email = "Enter a valid email address (example: abc@gmail.com).";
    }

    if (form.mobile.length !== 10) {
      newErrors.mobile = "Mobile number must be exactly 10 digits.";
    }

    setErrors(newErrors);

    if (newErrors.email || newErrors.mobile) return;

    alert("Thanks! Your inquiry has been submitted ✅");
    setForm({ name: "", email: "", mobile: "", message: "" });
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <Container>
        <SectionTitle
          title="Contact Us"
          subtitle="Need help with shipping or truck operations? Reach out anytime."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* ✅ Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white border border-orange-200 rounded-2xl shadow p-7 space-y-4"
          >
            <div>
              <label className="text-sm font-semibold text-gray-700">
                Full Name <span className="text-red-600">*</span>
              </label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="mt-2 w-full border border-orange-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-orange-400"
                required
              />
            </div>

            <div>
              <label className="text-sm font-semibold text-gray-700">
                Email Address <span className="text-red-600">*</span>
              </label>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="mt-2 w-full border border-orange-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-orange-400"
                required
              />
              {errors.email && (
                <p className="text-xs text-red-600 mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <label className="text-sm font-semibold text-gray-700">
                Mobile Number <span className="text-red-600">*</span>
              </label>
              <input
                name="mobile"
                value={form.mobile}
                onChange={handleChange}
                placeholder="Enter 10-digit number"
                inputMode="numeric"
                pattern="[0-9]{10}"
                maxLength={10}
                className="mt-2 w-full border border-orange-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-orange-400"
                required
              />
              {errors.mobile && (
                <p className="text-xs text-red-600 mt-1">{errors.mobile}</p>
              )}
            </div>

            <div>
              <label className="text-sm font-semibold text-gray-700">
                Message <span className="text-red-600">*</span>
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Write your inquiry..."
                rows={4}
                className="mt-2 w-full border border-orange-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-orange-400"
                required
              />
            </div>

            <button
              type="submit"
              disabled={!!errors.email || !!errors.mobile}
              className="
                w-full bg-orange-500 text-white py-3 rounded-xl font-semibold shadow
                hover:bg-orange-600 transition
                disabled:opacity-60 disabled:cursor-not-allowed
              "
            >
              Submit Inquiry
            </button>

            <p className="text-xs text-gray-500">
              <span className="text-red-600">*</span> indicates required fields
            </p>
          </form>

          {/* ✅ Support Info */}
          <div className="space-y-5">
            <div className="bg-orange-50 border border-orange-200 rounded-2xl shadow p-7">
              <h3 className="text-lg font-bold text-gray-900">
                Support Channels
              </h3>
              <p className="text-gray-600 mt-2">
                Choose the quickest method based on your requirement.
              </p>

              <div className="mt-5 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-orange-500 text-white flex items-center justify-center">
                    <Package size={18} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">
                      Shipper Support
                    </p>
                    <p className="text-gray-600 text-sm flex items-center gap-2 mt-1">
                      <Phone size={16} className="text-orange-600" />
                      +91 99999 99999
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-orange-500 text-white flex items-center justify-center">
                    <Truck size={18} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">
                      Trucker Support
                    </p>
                    <p className="text-gray-600 text-sm flex items-center gap-2 mt-1">
                      <Phone size={16} className="text-orange-600" />
                      +91 88888 88888
                    </p>
                  </div>
                </div>

                <a
                  href="https://wa.me/919999999999?text=Hello%20Support%2C%20I%20need%20help."
                  target="_blank"
                  className="flex items-start gap-3 p-4 rounded-xl bg-white border border-orange-200 hover:bg-orange-100 transition"
                >
                  <div className="w-10 h-10 rounded-xl bg-orange-500 text-white flex items-center justify-center">
                    <MessageCircle size={18} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">WhatsApp</p>
                    <p className="text-gray-600 text-sm">
                      Chat instantly with support team
                    </p>
                  </div>
                </a>
              </div>
            </div>

            <div className="bg-white border border-orange-200 rounded-2xl shadow p-7">
              <h3 className="text-lg font-bold text-gray-900">
                Registered Address
              </h3>
              <p className="text-gray-600 mt-2">
                View location and directions on Google Maps.
              </p>

              <a
                href="https://maps.google.com"
                target="_blank"
                className="inline-flex mt-4 items-center gap-2 bg-orange-500 text-white px-5 py-3 rounded-xl font-semibold hover:bg-orange-600 transition shadow"
              >
                <MapPin size={18} />
                Open on Google Maps
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

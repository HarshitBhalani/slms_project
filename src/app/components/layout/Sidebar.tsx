"use client";

import { useEffect, useState } from "react";
import { Truck, PackageSearch, TrendingUp, ArrowUp, Bell } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

type SidebarItem = {
  label: string;
  href: string;
  icon?: any;
  customIcon?: any;
  external?: boolean;
  flip?: boolean;
};

const sidebarItems: SidebarItem[] = [
  { label: "Shipper", href: "#home", icon: PackageSearch },
  { label: "Trucker", href: "#home", icon: Truck, flip: true },
  {
    label: "WhatsApp",
    href: "https://wa.me/919999999999?text=Hello%20Support%2C%20I%20need%20help.",
    customIcon: FaWhatsapp,
    external: true,
  },
];

export default function Sidebar() {
  const [showTop, setShowTop] = useState(false);

  // ✅ show Back-to-top only after 50% page scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = docHeight > 0 ? scrollTop / docHeight : 0;
      setShowTop(scrollPercent >= 0.5);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* ✅ Desktop Sidebar */}
      <aside className="fixed right-0 top-1/3 z-50 hidden md:flex flex-col gap-4">
        {/* ✅ Normal Buttons */}
        {sidebarItems.map((item) => {
          const Icon = item.icon;
          const CustomIcon = item.customIcon;

          return (
            <a
              key={item.label}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              className="relative w-12 h-12 group"
              aria-label={item.label}
            >
              {/* ✅ Tooltip Label */}
              <span
                className="
                  absolute right-14 top-1/2 -translate-y-1/2
                  px-3 py-1.5
                  rounded-lg
                  bg-white
                  border border-orange-200
                  text-orange-700 text-sm font-semibold
                  shadow-md
                  opacity-0 group-hover:opacity-100
                  translate-x-2 group-hover:translate-x-0
                  transition-all duration-200
                  whitespace-nowrap
                  pointer-events-none
                "
              >
                {item.label}
              </span>

              {/* ✅ Icon Circle */}
              <div
                className="
                  absolute right-0 top-0
                  w-12 h-12 rounded-full
                  bg-white border border-orange-200 shadow-md
                  flex items-center justify-center
                  text-orange-600
                  hover:bg-orange-50 hover:border-orange-300
                  transition duration-200
                "
              >
                {CustomIcon ? (
                  <CustomIcon size={22} className="text-green-600" />
                ) : Icon ? (
                  <Icon size={20} className={item.flip ? "scale-x-[-1]" : ""} />
                ) : null}
              </div>
            </a>
          );
        })}

        {/* ✅ Truck Rate Button */}
        <div className="relative w-12 h-12 group">
          {/* ✅ Notification Popup (clickable and stays open on hover) */}
          <a
            href="/truck-rate"
            className="
              absolute right-14 top-1/2 -translate-y-1/2
              w-[340px]
              bg-white border border-orange-200
              rounded-2xl shadow-lg
              px-4 py-3
              opacity-0 group-hover:opacity-100
              translate-x-3 group-hover:translate-x-0
              transition-all duration-250
              cursor-pointer
            "
            aria-label="Open Truck Rate Page"
            title="Open Truck Rate Page"
          >
            <div className="flex items-start gap-3">
              {/* ✅ Left Icon */}
              <div className="w-10 h-10 rounded-xl bg-orange-100 border border-orange-200 flex items-center justify-center text-orange-700 shrink-0">
                <Bell size={18} />
              </div>

              {/* Text */}
              <div className="flex-1 leading-tight">
                <p className="text-xs font-bold text-orange-700">
                  Truck Rate Update
                </p>

                <p className="text-sm font-semibold text-gray-900 mt-1">
                  Gujarat → Delhi{" "}
                  <span className="text-orange-600 font-bold">₹30,000</span>
                </p>

                <p className="text-xs text-gray-600 mt-1">
                  Click to view full pricing details →
                </p>
              </div>

              {/* ✅ Right Icon */}
              <div className="w-10 h-10 rounded-xl bg-orange-100 border border-orange-200 flex items-center justify-center text-orange-700 shrink-0">
                <TrendingUp size={18} />
              </div>
            </div>
          </a>

          {/* ✅ Truck Rate Icon Circle */}
          <a
            href="/truck-rate"
            className="
              absolute right-0 top-0
              w-12 h-12 rounded-full
              bg-white border border-orange-200 shadow-md
              flex items-center justify-center
              text-orange-600
              hover:bg-orange-50 hover:border-orange-300
              transition duration-200
              z-20
            "
            aria-label="Truck Rate"
            title="Truck Rate"
          >
            <TrendingUp size={20} />
          </a>

          {/* ✅ Orange dot (not cut) */}
          <span
            className="
              absolute top-1 right-1
              w-2.5 h-2.5 bg-orange-500 rounded-full
              ring-2 ring-white
              z-30
            "
          />
        </div>
      </aside>

      {/* ✅ Back To Top Button (show only after 50% scroll) */}
      {showTop && (
        <a
          href="#home"
          className="
            fixed bottom-24 md:bottom-6 right-0 z-50
            w-12 h-12 rounded-full
            bg-white border border-orange-200 shadow-md
            flex items-center justify-center
            text-orange-600
            hover:bg-orange-50 hover:border-orange-300
            transition
          "
          aria-label="Back to top"
          title="Back to top"
        >
          <ArrowUp size={20} />
        </a>
      )}

      {/* ✅ Mobile Bottom Bar */}
      <div
        className="
          fixed bottom-0 left-0 right-0 z-40
          bg-white/85 backdrop-blur-xl border-t border-orange-200
          md:hidden
        "
      >
        <div className="flex justify-around items-center py-3">
          <a href="#home" className="flex flex-col items-center text-orange-600">
            <PackageSearch size={22} />
            <span className="text-[11px] font-semibold">Shipper</span>
          </a>

          <a href="#home" className="flex flex-col items-center text-orange-600">
            <Truck size={22} className="scale-x-[-1]" />
            <span className="text-[11px] font-semibold">Trucker</span>
          </a>

          <a
            href="https://wa.me/919999999999"
            target="_blank"
            className="flex flex-col items-center text-green-600"
          >
            <FaWhatsapp size={24} />
            <span className="text-[11px] font-semibold">WhatsApp</span>
          </a>

          <a
            href="/truck-rate"
            className="flex flex-col items-center text-orange-600 relative"
          >
            <TrendingUp size={22} />
            <span className="text-[11px] font-semibold">Rate</span>
            <span className="absolute -top-1 right-2 w-2.5 h-2.5 bg-orange-500 rounded-full border-2 border-white" />
          </a>
        </div>
      </div>
    </>
  );
}

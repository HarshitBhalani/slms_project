import { NAV_LINKS } from "@/config/site";

export default function NavLinks() {
  return (
    <nav className="flex items-center gap-6">
      {NAV_LINKS.map((item) => (
        <a
          key={item.label}
          href={item.href}
          className="text-sm font-medium text-gray-700 hover:text-orange-600 transition"
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}

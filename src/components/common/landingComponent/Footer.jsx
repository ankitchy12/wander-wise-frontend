import { Clock, Globe, Globe2, House, Compass } from "lucide-react";

const footerLinks = {
  Product: ["Features", "Pricing", "Destinations", "Itineraries"],
  Company: ["About", "Careers", "Blog", "Press"],
  Resources: ["Help Center", "Travel Guides", "Community", "Contact"],
  Legal: ["Privacy", "Terms", "Cookies", "Licenses"],
};

const socialLinks = [
  { icon: Globe, label: "Globe", href: "#" },
  { icon: Clock, label: "Clock", href: "#" },
  { icon: House, label: "House", href: "#" },
  { icon: Globe2, label: "Globe2", href: "#" },
];

export default function Footer() {
  return (
    <footer className="border-t border-stone-400 bg-teal-900 px-4 py-12 sm:px-6 lg:px-8 ">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2">
              <Compass size={24} className=" text-amber-400 " />
              <span className="text-lg font-semibold text-white">Wander Wise</span>
            </div>
            <p className="mt-3 max-w-xs text-sm text-stone-400">
              Plan smarter, travel better. Your personal companion for unforgettable
              journeys.
            </p>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="mb-3 text-sm font-semibold text-white">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-stone-400 transition-colors hover:text-white"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-stone-400 pt-8 sm:flex-row">
          <p className="text-sm text-stone-400">
            {new Date().getFullYear()} Wander Wise. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="text-stone-400 transition-colors hover:text-white"
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

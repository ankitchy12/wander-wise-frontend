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
    <footer className="border-t border-blue-600 bg-amber-200 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2">
              <Compass size={24} className="text-primary" />
              <span className="text-lg font-semibold text-foreground">Wander Wise</span>
            </div>
            <p className="mt-3 max-w-xs text-sm text-muted-foreground">
              Plan smarter, travel better. Your personal companion for unforgettable
              journeys.
            </p>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="mb-3 text-sm font-semibold text-foreground">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            {new Date().getFullYear()} Wander Wise. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="text-muted-foreground transition-colors hover:text-foreground"
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

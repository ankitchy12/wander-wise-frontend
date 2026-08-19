import { Compass, MapPin, Plane, Wallet, Users, Calendar, Globe } from "lucide-react";
import Navbar from "../components/common/Navbar";

const features = [
  "Trip Planning",
  "Budget Tracking",
  "Itinerary Builder",
  "Destination Guides",
  "Group Travel",
  "Local Experiences",
];

const stats = [
  { value: "50K+", label: "Travelers planned" },
  { value: "120+", label: "Destinations" },
  { value: "4.9", label: "Average rating" },
];

export default function About() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-blue-50 via-white to-rose-50 px-1 py-1 sm:px-6 lg:px-8 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900">
      <Navbar />
      <div className="mx-auto max-w-4xl">
        <div className="rounded-3xl border border-border bg-background/80 p-8 shadow-sm backdrop-blur-sm sm:p-12">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-rose-200 to-blue-200 dark:from-rose-900 dark:to-blue-900">
                <Compass size={40} className="text-foreground" />
              </div>
              <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                Hi there!
              </h1>
              <p className="mt-6 leading-relaxed text-muted-foreground">
                We are Wander Wise, a small team passionate about making travel
                planning simple, enjoyable, and personal. We believe the best trips
                start with a clear plan and room for spontaneity.
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Built for travelers who want to spend less time organizing and more
                time exploring, Wander Wise helps you map itineraries, track budgets,
                and discover destinations that match your style.
              </p>
            </div>

            <div className="flex flex-col justify-center">
              <div className="grid grid-cols-3 gap-4 text-center">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <p className="text-2xl font-semibold text-foreground sm:text-3xl">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-16 grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                Our journey so far
              </h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Wander Wise began as a weekend project between friends who loved
                traveling but disliked spreadsheets. What started as a simple
                itinerary tool grew into a full travel companion used by thousands
                of travelers around the world.
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Today, we are focused on building thoughtful features that keep
                planning flexible while helping you stay on budget and on
                schedule.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                What we offer
              </h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {features.map((feature) => (
                  <span
                    key={feature}
                    className="inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary px-3 py-1.5 text-sm font-medium text-secondary-foreground"
                  >
                    {feature === "Trip Planning" && <MapPin size={14} />}
                    {feature === "Budget Tracking" && <Wallet size={14} />}
                    {feature === "Itinerary Builder" && <Calendar size={14} />}
                    {feature === "Destination Guides" && <Globe size={14} />}
                    {feature === "Group Travel" && <Users size={14} />}
                    {feature === "Local Experiences" && <Plane size={14} />}
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

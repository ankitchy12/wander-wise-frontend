import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    role: "Solo Traveler",
    avatar: "SM",
    quote:
      "Wander Wise transformed how I plan trips. The itinerary builder saved me hours of research and helped me discover hidden gems.",
    rating: 5,
  },
  {
    id: 2,
    name: "James Chen",
    role: "Family Traveler",
    avatar: "JC",
    quote:
      "Planning a vacation with kids used to be stressful. This tool made it simple to coordinate activities everyone enjoyed.",
    rating: 5,
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    role: "Adventure Enthusiast",
    avatar: "ER",
    quote:
      "The budget tracking and collaborative features are exactly what I needed for group trips with friends.",
    rating: 4,
  },
];

export default function Testimonials() {
  return (
    <section className="bg-background py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground">
            Loved by travelers
          </h2>
          <p className="mt-3 text-muted-foreground">
            See what our community has to say about their journeys with Wander Wise.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="rounded-xl border border-border bg-card p-6 shadow-sm"
            >
              <div className="mb-4 flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star
                    key={index}
                    size={16}
                    className={
                      index < testimonial.rating
                        ? "fill-primary text-primary"
                        : "text-muted-foreground"
                    }
                  />
                ))}
              </div>

              <div className="mb-6 flex items-start gap-3">
                <Quote size={20} className="mt-1 shrink-0 text-muted-foreground" />
                <p className="text-card-foreground leading-relaxed">
                  {testimonial.quote}
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-medium text-primary-foreground">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-medium text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

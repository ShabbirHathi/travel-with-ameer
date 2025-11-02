import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah & James",
      country: "Australia",
      text: "Ameer made our Sri Lankan adventure unforgettable! His local knowledge and friendly nature made every day special. Highly recommend!",
      rating: 5
    },
    {
      name: "Emma Thompson",
      country: "United Kingdom",
      text: "Best travel experience ever! Ameer took us to stunning locations and shared fascinating stories about Sri Lankan culture.",
      rating: 5
    },
    {
      name: "Michael Chen",
      country: "USA",
      text: "Professional, reliable, and genuinely caring. Ameer went above and beyond to ensure we had the perfect trip.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            What Travelers Say
          </h2>
          <p className="text-lg text-muted-foreground">
            Read reviews from visitors who've experienced Sri Lanka with me
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card border-border hover:shadow-lg transition-shadow">
              <CardContent className="pt-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-secondary text-secondary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold text-card-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.country}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

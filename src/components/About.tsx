import { Award, MapPin, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const features = [
    {
      icon: MapPin,
      title: "Local Expertise",
      description: "Deep knowledge of Sri Lanka's hidden gems and cultural treasures"
    },
    {
      icon: Users,
      title: "Personalized Service",
      description: "Every tour is tailored to your interests and preferences"
    },
    {
      icon: Award,
      title: "Trusted Guide",
      description: "Highly recommended by travelers from around the world"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Meet Your Guide
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Hi, I'm Ameer! I'm passionate about sharing the beauty and culture of my beloved Sri Lanka 
            with travelers from around the world. With years of experience as a local tour guide, I provide 
            comfortable private car services and create personalized journeys that match your interests.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mt-4">
            Whether you're seeking adventure in the mountains, relaxation on pristine beaches, or 
            immersion in ancient cultural sites, I'll ensure your trip is safe, comfortable, and truly memorable.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <Card key={index} className="border-border hover:shadow-lg transition-shadow bg-card">
              <CardContent className="pt-8 text-center">
                <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-card-foreground">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;

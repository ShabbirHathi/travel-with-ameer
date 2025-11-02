import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mountain, Waves, Palmtree, Camera, Landmark, UtensilsCrossed } from "lucide-react";

const Services = () => {
  const tours = [
    {
      icon: Mountain,
      title: "Hill Country & Tea Plantations",
      description: "Experience the cool climate of Ella, Nuwara Eliya, and lush tea estates",
      highlights: ["Nine Arch Bridge", "Tea Factory Tours", "Mountain Hiking"]
    },
    {
      icon: Landmark,
      title: "Cultural Triangle",
      description: "Discover ancient cities and UNESCO World Heritage Sites",
      highlights: ["Sigiriya Rock Fortress", "Dambulla Cave Temple", "Ancient Polonnaruwa"]
    },
    {
      icon: Waves,
      title: "Beach & Coastal Tours",
      description: "Relax on pristine beaches and explore coastal towns",
      highlights: ["Mirissa Beach", "Galle Fort", "Whale Watching"]
    },
    {
      icon: Palmtree,
      title: "Safari Adventures",
      description: "Wildlife encounters in national parks and nature reserves",
      highlights: ["Yala National Park", "Elephant Safari", "Bird Watching"]
    },
    {
      icon: UtensilsCrossed,
      title: "Food & Culture Tours",
      description: "Taste authentic Sri Lankan cuisine and local experiences",
      highlights: ["Spice Gardens", "Local Markets", "Traditional Meals"]
    },
    {
      icon: Camera,
      title: "Photography Tours",
      description: "Capture stunning landscapes and cultural moments",
      highlights: ["Sunrise/Sunset Spots", "Local Life", "Scenic Viewpoints"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Popular Tour Experiences
          </h2>
          <p className="text-lg text-muted-foreground">
            From misty mountains to golden beaches, discover the diverse beauty of Sri Lanka
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {tours.map((tour, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:scale-105 bg-card border-border">
              <CardHeader>
                <div className="mb-4 inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-primary to-accent">
                  <tour.icon className="h-7 w-7 text-white" />
                </div>
                <CardTitle className="text-xl text-card-foreground">{tour.title}</CardTitle>
                <CardDescription className="text-muted-foreground">{tour.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {tour.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

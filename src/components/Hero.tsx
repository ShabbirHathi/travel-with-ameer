import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import heroImage from "@/assets/hero-srilanka.jpg";

const Hero = () => {
  const whatsappNumber = "94713580485";
  const whatsappMessage = "Hello! I'm interested in booking a tour with Travel with Ameer.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-primary/70 to-accent/80" />
      
      <div className="container relative z-10 px-4 text-center">
        <h1 className="mb-6 text-5xl md:text-7xl font-bold text-white animate-fade-in">
          Explore Sri Lanka with Ameer
        </h1>
        <p className="mb-8 text-xl md:text-2xl text-white/95 max-w-2xl mx-auto animate-fade-in">
          Personalized tours, unforgettable memories, and authentic Sri Lankan experiences
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
          <Button
            size="lg"
            variant="hero"
            onClick={() => window.open(whatsappUrl, '_blank')}
            className="text-lg gap-2"
          >
            <Phone className="h-5 w-5" />
            Book Your Tour Now
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-lg border-2 border-white bg-white/10 text-white hover:bg-white hover:text-primary backdrop-blur-sm"
          >
            Explore Tours
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

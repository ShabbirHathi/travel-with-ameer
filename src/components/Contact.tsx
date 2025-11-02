import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, MessageCircle, Mail } from "lucide-react";

const Contact = () => {
  const phoneNumber = "+94 71 358 0485";
  const whatsappNumber = "94713580485";
  const whatsappMessage = "Hello Ameer! I would like to inquire about booking a tour.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section className="py-20 bg-background">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Ready to Start Your Adventure?
          </h2>
          <p className="text-lg text-muted-foreground">
            Get in touch to plan your perfect Sri Lankan journey
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-primary to-accent text-white border-0 shadow-2xl">
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-3xl mb-2">Travel with Ameer</CardTitle>
              <CardDescription className="text-white/90 text-lg">
                Your trusted guide to Sri Lanka's wonders
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-col md:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  variant="secondary"
                  onClick={() => window.open(whatsappUrl, '_blank')}
                  className="gap-2 text-lg"
                >
                  <MessageCircle className="h-5 w-5" />
                  WhatsApp: {phoneNumber}
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => window.open(`tel:${phoneNumber}`, '_blank')}
                  className="gap-2 text-lg border-2 border-white bg-white/10 text-white hover:bg-white hover:text-primary backdrop-blur-sm"
                >
                  <Phone className="h-5 w-5" />
                  Call Now
                </Button>
              </div>

              <div className="text-center pt-4 border-t border-white/20">
                <p className="text-white/90 mb-2">Available 7 days a week</p>
                <p className="text-sm text-white/80">
                  Quick response time • Flexible itineraries • Competitive rates
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="text-center mt-12 text-muted-foreground">
            <p className="flex items-center justify-center gap-2">
              <Mail className="h-4 w-4" />
              Prefer email? Contact us through WhatsApp for fastest response
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

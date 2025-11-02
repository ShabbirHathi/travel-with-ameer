import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppButton = () => {
  const [showPopup, setShowPopup] = useState(false);
  const whatsappNumber = "94713580485";
  const whatsappMessage = "Hello Ameer! I'm interested in booking a tour with you.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  const handleWhatsAppClick = () => {
    window.open(whatsappUrl, '_blank');
    setShowPopup(false);
  };

  return (
    <>
      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        {showPopup && (
          <div className="absolute bottom-20 right-0 w-80 bg-card border-2 border-border rounded-lg shadow-2xl animate-scale-in mb-2">
            <div className="bg-gradient-to-r from-primary to-accent p-4 rounded-t-lg flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                  <MessageCircle className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Travel with Ameer</h3>
                  <p className="text-white/80 text-sm">Online now</p>
                </div>
              </div>
              <button
                onClick={() => setShowPopup(false)}
                className="text-white/80 hover:text-white transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="p-4 bg-card">
              <div className="bg-muted/50 rounded-lg p-3 mb-4">
                <p className="text-sm text-foreground">
                  👋 Hi there! Ready to explore Sri Lanka?
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  Chat with me on WhatsApp to plan your perfect adventure!
                </p>
              </div>
              <Button
                onClick={handleWhatsAppClick}
                className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white gap-2"
              >
                <MessageCircle className="h-5 w-5" />
                Start WhatsApp Chat
              </Button>
            </div>
          </div>
        )}

        {/* Main WhatsApp Button */}
        <button
          onClick={() => setShowPopup(!showPopup)}
          className="w-16 h-16 bg-[#25D366] hover:bg-[#20BA5A] rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 animate-bounce"
          aria-label="Open WhatsApp Chat"
        >
          <MessageCircle className="h-8 w-8 text-white" />
        </button>
      </div>
    </>
  );
};

export default WhatsAppButton;

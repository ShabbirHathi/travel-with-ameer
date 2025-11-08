import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-2">Travel with Ameer</h3>
            <p className="text-white/80">Your Gateway to Sri Lanka's Beauty</p>
          </div>

          {/* Quick Links Section */}
          <div className="text-center">
            <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
            <div className="flex flex-col gap-2">
              <a href="#about" className="text-white/70 hover:text-white transition-colors">About</a>
              <a href="#services" className="text-white/70 hover:text-white transition-colors">Services</a>
              <a href="#gallery" className="text-white/70 hover:text-white transition-colors">Gallery</a>
              <a href="#contact" className="text-white/70 hover:text-white transition-colors">Contact</a>
            </div>
          </div>

          {/* Made With Love Section */}
          <div className="text-center md:text-right">
            <p className="text-sm text-white/70 flex items-center justify-center md:justify-end gap-1 mb-3">
              Made with <Heart className="h-4 w-4 fill-secondary text-secondary" /> for travelers worldwide
            </p>
            <p className="text-sm text-white/70">
              Crafted by{" "}
              <a 
                href="https://burhanitechsolutions.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-secondary hover:text-secondary/80 transition-colors underline"
              >
                Burhani Tech Solutions
              </a>
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-6 text-center">
          <p className="text-xs text-white/60">
            © {new Date().getFullYear()} Travel with Ameer. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

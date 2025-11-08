import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-16">
      <div className="container px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <h3 className="text-4xl font-bold mb-4">Travel with Ameer</h3>
            <p className="text-xl text-white/80">Your Gateway to Sri Lanka's Beauty</p>
          </div>

          {/* Made With Love Section */}
          <div className="text-center md:text-right flex flex-col justify-center">
            <p className="text-lg text-white/70 flex items-center justify-center md:justify-end gap-2 mb-4">
              Made with <Heart className="h-5 w-5 fill-secondary text-secondary" /> for travelers worldwide
            </p>
            <p className="text-lg text-white/70">
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
        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-sm text-white/60">
            © {new Date().getFullYear()} Travel with Ameer. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

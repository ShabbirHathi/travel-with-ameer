import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-8">
      <div className="container px-4">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-2">Travel with Ameer</h3>
          <p className="text-white/80 mb-4">Your Gateway to Sri Lanka's Beauty</p>
          <p className="text-sm text-white/70 flex items-center justify-center gap-1">
            Made with <Heart className="h-4 w-4 fill-secondary text-secondary" /> for travelers worldwide
          </p>
          <p className="text-xs text-white/60 mt-4">
            © {new Date().getFullYear()} Travel with Ameer. All rights reserved.
          </p>
          <p className="text-sm text-white/70 mt-2">
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
    </footer>
  );
};

export default Footer;

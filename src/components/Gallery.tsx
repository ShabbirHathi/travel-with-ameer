import galleryWaterfall from "@/assets/gallery-waterfall.jpg";
import galleryBoat from "@/assets/gallery-boat.jpg";
import gallerySafari from "@/assets/gallery-safari.jpg";
import galleryHotel from "@/assets/gallery-hotel.jpg";
import galleryTea from "@/assets/gallery-tea.jpg";
import galleryHistoric from "@/assets/gallery-historic.jpg";
import galleryBoardgame from "@/assets/gallery-boardgame.jpg";
import galleryTemple from "@/assets/gallery-temple.jpg";
import gallerySunset from "@/assets/gallery-sunset.jpg";
import galleryRuins from "@/assets/gallery-ruins.jpg";

const Gallery = () => {
  const images = [
    { src: galleryWaterfall, alt: "Waterfall adventure with travelers" },
    { src: galleryTemple, alt: "Golden Temple cultural tour" },
    { src: gallerySafari, alt: "Safari tour experience" },
    { src: galleryTea, alt: "Tea plantation visit" },
    { src: gallerySunset, alt: "Sunset viewing experience" },
    { src: galleryRuins, alt: "Ancient ruins exploration" },
    { src: galleryBoat, alt: "Boat tour adventure" },
    { src: galleryHistoric, alt: "Historic site visit" },
    { src: galleryHotel, alt: "Happy customer with Sri Lanka jersey" },
    { src: galleryBoardgame, alt: "Cultural activities with travelers" }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Happy Travelers, Beautiful Memories
          </h2>
          <p className="text-lg text-muted-foreground">
            Join the many satisfied travelers who've explored Sri Lanka with me
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
          {images.map((image, index) => (
            <div
              key={index}
              className="aspect-square overflow-hidden rounded-lg hover:scale-105 transition-transform duration-300 cursor-pointer shadow-md hover:shadow-xl"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;

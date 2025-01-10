import Hero from "../../components/Hero/Hero";
import FooterSection from "../Home/components/FooterSection";
import GallerySection from "./components/GallerySection";

function Gallery() {
  return (
    <div>
      <Hero type="gallery" />
      <GallerySection />
      <FooterSection />
    </div>
  );
}

export default Gallery;

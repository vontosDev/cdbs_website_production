import { useEffect } from "react";
import HS1 from "../../../assets/gallery/HS1.jpg";
import HS2 from "../../../assets/gallery/HS2.jpg";
import HS3 from "../../../assets/gallery/HS3.jpg";

function NewsSection() {
  useEffect(() => {
    const photobanner = document.querySelector(".photobanner");
    const now = Date.now(); // Get the current timestamp
    const duration = 20000; // Animation duration in ms (20s)

    // Calculate starting offset based on time elapsed
    const elapsed = now % duration;
    const percentage = (elapsed / duration) * 100;

    // Set the initial position of the banner
    photobanner.style.animation = "none"; // Stop default animation
    photobanner.style.transform = `translateX(-${percentage}%)`;

    // Reapply the animation
    setTimeout(() => {
      photobanner.style.animation = `bannermove ${
        duration / 1000
      }s linear infinite`;
    }, 0);
  }, []);

  return (
    <div className="py-4 pr-4 w-100 border border-brand mr-96 mb-36 mt-96 slide-container">
      <div className="flex gap-1 photobanner overflow-hidden">
        <img src={HS1} className="object-fill h-images-carousel w-1/3" />
        <img src={HS2} className="object-fill h-images-carousel w-1/3" />
        <img src={HS3} className="object-fill h-images-carousel w-1/3" />
        <img src={HS1} className="object-fill h-images-carousel w-1/3" />
        <img src={HS2} className="object-fill h-images-carousel w-1/3" />
        <img src={HS3} className="object-fill h-images-carousel w-1/3" />
        <img src={HS1} className="object-fill h-images-carousel w-1/3" />
        <img src={HS2} className="object-fill h-images-carousel w-1/3" />
        <img src={HS3} className="object-fill h-images-carousel w-1/3" />
      </div>
    </div>
  );
}

export default NewsSection;

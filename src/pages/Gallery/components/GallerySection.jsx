import React, { useState, useEffect } from "react";
import "../../../styles/styles.css";

// Import images
import G1 from "../../../assets/gallery/G1.jpg";
import G1a from "../../../assets/gallery/G1a.jpg";
import G1b from "../../../assets/gallery/G1b.jpg";
import G2 from "../../../assets/gallery/G2.jpg";
import G3 from "../../../assets/gallery/G3.jpg";

import G4 from "../../../assets/gallery/G4.jpg";
import G5 from "../../../assets/gallery/G5.jpg";
import G6 from "../../../assets/gallery/G6.jpg";
import G6a from "../../../assets/gallery/G6a.jpg";
import G6b from "../../../assets/gallery/G6b.jpg";
import G7 from "../../../assets/gallery/G7.jpg";

import G8 from "../../../assets/gallery/G8.jpg";
import G9 from "../../../assets/gallery/G9.jpg";
import G9a from "../../../assets/gallery/G9a.jpg";
import G9b from "../../../assets/gallery/G9b.jpg";
import G10 from "../../../assets/gallery/G10.jpg";

import G11 from "../../../assets/gallery/G11.jpg";
import G11a from "../../../assets/gallery/G11a.jpg";
import G11b from "../../../assets/gallery/G11b.jpg";
import G12 from "../../../assets/gallery/G12.jpg";
import G13 from "../../../assets/gallery/G13.jpg";
import G14 from "../../../assets/gallery/G14.jpg";

import G15 from "../../../assets/gallery/G15.jpg";
import G15a from "../../../assets/gallery/G15a.jpg";
import G15b from "../../../assets/gallery/G15b.jpg";
import G16 from "../../../assets/gallery/G16.jpg";
import G17 from "../../../assets/gallery/G17.jpg";

import G18 from "../../../assets/gallery/G18.jpg";
import G19 from "../../../assets/gallery/G19.jpg";
import G20 from "../../../assets/gallery/G20.jpg";
import G20a from "../../../assets/gallery/G20a.jpg";
import G20b from "../../../assets/gallery/G20b.jpg";
import G21 from "../../../assets/gallery/G21.jpg";

import G22 from "../../../assets/gallery/G22.jpg";
import G23 from "../../../assets/gallery/G23.jpg";
import G23a from "../../../assets/gallery/G23a.jpg";
import G23b from "../../../assets/gallery/G23b.jpg";
import G24 from "../../../assets/gallery/G24.jpg";

import G25 from "../../../assets/gallery/G25.jpg";
import G25a from "../../../assets/gallery/G25a.jpg";
import G25b from "../../../assets/gallery/G25b.jpg";
import G26 from "../../../assets/gallery/G26.jpg";
import G27 from "../../../assets/gallery/G27.jpg";
import G28 from "../../../assets/gallery/G28.jpg";

import ArrowL from "../../../assets/images/arrowback.png";
import ArrowR from "../../../assets/images/arrowforward.png";
import image1 from "../../../assets/images/image1.jpg";
import image2 from "../../../assets/images/image2.jpg";

function GallerySection() {
  const [currentIndex1, setCurrentIndex1] = useState(0);
  const [currentIndex2, setCurrentIndex2] = useState(0);
  const [currentIndex3, setCurrentIndex3] = useState(0);
  const [currentIndex4, setCurrentIndex4] = useState(0);
  const [currentIndex5, setCurrentIndex5] = useState(0);
  const [currentIndex6, setCurrentIndex6] = useState(0);
  const [currentIndex7, setCurrentIndex7] = useState(0);
  const [currentIndex8, setCurrentIndex8] = useState(0);

  const images1 = [G6, G6a, G6b];
  const images2 = [G11, G11a, G11b];
  const images3 = [G1, G1a, G1b];
  const images4 = [G9, G9a, G9b];
  // const images5 = [G15, G15a, G15b];
  const images6 = [G20, G20a, G20b];
  const images7 = [G23, G23a, G23b];
  const images8 = [G25, G25a, G25b];

  const goToPrevious = (index, setIndex, length) => {
    const isFirstSlide = index === 0;
    const newIndex = isFirstSlide ? length - 1 : index - 1;
    setIndex(newIndex);
  };

  const goToNext = (index, setIndex, length) => {
    const isLastSlide = index === length - 1;
    const newIndex = isLastSlide ? 0 : index + 1;
    setIndex(newIndex);
  };

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

    setTimeout(() => {
      photobanner.style.animation = `bannermove ${
        duration / 1000
      }s linear infinite`;
    }, 0);
  }, []);

  return (
    <>
      {/* GALLERY 1 */}
      <div className="mx-20 mt-10">
        <div className="gallery-grid-1">
          <div className="image1">
            <div className="border border-brand  Gslide-container">
              <div className="flex gap-1 photobanner overflow-hidden">
                <img src={G1} className="gallery-img-1 w-1/3" />
                <img src={G1a} className=" gallery-img-1 w-1/3" />
                <img src={G1b} className="gallery-img-1 w-1/3" />
                <img src={G1} className="gallery-img-1 w-1/3" />
                <img src={G1a} className="gallery-img-1 w-1/3" />
                <img src={G1b} className="gallery-img-1 w-1/3" />
              </div>
            </div>
          </div>

          <div>
            <img src={G2} className="gallery-img-2" alt="gallery" />
          </div>
          <div>
            <img src={G3} className="gallery-img-3" alt="gallery" />
          </div>
        </div>
      </div>

      {/* GALLERY 2 */}
      <div className="mx-20 mt-10">
        <div className="gallery-grid-2 h-full">
          <div>
            <img src={G4} className="gallery-img-4" alt="gallery" />
          </div>
          <div>
            <img src={G5} className="gallery-img-5" alt="gallery" />
          </div>
          <div className="image2 relative">
            <button
              className="carousel-arrow left"
              onClick={() =>
                goToPrevious(currentIndex1, setCurrentIndex1, images1.length)
              }
            >
              <img src={ArrowL} alt="Previous" />
            </button>
            <img
              src={images1[currentIndex1]}
              className="gallery-img-1a"
              alt="carousel"
            />
            <button
              className="carousel-arrow right"
              onClick={() =>
                goToNext(currentIndex1, setCurrentIndex1, images1.length)
              }
            >
              <img src={ArrowR} alt="Next" />
            </button>
            <div className="carousel-dots">
              {images1.map((_, index) => (
                <span
                  key={index}
                  className={`dot ${index === currentIndex1 ? "active" : ""}`}
                  onClick={() => setCurrentIndex1(index)}
                ></span>
              ))}
            </div>
          </div>
          <div className="image3">
            <img src={G7} className="gallery-img-7" alt="gallery" />
          </div>
        </div>
      </div>

      {/* GALLERY 3 */}
      <div className="mx-20 mt-10">
        <div className="gallery-grid-3 h-full">
          <div>
            <img src={G8} className="gallery-img-8" alt="gallery" />
          </div>
          <div className="image7">
            <img
              src={images4[currentIndex4]}
              className="gallery-img-9"
              alt="carousel"
            />

            <div className="carousel-dots-grid3">
              {images4.map((_, index) => (
                <span
                  key={index}
                  className={`dot ${index === currentIndex4 ? "active" : ""}`}
                  onClick={() => setCurrentIndex4(index)}
                ></span>
              ))}
            </div>
          </div>
          <div>
            <img src={G10} className="gallery-img-10" alt="gallery" />
          </div>
        </div>
      </div>

      {/* GALLERY 4 */}
      <div className="mx-20 mt-10">
        <div className="gallery-grid-4 h-full">
          <div className="image8 relative">
            <button
              className="carousel-arrow left"
              onClick={() =>
                goToPrevious(currentIndex2, setCurrentIndex2, images2.length)
              }
            >
              <img src={ArrowL} alt="Previous" />
            </button>
            <img
              src={images2[currentIndex2]}
              className="gallery-img-11"
              alt="carousel"
            />
            <button
              className="carousel-arrow right"
              onClick={() =>
                goToNext(currentIndex2, setCurrentIndex2, images2.length)
              }
            >
              <img src={ArrowR} alt="Next" />
            </button>
            <div className="carousel-dots">
              {images2.map((_, index) => (
                <span
                  key={index}
                  className={`dot ${index === currentIndex2 ? "active" : ""}`}
                  onClick={() => setCurrentIndex2(index)}
                ></span>
              ))}
            </div>
          </div>

          <div className="image9">
            <img src={G12} className="gallery-img-12" alt="gallery" />
          </div>
          <div className="image9">
            <img src={G13} className="gallery-img-13" alt="gallery" />
          </div>
          <div className="image10">
            <img src={G14} className="gallery-img-14" alt="gallery" />
          </div>
        </div>
      </div>

      {/* GALLERY 5 */}
      <div className="mx-20 mt-10">
        <div className="gallery-grid-1">
          <div className="image1">
            <div className="border border-brand  Gslide-container">
              <div className="flex gap-1 photobanner overflow-hidden">
                <img src={G15} className="gallery-img-1 w-1/3" />
                <img src={G15a} className=" gallery-img-1 w-1/3" />
                <img src={G15b} className="gallery-img-1 w-1/3" />
                <img src={G15} className="gallery-img-1 w-1/3" />
                <img src={G15a} className="gallery-img-1 w-1/3" />
                <img src={G15b} className="gallery-img-1 w-1/3" />
              </div>
            </div>
          </div>

          <div>
            <img src={G16} className="gallery-img-2" alt="gallery" />
          </div>
          <div>
            <img src={G17} className="gallery-img-3" alt="gallery" />
          </div>
        </div>
      </div>

      {/* GALLERY 6 */}
      <div className="mx-20 mt-10">
        <div className="gallery-grid-2 h-full">
          <div>
            <img src={G18} className="gallery-img-4" alt="gallery" />
          </div>
          <div>
            <img src={G19} className="gallery-img-5" alt="gallery" />
          </div>
          <div className="image2 relative">
            <button
              className="carousel-arrow left"
              onClick={() =>
                goToPrevious(currentIndex6, setCurrentIndex6, images1.length)
              }
            >
              <img src={ArrowL} alt="Previous" />
            </button>
            <img
              src={images6[currentIndex6]}
              className="gallery-img-1a"
              alt="carousel"
            />
            <button
              className="carousel-arrow right"
              onClick={() =>
                goToNext(currentIndex6, setCurrentIndex6, images1.length)
              }
            >
              <img src={ArrowR} alt="Next" />
            </button>
            <div className="carousel-dots">
              {images6.map((_, index) => (
                <span
                  key={index}
                  className={`dot ${index === currentIndex6 ? "active" : ""}`}
                  onClick={() => setCurrentIndex6(index)}
                ></span>
              ))}
            </div>
          </div>
          <div className="image3">
            <img src={G21} className="gallery-img-7" alt="gallery" />
          </div>
        </div>
      </div>

      {/* GALLERY 7 */}
      <div className="mx-20 mt-10">
        <div className="gallery-grid-3 h-full">
          <div>
            <img src={G22} className="gallery-img-8" alt="gallery" />
          </div>
          <div className="image7">
            <img
              src={images7[currentIndex7]}
              className="gallery-img-9"
              alt="carousel"
            />

            <div className="carousel-dots-grid3">
              {images7.map((_, index) => (
                <span
                  key={index}
                  className={`dot ${index === currentIndex7 ? "active" : ""}`}
                  onClick={() => setCurrentIndex7(index)}
                ></span>
              ))}
            </div>
          </div>
          <div>
            <img src={G24} className="gallery-img-10" alt="gallery" />
          </div>
        </div>
      </div>

      {/* GALLERY 8 */}
      <div className="mx-20 mt-10">
        <div className="gallery-grid-4 h-full">
          <div className="image8 relative">
            <button
              className="carousel-arrow left"
              onClick={() =>
                goToPrevious(currentIndex8, setCurrentIndex8, images2.length)
              }
            >
              <img src={ArrowL} alt="Previous" />
            </button>
            <img
              src={images8[currentIndex8]}
              className="gallery-img-11"
              alt="carousel"
            />
            <button
              className="carousel-arrow right"
              onClick={() =>
                goToNext(currentIndex8, setCurrentIndex8, images2.length)
              }
            >
              <img src={ArrowR} alt="Next" />
            </button>
            <div className="carousel-dots">
              {images8.map((_, index) => (
                <span
                  key={index}
                  className={`dot ${index === currentIndex8 ? "active" : ""}`}
                  onClick={() => setCurrentIndex8(index)}
                ></span>
              ))}
            </div>
          </div>

          <div className="image9">
            <img src={G26} className="gallery-img-12" alt="gallery" />
          </div>
          <div className="image9">
            <img src={G27} className="gallery-img-13" alt="gallery" />
          </div>
          <div className="image10">
            <img src={G28} className="gallery-img-15" alt="gallery" />
          </div>
        </div>
      </div>
    </>
  );
}

export default GallerySection;

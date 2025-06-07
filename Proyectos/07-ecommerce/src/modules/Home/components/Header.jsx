import { useEffect, useRef, useState } from "react";

const images = [
  "1.avif",
  "2.avif",
  "3.avif",
  "4.avif",
];

export default function Carousel() {
  const carouselRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (carousel) {
      const items = carousel.querySelectorAll(".carousel-item");
      items[currentIndex]?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" });
    }
  }, [currentIndex]);

  return (
    <div className="relative">
      <div ref={carouselRef} className="carousel w-full h-96 overflow-x-scroll scroll-smooth snap-x snap-mandatory whitespace-nowrap no-scrollbar">
        {images.map((src, idx) => (
          <div
            key={idx}
            id={`item${idx + 1}`}
            className="carousel-item w-full h-96 inline-block snap-center"
          >
            <img src={src} alt={`Slide ${idx + 1}`} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>

      <div className="flex justify-center w-full py-2 gap-2 absolute bottom-4 z-20">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`btn btn-xs ${idx === currentIndex ? "btn-primary" : ""}`}
          >
            {idx + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

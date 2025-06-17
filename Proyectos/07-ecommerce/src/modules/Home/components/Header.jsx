import { useEffect, useState } from "react";

const images = [
  "1.avif",
  "2.avif",
  "3.avif",
  "4.avif",
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="relative">
      <div className="w-full h-[400px] overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out h-full"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((src, idx) => (
            <div
              key={idx}
              className="w-full h-full flex-shrink-0"
            >
              <img src={src} alt={`Slide ${idx + 1}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
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

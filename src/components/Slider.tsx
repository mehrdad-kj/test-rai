import { useEffect, useState } from "react";
import pic1 from "../assets/pic1.jpg";
import pic2 from "../assets/pic2.jpg";
import pic3 from "../assets/pic3.jpg";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

const Slider = () => {
  const images = [pic1, pic2, pic3];

  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full mx-auto overflow-hidden">
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="w-full h-96 object-cover transition-transform duration-500"
      />

      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-600 bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 focus:outline-none"
      >
        <KeyboardArrowLeftIcon fontSize="large" />
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-600 bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 focus:outline-none"
      >
        <KeyboardArrowRightIcon fontSize="large" />
      </button>

      <div className="flex justify-center mt-4 gap-2 absolute right-1/2 -tarnslate-x-1/2 bottom-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-blue-500" : "bg-gray-600"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;

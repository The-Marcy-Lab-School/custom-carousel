import { useState } from "react";

export const useCarousel = (data) => {
  const [carouselIdx, setCarouselIdx] = useState(0);

  const handleBoundary = (idxNum) => (idxNum + data.length) % data.length;

  const handleNext = () => setCarouselIdx((prev) => handleBoundary(prev + 1));

  const handlePrev = () => setCarouselIdx((prev) => handleBoundary(prev - 1));

  return { carouselData: data, carouselIdx, handleNext, handlePrev };
};

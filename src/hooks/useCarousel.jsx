import { useState } from "react";

export const useCarousel = (data) => {
  const [carouselData] = useState(data);
  const [carouselIdx, setCarouselIdx] = useState(0);

  const handleBoundary = (idxNum) =>
    (idxNum + carouselData.length) % carouselData.length;

  const handleNext = () => {
    setCarouselIdx(handleBoundary(carouselIdx + 1));
  };

  const handlePrev = () => {
    setCarouselIdx(handleBoundary(carouselIdx - 1));
  };

  return { carouselData, carouselIdx, handleNext, handlePrev };
};

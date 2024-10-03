import { useState } from "react";
import { useSlideshow } from "./useSlideshow";

export const useCarousel = arrOfImages => {
  const [carouselIdx, setCarouselIdx] = useState(0);

  const handleBoundary = (idxNum) => (idxNum + arrOfImages.length) % arrOfImages.length;
  const moveCarousel = (amount) => setCarouselIdx(prevIdx => handleBoundary(prevIdx + amount))

  const handleNext = () => moveCarousel(1);
  const handlePrev = () => moveCarousel(-1);

  const { timeToNextSlide, slideTime } = useSlideshow(handleNext)

  return {
    curImage: arrOfImages[carouselIdx],
    size: arrOfImages.length,
    pos: carouselIdx,
    handleNext,
    handlePrev,
    timeToNextSlide,
    slideTime,
    setCarouselIdx
  };
};

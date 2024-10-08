import { useState } from "react";
import { useSlideshow } from "./useSlideshow";

export const useCarousel = (arrOfImages, slideTime = 10) => {
  const [carouselIdx, setCarouselIdx] = useState(0);

  const handleBoundary = (idxNum) => (idxNum + arrOfImages.length) % arrOfImages.length;
  const moveCarousel = (amount) => setCarouselIdx(prevIdx => handleBoundary(prevIdx + amount))

  const handleNext = () => moveCarousel(1)
  const handlePrev = () => moveCarousel(-1)

  const { slideProgress } = useSlideshow(handleNext, slideTime)

  return {
    curImage: arrOfImages[carouselIdx],
    size: arrOfImages.length,
    pos: carouselIdx,
    handleNext,
    handlePrev,
    setCarouselIdx,
    slideProgress
  };
};

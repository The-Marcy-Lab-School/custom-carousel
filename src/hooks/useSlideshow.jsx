import { useState, useEffect } from "react";

export const useSlideshow = (handleNext) => {
  const slideTime = 10;
  const [timeToNextSlide, setTimeToNextSlide] = useState(slideTime);

  const updateSlideTime = () => {
    setTimeToNextSlide(prevTime => {
      if (prevTime === 0) {
        handleNext();
        return slideTime;
      }
      return prevTime - 1;
    });
  };

  useEffect(() => {
    const slideShowInterval = setInterval(updateSlideTime, 1000);
    return () => clearInterval(slideShowInterval);
  }, []);

  return { timeToNextSlide, slideTime };
};

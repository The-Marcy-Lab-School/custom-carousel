import { useState, useEffect } from 'react';

export const useSlideshow = (handleNext, slideTime) => {
  const [timeToNextSlide, setTimeToNextSlide] = useState(slideTime);
  const slideProgress = (timeToNextSlide / slideTime) * 100;

  useEffect(() => {
    const slideshowInterval = setInterval(() => {
      setTimeToNextSlide((prevTime) => {
        if (prevTime <= 1) {
          handleNext();
          return slideTime;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(slideshowInterval);
  }, [slideTime]); // can add `handleNext` to pause on click

  return { slideProgress };
};

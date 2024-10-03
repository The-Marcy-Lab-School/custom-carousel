import { useCarousel } from "../hooks/useCarousel";
import { CarouselImage } from "./carousel-image";
import { PaginationCarouselDots } from "./pagination-carousel";
import { SlideProgress } from "./slide-progress";

export const Carousel = ({ images }) => {
  const {
    curImage,
    size,
    pos,
    handleNext,
    handlePrev,
    timeToNextSlide,
    slideTime,
    setCarouselIdx
  } = useCarousel(images);

  return (
    <>
      <div style={{ height: "400px" }}>
        <CarouselImage curImage={curImage} />
        <SlideProgress timeToNextSlide={timeToNextSlide} slideTime={slideTime}/>
      </div>
      <PaginationCarouselDots pos={pos} size={size} setCarouselIdx={setCarouselIdx} />
      <div style={{ display: "flex", justifyContent: "space-between", gap: "5px" }}>
        <button onClick={handlePrev}>{"<"} Prev</button>
        <button onClick={handleNext}>Next {">"}</button>
      </div>
    </>
  );
};

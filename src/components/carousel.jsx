import { useCarousel } from "../hooks/useCarousel";
import { CarouselImage } from "./carousel-image";
import { PaginationCarouselDots } from "./pagination-carousel";
import { SlideProgress } from "./slide-progress";

export const Carousel = ({ images, slideTime = 10 }) => {
  const {
    curImage,
    size,
    pos,
    slideProgress,
    handleNext,
    handlePrev,
    setCarouselIdx
  } = useCarousel(images, slideTime);

  return (
    <>
      <div style={{ height: "400px" }}>
        <CarouselImage curImage={curImage} />
        <SlideProgress slideProgress={slideProgress}/>
      </div>
      <PaginationCarouselDots pos={pos} size={size} setCarouselIdx={setCarouselIdx} />
      <div style={{ display: "flex", justifyContent: "space-between", gap: "5px" }}>
        <button onClick={handlePrev}>{"<"} Prev</button>
        <button onClick={handleNext}>Next {">"}</button>
      </div>
    </>
  );
};

import { useEffect, useState } from "react";
import { useCarousel } from "../hooks/useCarousel";

export const Carousel = ({ data }) => {
  const { carouselData, carouselIdx, handleNext, handlePrev } =
    useCarousel(data);
  const time = 8;
  const [timer, setTimer] = useState(time);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev === 0) {
          handleNext();
          return time;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div style={{ height: "400px", width: "600px" }}>
        <img
          src={carouselData[carouselIdx]}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
        <div
          style={{
            height: "4px",
            width: `${(timer / time) * 100}%`,
            backgroundColor: "gray",
            transition: "width 1s linear",
            transformOrigin: "right", 
          }}
        />
      </div>
      <ul
        style={{
          display: "flex",
          columnGap: "10px",
          justifyContent: "center",
          marginTop: 16,
        }}
      >
        {carouselData.map((_, idx) => (
          <li key={idx + 1}>
            <div
              style={{
                backgroundColor: "white",
                height: "7px",
                width: "7px",
                borderRadius: "50%",
                opacity: carouselIdx === idx ? 1 : 0.5,
              }}
            />
          </li>
        ))}
      </ul>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "10px",
          gap: "5px",
        }}
      >
        <button onClick={handlePrev}>{"<"} Prev</button>
        <button onClick={handleNext}>Next {">"}</button>
      </div>
    </>
  );
};

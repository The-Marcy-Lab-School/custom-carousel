export const SlideProgress = ({ timeToNextSlide, slideTime }) => {
  const widthPercentage = (timeToNextSlide / slideTime) * 100;
  
  return (
    <div
      style={{
        height: "4px",
        width: `${widthPercentage}%`,
        backgroundColor: "gray",
        transition: "width 1s linear",
        transformOrigin: "right",
        marginTop: "-8px"
      }}
    />
  );
};

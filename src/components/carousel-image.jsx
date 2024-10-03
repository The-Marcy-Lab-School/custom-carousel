export const CarouselImage = ({ curImage }) => {
  return (
    <img
      src={curImage}
      style={{ width: "100%", height: "100%", objectFit: "cover" }}
    />
  );
};

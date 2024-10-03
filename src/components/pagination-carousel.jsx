export const PaginationCarouselDots = ({ pos, size, setCarouselIdx }) => {
  return (
    <ul style={{ display: "flex", columnGap: "10px", justifyContent: "center", marginTop: "15px" }}>
      {Array.from({ length: size }).map((_, idx) => (
        <li key={idx} onClick={() => setCarouselIdx(idx)}>
          <div
            style={{
              backgroundColor: "white",
              opacity: pos === idx ? 1 : 0.2,
              cursor: "pointer",
              padding: "3px",
              width: "15px"
            }}
          />
        </li>
      ))}
    </ul>
  );
};

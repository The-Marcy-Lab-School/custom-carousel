export const SlideProgress = ({ slideProgress }) => {
  return (
    <div
      style={{
        height: "4px",
        width: `${slideProgress}%`,
        backgroundColor: "gray",
        transition: "width 1s linear",
        transformOrigin: "right",
        marginTop: "-6px"
      }}
    />
  );
};

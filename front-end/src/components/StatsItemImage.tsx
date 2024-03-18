type StatsItemImageProps = {
  src: string;
  alt?: string;
};
function StatsItemImage({ src, alt }: StatsItemImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      style={{
        width: "1.5rem",
        height: "1.5rem",
      }}
    />
  );
}

export default StatsItemImage;

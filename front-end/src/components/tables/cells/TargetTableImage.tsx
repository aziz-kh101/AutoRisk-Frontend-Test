type TargetTableImageProps = {
  src: string;
  alt?: string;
};

function TargetTableImage({ src, alt }: TargetTableImageProps) {
  return (
    <img style={{ height: "1.5rem", width: "1.5rem" }} src={src} alt={alt} />
  );
}

export default TargetTableImage;

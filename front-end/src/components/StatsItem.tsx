import { StatsItemTypes } from "../types/types";
import StatsItemImage from "./StatsItemImage";

type StatsItemProps = {
  type: StatsItemTypes;
  value: number;
  description: string;
  image: string;
};
function StatsItem({ type, value, description, image }: StatsItemProps) {
  return (
    <div
      style={{
        padding: "1rem",
        borderRadius: ".5rem",
        backgroundColor: "white",
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        minHeight: "8rem",
        color: "gray",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: ".5rem",
          flex: 1,
        }}
      >
        <span style={{ fontWeight: "bold" }}>
          All Test <span style={{ textTransform: "capitalize" }}> {type} </span>
        </span>
        <span
          style={{
            fontSize: "3rem",
            fontWeight: "bold",
            color: "black",
          }}
        >
          {value}
        </span>
        <span>{description}</span>
      </div>
      <div
        style={{
          alignSelf: "stretch",
          display: "flex",
          alignItems: "center",
        }}
      >
        <StatsItemImage src={image} alt={type} />
      </div>
    </div>
  );
}

export default StatsItem;

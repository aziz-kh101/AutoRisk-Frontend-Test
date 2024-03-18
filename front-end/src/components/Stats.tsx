import StatsItem from "./StatsItem";
import failedImage from "../assets/failed.png";
import notApplicableImage from "../assets/notApplicabale.png";
import passedImage from "../assets/passed.png";
import skippedImage from "../assets/notReviewed.png";

type StatsProps = {
  skipped: number;
  passed: number;
  failed: number;
  notApplicable: number;
};

function Stats({ skipped, passed, failed, notApplicable }: StatsProps) {
  return (
    <div
      style={{
        display: "grid",
        gap: "1rem",
        gridTemplateColumns: "repeat(4, 1fr)",
      }}
    >
      <StatsItem
        type="Passed"
        description="Individual checkes passed"
        value={passed}
        image={passedImage}
      />
      <StatsItem
        type="Failed"
        description="Individual checkes passed"
        value={failed}
        image={failedImage}
      />
      <StatsItem
        type="Not Applicable"
        value={notApplicable}
        description="System exception or absent component"
        image={notApplicableImage}
      />
      <StatsItem
        type="Not Reviewed"
        value={skipped}
        description="Can only be test manually at this time"
        image={skippedImage}
      />
    </div>
  );
}

export default Stats;

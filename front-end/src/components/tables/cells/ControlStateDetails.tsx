import { ReactNode, useState } from "react";
import { ControlState } from "../../../types/types";
import AppLink from "../../AppLink";
import Status from "./Status";
import { Divider } from "@mui/material";
import Severity from "./Severity";

type ControlStateDetailsProps = {
  controlState: ControlState;
};

const Container = ({
  children,
  isEven,
}: {
  children: ReactNode;
  isEven: boolean;
}) => (
  <div
    style={{
      display: "flex",
      gap: "1rem",
      alignItems: "center",
      backgroundColor: isEven ? "#888888" : "",
      padding: "1rem",
      borderRadius: ".5rem",
    }}
  >
    {children}
  </div>
);

const DetailsContainer = ({
  title,
  value,
}: {
  title: string;
  value: ReactNode;
}) => (
  <div style={{ display: "flex", flexDirection: "column", gap: ".5rem" }}>
    <strong>{title}</strong>
    <span>{value}</span>
  </div>
);

function ControlStateDetails({ controlState }: ControlStateDetailsProps) {
  const [page, setPage] = useState<"Test" | "Details">("Test");
  return (
    <div
      style={{
        padding: "1rem",
        backgroundColor: "#454545",
        display: "flex",
        flexDirection: "column",
        color: "white",
      }}
    >
      <div
        style={{
          alignSelf: "center",
          display: "flex",
          flexDirection: "row",
          gap: "1rem",
        }}
      >
        <AppLink
          link="Test"
          activeLink={page}
          handleLinkChange={setPage}
          size="small"
        />
        <AppLink
          link="Details"
          activeLink={page}
          handleLinkChange={setPage}
          size="small"
        />
      </div>

      {page === "Test" ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            paddingTop: "1rem",
          }}
        >
          <span>{controlState.desc}</span>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {controlState.results.map((result, index) => (
              <Container key={index} isEven={index % 2 == 0}>
                <Status status={result.status} />
                <div
                  style={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    gap: ".5rem",
                  }}
                >
                  <span>{"Test"}</span>
                  <Divider />
                  <span>{controlState.title}</span>
                </div>
              </Container>
            ))}
          </div>
        </div>
      ) : (
        <div style={{ paddingTop: "1rem" }}>
          <Container isEven={true}>
            <DetailsContainer title={"Control"} value={controlState.id} />
          </Container>
          <Container isEven={false}>
            <DetailsContainer title={"Title"} value={controlState.title} />
          </Container>
          <Container isEven={true}>
            <DetailsContainer title={"Description"} value={controlState.desc} />
          </Container>
          <Container isEven={false}>
            <DetailsContainer
              title={"Severity"}
              value={<Severity impact={controlState.impact} />}
            />
          </Container>
          <Container isEven={true}>
            <DetailsContainer title={"Impact"} value={controlState.impact} />
          </Container>
        </div>
      )}
    </div>
  );
}

export default ControlStateDetails;

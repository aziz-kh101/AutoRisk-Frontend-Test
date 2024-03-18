import { ControlStateStatus } from "../../../types/types";
import style from "./Status.module.css";

type StatusProps = {
  status: Omit<string, ControlStateStatus> | ControlStateStatus;
  openClose?: {
    opened: boolean;
    onClick: (opened: boolean) => void;
  };
};

function Status({ status, openClose }: StatusProps) {
  let background;

  switch (status) {
    case "passed":
      background = "var(--success)";
      break;
    case "failed":
    case "error":
      background = "var(--error)";
      break;
    case "skipped":
      background = "var(--warning)";
      break;
    case "notApplicable":
    default:
      background = "#686868";
      break;
  }

  return (
    <div
      style={{
        color: "white",
        padding: ".5rem 1rem",
        borderRadius: ".25rem",
        width: openClose ? "10rem" : "fit-content",
        backgroundColor: background,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        cursor: "pointer",
      }}
      onClick={() => openClose && openClose.onClick(!openClose.opened)}
    >
      {status}

      {openClose && (
        <span
          className={`${style.arrow} ${
            openClose.opened ? style.up : style.down
          }`}
        ></span>
      )}
    </div>
  );
}

export default Status;

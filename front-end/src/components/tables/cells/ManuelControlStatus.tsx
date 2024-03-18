type ManuelControlStatusProps = {
  status: string;
};
function ManuelControlStatus({ status }: ManuelControlStatusProps) {
  return (
    <div
      style={{
        width: "fit-content",
        padding: ".25rem .75rem",
        borderRadius: "1rem",
        backgroundColor: (() => {
          if (status === "FAILED") return "var(--error)";
          if (status === "PASSED") return "var(--success)";
          if (status === "IN_REVIEW") return "var(--primary)";

          return "#686868";
        })(),
        color: "white",
        paddingTop: "0.45rem",
        lineHeight: 1,
      }}
    >
      <span>{status}</span>
    </div>
  );
}

export default ManuelControlStatus;

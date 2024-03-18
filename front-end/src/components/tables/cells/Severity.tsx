type SeverityProps = {
  impact: number;
};
function Severity({ impact }: SeverityProps) {
  switch (impact) {
    case 1:
      return "Critical Impact";
    case 2:
      return "Major Impact";
    case 3:
      return "Minor Impact";
    default:
      return "Unknown Impact";
  }
}

export default Severity;

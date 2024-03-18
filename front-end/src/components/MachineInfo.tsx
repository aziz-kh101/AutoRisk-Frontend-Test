import { AuditInfo } from "../types/types";

type MachineInfoProps = {
  machine: AuditInfo;
};
function MachineInfo({ machine }: MachineInfoProps) {
  return (
    <div
      style={{
        padding: "1rem",
        borderRadius: "0.5rem",
        color: "white",
        backgroundColor: "#454545",
        display: "flex",
        flexDirection: "column",
        gap: "0.5rem",
      }}
    >
      <div>
        <strong>Name: </strong>
        <span>{machine.platform.name}</span>
      </div>
      <div>
        <strong>Target ID: </strong>
        <span>{machine.target.targetId}</span>
      </div>
      <div>
        <strong>Machine Status: </strong>
        <span>{machine.target.machineStatus}</span>
      </div>
      <div>
        <strong>Machine Type: </strong>
        <span>{machine.target.machineType}</span>
      </div>
    </div>
  );
}

export default MachineInfo;

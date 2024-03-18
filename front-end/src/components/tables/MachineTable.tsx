import { Button } from "@mui/material";
import { AuditInfo, ControlState, ControlStateStatus } from "../../types/types";
import { useCallback, useEffect, useState } from "react";
import BasicTable from "./BasicTable";
import Status from "./cells/Status";
import ControlStateDetails from "./cells/ControlStateDetails";
import Severity from "./cells/Severity";

type MachineTableProps = {
  machine: AuditInfo;
  handleControlChange: (machine: null) => void;
};

type CustomControlState = ControlState & { status: ControlStateStatus };

function MachineTable({ machine, handleControlChange }: MachineTableProps) {
  const [data, setData] = useState<CustomControlState[]>([]);
  const [selected, setSelected] = useState<CustomControlState | null>(null);

  const handleStatusClick = useCallback(
    (opened: boolean, control: CustomControlState) => {
      if (opened) {
        setSelected(control);
      } else {
        setSelected(null);
      }
    },
    []
  );

  useEffect(() => {
    setData([
      ...machine.controlsPassed.map<CustomControlState>((control) => ({
        ...control,
        status: "passed",
      })),
      ...machine.controlsSkipped.map<CustomControlState>((control) => ({
        ...control,
        status: "skipped",
      })),
      ...machine.controlsFailed.map<CustomControlState>((control) => ({
        ...control,
        status: "failed",
      })),
      ...machine.controlsNotApplicable.map<CustomControlState>((control) => ({
        ...control,
        status: "notApplicable",
      })),
      ...machine.controlsError.map<CustomControlState>((control) => ({
        ...control,
        status: "error",
      })),
    ]);
  }, [machine]);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <Button
        style={{ alignSelf: "flex-end" }}
        onClick={() => handleControlChange(null)}
      >
        Back
      </Button>
      <BasicTable
        data={data}
        headers={["Status", "ID", "Impact", "Title", "Severity"]}
        columsArray={(row) => [
          <Status
            status={row.status}
            openClose={{
              opened: selected === row,
              onClick: (opened) => handleStatusClick(opened, row),
            }}
          />,
          row.id,
          row.impact,
          row.title,
          <Severity impact={row.impact} />,
        ]}
        collapsable={{
          show: (row) => selected === row,
          row: (row) => <ControlStateDetails controlState={row} />,
        }}
      />
    </div>
  );
}
export default MachineTable;

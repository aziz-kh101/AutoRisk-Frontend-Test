import { AuditInfo } from "../../types/types";
import { IconButton } from "@mui/material";
import showImage from "../../assets/show.png";
import TargetTableImage from "./cells/TargetTableImage";
import BasicTable from "./BasicTable";

type TargetTableProps = {
  auditInfo: AuditInfo[];
  handleControlChange: (machine: AuditInfo) => void;
};

function TargetTable({ auditInfo, handleControlChange }: TargetTableProps) {
  return (
    <BasicTable
      data={auditInfo}
      headers={["Name", "Machine Type", ""]}
      columsArray={(row) => [
        row.target.name,
        row.target.machineType,
        <IconButton onClick={() => handleControlChange(row)}>
          <TargetTableImage src={showImage} alt="show details" />
        </IconButton>,
      ]}
    />
  );
}

export default TargetTable;

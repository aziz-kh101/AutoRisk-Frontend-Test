import { ManuelStats, ControlManuelStats } from "../../types/types";
import { useEffect, useState } from "react";
import ManuelControlStatus from "./cells/ManuelControlStatus";
import BasicTable from "./BasicTable";

type ManuelControleTableProps = {
  manuelStats: ManuelStats;
};

function ManuelControleTable({ manuelStats }: ManuelControleTableProps) {
  const [data, setData] = useState<ControlManuelStats[]>([]);

  useEffect(() => {
    setData([
      ...manuelStats.controlManuelPassed,
      ...manuelStats.controlManuelFailed,
      ...manuelStats.controlManuelInReview,
      ...manuelStats.controlManuelNotReview,
      ...manuelStats.controlManuelNotApplicable,
    ]);
  }, [manuelStats]);

  return (
    <BasicTable
      data={data}
      headers={["Title", "Impact", "Status"]}
      columsArray={(row) => [
        row.controlManuel.title,
        row.controlManuel.impact,
        <ManuelControlStatus status={row.status} />,
      ]}
    />
  );
}

export default ManuelControleTable;

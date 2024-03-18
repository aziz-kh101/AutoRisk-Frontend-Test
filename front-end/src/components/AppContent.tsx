import { useCallback, useState } from "react";
import { AuditInfo, LinkType, ResultTpe } from "../types/types";
import Stats from "./Stats";
import ManuelControleTable from "./tables/ManuelControlTable";
import TargetTable from "./tables/TargetTable";
import MachineTable from "./tables/MachineTable";
import MachineInfo from "./MachineInfo";

type AppContentProps = {
  result: ResultTpe;
  activeLink: LinkType;
};
function AppContent({ activeLink, result }: AppContentProps) {
  const [machine, setMachine] = useState<AuditInfo | null>(null);

  const handleControlChange = useCallback((machine: AuditInfo | null) => {
    setMachine(machine);
  }, []);

  if (activeLink == "targets") {
    if (machine) {
      const {
        controlsSkipped,
        controlsFailed,
        controlsNotApplicable,
        controlsPassed,
      } = machine;
      return (
        <>
          <MachineInfo machine={machine} />
          <Stats
            failed={controlsFailed.length}
            notApplicable={controlsNotApplicable.length}
            passed={controlsPassed.length}
            skipped={controlsSkipped.length}
          />
          <MachineTable
            handleControlChange={handleControlChange}
            machine={machine}
          />
        </>
      );
    }

    const { failed, notApplicable, passed, skipped, auditInfo } = result;
    return (
      <>
        <Stats
          failed={failed}
          notApplicable={notApplicable}
          passed={passed}
          skipped={skipped}
        />
        <TargetTable
          handleControlChange={handleControlChange}
          auditInfo={auditInfo}
        />
      </>
    );
  } else {
    const { failed, notApplicable, passed, notReviewed } = result.manuelStats;
    return (
      <>
        <Stats
          failed={failed}
          notApplicable={notApplicable}
          passed={passed}
          skipped={notReviewed}
        />
        <ManuelControleTable manuelStats={result.manuelStats} />
      </>
    );
  }
}

export default AppContent;

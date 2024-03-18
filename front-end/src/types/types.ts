import { Links } from "./contants";

export type LinkType = (typeof Links)[number];
export type StatsItemTypes =
  | "Not Reviewed"
  | "Passed"
  | "Failed"
  | "Not Applicable";

export type ControlStateStatus =
  | "passed"
  | "failed"
  | "skipped"
  | "notApplicable"
  | "error";

export type ResultTpe = {
  skipped: number;
  passed: number;
  failed: number;
  notApplicable: number;
  profileError: number;
  noImpact: number;
  lowImpact: number;
  mediumImpact: number;
  highImpact: number;
  criticalImpact: number;
  individualPassedChecks: IndividualChecks;
  individualFailedChecks: IndividualChecks;
  auditInfo: AuditInfo[];
  manuelStats: ManuelStats;
  statsByControl: StatsByControl;
};

type IndividualChecks = {
  passed: number;
  failed: number;
};

export type AuditInfo = {
  platform: Platform;
  target: Target;
  timestamp: string | null;
  name: string;
  copyright_email: string;
  license: string;
  summary: string;
  sha256: string;
  title: string;
  version: string;
  tool_version: string;
  controlsSkipped: ControlState[];
  controlsPassed: ControlState[];
  controlsFailed: ControlState[];
  controlsError: ControlState[];
  controlsNotApplicable: ControlState[];
  copyright: string;
};

type Platform = {
  name: string;
  release: string;
  target_id: string;
  target: Target;
};

type Target = {
  id: number;
  targetId: string;
  hostname: string;
  ipAddress: string | null;
  name: string;
  type: string | null;
  tag: string | null;
  tags: string[];
  machineType: string;
  ntegration: Integration;
  latestUpdate: string | null;
  machineStatus: string;
};

type Integration = {
  id: number;
  name: string;
  url: string;
  params: Param[];
  quizCombinations: [];
  integrationType: string;
  activated: boolean;
  systemIntegration: boolean;
};

type Param = {
  id: number;
  name: string;
  value: string;
};

export type ControlState = {
  id: string;
  results: Result[];
  impact: number;
  code: string;
  title: string;
  desc: string;
  waiver_data: WaiverData;
};

type Result = {
  status: string;
  code_desc: string;
  run_time: number;
  start_time: string;
  resource_class: string;
  resource_params: string;
  resource_id: string;
  exception: string | null;
  backtrace: string | null;
};

type WaiverData = {
  expirationDate: string | null;
  justification: string | null;
  message: string | null;
  runAllowed: string | null;
  skippedDueToWaiver: string | null;
};

export type ManuelStats = {
  passed: number;
  failed: number;
  inReview: number;
  notReviewed: number;
  notApplicable: number;
  noImpact: number;
  lowImpact: number;
  mediumImpact: number;
  highImpact: number;
  criticalImpact: number;
  controlManuelInReview: ControlManuelStats[];
  controlManuelNotReview: ControlManuelStats[];
  controlManuelPassed: ControlManuelStats[];
  controlManuelFailed: ControlManuelStats[];
  controlManuelNotApplicable: ControlManuelStats[];
};

export type ControlManuelStats = {
  id: number;
  controlManuel: ControlManuel;
  status: string;
};

type ControlManuel = {
  id: 5;
  controlId: string;
  question: string;
  description: string;
  impact: number;
  code: string;
  title: string;
  controlIsAuto: boolean;
  waiverData_expirationDate: string | null;
  waiverData_justification: string | null;
  waiverData_message: string | null;
  waiverData_runAllowed: string | null;
  waiverData_skippedDueToWaiver: string | null;
  scans: string | null;
};

type StatsByControl = {
  [key: string]: StatsByControlItem;
};

type StatsByControlItem = {
  skipped: number;
  passed: number;
  failed: number;
  notApplicable: number;
  profileError: number;
  inReview: number;
  notReviewed: number;
};

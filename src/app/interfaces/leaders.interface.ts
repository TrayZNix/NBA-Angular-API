export interface _internal {
  pubDateTime: string;
  igorPath: string;
  xslt: string;
  xsltForceRecompile: string;
  xsltInCache: string;
  xsltCompileTimeMillis: string;
  xsltTransformTimeMillis: string;
  consolidatedDomKey: string;
  endToEndTimeMillis: string;
}

export interface StandardLeaders {
  seasonStageId: number;
  ppg: Ppg;
  trpg: Trpg;
  apg: Apg;
  fgp: Fgp;
  tpp: Tpp;
  ftp: Ftp;
  bpg: Bpg;
  spg: Spg;
  tpg: Tpg;
  pfpg: Pfpg;
}

export class StandardLeaders {
  constructor() {}
}

export interface AfricaLeaders {
  seasonStageId: number;
  ppg: any[];
  trpg: any[];
  apg: any[];
  fgp: any[];
  tpp: any[];
  ftp: any[];
  bpg: any[];
  spg: any[];
  tpg: any[];
  pfpg: any[];
}

export interface SacramentoLeaders {
  seasonStageId: number;
  ppg: any[];
  trpg: any[];
  apg: any[];
  fgp: any[];
  tpp: any[];
  ftp: any[];
  bpg: any[];
  spg: any[];
  tpg: any[];
  pfpg: any[];
}

export interface Ppg {
  personId: string;
  value: string;
}

export interface Trpg {
  personId: string;
  value: string;
}

export interface Apg {
  personId: string;
  value: string;
}

export interface Fgp {
  personId: string;
  value: string;
}

export interface Tpp {
  personId: string;
  value: string;
}

export interface Ftp {
  personId: string;
  value: string;
}

export interface Bpg {
  personId: string;
  value: string;
}

export interface Spg {
  personId: string;
  value: string;
}

export interface Tpg {
  personId: string;
  value: string;
}

export interface Pfpg {
  personId: string;
  value: string;
}

export interface VegaLeaders {
  seasonStageId: number;
  ppg: Ppg[];
  trpg: Trpg[];
  apg: Apg[];
  fgp: Fgp[];
  tpp: Tpp[];
  ftp: Ftp[];
  bpg: Bpg[];
  spg: Spg[];
  tpg: Tpg[];
  pfpg: Pfpg[];
}

export interface UtahLeaders {
  seasonStageId: number;
  ppg: any[];
  trpg: any[];
  apg: any[];
  fgp: any[];
  tpp: any[];
  ftp: any[];
  bpg: any[];
  spg: any[];
  tpg: any[];
  pfpg: any[];
}

export interface League {
  standard: StandardLeaders;
  africa: StandardLeaders;
  sacramento: StandardLeaders;
  vegas: StandardLeaders;
  utah: StandardLeaders;
}

export interface leadersResponse {
  _internal: _internal;
  league: League;
}

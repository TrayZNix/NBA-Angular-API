import { StandardPlayer } from './jugadores.interface';

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
  nombreLiga: string;
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

export interface AfricaLeaders {
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

export interface SacramentoLeaders {
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

export interface Ppg {
  jugador: StandardPlayer;
  personId: string;
  value: string;
}

export interface Trpg {
  jugador: StandardPlayer;
  personId: string;
  value: string;
}

export interface Apg {
  jugador: StandardPlayer;
  personId: string;
  value: string;
}

export interface Fgp {
  jugador: StandardPlayer;
  personId: string;
  value: string;
}

export interface Tpp {
  jugador: StandardPlayer;
  personId: string;
  value: string;
}

export interface Ftp {
  jugador: StandardPlayer;
  personId: string;
  value: string;
}

export interface Bpg {
  jugador: StandardPlayer;
  personId: string;
  value: string;
}

export interface Spg {
  jugador: StandardPlayer;
  personId: string;
  value: string;
}

export interface Tpg {
  jugador: StandardPlayer;
  personId: string;
  value: string;
}

export interface Pfpg {
  jugador: StandardPlayer;
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

export interface League {
  standard: StandardLeaders;
  africa: AfricaLeaders;
  sacramento: SacramentoLeaders;
  vegas: VegaLeaders;
  utah: UtahLeaders;
}

export interface leadersResponse {
  _internal: _internal;
  league: League;
}

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

export interface Latest {
  seasonYear: number;
  seasonStageId: number;
  ppg: string;
  rpg: string;
  apg: string;
  mpg: string;
  topg: string;
  spg: string;
  bpg: string;
  tpp: string;
  ftp: string;
  fgp: string;
  assists: string;
  blocks: string;
  steals: string;
  turnovers: string;
  offReb: string;
  defReb: string;
  totReb: string;
  fgm: string;
  fga: string;
  tpm: string;
  tpa: string;
  ftm: string;
  fta: string;
  pFouls: string;
  points: string;
  gamesPlayed: string;
  gamesStarted: string;
  plusMinus: string;
  min: string;
  dd2: string;
  td3: string;
}

export interface CareerSummary {
  tpp: string;
  ftp: string;
  fgp: string;
  ppg: string;
  rpg: string;
  apg: string;
  bpg: string;
  mpg: string;
  spg: string;
  assists: string;
  blocks: string;
  steals: string;
  turnovers: string;
  offReb: string;
  defReb: string;
  totReb: string;
  fgm: string;
  fga: string;
  tpm: string;
  tpa: string;
  ftm: string;
  fta: string;
  pFouls: string;
  points: string;
  gamesPlayed: string;
  gamesStarted: string;
  plusMinus: string;
  min: string;
  dd2: string;
  td3: string;
}

export interface Team {
  teamId: string;
  ppg: string;
  rpg: string;
  apg: string;
  mpg: string;
  topg: string;
  spg: string;
  bpg: string;
  tpp: string;
  ftp: string;
  fgp: string;
  assists: string;
  blocks: string;
  steals: string;
  turnovers: string;
  offReb: string;
  defReb: string;
  totReb: string;
  fgm: string;
  fga: string;
  tpm: string;
  tpa: string;
  ftm: string;
  fta: string;
  pFouls: string;
  points: string;
  gamesPlayed: string;
  gamesStarted: string;
  plusMinus: string;
  min: string;
  dd2: string;
  td3: string;
}

export interface Total {
  ppg: string;
  rpg: string;
  apg: string;
  mpg: string;
  topg: string;
  spg: string;
  bpg: string;
  tpp: string;
  ftp: string;
  fgp: string;
  assists: string;
  blocks: string;
  steals: string;
  turnovers: string;
  offReb: string;
  defReb: string;
  totReb: string;
  fgm: string;
  fga: string;
  tpm: string;
  tpa: string;
  ftm: string;
  fta: string;
  pFouls: string;
  points: string;
  gamesPlayed: string;
  gamesStarted: string;
  plusMinus: string;
  min: string;
  dd2: string;
  td3: string;
}

export interface Season {
  seasonYear: number;
  teams: Team[];
  total: Total;
}

export interface RegularSeason {
  season: Season[];
}

export interface Stat {
  latest: Latest;
  careerSummary: CareerSummary;
  regularSeason: RegularSeason;
}

export interface StandardStats {
  teamId: string;
  stats: Stat;
}

export interface League {
  standard: StandardStats;
}

export interface statsResponse {
  _internal: _internal;
  league: League;
}

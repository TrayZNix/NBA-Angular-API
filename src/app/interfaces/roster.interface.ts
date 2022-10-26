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

export interface Player {
  personId: string;
}

export interface Standard {
  teamId: string;
  players: Player[];
}

export interface Africa {
  teamId: string;
  players: any[];
}

export interface Sacramento {
  teamId: string;
  players: any[];
}

export interface Player {
  personId: string;
}

export interface Vega {
  teamId: string;
  players: Player[];
}

export interface Utah {
  teamId: string;
  players: any[];
}

export interface League {
  standard: Standard;
  africa: Africa;
  sacramento: Sacramento;
  vegas: Vega;
  utah: Utah;
}

export interface RosterResponse {
  _internal: _internal;
  league: League;
}

//-----------------------------------------------------//

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

//-----------------------------------------------------//

export interface TeamSitesOnly {
  playerCode: string;
  posFull: string;
  displayAffiliation: string;
  freeAgentCode: string;
}

export interface Team {
  teamId: string;
  seasonStart: string;
  seasonEnd: string;
}

export interface Draft {
  teamId: string;
  pickNum: string;
  roundNum: string;
  seasonYear: string;
}

export interface Standard {
  firstName: string;
  lastName: string;
  temporaryDisplayName: string;
  personId: string;
  teamId: string;
  jersey: string;
  isActive: boolean;
  pos: string;
  heightFeet: string;
  heightInches: string;
  heightMeters: string;
  weightPounds: string;
  weightKilograms: string;
  dateOfBirthUTC: string;
  teamSitesOnly: TeamSitesOnly;
  teams: Team[];
  draft: Draft;
  nbaDebutYear: string;
  yearsPro: string;
  collegeName: string;
  lastAffiliation: string;
  country: string;
  id: number;
}

export interface TeamSitesOnly {
  playerCode: string;
  posFull: string;
  displayAffiliation: string;
  freeAgentCode: string;
}

export interface Draft {
  teamId: string;
  pickNum: string;
  roundNum: string;
  seasonYear: string;
}

export interface Sacramento {
  firstName: string;
  lastName: string;
  temporaryDisplayName: string;
  personId: string;
  teamId: string;
  jersey: string;
  isActive: boolean;
  pos: string;
  heightFeet: string;
  heightInches: string;
  heightMeters: string;
  weightPounds: string;
  weightKilograms: string;
  dateOfBirthUTC: string;
  teamSitesOnly: TeamSitesOnly;
  teams: any[];
  draft: Draft;
  nbaDebutYear: string;
  yearsPro: string;
  collegeName: string;
  lastAffiliation: string;
  country: string;
  id: number;
}

export interface TeamSitesOnly {
  playerCode: string;
  posFull: string;
  displayAffiliation: string;
  freeAgentCode: string;
}

export interface Draft {
  teamId: string;
  pickNum: string;
  roundNum: string;
  seasonYear: string;
}

export interface Vega {
  firstName: string;
  lastName: string;
  temporaryDisplayName: string;
  personId: string;
  teamId: string;
  jersey: string;
  isActive: boolean;
  pos: string;
  heightFeet: string;
  heightInches: string;
  heightMeters: string;
  weightPounds: string;
  weightKilograms: string;
  dateOfBirthUTC: string;
  teamSitesOnly: TeamSitesOnly;
  teams: any[];
  draft: Draft;
  nbaDebutYear: string;
  yearsPro: string;
  collegeName: string;
  lastAffiliation: string;
  country: string;
  id: number;
}

export interface TeamSitesOnly {
  playerCode: string;
  posFull: string;
  displayAffiliation: string;
  freeAgentCode: string;
}

export interface Draft {
  teamId: string;
  pickNum: string;
  roundNum: string;
  seasonYear: string;
}

export interface Utah {
  firstName: string;
  lastName: string;
  temporaryDisplayName: string;
  personId: string;
  teamId: string;
  jersey: string;
  isActive: boolean;
  pos: string;
  heightFeet: string;
  heightInches: string;
  heightMeters: string;
  weightPounds: string;
  weightKilograms: string;
  dateOfBirthUTC: string;
  teamSitesOnly: TeamSitesOnly;
  teams: any[];
  draft: Draft;
  nbaDebutYear: string;
  yearsPro: string;
  collegeName: string;
  lastAffiliation: string;
  country: string;
  id: number;
}

export interface League {
  standard: Standard[];
  africa: any[];
  sacramento: Sacramento[];
  vegas: Vega[];
  utah: Utah[];
}

export interface playersResponse {
  _internal: _internal;
  league: League;
}

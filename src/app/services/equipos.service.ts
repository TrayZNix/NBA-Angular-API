import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TeamResponse } from '../interfaces/equipos';
import { teamResponse } from '../interfaces/equiposRoberto.interface';
import { playersResponse } from '../interfaces/jugadores.interface';
import { leadersResponse } from '../interfaces/leaders.interface';

const API_BASE_URL = 'https://data.nba.net/data/10s/prod/v1';

@Injectable({
  providedIn: 'root',
})
export class EquiposService {
  constructor(private http: HttpClient) {}

  getTeams(year: number): Observable<TeamResponse> {
    return this.http.get<TeamResponse>(`${API_BASE_URL}/${year}/teams.json`);
  }
  findRanking(year: number, name: string): Observable<leadersResponse> {
    return this.http.get<leadersResponse>(
      `${API_BASE_URL}/${year}/teams/${name}/leaders.json`
    );
  }
}

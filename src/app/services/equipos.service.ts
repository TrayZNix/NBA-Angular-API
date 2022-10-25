import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { teamResponse } from '../interfaces/equiposRoberto.interface';
import { playersResponse } from '../interfaces/jugadores.interface';
import { leadersResponse } from '../interfaces/leaders.interface';

const API_BASE_URL = 'https://data.nba.net';
@Injectable({
  providedIn: 'root',
})
export class EquiposService {
  constructor(private http: HttpClient) {}

  findAllTeams(year: number): Observable<teamResponse> {
    return this.http.get<teamResponse>(
      `${API_BASE_URL}/data/10s/prod/v1/${year}/teams.json`
    );
  }
  findRanking(year: number, name: string): Observable<leadersResponse> {
    return this.http.get<leadersResponse>(
      `${API_BASE_URL}/data/10s/prod/v1/${year}/teams/${name}/leaders.json`
    );
  }
}

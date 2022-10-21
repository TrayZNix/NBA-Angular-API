import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TeamResponse } from '../interfaces/equipos';

const API_BASE_URL = 'https://data.nba.net/data/10s/prod/v1';

@Injectable({
  providedIn: 'root'
})
export class EquiposService {

  constructor(private http: HttpClient) { }

  getTeams(year: number): Observable<TeamResponse> {
    return this.http.get<TeamResponse>(`${API_BASE_URL}10s/prod/v1/${year}/teams.json`);
  }


}

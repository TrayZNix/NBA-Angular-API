import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RosterResponse } from '../interfaces/roster.interface';

const API_BASE_URL = 'https://data.nba.net';
@Injectable({
  providedIn: 'root',
})
export class RosterService {
  constructor(private http: HttpClient) {}

  getRoster(year: number, teamName: string): Observable<RosterResponse> {
    return this.http.get<RosterResponse>(
      `${API_BASE_URL}/data/10s/prod/v1/${year}/teams/${teamName}/roster.json`
    );
  }
}

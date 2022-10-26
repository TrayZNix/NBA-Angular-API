import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { statsResponse } from '../interfaces/estadisticas.interface';
import { playersResponse } from '../interfaces/jugadores.interface';

const API_BASE_URL = 'https://data.nba.net/data/10s/prod/v1';
@Injectable({
  providedIn: 'root',
})
export class JugadoresService {
  constructor(private http: HttpClient) {}

  findallPlayers(year: number): Observable<playersResponse> {
    return this.http.get<playersResponse>(
      `${API_BASE_URL}/${year}/players.json`
    );
  }
  getPlayerStats(year: string, personId: string): Observable<statsResponse> {
    return this.http.get<statsResponse>(
      `${API_BASE_URL}/${year}/players/${personId}_profile.json`
    );
  }
}

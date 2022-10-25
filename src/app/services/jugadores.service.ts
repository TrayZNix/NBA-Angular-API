import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { playersResponse } from '../interfaces/jugadores.interface';

const API_BASE_URL = 'https://data.nba.net';
@Injectable({
  providedIn: 'root',
})
export class JugadoresService {
  constructor(private http: HttpClient) {}

  findallPlayers(year: number): Observable<playersResponse> {
    return this.http.get<playersResponse>(
      `${API_BASE_URL}/data/10s/prod/v1/${year}/players.json`
    );
  }
}

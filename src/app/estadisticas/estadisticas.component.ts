import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { CareerSummary } from '../interfaces/estadisticas.interface';
import { JugadoresService } from '../services/jugadores.service';

@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.component.html',
  styleUrls: ['./estadisticas.component.scss'],
})
export class EstadisticasComponent implements OnInit {
  constructor(
    private servicioJugador: JugadoresService,
    private aRoute: ActivatedRoute
  ) {}

  loaded: boolean = false;
  personId!: string;
  year!: string;
  playerStats!: CareerSummary;

  ngOnInit(): void {
    this.aRoute.params.subscribe((params) => {
      this.personId = params['personId'];
      console.log(this.personId);
      this.year = params['year'];
      console.log(this.year);
      this.servicioJugador
        .getPlayerStats(this.year, this.personId)
        .subscribe((result) => {
          this.playerStats = result.league.standard.stats.careerSummary;
          console.log(this.playerStats);
          this.loaded = true;
        });
    });
  }
}

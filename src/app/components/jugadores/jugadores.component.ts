import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { PageEvent } from '@angular/material/paginator';
import {
  Sacramento,
  Standard,
  Utah,
  Vega,
} from 'src/app/interfaces/jugadores.interface';
import { EquiposService } from 'src/app/services/equipos.service';
import { JugadoresService } from 'src/app/services/jugadores.service';

@Component({
  selector: 'app-jugadores',
  templateUrl: './jugadores.component.html',
  styleUrls: ['./jugadores.component.scss'],
})
export class JugadoresComponent implements OnInit {
  constructor(
    private jugadorService: JugadoresService,
    private equiposService: EquiposService
  ) {}

  year: number = 2022;
  parametrosFiltro = new FormGroup({
    anyo: new FormControl(
      '2022',
      Validators.compose([Validators.required, Validators.min(2010)])
    ),
    scrm: new FormControl(true),
    std: new FormControl(true),
    utah: new FormControl(true),
    vega: new FormControl(true),
  });
  terms = new FormControl('', Validators.pattern('^[a-zA-Z]*$'));
  equipo = new FormControl('');
  equipos!: import('../../interfaces/equiposRoberto.interface').Sacramento[];

  jugadores: Standard[] = [];
  jugadoresFiltrados: Standard[] = [];
  jugadoresPaginados: Standard[] = [];

  loaded: boolean = false;

  totalPages: number = 0;
  pageEvent!: PageEvent;
  ngOnInit(): void {
    this.actualizarEquipos();
    this.actualizarLista();
    this.pageEvent = new PageEvent();
    this.pageEvent.pageSize = 20;
    this.pageEvent.pageIndex = 0;
  }

  actualizarLista() {
    this.jugadores = [];
    this.jugadorService.findallPlayers(this.year).subscribe((response) => {
      if (this.parametrosFiltro.controls.std.value) {
        response.league.standard.forEach((player) => {
          this.jugadores.push(player);
        });
      }
      if (this.parametrosFiltro.controls.scrm.value) {
        response.league.sacramento.forEach((player) => {
          this.jugadores.push(player);
        });
      }
      if (this.parametrosFiltro.controls.utah.value) {
        response.league.utah.forEach((player) => {
          this.jugadores.push(player);
        });
      }
      if (this.parametrosFiltro.controls.vega.value) {
        response.league.vegas.forEach((player) => {
          this.jugadores.push(player);
        });
      }
      this.jugadoresFiltrados = this.jugadores;
      setTimeout(() => {
        this.filtrar_jugadores();
      }, 1250);
      this.totalPages = Math.ceil(
        this.jugadoresFiltrados.length / this.pageEvent.pageSize
      );
    });
  }
  actualizarRelacionEquipoJugador() {
    this.jugadores.forEach((jugador) => {
      jugador.fullTeamName = this.equipos.find((equipo) => {
        return equipo.teamId == jugador.teamId;
      })?.fullName as string;
    });
  }
  actualizarEquipos() {
    this.equiposService.findAllTeams(this.year).subscribe((results) => {
      this.equipos = [
        ...results.league.sacramento,
        ...results.league.standard,
        ...results.league.utah,
        ...results.league.vegas,
      ];
    });
    setTimeout(() => this.actualizarRelacionEquipoJugador(), 2000);
  }
  filtrar_jugadores() {
    this.loaded = false;
    console.log(this.parametrosFiltro.controls.vega);
    this.actualizarRelacionEquipoJugador();
    this.pageEvent.pageIndex = 0;
    let terminos = (this.terms.value as string).toLowerCase();
    let terminosEquipo = this.equipo.value?.toLowerCase() as string;
    this.jugadoresFiltrados = this.jugadores.filter((jugador) => {
      let nombre =
        jugador.firstName.toLowerCase() + ' ' + jugador.lastName.toLowerCase();
      let erbmon =
        jugador.lastName.toLowerCase() + ' ' + jugador.firstName.toLowerCase();
      let equipo = '';
      try {
        equipo = jugador.fullTeamName.toLowerCase();
      } catch (Error) {}
      return (
        equipo.includes(terminosEquipo) &&
        (nombre.toLowerCase().includes(terminos) ||
          erbmon.toLowerCase().includes(terminos))
      );
    });

    this.paginar_jugadores();
  }

  paginar_jugadores() {
    let indice = this.pageEvent.pageIndex;
    this.jugadoresPaginados = [];
    for (
      let contador = indice * this.pageEvent.pageSize;
      contador < indice * this.pageEvent.pageSize + this.pageEvent.pageSize;
      contador++
    ) {
      if (this.jugadoresFiltrados[contador] != null) {
        this.jugadoresPaginados.push(this.jugadoresFiltrados[contador]);
      }
    }
    this.loaded = true;
  }
  resetFiltro() {
    this.loaded = false;
    this.year = 2022;
    this.parametrosFiltro = new FormGroup({
      anyo: new FormControl(
        '2022',
        Validators.compose([Validators.required, Validators.min(2010)])
      ),
      scrm: new FormControl(true),
      std: new FormControl(true),
      utah: new FormControl(true),
      vega: new FormControl(true),
    });
    this.terms = new FormControl('', Validators.pattern('^[a-zA-Z]*$'));
    this.equipo = new FormControl('');

    this.actualizarLista();
  }
  submit() {
    this.year = Number(this.parametrosFiltro.controls.anyo.value);
    this.actualizarLista();
  }
}

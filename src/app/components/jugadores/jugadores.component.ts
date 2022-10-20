import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import {
  Sacramento,
  Standard,
  Utah,
  Vega,
} from 'src/app/interfaces/jugadores.interface';
import { JugadoresService } from 'src/app/services/jugadores.service';

@Component({
  selector: 'app-jugadores',
  templateUrl: './jugadores.component.html',
  styleUrls: ['./jugadores.component.scss'],
})
export class JugadoresComponent implements OnInit {
  constructor(private jugadorService: JugadoresService) {}

  year: number = 2022;
  parametrosFiltro = new FormGroup({
    anyo: new FormControl(
      '',
      Validators.compose([Validators.required, Validators.min(2010)])
    ),
    std: new FormControl(true),
    scrm: new FormControl(true),
    utah: new FormControl(true),
    vega: new FormControl(true),
  });
  terms = new FormControl('', Validators.pattern('^[a-zA-Z]*$'));
  jugadoresLigaStd: Standard[] = [];
  jugadoresLigaAfrica: any[] = [];
  jugadoresLigaSacramento: Sacramento[] = [];
  jugadoresLigaVegas: Vega[] = [];
  jugadoresLigaUtah: Utah[] = [];

  jugadores: Standard[] = [];
  jugadoresFiltrados: Standard[] = [];

  ngOnInit(): void {
    this.actualizarLista();
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
      this.filtrar_jugadores();
      // this.jugadoresLigaAfrica = response.league.africa;
    });
  }
  filtrar_jugadores() {
    let terminos = (this.terms.value as string).toLowerCase();
    this.jugadoresFiltrados = this.jugadores.filter((jugador) => {
      return (
        jugador.firstName.toLowerCase().includes(terminos) ||
        jugador.lastName.toLowerCase().includes(terminos)
      );
    });
  }
  submit() {
    console.log(this.parametrosFiltro);
    this.year = Number(this.parametrosFiltro.controls.anyo.value);
    this.actualizarLista();
  }
}

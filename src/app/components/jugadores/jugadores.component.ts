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
  busqueda = new FormGroup({
    anyo: new FormControl(this.year, [
      Validators.required,
      Validators.min(2010),
    ]),
  });
  jugadoresLigaStd: Standard[] = [];
  jugadoresLigaAfrica: any[] = [];
  jugadoresLigaSacramento: Sacramento[] = [];
  jugadoresLigaVegas: Vega[] = [];
  jugadoresLigaUtah: Utah[] = [];

  ngOnInit(): void {
    this.actualizarLista();
  }

  actualizarLista() {
    this.jugadorService.findallPlayers(this.year).subscribe((response) => {
      this.jugadoresLigaStd = response.league.standard;
      this.jugadoresLigaSacramento = response.league.sacramento;
      this.jugadoresLigaUtah = response.league.utah;
      this.jugadoresLigaVegas = response.league.vegas;
      this.jugadoresLigaAfrica = response.league.africa;
    });
  }

  submit() {
    this.year = Number(this.busqueda.controls.anyo.value);
    this.actualizarLista();
  }
}

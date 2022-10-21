import { Component, OnInit } from '@angular/core';
import { Team } from 'src/app/interfaces/equipos';
import { EquiposService } from 'src/app/services/equipos.service';

@Component({
  selector: 'app-lista-equipos',
  templateUrl: './lista-equipos.component.html',
  styleUrls: ['./lista-equipos.component.scss']
})
export class ListaEquiposComponent implements OnInit {
  equipos: Team[] = [];

  constructor(private equiposService: EquiposService) { }

  ngOnInit(): void {
  }

  actualizarPelisFirst(year: number) {
    this.equiposService.getTeams(year).subscribe((res) => {
      console.log(res);
      this.equipos = [...res.league.africa, ...res.league.sacramento, ...res.league.standard, ...res.league.utah, ...res.league.vegas];
    });
  }

}

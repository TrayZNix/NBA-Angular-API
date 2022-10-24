import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Standard } from 'src/app/interfaces/equiposRoberto.interface';
import { EquiposService } from 'src/app/services/equipos.service';
import { JugadoresService } from 'src/app/services/jugadores.service';
import { RosterService } from 'src/app/services/roster.service';
import { StandardPlayer } from '../../interfaces/jugadores.interface';

@Component({
  selector: 'app-detalles-equipo',
  templateUrl: './detalles-equipo.component.html',
  styleUrls: ['./detalles-equipo.component.scss'],
})
export class DetallesEquipoComponent implements OnInit {
  dataSource: any;
  displayedColumns: string[] = [];
  constructor(
    private route: ActivatedRoute,
    private equiposService: EquiposService,
    private jugadoresService: JugadoresService,
    private rosterService: RosterService
  ) {}

  teamName!: string;
  year!: number;
  equipo!: Standard;
  idStandard: string[] = [];
  todosJugadores!: StandardPlayer[];
  jugadoresStandard!: StandardPlayer[];
  jugadoresSacramento!: StandardPlayer[];
  jugadoresUtah!: StandardPlayer[];
  jugadoresVegas!: StandardPlayer[];

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.teamName = params['teamName'];
      this.year = params['year'];
    });
    this.equiposService.findAllTeams(this.year).subscribe((result) => {
      let equipos = [
        ...result.league.standard,
        ...result.league.sacramento,
        ...result.league.utah,
        ...result.league.vegas,
      ];
      this.equipo = equipos.find((team) => {
        return this.teamName == team.urlName;
      }) as Standard;
    });

    this.jugadoresService.findallPlayers(this.year).subscribe((result) => {
      this.todosJugadores = [...result.league.standard];
      this.todosJugadores = [
        ...this.todosJugadores,
        ...result.league.sacramento,
      ];
      this.todosJugadores = [...this.todosJugadores, ...result.league.utah];
      this.todosJugadores = [...this.todosJugadores, ...result.league.vegas];
      this.rosterService
        .getRoster(this.year, this.teamName)
        .subscribe((result) => {
          result.league.standard.players.forEach((player) => {
            this.idStandard.push(player.personId);
          });
          this.asignarJugadores();
          this.declararTabla();
        });
    });
  }

  asignarJugadores() {
    this.jugadoresStandard = [];
    this.todosJugadores.forEach((element) => {
      this.idStandard.forEach((id) => {
        if (id == element.personId) {
          let jugador: StandardPlayer = element;
          this.jugadoresStandard.push(jugador as StandardPlayer);
        }
      });
    });
    console.log(this.jugadoresStandard);
  }
  declararTabla() {
    this.displayedColumns = ['firstName', 'jersey', 'heightMeters'];
    this.dataSource = this.jugadoresStandard;
  }
}

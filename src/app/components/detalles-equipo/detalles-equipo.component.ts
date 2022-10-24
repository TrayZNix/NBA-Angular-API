import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Standard } from 'src/app/interfaces/equiposRoberto.interface';
import { EquiposService } from 'src/app/services/equipos.service';
import { JugadoresService } from 'src/app/services/jugadores.service';
import { RosterService } from 'src/app/services/roster.service';
import { StandardPlayer, Vega } from '../../interfaces/jugadores.interface';

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
  idSacramento: string[] = [];
  idUtah: string[] = [];
  idVega: string[] = [];

  todosJugadores!: StandardPlayer[];
  jugadoresStandard: StandardPlayer[] = [];
  jugadoresSacramento: StandardPlayer[] = [];
  jugadoresUtah: StandardPlayer[] = [];
  jugadoresVegas: StandardPlayer[] = [];

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
          result.league.sacramento.players.forEach((player) => {
            this.idSacramento.push(player.personId);
          });
          result.league.utah.players.forEach((player) => {
            this.idUtah.push(player.personId);
          });
          result.league.vegas.players.forEach((player) => {
            this.idVega.push(player.personId);
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
          jugador.urlFoto =
            'https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/' +
            jugador.personId +
            '.png';
          this.jugadoresStandard.push(jugador as StandardPlayer);
        }
      });
    });
    this.todosJugadores.forEach((element) => {
      this.idVega.forEach((id) => {
        if (id == element.personId) {
          let jugador: Vega = element;
          jugador.urlFoto =
            'https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/' +
            jugador.personId +
            '.png';
          this.jugadoresVegas.push(jugador as StandardPlayer);
        }
      });
    });
    this.todosJugadores.forEach((element) => {
      this.idSacramento.forEach((id) => {
        if (id == element.personId) {
          let jugador: Vega = element;
          jugador.urlFoto =
            'https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/' +
            jugador.personId +
            '.png';
          this.jugadoresSacramento.push(jugador as StandardPlayer);
        }
      });
    });
    this.todosJugadores.forEach((element) => {
      this.idUtah.forEach((id) => {
        if (id == element.personId) {
          let jugador: Vega = element;
          jugador.urlFoto =
            'https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/' +
            jugador.personId +
            '.png';
          this.jugadoresUtah.push(jugador as StandardPlayer);
        }
      });
    });
  }
  declararTabla() {
    this.displayedColumns = ['urlFoto', 'jersey', 'firstName', 'heightMeters'];
    this.dataSource = this.jugadoresStandard;
  }
  @HostListener('window:scroll')
  scroll() {
    let logo = document.getElementById('logoEquipo')!;
    if (window.pageYOffset <= 100 && window.pageYOffset >= 50) {
      // logo.style.setProperty('width', window.pageYOffset - 30 + '%');
    }
    if (window.pageYOffset <= 360) {
      logo.style.setProperty('opacity', 100 - window.pageYOffset / 5 + '%');
      logo.style.transform = 'translateX(' + window.pageYOffset + '%)'; // 124px);
    } else {
      logo.style.setProperty('opacity', 100 - 360 / 5 + '%');
      logo.style.transform = 'translateX(' + 360 + '%)'; // 124px);
    }
  }
}

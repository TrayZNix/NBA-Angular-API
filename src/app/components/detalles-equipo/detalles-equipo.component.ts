import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Standard } from 'src/app/interfaces/equiposRoberto.interface';
import {
  StandardLeaders,
  VegaLeaders,
} from 'src/app/interfaces/leaders.interface';
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
    private router: Router,
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

  lideres!: StandardLeaders[];

  load: boolean = false;
  loaded: boolean = false;
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

      this.rosterService.getRoster(this.year, this.teamName).subscribe(
        (result) => {
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
          this.actualizarLideres();
          this.loaded = true;
        },
        (error) => this.router.navigate(['error'])
      );
    });
  }

  //FIN NGONINIT

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

  //

  declararTabla() {
    this.displayedColumns = ['urlFoto', 'jersey', 'firstName', 'heightMeters'];
    this.dataSource = this.jugadoresStandard;
  }

  //

  actualizarLideres() {
    this.equiposService
      .findRanking(this.year, this.equipo.urlName)
      .subscribe((results) => {
        let lideresSacramento = results.league.sacramento as StandardLeaders;
        lideresSacramento.nombreLiga = 'Sacramento';
        let lideresEstandar = results.league.standard as StandardLeaders;
        lideresEstandar.nombreLiga = 'Estandar';
        let lideresVegas = results.league.vegas as StandardLeaders;
        lideresVegas.nombreLiga = 'Vegas';
        let lideresUtah = results.league.utah as StandardLeaders;
        lideresUtah.nombreLiga = 'Utah';
        this.lideres = [
          lideresSacramento,
          lideresEstandar,
          lideresUtah,
          lideresVegas,
        ];
        //Asigna el objeto jugador correspondiente a cada lider para poder llamar a sus datos desde el html
        ////////////////////////////////////////////////////////////////////////////////
        this.lideres.forEach((lideres) => {
          lideres.ppg.forEach((ppg) => {
            let jugador: StandardPlayer = this.todosJugadores.find((player) => {
              return player.personId.includes(ppg.personId);
            })!;
            ppg.jugador = jugador;
          });
          //
          lideres.trpg.forEach((trpg) => {
            let jugador: StandardPlayer = this.todosJugadores.find((player) => {
              return player.personId.includes(trpg.personId);
            })!;
            trpg.jugador = jugador;
          });
          //
          lideres.apg.forEach((apg) => {
            let jugador: StandardPlayer = this.todosJugadores.find((player) => {
              return player.personId.includes(apg.personId);
            })!;
            apg.jugador = jugador;
          });
          //
          lideres.fgp.forEach((fpg) => {
            let jugador: StandardPlayer = this.todosJugadores.find((player) => {
              return player.personId.includes(fpg.personId);
            })!;
            fpg.jugador = jugador;
          });
          //
          lideres.tpp.forEach((tpp) => {
            let jugador: StandardPlayer = this.todosJugadores.find((player) => {
              return player.personId.includes(tpp.personId);
            })!;
            tpp.jugador = jugador;
          });
          //
          lideres.ftp.forEach((ftp) => {
            let jugador: StandardPlayer = this.todosJugadores.find((player) => {
              return player.personId.includes(ftp.personId);
            })!;
            ftp.jugador = jugador;
          });
          //
          lideres.bpg.forEach((bpg) => {
            let jugador: StandardPlayer = this.todosJugadores.find((player) => {
              return player.personId.includes(bpg.personId);
            })!;
            bpg.jugador = jugador;
          });
          //
          lideres.spg.forEach((spg) => {
            let jugador: StandardPlayer = this.todosJugadores.find((player) => {
              return player.personId.includes(spg.personId);
            })!;
            spg.jugador = jugador;
          });
          //
          lideres.tpg.forEach((tpg) => {
            let jugador: StandardPlayer = this.todosJugadores.find((player) => {
              return player.personId.includes(tpg.personId);
            })!;
            tpg.jugador = jugador;
          });
          //
          lideres.pfpg.forEach((pfpg) => {
            let jugador: StandardPlayer = this.todosJugadores.find((player) => {
              return player.personId.includes(pfpg.personId);
            })!;
            pfpg.jugador = jugador;
          });
        });
        ////////////////////////////////////////////////////////////////////////////////
        this.load = true;
      });
  }

  //
  @HostListener('window:scroll')
  scroll() {
    let logo = document.getElementById('logoEquipo')!;
    let data = document.getElementById('data')!;
    let ancla = document.getElementById('ancla')!;
    if (window.pageYOffset <= 360) {
      logo.style.setProperty('opacity', 100 - window.pageYOffset / 5 + '%');
      logo.style.transform = 'translateX(' + window.pageYOffset + '%)';
      ancla.style.display = 'none';
    } else {
      logo.style.setProperty('opacity', 100 - 400 / 5 + '%');
      ancla.style.setProperty('opacity', 100 + '%');
      ancla.style.display = 'block';
      logo.style.transform = 'translateX(' + 400 + '%)';
    }
  }
}

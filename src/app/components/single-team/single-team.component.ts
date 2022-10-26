import { Component, OnInit, Input } from '@angular/core';
import { Team } from 'src/app/interfaces/equipos';
import { EquiposService } from 'src/app/services/equipos.service';

@Component({
  selector: 'app-single-team',
  templateUrl: './single-team.component.html',
  styleUrls: ['./single-team.component.scss']
})
export class SingleTeamComponent implements OnInit {
  equipos: Team[] = [];
  yearSelected = 0;
  years: number[] = [2022, 2021, 2020, 2019, 2018, 2017, 2016];


  constructor(private equiposService: EquiposService) { }

  @Input() singleTeam : Team = {} as Team;

  ngOnInit(): void {
    this.getAllTeams(2022)
  }

  getAllTeams(year: number) {
    this.equiposService.getTeams(year).subscribe((res) => {
      console.log(res);
      if (year == 2016 || year == 2017){
        this.equipos = [ ...res.league.standard];
      }else{
        this.equipos = [...res.league.africa, ...res.league.sacramento, ...res.league.standard, ...res.league.utah, ...res.league.vegas];
      }

    });
  }
  getTeamImg(team : Team){
    return `https://cdn.nba.com/logos/nba/${team.teamId}/global/L/logo.svg`
  }

}

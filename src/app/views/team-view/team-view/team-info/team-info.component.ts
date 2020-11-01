import { Component, OnInit } from '@angular/core';
import { TeamService } from '../../../../services/team.service';
import { TeamI } from '../../../../modules/team.interface';
import { PlayersI } from '../../../../modules/playersTeam.interface';
import { CompileTemplateMetadata } from '@angular/compiler';

@Component({
  selector: 'app-team-info',
  templateUrl: './team-info.component.html',
  styleUrls: ['./team-info.component.css'],
})
export class TeamInfoComponent implements OnInit {
  constructor(private team: TeamService) {}

  teamData: TeamI;
  playersTeam;

  name;

 /*Date Variable */
  foundationDate;
  foundationDateNew;
  DateNewOnly;
  DateNewOnlyToday;

  ngOnInit() {
    const id = this.team.getCurrentId();
    this.team.showTeam(id).subscribe((data) => {
      this.teamData = data['team'];
      this.name = this.teamData.name;
      this.foundationDate = (this.teamData.foundation_date).toString();
      this.formData(this.foundationDate);
    });
    this.team.getPlayers(id).subscribe(data =>{
      this.playersTeam = data['all players by team id'].length;
    });
  }

  formData(date){
  this.foundationDateNew = date.split('T');
  this.DateNewOnly = this.foundationDateNew[0].split('-');
  this.DateNewOnlyToday = this.DateNewOnly[2] + '-' + this.DateNewOnly[1] + '-' + this.DateNewOnly[0];
  }
}

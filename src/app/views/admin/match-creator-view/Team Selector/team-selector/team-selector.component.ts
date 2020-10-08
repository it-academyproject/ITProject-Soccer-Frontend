import { Component, Output, EventEmitter } from '@angular/core';
import { MatchcreatorService } from '../../../../../services/matchcreator.service';

@Component({
  selector: 'app-team-selector',
  templateUrl: './team-selector.component.html',
  styleUrls: ['./team-selector.component.css'],
})
export class TeamSelectorComponent {
  teams: any[] = [{}];
  teamLocal: number;
  teamVisitor: number;
  error: boolean;
  mensajeError: string;
  @Output() enviar: EventEmitter<[number, number]> = new EventEmitter<
    [number, number]
  >();

  constructor(private matchCreatorService: MatchcreatorService) {
    this.matchCreatorService.getTeams().subscribe(
      (data: any) => {
        console.log(data);
        this.teams = data;
        console.log(this.teams);
      },
      (errorServicio) => {
        this.error = true;
        console.log(errorServicio);
        this.mensajeError = errorServicio.error.error.message;
      }
    );
  }
  passTeams(local: number, visitor: number) {
    if (isNaN(local) && isNaN(visitor)) {
      local = null;
      visitor = null;
    } else if (isNaN(local)) {
      local = null;
    } else if (isNaN(visitor)) {
      visitor = null;
    }
      this.enviar.emit([local, visitor]);
  }
}

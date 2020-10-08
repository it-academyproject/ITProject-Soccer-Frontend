import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamViewComponent } from './team-view/team-view.component';
import { BadgeComponent } from './team-view/badge/badge.component';
import { TeamInfoComponent } from './team-view/team-info/team-info.component';
import { LastFiveResultsComponent } from './team-view/last-five-results/last-five-results.component';
import { BestPlayersLayoutComponent } from './team-view/best-players-layout/best-players-layout.component';

@NgModule({
  declarations: [
    TeamViewComponent,
    BadgeComponent,
    TeamInfoComponent,
    LastFiveResultsComponent,
    BestPlayersLayoutComponent,
  ],
  imports: [CommonModule],
  exports: [TeamViewComponent],
})
export class TeamViewModule {}

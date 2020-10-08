import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayerInfoComponent } from './single-player-view/player-info/player-info.component';
import { SkillsBarComponent } from './single-player-view/player-info/skills-bar/skills-bar.component';
import { PlayersViewComponent } from './players-view/players-view.component';
import { SinglePlayerViewComponent } from './single-player-view/single-player-view.component';
import { ManagersViewComponent } from './managers-view/managers-view.component';
import { SingleManagerViewComponent } from './single-manager-view/single-manager-view.component';
import { MatchCreatorViewComponent } from './match-creator-view/match-creator-view.component';

const routes: Routes = [
  { path: 'admin/players', component: PlayersViewComponent },
  { path: 'admin/player/:id', component: SinglePlayerViewComponent },
  { path: 'admin/player/skills', component: SkillsBarComponent },
  { path: 'admin/users', component: ManagersViewComponent },
  { path: 'admin/user/:id', component: SingleManagerViewComponent },
  { path: 'admin/matchcreator', component: MatchCreatorViewComponent },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}

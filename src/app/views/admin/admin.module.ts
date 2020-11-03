import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
/* ngx-bootstrap */
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
/* modules & components */
import { AdminRoutingModule } from './admin-routing.module';
import { UserListComponentComponent } from './managers-view/user-list-component/user-list-component.component';
import { ManagersViewComponent } from './managers-view/managers-view.component';
import { ManagerInfoComponent } from './single-manager-view/manager-info/manager-info.component';
import { SingleManagerViewComponent } from './single-manager-view/single-manager-view.component';
import { PlayerInfoComponent } from './single-player-view/player-info/player-info.component';
import { SkillsBarComponent } from './single-player-view/player-info/skills-bar/skills-bar.component';
import { PlayersViewComponent } from './players-view/players-view.component';
import { SinglePlayerViewComponent } from './single-player-view/single-player-view.component';
import { MatchCreatorViewComponent } from './match-creator-view/match-creator-view.component';
import { TeamSelectorComponent } from './match-creator-view/Team Selector/team-selector/team-selector.component';
import { PlayerCreatorViewComponent } from './player-creator-view/player-creator-view.component';
// pipes
import { NoimagePipe } from '../../pipes/noimage.pipe';

import {MatPaginatorModule} from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserCeatorViewComponent } from './user-ceator-view/user-ceator-view.component';


@NgModule({
  declarations: [
    PlayerInfoComponent,
    SkillsBarComponent,
    PlayersViewComponent,
    SinglePlayerViewComponent,
    UserListComponentComponent,
    ManagersViewComponent,
    ManagerInfoComponent,
    SingleManagerViewComponent,
    MatchCreatorViewComponent,
    TeamSelectorComponent,
    PlayerCreatorViewComponent,
    UserCeatorViewComponent,
    NoimagePipe,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    MatTableModule,
    BrowserAnimationsModule,
  ],
})
export class AdminModule {}

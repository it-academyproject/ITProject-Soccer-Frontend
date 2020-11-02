import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingViewComponent } from './views/landing-view/landing-view.component';
import { HeaderComponent } from './views/header/header.component';
import { NavbarComponent } from './views/header/navbar/navbar.component';
import { SignUpComponent } from './views/landing-view/sign-up/sign-up.component';
import { LandingFooterComponent } from './views/landing-view/landing-footer/landing-footer.component';
import { LandingInfoComponent } from './views/landing-view/landing-info/landing-info.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { LandingHeaderComponent } from './views/landing-view/landing-header/landing-header.component';
import { ForgotPasswordComponent } from './views/landing-view/landing-header/forgot-password/forgot-password.component';
import { AdminModule } from './views/admin/admin.module';
import { AdminNavbarComponent } from './views/header/admin-navbar/admin-navbar.component';
import { TeamViewModule } from './views/team-view/team-view.module';
import { DatePipe } from '@angular/common';

import { LineupComponent } from './views/lineup/lineup.component';
import {MatCardModule} from '@angular/material/card';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { MarketViewComponent } from './views/market-view/market-view.component';
import { SkillFilterComponent } from './views/market-view/skill-filter/skill-filter.component';
import { NoPlayerImagePipe } from './pipes/no-player-image.pipe';






@NgModule({
  declarations: [
    AppComponent,
    LandingViewComponent,
    SignUpComponent,
    LandingInfoComponent,
    PageNotFoundComponent,
    LandingFooterComponent,
    LandingHeaderComponent,
    ForgotPasswordComponent,
    HeaderComponent,
    NavbarComponent,
    AdminNavbarComponent,
    LineupComponent,
    MarketViewComponent,
    SkillFilterComponent,
    NoPlayerImagePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    AdminModule,
    TeamViewModule,
    MatCardModule,
    DragDropModule,

  ],
  providers: [
    DatePipe,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

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
import { HeaderComponent } from './views/landing-view/header/header.component';
import { ForgotPasswordComponent } from './views/landing-view/header/forgot-password/forgot-password.component';
import { LineupsViewComponent } from './views/lineups-view/lineups-view.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { LineupsElementComponent } from './views/lineups-view/lineups-element/lineups-element.component';
import { FieldComponent } from './views/lineups-view/field/field.component';
import { PlayerComponent } from './views/lineups-view/field/player/player.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { LandingHeaderComponent } from './views/landing-view/landing-header/landing-header.component';
import { ForgotPasswordComponent } from './views/landing-view/landing-header/forgot-password/forgot-password.component';
import { AdminModule } from './views/admin/admin.module';
import { AdminNavbarComponent } from './views/header/admin-navbar/admin-navbar.component';
import { TeamViewModule } from './views/team-view/team-view.module';
import { DatePipe } from '@angular/common';


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
    ForgotPasswordComponent,
    LineupsViewComponent,
    LineupsElementComponent,
    FieldComponent,
    PlayerComponent,
    NavbarComponent,
    AdminNavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    DragDropModule,
    MatExpansionModule,
    AdminModule,
    TeamViewModule,
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}

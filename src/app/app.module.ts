import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingViewComponent } from './views/landing-view/landing-view.component';
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
import { HoverStaticsComponent } from './views/lineups-view/field/player/hover-statics/hover-statics.component';
import { SectionFieldComponent } from './views/lineups-view/field/player/section-field/section-field.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingViewComponent,
    SignUpComponent,
    LandingInfoComponent,
    PageNotFoundComponent,
    LandingFooterComponent,
    HeaderComponent,
    ForgotPasswordComponent,
    LineupsViewComponent,
    LineupsElementComponent,
    FieldComponent,
    PlayerComponent,
    HoverStaticsComponent,
    SectionFieldComponent,
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
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

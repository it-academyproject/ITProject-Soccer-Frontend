import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingViewComponent } from './views/landing-view/landing-view.component';
<<<<<<< HEAD
import { MarketViewComponent } from './views/market-view/market-view.component';
import { SkillsFilterComponent } from './views/market-view/skills-filter/skills-filter.component';
import { ResultsFilterComponent } from './views/market-view/results-filter/results-filter.component';
import { BidComponent } from './views/market-view/bid/bid.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingViewComponent,
    MarketViewComponent,
    SkillsFilterComponent,
    ResultsFilterComponent,
    BidComponent
=======
import { SignUpComponent } from './views/landing-view/sign-up/sign-up.component';
import { LandingFooterComponent } from './views/landing-view/landing-footer/landing-footer.component';
import { LandingInfoComponent } from './views/landing-view/landing-info/landing-info.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { HeaderComponent } from './views/landing-view/header/header.component';
import { ForgotPasswordComponent } from './views/landing-view/header/forgot-password/forgot-password.component';


@NgModule({
  declarations: [
    AppComponent, 
    LandingViewComponent, 
    SignUpComponent,
    LandingInfoComponent, 
    PageNotFoundComponent,
    LandingFooterComponent,
    HeaderComponent,
    ForgotPasswordComponent
>>>>>>> fef07face37aa75191a1bb091fe4073f716a36da
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

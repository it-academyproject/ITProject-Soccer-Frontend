import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingViewComponent } from './views/landing-view/landing-view.component';
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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

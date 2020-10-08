import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'football-manager';
  showHeader = false;
  showH = false;

  router: any;
  constructor(private _router: Router) {
    this.router = _router;
  }
  ngOnInit() {}
  modifyHeader() {
    // This method is called many times

    console.log(this.router.url); // This prints a loot of routes on console
    if (this.router.url == '/landing' || this.router.url == '/') {
      this.showHeader = true;
      this.showH = false;
    } else {
      this.showHeader = false;
      this.showH = true;
    }
  }
}

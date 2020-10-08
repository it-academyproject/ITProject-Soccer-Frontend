import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlayerService } from './servicios/player.service';

@Component({
  selector: 'app-player-info',
  templateUrl: './player-info.component.html',
  styleUrls: ['./player-info.component.css'],
})
export class PlayerInfoComponent implements OnInit {
  player: any = {};

  constructor(
    private activatedRoute: ActivatedRoute,
    private _PlayerService: PlayerService
  ) {
    this.activatedRoute.params.subscribe((params) => {
      this.player = this._PlayerService.getPlayeri(params['id']);
      console.log(this.player);
    });
  }

  ngOnInit(): void {}
}

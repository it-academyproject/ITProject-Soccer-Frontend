import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../single-player-view/player-info/servicios/player.service';

@Component({
  selector: 'app-players-view',
  templateUrl: './players-view.component.html',
  styleUrls: ['./players-view.component.css'],
})
export class PlayersViewComponent implements OnInit {
  headers = ['Player Name', 'Team'];
  player: any = {};

  constructor(private _PlayerService: PlayerService) {}

  ngOnInit(): void {
    this.player = this._PlayerService.getPlayer();
    console.log(this.player);
  }
}

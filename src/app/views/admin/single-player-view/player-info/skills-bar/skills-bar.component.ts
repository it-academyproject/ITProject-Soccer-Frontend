import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlayerService } from '../servicios/player.service';

@Component({
  selector: 'app-skills-bar',
  templateUrl: './skills-bar.component.html',
  styleUrls: ['./skills-bar.component.css'],
})
export class SkillsBarComponent implements OnInit {
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
